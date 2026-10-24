// Three.js scene for the Kitchen Studio. Plain TypeScript with no UI framework: the React panel drives it through the returned handle.
import * as THREE from "three"
import { OrbitControls } from "three/addons/controls/OrbitControls.js"
import { GLTFLoader, type GLTF } from "three/addons/loaders/GLTFLoader.js"
import { MeshoptDecoder } from "three/addons/libs/meshopt_decoder.module.js"
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js"
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js"
import { RenderPass } from "three/addons/postprocessing/RenderPass.js"
import { GTAOPass } from "three/addons/postprocessing/GTAOPass.js"
import { OutputPass } from "three/addons/postprocessing/OutputPass.js"
import { SETS, STUDIO_ASSETS, ZONES, type Design, type Finish, type SetKey, type Shade, type ZoneId } from "./catalogue"

export type SceneCallbacks = {
  /** 0 to 100 while the model and textures load */
  onProgress: (pct: number) => void
  /** 1 = model loaded, 2 = finishes applied, 3 = first full-quality frame drawn */
  onStep: (step: number) => void
  onFail: () => void
  onPick: (zone: ZoneId) => void
  onContextLost: () => void
}

export type KitchenScene = {
  setZone: (zone: ZoneId, f: Finish, s: Shade) => void
  resetView: () => void
  dispose: () => void
}

type MaterialParams = {
  map: THREE.Texture | null
  normalMap: THREE.Texture | null
  roughnessMap: THREE.Texture | null
  roughness: number
  metalness: number
  clearcoat: number
  clearcoatRoughness: number
  envMapIntensity: number
  normalScale: number
}

const HOME = { pos: new THREE.Vector3(-0.4, 3.05, 3.35), target: new THREE.Vector3(-0.6, 2.1, -5) }
// Preferred screen spot (0..1) for each zone's hotspot, so dots spread out instead of bunching
const PREF: Record<ZoneId, [number, number]> = {
  wall: [0.42, 0.2],
  tall: [0.1, 0.42],
  splash: [0.66, 0.43],
  counter: [0.42, 0.6],
  base: [0.36, 0.72],
}

