"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { HOME_CONTENT } from "@/lib/home-content"
import { SectionHeader } from "@/components/ui/section-header"
import { cn } from "@/lib/utils"

// Bento rhythm: wide, narrow / narrow, wide
const SPANS = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"]

export function WhatWeMakeSection() {
  const { kicker, title, accent, subtitle, cards } = HOME_CONTENT.exploreDesigns

  return (
    <section id="explore-designs" className="relative bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeader kicker={kicker} title={title} accent={accent} subtitle={subtitle} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-7">
          {cards.map((card, i) => (
            <Link
              key={card.id}
              href={card.href}
              className={cn(
                "group shine relative bg-slate-900 rounded-[1.75rem] overflow-hidden min-h-[380px] sm:min-h-[480px] flex flex-col justify-end p-7 sm:p-10 transition-transform duration-500 hover:-translate-y-1",
                SPANS[i]
              )}
            >
              <Image
                src={card.image}
                alt={card.alt ?? card.title}
                fill
                className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
                sizes={i === 0 || i === 3 ? "(max-width: 1024px) 100vw, 60vw" : "(max-width: 1024px) 100vw, 40vw"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

              <div className="relative z-10 flex items-end justify-between gap-6">
                <div>
                  <span className="inline-block mb-3 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[13px] font-medium text-white">
                    {card.badge}
                  </span>
                  <h3 className="font-serif text-[1.75rem] sm:text-4xl text-white font-normal leading-tight mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[15px] sm:text-base text-white/85 leading-relaxed max-w-md">{card.description}</p>
                </div>
                <span className="card-arrow shrink-0 bg-[#C5A572] text-slate-950" aria-hidden="true">
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
