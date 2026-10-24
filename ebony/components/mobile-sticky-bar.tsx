"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Phone, MessageCircle } from "lucide-react"
import { BRAND } from "@/lib/content"
import { openEnquiryModal } from "@/components/enquiry-modal"
import { cn } from "@/lib/utils"

const WHATSAPP_URL = "https://wa.me/917974209352?text=Hello%20Ebony%2C%20I%20am%20interested%20in%20a%20new%20kitchen."

export function MobileStickyBar() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (pathname === "/contact") return null

  return (
    <>
      {/* Phones: one calm bar with the three things people actually want */}
      <div
        className={cn(
          "md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#0B0F19]/95 backdrop-blur-lg border-t border-white/10 px-3 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] flex items-center gap-2 transition-transform duration-500",
          visible ? "translate-y-0" : "translate-y-full"
        )}
      >
        <a
          href={`tel:${BRAND.phoneRaw}`}
          aria-label={`Call ${BRAND.phone}`}
          className="w-12 h-12 shrink-0 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-[#D8B97F] active:scale-95 transition-transform"
        >
          <Phone className="w-5 h-5" />
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 h-12 rounded-full bg-[#25D366] text-slate-950 flex items-center justify-center gap-2 text-[15px] font-semibold active:scale-95 transition-transform"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </a>
        <button
          onClick={() => openEnquiryModal({ category: "Designer home visit" })}
          className="flex-1 h-12 rounded-full bg-[#C5A572] text-slate-950 text-[15px] font-semibold active:scale-95 transition-transform cursor-pointer"
        >
          Plan My Space
        </button>
      </div>

      {/* Desktop: a single floating WhatsApp button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className={cn(
          "group hidden md:flex fixed right-6 bottom-7 z-40 items-center gap-2.5 pl-4 pr-5 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5b] text-slate-950 text-[15px] font-semibold shadow-xl shadow-black/25 transition-all duration-500",
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0 pointer-events-none"
        )}
      >
        <span className="relative flex">
          <span className="absolute inset-0 rounded-full bg-white/60 animate-ping" />
          <MessageCircle className="relative w-6 h-6" />
        </span>
        Chat with us
      </a>
    </>
  )
}
