"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, MapPin } from "lucide-react"

const PROJECTS = [
  {
    num: "01",
    category: "MODULAR KITCHEN",
    location: "Shankar Nagar, Raipur",
    title: "Penthouse Waterfall Island in Calacatta & Fluted Walnut",
    description:
      "A custom-engineered culinary sanctuary featuring dual-slab Calacatta marble waterfall edges, motorized Aventos lift-up cabinets, and warm champagne brass highlights.",
    specs: ["Marine Grade Core", "Motorized Blum Aventos", "Precise Laser Alignment"],
    image: "/img/project-shankar-nagar.jpg",
    imageSide: "left" as const,
  },
  {
    num: "02",
    category: "BESPOKE WARDROBE",
    location: "VIP Road Villa, Raipur",
    title: "Walk-In Sanctuary with Smoked Bronze Glass & Illumination",
    description:
      "Full-height smoked bronze aluminum profiles with concealed vertical LED reveals, motorized accessory trays, and Italian soft-close sliding mechanics.",
    specs: ["Italian Bronze Glass", "Sensor Illumination", "Velvet Dividers"],
    image: "/img/wardrobe-detail-shot.jpg",
    imageSide: "right" as const,
  },
  {
    num: "03",
    category: "COMPLETE HOME INTERIOR",
    location: "Devendra Nagar, Raipur",
    title: "Architectural Living & TV Lounge with Acoustic Millwork",
    description:
      "Continuous fluted walnut acoustic slat paneling paired with a honed travertine floating media shelf and integrated concealed Dolby cable passes.",
    specs: ["Acoustic Walnut Slats", "Travertine Stone Console", "Concealed Conduits"],
    image: "/img/living-room-showcase.jpg",
    imageSide: "left" as const,
  },
]

export function FeaturedProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-mono text-xs sm:text-[13px] uppercase tracking-[0.12em] text-[#B8923A] font-semibold block mb-3">
            FEATURED PROJECTS · CENTRAL INDIA
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-slate-950 font-normal tracking-tight leading-[1.1] mb-4">
            Real homes. <br />
            <span className="text-[#855E15]">Real stories.</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
            A selection of our latest bespoke modular kitchens, wardrobes and complete
            home interiors across Raipur, Bilaspur, and Chhattisgarh.
          </p>
        </div>

        {/* Alternating Left-Right Project Cards matching reference instructions */}
        <div className="flex flex-col gap-16 sm:gap-24">
          {PROJECTS.map((item) => {
            const isImageLeft = item.imageSide === "left"

            return (
              <div
                key={item.num}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                  !isImageLeft ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Project Image */}
                <div
                  className={`lg:col-span-7 ${
                    !isImageLeft ? "lg:col-start-6" : ""
                  }`}
                >
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-3xl overflow-hidden bg-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 group border border-slate-200">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-fluid group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                    {/* Corner Tag */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-white font-mono text-xs font-bold tracking-widest border border-white/10">
                        {item.num}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-950 font-mono text-xs font-semibold tracking-wider flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#B8923A]" />
                        {item.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Narrative Content */}
                <div
                  className={`lg:col-span-5 flex flex-col justify-center ${
                    !isImageLeft ? "lg:col-start-1" : ""
                  }`}
                >
                  <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#B8923A] font-bold mb-2">
                    {item.category}
                  </span>

                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-slate-950 font-normal leading-[1.2] mb-4">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Architectural Specs List */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {item.specs.map((spec) => (
                      <span
                        key={spec}
                        className="px-3 py-1 text-[13px] font-mono text-slate-700 bg-slate-50 border border-slate-200 rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-950 hover:text-[#B8923A] font-bold transition-colors group self-start"
                  >
                    <span>COMMISSION SIMILAR SPACE</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
