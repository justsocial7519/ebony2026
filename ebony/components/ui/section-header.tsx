import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  kicker: string
  title: string
  accent?: string
  subtitle?: string
  align?: "left" | "center"
  tone?: "light" | "dark"
  className?: string
}

/** One header style for every homepage section: gold kicker, serif title with a gold accent, plain subtitle. */
export function SectionHeader({
  kicker,
  title,
  accent,
  subtitle,
  align = "left",
  tone = "light",
  className,
}: SectionHeaderProps) {
  const dark = tone === "dark"

  if (align === "center") {
    return (
      <div className={cn("text-center max-w-2xl mx-auto mb-14 sm:mb-16", className)}>
        <span className={cn("kicker justify-center", dark && "kicker-dark")}>{kicker}</span>
        <h2
          className={cn(
            "font-serif text-[2.1rem] leading-[1.12] sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight mt-4 text-balance",
            dark ? "text-white" : "text-slate-950"
          )}
        >
          {title} {accent && <span className={dark ? "text-[#D8B97F]" : "text-[#9A7637]"}>{accent}</span>}
        </h2>
        {subtitle && (
          <p className={cn("text-base sm:text-lg leading-relaxed mt-5", dark ? "text-white/80" : "text-slate-600")}>
            {subtitle}
          </p>
        )}
      </div>
    )
  }

  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row lg:items-end justify-between gap-5 lg:gap-10 mb-12 sm:mb-16",
        className
      )}
    >
      <div className="max-w-2xl">
        <span className={cn("kicker", dark && "kicker-dark")}>{kicker}</span>
        <h2
          className={cn(
            "font-serif text-[2.1rem] leading-[1.12] sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight mt-4 text-balance",
            dark ? "text-white" : "text-slate-950"
          )}
        >
          {title} {accent && <span className={dark ? "text-[#D8B97F]" : "text-[#9A7637]"}>{accent}</span>}
        </h2>
      </div>
      {subtitle && (
        <p className={cn("text-base sm:text-lg leading-relaxed max-w-2xl lg:max-w-sm lg:pb-2", dark ? "text-white/80" : "text-slate-600")}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
