"use client"

import { useState } from "react"
import Link from "next/link"
import { MapPin, Building, ArrowUpRight, ShieldCheck, Check } from "lucide-react"

interface CityNode {
  id: string
  name: string
  role: string
  x: number // SVG percentage
  y: number // SVG percentage
  dealers: string
  address: string
  phone: string
  isHeadquarters?: boolean
}

const CITIES_DATA: CityNode[] = [
  {
    id: "raipur",
    name: "Raipur",
    role: "National Flagship Studio & HQ",
    x: 58,
    y: 50,
    dealers: "Headquarters & Experience Center",
    address: "EBONY Studio, Raipur, Chhattisgarh 492001",
    phone: "+91 79742 09352",
    isHeadquarters: true,
  },
  {
    id: "delhi",
    name: "Delhi NCR",
    role: "Regional Distribution & Franchise",
    x: 42,
    y: 28,
    dealers: "Dealers & Distributors",
    address: "Partner Showrooms across Delhi, Noida & Gurgaon",
    phone: "+91 79742 09352",
  },
  {
    id: "mumbai",
    name: "Mumbai",
    role: "Western Metropolitan Experience",
    x: 32,
    y: 62,
    dealers: "Partner Showrooms",
    address: "Architectural Network across Mumbai & Thane",
    phone: "+91 79742 09352",
  },
  {
    id: "pune",
    name: "Pune",
    role: "Regional Franchise Partner",
    x: 36,
    y: 66,
    dealers: "Active Dealer Points",
    address: "Modular Studio Network, Pune",
    phone: "+91 79742 09352",
  },
  {
    id: "ahmedabad",
    name: "Ahmedabad",
    role: "Gujarat Distribution Hub",
    x: 28,
    y: 48,
    dealers: "Dealers & Stockists",
    address: "Authorized EBONY Distributor Points, Gujarat",
    phone: "+91 79742 09352",
  },
  {
    id: "bangalore",
    name: "Bangalore",
    role: "Southern Tech & Design Hub",
    x: 44,
    y: 80,
    dealers: "Certified Dealers",
    address: "Architect Partner Studios across Bangalore Urban",
    phone: "+91 79742 09352",
  },
]

