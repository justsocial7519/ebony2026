import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { EnquiryModal } from "@/components/enquiry-modal"
import { WardrobesSection } from "@/components/wardrobes-section"
import { MobileStickyBar } from "@/components/mobile-sticky-bar"
import { ArrowUpRight, CheckCircle2, Sparkles, Layers, SlidersHorizontal } from "lucide-react"

export const metadata = {
  title: "Bespoke Wardrobes — EBONY Modular Interiors",
  description:
    "Explore bespoke sliding and hinged wardrobe systems with Italian damping, internal velvet jewelry organizers, pull-out mirrors, and floor-to-ceiling profiles made to your room height.",
}

export default function WardrobesPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-amber-500/20 selection:text-slate-900 overflow-x-hidden">
      <Navbar />

      <main className="pt-24 sm:pt-28">
        {/* Hero Section */}
        <section className="relative bg-[#0B0F19] text-white py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/img/wardrobe-bespoke-real.jpg"
              alt="EBONY bespoke wardrobe with integrated lighting"
              fill
              className="object-cover opacity-35 brightness-75 filter"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/60 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#B8923A] font-bold block mb-3">
                PERSONAL SANCTUARIES
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white font-normal leading-[1.1] tracking-tight mb-6">
                Bespoke Wardrobes, <br />
                <span className="not-italic text-[#D8B97F]">Built Around the Way You Live.</span>
              </h1>
              <p className="font-sans text-sm sm:text-base text-white/80 font-normal leading-relaxed mb-8 max-w-2xl">
                Transform morning routines into an experience of quiet luxury and absolute order. Floor-to-ceiling sliding and hinged wardrobe systems engineered with Italian damping and sensor illumination.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="#systems"
                  className="px-6 py-3.5 rounded-full bg-[#B8923A] hover:bg-[#C99E4B] text-slate-950 font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-lg"
                >
                  Compare Opening Systems
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300 backdrop-blur-md"
                >
                  Curate Your Wardrobe Space
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Core Advantages */}
        <section className="py-16 bg-[#FAFAFA] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-[#B8923A] shrink-0">
                  <SlidersHorizontal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-slate-950 font-normal mb-1">
                    Floor-to-Ceiling Custom Fit
                  </h3>
                  <p className="font-sans text-xs text-slate-600 font-normal leading-relaxed">
                    Custom built to your room height with no wasted space above. Seamless profiles eliminate dust ledges and create a grand, built-in look.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-[#B8923A] shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-slate-950 font-normal mb-1">
                    Concealed Sensor LED
                  </h3>
                  <p className="font-sans text-xs text-slate-600 font-normal leading-relaxed">
                    Warm vertical LED channels integrated into the aluminum stiles ignite automatically when doors slide or hinge open.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-[#B8923A] shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-slate-950 font-normal mb-1">
                    Anti-Tarnish Velvet Trays
                  </h3>
                  <p className="font-sans text-xs text-slate-600 font-normal leading-relaxed">
                    Custom accessory drawers for luxury watches, precious jewelry, silk ties, and sunglasses lined with anti-tarnish Italian velvet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sliding vs Hinged Systems */}
        <div id="systems">
          <WardrobesSection />
        </div>

        {/* Internal Ergonomics & Pull-Out Mirror Feature */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 relative h-[420px] sm:h-[520px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/img/collections/dressing-room-full-mirror.jpg"
                  alt="Dressing room with a tall full-length mirror panel beside the storage units"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="lg:col-span-6">
                <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#B8923A] font-bold block mb-3">
                  EASY EVERYDAY COMFORTS
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-950 font-normal mb-6">
                  Hidden Slide-Out Mirrors &amp; Easy Pull-Down Hangers.
                </h2>
                <p className="font-sans text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-6">
                  Getting dressed in the morning should feel relaxed and effortless. Pull out a full-length dressing mirror whenever you need it, and glide high-up clothes hangers right down to your hand without needing a step stool.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "Hidden Slide-Out Dressing Mirror — smoothly pulls out and turns to any angle, then slides away invisibly",
                    "Pull-Down Clothes Hanger Lift — brings upper hanging shirts, sarees & suits down to easy reaching height",
                    "Soft-Close Glass Shoe Shelves — keeps your footwear neatly organized and instantly visible",
                    "Velvet Jewelry & Watch Drawers — soft compartments that keep your valuables organized and safe from scratches",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#B8923A] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/collections#wardrobes"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-950 hover:bg-[#B8923A] text-white font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300"
                >
                  <span>Curate Your Storage Suite</span>
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
              MADE FOR YOUR BEDROOM
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal mb-6">
              Customized to Your Exact Ceiling Height.
            </h2>
            <p className="font-sans text-sm sm:text-base text-white/70 font-normal leading-relaxed mb-8 max-w-xl mx-auto">
              Our master craftsmen build to your exact measurements. Visit our showroom or invite a designer to measure your space in Raipur and across India.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#B8923A] hover:bg-[#C99E4B] text-slate-950 font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-xl"
            >
              <span>Curate Your Wardrobe Space</span>
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
