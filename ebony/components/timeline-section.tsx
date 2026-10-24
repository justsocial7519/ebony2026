"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const STAGES = [
  {
    day: "01",
    phase: "Step 01 · Alignment",
    title: "Laser Shell & Carcass",
    desc: "Modular units anchored to a precise tolerance. Neoprene damp mounts and concealed plumbing passes.",
    image: "/img/process-engineering.jpg",
  },
  {
    day: "02",
    phase: "Step 02 · Mechanics",
    title: "Fronts & Motion Systems",
    desc: "Blum and Hettich concealed hinges synchronized for an exact, even reveal. Load-tested drawer slides.",
    image: "/img/kitchen-card.jpg",
  },
  {
    day: "03",
    phase: "Step 03 · Handover",
    title: "Warm Illumination & Audit",
    desc: "Warm LED channels activated, the final audit signed off, and your warranty certificate handed over.",
    image: "/img/hero-kitchen.jpg",
  },
]

export function TimelineSection() {
  const [active, setActive] = useState(0)

  return (
    <section id="process" className="py-24 md:py-32 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-slate-100">
          <div>
            <span className="font-mono text-[13px] uppercase tracking-[0.12em] text-amber-700 font-semibold block mb-3">
              The Careful Way
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-slate-900 font-normal">
              A Finished Home, <span className="text-amber-800">Step by Step</span>
            </h2>
          </div>

          <Link
            href="/process"
            className="btn-island group self-start md:self-auto"
          >
            <span>See How We Fit</span>
            <span className="btn-island-icon">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>

        {/* Interactive Double-Bezel Step Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {STAGES.map((stage, idx) => (
            <div
              key={stage.day}
              onClick={() => setActive(idx)}
              className={`double-bezel cursor-pointer transition-all duration-500 hover:-translate-y-1.5 ${
                active === idx ? "ring-2 ring-amber-600/40" : ""
              }`}
            >
              <div className="double-bezel-inner p-5 flex flex-col justify-between h-full">
                <div>
                  <div className="relative aspect-[16/11] rounded-2xl overflow-hidden mb-5">
                    <Image
                      src={stage.image}
                      alt={stage.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-white font-mono text-xs font-bold tracking-widest border border-white/10">
                      STEP {stage.day}
                    </div>
                  </div>

                  <span className="font-mono text-xs uppercase tracking-wider text-amber-700 font-semibold block mb-1">
                    {stage.phase}
                  </span>
                  <h3 className="font-serif text-xl text-slate-900 font-normal mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-slate-600 text-xs font-normal leading-relaxed">
                    {stage.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[13px] font-mono text-slate-500">
                  <span>PHASE 0{idx + 1}</span>
                  <span className="text-amber-700 font-medium">Checked by hand</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
