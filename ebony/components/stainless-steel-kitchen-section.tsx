"use client"

import Image from "next/image"
import { openEnquiryModal } from "@/components/enquiry-modal"
import {
  Droplets,
  BugOff,
  Sparkles,
  Layers,
  ShieldCheck,
  Gem,
  Settings2,
  Leaf,
  Palette,
  TrendingUp,
  ArrowRight,
  Phone,
  CheckCircle2,
} from "lucide-react"

const FIVE_PILLARS = [
  {
    icon: Gem,
    title: "PREMIUM AESTHETICS",
    subtitle: "BEAUTIFUL SPACES THAT LAST",
    description: "Flawless architectural alignment, zero door sag, and luxury seamless finishes that keep their showroom shine.",
  },
  {
    icon: Settings2,
    title: "LOW MAINTENANCE",
    subtitle: "MORE LIVING, LESS WORRYING",
    description: "Never worry about moisture seepage, peeling edges, or costly annual pest control and wood polishes.",
  },
  {
    icon: Leaf,
    title: "HYGIENIC & EASY TO CLEAN",
    subtitle: "A HEALTHIER KITCHEN EVERYDAY",
    description: "100% non-porous food-grade steel surface prevents bacterial breeding, fungus, mold, and trapped food odor.",
  },
  {
    icon: Palette,
    title: "WIDE RANGE OF FINISHES",
    subtitle: "LAMINATE | ACRYLIC | GLASS | WOOD LOOKS",
    description: "Combine the strength of surgical steel inside with warm, tactile designer textures on the outside.",
  },
  {
    icon: TrendingUp,
    title: "A SMARTER INVESTMENT",
    subtitle: "BUILT FOR A BETTER TOMORROW",
    description: "Engineered to last generations, outlasting 3 consecutive wooden modular kitchens with zero structural decay.",
  },
]

