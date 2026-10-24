"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Play } from "lucide-react"
import { EXPERIENCE_STEPS } from "@/lib/content"
import { VideoModal } from "@/components/ui/video-modal"

export function ExperienceSection() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <>
      <section id="experience" className="py-24 sm:py-32 bg-white text-slate-900 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* 2-Column Split Layout matching reference */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[13px] uppercase tracking-[0.12em] text-[#B8923A] font-semibold block mb-3">
                  THE EBONY EXPERIENCE
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-slate-950 font-normal tracking-tight leading-[1.1] mb-6">
                  Not just furniture. <br />
                  <span className="text-[#855E15]">A way of living.</span>
                </h2>
                <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed max-w-lg mb-8">
                  We make the design-to-installation process simple, personal and transparent
                  — so you can enjoy the transformation without the stress.
                </p>

                <Link
                  href="/process"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#B8923A] hover:bg-[#C99E4B] text-slate-950 font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-md hover:shadow-amber-500/20 active:scale-95 mb-12"
                >
                  <span>SEE IT STEP BY STEP</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Numbered Steps matching reference */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-100">
                {EXPERIENCE_STEPS.map((step) => (
                  <div key={step.number} className="flex flex-col">
                    <span className="font-mono text-xs text-[#B8923A] font-bold tracking-widest mb-1">
                      {step.number}
                    </span>
                    <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-950 mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-xs font-normal leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Large Image/Video Card matching reference */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-slate-950 shadow-2xl group border border-slate-200">
                <Image
                  src="/img/hero-kitchen.jpg"
                  alt="EBONY Kitchen & Dining Experience"
                  fill
                  className="object-cover transition-transform duration-700 ease-fluid group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                {/* Circular Play Button Icon Only matching reference instructions */}
                <button
                  onClick={() => setVideoOpen(true)}
                  className="absolute inset-0 flex items-center justify-center text-white group cursor-pointer focus:outline-none"
                  aria-label="Play video"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/60 hover:bg-black/85 backdrop-blur-md border border-white/30 flex items-center justify-center transition-all duration-300 shadow-2xl group-hover:scale-110 group-hover:border-[#B8923A]">
                    <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:bg-[#B8923A]">
                      <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-slate-950 ml-0.5" />
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
        videoSrc="/hero-video.mp4"
        title="The EBONY Story — Not Just Furniture. A Way of Living."
      />
    </>
  )
}
