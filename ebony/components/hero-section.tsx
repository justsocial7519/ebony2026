"use client"

import { Fragment, useState, useRef, useEffect } from "react"
import type { CSSProperties } from "react"
import Link from "next/link"
import { ArrowRight, Volume2, VolumeX } from "lucide-react"
import { openEnquiryModal } from "@/components/enquiry-modal"
import { HOME_CONTENT } from "@/lib/home-content"

function TrustPromise({ title, line }: { title: string; line: string }) {
  return (
    <div className="text-center px-3 py-6 sm:py-8">
      <div className="font-serif text-[1.2rem] sm:text-2xl lg:text-[1.65rem] leading-snug font-normal tracking-tight text-[#D8B97F] text-balance">
        {title}
      </div>
      <div className="text-white/80 text-sm sm:text-[15px] mt-2 leading-snug">{line}</div>
    </div>
  )
}

// Hero title timing (ms). Words rise in one after another; once the last one settles, a soft sheen
// sweeps across the gold line word by word and a thin gold rule draws in beneath it.
const WORD_STEP = 110
const TITLE_START = 300
const WORD_RISE = 1000

/** Splits a line into words that rise and unblur one after another. Spaces sit between the words so lines wrap normally. */
function RisingWords({
  text,
  startDelay,
  sheenDelay,
}: {
  text: string
  startDelay: number
  /** When set, each word also gets a light sheen that starts at this time and passes from word to word */
  sheenDelay?: number
}) {
  const words = text.split(" ")
  return (
    <>
      {words.map((word, i) => {
        const style: CSSProperties & { "--sheen-delay"?: string } = {
          animationDelay: `${startDelay + i * WORD_STEP}ms`,
        }
        if (sheenDelay !== undefined) style["--sheen-delay"] = `${sheenDelay + i * 120}ms`
        return (
          <Fragment key={`${word}-${i}`}>
            <span
              className={sheenDelay === undefined ? "rise-word" : "rise-word hero-sheen"}
              data-text={sheenDelay === undefined ? undefined : word}
              style={style}
            >
              {word}
            </span>
            {i < words.length - 1 && " "}
          </Fragment>
        )
      })}
    </>
  )
}

export function HeroSection() {
  const { eyebrow, title, accent, subtitle, primaryCta, secondaryCta } = HOME_CONTENT.hero
  const [isMuted, setIsMuted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = false
    const playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsMuted(false))
        .catch(() => {
          // Browser blocked sound on autoplay: play muted, then turn sound on at the first tap or click
          video.muted = true
          setIsMuted(true)
          video.play().catch(() => {})

          const unmuteOnInteraction = () => {
            if (videoRef.current) {
              videoRef.current.muted = false
              setIsMuted(false)
            }
          }

          window.addEventListener("click", unmuteOnInteraction, { once: true })
          window.addEventListener("touchstart", unmuteOnInteraction, { once: true })
          window.addEventListener("keydown", unmuteOnInteraction, { once: true })
        })
    }
  }, [])

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!videoRef.current) return
    const next = !isMuted
    videoRef.current.muted = next
    setIsMuted(next)
  }

  const titleWords = title.split(" ").length
  const accentStart = TITLE_START + titleWords * WORD_STEP
  // The sheen starts just after the last gold word has finished rising
  const sheenStart = accentStart + (accent.split(" ").length - 1) * WORD_STEP + WORD_RISE + 150

  return (
    <div className="relative w-full overflow-hidden bg-[#0A0D14] text-white">
      <section id="hero" className="relative min-h-[100svh] w-full flex flex-col overflow-hidden">
        {/* Background video with a slow, breathing zoom */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            ref={videoRef}
            src="/hero-video.mp4"
            poster="/img/hero-kitchen.jpg"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover animate-slow-zoom brightness-[0.62] contrast-[1.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-black/35 to-black/70" />
        </div>

        <div className="pt-28 sm:pt-32" />

        <div className="relative z-10 max-w-5xl mx-auto w-full px-5 sm:px-8 pb-24 flex-1 flex flex-col justify-center items-center text-center">
          <span
            className="rise-word inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-7 text-[13px] sm:text-sm font-medium tracking-wide text-white/90"
            style={{ animationDelay: "150ms" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#D8B97F] animate-pulse" />
            {eyebrow}
          </span>

          <h1 className="font-serif text-[2.6rem] leading-[1.08] sm:text-6xl md:text-7xl lg:text-[5.25rem] text-white font-normal tracking-tight mb-9 sm:mb-10 text-balance">
            <RisingWords text={title} startDelay={TITLE_START} />{" "}
            <br className="hidden sm:block" />
            <span className="relative inline-block text-[#D8B97F]">
              <RisingWords text={accent} startDelay={accentStart} sheenDelay={sheenStart} />
              <span
                aria-hidden="true"
                className="hero-underline absolute inset-x-[6%] -bottom-[0.24em] h-[1.5px] sm:h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#D8B97F] to-transparent"
                style={{ animationDelay: `${sheenStart + 150}ms` }}
              />
            </span>
          </h1>

          <p
            className="rise-word text-white/90 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
            style={{ animationDelay: "900ms" }}
          >
            {subtitle}
          </p>

          <div
            className="rise-word flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto"
            style={{ animationDelay: "1100ms" }}
          >
            <Link
              href={primaryCta.href}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#C5A572] hover:bg-[#D4B582] text-slate-950 text-[15px] font-semibold transition-all duration-300 shadow-xl shadow-amber-500/20 active:scale-95"
            >
              <span>{primaryCta.label}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <button
              onClick={() => openEnquiryModal({ category: "Designer home visit" })}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md text-white text-[15px] font-semibold transition-all duration-300 active:scale-95 cursor-pointer"
            >
              {secondaryCta.label}
            </button>
          </div>
        </div>

        {/* Small sound toggle — the only control left on the video */}
        <button
          onClick={toggleMute}
          className="absolute z-10 bottom-6 left-5 sm:left-8 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-colors cursor-pointer"
          aria-label={isMuted ? "Turn sound on" : "Turn sound off"}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#D8B97F]" />}
        </button>

        {/* Scroll cue */}
        <div className="absolute z-10 bottom-7 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center" aria-hidden="true">
          <span className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center pt-2">
            <span className="w-1 h-2 rounded-full bg-[#D8B97F] animate-bounce" />
          </span>
        </div>
      </section>

      {/* Trust strip */}
      <div className="relative z-20 border-t border-white/10 bg-[#0A0D14]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 [&>*:nth-child(2)]:border-l [&>*:nth-child(2)]:border-white/10 md:[&>*:nth-child(2)]:border-l-0">
            {HOME_CONTENT.trustStrip.map((s) => (
              <TrustPromise key={s.title} title={s.title} line={s.line} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