export function createKitchenScene(
  container: HTMLElement,
  initial: Design,
  getHotspot: (zone: ZoneId) => HTMLElement | null,
  cb: SceneCallbacks
): KitchenScene {
  const abort = new AbortController()
  let disposed = false
  const isPhone = matchMedia("(max-width: 1060px)").matches
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches

  /* ---------- renderer, scene, camera ---------- */
  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isPhone ? 1.5 : 1.75))
  renderer.toneMapping = THREE.NeutralToneMapping
  renderer.toneMappingExposure = 1
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.shadowMap.autoUpdate = false
  const canvas = renderer.domElement
  canvas.className = "block w-full h-full touch-none cursor-grab active:cursor-grabbing"
  container.prepend(canvas)
  const maxAniso = Math.min(8, renderer.capabilities.getMaxAnisotropy())

  const onContextLost = (event: Event) => {
    event.preventDefault()
    renderer.setAnimationLoop(null)
    cb.onContextLost()
  }
  canvas.addEventListener("webglcontextlost", onContextLost)

  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0xe7e2da)
  const pmrem = new THREE.PMREMGenerator(renderer)
  const envTexture = pmrem.fromScene(new RoomEnvironment(), 0.04).texture
  scene.environment = envTexture
  scene.environmentIntensity = 0.42
  scene.add(new THREE.HemisphereLight(0xfff4e6, 0x6b6157, 0.35))
  const key = new THREE.DirectionalLight(0xfff2e2, 1.15)
  key.position.set(5, 9, 7)
  key.castShadow = true
  key.shadow.mapSize.set(2048, 2048)
  Object.assign(key.shadow.camera, { left: -8, right: 8, top: 8, bottom: -8, near: 1, far: 30 })
  key.shadow.bias = -0.0004
  key.shadow.normalBias = 0.03
  key.shadow.radius = 4
  key.target.position.set(-1, 0, -3)
  scene.add(key, key.target)
  const fill = new THREE.PointLight(0xffe2bf, 0.55, 9, 1.6)
  fill.position.set(-0.8, 4.6, -3.2)
  scene.add(fill)

  const camera = new THREE.PerspectiveCamera(60, 1, 0.05, 60)
  camera.position.copy(HOME.pos)
  const controls = new OrbitControls(camera, canvas)
  controls.target.copy(HOME.target)
  controls.enableDamping = true
  controls.dampingFactor = 0.08
  controls.enablePan = false
  controls.minDistance = 3
  controls.maxDistance = 8.45
  controls.minPolarAngle = 1.15
  controls.maxPolarAngle = 1.62
  controls.minAzimuthAngle = -0.42
  controls.maxAzimuthAngle = 0.45
  controls.rotateSpeed = 0.55
  controls.zoomSpeed = 0.8
  controls.update()

  // Soft ambient occlusion is drawn only when the view is still; moving frames use the plain renderer
  const composer = new EffectComposer(renderer)
  composer.addPass(new RenderPass(scene, camera))
  const gtao = new GTAOPass(scene, camera, 1, 1)
  gtao.updateGtaoMaterial({ radius: 0.55, distanceExponent: 1.6, thickness: 1.2, scale: 1.1, samples: isPhone ? 12 : 16, distanceFallOff: 1 })
  gtao.updatePdMaterial({ lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 6, rings: 2, samples: 12 })
  gtao.blendIntensity = 0.9
  composer.addPass(gtao)
  composer.addPass(new OutputPass())

  let dirty = true
  let lastMove = 0
  let aoDone = false
  let ready = false
  const invalidate = () => {
    dirty = true
    aoDone = false
  }
  const onControlsChange = () => {
    lastMove = performance.now()
    invalidate()
  }
  controls.addEventListener("change", onControlsChange)

  const resize = () => {
    const w = container.clientWidth
    const h = container.clientHeight
    if (!w || !h) return
    renderer.setSize(w, h, false)
    composer.setSize(w, h)
    camera.aspect = w / h
    // Keep the whole kitchen in frame: aim for a fixed side-to-side view, within sensible limits
    const hf = THREE.MathUtils.degToRad(76)
    camera.fov = THREE.MathUtils.clamp(THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(hf / 2) / camera.aspect)), 46, 66)
    camera.updateProjectionMatrix()
    invalidate()
  }
  const resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(container)
  resize()

  /* ---------- textures and materials ---------- */
  const ownedTextures = new Set<THREE.Texture>()
  const texCache = new Map<string, Promise<THREE.Texture | null>>()
  const textureLoader = new THREE.TextureLoader()

  function loadTex(name: string, srgb: boolean) {
    let pending = texCache.get(name)
    if (!pending) {
      pending = new Promise((resolve) =>
        textureLoader.load(
          `${STUDIO_ASSETS}/tex/${name}.webp`,
          (t) => {
            t.wrapS = t.wrapT = THREE.RepeatWrapping
            t.anisotropy = maxAniso
            if (srgb) t.colorSpace = THREE.SRGBColorSpace
            ownedTextures.add(t)
            resolve(t)
          },
          undefined,
          () => resolve(null)
        )
      )
      texCache.set(name, pending)
    }
    return pending
  }

  async function loadSet(setKey: SetKey) {
    const s: { map: string; normal?: string; rough?: string; rep: number } = SETS[setKey]
    const [map, normal, rough] = await Promise.all([
      loadTex(s.map, true),
      s.normal ? loadTex(s.normal, false) : null,
      s.rough ? loadTex(s.rough, false) : null,
    ])
    const repeat = (t: THREE.Texture | null) => {
      if (!t) return null
      const c = t.clone()
      c.repeat.set(s.rep, s.rep)
      c.needsUpdate = true
      ownedTextures.add(c)
      return c
    }
    return { map: repeat(map), normal: repeat(normal), rough: repeat(rough) }
  }

  // Grooved normal map for the "Classic Carved" doors, drawn once on a canvas
  function grooveTextures() {
    const W = 512
    const H = 64
    const P = 32
    const make = () => Object.assign(document.createElement("canvas"), { width: W, height: H })
    const cn = make()
    const cc = make()
    const dn = cn.getContext("2d")!.createImageData(W, H)
    const dc = cc.getContext("2d")!.createImageData(W, H)
    for (let i = 0; i < W; i++) {
      const u = (i % P) / P
      let nx = 0
      let k = 1
      if (u > 0.16 && u < 0.84) {
        const v = (u - 0.5) / 0.34
        nx = v * 0.85
        k = 0.82 - 0.1 * v
      }
      if (Math.abs(u - 0.16) < 0.035 || Math.abs(u - 0.84) < 0.035) k = 0.68
      const nz = Math.sqrt(1 - nx * nx)
      for (let j = 0; j < H; j++) {
        const q = (j * W + i) * 4
        dn.data[q] = (nx * 0.5 + 0.5) * 255
        dn.data[q + 1] = 128
        dn.data[q + 2] = nz * 255
        dn.data[q + 3] = 255
        dc.data[q] = dc.data[q + 1] = dc.data[q + 2] = k * 255
        dc.data[q + 3] = 255
      }
    }
    cn.getContext("2d")!.putImageData(dn, 0, 0)
    cc.getContext("2d")!.putImageData(dc, 0, 0)
    const toTex = (c: HTMLCanvasElement, srgb: boolean) => {
      const t = new THREE.CanvasTexture(c)
      t.wrapS = t.wrapT = THREE.RepeatWrapping
      if (srgb) t.colorSpace = THREE.SRGBColorSpace
      t.repeat.set(5, 1)
      t.anisotropy = 8
      ownedTextures.add(t)
      return t
    }
    return { normal: toTex(cn, false), map: toTex(cc, true) }
  }
  const groove = grooveTextures()

  const MATS = Object.fromEntries(
    ZONES.map((z) => [z.id, new THREE.MeshPhysicalMaterial({ name: `zone:${z.id}`, roughness: 0.85 })])
  ) as Record<ZoneId, THREE.MeshPhysicalMaterial>
  const targetColor = Object.fromEntries(ZONES.map((z) => [z.id, new THREE.Color()])) as Record<ZoneId, THREE.Color>

  async function recipe(zone: ZoneId, f: Finish, s: Shade): Promise<MaterialParams> {
    const p: MaterialParams = {
      map: null,
      normalMap: null,
      roughnessMap: null,
      roughness: 0.85,
      metalness: 0,
      clearcoat: 0,
      clearcoatRoughness: 0.05,
      envMapIntensity: 1,
      normalScale: 1,
    }
    if (s.set) {
      const t = await loadSet(s.set)
      p.map = t.map
      p.normalMap = t.normal
      p.roughnessMap = t.rough
      p.roughness = t.rough ? 1 : 0.55
    }
    if (zone === "counter") {
      const wood = s.set === "oakl"
      p.roughness = wood ? 1 : p.roughnessMap ? 0.6 : 0.3
      p.clearcoat = wood ? 0.1 : 0.4
      p.clearcoatRoughness = 0.1
    } else if (zone === "splash") {
      if (s.set === "subway" || s.set === "square") {
        p.roughness = 0.7
        p.clearcoat = 0.7
        p.clearcoatRoughness = 0.06
      } else if (!s.set) p.roughness = 0.9
      else p.clearcoat = 0.3
    } else {
      switch (f.id) {
        case "matte": {
          const t = await loadSet("plaster")
          p.normalMap = t.normal
          p.normalScale = 0.35
          p.roughness = 0.84
          break
        }
        case "laminate":
          p.clearcoat = 0.12
          p.clearcoatRoughness = 0.4
          if (!p.roughnessMap) p.roughness = 0.58
          break
        case "gloss":
          p.roughness = 0.07
          p.clearcoat = 1
          p.clearcoatRoughness = 0.03
          p.envMapIntensity = 1.2
          break
        case "glass":
          p.roughness = s.frost ? 0.42 : 0.03
          p.metalness = s.frost ? 0 : 0.2
          p.clearcoat = 1
          p.clearcoatRoughness = s.frost ? 0.35 : 0.01
          p.envMapIntensity = 1.4
          break
        case "carved":
          p.normalMap = groove.normal
          p.normalScale = 1.6
          if (!s.set) {
            p.map = groove.map
            p.roughness = 0.66
          }
          break
        case "stone":
          p.clearcoat = 0.5
          p.clearcoatRoughness = 0.08
          break
        case "metal":
          p.metalness = 1
          p.roughness = p.roughnessMap ? 0.85 : 0.38
          p.envMapIntensity = 0.95
          break
        case "steel":
          p.metalness = 1
          p.roughness = p.roughnessMap ? 0.9 : 0.42
          p.envMapIntensity = 0.95
          break
      }
    }
    return p
  }

  function applyParams(zone: ZoneId, p: MaterialParams, s: Shade) {
    const m = MATS[zone]
    const before = [!!m.map, !!m.normalMap, !!m.roughnessMap].join()
    m.map = p.map
    m.normalMap = p.normalMap
    m.roughnessMap = p.roughnessMap
    m.roughness = p.roughness
    m.metalness = p.metalness
    m.clearcoat = p.clearcoat
    m.clearcoatRoughness = p.clearcoatRoughness
    m.envMapIntensity = p.envMapIntensity
    m.normalScale.set(p.normalScale, p.normalScale)
    if (before !== [!!m.map, !!m.normalMap, !!m.roughnessMap].join()) m.needsUpdate = true
    targetColor[zone].set(s.c)
  }

  /* ---------- finish changes: dim the part, swap the finish, bring it back up ---------- */
  const latest: Design = { ...initial }
  const fades: Partial<Record<ZoneId, { t0: number; p: MaterialParams; s: Shade; swapped: boolean; from: THREE.Color }>> = {}

  async function setZone(zone: ZoneId, f: Finish, s: Shade, instant = false) {
    latest[zone] = { f, s }
    const p = await recipe(zone, f, s)
    if (disposed || latest[zone].s !== s) return // a newer pick arrived while textures loaded
    if (instant || reduced || !ready) {
      applyParams(zone, p, s)
      MATS[zone].color.copy(targetColor[zone])
      invalidate()
      return
    }
    fades[zone] = { t0: performance.now(), p, s, swapped: false, from: MATS[zone].color.clone() }
    invalidate()
  }

  function stepFades(now: number) {
    let any = false
    for (const zone of Object.keys(fades) as ZoneId[]) {
      const fd = fades[zone]!
      any = true
      const t = (now - fd.t0) / 360
      const m = MATS[zone]
      if (t >= 0.45 && !fd.swapped) {
        applyParams(zone, fd.p, fd.s)
        fd.swapped = true
      }
      const k =
        t < 0.45 ? 1 - 0.55 * Math.sin(((t / 0.45) * Math.PI) / 2) : 0.45 + 0.55 * Math.sin((Math.min(1, (t - 0.45) / 0.55) * Math.PI) / 2)
      m.color.copy(fd.swapped ? targetColor[zone] : fd.from).multiplyScalar(k)
      if (t >= 1) {
        m.color.copy(targetColor[zone])
        delete fades[zone]
      }
    }
    return any
  }

  /* ---------- model ---------- */
  const pickables: THREE.Object3D[] = []
  const anchors: Partial<Record<ZoneId, THREE.Vector3>> = {}
  const zoneMeshes: Partial<Record<ZoneId, THREE.Mesh[]>> = {}
  const roomSurf: { floor: THREE.MeshStandardMaterial[]; wall: THREE.MeshStandardMaterial[] } = { floor: [], wall: [] }
  const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder)
  // Plain TextureLoader for embedded images, matching how the model was tested
  loader.register((parser) => {
    parser.textureLoader = new THREE.TextureLoader(parser.options.manager)
    return { name: "EBONY_img_textures" }
  })

  function worldBoxUV(geo: THREE.BufferGeometry, matrix: THREE.Matrix4, scale: number) {
    const pos = geo.attributes.position
    const nor = geo.attributes.normal
    const nm = new THREE.Matrix3().getNormalMatrix(matrix)
    const v = new THREE.Vector3()
    const n = new THREE.Vector3()
    const uv = new Float32Array(pos.count * 2)
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i).applyMatrix4(matrix)
      n.fromBufferAttribute(nor, i).applyMatrix3(nm)
      const ax = Math.abs(n.x)
      const ay = Math.abs(n.y)
      const az = Math.abs(n.z)
      let a: number
      let b: number
      if (ax >= ay && ax >= az) {
        a = v.z
        b = v.y
      } else if (ay >= az) {
        a = v.x
        b = v.z
      } else {
        a = v.x
        b = v.y
      }
      uv[i * 2] = a * scale
      uv[i * 2 + 1] = b * scale
    }
    geo.setAttribute("uv", new THREE.BufferAttribute(uv, 2))
  }

  const zoneOf = (c: THREE.Vector3): ZoneId => (c.x < -3.5 && c.z > -4.4 ? "tall" : c.y < 2.2 ? "base" : "wall")

  // The model has one cabinet material; split its triangles into base, wall and tall units
  function splitCabinets(mesh: THREE.Mesh) {
    mesh.updateWorldMatrix(true, false)
    const g = mesh.geometry.index ? mesh.geometry.toNonIndexed() : mesh.geometry
    const pos = g.attributes.position
    const nor = g.attributes.normal
    const nt = pos.count / 3
    const v = new THREE.Vector3()
    const c = new THREE.Vector3()
    const buckets: Record<"base" | "wall" | "tall", number[]> = { base: [], wall: [], tall: [] }
    for (let t = 0; t < nt; t++) {
      c.set(0, 0, 0)
      for (let k = 0; k < 3; k++) {
        v.fromBufferAttribute(pos, t * 3 + k).applyMatrix4(mesh.matrixWorld)
        c.add(v)
      }
      c.multiplyScalar(1 / 3)
      buckets[zoneOf(c) as "base" | "wall" | "tall"].push(t)
    }
    for (const [zone, tris] of Object.entries(buckets) as ["base" | "wall" | "tall", number[]][]) {
      if (!tris.length) continue
      const P = new Float32Array(tris.length * 9)
      const N = new Float32Array(tris.length * 9)
      tris.forEach((t, i) => {
        for (let k = 0; k < 3; k++) {
          v.fromBufferAttribute(pos, t * 3 + k)
          P.set([v.x, v.y, v.z], (i * 3 + k) * 3)
          v.fromBufferAttribute(nor, t * 3 + k)
          N.set([v.x, v.y, v.z], (i * 3 + k) * 3)
        }
      })
      const ng = new THREE.BufferGeometry()
      ng.setAttribute("position", new THREE.BufferAttribute(P, 3))
      ng.setAttribute("normal", new THREE.BufferAttribute(N, 3))
      worldBoxUV(ng, mesh.matrixWorld, 1)
      const m = new THREE.Mesh(ng, MATS[zone])
      m.position.copy(mesh.position)
      m.quaternion.copy(mesh.quaternion)
      m.scale.copy(mesh.scale)
      m.castShadow = m.receiveShadow = true
      mesh.parent!.add(m)
      pickables.push(m)
      ;(zoneMeshes[zone] ??= []).push(m)
    }
    if (g !== mesh.geometry) g.dispose()
    mesh.parent!.remove(mesh)
    mesh.geometry.dispose()
  }

  // Find a visible point on each zone's camera-facing surfaces to pin its hotspot to
  function anchorFor(meshes: THREE.Mesh[], zone: ZoneId) {
    const dir = HOME.target.clone().sub(HOME.pos).normalize()
    const pts: { p: THREE.Vector3; mesh: THREE.Mesh }[] = []
    const a = new THREE.Vector3()
    const b = new THREE.Vector3()
    const c = new THREE.Vector3()
    const n = new THREE.Vector3()
    let seed = 11
    const rnd = () => {
      seed = (seed * 16807) % 2147483647
      return (seed - 1) / 2147483646
    }
    for (const mesh of meshes) {
      mesh.updateWorldMatrix(true, false)
      const g = mesh.geometry
      const pos = g.attributes.position
      const nor = g.attributes.normal
      const nm = new THREE.Matrix3().getNormalMatrix(mesh.matrixWorld)
      const count = g.index ? g.index.count : pos.count
      const I = (i: number) => (g.index ? g.index.getX(i) : i)
      for (let i = 0; i < count; i += 3) {
        n.fromBufferAttribute(nor, I(i)).applyMatrix3(nm).normalize()
        if (n.dot(dir) > -0.3) continue
        a.fromBufferAttribute(pos, I(i)).applyMatrix4(mesh.matrixWorld)
        b.fromBufferAttribute(pos, I(i + 1)).applyMatrix4(mesh.matrixWorld)
        c.fromBufferAttribute(pos, I(i + 2)).applyMatrix4(mesh.matrixWorld)
        const area = b.clone().sub(a).cross(c.clone().sub(a)).length() / 2
        const k = Math.min(40, Math.round(area * 12))
        for (let j = 0; j < k; j++) {
          let u = rnd()
          let w = rnd()
          if (u + w > 1) {
            u = 1 - u
            w = 1 - w
          }
          pts.push({ p: a.clone().addScaledVector(b.clone().sub(a), u).addScaledVector(c.clone().sub(a), w), mesh })
        }
      }
    }
    for (let i = pts.length - 1; i > 0; i--) {
      const j = Math.floor(rnd() * (i + 1))
      ;[pts[i], pts[j]] = [pts[j], pts[i]]
    }
    const rc = new THREE.Raycaster()
    const solid = pickables.filter((o) => !((o as THREE.Mesh).material as THREE.Material)?.transparent)
    const seen: { p: THREE.Vector3; x: number; y: number }[] = []
    const ndc = new THREE.Vector3()
    camera.position.copy(HOME.pos)
    camera.lookAt(HOME.target)
    camera.updateMatrixWorld()
    for (const pt of pts.slice(0, 500)) {
      ndc.copy(pt.p).project(camera)
      if (Math.abs(ndc.x) > 0.94 || Math.abs(ndc.y) > 0.9 || ndc.z > 1) continue
      const d = pt.p.clone().sub(HOME.pos)
      const len = d.length()
      rc.set(HOME.pos, d.normalize())
      rc.far = len + 0.05
      const hit = rc.intersectObjects(solid, false)[0]
      if (hit && hit.object === pt.mesh && Math.abs(hit.distance - len) < 0.05) seen.push({ p: pt.p, x: ndc.x * 0.5 + 0.5, y: -ndc.y * 0.5 + 0.5 })
    }
    controls.update()
    if (!seen.length) return undefined
    const [px, py] = PREF[zone]
    const dd = (q: { x: number; y: number }) => (q.x - px) ** 2 + (q.y - py) ** 2
    return seen.reduce((best, q) => (dd(q) < dd(best) ? q : best)).p
  }

  function tune(m: THREE.MeshStandardMaterial) {
    const name = m.name || ""
    m.metalness = 0
    if (m.roughness > 0.95) m.roughness = 0.75
    if (/^(Chrome|chrome|Aluminum|Aluminium|Aluminium_Bright|Bright_Metal|Metal|Brushed_Metal1|Silver)/.test(name)) {
      m.metalness = 0.95
      m.roughness = name.startsWith("Brushed") ? 0.35 : 0.25
    } else if (name === "Black_Metal") {
      m.metalness = 0.6
      m.roughness = 0.45
    } else if (/Glass|glass/.test(name)) {
      m.transparent = true
      m.opacity = 0.14
      m.roughness = 0.04
      m.depthWrite = false
      m.color.set(0xeef3f3)
    } else if (name === "Light" || name === "White.001") {
      m.emissive = new THREE.Color(0xfff0d6)
      m.emissiveIntensity = 1.2
    } else if (name === "Floor") roomSurf.floor.push(m)
    else if (name === "OakWood") m.roughness = 0.62
    else if (name === "Onyx") m.roughness = 0.3
    else if (name === "White") {
      roomSurf.wall.push(m)
      m.color.set(0xf1ede6)
      m.roughness = 0.9
    } else if (name === "Black") m.roughness = 0.35
  }

  function placeHotspots() {
    const w = container.clientWidth
    const h = container.clientHeight
    const pv = new THREE.Vector3()
    for (const z of ZONES) {
      const el = getHotspot(z.id)
      const anchor = anchors[z.id]
      if (!el || !anchor) continue
      pv.copy(anchor).project(camera)
      const visible = pv.z < 1 && Math.abs(pv.x) < 0.95 && Math.abs(pv.y) < 0.92
      el.dataset.visible = String(visible)
      if (visible) el.style.transform = `translate(${((pv.x * 0.5 + 0.5) * w).toFixed(1)}px,${((-pv.y * 0.5 + 0.5) * h).toFixed(1)}px)`
    }
  }

  async function onModel(gltf: GLTF) {
    if (disposed) return
    const swaps: ["split" | "counter" | "splash", THREE.Mesh][] = []
    gltf.scene.traverse((o) => {
      const mesh = o as THREE.Mesh
      if (!mesh.isMesh) return
      mesh.castShadow = true
      mesh.receiveShadow = true
      const mats = (Array.isArray(mesh.material) ? mesh.material : [mesh.material]) as THREE.MeshStandardMaterial[]
      for (const m of mats) {
        if (m.name === "Closet") swaps.push(["split", mesh])
        else if (m.name === "Countertop") swaps.push(["counter", mesh])
        else if (m.name === "ClosetGlossy") swaps.push(["splash", mesh])
        else tune(m)
      }
      pickables.push(mesh)
    })
    scene.add(gltf.scene)
    gltf.scene.updateMatrixWorld(true)
    for (const [kind, mesh] of swaps) {
      if (kind === "split") splitCabinets(mesh)
      else {
        mesh.material = MATS[kind]
        const g = mesh.geometry.index ? mesh.geometry.toNonIndexed() : mesh.geometry.clone()
        mesh.geometry.dispose()
        mesh.geometry = g
        worldBoxUV(g, mesh.matrixWorld, 1)
        ;(zoneMeshes[kind] ??= []).push(mesh)
      }
    }
    scene.updateMatrixWorld(true)
    for (const [zone, meshes] of Object.entries(zoneMeshes) as [ZoneId, THREE.Mesh[]][]) anchors[zone] = anchorFor(meshes, zone)

    // A ceiling so the room reads as a real room
    const ceiling = new THREE.Mesh(
      new THREE.PlaneGeometry(14, 14),
      new THREE.MeshStandardMaterial({ color: 0xf7f5f1, roughness: 0.95, emissive: 0x3a3734 })
    )
    ceiling.rotation.x = Math.PI / 2
    ceiling.position.set(-0.4, 5.405, -1.6)
    ceiling.receiveShadow = true
    scene.add(ceiling)
    ready = true
    cb.onStep(1)

    // Floor and walls get real textures too, mapped at true size
    gltf.scene.traverse((o) => {
      const mesh = o as THREE.Mesh
      if (!mesh.isMesh || !mesh.geometry.attributes.normal) return
      const mats = (Array.isArray(mesh.material) ? mesh.material : [mesh.material]) as THREE.MeshStandardMaterial[]
      if (mats.some((m) => roomSurf.floor.includes(m) || roomSurf.wall.includes(m))) {
        const g = mesh.geometry.index ? mesh.geometry.toNonIndexed() : mesh.geometry.clone()
        mesh.geometry.dispose()
        mesh.geometry = g
        worldBoxUV(g, mesh.matrixWorld, 1)
      }
    })
    const room = Promise.all([loadSet("marblew"), loadSet("plaster")]).then(([floorTex, plasterTex]) => {
      for (const m of roomSurf.floor) {
        m.map = floorTex.map
        m.roughnessMap = floorTex.rough
        m.roughness = 0.55
        m.color.set(0xf4f1ec)
        m.envMapIntensity = 0.8
        m.needsUpdate = true
      }
      for (const m of roomSurf.wall) {
        m.normalMap = plasterTex.normal
        m.normalScale.set(0.4, 0.4)
        m.needsUpdate = true
      }
    })
    await Promise.all([room, ...ZONES.map((z) => setZone(z.id, latest[z.id].f, latest[z.id].s, true))])
    if (disposed) return
    cb.onStep(2)
    renderer.shadowMap.needsUpdate = true
    placeHotspots()
    invalidate()
    // Let the first full-quality picture draw before the loading screen fades
    window.setTimeout(() => {
      if (disposed) return
      composer.render()
      aoDone = true
      cb.onStep(3)
    }, 400)
  }

  async function fetchModel(url: string) {
    const res = await fetch(url, { signal: abort.signal })
    if (!res.ok) throw new Error(`${url} ${res.status}`)
    const total = Number(res.headers.get("content-length")) || 0
    let buffer: ArrayBuffer
    if (res.body && total) {
      const reader = res.body.getReader()
      const parts: Uint8Array[] = []
      let got = 0
      for (;;) {
        const { done, value } = await reader.read()
        if (done) break
        parts.push(value)
        got += value.length
        cb.onProgress(Math.round((got / total) * 80))
      }
      const all = new Uint8Array(got)
      let offset = 0
      for (const part of parts) {
        all.set(part, offset)
        offset += part.length
      }
      buffer = all.buffer
    } else buffer = await res.arrayBuffer()
    return loader.parseAsync(buffer, "")
  }

  ;(async () => {
    let wasm = false
    try {
      await WebAssembly.instantiate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0]))
      wasm = true
    } catch {}
    const urls = wasm ? ["kitchen.glb", "kitchen-plain.glb"] : ["kitchen-plain.glb"]
    for (const name of urls) {
      try {
        const gltf = await fetchModel(`${STUDIO_ASSETS}/${name}`)
        await onModel(gltf)
        return
      } catch (error) {
        if (disposed) return
        console.error("Kitchen Studio model failed to load:", name, error)
      }
    }
    if (!disposed) cb.onFail()
  })()

  /* ---------- render loop: fast while moving, full quality (soft corner shadows) when still ---------- */
  let camTween: { t0: number; p: THREE.Vector3; t: THREE.Vector3 } | null = null
  renderer.setAnimationLoop((now: number) => {
    const moving = controls.update()
    const fading = stepFades(now)
    if (camTween) {
      const t = Math.min(1, (now - camTween.t0) / 700)
      const k = 1 - Math.pow(1 - t, 3)
      camera.position.lerpVectors(camTween.p, HOME.pos, k)
      controls.target.lerpVectors(camTween.t, HOME.target, k)
      if (t >= 1) camTween = null
      lastMove = now
      invalidate()
    }
    const still = now - lastMove > 220 && !fading && !camTween
    if (dirty || moving || fading) {
      renderer.render(scene, camera)
      dirty = false
      aoDone = false
      placeHotspots()
    } else if (still && !aoDone && ready) {
      composer.render()
      aoDone = true
    }
  })

  /* ---------- tap a surface to pick that part ---------- */
  const ray = new THREE.Raycaster()
  const pointer = new THREE.Vector2()
  let down: { x: number; y: number } | null = null
  const onPointerDown = (e: PointerEvent) => {
    down = { x: e.clientX, y: e.clientY }
  }
  const onPointerUp = (e: PointerEvent) => {
    if (!down || !ready || Math.hypot(e.clientX - down.x, e.clientY - down.y) > 6) return
    down = null
    const r = canvas.getBoundingClientRect()
    pointer.set(((e.clientX - r.left) / r.width) * 2 - 1, (-(e.clientY - r.top) / r.height) * 2 + 1)
    ray.setFromCamera(pointer, camera)
    const hit = ray.intersectObjects(pickables, false)[0]
    if (!hit) return
    const mesh = hit.object as THREE.Mesh
    const m = (Array.isArray(mesh.material) ? mesh.material[hit.face?.materialIndex ?? 0] : mesh.material) as THREE.Material
    if (m.name?.startsWith("zone:")) cb.onPick(m.name.slice(5) as ZoneId)
  }
  canvas.addEventListener("pointerdown", onPointerDown)
  canvas.addEventListener("pointerup", onPointerUp)

  return {
    setZone: (zone, f, s) => void setZone(zone, f, s),
    resetView: () => {
      camTween = { t0: performance.now(), p: camera.position.clone(), t: controls.target.clone() }
    },
    dispose: () => {
      disposed = true
      abort.abort()
      renderer.setAnimationLoop(null)
      resizeObserver.disconnect()
      controls.removeEventListener("change", onControlsChange)
      controls.dispose()
      canvas.removeEventListener("pointerdown", onPointerDown)
      canvas.removeEventListener("pointerup", onPointerUp)
      canvas.removeEventListener("webglcontextlost", onContextLost)
      scene.traverse((o) => {
        const mesh = o as THREE.Mesh
        if (!mesh.isMesh) return
        mesh.geometry.dispose()
        const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material]
        for (const m of mats) {
          for (const value of Object.values(m)) if (value instanceof THREE.Texture) value.dispose()
          m.dispose()
        }
      })
      Object.values(MATS).forEach((m) => m.dispose())
      ownedTextures.forEach((t) => t.dispose())
      envTexture.dispose()
      pmrem.dispose()
      gtao.dispose()
      composer.dispose()
      renderer.dispose()
      renderer.forceContextLoss()
      canvas.remove()
    },
  }
}
