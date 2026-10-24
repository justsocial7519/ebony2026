import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Droplets,
  Layers,
  MessageCircle,
  Phone,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhyEbonySection } from "@/components/why-ebony-section"
import { ComfortSection } from "@/components/comfort-section"
import { StudioCtaSection } from "@/components/studio-cta-section"
import { EnquiryModal } from "@/components/enquiry-modal"
import { EnquiryButton } from "@/components/enquiry-button"
import { MobileStickyBar } from "@/components/mobile-sticky-bar"
import { BRAND } from "@/lib/content"
import { HOME_CONTENT } from "@/lib/home-content"

export const metadata: Metadata = {
  title: "Why Ebony — Why Families Choose Our Kitchens & Wardrobes | EBONY, Raipur",
  description:
    "A lifetime warranty on SS 304 baskets and fittings, a warranty on woodwork, strong materials, clean fitting, clear pricing and after-sales support. See why families choose Ebony in Raipur.",
}

const WHATSAPP_URL =
  "https://wa.me/917974209352?text=Hello%20Ebony%2C%20I%20need%20help%20with%20my%20kitchen%20or%20wardrobe."

// Photos and wording come from the shared "why families choose us" content, so they stay in sync with the homepage
const POINTS = HOME_CONTENT.whyLoveUs.points
const point = (id: string) => POINTS.find((p) => p.id === id)

// "Blum, Häfele and Hettich"
const brandList = (names: string[]) =>
  names.length > 1 ? `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}` : names.join("")

const MATERIALS: { icon: LucideIcon; title: string; line: string }[] = [
  {
    icon: Droplets,
    title: "Waterproof plywood",
    line: "Used around the sink and in base units, where water is never far away, so doors and shelves stay straight.",
  },
  {
    icon: Layers,
    title: "Strong, moisture-resistant boards",
    line: "Dense boards for shutters and wall units. They hold screws firmly and take a smooth, even finish.",
  },
  {
    icon: ShieldCheck,
    title: "SS 304 stainless steel",
    line: "Rust-proof steel for baskets and fittings. Every one we fit comes with a lifetime warranty.",
  },
  {
    icon: Wrench,
    title: "Fittings from trusted brands",
    line: `Soft-close hinges, drawer runners and lift-ups from makers such as ${brandList(HOME_CONTENT.fittings.trustedBrands.slice(0, 3))}.`,
  },
]

const SUPPORT_STEPS = [
  { title: "Call or message us", line: "Ring the studio or send a WhatsApp message, whichever is easier." },
  { title: "Tell us what needs a touch", line: "A hinge to adjust, a drawer to align, a door that needs a look." },
  { title: "Our team comes back", line: "We visit your home and put it right." },
]

