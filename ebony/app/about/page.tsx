import type { Metadata } from "next"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { StudioCtaSection } from "@/components/studio-cta-section"
import { Factory, ShieldCheck, Maximize2, Eye, Sparkles, HeartHandshake, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Why EBONY — Bespoke Modular Kitchens & Wardrobes in Raipur",
  description:
    "Discover why homeowners choose EBONY: German machine precision, BWP Marine Plywood & SS 304 substrates, made-to-measure sizing, and spotless factory-finished installation.",
}

const WHY_POINTS = [
  {
    icon: Factory,
    title: "Direct Factory Precision",
    desc: "Every carcass, groove, and edge is cut on automated German CNC machines in our Raipur manufacturing facility — so every joint fits tightly, without on-site carpentry mess.",
    badge: "German CNC",
  },
  {
    icon: ShieldCheck,
    title: "True BWP Marine Plywood & SS 304",
    desc: "We refuse to compromise with particleboard. We build exclusively with certified IS 710 Boiling Water Proof marine plywood and surgical SS 304 stainless steel in all wet sink zones.",
    badge: "Water-Resistant Core",
  },
  {
    icon: Maximize2,
    title: "Tailored to Every Millimeter",
    desc: "We don't sell rigid standard boxes. Every cabinet width, drawer depth, and ceiling-height shutter is custom-engineered to fit your exact architectural dimensions and daily routine.",
    badge: "Zero Space Waste",
  },
  {
    icon: Eye,
    title: "3D Visualization Before Production",
    desc: "Walk through your layout in photorealistic 3D, select physical material swatches, and inspect every detail with our interior architects before a single panel is machined.",
    badge: "Interactive 3D",
  },
  {
    icon: Sparkles,
    title: "Clean, Tidy Installation",
    desc: "All routing, edging, and hardware boring take place inside our sterile workshop. When our fitting team arrives at your home, assembly is quiet, seamless, and spotless.",
    badge: "Tidy Home",
  },
  {
    icon: HeartHandshake,
    title: "Honest Pricing & Dedicated Support",
    desc: "You receive itemized, transparent quotes with zero hidden markups. A dedicated design manager oversees your project from first measurement to final handover and ongoing care.",
    badge: "Direct Relationship",
  },
]

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-amber-500/20 selection:text-slate-900">
      <Navbar />

      <main className="pt-28">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 pt-8 pb-14 border-b border-slate-100">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="font-mono text-[13px] uppercase tracking-[0.14em] text-[#B8923A] font-semibold block mb-3">
                WHY CHOOSE EBONY · OUR ATELIER PHILOSOPHY
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-slate-950 font-normal leading-[1.1] tracking-tight">
                Crafting spaces that outlive <br />
                <span className="text-[#855E15] font-normal not-italic">their moment.</span>
              </h1>
            </div>
            <p className="text-slate-600 max-w-sm text-sm sm:text-base leading-relaxed font-normal">
              EBONY was founded with a singular, uncompromising vision: to bring German machine precision and immaculate finish quality directly to homes in Central India — replacing chaotic carpentry with pristine factory-engineered modular systems.
            </p>
          </div>
        </section>

        {/* Studio Showcase Photography */}
        <section className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 py-14">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 shadow-xl group">
              <Image
                src="/img/kitchen-island-real.jpg"
                alt="EBONY Waterfall Island Kitchen Architecture"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="font-mono text-xs uppercase tracking-wider text-[#E8CF9C]">Culinary Architecture</span>
                <p className="font-serif text-xl sm:text-2xl mt-1">Waterfall Island &amp; Fluted Cabinetry</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 shadow-xl group">
              <Image
                src="/img/wardrobe-bespoke-real.jpg"
                alt="EBONY Floor-to-Ceiling Wardrobe Joinery"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="font-mono text-xs uppercase tracking-wider text-[#E8CF9C]">Bespoke Storage</span>
                <p className="font-serif text-xl sm:text-2xl mt-1">Floor-to-Ceiling Sliding Wardrobe</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose EBONY Proof Points Grid */}
        <section className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 py-12 sm:py-16">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="font-mono text-[13px] uppercase tracking-[0.14em] text-[#B8923A] font-semibold block mb-2">
              THE EBONY STANDARD
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-950 font-normal tracking-tight">
              Six reasons homeowners trust us.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-4">
              We focus on honest engineering, exceptional materials, and meticulous assembly so your home looks and functions beautifully for generations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {WHY_POINTS.map((point) => {
              const Icon = point.icon
              return (
                <div
                  key={point.title}
                  className="bg-[#FAFAFA] border border-slate-200/80 rounded-3xl p-7 sm:p-8 hover:border-[#B8923A]/50 hover:bg-white hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-[#111625] text-[#D8B97F] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm">
                        <Icon className="w-6 h-6 text-[#D8B97F]" />
                      </div>
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
                        {point.badge}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl text-slate-950 font-normal mb-3 group-hover:text-[#855E15] transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-[15px] font-normal leading-relaxed">
                      {point.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-emerald-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Included in every project</span>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Living Room & Bar Showcase Photo */}
        <section className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 py-10">
          <div className="relative rounded-3xl overflow-hidden aspect-[21/9] sm:aspect-[21/8] min-h-[300px] border border-slate-200 shadow-2xl">
            <Image
              src="/img/bar-unit-luxury.jpg"
              alt="EBONY Bar and Living Room Unit Craftsmanship"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
            <div className="absolute inset-0 p-8 sm:p-14 flex flex-col justify-center max-w-xl text-white">
              <span className="font-mono text-xs uppercase tracking-widest text-[#E8CF9C] mb-2 font-semibold">
                ARCHITECTURAL MILLWORK
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl font-normal leading-tight">
                Designed to harmonize your entire living space.
              </h3>
              <p className="text-white/80 text-xs sm:text-sm mt-3 leading-relaxed">
                From showstopper kitchens to walk-in dressing suites and glowing bar lounges, we coordinate finishes, hardware, and lighting across your whole home.
              </p>
            </div>
          </div>
        </section>

        {/* Studio Consultation CTA */}
        <StudioCtaSection />
      </main>

      <Footer />
    </div>
  )
}
