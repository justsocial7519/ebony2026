"use client"

import { cn } from "@/lib/utils"
import React, { useEffect, useState } from "react"

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote?: string
    name: string
    title: string
    rating?: number
    city?: string
    badge?: string
  }[]
  direction?: "left" | "right"
  speed?: "fast" | "normal" | "slow"
  pauseOnHover?: boolean
  className?: string
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLUListElement>(null)

  useEffect(() => {
    addAnimation()
  }, [])

  const [start, setStart] = useState(false)

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        )
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        )
      }
    }
  }

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "25s")
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "45s")
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s")
      }
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-5 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[360px] max-w-full relative rounded-[1.75rem] border border-slate-200/80 bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] hover:border-amber-600/40 transition-all duration-300 p-7 shrink-0 md:w-[440px]"
            key={`${item.name}-${idx}`}
          >
            {item.quote && (
              <blockquote className="relative z-20 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-1.5 mb-4 text-amber-600">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <span key={i} className="text-xs">★</span>
                    ))}
                    <span className="font-mono text-xs text-slate-500 ml-1.5 font-semibold">VERIFIED HOME</span>
                  </div>
                  <p className="font-serif text-base leading-relaxed text-slate-800 font-normal mb-6">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-slate-900 tracking-tight">
                      {item.name}
                    </h4>
                    <p className="font-mono text-[13px] text-slate-500">{item.title}</p>
                  </div>
                  {item.city && (
                    <span className="text-xs font-mono tracking-widest uppercase px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600 font-semibold">
                      {item.city}
                    </span>
                  )}
                </div>
              </blockquote>
            )}
            {!item.quote && (
              <div className="flex items-center justify-between py-1">
                <div>
                  <h4 className="font-serif text-lg text-slate-900">{item.name}</h4>
                  <p className="font-mono text-[13px] text-slate-500">{item.title}</p>
                </div>
                {item.badge && (
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-800 bg-amber-50/80 border border-amber-200/60 px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
