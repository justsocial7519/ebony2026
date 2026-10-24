"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle2, ChevronDown, Lock } from "lucide-react"
import { BRAND, CITIES } from "@/lib/content"
import { cn } from "@/lib/utils"

const INTERESTS = ["Kitchen", "Wardrobe", "Walk-in closet", "Whole home"]

const fieldClass =
  "w-full px-4 py-3.5 rounded-xl bg-white ring-1 ring-slate-200 text-slate-950 text-base placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#C5A572] transition-shadow"

export function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", city: "Raipur", interest: "Kitchen", message: "" })
  const [hp, setHp] = useState("") // honeypot: real people never fill this
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (hp) return
    setError("")

    if (form.phone.replace(/\D/g, "").length < 10) {
      setError("Please enter a valid mobile number so we can ring you.")
      return
    }

    setLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, honeypot: hp }),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setSubmitted(true)
      } else {
        setError(data.error || "Something went wrong. Please try again, or message us on WhatsApp.")
      }
    } catch {
      setError(`That did not go through. Please call us on ${BRAND.phone} or message us on WhatsApp.`)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="py-12 text-center animate-in fade-in zoom-in-95 duration-500">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-slate-950 mb-3">Thank you, {form.name}!</h2>
        <p className="text-base sm:text-lg text-slate-600 max-w-md mx-auto leading-relaxed">
          We&apos;ve got your details. Someone from our team will call you on{" "}
          <span className="font-semibold text-slate-950">{form.phone}</span> soon.
        </p>
        <Link
          href="/collections"
          className="group mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-950 hover:bg-[#C5A572] hover:text-slate-950 text-white text-[15px] font-semibold transition-all duration-300 shadow-md"
        >
          <span>Explore design collections while you wait</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <input
        type="text"
        name="website"
        value={hp}
        onChange={(e) => setHp(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] w-0 h-0 opacity-0"
        aria-hidden="true"
      />

      <div>
        <h2 className="font-serif text-[1.75rem] sm:text-3xl text-slate-950">Curate Your Bespoke Space</h2>
        <p className="text-[15px] text-slate-600 mt-1">Share your vision with our design architects.</p>
      </div>

      <fieldset>
        <legend className="block text-sm font-medium text-slate-800 mb-2.5">What are you planning?</legend>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {INTERESTS.map((option) => {
            const selected = form.interest === option
            return (
              <button
                key={option}
                type="button"
                aria-pressed={selected}
                onClick={() => setForm((s) => ({ ...s, interest: option }))}
                className={cn(
                  "min-h-12 px-3 rounded-xl text-[15px] font-medium transition-all duration-200 cursor-pointer",
                  selected
                    ? "bg-slate-950 text-white shadow-lg shadow-slate-900/15"
                    : "bg-slate-50 text-slate-700 ring-1 ring-slate-200 hover:ring-[#C5A572]"
                )}
              >
                {option}
              </button>
            )
          })}
        </div>
      </fieldset>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-slate-800 mb-2">
            Your name
          </label>
          <input
            id="contact-name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
            className={fieldClass}
            placeholder="e.g. Rahul Sharma"
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="block text-sm font-medium text-slate-800 mb-2">
            Mobile number
          </label>
          <input
            id="contact-phone"
            type="tel"
            inputMode="tel"
            required
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
            className={fieldClass}
            placeholder="98765 43210"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-city" className="block text-sm font-medium text-slate-800 mb-2">
          Your city
        </label>
        <div className="relative">
          <select
            id="contact-city"
            value={form.city}
            onChange={(e) => setForm((s) => ({ ...s, city: e.target.value }))}
            className={cn(fieldClass, "appearance-none pr-11 cursor-pointer")}
          >
            {CITIES.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
            <option value="Other">Somewhere else</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-slate-800 mb-2">
          Anything we should know? <span className="font-normal text-slate-500">(optional)</span>
        </label>
        <textarea
          id="contact-message"
          rows={3}
          value={form.message}
          onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
          className={cn(fieldClass, "resize-none")}
          placeholder="For example: a flat we are moving into soon, we love light wood colours…"
        />
      </div>

      {error && (
        <div role="alert" className="p-4 rounded-xl bg-red-50 ring-1 ring-red-200 text-red-800 text-[15px]">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="group w-full py-4 px-8 rounded-full bg-[#C5A572] hover:bg-[#D4B582] text-slate-950 text-base font-semibold transition-colors shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer active:scale-[0.99]"
      >
        {loading ? "Sending…" : "Reserve Design Session"}
        {!loading && <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
      </button>

      <p className="flex items-center justify-center gap-2 text-sm text-slate-500">
        <Lock className="w-4 h-4" />
        We never share your number. No spam calls.
      </p>
    </form>
  )
}
