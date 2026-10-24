"use client"

import { useState } from "react"
import { Calendar, Eye, Sparkles, CheckCircle2, ArrowRight } from "lucide-react"
import { openEnquiryModal } from "@/components/enquiry-modal"
import { HOME_CONTENT } from "@/lib/home-content"

const STEP_ICONS = [Calendar, Eye, Sparkles]

export function ProcessTimelineSection() {
  const { kicker, title, subtitle, steps, cta } = HOME_CONTENT.process
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="process" className="py-24 sm:py-32 bg-[#0A0D14] text-white relative overflow-hidden border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-b from-[#C5A572]/10 via-[#C5A572]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#C5A572] font-mono text-xs uppercase tracking-[0.12em] mb-4">
            <Sparkles className="w-3 h-3" />
            <span>{kicker}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight">
            Your Dream Kitchen, <span className="text-[#C5A572]">Step by Step</span>
          </h2>
          <p className="text-white/75 text-base sm:text-lg mt-3 font-normal leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Connected Process Track (Desktop & Tablet — Steps Horizontal) */}
        <div className="hidden md:block relative mb-16">
          {/* Horizontal Connecting Stem Line */}
          <div className="absolute top-9 left-24 right-24 h-0.5 bg-gradient-to-r from-[#C5A572]/30 via-[#C5A572] to-[#C5A572]/30 -z-0" />

          <div className="grid grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = STEP_ICONS[index % STEP_ICONS.length]
              const isCurrent = activeStep === index
              return (
                <div
                  key={step.num}
                  onMouseEnter={() => setActiveStep(index)}
                  className="flex flex-col items-center text-center cursor-pointer group"
                >
                  {/* Step Number Circle */}
                  <div
                    className={`w-18 h-18 rounded-full flex items-center justify-center transition-all duration-300 font-serif text-2xl mb-6 shadow-2xl relative ${
                      isCurrent
                        ? "bg-[#C5A572] text-slate-950 scale-110 shadow-amber-500/30 ring-4 ring-[#C5A572]/20"
                        : "bg-[#141A28] text-white/80 border border-white/20 group-hover:border-[#C5A572]/60 group-hover:text-[#C5A572]"
                    }`}
                  >
                    <span>{step.num}</span>
                    {isCurrent && (
                      <span className="absolute -inset-1 rounded-full border border-[#C5A572] animate-ping opacity-40 pointer-events-none" />
                    )}
                  </div>

                  {/* Dropdown Stalk Line connecting badge to card */}
                  <div className="w-0.5 h-6 bg-gradient-to-b from-[#C5A572]/60 to-white/10 mb-4" />

                  {/* Step Card with Pedestal Look */}
                  <div
                    className={`w-full p-7 rounded-3xl transition-all duration-300 border text-left flex flex-col justify-between min-h-[220px] ${
                      isCurrent
                        ? "bg-gradient-to-b from-[#182032] to-[#101522] border-[#C5A572]/60 shadow-2xl -translate-y-1.5"
                        : "bg-[#101522]/90 border-white/10 hover:border-white/25 hover:bg-[#141A28]"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs uppercase tracking-widest text-[#C5A572] font-semibold">
                          Step {step.num}
                        </span>
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                            isCurrent ? "bg-[#C5A572] text-slate-950" : "bg-white/10 text-[#C5A572]"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <h3 className="font-serif text-2xl text-white font-normal mb-1">
                        {step.title}
                      </h3>
                      <p className="text-amber-200 text-sm font-medium mb-3">
                        {step.line}
                      </p>
                      <p className="text-white/65 text-xs sm:text-sm font-normal leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-[#C5A572]/90">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A572]" />
                      <span>Clean, careful and calm</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile Vertical Step Flow */}
        <div className="md:hidden space-y-4 mb-12">
          {steps.map((step, index) => {
            const Icon = STEP_ICONS[index % STEP_ICONS.length]
            return (
              <div
                key={step.num}
                className="p-6 rounded-2xl bg-[#101522] border border-white/10 relative overflow-hidden flex gap-4"
              >
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#C5A572] text-slate-950 font-serif text-lg font-bold flex items-center justify-center shadow-md">
                    {step.num}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-[#C5A572]/60 to-white/10 my-2" />
                  )}
                </div>

                <div className="flex-1 pb-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#C5A572] font-semibold">
                      Step {step.num}
                    </span>
                    <Icon className="w-4 h-4 text-[#C5A572]" />
                  </div>
                  <h3 className="font-serif text-xl text-white font-normal">
                    {step.title}
                  </h3>
                  <p className="text-amber-200 text-xs font-medium mt-0.5 mb-1.5">
                    {step.line}
                  </p>
                  <p className="text-white/70 text-xs leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Centered CTA */}
        <div className="text-center pt-4">
          <button
            onClick={() => openEnquiryModal({ category: "3D Design Session" })}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#C5A572] hover:bg-[#D4B582] text-slate-950 font-mono text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-xl shadow-amber-500/20 active:scale-95 cursor-pointer"
          >
            <span>{cta}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-white/65 text-xs mt-3 font-normal">
            Visit our studio at Shankar Nagar Corridor, Raipur · No pushy sales, just honest advice.
          </p>
        </div>
      </div>
    </section>
  )
}