export default function WhyEbonyPage() {
  const visit = point("visit")
  const lifetime = point("lifetime-ss304")
  const support = point("after-sales")
  const materials = point("materials")
  const woodwork = point("warranty")

  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-amber-500/20 selection:text-slate-900 overflow-x-clip">
      <Navbar />

      <main className="pt-[69px]">
        {/* Hero: left-aligned text, three photos from the promises below */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-14 sm:pt-20 pb-16 sm:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 lg:items-center">
            <div className="lg:col-span-6">
              <span className="kicker">Why Ebony</span>
              <h1 className="font-serif font-normal text-slate-950 tracking-tight leading-[1.08] text-[2.5rem] sm:text-6xl lg:text-[4.2rem] mt-5 text-balance">
                Made carefully, <span className="text-[#9A7637]">backed properly.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mt-6 max-w-lg">
                Every Ebony kitchen and wardrobe is made in our own Raipur factory and fitted cleanly in your home by our
                own team. Here is what stands behind each one.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <EnquiryButton
                  detail={{ category: "Designer home visit" }}
                  className="inline-flex items-center justify-center gap-2 min-h-[52px] px-7 rounded-full bg-slate-950 hover:bg-[#8E6D38] text-white font-semibold transition-colors active:scale-[0.98] cursor-pointer"
                >
                  Invite a Designer Home <ArrowUpRight className="w-4 h-4" />
                </EnquiryButton>
                <Link
                  href="#why-us"
                  className="group inline-flex items-center gap-2 min-h-[44px] text-[15px] font-semibold text-[#8E6D38] hover:text-slate-950 transition-colors"
                >
                  See what you can count on
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-5 grid-rows-2 gap-3 sm:gap-4 h-[400px] sm:h-[520px] lg:h-[560px]">
              {[
                { p: visit, span: "col-span-3 row-span-2", sizes: "(max-width: 1024px) 60vw, 30vw", first: true },
                { p: lifetime, span: "col-span-2", sizes: "(max-width: 1024px) 40vw, 20vw", first: false },
                { p: support, span: "col-span-2", sizes: "(max-width: 1024px) 40vw, 20vw", first: false },
              ].map(
                ({ p, span, sizes, first }) =>
                  p && (
                    <div key={p.id} className={`relative overflow-hidden rounded-[1.5rem] bg-stone-100 ${span}`}>
                      <Image
                        src={p.image}
                        alt={p.alt ?? p.title}
                        fill
                        preload={first}
                        className="object-cover transition-transform duration-1000 ease-out hover:scale-[1.04]"
                        sizes={sizes}
                      />
                      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B0F19]/85 to-transparent px-4 pb-4 pt-12 font-serif text-lg sm:text-xl text-white leading-tight">
                        {p.title}
                      </span>
                    </div>
                  )
              )}
            </div>
          </div>
        </section>

        {/* The seven promises, shared with the homepage */}
        <WhyEbonySection />

        {/* Material quality, in plain words */}
        <section id="materials" className="bg-white py-20 sm:py-28 scroll-mt-[69px]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 lg:items-center">
            {materials && (
              <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-[4/5] rounded-[1.75rem] overflow-hidden bg-stone-100">
                <Image
                  src={materials.image}
                  alt={materials.alt ?? materials.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            )}

            <div className="lg:col-span-7">
              <span className="kicker">Material quality</span>
              <h2 className="font-serif text-[2.1rem] leading-[1.12] sm:text-5xl font-normal tracking-tight mt-4 text-slate-950 text-balance">
                Strong where it <span className="text-[#9A7637]">matters most</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mt-5 max-w-xl">
                We pick the right material for each part of your kitchen and wardrobe, and you see and touch every
                sample before you decide.
              </p>

              <ul className="mt-9 border-t border-[#E6E1D8]">
                {MATERIALS.map(({ icon: Icon, title, line }) => (
                  <li key={title} className="flex items-start gap-5 py-6 border-b border-[#E6E1D8]">
                    <span className="shrink-0 w-12 h-12 rounded-2xl bg-[#F5EDE3] text-[#8E6D38] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl text-slate-950 font-normal">{title}</h3>
                      <p className="text-[15px] sm:text-base text-slate-600 leading-relaxed mt-1.5">{line}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-x-8 gap-y-3">
                <Link
                  href="/finishes"
                  className="group inline-flex items-center gap-2 min-h-[44px] text-[15px] font-semibold text-[#8E6D38] hover:text-slate-950 transition-colors"
                >
                  See materials and finishes
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/hardware"
                  className="group inline-flex items-center gap-2 min-h-[44px] text-[15px] font-semibold text-[#8E6D38] hover:text-slate-950 transition-colors"
                >
                  Meet our fittings
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Warranty and after-sales support */}
        <section id="after-sales" className="bg-[#FBF8F3] py-16 sm:py-24 scroll-mt-[69px]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 rounded-[2rem] bg-[#0B0F19] text-white overflow-hidden">
              <div className="lg:col-span-6 px-6 py-10 sm:px-10 sm:py-14 lg:py-16 flex flex-col justify-center">
                <span className="kicker kicker-dark">Warranty &amp; support</span>
                <h2 className="font-serif text-[2.1rem] leading-[1.12] sm:text-5xl font-normal tracking-tight mt-4 text-balance">
                  Something needs a touch? <span className="text-[#D8B97F]">We come back to help.</span>
                </h2>
                <p className="text-base sm:text-lg text-white/75 leading-relaxed mt-5 max-w-md">
                  {support?.line} Ask your designer about the warranty at your home design visit.
                </p>
                <div className="mt-9 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${BRAND.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 min-h-[52px] px-7 rounded-full bg-[#C5A572] hover:bg-[#D4B582] text-slate-950 font-semibold transition-colors active:scale-[0.98]"
                  >
                    <Phone className="w-4 h-4" />
                    Call {BRAND.phone}
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 min-h-[52px] px-7 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white font-semibold transition-colors active:scale-[0.98]"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    WhatsApp us
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6 px-6 py-10 sm:px-10 sm:py-14 lg:py-16 bg-white/[0.04] lg:border-l border-t lg:border-t-0 border-white/10">
                <h3 className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#E8CF9C]">What is covered</h3>
                <ul className="mt-5 space-y-5">
                  {[
                    { icon: ShieldCheck, p: lifetime },
                    { icon: Award, p: woodwork },
                  ].map(
                    ({ icon: Icon, p }) =>
                      p && (
                        <li key={p.id} className="flex items-start gap-4">
                          <span className="shrink-0 w-11 h-11 rounded-2xl bg-[#C5A572] text-slate-950 flex items-center justify-center">
                            <Icon className="w-5 h-5" />
                          </span>
                          <div>
                            <p className="font-serif text-xl text-white">{p.title}</p>
                            <p className="text-[15px] text-white/70 leading-relaxed mt-1">{p.line}</p>
                          </div>
                        </li>
                      )
                  )}
                </ul>

                <h3 className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#E8CF9C] mt-10">
                  If you ever need us
                </h3>
                <ol className="mt-5 space-y-5">
                  {SUPPORT_STEPS.map((step, index) => (
                    <li key={step.title} className="flex items-start gap-4">
                      <span className="shrink-0 w-11 h-11 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center font-serif text-lg tabular-nums">
                        {index + 1}
                      </span>
                      <div className="pt-0.5">
                        <p className="text-[17px] font-semibold text-white">{step.title}</p>
                        <p className="text-[15px] text-white/70 leading-relaxed mt-0.5">{step.line}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Comfort: heights and reach planned around you */}
        <ComfortSection />

        <StudioCtaSection />
      </main>

      <EnquiryModal />
      <MobileStickyBar />
      <Footer />
    </div>
  )
}
