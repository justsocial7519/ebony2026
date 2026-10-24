import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { EnquiryModal } from "@/components/enquiry-modal"
import { SurfaceFinishesSection } from "@/components/surface-finishes-section"
import { CoreMaterialsSection } from "@/components/core-materials-section"
import { MobileStickyBar } from "@/components/mobile-sticky-bar"
import { ArrowUpRight, Palette, Layers, Sparkles } from "lucide-react"

export const metadata = {
  title: "Curated Surface Finishes & Core Materials — EBONY Modular Interiors",
  description:
    "Explore curated bespoke finishes: Italian PU lacquers, anti-fingerprint laminates, optical acrylics, smoked glass, Terulam stone, and certified BWP Marine Plywood & SS304 substrates.",
}

export default function FinishesPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-amber-500/20 selection:text-slate-900 overflow-x-hidden">
      <Navbar />

      <main className="pt-24 sm:pt-28">
        {/* Hero Section */}
        <section className="relative bg-[#0B0F19] text-white py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/img/core-materials-luxury.jpg"
              alt="EBONY materials and finishes library"
              fill
              className="object-cover opacity-35 brightness-75 filter"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/60 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#B8923A] font-bold block mb-3">
                MATERIAL LIBRARY &amp; SUBSTRATES
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white font-normal leading-[1.1] tracking-tight mb-6">
                Curated Finishes, <br />
                <span className="not-italic text-[#D8B97F]">Enduring Tactile Luxury.</span>
              </h1>
              <p className="font-sans text-sm sm:text-base text-white/80 font-normal leading-relaxed mb-8 max-w-2xl">
                From seamless all-round Italian PU lacquers and optical acrylics to indestructible SS 304 surgical stainless steel and BWP Marine Plywood. Explore materials engineered for a lifetime.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="#finishes-section"
                  className="px-6 py-3.5 rounded-full bg-[#B8923A] hover:bg-[#C99E4B] text-slate-950 font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-lg"
                >
                  Browse the Finishes
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300 backdrop-blur-md"
                >
                  Experience Finishes in Person
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="py-16 bg-[#FAFAFA] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-[#B8923A] shrink-0">
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-slate-950 font-normal mb-1">
                    Bespoke Color Matching
                  </h3>
                  <p className="font-sans text-xs text-slate-600 font-normal leading-relaxed">
                    Custom RAL and Pantone color matching in seamless Italian PU spray lacquer applied in sterile cleanroom environments.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-[#B8923A] shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-slate-950 font-normal mb-1">
                    Invisible Laser Edging
                  </h3>
                  <p className="font-sans text-xs text-slate-600 font-normal leading-relaxed">
                    German laser edge-banding seals panel borders invisibly with waterproof polymer fusion, eliminating dirt lines and water ingress.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-[#B8923A] shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-slate-950 font-normal mb-1">
                    Thermal Healing Surfaces
                  </h3>
                  <p className="font-sans text-xs text-slate-600 font-normal leading-relaxed">
                    High-pressure nanotechnology laminates and ultra-matte surfaces that resist fingerprints and allow micro-scratches to heal with heat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Swatch Matrix */}
        <SurfaceFinishesSection />

        {/* Core Materials Substrate Section */}
        <CoreMaterialsSection />

        {/* Studio Swatch Invitation CTA */}
        <section className="py-20 bg-[#0B0F19] text-white text-center">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#B8923A] font-bold block mb-3">
              FEEL THE TACTILE QUALITY
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal mb-6">
              Experience Our Finishes in Person.
            </h2>
            <p className="font-sans text-sm sm:text-base text-white/70 font-normal leading-relaxed mb-8 max-w-xl mx-auto">
              Screen renders cannot convey the velvety touch of Italian super-matte lacquer or the weighty glide of an anodised bronze shutter. Visit our Raipur flagship studio.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#B8923A] hover:bg-[#C99E4B] text-slate-950 font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-xl"
            >
              <span>Reserve Design Session</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <EnquiryModal />
      <MobileStickyBar />

      <Footer />
    </div>
  )
}
