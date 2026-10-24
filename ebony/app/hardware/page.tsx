import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { EnquiryModal } from "@/components/enquiry-modal"
import { HardwareBrandsSection } from "@/components/hardware-brands-section"
import { InternalFittingsSection } from "@/components/internal-fittings-section"
import { MobileStickyBar } from "@/components/mobile-sticky-bar"
import { ArrowUpRight, Cpu, ShieldCheck, Cog } from "lucide-react"

export const metadata = {
  title: "Hardware Partners & Internal Fittings — EBONY Modular Interiors",
  description:
    "Explore world-class motion engineering by Blum, Häfele, Hettich, Salice, and Ebco. Precision-tested with whisper-quiet soft-close damping and Aventos lift systems.",
}

export default function HardwarePage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-amber-500/20 selection:text-slate-900 overflow-x-hidden">
      <Navbar />

      <main className="pt-24 sm:pt-28">
        {/* Hero Section */}
        <section className="relative bg-[#0B0F19] text-white py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/img/hardware-fittings-luxury.jpg"
              alt="EBONY precision German hardware and motion engineering"
              fill
              className="object-cover opacity-35 brightness-75 filter"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/60 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#B8923A] font-bold block mb-3">
                PRECISION MOTION ENGINEERING
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white font-normal leading-[1.1] tracking-tight mb-6">
                Hardware Partners, <br />
                <span className="not-italic text-[#D8B97F]">Flawless Motion Engineering.</span>
              </h1>
              <p className="font-sans text-sm sm:text-base text-white/80 font-normal leading-relaxed mb-8 max-w-2xl">
                We equip every drawer, lift, and hinge with certified components from Blum, Häfele, Hettich, Salice, and Ebco. Engineered for effortless daily use without sag or misalignment.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="#brands"
                  className="px-6 py-3.5 rounded-full bg-[#B8923A] hover:bg-[#C99E4B] text-slate-950 font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-lg"
                >
                  Meet the Brands
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300 backdrop-blur-md"
                >
                  Experience Live Motion
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Engineering Standards */}
        <section className="py-16 bg-[#FAFAFA] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-[#B8923A] shrink-0">
                  <Cog className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-slate-950 font-normal mb-1">
                    Continuous Load Testing
                  </h3>
                  <p className="font-sans text-xs text-slate-600 font-normal leading-relaxed">
                    Certified under heavy continuous loads to ensure long-term soft-close damping and precise hinge alignment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-[#B8923A] shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-slate-950 font-normal mb-1">
                    Blum Aventos Motion
                  </h3>
                  <p className="font-sans text-xs text-slate-600 font-normal leading-relaxed">
                    Bi-fold and up-and-over mechanisms engineered to stop reliably at any opening angle with feather-light touch and integrated Blumotion.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-[#B8923A] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-slate-950 font-normal mb-1">
                    Comprehensive Quality Assurance
                  </h3>
                  <p className="font-sans text-xs text-slate-600 font-normal leading-relaxed">
                    All genuine motion hardware is protected by EBONY&apos;s rigorous quality assurance and backed by dedicated after-sales technical support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Verified Hardware Brands */}
        <div id="brands">
          <HardwareBrandsSection />
        </div>

        {/* Internal Fittings & Mirror Showcase */}
        <InternalFittingsSection />

        {/* Studio Invitation CTA */}
        <section className="py-20 bg-[#0B0F19] text-white text-center">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#B8923A] font-bold block mb-3">
              FEEL THE ENGINEERING
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal mb-6">
              Test Our Hardware Live.
            </h2>
            <p className="font-sans text-sm sm:text-base text-white/70 font-normal leading-relaxed mb-8 max-w-xl mx-auto">
              Visit our Raipur studio to experience the feather-light opening and silent damping of authentic Blum and Hettich motion systems.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#B8923A] hover:bg-[#C99E4B] text-slate-950 font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-xl"
            >
              <span>Experience Live Engineering</span>
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
