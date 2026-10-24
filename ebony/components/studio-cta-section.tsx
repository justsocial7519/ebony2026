"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone, MapPin, CheckCircle2, MessageCircle, ArrowRight, Clock } from "lucide-react"
import { BRAND } from "@/lib/content"
import { HOME_CONTENT } from "@/lib/home-content"

const WHATSAPP_URL = "https://wa.me/917974209352?text=Hello%20Ebony%2C%20I%20would%20like%20to%20plan%20my%20kitchen."

export function StudioCtaSection() {
  const { kicker, title, accent, subtitle, formTitle, formNote, primaryBtn } = HOME_CONTENT.finalCta
  const [form, setForm] = useState({ name: "", phone: "", city: "Raipur" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    const cleanedPhone = form.phone.replace(/\D/g, "")
    if (cleanedPhone.length < 10) {
      setError("Please enter a valid mobile number so we can reach you.")
      return
    }

    setLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          city: form.city,
          interest: "Homepage visit request",
          message: `Visit request from ${form.name} in ${form.city}.`,
        }),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setSubmitted(true)
      } else {
        setError(data.error || "Something went wrong. Please try again.")
      }
    } catch {
      setError(`That did not go through. Please call us on ${BRAND.phone}.`)
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl bg-white/[0.06] border border-white/15 text-white text-base placeholder:text-white/60 focus:outline-none focus:border-[#C5A572] focus:bg-white/[0.09] transition-colors"

  return (
    <section id="consultation" className="relative py-24 sm:py-32 bg-[#0A0D14] text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/kitchen-glass-glow.jpg"
          alt=""
          fill
          className="object-cover brightness-[0.22] contrast-[1.1]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <span className="kicker kicker-dark">{kicker}</span>
            <h2 className="font-serif text-[2.4rem] sm:text-5xl md:text-6xl text-white font-normal tracking-tight leading-[1.1] mt-4">
              {title} <span className="not-italic text-[#D8B97F]">{accent}</span>
            </h2>
            <p className="text-white/85 text-base sm:text-lg leading-relaxed mt-5 max-w-lg mb-9">{subtitle}</p>

            <ul className="space-y-4 text-[15px] text-white/90">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D8B97F] shrink-0 mt-0.5" />
                <span>VIP Road / Shankar Nagar, Raipur, Chhattisgarh</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#D8B97F] shrink-0 mt-0.5" />
                <span>Monday to Saturday, 10:30 AM – 8:00 PM</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 mt-9">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1ebe5b] text-slate-950 text-[15px] font-semibold transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              <a
                href={`tel:${BRAND.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-[15px] font-semibold transition-colors"
              >
                <Phone className="w-4 h-4" />
                {BRAND.phone}
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#121724]/90 backdrop-blur-xl border border-white/15 rounded-[1.75rem] p-7 sm:p-10 shadow-2xl">
            {submitted ? (
              <div className="text-center py-8 space-y-4 animate-in fade-in zoom-in-95 duration-500">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-white font-normal">Thank you, {form.name}!</h3>
                <p className="text-white/80 text-base max-w-sm mx-auto leading-relaxed">
                  We will ring you on <span className="text-[#D8B97F] font-semibold">{form.phone}</span> soon to plan
                  your space.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-[1.75rem] text-white font-normal mb-1">{formTitle}</h3>
                <p className="text-white/70 text-[15px] mb-7">{formNote}</p>

                {error && (
                  <div role="alert" className="mb-5 p-3.5 rounded-xl bg-red-500/15 border border-red-500/40 text-red-100 text-sm">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="cta-name" className="block text-sm font-medium text-white/85 mb-2">
                      Your name
                    </label>
                    <input
                      id="cta-name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="e.g. Rahul Sharma"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="cta-phone" className="block text-sm font-medium text-white/85 mb-2">
                      Mobile number
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/55 text-base">+91</span>
                      <input
                        id="cta-phone"
                        type="tel"
                        inputMode="numeric"
                        required
                        autoComplete="tel-national"
                        placeholder="98765 43210"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className={`${inputClass} pl-14`}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="cta-city" className="block text-sm font-medium text-white/85 mb-2">
                      City or area
                    </label>
                    <input
                      id="cta-city"
                      type="text"
                      required
                      autoComplete="address-level2"
                      placeholder="e.g. Raipur, Bilaspur, Durg"
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      className={inputClass}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="group w-full py-4 rounded-full bg-[#C5A572] hover:bg-[#D4B582] disabled:opacity-60 text-slate-950 text-base font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/20 active:scale-[0.99]"
                  >
                    {loading ? "Reserving…" : primaryBtn}
                    {!loading && <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
