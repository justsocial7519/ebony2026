"use client"

import React, { useEffect, useRef, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Pause } from "lucide-react"

const TOTAL_FRAMES = 40
const FRAME_PAD = (num: number) => String(num).padStart(3, "0")

const CHAPTERS = [
  { range: [0, 0.25], num: "01", title: "The Architectural Thought", tag: "Raipur Studio Design" },
  { range: [0.25, 0.5], num: "02", title: "German CNC Precision", tag: "Precision Tolerances" },
  { range: [0.5, 0.75], num: "03", title: "Bespoke Finishes", tag: "Italian PU & Veneer" },
  { range: [0.75, 1.0], num: "04", title: "Clean Home Handover", tag: "Low-Dust Handover" },
]

export function ScrollStoryCanvas() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imagesRef = useRef<HTMLImageElement[]>([])
  const [currentFrame, setCurrentFrame] = useState(1)
  const [progress, setProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const animFrameId = useRef<number | null>(null)

  // Preload images into memory
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = []
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image()
      img.src = `/hero/ezgif-frame-${FRAME_PAD(i)}.jpg`
      loadedImages.push(img)
    }
    imagesRef.current = loadedImages

    return () => {
      imagesRef.current = []
    }
  }, [])

  // Render frame to canvas
  const renderFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const img = imagesRef.current[frameIndex - 1]
    if (!img || !img.complete) return

    const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1
    const width = canvas.clientWidth
    const height = canvas.clientHeight

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
    }

    const imgRatio = img.naturalWidth / img.naturalHeight
    const canvasRatio = width / height
    let drawWidth = width
    let drawHeight = height
    let offsetX = 0
    let offsetY = 0

    if (canvasRatio > imgRatio) {
      drawHeight = width / imgRatio
      offsetY = (height - drawHeight) / 2
    } else {
      drawWidth = height * imgRatio
      offsetX = (width - drawWidth) / 2
    }

    ctx.clearRect(0, 0, width, height)
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight)
  }, [])

  // Sync scroll with frame sequence
  useEffect(() => {
    const handleScroll = () => {
      if (isPlaying) return
      const container = containerRef.current
      if (!container) return

      const rect = container.getBoundingClientRect()
      const totalScrollable = container.offsetHeight - window.innerHeight
      if (totalScrollable <= 0) return

      const scrolled = -rect.top
      const rawProgress = Math.max(0, Math.min(1, scrolled / totalScrollable))
      setProgress(rawProgress)

      const targetFrame = Math.max(
        1,
        Math.min(TOTAL_FRAMES, Math.floor(rawProgress * (TOTAL_FRAMES - 1)) + 1)
      )
      setCurrentFrame(targetFrame)
      renderFrame(targetFrame)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", () => renderFrame(currentFrame), { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isPlaying, currentFrame, renderFrame])

  // Initial paint
  useEffect(() => {
    const initialImg = imagesRef.current[0]
    if (initialImg) {
      if (initialImg.complete) {
        renderFrame(1)
      } else {
        initialImg.onload = () => renderFrame(1)
      }
    }
  }, [renderFrame])

  // Auto-play loop
  useEffect(() => {
    if (!isPlaying) {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current)
      return
    }

    let lastTime = performance.now()
    const frameRate = 1000 / 20

    const loop = (now: number) => {
      if (now - lastTime >= frameRate) {
        lastTime = now
        setCurrentFrame((prev) => {
          const next = prev >= TOTAL_FRAMES ? 1 : prev + 1
          setProgress((next - 1) / (TOTAL_FRAMES - 1))
          renderFrame(next)
          return next
        })
      }
      animFrameId.current = requestAnimationFrame(loop)
    }

    animFrameId.current = requestAnimationFrame(loop)
    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current)
    }
  }, [isPlaying, renderFrame])

  const activeChapter =
    CHAPTERS.find((c) => progress >= c.range[0] && progress <= c.range[1]) ||
    CHAPTERS[0]

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-white"
      style={{ height: "220vh" }}
      id="scroll-story"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-6 px-4 md:px-12">
        {/* Top Minimal Status */}
        <div className="relative z-20 max-w-7xl mx-auto w-full flex items-center justify-between pt-16 md:pt-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-slate-800 font-semibold">
              Frame Storytelling · {String(currentFrame).padStart(2, "0")} / {TOTAL_FRAMES}
            </span>
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 border border-slate-200 text-xs font-mono uppercase tracking-wider text-slate-800 hover:bg-slate-100 transition-colors shadow-sm"
          >
            {isPlaying ? <Pause className="w-3 h-3 text-amber-700" /> : <Play className="w-3 h-3 text-amber-700" />}
            <span>{isPlaying ? "Pause" : "Play"}</span>
          </button>
        </div>

        {/* Cinematic Canvas Centerpiece */}
        <div className="absolute inset-0 flex items-center justify-center">
          <canvas ref={canvasRef} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/60 pointer-events-none" />
        </div>

        {/* Minimal Understated Floating Caption Bar */}
        <div className="relative z-20 max-w-7xl mx-auto w-full pb-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeChapter.num}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-xl px-6 py-4 shadow-lg max-w-md"
              >
                <div className="flex items-center gap-2 font-mono text-[13px] text-amber-700 font-bold uppercase tracking-wider mb-1">
                  <span>{activeChapter.num}</span>
                  <span>·</span>
                  <span>{activeChapter.tag}</span>
                </div>
                <h3 className="font-serif text-2xl text-slate-900 font-normal">
                  {activeChapter.title}
                </h3>
              </motion.div>
            </AnimatePresence>

            {/* Micro Slider */}
            <div className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-lg px-4 py-2.5 shadow-sm flex items-center gap-3 w-full max-w-xs">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Scrub</span>
              <input
                type="range"
                min={1}
                max={TOTAL_FRAMES}
                value={currentFrame}
                onChange={(e) => {
                  const f = Number(e.target.value)
                  setCurrentFrame(f)
                  setProgress((f - 1) / (TOTAL_FRAMES - 1))
                  renderFrame(f)
                }}
                className="w-full accent-amber-600 h-1 bg-slate-200 rounded cursor-pointer"
              />
              <span className="text-xs font-mono font-bold text-slate-900 min-w-[20px]">
                {currentFrame}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
