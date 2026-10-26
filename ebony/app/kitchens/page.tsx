import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { KitchenConfigurationsSection } from "@/components/kitchen-configurations-section"
import { KitchenStylesSection } from "@/components/kitchen-styles-section"
import { StainlessSteelKitchenSection } from "@/components/stainless-steel-kitchen-section"
import { ComfortSection } from "@/components/comfort-section"
import { EnquiryButton } from "@/components/enquiry-button"
import { EnquiryModal } from "@/components/enquiry-modal"
import { MobileStickyBar } from "@/components/mobile-sticky-bar"
import { SectionHeader } from "@/components/ui/section-header"
import { HOME_CONTENT } from "@/lib/home-content"
import { ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles, ChefHat } from "lucide-react"

export const metadata = {
  title: "Modular Kitchens — EBONY Modular Interiors",
  description:
    "Explore German-engineered luxury modular kitchens. L-shape, U-shape, parallel, straight, and island kitchen layouts with curated finishes and Blum motion technology.",
}

// When each layout is the right pick; the layout cards above link to these rows by their #anchor
const LAYOUT_FIT: Record<string, string> = {
  "l-shape": "Your kitchen has a corner and you want easy movement between the sink, hob and fridge.",
  "u-shape": "You cook often and want counter space and storage on three sides.",
  straight: "Your kitchen is small or narrow, or sits along a single wall.",
  island: "You have room for a counter in the middle, to cook, chat and eat together.",
  parallel: "Your kitchen is a long room, with a clear walkway between two runs of units.",
  "open-kitchen": "Your kitchen opens into the living or dining room and should look good from the sofa.",
}

