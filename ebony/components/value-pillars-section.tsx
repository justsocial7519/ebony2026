"use client"

import { Cpu, Clock, Heart, Wrench } from "lucide-react"

const PILLARS = [
  {
    icon: Cpu,
    title: "GERMAN ENGINEERING",
    desc: "Precision hardware & long-lasting materials.",
  },
  {
    icon: Clock,
    title: "CLEAN INSTALLATION",
    desc: "Pre-assembled in factory with almost no on-site dust.",
  },
  {
    icon: Heart,
    title: "FAMILY TRUSTED",
    desc: "Homes across Central India made with care.",
  },
  {
    icon: Wrench,
    title: "END-TO-END SERVICE",
    desc: "Design, manufacturing and installation.",
  },
]

export function ValuePillarsSection() {
  return (
    <section className="bg-[#0B0F19] text-white py-16 sm:py-20 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8">
          {PILLARS.map((item, idx) => {
            const IconComponent = item.icon
            return (
              <div
                key={item.title}
                className={`flex flex-col items-center text-center px-4 ${
                  idx < PILLARS.length - 1
                    ? "lg:border-r lg:border-white/10"
                    : ""
                }`}
              >
                {/* Circular Icon Enclosure matching reference */}
                <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-amber-400 mb-5 shadow-inner">
                  <IconComponent className="w-5 h-5" />
                </div>

                <h3 className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/60 text-xs font-normal leading-relaxed max-w-[220px]">
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
