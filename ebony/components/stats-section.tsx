"use client"

import { STATS } from "@/lib/content"

export function StatsSection() {
  return (
    <section className="py-24 md:py-32 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="font-mono text-[13px] uppercase tracking-[0.12em] text-amber-700 font-semibold block mb-3">
            Our Promises · Raipur
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 font-normal">
            Precision &amp; Trust, in Every Detail
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mt-4" />
        </div>

        {/* Double-Bezel Concentric Promise Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((stat) => (
            <div
              key={stat.title}
              className="double-bezel group transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="double-bezel-inner p-6 md:p-8 text-center flex flex-col items-center justify-between min-h-[170px] md:min-h-[190px]">
                <span className="font-mono text-xs uppercase tracking-widest text-slate-500 font-medium">
                  EBONY PROMISE
                </span>

                <div className="font-serif text-xl sm:text-2xl text-slate-900 font-normal tracking-tight my-2 text-balance">
                  {stat.title}
                </div>

                <div className="pt-2 border-t border-slate-100 w-full">
                  <p className="font-mono text-[13px] uppercase tracking-wider text-slate-700 font-medium">
                    {stat.line}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
