import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { StudioCtaSection } from "@/components/studio-cta-section"
import { EnquiryModal } from "@/components/enquiry-modal"
import { MobileStickyBar } from "@/components/mobile-sticky-bar"
import { CollectionsBrowser } from "@/components/collections/collections-browser"
import { COLLECTION_CATEGORIES } from "@/lib/collections"

export const metadata: Metadata = {
  title: "Collections — Kitchen, Wardrobe, TV & Bar Unit Design Ideas | EBONY",
  description:
    "Browse modular kitchen, wardrobe, TV unit and bar unit design ideas from EBONY, Raipur. Pick a look you love and we make it to fit your home.",
}

// Small rounded photos that sit inside the headline between words
function InlinePhoto({ src }: { src: string }) {
  return (
    <span className="relative hidden sm:inline-block align-middle w-[1.85em] h-[0.92em] ml-[0.24em] -translate-y-[0.07em] rounded-full overflow-hidden ring-1 ring-black/5">
      <Image src={src} alt="" fill className="object-cover" sizes="160px" />
    </span>
  )
}

const HEADLINE_PHOTOS = [
  "/img/collections/kitchen-island-breakfast-bar.jpg",
  "/img/collections/wardrobe-sliding-ivory.jpg",
  "/img/collections/tv-unit-walnut-display.jpg",
]

// Short teasers (no numbers) shown under each category name in the hero
const CATEGORY_TEASERS: Record<string, string> = {
  kitchens: "Warm to bold",
  wardrobes: "Sliding to walk-in",
  "tv-bar": "Made to show off",
}

export default function CollectionsPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-amber-500/20 selection:text-slate-900 overflow-x-clip">
      <Navbar />

      <main className="pt-24 sm:pt-28">
        {/* Hero: left-aligned headline with photos set between the words */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-10 sm:pt-16 pb-14 sm:pb-20">
          <span className="kicker">Collections</span>
          <h1 className="font-serif font-normal text-slate-950 tracking-tight leading-[1.08] text-[2.5rem] sm:text-6xl lg:text-[4.4rem] mt-5 max-w-5xl text-balance">
            {/* Photos hug the word before them, so the text reads cleanly when they are hidden on phones */}
            <span className="whitespace-nowrap">
              Kitchens<InlinePhoto src={HEADLINE_PHOTOS[0]} />,
            </span>{" "}
            <span className="whitespace-nowrap">
              wardrobes<InlinePhoto src={HEADLINE_PHOTOS[1]} />
            </span>{" "}
            and TV &amp; bar{" "}
            <span className="whitespace-nowrap">
              units<InlinePhoto src={HEADLINE_PHOTOS[2]} />
            </span>{" "}
            made for{" "}
            <span className="text-[#9A7637]">your home.</span>
          </h1>

          <div className="sm:hidden mt-8 grid grid-cols-3 gap-3">
            {HEADLINE_PHOTOS.map((src) => (
              <span key={src} className="relative aspect-square rounded-2xl overflow-hidden">
                <Image src={src} alt="" fill className="object-cover" sizes="33vw" />
              </span>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:items-end">
            <p className="lg:col-span-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Browse design ideas, keep the ones you love, and we make them to fit your space, budget and taste.
            </p>
            <dl className="lg:col-span-6 lg:justify-self-end flex gap-10 sm:gap-14">
              {COLLECTION_CATEGORIES.map((c) => (
                <div key={c.id}>
                  <dt className="text-[13px] font-semibold uppercase tracking-[0.14em] text-slate-500">{c.label}</dt>
                  <dd className="font-serif text-xl sm:text-2xl text-slate-950 mt-1">{CATEGORY_TEASERS[c.id]}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <CollectionsBrowser />

        {/* Plan it your way */}
        <section className="py-16 sm:py-24 bg-[#0B0F19] text-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <span className="kicker kicker-dark">Plan it your way</span>
            <h2 className="font-serif text-[2.1rem] leading-[1.12] sm:text-5xl font-normal tracking-tight mt-4 max-w-2xl">
              Found a look? <span className="text-[#D8B97F]">Make it yours.</span>
            </h2>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
              <Link
                href="/kitchen-studio"
                className="group lg:col-span-7 relative overflow-hidden rounded-[2rem] min-h-[360px] sm:min-h-[440px] bg-[#ECE8E1]"
              >
                <Image
                  src="/kitchen-studio/poster.webp"
                  alt="Ebony 3D Kitchen Studio preview"
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/85 via-[#0B0F19]/20 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 p-7 sm:p-10 flex items-end justify-between gap-6">
                  <span>
                    <span className="block text-[13px] font-semibold uppercase tracking-[0.16em] text-[#E8CF9C]">
                      Kitchen Studio
                    </span>
                    <span className="block font-serif text-3xl sm:text-4xl mt-2">Try finishes on a 3D kitchen</span>
                    <span className="block text-[15px] text-white/80 mt-2 max-w-md">
                      Change doors, tops and walls and see your kitchen update in seconds.
                    </span>
                  </span>
                  <span className="shrink-0 w-12 h-12 rounded-full bg-white text-slate-950 flex items-center justify-center transition-colors group-hover:bg-[#C5A572]">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </span>
              </Link>

              <div className="lg:col-span-5 grid grid-cols-1 gap-5 sm:gap-6">
                <Link
                  href="/chefs-favourite-corner"
                  className="group relative overflow-hidden rounded-[2rem] min-h-[210px]"
                >
                  <Image
                    src="/img/chefs/chefs-hero-line.jpg"
                    alt="Stainless steel commercial kitchen line"
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.05]"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                  <span className="absolute inset-0 bg-gradient-to-r from-[#0B0F19]/90 via-[#0B0F19]/55 to-transparent" />
                  <span className="relative flex h-full flex-col justify-end p-7 sm:p-8 max-w-xs">
                    <span className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#E8CF9C]">
                      Chef&apos;s Favourite Corner
                    </span>
                    <span className="font-serif text-2xl mt-2">Kitchens for restaurants, hotels and cafés</span>
                  </span>
                </Link>
                <Link
                  href="/contact"
                  className="group rounded-[2rem] bg-white/[0.06] ring-1 ring-white/10 p-7 sm:p-8 flex items-end justify-between gap-6 hover:bg-white/[0.1] transition-colors"
                >
                  <span>
                    <span className="block text-[13px] font-semibold uppercase tracking-[0.16em] text-[#E8CF9C]">
                      Raipur studio
                    </span>
                    <span className="block font-serif text-2xl mt-2">See and touch real finishes</span>
                    <span className="block text-[15px] text-white/70 mt-2">Visit us, or invite a designer home.</span>
                  </span>
                  <span className="shrink-0 w-12 h-12 rounded-full bg-white text-slate-950 flex items-center justify-center transition-colors group-hover:bg-[#C5A572]">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <StudioCtaSection />
      </main>

      <EnquiryModal />
      <MobileStickyBar />
      <Footer />
    </div>
  )
}
