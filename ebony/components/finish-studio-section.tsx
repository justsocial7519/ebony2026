"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export interface FinishOption {
  id: string
  name: string
  tag: string
  category: string
  hex: string
  gradient?: string
  reflection: string
  texture: string
}

export const FINISHES: FinishOption[] = [
  {
    id: "super-matt",
    name: "Super Matt Cashmere",
    tag: "Thermal Nano Healing",
    category: "Laminate & Lacquer",
    hex: "#EFECE6",
    gradient: "linear-gradient(135deg, #F5F3EE 0%, #E3DED4 100%)",
    reflection: "Diffused, Anti-Fingerprint",
    texture: "Micro-etched thermal velvet",
  },
  {
    id: "ebony-grain",
    name: "Smoked Ebony Grain",
    tag: "Open-Pore Timber",
    category: "Smoked Veneer",
    hex: "#1A1918",
    gradient: "linear-gradient(135deg, #242220 0%, #151413 50%, #3A3530 100%)",
    reflection: "Natural Sheen",
    texture: "Deep brushed open-pore timber",
  },
  {
    id: "champagne-metal",
    name: "Champagne Brushed Metal",
    tag: "Hairline Anodized",
    category: "Real Metal Foil",
    hex: "#D6C7A1",
    gradient: "linear-gradient(120deg, #EAD08A 0%, #B8923A 40%, #EAD08A 70%, #7C5F16 100%)",
    reflection: "Directional Sheen",
    texture: "Directional hairline brushed",
  },
  {
    id: "fluted-walnut",
    name: "Architectural Fluted Walnut",
    tag: "CNC Precision Slat",
    category: "Profiled Slat",
    hex: "#5C4632",
    gradient: "linear-gradient(135deg, #6B523B 0%, #4A3727 60%, #30241A 100%)",
    reflection: "Rhythmic Shadow",
    texture: "Rhythmic vertical fluting",
  },
  {
    id: "crystal-glass",
    name: "Crystal Translucent Glass",
    tag: "Opti-White Float",
    category: "Toughened Glass",
    hex: "#EDF2F7",
    gradient: "linear-gradient(135deg, #F8FAFC 0%, #DCE5ED 50%, #B8923A33 100%)",
    reflection: "High Specular",
    texture: "Low-iron float safety glass",
  },
  {
    id: "acrylic-gloss",
    name: "Mirror Gloss Acrylic",
    tag: "Deep Specular Mirror",
    category: "Co-Extruded Acrylic",
    hex: "#FAF9F6",
    gradient: "linear-gradient(135deg, #FFFFFF 0%, #F5F1E9 60%, #E2D9C5 100%)",
    reflection: "Mirror Depth",
    texture: "High-density UV cured acrylic",
  },
]

export function FinishStudioSection() {
  const [active, setActive] = useState<FinishOption>(FINISHES[0])

  return (
    <section id="finishes" className="py-28 md:py-36 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs uppercase tracking-[0.12em] font-mono font-semibold bg-amber-50 text-amber-900 border border-amber-200/80 mb-3">
              Surface Tactility
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-slate-950 font-normal">
              Finishes to Touch, <span className="text-amber-800">Bespoke Tactility</span>
            </h2>
          </div>

          <Link
            href="/collections"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-900 font-bold hover:text-amber-800 transition-colors group"
          >
            <span>Explore the Palette</span>
            <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>

        {/* Double-Bezel Interactive Material Studio */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left: Swatch Selector Buttons */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
            {FINISHES.map((f) => {
              const isSelected = active.id === f.id
              return (
                <button
                  key={f.id}
                  onClick={() => setActive(f)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-500 ease-fluid flex flex-col justify-between h-32 ${
                    isSelected
                      ? "border-amber-600 bg-amber-50/30 shadow-md ring-2 ring-amber-500/20"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs"
                  }`}
                >
                  <div
                    className="w-8 h-8 rounded-full border border-black/10 shadow-xs transition-transform duration-300 hover:scale-110"
                    style={{ background: f.gradient || f.hex }}
                  />
                  <div>
                    <h4 className="font-serif text-base text-slate-950 font-normal">
                      {f.name}
                    </h4>
                    <span className="font-mono text-xs uppercase tracking-wider text-slate-500 block mt-0.5">
                      {f.category}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right: Double-Bezel Surface Material Display */}
          <div className="lg:col-span-7">
            <div className="double-bezel shadow-xl">
              <div
                className="double-bezel-inner w-full h-88 sm:h-96 relative overflow-hidden flex flex-col justify-between p-8 transition-all duration-700 ease-fluid"
                style={{ background: active.gradient || active.hex }}
              >
                <div className="flex items-center justify-between">
                  <span className="glass-pill px-4 py-1.5 rounded-full text-slate-900 font-mono text-xs uppercase tracking-widest font-semibold">
                    {active.tag}
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-slate-950/80 text-white font-mono text-xs uppercase tracking-widest backdrop-blur-md">
                    Daylight Calibrated
                  </span>
                </div>

                <div className="glass-card p-6 rounded-2xl border-white/80 max-w-sm">
                  <span className="font-mono text-xs uppercase tracking-wider text-amber-700 font-semibold block mb-1">
                    {active.category}
                  </span>
                  <h3 className="font-serif text-2xl text-slate-950 font-normal">
                    {active.name}
                  </h3>
                  <div className="mt-3 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-mono text-slate-600">
                    <span>{active.reflection}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
