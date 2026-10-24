"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Shield, Droplets, CheckCircle2 } from "lucide-react"
import { CORE_MATERIALS } from "@/lib/content"

export function CoreMaterialsSection() {
  return (
    <section id="core-materials-section" className="relative bg-white py-24 sm:py-32 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#B8923A]" />
              <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#B8923A] font-bold">
                Substrate Engineering
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-slate-950 font-normal leading-[1.1] tracking-tight">
              Certified Core Materials.
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-slate-600 max-w-md font-normal leading-relaxed">
            Every EBONY carcass is engineered for purpose. We pair the right substrate to the right zone to guarantee lifetime structural integrity.
          </p>
        </div>

        {/* Hero Material Imagery Banner */}
        <div className="relative h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden mb-12 shadow-md">
          <Image
            src="/img/core-materials-luxury.jpg"
            alt="EBONY core materials engineering: Marine Ply, HDHMR, SS 304"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 text-white max-w-lg">
            <span className="font-mono text-xs sm:text-[13px] uppercase tracking-[0.12em] text-[#B8923A] font-bold block mb-2">
              NO COMPROMISE ON CARCASS INTEGRITY
            </span>
            <p className="font-serif text-xl sm:text-2xl text-white font-normal">
              Calibrated Hardwood Veneers, High-Density Resins, and Surgical Grade SS 304 Steel.
            </p>
          </div>
        </div>

        {/* Core Materials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CORE_MATERIALS.map((mat) => (
            <div
              key={mat.id}
              className="bg-[#FAFAFA] rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs uppercase tracking-wider px-2.5 py-1 rounded bg-amber-100/80 text-amber-900 font-bold">
                    {mat.badge}
                  </span>
                  <Shield className="w-4 h-4 text-[#B8923A]" />
                </div>

                <h3 className="font-serif text-2xl text-slate-950 font-normal mb-3">
                  {mat.name}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-6">
                  {mat.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-slate-200/80">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-slate-500 block mb-1">
                      Engineered Application Zones
                    </span>
                    <p className="font-sans text-xs text-slate-800 font-medium">
                      {mat.idealZones}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="font-mono text-xs uppercase tracking-wider text-slate-500">
                      Core
                    </span>
                    <span className="font-mono text-xs font-bold text-slate-900">
                      {mat.density}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="font-mono text-xs uppercase tracking-wider text-slate-500">
                      Standard
                    </span>
                    <span className="font-mono text-xs text-emerald-700 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{mat.warranty}</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/80">
                <Link
                  href="/finishes"
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider font-bold text-slate-950 hover:text-[#B8923A] transition-colors"
                >
                  <span>Learn More in Finishes</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
