"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { HOME_CONTENT } from "@/lib/home-content"
import { SectionHeader } from "@/components/ui/section-header"

export function WardrobesSection() {
  const { kicker, title, accent, subtitle, types } = HOME_CONTENT.wardrobes

  return (
    <section id="wardrobes-section" className="relative bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeader kicker={kicker} title={title} accent={accent} subtitle={subtitle} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {types.map((type) => (
            <Link
              key={type.id}
              href={type.href}
              className="group shine relative rounded-[1.75rem] overflow-hidden aspect-[4/5] bg-slate-900 flex flex-col justify-end p-7 transition-transform duration-500 hover:-translate-y-1.5"
            >
              <Image
                src={type.image}
                alt={type.alt ?? type.name}
                fill
                className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="relative z-10 flex items-end justify-between gap-4">
                <div>
                  <h3 className="font-serif text-[1.75rem] text-white font-normal leading-tight mb-2">{type.name}</h3>
                  <p className="text-[15px] text-white/85 leading-relaxed">{type.line}</p>
                </div>
                <span className="card-arrow shrink-0 bg-white text-slate-950 group-hover:bg-[#C5A572]" aria-hidden="true">
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
