"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import { REFERENCE_COLLECTIONS } from "@/lib/content"

export function CollectionsSection() {
  return (
    <section id="collections" className="py-24 sm:py-32 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header matching reference */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-slate-100">
          <div>
            <span className="font-mono text-[13px] uppercase tracking-[0.12em] text-[#B8923A] font-semibold block mb-3">
              OUR COLLECTIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-slate-950 font-normal tracking-tight">
              Spaces designed <br className="hidden sm:block" />
              for modern living.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed mb-4">
              From modular kitchens to complete home interiors, our collections
              combine timeless design with intelligent functionality.
            </p>
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-950 hover:text-[#B8923A] font-bold transition-colors group"
            >
              <span>VIEW ALL COLLECTIONS</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 4 Cards Responsive Grid matching reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {REFERENCE_COLLECTIONS.map((item, idx) => (
            <Link
              key={item.id}
              href={item.href}
              className="group flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden bg-slate-100 mb-4 shadow-sm group-hover:shadow-xl transition-all duration-500">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-fluid group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Subtle corner index */}
                <div className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-white font-mono text-xs font-semibold tracking-wider">
                  0{idx + 1}
                </div>
              </div>

              {/* Title & Arrow Row */}
              <div className="flex items-center justify-between gap-3 pt-1">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-slate-950 group-hover:text-[#855E15] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs font-normal mt-0.5">
                    {item.tagline}
                  </p>
                </div>

                {/* Circular Arrow Badge */}
                <div className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center shrink-0 group-hover:border-[#B8923A] group-hover:bg-[#B8923A] group-hover:text-slate-950 transition-all duration-300 shadow-sm">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
