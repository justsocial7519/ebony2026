"use client"

import { useState, useEffect } from "react"
import { X, CheckCircle2, ArrowRight, Sparkles } from "lucide-react"

export interface EnquiryEventDetail {
  design?: string
  category?: string
  layout?: string
}

export function openEnquiryModal(detail?: EnquiryEventDetail | string) {
  if (typeof window === "undefined") return
  const payload = typeof detail === "string" ? { design: detail } : detail || {}
  window.dispatchEvent(new CustomEvent("open-enquiry-modal", { detail: payload }))
}

export function EnquiryModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [designName, setDesignName] = useState("")
  const [form, setForm] = useState({
    name: "",
    phone: "",
    interest: "Modular Kitchen",
    city: "Raipur",
    notes: "",
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<EnquiryEventDetail>
      const detail = customEvent.detail || {}
      if (detail.design) {
        setDesignName(detail.design)
        setForm((prev) => ({
          ...prev,
          interest: `Kitchen Style: ${detail.design}`,
        }))
      } else if (detail.category) {
        setForm((prev) => ({ ...prev, interest: detail.category || "Modular Kitchen" }))
      }
      setSuccess(false)
      setError("")
      setIsOpen(true)
    }

    window.addEventListener("open-enquiry-modal", handleOpen)
    return () => window.removeEventListener("open-enquiry-modal", handleOpen)
  }, [])

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  // Lock scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Phone validation: a full Indian mobile number
    const cleanedPhone = form.phone.replace(/\D/g, "")
    if (cleanedPhone.length < 10) {
      setError("Please enter a valid phone number so we can reach you.")
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
          interest: form.interest,
          message: designName
            ? `Customer interested in "${designName}" design. Notes: ${form.notes}`
            : form.notes,
        }),
      })

      const data = await res.json()
      if (res.ok && data.success) {
        setSuccess(true)
      } else {
        setError(data.error || "We could not save your details just now. Please try again.")
      }
    } catch {
      setError("Something went wrong with the connection. Please try again or call us at +91 79742 09352.")
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={() => setIsOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-lg bg-[#0E131F] border border-amber-500/25 rounded-3xl p-6 sm:p-8 text-white shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-20 bg-gradient-to-b from-amber-500/20 to-transparent blur-2xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {success ? (
          <div className="text-center py-8 px-2 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              Thank You, We&apos;ll Be in Touch
            </h3>
            <p className="text-white/75 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
              Thank you, <span className="text-white font-medium">{form.name}</span>. Our design expert
              from the Raipur studio will ring you on{" "}
              <span className="text-amber-400 font-mono font-medium">{form.phone}</span> soon to talk about{" "}
              {designName ? <span className="text-white">your {designName} kitchen</span> : "your project"}.
            </p>
            <div className="pt-4">
              <button
                onClick={() => setIsOpen(false)}
                className="px-6 py-2.5 rounded-full bg-[#B8923A] hover:bg-[#C99E4B] text-slate-950 font-mono text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer"
              >
                Back to Website
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-widest font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Plan Your Dream Space</span>
              </div>
              <h3 id="modal-title" className="font-serif text-2xl sm:text-3xl text-white font-normal">
                Start My Design Journey
              </h3>
              <p className="text-white/70 text-xs sm:text-sm mt-1 leading-relaxed">
                {designName ? <>You liked &ldquo;{designName}&rdquo;. </> : null}Tell us a little about your home. We&apos;ll help you choose the right layout, materials,
                and 3D plan.
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 text-xs">
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/35 focus:outline-none focus:border-amber-400 text-sm transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/60 text-xs font-mono">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      placeholder="98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/35 focus:outline-none focus:border-amber-400 text-sm font-mono transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-1.5">
                    City / Location
                  </label>
                  <input
                    type="text"
                    placeholder="Raipur, Bilaspur, etc."
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/35 focus:outline-none focus:border-amber-400 text-sm transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-1.5">
                  Interested In
                </label>
                <select
                  value={form.interest}
                  onChange={(e) => setForm({ ...form, interest: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#161C2C] border border-white/15 text-white focus:outline-none focus:border-amber-400 text-sm transition-colors cursor-pointer"
                >
                  {designName && <option value={`Kitchen Style: ${designName}`}>{designName} Kitchen</option>}
                  <option value="Modular Kitchen">Modular Kitchen</option>
                  <option value="Bespoke Wardrobe">Bespoke Wardrobe</option>
                  <option value="Walk-in Closet">Walk-in Closet</option>
                  <option value="Bar & TV Unit">Bar & TV Unit</option>
                  <option value="Full Home Joinery">Full Home Woodwork</option>
                  <option value="Not Sure Yet">Not sure yet (Need guidance)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-1.5">
                  Tell Us About Your Space (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. New apartment kitchen, planning a wardrobe renovation..."
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/35 focus:outline-none focus:border-amber-400 text-sm resize-none transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-full bg-[#B8923A] hover:bg-[#C99E4B] disabled:opacity-50 text-slate-950 font-mono text-xs uppercase tracking-wider font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/20 active:scale-[0.99]"
                >
                  {loading ? (
                    <span>One moment...</span>
                  ) : (
                    <>
                      <span>Start My Design Journey</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[13px] text-white/45 text-center pt-1 font-normal">
                Direct studio phone:{" "}
                <a href="tel:+917974209352" className="text-amber-400 hover:underline font-mono">
                  +91 79742 09352
                </a>
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
