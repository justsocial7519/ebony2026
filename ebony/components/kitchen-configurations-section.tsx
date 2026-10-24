"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { HOME_CONTENT } from "@/lib/home-content"
import { SectionHeader } from "@/components/ui/section-header"

export function KitchenConfigurationsSection() {
  const { kicker, title, accent, subtitle, layouts } = HOME_CONTENT.collections

  return (
    <section id="collections" className="relative bg-[#FBF8F3] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeader kicker={kicker} title={title} accent={accent} subtitle={subtitle} align="center" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {layouts.map((layout) => (
            <Link
              key={layout.id}
              href={layout.href}
              className="group relative bg-white rounded-[1.75rem] overflow-hidden ring-1 ring-stone-200/80 hover:ring-[#C5A572]/60 hover:shadow-2xl hover:shadow-stone-300/50 transition-all duration-500 hover:-translate-y-1.5 flex flex-col"
            >
              <div className="shine relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                <Image
                  src={layout.image}
                  alt={layout.alt ?? `${layout.name} kitchen`}
                  fill
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[13px] font-semibold text-slate-900">
                  {layout.tag}
                </span>
              </div>

              <div className="p-6 sm:p-7 flex items-start justify-between gap-4 flex-1">
                <div>
                  <h3 className="font-serif text-2xl text-slate-950 font-normal mb-1.5 group-hover:text-[#9A7637] transition-colors">
                    {layout.name}
                  </h3>
                  <p className="text-[15px] text-slate-600 leading-relaxed">{layout.line}</p>
                </div>
                <span className="card-arrow shrink-0 bg-slate-100 text-slate-900 group-hover:bg-[#C5A572]" aria-hidden="true">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
