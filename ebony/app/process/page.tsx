import type { Metadata } from "next"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { EnquiryModal } from "@/components/enquiry-modal"
import { StudioCtaSection } from "@/components/studio-cta-section"
import { MobileStickyBar } from "@/components/mobile-sticky-bar"

export const metadata: Metadata = {
  title: "Three Steps to a Finished Home | EBONY Modern Engineering",
  description:
    "Discover how EBONY delivers bespoke modular kitchens and interiors in a few clear steps, with precision engineering and no on-site carpentry mess.",
}

const STAGES = [
  {
    day: "01",
    subtitle: "Step 01 · Space Audit & Laser Shell",
    title: "Laser Shell & Modular Carcass",
    desc: "Precision technicians anchor base modules dead level using laser levels. Damp-proof neoprene mounts isolate moisture and floor variations.",
    image: "/img/process-engineering.jpg",
  },
  {
    day: "02",
    subtitle: "Step 02 · Fronts & Hardware Calibration",
    title: "Fronts & Motion Synchronization",
    desc: "Shutters and fluted doors are aligned with an exact, even hairline reveal. Blum Aventos and Hettich concealed channels are dynamically calibrated to load.",
    image: "/img/why-after-sales.jpg",
    alt: "Technician adjusting the hinge of a kitchen wall cabinet door",
  },
  {
    day: "03",
    subtitle: "Step 03 · Ambient Illumination & Handover",
    title: "Integrated Illumination & Handover",
    desc: "Recessed warm LED channels are switched on. A detailed quality check is signed off, and your comprehensive warranty certificate is handed over.",
    image: "/img/hero-kitchen.jpg",
  },
]

export default function ProcessPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-amber-500/20 selection:text-slate-900">
      <Navbar />

      <main className="pt-28">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 pt-8 pb-12 border-b border-slate-100">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-mono text-[13px] uppercase tracking-[0.12em] text-[#B8923A] font-semibold block mb-3">
                ENGINEERING STANDARD
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-slate-950 font-normal leading-[1.1]">
                Three Steps to a <span className="text-[#855E15] font-medium">Finished Home</span>
              </h1>
            </div>
            <p className="text-slate-600 max-w-sm text-xs sm:text-sm leading-relaxed font-normal">
              Zero on-site sawing, no dust, no unending delays. Pre-engineered modules arrive factory-finished for rapid, silent assembly.
            </p>
          </div>
        </section>

        {/* Step-by-step visual stories (Large Editorial Layout) */}
        <section className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 py-16 space-y-20">
          {STAGES.map((s, idx) => (
            <div
              key={s.day}
              className={`grid md:grid-cols-12 gap-8 lg:gap-14 items-center ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={`md:col-span-7 ${idx % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-slate-200 shadow-xl group">
                  <Image
                    src={s.image}
                    alt={s.alt ?? s.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-fluid group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#0B0F19]/90 backdrop-blur-md border border-white/20 text-[#C99E4B] font-mono text-xs font-semibold tracking-wider shadow-lg">
                    STEP {s.day}
                  </div>
                </div>
              </div>

              <div className={`md:col-span-5 ${idx % 2 === 1 ? "md:order-1" : "md:order-2"}`}>
                <span className="font-mono text-[13px] uppercase tracking-[0.12em] text-[#B8923A] font-semibold block mb-2">
                  {s.subtitle}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-slate-950 font-normal mb-4">
                  {s.title}
                </h2>
                <p className="text-slate-600 text-sm font-normal leading-relaxed mb-6">
                  {s.desc}
                </p>
                <div className="pt-4 border-t border-slate-100 flex items-center gap-6 font-mono text-xs text-slate-500">
                  <span className="text-[#855E15] font-semibold">Precision CNC Tolerance</span>
                  <span>·</span>
                  <span>Comprehensive Warranty</span>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Unified Studio Booking Section matching homepage */}
        <StudioCtaSection />
      </main>

      <EnquiryModal />
      <MobileStickyBar />

      <Footer />
    </div>
  )
}
