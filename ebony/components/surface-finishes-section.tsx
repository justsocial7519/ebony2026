"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { HOME_CONTENT } from "@/lib/home-content"
import { openEnquiryModal } from "@/components/enquiry-modal"
import { SectionHeader } from "@/components/ui/section-header"
import { cn } from "@/lib/utils"

type Photo = { src: string; alt: string }

export function SurfaceFinishesSection() {
  const { kicker, title, accent, subtitle, swatches, benefits } = HOME_CONTENT.finishes
  const [activeId, setActiveId] = useState(swatches[0].id)
  const [photoIndex, setPhotoIndex] = useState(0)
  // The photo being replaced stays underneath while the new one fades in on top, so the change is a true crossfade
  const [leaving, setLeaving] = useState<Photo | null>(null)
  const [loadedSrc, setLoadedSrc] = useState<string | null>(swatches[0].photos[0]?.src ?? null)

  const active = swatches.find((s) => s.id === activeId) ?? swatches[0]
  const photo = active.photos[photoIndex] ?? active.photos[0]
  // Thumbnails are the other photos of this finish, in their original order; tapping one swaps it into the main frame
  const thumbs = active.photos.map((p, i) => ({ ...p, index: i })).filter((p) => p.index !== photoIndex).slice(0, 2)

  const show = (nextId: string, nextIndex: number) => {
    if (nextId === activeId && nextIndex === photoIndex) return
    if (photo) setLeaving(photo)
    setActiveId(nextId)
    setPhotoIndex(nextIndex)
  }

  const isShown = photo ? loadedSrc === photo.src : false

  return (
    <section id="finishes-section" className="relative bg-[#FAFAFA] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeader kicker={kicker} title={title} accent={accent} subtitle={subtitle} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Swatches */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-4" role="radiogroup" aria-label="Finishes">
            {swatches.map((swatch) => {
              const isSelected = swatch.id === active.id
              return (
                <button
                  key={swatch.id}
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() => show(swatch.id, 0)}
                  className={cn(
                    "group text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 flex items-center gap-3 sm:gap-4 cursor-pointer",
                    isSelected
                      ? "bg-white ring-2 ring-[#C5A572] shadow-xl shadow-amber-900/10 -translate-y-0.5"
                      : "bg-white/70 ring-1 ring-slate-200 hover:bg-white hover:ring-slate-300"
                  )}
                >
                  <span
                    className={cn(
                      "w-10 h-10 sm:w-12 sm:h-12 rounded-full ring-1 ring-black/10 shrink-0 transition-transform duration-500",
                      isSelected ? "scale-110" : "group-hover:scale-105"
                    )}
                    style={{ backgroundColor: swatch.colorHint }}
                  />
                  <span className="min-w-0">
                    <span className="block font-serif text-lg sm:text-xl text-slate-950 leading-tight">{swatch.name}</span>
                    <span className="block text-[13px] text-slate-500 mt-0.5">{swatch.tag}</span>
                  </span>
                </button>
              )
            })}
          </div>

          {/* Spotlight: real rooms in the chosen finish, then the details */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 bg-white rounded-[1.75rem] p-4 sm:p-5 ring-1 ring-slate-200 shadow-xl shadow-slate-200/60">
            <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[1.25rem] bg-stone-100">
              {leaving && leaving.src !== photo?.src && (
                <Image
                  key={`leaving-${leaving.src}`}
                  src={leaving.src}
                  alt=""
                  aria-hidden="true"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              )}
              {photo && (
                <Image
                  key={photo.src}
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  // Wait a frame so even a cached photo is painted transparent first, then fades in
                  onLoad={() => requestAnimationFrame(() => requestAnimationFrame(() => setLoadedSrc(photo.src)))}
                  onTransitionEnd={() => setLeaving(null)}
                  className={cn(
                    "object-cover transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:scale-100",
                    isShown ? "opacity-100 scale-100" : "opacity-0 scale-[1.04]"
                  )}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              )}

              <span
                key={`tag-${active.id}`}
                className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-3 py-1.5 text-[13px] font-semibold text-slate-900 animate-in fade-in duration-500 motion-reduce:animate-none"
              >
                <span className="w-3 h-3 rounded-full ring-1 ring-black/10" style={{ backgroundColor: active.colorHint }} />
                {active.name}
              </span>

              {thumbs.length > 0 && (
                <div className="absolute bottom-3 right-3 flex gap-2">
                  {thumbs.map((thumb) => (
                    <button
                      key={`${active.id}-${thumb.src}`}
                      type="button"
                      onClick={() => show(active.id, thumb.index)}
                      aria-label={`Show this photo: ${thumb.alt}`}
                      className="group/thumb relative w-[4.5rem] h-[3.25rem] sm:w-20 sm:h-14 overflow-hidden rounded-xl ring-2 ring-white/90 shadow-lg shadow-black/25 transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-[#C5A572] cursor-pointer"
                    >
                      <Image
                        src={thumb.src}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-500 group-hover/thumb:scale-110 motion-reduce:transition-none"
                        sizes="80px"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="px-2 sm:px-3 pt-5 pb-2">
              <div key={active.id} className="animate-in fade-in slide-in-from-bottom-2 duration-500 motion-reduce:animate-none">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="w-11 h-11 rounded-xl ring-1 ring-black/10 shadow-inner shrink-0"
                    style={{ backgroundColor: active.colorHint }}
                  />
                  <div>
                    <p className="text-[13px] font-semibold text-[#8E6D38]">{active.tag}</p>
                    <h3 className="font-serif text-[1.6rem] sm:text-[1.75rem] text-slate-950 font-normal leading-tight">
                      {active.name}
                    </h3>
                  </div>
                </div>
                <p className="text-base text-slate-700 leading-relaxed mb-5">{active.line}</p>
              </div>

              <ul className="space-y-2.5 mb-6">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[15px] text-slate-700">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => openEnquiryModal({ design: active.name, category: "Finish samples" })}
                className="group w-full inline-flex items-center justify-center gap-2 px-6 min-h-[52px] rounded-full bg-slate-950 hover:bg-[#8E6D38] text-white text-[15px] font-semibold transition-colors duration-300 active:scale-[0.98] cursor-pointer"
              >
                Send Me Samples
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <Link
                href="/finishes"
                className="mt-3 flex items-center justify-center min-h-[44px] text-[15px] font-medium text-slate-600 hover:text-slate-950 underline underline-offset-4 decoration-slate-300 hover:decoration-slate-950 transition-colors"
              >
                See all finishes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
