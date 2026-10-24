"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { ArrowRight, Check, ChevronRight, RotateCcw } from "lucide-react"
import { BRAND } from "@/lib/content"
import { cn } from "@/lib/utils"
import {
  COUNTERS,
  DEFAULT_DESIGN,
  DOOR_FINISHES,
  SPLASHES,
  STUDIO_ASSETS,
  ZONES,
  swatchStyle,
  type Design,
  type Finish,
  type Shade,
  type ZoneId,
} from "./catalogue"
import type { KitchenScene } from "./scene"

const LOAD_STEPS = ["Loading the 3D kitchen", "Adding real wood and stone textures", "Setting the lights"]
const WHATSAPP_NUMBER = "917974209352"
const CABINET_ZONES: ZoneId[] = ["base", "wall", "tall"]

const initialViewFinish = () =>
  Object.fromEntries(ZONES.map((z) => [z.id, DEFAULT_DESIGN[z.id].f])) as Record<ZoneId, Finish>

export function KitchenStudio() {
  const [design, setDesign] = useState<Design>(DEFAULT_DESIGN)
  const [activeZone, setActiveZone] = useState<ZoneId>("base")
  // Which finish's shades the panel shows for each cabinet zone (can differ from the one applied)
  const [viewFinish, setViewFinish] = useState<Record<ZoneId, Finish>>(initialViewFinish)
  const [progress, setProgress] = useState(0)
  const [step, setStep] = useState(0)
  const [failed, setFailed] = useState(false)
  const [contextLost, setContextLost] = useState(false)
  const [sceneKey, setSceneKey] = useState(0)

  const hostRef = useRef<HTMLDivElement>(null)
  const hotspotRefs = useRef<Partial<Record<ZoneId, HTMLButtonElement | null>>>({})
  const sceneRef = useRef<KitchenScene | null>(null)
  const designRef = useRef(design)
  const zoneTabRefs = useRef<Partial<Record<ZoneId, HTMLButtonElement | null>>>({})

  useEffect(() => {
    designRef.current = design
  }, [design])

  const selectZone = useCallback((zone: ZoneId) => {
    setActiveZone(zone)
    setViewFinish((v) => ({ ...v, [zone]: designRef.current[zone].f }))
    zoneTabRefs.current[zone]?.scrollIntoView({ block: "nearest", inline: "center" })
  }, [])

  // Three.js loads only in the browser and only on this page; everything is released on unmount
  useEffect(() => {
    const host = hostRef.current
    if (!host) return
    let cancelled = false
    import("./scene")
      .then(({ createKitchenScene }) => {
        if (cancelled) return
        sceneRef.current = createKitchenScene(host, designRef.current, (zone) => hotspotRefs.current[zone] ?? null, {
          onProgress: setProgress,
          onStep: (n) => {
            setStep(n)
            setProgress([0, 82, 94, 100][n] ?? 100)
          },
          onFail: () => setFailed(true),
          onPick: selectZone,
          onContextLost: () => setContextLost(true),
        })
      })
      .catch(() => !cancelled && setFailed(true))
    return () => {
      cancelled = true
      sceneRef.current?.dispose()
      sceneRef.current = null
    }
  }, [sceneKey, selectZone])

  const reloadScene = () => {
    setProgress(0)
    setStep(0)
    setFailed(false)
    setContextLost(false)
    setSceneKey((k) => k + 1)
  }

  const pickShade = (zone: ZoneId, f: Finish, s: Shade) => {
    setDesign((d) => ({ ...d, [zone]: { f, s } }))
    sceneRef.current?.setZone(zone, f, s)
  }

  const applyToAllCabinets = () => {
    const { f, s } = design[activeZone]
    for (const zone of CABINET_ZONES) {
      if (zone === activeZone) continue
      pickShade(zone, f, s)
    }
    setViewFinish((v) => ({ ...v, base: f, wall: f, tall: f }))
  }

  const zone = ZONES.find((z) => z.id === activeZone)!
  const current = design[activeZone]
  const shownFinish = zone.kind === "door" ? viewFinish[activeZone] : zone.kind === "counter" ? COUNTERS : SPLASHES
  const ready = step >= 3
  const summaryLines = ZONES.map((z) => {
    const d = design[z.id]
    return `${z.name}: ${z.kind === "door" ? `${d.f.name}, ` : ""}${d.s.n}`
  })
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi EBONY, I would like this kitchen design:\n${summaryLines.join("\n")}\nPlease share the next steps.`
  )}`

  return (
    <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16 lg:pt-6">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_440px] gap-4 lg:gap-7 items-start">
        {/* 3D viewer */}
        <section
          aria-label="Your kitchen in 3D"
          className="sticky top-[77px] z-[5] lg:top-[84px] h-[54dvh] min-h-[300px] lg:h-[min(calc(100dvh-100px),860px)] lg:min-h-[420px] rounded-2xl lg:rounded-[20px] overflow-hidden bg-[#ECE8E1] shadow-[0_10px_30px_rgba(11,16,32,0.14)] lg:shadow-none"
        >
          <div ref={hostRef} key={sceneKey} className="absolute inset-0" />

          <div
            aria-hidden
            className={cn(
              "absolute inset-0 bg-cover bg-center transition-opacity duration-700 pointer-events-none",
              ready ? "opacity-0" : "opacity-100"
            )}
            style={{ backgroundImage: `url(${STUDIO_ASSETS}/poster.webp)` }}
          />

          <div className="absolute top-3.5 left-3.5 hidden sm:block rounded-full bg-white/95 px-3.5 py-2 text-[13px] text-slate-800 shadow-[0_2px_10px_rgba(11,16,32,0.12)] pointer-events-none">
            <b className="font-serif font-medium tracking-[0.12em] mr-1.5">EBONY</b>Tap a dot to change that part
          </div>
          <button
            type="button"
            onClick={() => sceneRef.current?.resetView()}
            aria-label="Reset view"
            className="absolute top-3.5 right-3.5 min-h-[40px] rounded-full bg-white/95 px-3.5 flex items-center gap-2 text-[13px] font-medium text-slate-900 shadow-[0_2px_10px_rgba(11,16,32,0.12)] active:scale-[0.97]"
          >
            <RotateCcw className="w-4 h-4" />
            <span className="hidden sm:inline">Reset view</span>
          </button>

          {/* Hotspots: the scene positions them every frame and marks them visible */}
          {ZONES.map((z) => (
            <button
              key={z.id}
              ref={(el) => {
                hotspotRefs.current[z.id] = el
              }}
              type="button"
              data-visible="false"
              aria-label={`Change ${z.name}`}
              onClick={() => selectZone(z.id)}
              className="group absolute left-0 top-0 -ml-[22px] -mt-[22px] w-11 h-11 place-items-center hidden data-[visible=true]:grid"
            >
              <span className="absolute w-[26px] h-[26px] rounded-full border-2 border-white/90 hotspot-pulse" aria-hidden />
              <span
                className={cn(
                  "relative w-[26px] h-[26px] rounded-full grid place-items-center shadow-[0_2px_10px_rgba(11,16,32,0.3)] transition-transform duration-200",
                  activeZone === z.id ? "bg-[#0B1020] scale-110" : "bg-white/95"
                )}
              >
                <span className={cn("w-[9px] h-[9px] rounded-full", activeZone === z.id ? "bg-white" : "bg-[#0B1020]")} />
              </span>
              <span
                className={cn(
                  "absolute left-1/2 bottom-[calc(100%+2px)] -translate-x-1/2 whitespace-nowrap rounded-lg bg-[#0B1020] px-2.5 py-1 text-[12px] font-medium text-white pointer-events-none transition-opacity",
                  activeZone === z.id ? "opacity-100" : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                )}
              >
                {z.name}
              </span>
            </button>
          ))}

          {!ready && !failed && !contextLost && (
            <div
              role="status"
              aria-live="polite"
              className="absolute inset-0 z-20 grid place-items-center p-6 bg-[#ECE8E1]/80 backdrop-blur-xl"
            >
              <div className="w-full max-w-[360px] flex flex-col items-center text-center">
                <p className="font-serif text-[34px] tracking-[0.32em] pl-[0.32em] text-[#0B1020]">EBONY</p>
                <p className="text-[11px] tracking-[0.3em] uppercase text-[#8A6A2F] mt-0.5">Modular Kitchens</p>
                <p className="mt-6 text-[15px] font-medium text-[#0B1020]">Setting up your kitchen</p>
                <div className="mt-3.5 w-full h-[3px] rounded-full bg-[#0B1020]/10 overflow-hidden">
                  <span
                    className="block h-full w-full bg-[#0B1020] origin-left transition-transform duration-300"
                    style={{ transform: `scaleX(${progress / 100})` }}
                  />
                </div>
                <p className="mt-2 text-[13px] text-[#5A5F6D] tabular-nums">{progress}%</p>
                <ol className="mt-5 w-full flex flex-col gap-2 text-left text-[13.5px]">
                  {LOAD_STEPS.map((label, i) => (
                    <li key={label} className={cn("flex items-center gap-2.5", i <= step ? "text-[#0B1020]" : "text-[#5A5F6D]")}>
                      <span
                        className={cn(
                          "w-4 h-4 rounded-full grid place-items-center shrink-0 border-[1.5px]",
                          i < step ? "bg-[#0B1020] border-[#0B1020] text-white" : "border-[#0B1020]/25",
                          i === step && "border-[#0B1020] border-r-transparent animate-spin"
                        )}
                      >
                        {i < step && <Check className="w-2.5 h-2.5" strokeWidth={3.5} />}
                      </span>
                      {label}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          )}

          {(failed || contextLost) && (
            <div className="absolute inset-0 z-20 grid place-items-center p-6 text-center bg-[#ECE8E1]">
              <div className="max-w-sm">
                <p className="font-serif text-2xl text-[#0B1020]">
                  {failed ? "The 3D kitchen could not load" : "The 3D view stopped"}
                </p>
                <p className="text-[15px] text-[#5A5F6D] mt-2">
                  {failed
                    ? "Please try again, or open this page in another browser."
                    : "Your device paused the 3D view to save memory. Your choices are kept."}
                </p>
                <button
                  type="button"
                  onClick={reloadScene}
                  className="mt-5 min-h-[44px] rounded-full bg-[#0B1020] px-6 text-white font-medium active:scale-[0.98]"
                >
                  Reload 3D view
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Design panel */}
        <aside className="flex flex-col gap-[18px] min-w-0">
          <div>
            <span className="kicker">Kitchen Studio</span>
            <h1 className="font-serif font-normal text-[clamp(30px,3.2vw,42px)] leading-[1.08] text-[#0B1020] mt-3 mb-1.5 text-balance">
              Design your <span className="text-[#8A6A2F]">dream kitchen</span>
            </h1>
            <p className="text-[15px] text-[#5A5F6D] max-w-[44ch]">
              Tap a dot on the kitchen or a part below, then choose its finish. Drag the picture to look around.
            </p>
          </div>

          <div role="tablist" aria-label="Kitchen parts" className="flex gap-2.5 overflow-x-auto no-scrollbar border-b border-[#E6E1D8]">
            {ZONES.map((z) => (
              <button
                key={z.id}
                ref={(el) => {
                  zoneTabRefs.current[z.id] = el
                }}
                type="button"
                role="tab"
                aria-selected={activeZone === z.id}
                onClick={() => selectZone(z.id)}
                className={cn(
                  "shrink-0 min-h-[44px] px-1 pt-2.5 pb-[11px] -mb-px border-b-[2.5px] text-[13.5px] transition-colors",
                  activeZone === z.id ? "border-[#0B1020] text-[#0B1020] font-semibold" : "border-transparent text-[#5A5F6D] font-medium"
                )}
              >
                {z.name}
              </button>
            ))}
          </div>

          <section aria-live="polite" className="rounded-[18px] bg-white ring-1 ring-[#E6E1D8] p-4 sm:p-[18px] flex flex-col gap-3.5">
            <div className="flex items-baseline justify-between gap-3">
              <h2 className="font-serif text-2xl text-[#0B1020]">{zone.name}</h2>
              {zone.kind === "door" && (
                <button
                  type="button"
                  onClick={applyToAllCabinets}
                  className="min-h-[36px] text-[13px] font-medium text-[#8A6A2F] underline underline-offset-[3px]"
                >
                  Use on all cabinets
                </button>
              )}
            </div>

            {zone.kind === "door" && (
              <div role="group" aria-label="Finish" className="flex gap-2 overflow-x-auto no-scrollbar">
                {DOOR_FINISHES.map((df) => (
                  <button
                    key={df.id}
                    type="button"
                    aria-pressed={df === shownFinish}
                    onClick={() => setViewFinish((v) => ({ ...v, [activeZone]: df }))}
                    className={cn(
                      "shrink-0 min-h-[40px] rounded-full px-3.5 text-[13px] font-medium border-[1.5px] transition-colors",
                      df === shownFinish ? "bg-[#0B1020] border-[#0B1020] text-white" : "bg-white border-[#E6E1D8] text-[#0B1020]"
                    )}
                  >
                    {df.name}
                  </button>
                ))}
              </div>
            )}

            <p className="text-[13.5px] text-[#5A5F6D]">{shownFinish.desc}</p>

            <div role="group" aria-label="Shades" className="grid grid-cols-3 gap-2.5 sm:gap-3">
              {shownFinish.shades.map((s) => {
                const on = current.s === s
                return (
                  <button
                    key={s.n}
                    type="button"
                    aria-pressed={on}
                    onClick={() => pickShade(activeZone, shownFinish, s)}
                    className="group flex flex-col gap-[7px] text-left min-w-0"
                  >
                    <span
                      className={cn(
                        "relative aspect-square rounded-xl shadow-[inset_0_0_0_1px_rgba(11,16,32,0.1)] transition-all duration-200 group-hover:-translate-y-0.5",
                        on && "ring-[2.5px] ring-[#C9A46C] ring-offset-2"
                      )}
                      style={swatchStyle(shownFinish, s)}
                    >
                      {on && (
                        <span className="absolute right-1.5 top-1.5 w-[22px] h-[22px] rounded-full bg-[#0B1020] text-white grid place-items-center">
                          <Check className="w-3 h-3" strokeWidth={3} />
                        </span>
                      )}
                    </span>
                    <span className="text-[13px] font-medium leading-tight text-[#0B1020]">{s.n}</span>
                    {zone.kind === "door" && <span className="-mt-1 text-[11.5px] text-[#5A5F6D]">{shownFinish.name}</span>}
                  </button>
                )
              })}
            </div>
          </section>

          <section className="rounded-[18px] bg-white ring-1 ring-[#E6E1D8] p-4 sm:p-[18px]">
            <h2 className="font-serif text-2xl text-[#0B1020] mb-1">Your design</h2>
            <div className="flex flex-col">
              {ZONES.map((z, i) => {
                const d = design[z.id]
                return (
                  <button
                    key={z.id}
                    type="button"
                    onClick={() => selectZone(z.id)}
                    className={cn(
                      "min-h-[52px] py-2.5 flex items-center gap-3 text-left",
                      i > 0 && "border-t border-[#E6E1D8]"
                    )}
                  >
                    <span className="w-8 h-8 rounded-lg shrink-0 shadow-[inset_0_0_0_1px_rgba(11,16,32,0.12)]" style={swatchStyle(d.f, d.s)} />
                    <span className="min-w-0 flex-1">
                      <span className="block text-[11.5px] uppercase tracking-[0.06em] text-[#5A5F6D]">{z.name}</span>
                      <span className="block text-sm text-[#0B1020] truncate">
                        {z.kind === "door" ? `${d.f.name} · ` : ""}
                        {d.s.n}
                      </span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-[#5A5F6D] shrink-0" />
                  </button>
                )
              })}
            </div>
          </section>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 min-h-[56px] rounded-full bg-[#0B1020] hover:bg-[#1A2238] text-white text-base font-semibold transition-colors active:scale-[0.99]"
          >
            Bring This Design to Life <ArrowRight className="w-[18px] h-[18px]" />
          </a>
          <p className="-mt-2 text-center text-sm text-[#5A5F6D]">
            or call <a href={`tel:${BRAND.phoneRaw}`} className="font-semibold text-[#0B1020]">{BRAND.phone}</a>
          </p>
          <p className="text-[12.5px] text-[#5A5F6D]">
            3D preview for ideas. Real finishes can look a little different on screen, so see the samples at our studio before you order.
          </p>
        </aside>
      </div>
    </div>
  )
}
