"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { HOME_CONTENT } from "@/lib/home-content"
import { SectionHeader } from "@/components/ui/section-header"
import { cn } from "@/lib/utils"

// Each card opens the matching category on the Collections page
const CATEGORY_LINKS: Record<string, string> = {
  kitchen: "/collections#kitchens",
  wardrobe: "/collections#wardrobes",
  closet: "/collections#wardrobes",
  living: "/collections#tv-bar",
}

export function HomesShowcaseSection() {
  const { kicker, title, accent, subtitle, filters, items } = HOME_CONTENT.projects
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredProjects = activeFilter === "all" ? items : items.filter((p) => p.category === activeFilter)

  return (
    <section id="projects-showcase" className="relative bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeader kicker={kicker} title={title} accent={accent} subtitle={subtitle} />

        <div className="-mx-5 px-5 sm:mx-0 sm:px-0 flex sm:flex-wrap items-center gap-2.5 overflow-x-auto sm:overflow-visible no-scrollbar pb-2 mb-10">
          {filters.map((filter) => {
            const isSelected = filter.id === activeFilter
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                aria-pressed={isSelected}
                className={cn(
                  "px-5 py-2.5 rounded-full text-[15px] font-medium whitespace-nowrap transition-all duration-300 cursor-pointer",
                  isSelected
                    ? "bg-slate-950 text-white shadow-lg shadow-slate-900/20"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-950"
                )}
              >
                {filter.label}
              </button>
            )
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href="/collections"
              className="group relative rounded-[1.75rem] overflow-hidden aspect-[4/5] sm:aspect-[4/5] bg-slate-900 animate-in fade-in zoom-in-95 duration-500"
            >
              <Image
                src={project.image}
                alt={project.alt ?? project.title}
                fill
                className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <h3 className="font-serif text-2xl text-white font-normal leading-tight">{project.title}</h3>
                <p className="flex items-center gap-1.5 text-[15px] text-white/85 mt-1.5">
                  <Sparkles className="w-4 h-4 text-[#D8B97F]" />
                  {project.tag}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/collections"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-slate-950 hover:bg-[#C5A572] hover:text-slate-950 text-white text-[15px] font-semibold transition-all duration-300 shadow-md"
          >
            <span>Explore All Collections</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