export function StainlessSteelKitchenSection() {
  return (
    <section id="stainless-steel" className="relative py-20 sm:py-28 bg-[#0D111A] text-white overflow-hidden">
      {/* Ambient background glow accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#D8B97F]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D8B97F]/15 border border-[#D8B97F]/30 text-[#D8B97F] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D8B97F] animate-pulse" />
            WE FOCUS ON DEALING IN
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight leading-[1.15] mb-4">
            Stainless Steel (SS) <br />
            <span className="text-[#D8B97F] not-italic">Kitchens</span>
          </h2>

          <p className="font-sans text-xs sm:text-sm tracking-[0.2em] uppercase text-white/70 font-semibold mb-6">
            BECAUSE A STRONGER KITCHEN BUILDS A BRIGHTER YOU
          </p>

          <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Stainless steel (SS) kitchens are rapidly replacing traditional wooden modular kitchens
            because they permanently solve the two biggest threats to Indian kitchens:{" "}
            <strong className="text-white font-semibold">water damage and termites</strong>.
          </p>
        </div>

        {/* Feature Hero Card with Luxury Photo */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] shadow-2xl mb-16 sm:mb-20">
          <div className="relative aspect-[16/9] w-full max-h-[560px] overflow-hidden">
            <Image
              src="/img/ss-kitchen-luxury.jpg"
              alt="EBONY Luxury Stainless Steel Modular Kitchen with Warm Ambient Lighting"
              fill
              className="object-cover object-center transform hover:scale-102 transition-transform duration-700"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D111A] via-black/30 to-black/40" />

            {/* Top Pill Caption */}
            <div className="absolute top-5 left-5 sm:top-8 sm:left-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[#D8B97F] text-xs sm:text-sm font-medium tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-[#D8B97F]" />
                TIMELESS · HYGIENIC · FUNCTIONAL · BEAUTIFUL
              </span>
            </div>

            {/* Bottom Caption Pill */}
            <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-auto sm:max-w-xl">
              <div className="bg-black/75 backdrop-blur-md border border-white/15 p-5 sm:p-6 rounded-2xl">
                <h3 className="font-serif text-lg sm:text-xl text-white font-medium mb-2">
                  The Modern Residential SS Revolution
                </h3>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                  While commercial kitchens have used bare stainless steel for decades, modern residential SS kitchens use steel only for the structural frame (the &ldquo;carcass&rdquo;) and cover the visible doors with premium laminates, acrylic or glass so the space still feels warm, cozy and inviting.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Two Biggest Threats Solved Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">
          <div className="relative p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-[#D8B97F]/40 transition-all duration-300 group">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-105 transition-transform">
                <Droplets className="w-7 h-7" />
              </div>
              <div>
                <span className="inline-block text-cyan-400 text-xs font-bold tracking-widest uppercase mb-1">
                  BUILT FOR HUMID INDIAN HOMES
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-white font-medium mb-2">
                  NO MORE WATER DAMAGE
                </h3>
                <p className="text-white/75 text-sm sm:text-base leading-relaxed">
                  No swelling, bubbling, or rot near sinks and dishwasher zones. 100% moisture-proof and rust-proof surgical steel that handles daily wet-mopping effortlessly.
                </p>
              </div>
            </div>
          </div>

          <div className="relative p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-[#D8B97F]/40 transition-all duration-300 group">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-105 transition-transform">
                <BugOff className="w-7 h-7" />
              </div>
              <div>
                <span className="inline-block text-amber-400 text-xs font-bold tracking-widest uppercase mb-1">
                  A WORRY-FREE KITCHEN FOR LIFE
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-white font-medium mb-2">
                  NO MORE TERMITES
                </h3>
                <p className="text-white/75 text-sm sm:text-base leading-relaxed">
                  Subterranean termites and wood borers cannot eat or nest in steel. Enjoy complete lifelong peace of mind without chemical pesticide treatments.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SMART CONSTRUCTION. STYLISH FINISHES. Deep Dive */}
        <div className="relative rounded-3xl bg-white/[0.03] border border-white/10 p-6 sm:p-10 lg:p-12 mb-16 sm:mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-[#D8B97F] text-xs font-bold tracking-widest uppercase block mb-2">
              ENGINEERED PERFECTION
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl text-white font-normal tracking-tight">
              SMART CONSTRUCTION. STYLISH FINISHES.
            </h3>
            <p className="text-white/70 text-sm sm:text-base mt-3">
              The dual-layer advantage: impenetrable strength on the inside, warm designer aesthetics on the outside.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">
            {/* Left: Material Samples Showcase */}
            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/15 group">
                <Image
                  src="/img/ss-materials-layers.jpg"
                  alt="EBONY Smart Construction: Laminate, Acrylic, Fluted Glass outer finishes with 304 SS Frame"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 rounded bg-[#C5A572] text-slate-950 text-xs font-bold tracking-wide uppercase mb-1">
                    OUTER SURFACE
                  </span>
                  <h4 className="font-serif text-white text-base sm:text-lg font-medium">
                    Premium Solid Laminate / Acrylic / Fluted Glass
                  </h4>
                  <p className="text-white/80 text-xs sm:text-sm">
                    BEAUTIFUL OUTSIDE — Matches your home style, color palette, and ritual.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                  <div className="text-[#D8B97F] font-semibold mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Acrylic High Gloss
                  </div>
                  <p className="text-white/60">Glass-like reflection, scratch-resistant</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                  <div className="text-[#D8B97F] font-semibold mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Fluted & Tinted Glass
                  </div>
                  <p className="text-white/60">Contemporary Italian glow & warmth</p>
                </div>
              </div>
            </div>

            {/* Right: 100% SS Carcass & Drawer Detail */}
            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/15 group">
                <Image
                  src="/img/ss-carcass-detail.jpg"
                  alt="EBONY 100% SS Carcass: Strong inside, stable, food-grade 304 steel with Blum drawers"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 rounded bg-slate-200 text-slate-900 text-xs font-bold tracking-wide uppercase mb-1">
                    INNER CORE: 100% SS CARCASS
                  </span>
                  <h4 className="font-serif text-white text-base sm:text-lg font-medium">
                    Food-Grade 304 Surgical Stainless Steel
                  </h4>
                  <p className="text-white/80 text-xs sm:text-sm">
                    STRONG INSIDE — Rigid CNC precision, zero deflection, built for lifetime durability.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                  <div className="text-[#D8B97F] font-semibold mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Blum Hardware
                  </div>
                  <p className="text-white/60">60kg heavy-duty soft-close runners</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                  <div className="text-[#D8B97F] font-semibold mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Laser Welded
                  </div>
                  <p className="text-white/60">Machine precision with zero sharp edges</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Value Pillars Grid */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[#D8B97F] text-xs font-bold tracking-widest uppercase block mb-2">
              WHY STAINLESS STEEL WINS
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              5 Pillars of an EBONY SS Kitchen
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {FIVE_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#D8B97F]/40 hover:bg-white/[0.06] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#D8B97F]/10 border border-[#D8B97F]/20 flex items-center justify-center text-[#D8B97F] mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif text-white font-medium text-base mb-1 tracking-tight">
                      {pillar.title}
                    </h4>
                    <p className="text-[#D8B97F] text-xs font-semibold tracking-wide uppercase mb-3">
                      {pillar.subtitle}
                    </p>
                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Banner & Call to Action */}
        <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#171D2C] via-[#1A2234] to-[#171D2C] border border-[#D8B97F]/30 text-center overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-[#D8B97F] text-xs font-bold tracking-widest uppercase block mb-3">
              KITCHENS THAT GO BEYOND TODAY
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl text-white font-normal tracking-tight mb-4">
              Ready to Upgrade to a Lifetime Stainless Steel Kitchen?
            </h3>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8">
              Experience the sample SS carcasses and luxury front finishes in person at our Raipur design studio, or consult with our master interior architects today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => openEnquiryModal("Stainless Steel (SS) Kitchen Consultation")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#C5A572] hover:bg-[#D4B582] text-slate-950 font-semibold text-sm sm:text-base transition-all duration-300 shadow-xl shadow-amber-500/20 active:scale-95"
              >
                <span>Consult Our SS Kitchen Specialists</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:7974209352"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium text-sm sm:text-base transition-all duration-300"
              >
                <Phone className="w-4 h-4 text-[#D8B97F]" />
                <span>Call 7974209352</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
