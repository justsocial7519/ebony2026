"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"
import { CRAFTSMANSHIP_STATS } from "@/lib/content"
import { VideoModal } from "@/components/ui/video-modal"

export function CraftsmanshipSection() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section className="relative py-24 sm:py-32 bg-slate-950 text-white overflow-hidden border-t border-white/10">
        {/* Background Image: Generated Craftsmanship Detail with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/craftsmanship-detail.jpg"
            alt="EBONY Craftsmanship & Master Joinery"
            fill
            className="object-cover filter brightness-[0.38] contrast-[1.1]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <span className="font-mono text-[13px] uppercase tracking-[0.12em] text-[#C99E4B] font-semibold block mb-3">
                CRAFTED WITH PURPOSE
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight leading-[1.1] mb-6">
                Details that <br />
                <span className="text-white">make the difference.</span>
              </h2>
              <p className="text-white/70 text-sm sm:text-base font-normal leading-relaxed max-w-xl mb-8">
                Every edge, every finish and every element is crafted with precision —
                because true luxury lives in the details.
              </p>

              {/* Watch Craftsmanship Button matching reference */}
              <button
                onClick={() => setModalOpen(true)}
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white font-mono text-xs uppercase tracking-wider transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <span className="w-7 h-7 rounded-full bg-white text-slate-950 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Play className="w-3.5 h-3.5 fill-slate-950 ml-0.5" />
                </span>
                <span>WATCH CRAFTSMANSHIP</span>
              </button>
            </div>

            {/* Right Stats Columns matching reference */}
            <div className="lg:col-span-5 grid grid-cols-3 gap-4 sm:gap-6 pt-8 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/15 lg:pl-10">
              {CRAFTSMANSHIP_STATS.map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`text-center ${
                    idx < CRAFTSMANSHIP_STATS.length - 1
                      ? "border-r border-white/10 pr-2"
                      : ""
                  }`}
                >
                  <div className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal mb-2">
                    {stat.value}
                  </div>
                  <div className="font-mono text-xs sm:text-xs uppercase tracking-[0.12em] text-[#C99E4B] font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        videoSrc="/hero-video.mp4"
        title="EBONY — The Craft of Precision Joinery & German Machinery"
      />
    </>
  )
}
