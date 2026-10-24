import type { Metadata } from "next"
import Image from "next/image"
import { ArrowUpRight, CheckCircle2, Coffee, Hotel, Phone, UtensilsCrossed } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { EnquiryModal } from "@/components/enquiry-modal"
import { EnquiryButton } from "@/components/enquiry-button"
import { MobileStickyBar } from "@/components/mobile-sticky-bar"
import { BRAND } from "@/lib/content"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Chef's Favourite Corner — Commercial Kitchens for Restaurants, Hotels & Cafés | EBONY",
  description:
    "SS 304 stainless steel commercial kitchens in Raipur: work tables, sinks, racks, exhaust hoods, layout design, installation, and bar and café counters.",
}

const ENQUIRY = { category: "Commercial kitchen (Chef's Favourite Corner)" }

const BUILT_FOR = [
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    line: "Cooking lines, prep areas and wash zones laid out for a busy service.",
    image: "/img/chefs/chefs-wok.jpg",
    alt: "Chef cooking over a high flame in a restaurant kitchen",
  },
  {
    icon: Hotel,
    title: "Hotels",
    line: "Large kitchens for banquets, room service and all-day dining.",
    image: "/img/chefs/chefs-hotel-kitchen.jpg",
    alt: "Bright stainless steel hotel kitchen with long work tables",
  },
  {
    icon: Coffee,
    title: "Cafés & bars",
    line: "Counters and back-bar storage that look good in front of guests.",
    image: "/img/chefs/chefs-cafe-counter.jpg",
    alt: "Minimal café with a glossy white service counter",
  },
]

const OFFERINGS = [
  {
    kicker: "Steel that works hard",
    title: "SS 304 work tables, sinks and racks",
    line: "Every table, sink and rack is made in food-grade SS 304 stainless steel and cut to the size of your kitchen.",
    points: ["Work tables with under-shelves", "Single and double bowl sinks", "Wall shelves and storage racks", "Made to your exact sizes"],
    image: "/img/chefs/chefs-ss-tables.jpg",
    alt: "Stainless steel work tables and counters in a commercial kitchen",
  },
  {
    kicker: "Clear air, cool chefs",
    title: "Exhaust hoods and ventilation",
    line: "Smoke and heat leave the kitchen quickly, so your team stays comfortable through a long shift.",
    points: ["Hoods sized to your cooking line", "Ducting planned to the outside", "Filters that are easy to clean"],
    image: "/img/chefs/chefs-hoods.jpg",
    alt: "Stainless steel exhaust hoods over a professional cooking line",
  },
  {
    kicker: "Planned before it is built",
    title: "Layout design and installation",
    line: "We plan the flow from store room to service counter, show you drawings, then fit everything on site.",
    points: ["A flow that saves steps", "Drawings before we build", "Installed on site by our team"],
    image: "/img/chefs/chefs-layout.jpg",
    alt: "Empty professional kitchen with stainless steel equipment laid out",
  },
  {
    kicker: "Front of house",
    title: "Bar and café counters",
    line: "Service counters, display units and back-bar cabinets in finishes that match your interiors.",
    points: ["Service and display counters", "Back-bar shelves and cabinets", "Finishes to match your space"],
    image: "/img/chefs/chefs-hotel-bar.jpg",
    alt: "Hotel café and bar with a long wooden counter",
  },
]

const SS304_FACTS = [
  { title: "Safe for food", line: "A smooth, non-porous surface that does not hold on to germs." },
  { title: "Does not rust", line: "Stays bright near water, steam and daily washing." },
  { title: "Easy to wash down", line: "Wipe, scrub or hose it down at the end of every shift." },
  { title: "Built for heavy use", line: "Takes hot pans, heavy pots and years of busy service." },
]

const STEPS = [
  { title: "Site visit", line: "We visit, measure and understand your menu and team." },
  { title: "Layout and drawings", line: "You get a clear plan and drawings before work starts." },
  { title: "Fabrication", line: "Tables, sinks, racks and hoods are made to size." },
  { title: "Installation", line: "We fit everything on site and hand over a ready kitchen." },
]

export default function ChefsFavouriteCornerPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-amber-500/20 selection:text-slate-900 overflow-x-clip">
      <Navbar />

      <main className="pt-[69px]">
        {/* Hero: split screen, text left, kitchen right */}
        <section className="bg-[#0B0F19] text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[calc(100dvh-69px)]">
            <div className="px-5 sm:px-8 lg:px-12 xl:pl-[max(3rem,calc((100vw-80rem)/2+3rem))] py-16 sm:py-20 flex flex-col justify-center">
              <span className="kicker kicker-dark">Chef&apos;s Favourite Corner</span>
              <h1 className="font-serif font-normal tracking-tight leading-[1.08] text-[2.5rem] sm:text-6xl mt-5 max-w-xl text-balance">
                Kitchens built for <span className="text-[#D8B97F]">the dinner rush.</span>
              </h1>
              <p className="text-base sm:text-lg text-white/75 leading-relaxed mt-6 max-w-lg">
                Stainless steel commercial kitchens for restaurants, hotels and cafés in Raipur and nearby, planned around the way your chefs work.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-5">
                <EnquiryButton
                  detail={ENQUIRY}
                  className="inline-flex items-center justify-center gap-2 min-h-[52px] px-7 rounded-full bg-[#B8923A] hover:bg-[#C99E4B] text-slate-950 font-semibold transition-colors active:scale-[0.98]"
                >
                  Design My Chef&apos;s Kitchen <ArrowUpRight className="w-4 h-4" />
                </EnquiryButton>
                <a href={`tel:${BRAND.phoneRaw}`} className="inline-flex items-center gap-2 text-[15px] text-white/80 hover:text-white">
                  <Phone className="w-4 h-4" /> or call {BRAND.phone}
                </a>
              </div>
              <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[15px] text-white/70">
                {BUILT_FOR.map(({ icon: Icon, title }) => (
                  <li key={title} className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-[#D8B97F]" /> {title}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative min-h-[340px] sm:min-h-[460px]">
              <Image
                src="/img/chefs/chefs-hero-line.jpg"
                alt="Bright commercial kitchen with stainless steel tables and exhaust hoods"
                fill
                preload
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute left-5 bottom-5 sm:left-8 sm:bottom-8 rounded-2xl bg-white/90 backdrop-blur-md px-5 py-4 text-slate-950 max-w-[260px]">
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#7C5F16]">Made in SS 304</p>
                <p className="text-[15px] mt-1 leading-snug">Food-grade stainless steel that stays bright for years.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Who we build for: one large tile, two stacked */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <span className="kicker">Who we build for</span>
            <h2 className="font-serif text-[2.1rem] leading-[1.12] sm:text-5xl font-normal tracking-tight mt-4 text-slate-950 max-w-2xl">
              From a small café to <span className="text-[#9A7637]">a hotel kitchen</span>
            </h2>
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:auto-rows-[270px]">
              {BUILT_FOR.map((item, index) => (
                <figure
                  key={item.title}
                  className={cn(
                    "relative overflow-hidden rounded-[1.75rem] min-h-[260px]",
                    index === 0 ? "lg:col-span-7 lg:row-span-2" : "lg:col-span-5"
                  )}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes={index === 0 ? "(max-width: 1024px) 100vw, 58vw" : "(max-width: 1024px) 100vw, 42vw"}
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/85 via-[#0B0F19]/20 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-white">
                    <item.icon className="w-6 h-6 text-[#E8CF9C]" />
                    <p className="font-serif text-3xl mt-3">{item.title}</p>
                    <p className="text-[15px] text-white/80 mt-1 max-w-sm leading-relaxed">{item.line}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* What we make: zig-zag rows */}
        <section className="py-20 sm:py-28 bg-[#FBF8F3]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <span className="kicker">What we make</span>
            <h2 className="font-serif text-[2.1rem] leading-[1.12] sm:text-5xl font-normal tracking-tight mt-4 text-slate-950 max-w-2xl">
              Everything your kitchen <span className="text-[#9A7637]">runs on</span>
            </h2>

            <div className="mt-14 space-y-16 sm:space-y-24">
              {OFFERINGS.map((offer, index) => (
                <article key={offer.title} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                  <div
                    className={cn(
                      "relative aspect-[4/3] rounded-[1.75rem] overflow-hidden lg:col-span-7",
                      index % 2 === 1 && "lg:order-2"
                    )}
                  >
                    <Image src={offer.image} alt={offer.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 58vw" />
                  </div>
                  <div className={cn("lg:col-span-5", index % 2 === 1 && "lg:order-1")}>
                    <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#9A7637]">
                      {String(index + 1).padStart(2, "0")} · {offer.kicker}
                    </p>
                    <h3 className="font-serif text-3xl sm:text-4xl text-slate-950 mt-3 leading-tight">{offer.title}</h3>
                    <p className="text-base text-slate-600 leading-relaxed mt-4">{offer.line}</p>
                    <ul className="mt-6 space-y-3">
                      {offer.points.map((point) => (
                        <li key={point} className="flex items-center gap-3 text-[15px] text-slate-800">
                          <CheckCircle2 className="w-5 h-5 text-[#B8923A] shrink-0" /> {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why SS 304 */}
        <section className="py-20 sm:py-28 bg-[#0B0F19] text-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="kicker kicker-dark">Why SS 304</span>
              <h2 className="font-serif text-[2.1rem] leading-[1.12] sm:text-5xl font-normal tracking-tight mt-4">
                The steel chefs <span className="text-[#D8B97F]">trust</span>
              </h2>
              <p className="text-base sm:text-lg text-white/70 leading-relaxed mt-5 max-w-md">
                SS 304 is the stainless steel used in professional kitchens because it is safe, strong and simple to keep clean.
              </p>
              <div className="relative mt-10 aspect-[16/9] rounded-[1.5rem] overflow-hidden">
                <Image
                  src="/img/chefs/chefs-ss-racks.jpg"
                  alt="Stainless steel racks and tables in a commercial kitchen"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
            <dl className="lg:col-span-6 lg:col-start-7 grid grid-cols-1 sm:grid-cols-2 gap-x-10 self-center">
              {SS304_FACTS.map((fact, index) => (
                <div key={fact.title} className="border-t border-white/15 py-7">
                  <dt className="flex items-baseline gap-3">
                    <span className="font-serif text-[#D8B97F] text-lg">{String(index + 1).padStart(2, "0")}</span>
                    <span className="font-serif text-2xl">{fact.title}</span>
                  </dt>
                  <dd className="text-[15px] text-white/70 leading-relaxed mt-2">{fact.line}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <span className="kicker">How it works</span>
            <h2 className="font-serif text-[2.1rem] leading-[1.12] sm:text-5xl font-normal tracking-tight mt-4 text-slate-950 max-w-2xl">
              From first visit to <span className="text-[#9A7637]">first service</span>
            </h2>
            <ol className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
              {STEPS.map((stepItem, index) => (
                <li key={stepItem.title} className="border-t-2 border-slate-950/10 pt-6 pb-8 relative">
                  <span className="absolute -top-[2px] left-0 h-[2px] w-12 bg-[#B8923A]" aria-hidden />
                  <span className="font-serif text-4xl text-[#B8923A]">{index + 1}</span>
                  <p className="font-serif text-2xl text-slate-950 mt-3">{stepItem.title}</p>
                  <p className="text-[15px] text-slate-600 leading-relaxed mt-2 max-w-xs">{stepItem.line}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Closing call to action */}
        <section className="px-5 sm:px-8 lg:px-12 pb-20 sm:pb-28">
          <div className="relative max-w-7xl mx-auto overflow-hidden rounded-[2rem] min-h-[420px] flex items-end">
            <Image
              src="/img/chefs/chefs-team.jpg"
              alt="A team of chefs working together in a commercial kitchen"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <span className="absolute inset-0 bg-gradient-to-r from-[#0B0F19]/95 via-[#0B0F19]/70 to-[#0B0F19]/10" />
            <div className="relative p-8 sm:p-12 lg:p-16 max-w-xl text-white">
              <h2 className="font-serif text-[2.1rem] leading-[1.12] sm:text-5xl font-normal tracking-tight">
                Opening a new place or <span className="text-[#D8B97F]">redoing your kitchen?</span>
              </h2>
              <p className="text-base sm:text-lg text-white/75 leading-relaxed mt-5">
                Tell us about your menu, space and opening date. We will visit, plan and give you a clear price.
              </p>
              <EnquiryButton
                detail={ENQUIRY}
                className="mt-8 inline-flex items-center justify-center gap-2 min-h-[52px] px-7 rounded-full bg-[#B8923A] hover:bg-[#C99E4B] text-slate-950 font-semibold transition-colors active:scale-[0.98]"
              >
                Start My Kitchen Plan <ArrowUpRight className="w-4 h-4" />
              </EnquiryButton>
            </div>
          </div>
        </section>
      </main>

      <EnquiryModal />
      <MobileStickyBar />
      <Footer />
    </div>
  )
}
