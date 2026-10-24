"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const TAGLINE = "Every space begins with a thought."
const SEEN_KEY = "ebony-loader-seen"

type Phase = "loading" | "leaving" | "done"

/**
 * Brand intro: logo, a gold line that fills with progress, the tagline, and a counter.
 * Full length on the first visit of a session, a quick fade after that.
 * A CSS failsafe hides it even if JavaScript never runs.
 */
export function PageLoader() {
  const [phase, setPhase] = useState<Phase>("loading")
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let seen = false
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === "1"
    } catch {}

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const duration = seen || reduced ? 350 : 2100
    let pageLoaded = document.readyState === "complete"
    const onLoad = () => (pageLoaded = true)
    window.addEventListener("load", onLoad)

    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const elapsed = now - start
      // Hold at 90% until the page has loaded (never longer than 3.5s in total)
      const cap = pageLoaded || elapsed > 3500 ? 1 : 0.9
      const t = Math.min(elapsed / duration, cap)
      const eased = 1 - Math.pow(1 - t, 3)
      setProgress(Math.round(eased * 100))
      if (t < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        try {
          sessionStorage.setItem(SEEN_KEY, "1")
        } catch {}
        setPhase("leaving")
        window.setTimeout(() => setPhase("done"), 900)
      }
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("load", onLoad)
    }
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.style.overflow = phase === "loading" ? "hidden" : ""
    // Hold the hero's entrance animation until the curtain lifts
    if (phase === "loading") root.dataset.loading = "1"
    else delete root.dataset.loading
    return () => {
      root.style.overflow = ""
      delete root.dataset.loading
    }
  }, [phase])

  if (phase === "done") return null

  return (
    <div
      role="status"
      aria-label="Loading Ebony"
      className="ebony-loader fixed inset-0 z-[9999] bg-[#0A0D14] text-white flex flex-col"
      style={{
        clipPath: phase === "leaving" ? "inset(0 0 100% 0)" : "inset(0 0 0% 0)",
        transition: "clip-path 0.9s cubic-bezier(0.77, 0, 0.18, 1)",
      }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] max-w-[560px] h-[300px] bg-[#C5A572]/12 blur-[120px] rounded-full pointer-events-none" />

      <div
        className="relative flex-1 flex flex-col items-center justify-center px-6 text-center transition-all duration-700"
        style={{ opacity: phase === "leaving" ? 0 : 1, transform: phase === "leaving" ? "translateY(-24px)" : "none" }}
      >
        <Image
          src="/logo.png"
          alt="Ebony"
          width={180}
          height={52}
          priority
          className="rise-word object-contain brightness-150 w-[150px] sm:w-[180px] h-auto"
          style={{ animationDelay: "80ms" }}
        />

        {/* Gold line fills with progress */}
        <div className="mt-7 w-44 sm:w-56 h-[2px] rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full origin-left bg-gradient-to-r from-[#8E6D38] via-[#E0BA62] to-[#F5E6AB]"
            style={{ transform: `scaleX(${progress / 100})` }}
          />
        </div>

        <p className="mt-7 font-serif text-lg sm:text-2xl text-white/90" aria-hidden="true">
          {TAGLINE.split(" ").map((word, i) => (
            <span key={i} className="rise-word" style={{ animationDelay: `${350 + i * 110}ms` }}>
              {word}
              {" "}
            </span>
          ))}
        </p>
      </div>

      <div
        className="relative flex items-end justify-between px-6 sm:px-10 pb-8 sm:pb-10 transition-opacity duration-500"
        style={{ opacity: phase === "leaving" ? 0 : 1 }}
      >
        <span className="text-sm text-white/60">Raipur · Kitchens &amp; wardrobes</span>
        <span className="font-serif text-5xl sm:text-7xl text-[#D8B97F] tabular-nums leading-none">
          {progress}
          <span className="text-2xl sm:text-3xl text-white/50">%</span>
        </span>
      </div>
    </div>
  )
}
