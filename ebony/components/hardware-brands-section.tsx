"use client"

import Link from "next/link"
import { ArrowUpRight, Award } from "lucide-react"
import { HARDWARE_BRANDS } from "@/lib/content"

export function HardwareBrandsSection() {
  return (
    <section id="hardware-brands-section" className="relative bg-white py-24 sm:py-32 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#B8923A]" />
              <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#B8923A] font-bold">
                Hardware Excellence
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-slate-950 font-normal leading-[1.1] tracking-tight">
              World-Class Hardware Partners.
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-slate-600 max-w-md font-normal leading-relaxed">
            We partner with Europe and India&apos;s most rigorous motion engineering brands to ensure every hinge, slide, and lift stays smooth and quiet through years of daily use.
          </p>
        </div>

        {/* Brands Clean Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {HARDWARE_BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="bg-[#FAFAFA] rounded-2xl p-6 border border-slate-200/90 hover:border-[#B8923A]/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs uppercase tracking-wider px-2 py-0.5 rounded bg-slate-200/80 text-slate-800 font-semibold">
                    {brand.country}
                  </span>
                  <Award className="w-4 h-4 text-[#B8923A]" />
                </div>

                <h3 className="font-serif text-2xl text-slate-950 font-normal mb-1">
                  {brand.name}
                </h3>

                <span className="font-mono text-[13px] text-[#B8923A] uppercase tracking-wider block mb-3 font-semibold">
                  {brand.specialty}
                </span>

                <p className="font-sans text-xs text-slate-600 font-normal leading-relaxed">
                  {brand.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60">
                <span className="font-mono text-xs text-slate-500 uppercase tracking-widest">
                  Verified Component
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner linking to /hardware */}
        <div className="mt-12 text-center">
          <Link
            href="/hardware"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-bold text-slate-950 hover:text-[#B8923A] transition-colors"
          >
            <span>Explore the Hardware</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
