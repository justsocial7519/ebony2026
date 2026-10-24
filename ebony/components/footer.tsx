"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, ArrowUp, ArrowUpRight, MessageCircle } from "lucide-react"
import { BRAND } from "@/lib/content"

const WHATSAPP_URL = "https://wa.me/917974209352?text=Hello%20Ebony%2C%20I%20am%20interested%20in%20a%20new%20kitchen."

const EXPLORE = [
  { label: "Home", href: "/" },
  { label: "Kitchens", href: "/kitchens" },
  { label: "Wardrobes", href: "/wardrobes" },
  { label: "Collections", href: "/collections" },
  { label: "3D Kitchen Studio", href: "/kitchen-studio" },
  { label: "Colours & Finishes", href: "/finishes" },
  { label: "Fittings", href: "/hardware" },
  { label: "Why Ebony", href: "/why-ebony" },
  { label: "Contact", href: "/contact" },
]

const MAKE = [
  { label: "Modular Kitchens", href: "/kitchens" },
  { label: "Island Kitchens", href: "/kitchens#island" },
  { label: "L-Shaped Kitchens", href: "/kitchens#l-shape" },
  { label: "Wardrobes", href: "/wardrobes" },
  { label: "Walk-in Closets", href: "/walk-in-closets" },
  { label: "Bar & TV Units", href: "/collections#tv-bar" },
  { label: "Commercial Kitchens", href: "/chefs-favourite-corner" },
]

export function Footer() {
  return (
    <footer className="relative bg-[#0A0D14] text-white overflow-hidden pb-[76px] md:pb-0">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[80vw] max-w-[900px] h-[320px] bg-[#C5A572]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-20 sm:pt-24">
        {/* Closing line + quick actions */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 pb-14 border-b border-white/10">
          <div className="max-w-2xl">
            <Link href="/" className="inline-block mb-8 group cursor-pointer" aria-label="Ebony Home">
              <Image
                src="/logo.png"
                alt={BRAND.name}
                width={140}
                height={40}
                className="object-contain brightness-125 transition-transform duration-300 group-hover:scale-105"
                style={{ width: "auto", height: "auto" }}
              />
            </Link>
            <p className="font-serif text-[2rem] sm:text-5xl leading-[1.15] tracking-tight">
              Kitchens you&apos;ll love <span className="not-italic text-[#D8B97F]">coming home to.</span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#C5A572] hover:bg-[#D4B582] text-slate-950 text-[15px] font-semibold transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
            <a
              href={`tel:${BRAND.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white text-[15px] font-semibold transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call {BRAND.phone}
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-12 py-14">
          <nav className="lg:col-span-3" aria-label="Explore">
            <h3 className="text-sm font-semibold text-[#D8B97F] mb-5">Explore</h3>
            <ul className="space-y-3">
              {EXPLORE.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[15px] text-white/75 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="lg:col-span-3" aria-label="What we make">
            <h3 className="text-sm font-semibold text-[#D8B97F] mb-5">What we make</h3>
            <ul className="space-y-3">
              {MAKE.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[15px] text-white/75 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-2 lg:col-span-6 grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-[#D8B97F] mb-5">Visit our studio</h3>
              <ul className="space-y-4 text-[15px] text-white/80">
                <li className="flex items-start gap-3">
                  <MapPin className="w-[18px] h-[18px] text-[#D8B97F] shrink-0 mt-0.5" />
                  <span>VIP Road / Shankar Nagar, Raipur, Chhattisgarh 492001</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-[18px] h-[18px] text-[#D8B97F] shrink-0 mt-0.5" />
                  <span>Mon – Sat, 10:30 AM – 8:00 PM</span>
                </li>
              </ul>
              <a
                href={BRAND.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 mt-5 text-[15px] font-semibold text-white hover:text-[#D8B97F] transition-colors"
              >
                Get directions
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#D8B97F] mb-5">Talk to us</h3>
              <ul className="space-y-4 text-[15px]">
                <li>
                  <a href={`tel:${BRAND.phoneRaw}`} className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                    <Phone className="w-[18px] h-[18px] text-[#D8B97F] shrink-0" />
                    {BRAND.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${BRAND.email}`} className="flex items-center gap-3 text-white/80 hover:text-white transition-colors break-all">
                    <Mail className="w-[18px] h-[18px] text-[#D8B97F] shrink-0" />
                    {BRAND.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-7 border-t border-white/10 text-sm text-white/60">
          <p>© {new Date().getFullYear()} EBONY Modular Kulture. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group inline-flex items-center gap-1.5 text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              Back to top
              <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Big brand wordmark */}
      <p
        aria-hidden="true"
        className="font-serif text-center leading-[0.8] tracking-tight text-[26vw] sm:text-[22vw] text-transparent select-none pointer-events-none -mb-[3vw]"
        style={{ WebkitTextStroke: "1px rgba(216,185,127,0.22)" }}
      >
        EBONY
      </p>
    </footer>
  )
}
