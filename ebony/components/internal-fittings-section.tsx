"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { HOME_CONTENT } from "@/lib/home-content"
import { SectionHeader } from "@/components/ui/section-header"

export function InternalFittingsSection() {
  const { kicker, title, accent, subtitle, items, trustedBrands, brandsKicker } = HOME_CONTENT.fittings

  return (
    <section id="fittings-section" className="relative bg-[#FAFAFA] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeader kicker={kicker} title={title} accent={accent} subtitle={subtitle} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 mb-12">
          {items.map((item) => (
            <div key={item.id} className="group bg-white rounded-[1.75rem] p-4 ring-1 ring-slate-200 hover:shadow-xl hover:shadow-slate-200/70 transition-all duration-500 hover:-translate-y-1">
              <div className="shine relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.alt ?? item.title}
                  fill
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="px-2 pt-5 pb-3">
                <h3 className="font-serif text-xl text-slate-950 font-normal mb-1.5">{item.title}</h3>
                <p className="text-[15px] text-slate-600 leading-relaxed">{item.line}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trusted brands */}
        <div className="rounded-[1.75rem] bg-slate-950 text-white px-7 py-7 sm:px-10 sm:py-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <p className="text-[15px] text-white/75 mb-3">{brandsKicker}</p>
            <ul className="flex flex-wrap items-center gap-x-7 gap-y-2">
              {trustedBrands.map((brand) => (
                <li key={brand} className="font-serif text-xl sm:text-2xl text-white/95 hover:text-[#D8B97F] transition-colors">
                  {brand}
                </li>
              ))}
            </ul>
          </div>
          <Link
            href="/hardware"
            className="group inline-flex items-center gap-2 text-[15px] font-semibold text-[#D8B97F] hover:text-white transition-colors shrink-0"
          >
            See all fittings
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
