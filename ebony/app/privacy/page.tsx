import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { EnquiryModal } from "@/components/enquiry-modal"
import { BRAND } from "@/lib/content"

export const metadata = {
  title: "Privacy Policy — EBONY Modular Interiors",
  description: "Privacy policy for EBONY Modular Kulture. How we collect, safeguard, and respect your consultation information.",
}

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-amber-500/20 selection:text-slate-900">
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#B8923A] font-bold block mb-3">
            LEGAL &amp; PRIVACY COMMITMENT
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-slate-950 font-normal mb-8">
            Privacy Policy.
          </h1>

          <div className="prose prose-slate max-w-none font-sans text-sm sm:text-base text-slate-600 space-y-6 leading-relaxed">
            <p>
              At <strong>{BRAND.legalName}</strong> (&ldquo;EBONY&rdquo;), we hold client privacy with the same uncompromising standard of care that we bring to our German-engineered modular interiors. This Privacy Policy details how we handle information shared when you request a 3D consultation, visit our Raipur flagship showroom, or browse <em>ebony.co.in</em>.
            </p>

            <h2 className="font-serif text-2xl text-slate-950 font-normal pt-4">
              1. Information We Collect
            </h2>
            <p>
              When booking a design consultation or asking for a design plan, we may collect your full name, email address, phone number, city, architectural drawings, and interior preferences. We do not sell, rent, or monetize your contact information with any third-party marketing brokers.
            </p>

            <h2 className="font-serif text-2xl text-slate-950 font-normal pt-4">
              2. How We Use Your Information
            </h2>
            <p>
              Your contact details are used exclusively to schedule studio appointments, transmit 3D renders and cost estimates, coordinate site laser surveys, and provide lifetime after-sales warranty support for your modular installations.
            </p>

            <h2 className="font-serif text-2xl text-slate-950 font-normal pt-4">
              3. Data Security &amp; Confidentiality
            </h2>
            <p>
              All client architectural blueprints, floor plans, and personal records are encrypted and stored securely. Only authorized design and engineering personnel have access to project specifications.
            </p>

            <h2 className="font-serif text-2xl text-slate-950 font-normal pt-4">
              4. Contact Our Privacy Officer
            </h2>
            <p>
              For any inquiries regarding your stored information, please reach out to us at <a href={`mailto:${BRAND.email}`} className="text-[#B8923A] font-medium underline">{BRAND.email}</a> or call our studio at <a href={`tel:${BRAND.phoneRaw}`} className="text-[#B8923A] font-medium underline">{BRAND.phone}</a>.
            </p>
          </div>
        </div>
      </main>

      <EnquiryModal />

      <Footer />
    </div>
  )
}
