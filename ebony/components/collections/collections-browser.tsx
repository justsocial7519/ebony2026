"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { ArrowLeft, ArrowRight, ArrowUpRight, MessageCircle, X } from "lucide-react"
import {
  COLLECTION_CATEGORIES,
  COLLECTION_ITEMS,
  TRENDING_IDS,
  type CollectionCategory,
  type CollectionItem,
} from "@/lib/collections"
import { openEnquiryModal } from "@/components/enquiry-modal"
import { SectionHeader } from "@/components/ui/section-header"
import { cn } from "@/lib/utils"

type Filter = "all" | CollectionCategory

const WHATSAPP_NUMBER = "917974209352"
const TRENDING = TRENDING_IDS.map((id) => COLLECTION_ITEMS.find((item) => item.id === id)).filter(
  (item): item is CollectionItem => Boolean(item)
)

const categoryLabel = (id: CollectionCategory) => COLLECTION_CATEGORIES.find((c) => c.id === id)?.label ?? ""

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export function CollectionsBrowser() {
  const [category, setCategory] = useState<Filter>("all")
  const [type, setType] = useState<string | null>(null)
  const [lightbox, setLightbox] = useState<{ items: CollectionItem[]; index: number } | null>(null)
  const galleryRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  const visible = useMemo(
    () =>
      COLLECTION_ITEMS.filter(
        (item) => (category === "all" || item.category === category) && (!type || item.type === type)
      ),
    [category, type]
  )
  const activeCategory = COLLECTION_CATEGORIES.find((c) => c.id === category)

  // A link such as /collections#tv-bar opens the ideas for that category
  useEffect(() => {
    const match = COLLECTION_CATEGORIES.find((c) => c.id === window.location.hash.slice(1))
    if (!match) return
    const timer = window.setTimeout(() => {
      setCategory(match.id)
      setType(null)
      galleryRef.current?.scrollIntoView({ behavior: "auto" })
    }, 0)
    return () => window.clearTimeout(timer)
  }, [])

  const chooseCategory = (next: Filter, scroll = false) => {
    setCategory(next)
    setType(null)
    if (scroll) galleryRef.current?.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" })
  }

  const scrollTrending = (direction: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    track.scrollBy({ left: direction * track.clientWidth * 0.6, behavior: prefersReducedMotion() ? "auto" : "smooth" })
  }

  const current = lightbox ? lightbox.items[lightbox.index] : null
  const step = (delta: number) =>
    setLightbox((lb) => (lb ? { ...lb, index: (lb.index + delta + lb.items.length) % lb.items.length } : lb))

  return (
    <>
      {/* Browse by category */}
      <section id="browse" className="pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <SectionHeader
            kicker="Browse by category"
            title="Start with"
            accent="a room"
            subtitle="Tap a category to see every idea we have for it."
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:auto-rows-[250px]">
            {COLLECTION_CATEGORIES.map((c, index) => (
              <button
                key={c.id}
                id={c.id}
                type="button"
                onClick={() => chooseCategory(c.id, true)}
                className={cn(
                  "group relative overflow-hidden rounded-[1.75rem] text-left min-h-[260px] bg-stone-200 transition-transform duration-300 active:scale-[0.99] scroll-mt-24",
                  index === 0 ? "lg:col-span-7 lg:row-span-2" : "lg:col-span-5"
                )}
              >
                <Image
                  src={c.cover}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.05]"
                  sizes={index === 0 ? "(max-width: 1024px) 100vw, 58vw" : "(max-width: 1024px) 100vw, 42vw"}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/90 via-[#0B0F19]/55 to-[#0B0F19]/5" />
                <span className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex items-end justify-between gap-5">
                  <span>
                    <span className="block text-[13px] font-semibold uppercase tracking-[0.16em] text-[#E8CF9C]">
                      Design ideas
                    </span>
                    <span className="block font-serif text-3xl sm:text-4xl text-white mt-1">{c.label}</span>
                    <span className="block text-[15px] text-white/80 mt-2 max-w-sm leading-relaxed">{c.line}</span>
                  </span>
                  <span className="shrink-0 w-12 h-12 rounded-full bg-white text-slate-950 flex items-center justify-center transition-colors duration-300 group-hover:bg-[#C5A572]">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Trending now */}
      <section id="trending" className="py-16 sm:py-24 bg-[#FBF8F3]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <span className="kicker">Trending now</span>
              <h2 className="font-serif text-[2.1rem] leading-[1.12] sm:text-5xl font-normal tracking-tight mt-4 text-slate-950">
                Ideas families <span className="text-[#9A7637]">ask for most</span>
              </h2>
            </div>
            <div className="hidden sm:flex gap-3 shrink-0">
              <button
                type="button"
                onClick={() => scrollTrending(-1)}
                aria-label="Previous idea"
                className="w-12 h-12 rounded-full ring-1 ring-stone-300 bg-white flex items-center justify-center text-slate-900 hover:bg-slate-950 hover:text-white transition-colors active:scale-95"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollTrending(1)}
                aria-label="Next idea"
                className="w-12 h-12 rounded-full ring-1 ring-stone-300 bg-white flex items-center justify-center text-slate-900 hover:bg-slate-950 hover:text-white transition-colors active:scale-95"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div ref={trackRef} className="flex gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2">
            {TRENDING.map((item, index) => (
              <figure key={item.id} className="snap-start shrink-0 w-[86%] sm:w-[68%] lg:w-[56%]">
                <button
                  type="button"
                  onClick={() => setLightbox({ items: TRENDING, index })}
                  className="group block w-full text-left"
                >
                  <span className="relative block aspect-[16/10] rounded-[1.5rem] overflow-hidden bg-stone-200">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 86vw, (max-width: 1024px) 68vw, 720px"
                    />
                  </span>
                  <figcaption className="mt-4 flex items-start justify-between gap-4">
                    <span>
                      <span className="block font-serif text-xl sm:text-2xl text-slate-950">{item.name}</span>
                      <span className="block text-[15px] text-slate-600 mt-1">{item.line}</span>
                    </span>
                    <span className="shrink-0 rounded-full bg-white ring-1 ring-stone-200 px-3 py-1 text-[13px] font-medium text-slate-700">
                      {categoryLabel(item.category)}
                    </span>
                  </figcaption>
                </button>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Every idea, filterable */}
      <section ref={galleryRef} id="ideas" className="py-16 sm:py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <SectionHeader
            kicker="All design ideas"
            title="Find the one"
            accent="you love"
            subtitle="Photos come from our design library and licensed stock. Every Ebony piece is made to your size, budget and taste."
          />

          <div className="sticky top-[69px] z-20 -mx-5 px-5 sm:mx-0 sm:px-0 py-3 mb-8 bg-white/95 backdrop-blur-md">
            <div className="flex gap-2 overflow-x-auto no-scrollbar" role="group" aria-label="Category">
              {(["all", ...COLLECTION_CATEGORIES.map((c) => c.id)] as Filter[]).map((id) => {
                const label = id === "all" ? "All ideas" : categoryLabel(id)
                return (
                  <button
                    key={id}
                    type="button"
                    aria-pressed={category === id}
                    onClick={() => chooseCategory(id)}
                    className={cn(
                      "shrink-0 min-h-[44px] rounded-full px-5 text-[15px] font-medium transition-colors active:scale-[0.98]",
                      category === id
                        ? "bg-slate-950 text-white"
                        : "bg-stone-100 text-slate-700 hover:bg-stone-200"
                    )}
                  >
                    {label}
                  </button>
                )
              })}
            </div>
            {activeCategory && (
              <div className="flex gap-2 overflow-x-auto no-scrollbar mt-3" role="group" aria-label="Type">
                {[null, ...activeCategory.types].map((t) => (
                  <button
                    key={t ?? "any"}
                    type="button"
                    aria-pressed={type === t}
                    onClick={() => setType(t)}
                    className={cn(
                      "shrink-0 min-h-[40px] rounded-full px-4 text-[14px] font-medium ring-1 transition-colors",
                      type === t
                        ? "ring-[#B8923A] bg-[#F5EDE3] text-[#7C5F16]"
                        : "ring-stone-200 text-slate-600 hover:ring-stone-300"
                    )}
                  >
                    {t ?? `Every ${activeCategory.label.toLowerCase()}`}
                  </button>
                ))}
              </div>
            )}
          </div>

          {visible.length > 0 ? (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
              {visible.map((item, index) => (
                <figure
                  key={`${category}-${type}-${item.id}`}
                  className="card-in break-inside-avoid mb-9"
                  style={{ animationDelay: `${Math.min(index, 12) * 55}ms` }}
                >
                  <button
                    type="button"
                    onClick={() => setLightbox({ items: visible, index })}
                    className="group block w-full text-left"
                  >
                    <span
                      className={cn(
                        "relative block overflow-hidden rounded-[1.25rem] bg-stone-100",
                        index % 5 === 1 || index % 5 === 3 ? "aspect-[4/5]" : "aspect-[4/3]"
                      )}
                    >
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[12px] font-semibold text-slate-800">
                        {item.type}
                      </span>
                    </span>
                    <figcaption className="mt-3.5">
                      <span className="block font-serif text-[1.3rem] leading-snug text-slate-950 group-hover:text-[#7C5F16] transition-colors">
                        {item.name}
                      </span>
                      <span className="block text-[15px] text-slate-600 mt-1 leading-relaxed">{item.line}</span>
                    </figcaption>
                  </button>
                </figure>
              ))}
            </div>
          ) : (
            <div className="rounded-[1.5rem] bg-stone-50 ring-1 ring-stone-200 px-6 py-16 text-center">
              <p className="font-serif text-2xl text-slate-950">No ideas here yet</p>
              <p className="text-slate-600 mt-2">Try another type, or see everything we have.</p>
              <button
                type="button"
                onClick={() => chooseCategory("all")}
                className="mt-6 min-h-[44px] rounded-full bg-slate-950 px-6 text-white font-medium"
              >
                Show all ideas
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <DialogPrimitive.Root open={Boolean(current)} onOpenChange={(open) => !open && setLightbox(null)}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-[130] bg-[#0B0F19]/85 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0" />
          <DialogPrimitive.Content
            className="fixed inset-0 z-[131] flex items-center justify-center p-3 sm:p-8 outline-none"
            onPointerDown={(e) => e.target === e.currentTarget && setLightbox(null)}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") step(1)
              if (e.key === "ArrowLeft") step(-1)
            }}
          >
            {current && (
              <div className="relative w-full max-w-6xl max-h-[94dvh] overflow-y-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] bg-white rounded-[1.5rem] data-[state=open]:animate-in">
                <div className="relative bg-[#0B0F19] aspect-[4/3] lg:aspect-auto lg:min-h-[70dvh]">
                  <Image
                    key={current.id}
                    src={current.image}
                    alt={current.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 800px"
                  />
                </div>
                <div className="p-6 sm:p-8 flex flex-col">
                  <span className="kicker">
                    {categoryLabel(current.category)} · {current.type}
                  </span>
                  <DialogPrimitive.Title className="font-serif text-3xl leading-tight text-slate-950 mt-4">
                    {current.name}
                  </DialogPrimitive.Title>
                  <DialogPrimitive.Description className="text-base text-slate-600 leading-relaxed mt-3">
                    {current.line} We make it to your size and choice of finish.
                  </DialogPrimitive.Description>

                  <div className="mt-8 lg:mt-auto flex flex-col gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setLightbox(null)
                        openEnquiryModal({ category: `${categoryLabel(current.category)}: ${current.name}` })
                      }}
                      className="min-h-[52px] rounded-full bg-slate-950 hover:bg-[#B8923A] text-white font-semibold transition-colors active:scale-[0.99]"
                    >
                      Make This Mine
                    </button>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                        `Hi Ebony, I like the "${current.name}" idea from your Collections page. Please share the next steps.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[52px] rounded-full ring-1 ring-stone-300 text-slate-900 font-semibold flex items-center justify-center gap-2 hover:bg-stone-50 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" /> Ask on WhatsApp
                    </a>
                    {lightbox && lightbox.items.length > 1 && (
                      <div className="flex items-center justify-between pt-4 mt-2 border-t border-stone-200">
                        <button
                          type="button"
                          onClick={() => step(-1)}
                          aria-label="Previous idea"
                          className="w-11 h-11 rounded-full ring-1 ring-stone-200 flex items-center justify-center hover:bg-stone-100"
                        >
                          <ArrowLeft className="w-5 h-5" />
                        </button>
                        <span className="text-sm text-slate-500 tabular-nums">
                          {lightbox.index + 1} / {lightbox.items.length}
                        </span>
                        <button
                          type="button"
                          onClick={() => step(1)}
                          aria-label="Next idea"
                          className="w-11 h-11 rounded-full ring-1 ring-stone-200 flex items-center justify-center hover:bg-stone-100"
                        >
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <DialogPrimitive.Close
                  aria-label="Close"
                  className="absolute top-3 right-3 w-11 h-11 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-slate-900 hover:bg-white"
                >
                  <X className="w-5 h-5" />
                </DialogPrimitive.Close>
              </div>
            )}
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </>
  )
}