export default function KitchensPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-amber-500/20 selection:text-slate-900 overflow-x-hidden">
      <Navbar />

      <main className="pt-24 sm:pt-28">
        {/* Hero Section */}
        <section className="relative bg-[#0B0F19] text-white py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/img/kitchen-island-real.jpg"
              alt="EBONY luxury island kitchen with fluted detailing"
              fill
              className="object-cover opacity-35 brightness-75 filter"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/60 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#B8923A] font-bold block mb-3">
                CULINARY ARCHITECTURE
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white font-normal leading-[1.1] tracking-tight mb-6">
                Modular Kitchens, <br />
                <span className="not-italic text-[#D8B97F]">Engineered for Life.</span>
              </h1>
              <p className="font-sans text-sm sm:text-base text-white/80 font-normal leading-relaxed mb-8 max-w-2xl">
                Where culinary ergonomics meets understated luxury. Every EBONY kitchen is built with BWP Marine Plywood or surgical SS 304 carcasses, German CNC tolerances, and whisper-quiet Blum motion technology.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="#configurations"
                  className="px-6 py-3.5 rounded-full bg-[#B8923A] hover:bg-[#C99E4B] text-slate-950 font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-lg"
                >
                  Explore Layouts
                </Link>
                <Link
                  href="/kitchen-studio"
                  className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300 backdrop-blur-md"
                >
                  Curate 3D Design Session
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars of an EBONY Kitchen */}
        <section className="py-16 bg-[#FAFAFA] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-[#B8923A] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-slate-950 font-normal mb-1">
                    Boiling Water Proof
                  </h3>
                  <p className="font-sans text-xs text-slate-600 font-normal leading-relaxed">
                    IS 710 calibrated marine plywood or SS 304 surgical stainless steel base carcasses protect against swelling and fungal decay.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-[#B8923A] shrink-0">
                  <ChefHat className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-slate-950 font-normal mb-1">
                    Chef&apos;s Work Triangle
                  </h3>
                  <p className="font-sans text-xs text-slate-600 font-normal leading-relaxed">
                    Engineered distances between refrigeration, washing, and cooking zones minimize fatigue and optimize culinary preparation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-[#B8923A] shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-slate-950 font-normal mb-1">
                    Blum Aventos Motion
                  </h3>
                  <p className="font-sans text-xs text-slate-600 font-normal leading-relaxed">
                    Motorized and mechanical lift-up systems for overhead cabinets that open effortlessly and stay in place without head collisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comfort: numbered reach points on a real kitchen photo */}
        <ComfortSection />

        {/* Layout Configurations */}
        <div id="configurations">
          <KitchenConfigurationsSection />
        </div>

        {/* Layouts one by one: the anchors the layout cards and footer links jump to */}
        <section id="layouts" className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <SectionHeader
              kicker="Layouts, one by one"
              title="Which shape"
              accent="suits your home?"
              subtitle="Not sure yet? Tell us about your room and your designer will suggest the one that works best."
            />
            <ul className="border-t border-[#E6E1D8]">
              {HOME_CONTENT.collections.layouts.map((layout) => {
                const anchor = layout.href.split("#")[1]
                return (
                  <li
                    key={layout.id}
                    id={anchor}
                    className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-4 py-8 sm:py-10 border-b border-[#E6E1D8] lg:items-center"
                  >
                    <div className="lg:col-span-4">
                      <span className="kicker">{layout.tag}</span>
                      <h3 className="font-serif text-3xl sm:text-4xl text-slate-950 font-normal tracking-tight mt-3">
                        {layout.name}
                      </h3>
                    </div>
                    <div className="lg:col-span-5">
                      <p className="text-base sm:text-lg text-slate-700 leading-relaxed">{layout.line}</p>
                      {LAYOUT_FIT[layout.id] && (
                        <p className="text-[15px] text-slate-600 leading-relaxed mt-3">
                          <span className="font-semibold text-slate-950">A good pick when </span>
                          {LAYOUT_FIT[layout.id].charAt(0).toLowerCase() + LAYOUT_FIT[layout.id].slice(1)}
                        </p>
                      )}
                    </div>
                    <div className="lg:col-span-3 lg:justify-self-end">
                      <EnquiryButton
                        detail={{ design: `${layout.name} kitchen`, category: "Kitchen layout" }}
                        className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 rounded-full bg-slate-950 hover:bg-[#8E6D38] text-white text-[15px] font-semibold transition-colors active:scale-[0.98] cursor-pointer"
                      >
                        Plan This Layout
                        <ArrowUpRight className="w-4 h-4" />
                      </EnquiryButton>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>

        {/* Island Kitchen Architecture Spotlight */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 relative h-[400px] sm:h-[500px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/img/kitchen-small-spaces.jpg"
                  alt="Compact kitchen with a tall pull-out grocery pantry open beside the built-in oven"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="lg:col-span-6">
                <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#B8923A] font-bold block mb-3">
                  SMART INTERNAL STORAGE
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-950 font-normal mb-6">
                  Tall Grocery Pantries, Magic Corner Trays &amp; Hidden Appliance Stations.
                </h2>
                <p className="font-sans text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-6">
                  A truly luxurious kitchen looks neat and tidy every single day. Store your daily groceries in full-height pull-outs, reach corner utensils effortlessly with smooth swivel trays, and tuck your mixer and toaster away into a hidden countertop station.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "Magic Corner Swivel Trays — smooth pull-outs that bring deep corner pots right to your fingertips",
                    "Hidden Appliance Station — keeps your mixer, toaster & coffee maker plugged in and neatly concealed",
                    "Full-Height Grocery Pantry — multi-tier pull-out baskets with generous room for all family groceries",
                    "Deep Soft-Close Drawers — heavy-duty smooth compartments for thalis, kadhais & daily cutlery",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#B8923A] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/collections#kitchens"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-950 hover:bg-[#B8923A] text-white font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300"
                >
                  <span>Request Curated Lookbook</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Design Styles */}
        <KitchenStylesSection />

        {/* Stainless Steel (SS) Kitchens */}
        <StainlessSteelKitchenSection />

        {/* Consultation Call to Action */}
        <section className="py-20 bg-[#0B0F19] text-white text-center">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#B8923A] font-bold block mb-3">
              BEGIN YOUR CULINARY PROJECT
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal mb-6">
              Bring Your Floor Plan to Our Studio.
            </h2>
            <p className="font-sans text-sm sm:text-base text-white/70 font-normal leading-relaxed mb-8 max-w-xl mx-auto">
              Our architects will review your dimensions, recommend the ideal layout, and provide photorealistic 3D visuals with exact material samples.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#B8923A] hover:bg-[#C99E4B] text-slate-950 font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-xl"
            >
              <span>Curate Your Culinary Space</span>
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
