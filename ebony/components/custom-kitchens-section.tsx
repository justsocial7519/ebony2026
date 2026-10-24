"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { HOME_CONTENT } from "@/lib/home-content"
import { openEnquiryModal } from "@/components/enquiry-modal"
import { SectionHeader } from "@/components/ui/section-header"

export function CustomKitchensSection() {
  const { kicker, title, accent, subtitle, cards } = HOME_CONTENT.uniqueKitchens

  return (
    <section id="custom-designs" className="relative bg-[#F5EDE3] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeader kicker={kicker} title={title} accent={accent} subtitle={subtitle} align="center" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card) => (
            <button
              key={card.id}
              type="button"
              onClick={() => openEnquiryModal({ design: card.title, category: "Kitchen for my home" })}
              className="group text-left bg-white rounded-[1.75rem] overflow-hidden ring-1 ring-stone-200/80 hover:ring-[#C5A572]/60 hover:shadow-2xl hover:shadow-stone-400/30 transition-all duration-500 hover:-translate-y-1.5 flex flex-col cursor-pointer"
            >
              <div className="shine relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                <Image
                  src={card.image}
                  alt={card.alt ?? card.title}
                  fill
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[13px] font-semibold text-slate-900">
                  {card.tag}
                </span>
              </div>

              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <h3 className="font-serif text-2xl text-slate-950 font-normal mb-1.5">{card.title}</h3>
                <p className="text-[15px] text-slate-600 leading-relaxed flex-1">{card.line}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-[#8E6D38]">
                  Plan My Kitchen
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
