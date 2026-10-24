"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { PROCESS_STEPS } from "@/lib/content"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(
        ".process-header",
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".process-header",
            start: "top 85%",
          },
        }
      )

      // Process cards
      gsap.fromTo(
        ".process-card",
        { y: 48, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".process-cards",
            start: "top 80%",
          },
        }
      )

      // Image
      gsap.fromTo(
        ".process-image",
        { clipPath: "inset(0 0 100% 0)" },
        {
          clipPath: "inset(0 0 0% 0)",
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".process-image",
            start: "top 80%",
          },
        }
      )

      // Stats
      gsap.fromTo(
        ".process-stat",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".process-stats",
            start: "top 85%",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="process"
      className="section-padding section-mist relative overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="process-header mb-16 text-center">
          <span className="eyebrow mb-5 inline-flex mx-auto">
            Our Process
          </span>
          <h2 className="text-heading-1 text-ebony mt-4">
            Precision meets{" "}
            <span className="text-gold-deep">artistry.</span>
          </h2>
          <p className="text-body mt-6 mx-auto max-w-lg">
            Watch how every module comes together — engineered in Germany,
            assembled with care, designed for your life.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Image */}
          <div
            className="process-image relative aspect-[4/3] rounded overflow-hidden"
            style={{ clipPath: "inset(0 0 100% 0)" }}
          >
            <Image
              src="/img/process-engineering.jpg"
              alt="State-of-the-art manufacturing facility for modular furniture"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
            <div className="absolute inset-0 border border-gold/10 rounded pointer-events-none" />
          </div>

          {/* Right: Steps */}
          <div className="process-cards flex flex-col">
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={step.number}
                className="process-card group flex gap-6 py-8 border-b border-hair last:border-b-0 cursor-default transition-all duration-300"
              >
                {/* Step number */}
                <div className="shrink-0 flex flex-col items-center">
                  <span className="font-serif text-3xl text-gold/30 group-hover:text-gold-deep transition-colors duration-300">
                    {step.number}
                  </span>
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="w-px flex-1 mt-4 bg-gradient-to-b from-hair to-transparent" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <h3 className="font-serif text-xl text-ebony group-hover:text-gold-deep transition-colors duration-300">
                      {step.title}
                    </h3>
                    <span className="font-mono text-xs tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-gold/8 text-gold-deep opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {step.stat}
                    </span>
                  </div>
                  <p className="text-body text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom stats */}
        <div className="process-stats flex flex-wrap justify-center gap-12 md:gap-20 mt-16 pt-12 border-t border-hair">
          {[
            { value: "Own factory", label: "Made in Raipur" },
            { value: "Finishes", label: "To touch first" },
            { value: "Clean fitting", label: "By our own team" },
          ].map((stat) => (
            <div key={stat.label} className="process-stat text-center">
              <p className="font-serif text-3xl md:text-4xl text-gold-deep mb-1">
                {stat.value}
              </p>
              <p className="font-mono text-xs tracking-[0.15em] uppercase text-graphite">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
