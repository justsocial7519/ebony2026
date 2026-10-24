"use client"

import { FEATURES } from "@/lib/content"
import { Layers, Box, Shield, Globe } from "lucide-react"

const ICONS: Record<string, React.ReactNode> = {
  layers: <Layers className="w-5 h-5 text-gold-deep" />,
  box: <Box className="w-5 h-5 text-gold-deep" />,
  shield: <Shield className="w-5 h-5 text-gold-deep" />,
  globe: <Globe className="w-5 h-5 text-gold-deep" />,
}

export function FeaturesSection() {
  return (
    <section id="why-ebony" className="py-24 md:py-32 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-slate-100">
          <div>
            <span className="font-mono text-[13px] uppercase tracking-[0.12em] text-amber-700 font-semibold block mb-3">
              The EBONY Standard · Careful Quality Checks
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-slate-900 font-normal">
              Excellence by Design, <span className="text-amber-800">Built to Last</span>
            </h2>
          </div>
          <p className="text-slate-600 max-w-sm text-xs sm:text-sm font-normal leading-relaxed">
            Foundational pillars that guarantee careful execution, uncompromising material standards, and lifelong peace of mind.
          </p>
        </div>

        {/* Feature double-bezel cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {FEATURES.map((feature, idx) => (
            <div
              key={feature.title}
              className="double-bezel group transition-transform duration-500 hover:-translate-y-1.5"
            >
              <div className="double-bezel-inner p-7 flex flex-col justify-between h-full min-h-[260px]">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-amber-50/80 border border-amber-200/60 text-amber-800">
                      {ICONS[feature.icon]}
                    </div>
                    <span className="font-mono text-[13px] text-slate-500 font-medium tracking-widest">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-slate-900 mb-2.5 group-hover:text-amber-800 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-xs font-normal leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-500">
                    Institutional Standard
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
