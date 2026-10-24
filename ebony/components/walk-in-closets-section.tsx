"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Sparkles } from "lucide-react"
import { WALK_IN_CLOSETS } from "@/lib/content"

export function WalkInClosetsSection() {
  return (
    <section id="walk-in-closets-section" className="relative bg-[#0F1420] text-white py-24 sm:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-800/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#B8923A]" />
              <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#B8923A] font-bold">
                Dressing Suites & Sanctuaries
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.1] tracking-tight">
              Walk-in Closets.
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-white/70 max-w-md font-normal leading-relaxed">
            Haute dressing suites featuring smoked bronze vitrines, vertical LED channels, anti-tarnish velvet jewelry organizers, and full-height shoe displays.
          </p>
        </div>

        {/* Configurations Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WALK_IN_CLOSETS.map((closet, idx) => (
            <div
              key={closet.id}
              className="group bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-[#B8923A]/50 transition-all duration-500 flex flex-col justify-between"
            >
              <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                <Image
                  src={closet.image}
                  alt={closet.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-95"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#B8923A] font-bold">
                    Suite 0{idx + 1}
                  </span>
                </div>
              </div>

              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-normal mb-3">
                    {closet.name}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-white/70 font-normal leading-relaxed mb-6">
                    {closet.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-mono text-amber-400">
                    <Sparkles className="w-3 h-3" />
                    <span>Bespoke Illumination</span>
                  </span>
                  <Link
                    href="/walk-in-closets"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#B8923A] hover:text-slate-950 flex items-center justify-center transition-colors"
                    aria-label={`Learn more about ${closet.name}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-white/10 via-white/5 to-transparent border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-2xl text-white font-normal mb-1">
              Design Your Private Dressing Room
            </h4>
            <p className="font-sans text-xs sm:text-sm text-white/70 font-normal">
              Visit our Raipur flagship studio and see your dressing room in 3D.
            </p>
          </div>
          <Link
            href="/walk-in-closets"
            className="px-6 py-3 rounded-full bg-[#B8923A] hover:bg-[#C99E4B] text-slate-950 font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-md shrink-0"
          >
            Explore the Closets
          </Link>
        </div>
      </div>
    </section>
  )
}
