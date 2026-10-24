"use client"

import { useEffect, useRef, useState } from "react"
import { BRAND, CITIES } from "@/lib/content"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    interest: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  // Honeypot field for spam
  const [hp, setHp] = useState("")

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-header",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-header",
            start: "top 85%",
          },
        }
      )

      gsap.fromTo(
        ".contact-form-wrapper",
        { y: 48, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-form-wrapper",
            start: "top 85%",
          },
        }
      )

      gsap.fromTo(
        ".contact-info",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-info",
            start: "top 85%",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (hp) return // spam bot

    setLoading(true)
    setErrorMessage("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formState.name,
          phone: formState.phone,
          email: formState.email,
          city: formState.city,
          interest: formState.interest,
          message: formState.message,
          honeypot: hp,
        }),
      })

      const data = await res.json()
      if (res.ok && data.success) {
        setSubmitted(true)
      } else {
        setErrorMessage(data.error || "We could not save your details just now. Please try again.")
      }
    } catch {
      setErrorMessage("Network error. Please try again or reach us on WhatsApp.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
        {/* Header */}
        <div className="contact-header text-center mb-16 max-w-2xl mx-auto">
          <span className="font-mono text-[13px] uppercase tracking-[0.12em] text-[#B8923A] font-semibold block mb-3">
            PRIVATE CONSULTATION · RAIPUR FLAGSHIP & PAN-INDIA
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-slate-950 font-normal">
            Commission Your Space With <span className="text-[#855E15] font-medium">EBONY</span>
          </h2>
          <p className="text-slate-600 mt-4 text-xs sm:text-sm font-normal leading-relaxed">
            Arrange a visit with our senior design architects. We bring your vision to life with careful German-engineered precision and lifetime care.
          </p>
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#B8923A] to-transparent mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Form in Double-Bezel Enclosure */}
          <div className="contact-form-wrapper lg:col-span-7">
            <div className="double-bezel">
              <div className="double-bezel-inner p-7 sm:p-10">
                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-amber-50 border border-amber-200/80 flex items-center justify-center mx-auto mb-6">
                      <svg
                        className="w-8 h-8 text-amber-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="font-serif text-3xl text-slate-900 mb-3">
                      Consultation Requested
                    </h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you for contacting EBONY. Our principal architect will review your project requirements and ring you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot — hidden from real users */}
                    <input
                      type="text"
                      name="website"
                      value={hp}
                      onChange={(e) => setHp(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                      className="absolute -left-[9999px] opacity-0 w-0 h-0"
                      aria-hidden="true"
                    />

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="contact-name"
                          className="font-mono text-xs tracking-widest uppercase text-slate-500 font-semibold"
                        >
                          Full Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) =>
                            setFormState((s) => ({ ...s, name: e.target.value }))
                          }
                          className="w-full px-4 py-3 bg-slate-50/60 border border-slate-200 rounded-xl text-slate-900 font-sans text-sm focus:bg-white focus:border-[#B8923A] focus:ring-1 focus:ring-[#B8923A]/30 transition-all outline-none"
                          placeholder="e.g. Rahul Sharma"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="contact-phone"
                          className="font-mono text-xs tracking-widest uppercase text-slate-500 font-semibold"
                        >
                          Phone Number *
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          required
                          value={formState.phone}
                          onChange={(e) =>
                            setFormState((s) => ({ ...s, phone: e.target.value }))
                          }
                          className="w-full px-4 py-3 bg-slate-50/60 border border-slate-200 rounded-xl text-slate-900 font-sans text-sm focus:bg-white focus:border-[#B8923A] focus:ring-1 focus:ring-[#B8923A]/30 transition-all outline-none"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="contact-email"
                          className="font-mono text-xs tracking-widest uppercase text-slate-500 font-semibold"
                        >
                          Email Address
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          value={formState.email}
                          onChange={(e) =>
                            setFormState((s) => ({ ...s, email: e.target.value }))
                          }
                          className="w-full px-4 py-3 bg-slate-50/60 border border-slate-200 rounded-xl text-slate-900 font-sans text-sm focus:bg-white focus:border-[#B8923A] focus:ring-1 focus:ring-[#B8923A]/30 transition-all outline-none"
                          placeholder="client@residence.com"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="contact-city"
                          className="font-mono text-xs tracking-widest uppercase text-slate-500 font-semibold"
                        >
                          City / Location
                        </label>
                        <select
                          id="contact-city"
                          value={formState.city}
                          onChange={(e) =>
                            setFormState((s) => ({ ...s, city: e.target.value }))
                          }
                          className="w-full px-4 py-3 bg-slate-50/60 border border-slate-200 rounded-xl text-slate-900 font-sans text-sm focus:bg-white focus:border-[#B8923A] focus:ring-1 focus:ring-[#B8923A]/30 transition-all outline-none"
                        >
                          <option value="">Select your city</option>
                          {CITIES.map((city) => (
                            <option key={city} value={city}>
                              {city}
                            </option>
                          ))}
                          <option value="other">Other City</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="contact-interest"
                        className="font-mono text-xs tracking-widest uppercase text-slate-500 font-semibold"
                      >
                        Space of Interest
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {["Modular Kitchen", "Bespoke Wardrobe", "Master Bedroom", "Entire Residence"].map(
                          (option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() =>
                                setFormState((s) => ({ ...s, interest: option }))
                              }
                              className={`px-3 py-2.5 rounded-xl border text-xs font-mono tracking-wider uppercase transition-all duration-300 text-center cursor-pointer ${
                                formState.interest === option
                                  ? "bg-slate-950 text-white border-slate-950 font-semibold shadow-sm"
                                  : "bg-slate-50/60 text-slate-700 border-slate-200 hover:border-[#B8923A] hover:text-[#855E15]"
                              }`}
                            >
                              {option}
                            </button>
                          )
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="contact-message"
                        className="font-mono text-xs tracking-widest uppercase text-slate-500 font-semibold"
                      >
                        Architectural Vision & Floorplan Details
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        value={formState.message}
                        onChange={(e) =>
                          setFormState((s) => ({ ...s, message: e.target.value }))
                        }
                        className="w-full px-4 py-3 bg-slate-50/60 border border-slate-200 rounded-xl text-slate-900 font-sans text-sm focus:bg-white focus:border-[#B8923A] focus:ring-1 focus:ring-[#B8923A]/30 transition-all outline-none resize-none"
                        placeholder="Tell us about your space dimensions, preferred material palette, timeline..."
                      />
                    </div>

                    {errorMessage && (
                      <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-mono">
                        {errorMessage}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 px-8 rounded-full bg-[#B8923A] hover:bg-[#C99E4B] text-slate-950 font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-xl flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer active:scale-95 group"
                    >
                      <span>{loading ? "One moment..." : "Start My Design Journey"}</span>
                      <span className="w-6 h-6 rounded-full bg-slate-950/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                        <svg
                          className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d={
                              loading
                                ? "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                : "M17 8l4 4m0 0l-4 4m4-4H3"
                            }
                          />
                        </svg>
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Contact Details & Raipur Studio Sidebar */}
          <div className="contact-info lg:col-span-5 flex flex-col gap-5">
            {/* Direct Studio Call */}
            <div className="double-bezel">
              <div className="double-bezel-inner p-6 flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-amber-50/80 border border-[#B8923A]/30 flex items-center justify-center text-[#855E15] shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-xs tracking-widest uppercase text-slate-500 mb-0.5">
                    Direct Client Line
                  </p>
                  <a
                    href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
                    className="font-serif text-xl text-slate-900 hover:text-[#855E15] transition-colors"
                  >
                    {BRAND.phone}
                  </a>
                  <p className="font-mono text-xs text-slate-500 mt-1">Mon–Sat · 10:00 AM – 8:00 PM IST</p>
                </div>
              </div>
            </div>

            {/* Direct Studio Email */}
            <div className="double-bezel">
              <div className="double-bezel-inner p-6 flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-amber-50/80 border border-[#B8923A]/30 flex items-center justify-center text-[#855E15] shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-xs tracking-widest uppercase text-slate-500 mb-0.5">
                    Architectural Inquiries
                  </p>
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="font-serif text-xl text-slate-900 hover:text-[#855E15] transition-colors"
                  >
                    {BRAND.email}
                  </a>
                  <p className="font-mono text-xs text-slate-500 mt-1">We reply as soon as we can</p>
                </div>
              </div>
            </div>

            {/* Studio Address */}
            <div className="double-bezel">
              <div className="double-bezel-inner p-6 flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-amber-50/80 border border-[#B8923A]/30 flex items-center justify-center text-[#855E15] shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-xs tracking-widest uppercase text-slate-500 mb-0.5">
                    Flagship Studio & Experience Lab
                  </p>
                  <p className="font-serif text-xl text-slate-900">
                    Raipur, Chhattisgarh 492001
                  </p>
                  <p className="font-mono text-xs text-slate-500 mt-1">India · Private visits by reservation</p>
                </div>
              </div>
            </div>

            {/* Cities Served */}
            <div className="p-6 rounded-3xl border border-slate-100 bg-slate-50/50">
              <p className="font-mono text-xs tracking-widest uppercase text-slate-500 mb-3 font-semibold">
                Pan-India Experience Network
              </p>
              <div className="flex flex-wrap gap-1.5">
                {CITIES.map((city) => (
                  <span
                    key={city}
                    className="px-2.5 py-1 text-[13px] font-mono text-slate-600 bg-white border border-slate-200 rounded-full"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
