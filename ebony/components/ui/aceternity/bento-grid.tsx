"use client"

import { cn } from "@/lib/utils"
import React from "react"

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  badge,
  href,
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
  badge?: string
  href?: string
}) => {
  const content = (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-lg transition duration-300 border border-slate-200 bg-white p-5 flex flex-col justify-between space-y-4 overflow-hidden relative",
        className
      )}
    >
      <div className="relative w-full h-full min-h-[10rem] rounded-lg overflow-hidden flex items-center justify-center">
        {header}
        {badge && (
          <span className="absolute top-3 left-3 z-10 text-xs uppercase font-mono tracking-wider font-semibold px-2 py-0.5 rounded bg-white/90 backdrop-blur-sm text-slate-900 border border-slate-200/80 shadow-sm">
            {badge}
          </span>
        )}
      </div>
      <div className="group-hover/bento:translate-x-1 transition duration-200">
        <div className="flex items-center gap-2 mb-1">
          {icon}
          <div className="font-serif text-lg text-slate-900 font-normal">
            {title}
          </div>
        </div>
        <div className="text-slate-600 text-xs leading-relaxed font-normal">
          {description}
        </div>
      </div>
    </div>
  )

  if (href) {
    return <a href={href} className="block h-full">{content}</a>
  }

  return content
}
