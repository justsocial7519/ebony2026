import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ChevronRight, Clock, MapPin, MessageCircle, Phone } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { EnquiryModal } from "@/components/enquiry-modal"
import { BRAND, CITIES } from "@/lib/content"

export const metadata = {
  title: "Contact Ebony — Call, WhatsApp or Visit Our Raipur Studio",
  description:
    "Talk to Ebony about your new kitchen or wardrobe. Call, WhatsApp, visit our Raipur studio, or tell us about your space and we will ring you.",
}

const WHATSAPP_URL = "https://wa.me/917974209352?text=Hello%20Ebony%2C%20I%20would%20like%20to%20talk%20about%20my%20home."

const QUICK = [
  {
    label: "Call us",
    value: BRAND.phone,
    note: "Mon – Sat, 10:30 AM – 8 PM",
    href: `tel:${BRAND.phoneRaw}`,
    icon: Phone,
    external: false,
    accent: "bg-[#C5A572] text-slate-950",
  },
  {
    label: "WhatsApp",
    value: "Chat with us",
    note: "Share photos of your space",
    href: WHATSAPP_URL,
    icon: MessageCircle,
    external: true,
    accent: "bg-[#25D366] text-slate-950",
  },
  {
    label: "Visit our studio",
    value: "VIP Road, Raipur",
    note: "See and touch the finishes",
    href: BRAND.googleMapsUrl,
    icon: MapPin,
    external: true,
    accent: "bg-white text-slate-950",
  },
]

const NEXT_STEPS = [
  { title: "We ring you", line: "A friendly chat about your home, your needs and your budget." },
  { title: "Home visit", line: "We come over and measure every wall before we design." },
  { title: "See it in 3D", line: "You see exactly how your new kitchen will look before we make it." },
]

export default function ContactPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen text-slate-900">
      <Navbar />

      <main>
        {/* Header */}
        <section className="relative bg-[#0A0D14] text-white overflow-hidden">
          <Image
            src="/img/kitchen-island-luxury.jpg"
            alt=""
            fill
            priority
            className="object-cover brightness-[0.3]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-[#0A0D14]/60 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-32 sm:pt-40 pb-32 sm:pb-36">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-white/70 mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Contact</span>
            </nav>
            <h1 className="font-serif text-[2.6rem] leading-[1.08] sm:text-6xl lg:text-7xl tracking-tight max-w-3xl">
              Let&apos;s talk about <span className="not-italic text-[#D8B97F]">your new home</span>
            </h1>
            <p className="text-base sm:text-lg text-white/85 leading-relaxed mt-6 max-w-xl">
              Connect via phone, WhatsApp, or visit our Raipur studio. Or share your details below to begin curating your space.
            </p>
          </div>
        </section>

        {/* Quick ways to reach us */}
        <section className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 -mt-20 sm:-mt-24">
          <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
            {QUICK.map((q) => {
              const Icon = q.icon
              return (
                <li key={q.label}>
                  <a
                    href={q.href}
                    {...(q.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group h-full flex items-center gap-4 p-5 sm:p-6 rounded-[1.5rem] bg-white ring-1 ring-slate-200 shadow-xl shadow-slate-900/5 hover:-translate-y-1 hover:ring-[#C5A572]/60 transition-all duration-500"
                  >
                    <span className={`w-14 h-14 rounded-2xl ${q.accent} ring-1 ring-black/5 flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:rotate-6`}>
                      <Icon className="w-6 h-6" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-medium text-slate-500">{q.label}</span>
                      <span className="block font-serif text-xl text-slate-950 truncate">{q.value}</span>
                      <span className="block text-sm text-slate-500 mt-0.5">{q.note}</span>
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-slate-500 shrink-0 transition-all duration-300 group-hover:text-slate-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </li>
              )
            })}
          </ul>
        </section>

        {/* Form + studio */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7 relative bg-white rounded-[1.75rem] ring-1 ring-slate-200 p-6 sm:p-10 shadow-sm">
              <ContactForm />
            </div>

            <aside className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <div className="rounded-[1.75rem] overflow-hidden bg-white ring-1 ring-slate-200">
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/img/kitchen-island-real.jpg"
                    alt="Display kitchen with a curved two-level island, bar stools and a lit arch"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <h2 className="font-serif text-2xl text-slate-950">Our Raipur studio</h2>
                  <ul className="mt-4 space-y-3 text-[15px] text-slate-700">
                    <li className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#8E6D38] shrink-0 mt-0.5" />
                      VIP Road / Shankar Nagar, Raipur, Chhattisgarh 492001
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[#8E6D38] shrink-0 mt-0.5" />
                      Monday to Saturday, 10:30 AM – 8:00 PM
                    </li>
                  </ul>
                  <a
                    href={BRAND.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-950 hover:bg-[#8E6D38] text-white text-[15px] font-semibold transition-colors"
                  >
                    Get directions
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>

              <div className="rounded-[1.75rem] bg-[#F5EDE3] p-6 sm:p-7">
                <h2 className="font-serif text-2xl text-slate-950 mb-5">What happens next</h2>
                <ol className="space-y-5">
                  {NEXT_STEPS.map((step, i) => (
                    <li key={step.title} className="flex gap-4">
                      <span className="w-9 h-9 rounded-full bg-white text-[#8E6D38] font-semibold flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      <span>
                        <span className="block text-base font-semibold text-slate-950">{step.title}</span>
                        <span className="block text-[15px] text-slate-600 leading-relaxed">{step.line}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              <p className="text-[15px] text-slate-600 leading-relaxed px-1">
                <span className="font-semibold text-slate-900">We also fit homes in:</span> {CITIES.join(", ")}.
              </p>
            </aside>
          </div>
        </section>
      </main>

      <EnquiryModal />
      <Footer />
    </div>
  )
}
