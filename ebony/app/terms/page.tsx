import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { EnquiryModal } from "@/components/enquiry-modal"
import { BRAND } from "@/lib/content"

export const metadata = {
  title: "Terms & Conditions — EBONY Modular Interiors",
  description: "Terms and conditions for EBONY Modular Kulture interior design, manufacturing, and installation services.",
}

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-amber-500/20 selection:text-slate-900">
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#B8923A] font-bold block mb-3">
            LEGAL FRAMEWORK
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-slate-950 font-normal mb-8">
            Terms &amp; Conditions.
          </h1>

          <div className="prose prose-slate max-w-none font-sans text-sm sm:text-base text-slate-600 space-y-6 leading-relaxed">
            <p>
              Welcome to <strong>{BRAND.legalName}</strong> (&ldquo;EBONY&rdquo;). By accessing <em>ebony.co.in</em> or engaging our design, manufacturing, and installation services, you agree to comply with the following contractual guidelines.
            </p>

            <h2 className="font-serif text-2xl text-slate-950 font-normal pt-4">
              1. Scope of Custom Manufacturing
            </h2>
            <p>
              EBONY provides bespoke, custom-manufactured modular kitchens, wardrobes, walk-in closets, and architectural joinery. All products are manufactured based on laser site surveys approved by the client or their designated architect. Once manufacturing commences on our CNC line, structural dimensions cannot be altered without mutual written adjustment.
            </p>

            <h2 className="font-serif text-2xl text-slate-950 font-normal pt-4">
              2. Precision Installation Protocol
            </h2>
            <p>
              Our rapid on-site assembly commences following complete civil, electrical, plumbing, and flooring readiness of the site. Because cabinetry is pre-engineered in our factory, on-site installation proceeds smoothly with minimal dust and laser-calibrated alignment.
            </p>

            <h2 className="font-serif text-2xl text-slate-950 font-normal pt-4">
              3. Comprehensive Warranty &amp; Hardware
            </h2>
            <p>
              All genuine motion hardware (Blum, Häfele, Hettich, Salice, Ebco) and calibrated substrates (IS 710 Marine Plywood, SS 304, HDHMR) carry EBONY&apos;s comprehensive quality assurance against manufacturing defects, delamination, and mechanical failure under standard domestic usage.
            </p>

            <h2 className="font-serif text-2xl text-slate-950 font-normal pt-4">
              4. Studio Jurisdiction
            </h2>
            <p>
              All contracts and interactions are governed under the jurisdiction of the courts of Raipur, Chhattisgarh, India. For questions regarding your contract, contact <a href={`mailto:${BRAND.email}`} className="text-[#B8923A] font-medium underline">{BRAND.email}</a>.
            </p>
          </div>
        </div>
      </main>

      <EnquiryModal />

      <Footer />
    </div>
  )
}
