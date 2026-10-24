"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, BadgeCheck, Clock, Layers, Ruler, ShieldCheck, Wrench, type LucideIcon } from "lucide-react"
import { HOME_CONTENT } from "@/lib/home-content"
import { SectionHeader } from "@/components/ui/section-header"
import { cn } from "@/lib/utils"

const LOVE_ICONS: Record<string, LucideIcon> = { ShieldCheck, Award, Layers, Wrench, Clock, BadgeCheck, Ruler }

export function WhyEbonySection() {
  const { kicker, title, accent, subtitle, points, footnote } = HOME_CONTENT.whyLoveUs

  return (
    <section id="why-us" className="relative bg-[#FBF8F3] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeader kicker={kicker} title={title} accent={accent} subtitle={subtitle} align="center" />

        {/* Bento: the lifetime warranty leads across two columns, the other six promises fill the grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 mb-10">
          {points.map((point, index) => {
            const Icon = LOVE_ICONS[point.icon] ?? ShieldCheck
            const lead = index === 0
            return (
              <div
                key={point.id}
                className={cn(
                  "group bg-white rounded-[1.75rem] overflow-hidden ring-1 ring-stone-200/80 hover:shadow-xl hover:shadow-stone-300/50 transition-all duration-500 hover:-translate-y-1.5",
                  lead && "sm:col-span-2 ring-[#C5A572]/60"
                )}
              >
                <div
                  className={cn(
                    "shine relative w-full overflow-hidden bg-stone-100 aspect-[16/10]",
                    lead && "lg:aspect-[33/10]"
                  )}
                >
                  <Image
                    src={point.image}
                    alt={point.alt ?? point.title}
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.06]"
                    sizes={lead ? "(max-width: 640px) 100vw, 50vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"}
                  />
                  {lead && (
                    <span className="absolute top-4 right-4 rounded-full bg-slate-950/85 backdrop-blur px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#E8CF9C]">
                      Lifetime
                    </span>
                  )}
                </div>
                <div className="p-6 sm:p-7 relative">
                  <span className="absolute -top-6 left-6 w-12 h-12 rounded-2xl bg-[#C5A572] text-slate-950 flex items-center justify-center shadow-lg shadow-amber-900/20 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-6">
                    <Icon className="w-5 h-5" />
                  </span>
                  <h3 className={cn("font-serif text-slate-950 font-normal mt-5 mb-2", lead ? "text-2xl sm:text-[1.75rem]" : "text-xl sm:text-[1.4rem]")}>
                    {point.title}
                  </h3>
                  <p className={cn("text-[15px] text-slate-600 leading-relaxed", lead && "sm:text-base max-w-xl")}>{point.line}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="rounded-2xl bg-[#F5EDE3] px-6 py-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[15px] text-stone-700">{footnote.text}</p>
          <Link
            href={footnote.href}
            className="group inline-flex items-center gap-2 text-[15px] font-semibold text-[#8E6D38] hover:text-slate-950 transition-colors shrink-0"
          >
            {footnote.label}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
