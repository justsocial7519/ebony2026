"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

// Marker positions are percentages of the photo, which keeps its 3:2 shape so they never drift
const COMFORT_POINTS = [
  {
    title: "Wall units at your reach",
    line: "We hang wall units at a height that suits you, so the top shelf opens without a stool.",
    x: 41,
    y: 20,
  },
  {
    title: "A counter set to your height",
    line: "We set the counter to the person who cooks most, so you chop and knead without bending.",
    x: 31,
    y: 86,
  },
  {
    title: "Base units that come to you",
    line: "Deep pull-out drawers bring pots and plates out to you. No kneeling, no searching at the back.",
    x: 91,
    y: 90,
  },
]

export function ComfortSection() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="comfort" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-[2rem] bg-[#F5F2ED] overflow-hidden">
          <div className="lg:col-span-5 px-6 py-10 sm:px-10 sm:py-14 lg:py-16 flex flex-col justify-center">
            <span className="kicker">Comfort, built in</span>
            <h2 className="font-serif text-[2.1rem] leading-[1.12] sm:text-5xl font-normal tracking-tight mt-4 text-slate-950 text-balance">
              Made for the way <span className="text-[#9A7637]">you move</span>
            </h2>
            <p className="text-base sm:text-lg leading-relaxed mt-5 text-slate-600 max-w-md">
              We plan every height and reach around the person who cooks the most, so daily work is easy on your back.
            </p>

            <ol className="mt-9 space-y-3">
              {COMFORT_POINTS.map((point, index) => (
                <li key={point.title}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(index)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(index)}
                    onBlur={() => setActive(null)}
                    onClick={() => setActive(index)}
                    className={cn(
                      "w-full text-left flex items-start gap-4 rounded-2xl p-3 -mx-3 transition-colors duration-300",
                      active === index ? "bg-white" : "hover:bg-white/60"
                    )}
                  >
                    <span
                      className={cn(
                        "shrink-0 w-11 h-11 rounded-full flex items-center justify-center font-serif text-lg transition-colors duration-300",
                        active === index ? "bg-slate-950 text-white" : "bg-white text-slate-950 ring-1 ring-stone-200"
                      )}
                    >
                      {index + 1}
                    </span>
                    <span className="pt-1">
                      <span className="block text-[17px] font-semibold text-slate-950">{point.title}</span>
                      <span className="block text-[15px] leading-relaxed text-slate-600 mt-1">{point.line}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ol>

            <Link
              href="/kitchen-studio"
              className="group mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-[#8E6D38] hover:text-slate-950 transition-colors self-start"
            >
              Design yours in our 3D Kitchen Studio
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="lg:col-span-7 p-3 sm:p-4 lg:pl-0 flex items-center">
            <div className="relative w-full aspect-[3/2] rounded-[1.5rem] overflow-hidden">
              <Image
                src="/img/kitchen-comfort-reach.jpg"
                alt="A woman opening a wall cabinet at an easy height in a white modular kitchen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              {COMFORT_POINTS.map((point, index) => (
                <button
                  key={point.title}
                  type="button"
                  aria-label={`${index + 1}. ${point.title}`}
                  onMouseEnter={() => setActive(index)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(index)}
                  onBlur={() => setActive(null)}
                  onClick={() => setActive(active === index ? null : index)}
                  style={{ left: `${point.x}%`, top: `${point.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 flex items-center justify-center"
                >
                  <span className="absolute inset-1 rounded-full bg-white/60 hotspot-pulse" aria-hidden />
                  <span
                    className={cn(
                      "relative w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-serif text-lg sm:text-xl backdrop-blur-md transition-all duration-300",
                      active === index
                        ? "bg-slate-950 text-white scale-110"
                        : "bg-white/75 text-slate-950 ring-1 ring-white"
                    )}
                  >
                    {index + 1}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