export function NetworkSection() {
  const [selectedCity, setSelectedCity] = useState<CityNode>(CITIES_DATA[0])

  return (
    <section
      id="why-ebony"
      className="section-padding bg-mist/40 relative overflow-hidden border-t border-hair"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="eyebrow mb-4 inline-flex">Pan-India Presence</span>
            <h2 className="text-heading-1 text-ebony mt-2">
              Engineered in Germany.
              <br />
              <span className="text-gold-deep">Present across India.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-body mb-4">
              With dealers, distributors and franchise hubs across the country, EBONY brings careful luxury modular manufacturing, delivery, and lifetime after-sales care to premier residences nationwide.
            </p>
            <div className="flex items-center gap-6">
              <div>
                <span className="font-serif text-2xl text-ebony">Nationwide</span>
                <span className="font-mono text-xs uppercase tracking-wider text-graphite block">
                  Dealers & Distributors
                </span>
              </div>
              <div className="w-px h-8 bg-hair" />
              <div>
                <span className="font-serif text-2xl text-gold-deep">Growing</span>
                <span className="font-mono text-xs uppercase tracking-wider text-graphite block">
                  Franchise Hubs
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Map & City Hub Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left: Stylized India Constellation Map (SVG) */}
          <div className="lg:col-span-7 bg-white rounded-md border border-hair p-8 sm:p-12 shadow-soft relative flex flex-col items-center justify-center min-h-[440px] sm:min-h-[520px]">
            {/* Top legend */}
            <div className="w-full flex items-center justify-between pb-6 mb-4 border-b border-hair">
              <span className="font-mono text-xs tracking-widest uppercase text-graphite">
                Interactive Network Node Map
              </span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
                <span className="font-mono text-xs uppercase tracking-wider text-gold-deep">
                  Live Hubs
                </span>
              </div>
            </div>

            {/* Stylized Network SVG */}
            <div className="relative w-full max-w-[420px] aspect-[4/5]">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full overflow-visible"
              >
                {/* Connecting hairline network constellation rays */}
                <g stroke="var(--color-hair)" strokeWidth="0.8" strokeDasharray="2,2">
                  <line x1="58" y1="50" x2="42" y2="28" />
                  <line x1="58" y1="50" x2="32" y2="62" />
                  <line x1="58" y1="50" x2="36" y2="66" />
                  <line x1="58" y1="50" x2="28" y2="48" />
                  <line x1="58" y1="50" x2="44" y2="80" />
                  <line x1="42" y1="28" x2="28" y2="48" />
                  <line x1="32" y1="62" x2="44" y2="80" />
                </g>

                {/* City Nodes */}
                {CITIES_DATA.map((city) => {
                  const isSelected = selectedCity.id === city.id
                  return (
                    <g
                      key={city.id}
                      className="cursor-pointer group"
                      onClick={() => setSelectedCity(city)}
                    >
                      {/* Pulsing ring for selected / HQ */}
                      {(isSelected || city.isHeadquarters) && (
                        <circle
                          cx={city.x}
                          cy={city.y}
                          r={isSelected ? "6" : "4"}
                          fill="none"
                          stroke={isSelected ? "var(--color-gold)" : "var(--color-gold-deep)"}
                          strokeWidth="0.6"
                          className="animate-pulse"
                        />
                      )}

                      {/* Main Node Dot */}
                      <circle
                        cx={city.x}
                        cy={city.y}
                        r={isSelected ? "3" : "2"}
                        fill={
                          isSelected
                            ? "var(--color-gold-deep)"
                            : city.isHeadquarters
                            ? "var(--color-gold)"
                            : "var(--color-ebony)"
                        }
                        stroke="#FFFFFF"
                        strokeWidth="0.8"
                      />

                      {/* City Text Label */}
                      <text
                        x={city.x + 3.5}
                        y={city.y + 1}
                        fontSize="3.2"
                        fontFamily="var(--font-mono)"
                        fontWeight={isSelected ? "700" : "500"}
                        letterSpacing="0.08em"
                        fill={isSelected ? "var(--color-gold-deep)" : "var(--color-ebony)"}
                      >
                        {city.name.toUpperCase()}
                      </text>
                    </g>
                  )
                })}
              </svg>

              {/* Ambient India Background Contour / Watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
                <span className="font-serif text-[10rem] text-ebony select-none">
                  INDIA
                </span>
              </div>
            </div>

            <p className="font-mono text-xs uppercase tracking-wider text-graphite text-center mt-4">
              Tap any node to view authorized regional distributor credentials
            </p>
          </div>

          {/* Right: Selected Node Details Card & Enquiry */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-md border border-hair p-8 shadow-card space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-hair">
                <span className="text-label">Regional Location</span>
                {selectedCity.isHeadquarters && (
                  <span className="px-2.5 py-0.5 rounded bg-gold/15 text-gold-deep font-mono text-xs uppercase tracking-wider">
                    HQ & Flagship
                  </span>
                )}
              </div>

              <div>
                <h3 className="font-serif text-3xl text-ebony">
                  {selectedCity.name}
                </h3>
                <p className="font-mono text-xs uppercase tracking-wider text-gold-deep mt-1 font-medium">
                  {selectedCity.role}
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold-deep shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-graphite block">
                      Address / Regional Coverage
                    </span>
                    <span className="font-sans text-sm text-ebony">
                      {selectedCity.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building className="w-4 h-4 text-gold-deep shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-graphite block">
                      Dealer Network Strength
                    </span>
                    <span className="font-sans text-sm text-ebony">
                      {selectedCity.dealers}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-hair space-y-3">
                <Link
                  href="/contact"
                  className="btn-primary w-full justify-center text-xs py-3.5"
                >
                  <span>Reserve My Design Visit</span>
                  <ArrowUpRight className="w-3.5 h-3.5 relative z-10" />
                </Link>

                <a
                  href={`tel:${selectedCity.phone.replace(/[^0-9+]/g, "")}`}
                  className="btn-ghost w-full justify-center text-xs py-3"
                >
                  <span>Direct Desk: {selectedCity.phone}</span>
                </a>
              </div>
            </div>

            {/* Franchise Partnership Callout Box */}
            <div className="p-6 rounded-md bg-white border border-hair flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-gold-deep shrink-0 mt-1" />
              <div>
                <h4 className="font-serif text-lg text-ebony">
                  Franchise & Dealer Enquiries
                </h4>
                <p className="font-sans text-xs text-graphite mt-1 mb-3">
                  Partner with India&apos;s leading German-engineered modular luxury brand. Comprehensive showroom design, ERP, and careful manufacturing support.
                </p>
                <Link
                  href="/contact"
                  className="font-mono text-xs uppercase tracking-wider text-gold-deep font-semibold inline-flex items-center gap-1 hover:underline"
                >
                  Partner With Ebony →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
