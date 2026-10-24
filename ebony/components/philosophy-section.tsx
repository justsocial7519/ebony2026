"use client"

import { useEffect, useRef } from "react"
import { PHILOSOPHY } from "@/lib/content"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Eyebrow
      gsap.fromTo(
        ".philosophy-eyebrow",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".philosophy-eyebrow",
            start: "top 85%",
          },
        }
      )

      // Heading words
      gsap.fromTo(
        ".philosophy-word",
        { y: 60, opacity: 0, rotateX: -40 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.9,
          stagger: 0.07,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".philosophy-heading",
            start: "top 80%",
          },
        }
      )

      // Body text
      gsap.fromTo(
        ".philosophy-body",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".philosophy-body",
            start: "top 85%",
          },
        }
      )

      // Hairline
      gsap.fromTo(
        ".philosophy-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".philosophy-line",
            start: "top 85%",
          },
        }
      )

      // Pillar cards stagger
      gsap.fromTo(
        ".pillar-card",
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".pillar-cards",
            start: "top 80%",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="section-padding bg-pearl relative overflow-hidden"
    >
      {/* Decorative letter */}
      <div
        className="absolute -top-8 right-6 font-serif pointer-events-none select-none"
        style={{
          fontSize: "clamp(8rem, 22vw, 22rem)",
          color: "rgba(184, 146, 58, 0.04)",
          lineHeight: 1,
        }}
      >
        E
      </div>

      <div className="max-w-[1200px] mx-auto">
        <div className="philosophy-eyebrow mb-10">
          <span className="eyebrow">{PHILOSOPHY.eyebrow}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left: Heading + Body */}
          <div>
            <div className="philosophy-heading">
              {PHILOSOPHY.heading.map((line, i) => (
                <div
                  key={i}
                  className="overflow-hidden"
                  style={{ perspective: "1000px" }}
                >
                  <p
                    className="philosophy-word text-heading-1"
                    style={{
                      color:
                        i === 1 ? "var(--gold-deep)" : "var(--ebony)",
                      transformOrigin: "bottom center",
                    }}
                  >
                    {line}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="philosophy-line mt-8 h-px origin-left"
              style={{
                background:
                  "linear-gradient(90deg, var(--gold), transparent)",
                width: "80%",
              }}
            />

            <p className="philosophy-body mt-6 text-body max-w-[440px]">
              {PHILOSOPHY.body}
            </p>

            <a
              href="#collections"
              className="mt-10 inline-flex items-center gap-3 group"
            >
              <span className="px-7 py-3 rounded bg-ebony text-pearl text-[13px] tracking-widest uppercase font-medium transition-all duration-300 group-hover:bg-gold-deep">
                Our Story
              </span>
              <span className="w-9 h-9 rounded-full flex items-center justify-center bg-gold/10 text-gold-deep transition-all duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>

          {/* Right: Pillars */}
          <div className="pillar-cards flex flex-col gap-8 md:mt-4">
            {PHILOSOPHY.pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="pillar-card flex gap-5 items-start group cursor-default"
              >
                <div className="shrink-0 mt-1 w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-medium tracking-wider bg-gold/10 text-gold-deep transition-all duration-300 group-hover:scale-110 group-hover:bg-gold/20">
                  {pillar.number}
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2 text-ebony transition-colors duration-300 group-hover:text-gold-deep">
                    {pillar.title}
                  </h3>
                  <p className="text-body text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
