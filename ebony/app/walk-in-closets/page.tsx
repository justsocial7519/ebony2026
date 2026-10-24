import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { EnquiryModal } from "@/components/enquiry-modal"
import { WalkInClosetsSection } from "@/components/walk-in-closets-section"
import { MobileStickyBar } from "@/components/mobile-sticky-bar"
import { ArrowUpRight, CheckCircle2, Sparkles, Gem, Sliders } from "lucide-react"

export const metadata = {
  title: "Walk-in Closets & Haute Dressing Suites — EBONY Modular Interiors",
  description:
    "Luxury walk-in closet suites featuring slim anodised aluminium profiles, smoked bronze glass vitrines, velvet accessories islands, and sensor LED channels.",
}

export default function WalkInClosetsPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-amber-500/20 selection:text-slate-900 overflow-x-hidden">
      <Navbar />

      <main className="pt-24 sm:pt-28">
        {/* Hero Section */}
        <section className="relative bg-[#0B0F19] text-white py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/img/walk-in-closet-luxury.jpg"
              alt="EBONY luxury walk-in closet suite"
              fill
              className="object-cover opacity-35 brightness-75 filter"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/60 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#B8923A] font-bold block mb-3">
                HAUTE DRESSING SUITES
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white font-normal leading-[1.1] tracking-tight mb-6">
                Walk-In Closets, <br />
                <span className="not-italic text-[#D8B97F]">The Art of Dressing.</span>
              </h1>
              <p className="font-sans text-sm sm:text-base text-white/80 font-normal leading-relaxed mb-8 max-w-2xl">
                Architectural enclosures featuring smoked bronze glass vitrines, slim anodised aluminium uprights, vertical sensor illumination, and velvet jewelry islands.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="#suites"
                  className="px-6 py-3.5 rounded-full bg-[#B8923A] hover:bg-[#C99E4B] text-slate-950 font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-lg"
                >
                  Explore Dressing Suites
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300 backdrop-blur-md"
                >
                  Curate Dressing Suite
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
                  <Gem className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-slate-950 font-normal mb-1">
                    Central Accessory Islands
                  </h3>
                  <p className="font-sans text-xs text-slate-600 font-normal leading-relaxed">
                    Glass-topped central vitrines with multi-tiered velvet dividers for haute horlogerie, sunglasses, fine jewelry, and cufflinks.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-[#B8923A] shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-slate-950 font-normal mb-1">
                    Integrated Vertical Lighting
                  </h3>
                  <p className="font-sans text-xs text-slate-600 font-normal leading-relaxed">
                    Colour-accurate warm LED channels flush-recessed into aluminum profiles ensure accurate fabric color reflection.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-[#B8923A] shrink-0">
                  <Sliders className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-slate-950 font-normal mb-1">
                    Curtain &amp; Enclosure Systems
                  </h3>
                  <p className="font-sans text-xs text-slate-600 font-normal leading-relaxed">
                    Recessed ceiling tracks for acoustic drapery or floor-to-ceiling glass vitrines that create soft, ambient dressing intimacy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Walk-in Closet Showcase */}
        <div id="suites">
          <WalkInClosetsSection />
        </div>

        {/* Shoe Gallery & Lighting Detail */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 relative h-[420px] sm:h-[500px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/img/collections/wardrobe-bag-display-lit.jpg"
                  alt="Dressing room with mirrored wardrobe doors and lit glass niches displaying handbags"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="lg:col-span-6">
                <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#B8923A] font-bold block mb-3">
                  DISPLAY &amp; CURATION
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-950 font-normal mb-6">
                  Illuminated Shoe Gallerias &amp; Bag Niches.
                </h2>
                <p className="font-sans text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-6">
                  Transform your personal collection into a gallery exhibition. Angled floating shoe shelves with rear acrylic LED diffusion, dedicated display boxes for designer handbags, and concealed ventilation to preserve luxury leather.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "Angled shoe shelves with front anodised bronze retention lips",
                    "Backlit frosted glass shelves with diffuse shadowless illumination",
                    "Automatic opening sensor lighting with smooth dimming curves",
                    "Integrated full-length rotating dressing mirror with vanity shelf",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#B8923A] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-950 hover:bg-[#B8923A] text-white font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300"
                >
                  <span>Curate Your Dressing Suite</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-[#0B0F19] text-white text-center">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#B8923A] font-bold block mb-3">
              BESPOKE DRESSING SANCTUARY
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal mb-6">
              Plan Your Dream Walk-In Suite.
            </h2>
            <p className="font-sans text-sm sm:text-base text-white/70 font-normal leading-relaxed mb-8 max-w-xl mx-auto">
              Visit our Raipur flagship studio for a relaxed design review. We craft spaces that make daily rituals a pleasure.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#B8923A] hover:bg-[#C99E4B] text-slate-950 font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-xl"
            >
              <span>Curate Your Sanctuary</span>
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
