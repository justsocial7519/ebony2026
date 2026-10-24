"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { ChevronDown, Plus } from "lucide-react"
import { KITCHEN_DESIGNS } from "@/lib/kitchen-designs"
import { KitchenSketch } from "@/components/kitchen-sketch"
import { openEnquiryModal } from "@/components/enquiry-modal"
import { HOME_CONTENT } from "@/lib/home-content"
import { SectionHeader } from "@/components/ui/section-header"
import { cn } from "@/lib/utils"

const FILTER_TABS = [
  { id: "all", label: "All" },
  { id: "light", label: "Light & bright" },
  { id: "dark", label: "Dark & rich" },
  { id: "colourful", label: "Colourful" },
  { id: "natural", label: "Natural wood" },
  { id: "small", label: "Small spaces" },
]

const FIRST_ROWS = 6

export function KitchenStylesSection() {
  const { kicker, title, accent, subtitle, showMore, showLess } = HOME_CONTENT.styles
  const [activeFilter, setActiveFilter] = useState("all")
  const [expanded, setExpanded] = useState(false)
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  const filteredDesigns = useMemo(() => {
    if (activeFilter === "all") return KITCHEN_DESIGNS
    return KITCHEN_DESIGNS.filter((d) => d.tags.includes(activeFilter as (typeof d.tags)[number]))
  }, [activeFilter])

  // Show 6 at first so the page stays light; "All" can expand to every style
  const canExpand = filteredDesigns.length > FIRST_ROWS
  const visible = expanded || !canExpand ? filteredDesigns : filteredDesigns.slice(0, FIRST_ROWS)

  return (
    <section id="kitchen-styles" className="relative bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeader kicker={kicker} title={title} accent={accent} subtitle={subtitle} />

        {/* Filters: wrap on desktop, swipe on phones */}
        <div className="-mx-5 px-5 sm:mx-0 sm:px-0 flex sm:flex-wrap items-center gap-2.5 overflow-x-auto sm:overflow-visible no-scrollbar pb-2 mb-10">
          {FILTER_TABS.map((tab) => {
            const isSelected = tab.id === activeFilter
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveFilter(tab.id)
                  setExpanded(false)
                }}
                aria-pressed={isSelected}
                className={cn(
                  "px-5 py-2.5 rounded-full text-[15px] font-medium whitespace-nowrap transition-all duration-300 cursor-pointer",
                  isSelected
                    ? "bg-slate-950 text-white shadow-lg shadow-slate-900/20"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-950"
                )}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {visible.map((design) => {
            const hasError = imageErrors[design.id]
            return (
              <button
                key={design.id}
                type="button"
                onClick={() => openEnquiryModal({ design: design.name, category: "Kitchen style" })}
                className="group text-left bg-[#FAFAFA] rounded-[1.75rem] overflow-hidden ring-1 ring-slate-200 hover:ring-[#C5A572]/60 hover:shadow-2xl hover:shadow-slate-300/50 transition-all duration-500 hover:-translate-y-1.5 flex flex-col cursor-pointer animate-in fade-in zoom-in-95 duration-500"
              >
                <div className="shine relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  {!hasError && design.image ? (
                    <Image
                      src={design.image}
                      alt={design.alt || `${design.name} kitchen`}
                      fill
                      className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      onError={() => setImageErrors((prev) => ({ ...prev, [design.id]: true }))}
                    />
                  ) : (
                    <KitchenSketch palette={design.colours} />
                  )}

                  {/* Colour palette of this style */}
                  <span className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-2.5 py-1.5 rounded-full">
                    {design.colours.map((hex, i) => (
                      <span key={i} className="w-4 h-4 rounded-full ring-1 ring-black/10" style={{ backgroundColor: hex }} />
                    ))}
                  </span>

                  {/* "Make This Mine" appears on hover */}
                  <span className="absolute inset-x-4 bottom-4 hidden lg:flex justify-end translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-950 text-white text-sm font-semibold">
                      <Plus className="w-4 h-4" />
                      Curate This Look
                    </span>
                  </span>
                </div>

                <div className="p-6 sm:p-7">
                  <p className="text-[13px] font-semibold text-[#8E6D38] mb-1.5">Best for: {design.bestFor}</p>
                  <h3 className="font-serif text-2xl text-slate-950 font-normal mb-1.5">{design.name}</h3>
                  <p className="text-[15px] text-slate-600 leading-relaxed">{design.line}</p>
                </div>
              </button>
            )
          })}
        </div>

        {canExpand && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setExpanded((v) => !v)}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full ring-1 ring-slate-300 hover:ring-slate-950 text-slate-950 text-[15px] font-semibold transition-all duration-300 cursor-pointer"
            >
              {expanded ? showLess : showMore}
              <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", expanded && "rotate-180")} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
