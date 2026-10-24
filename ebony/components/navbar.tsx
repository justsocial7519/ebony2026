"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BRAND } from "@/lib/content"
import { cn } from "@/lib/utils"
import { ArrowRight, MessageCircle, Phone, MapPin } from "lucide-react"
import { openEnquiryModal } from "@/components/enquiry-modal"

// Home is reached from the logo on wide screens, so it only appears in the full-screen menu
const NAV_ITEMS = [
  { label: "Home", href: "/", menuOnly: true },
  { label: "Kitchens", href: "/kitchens" },
  { label: "Wardrobes", href: "/wardrobes" },
  { label: "Collections", href: "/collections" },
  { label: "Chef's Corner", href: "/chefs-favourite-corner" },
  { label: "3D Studio", href: "/kitchen-studio" },
  { label: "Why Ebony", href: "/why-ebony" },
  { label: "Contact", href: "/contact" },
]

const WHATSAPP_URL = "https://wa.me/917974209352?text=Hello%20Ebony%2C%20I%20am%20interested%20in%20a%20new%20kitchen."

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock page scroll and allow Escape to close while the menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false)
    if (menuOpen) window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [menuOpen])

  const solid = scrolled || (pathname && pathname !== "/")

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 transition-all duration-500",
          menuOpen ? "z-[120]" : "z-50",
          menuOpen
            ? "bg-transparent py-4 sm:py-5"
            : solid
            ? "bg-[#0B0F19]/95 backdrop-blur-md border-b border-white/10 py-3"
            : "bg-gradient-to-b from-black/70 to-transparent py-4 sm:py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="relative flex items-center group"
            aria-label="Ebony home"
          >
            <span className="relative h-8 sm:h-9 w-28 sm:w-32 flex items-center">
              <Image
                src="/logo.png"
                alt={BRAND.name}
                width={120}
                height={34}
                className="object-contain brightness-125 transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </span>
          </Link>

          <nav className="hidden xl:flex items-center gap-7" aria-label="Main">
            {NAV_ITEMS.filter((item) => !item.menuOnly).map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative whitespace-nowrap text-[15px] py-1 transition-colors duration-200",
                    "after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-[2px] after:rounded-full after:bg-[#C5A572] after:origin-left after:transition-transform after:duration-300",
                    active
                      ? "text-[#D8B97F] font-semibold after:scale-x-100"
                      : "text-white/85 hover:text-white font-medium after:scale-x-0 hover:after:scale-x-100"
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="hidden xl:flex items-center gap-5">
            <a
              href={`tel:${BRAND.phoneRaw}`}
              className="hidden 2xl:flex items-center gap-2 whitespace-nowrap text-white/85 hover:text-[#D8B97F] text-[15px] font-medium transition-colors"
            >
              <Phone className="w-4 h-4" />
              {BRAND.phone}
            </a>
            <button
              onClick={() => openEnquiryModal({ category: "Dream kitchen" })}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C5A572] hover:bg-[#D4B582] text-slate-950 text-sm font-semibold transition-all duration-300 active:scale-95 cursor-pointer"
            >
              Start My Dream Kitchen
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Phone + menu button (mobile & tablet) */}
          <div className="flex items-center gap-2.5 xl:hidden">
            <a
              href={`tel:${BRAND.phoneRaw}`}
              className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[#D8B97F]"
              aria-label={`Call ${BRAND.phone}`}
            >
              <Phone className="w-[18px] h-[18px]" />
            </a>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center cursor-pointer"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span className="relative block w-5 h-3.5">
                <span
                  className={cn(
                    "absolute left-0 right-0 top-0 h-0.5 rounded-full bg-white transition-all duration-300",
                    menuOpen && "top-1.5 rotate-45"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 right-0 top-1.5 h-0.5 rounded-full bg-white transition-opacity duration-200",
                    menuOpen && "opacity-0"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 right-0 top-3 h-0.5 rounded-full bg-white transition-all duration-300",
                    menuOpen && "top-1.5 -rotate-45"
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-[100] xl:hidden bg-[#0B0F19] transition-[opacity,visibility] duration-500",
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
        aria-hidden={!menuOpen}
      >
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#C5A572]/15 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative h-full overflow-y-auto flex flex-col px-6 pt-24 pb-8">
          <nav className="flex-1" aria-label="Mobile">
            <ul className="space-y-1">
              {NAV_ITEMS.map((item, i) => {
                const active = pathname === item.href
                return (
                  <li
                    key={item.href}
                    className={cn(
                      "transition-all duration-500 ease-out",
                      menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    )}
                    style={{ transitionDelay: menuOpen ? `${120 + i * 60}ms` : "0ms" }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      tabIndex={menuOpen ? 0 : -1}
                      className={cn(
                        "group flex items-center justify-between py-3 font-serif text-[2rem] leading-tight transition-colors",
                        active ? "text-[#D8B97F]" : "text-white hover:text-[#D8B97F]"
                      )}
                    >
                      <span>{item.label}</span>
                      <ArrowRight
                        className={cn(
                          "w-5 h-5 transition-all duration-300",
                          active ? "text-[#D8B97F]" : "text-white/30 group-hover:text-[#D8B97F] group-hover:translate-x-1"
                        )}
                      />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div
            className={cn(
              "mt-8 space-y-3 transition-all duration-500 ease-out",
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            )}
            style={{ transitionDelay: menuOpen ? "520ms" : "0ms" }}
          >
            <button
              onClick={() => {
                setMenuOpen(false)
                openEnquiryModal({ category: "Designer home visit" })
              }}
              tabIndex={menuOpen ? 0 : -1}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#C5A572] text-slate-950 text-base font-semibold active:scale-[0.98] transition-transform cursor-pointer"
            >
              Invite a Designer Home
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={menuOpen ? 0 : -1}
                className="flex items-center justify-center gap-2 py-3.5 rounded-full bg-white/10 border border-white/15 text-white text-[15px] font-medium"
              >
                <MessageCircle className="w-[18px] h-[18px] text-[#25D366]" />
                WhatsApp
              </a>
              <a
                href={`tel:${BRAND.phoneRaw}`}
                tabIndex={menuOpen ? 0 : -1}
                className="flex items-center justify-center gap-2 py-3.5 rounded-full bg-white/10 border border-white/15 text-white text-[15px] font-medium"
              >
                <Phone className="w-[18px] h-[18px] text-[#D8B97F]" />
                Call us
              </a>
            </div>
            <p className="flex items-center justify-center gap-2 pt-3 text-sm text-white/60">
              <MapPin className="w-4 h-4" />
              Raipur studio · Mon – Sat, 10:30 AM – 8 PM
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
