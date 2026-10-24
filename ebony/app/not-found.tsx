import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { EnquiryModal } from "@/components/enquiry-modal"
import { ArrowLeft, ArrowUpRight } from "lucide-react"

export const metadata = {
  title: "404 — Page Not Found — EBONY Modular Interiors",
  description: "The page you are looking for has moved or does not exist. Explore EBONY modular kitchens, wardrobes, and luxury interiors.",
}

export default function NotFound() {
  return (
    <div className="bg-white min-h-screen text-slate-900 flex flex-col justify-between selection:bg-amber-500/20 selection:text-slate-900">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-32 px-5 sm:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#B8923A] font-bold block mb-4">
            404 · PAGE NOT FOUND
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-slate-950 font-normal leading-[1.1] tracking-tight mb-6">
            Even the best blueprints <br />
            <span>sometimes shift.</span>
          </h1>
          <p className="font-sans text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-10 max-w-lg mx-auto">
            The page you are looking for has been relocated or does not exist. Allow us to guide you back to our bespoke architectural collections.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-slate-950 hover:bg-[#B8923A] text-white font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-md"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Homepage</span>
            </Link>
            <Link
              href="/kitchens"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300"
            >
              <span>Explore Kitchens</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      <EnquiryModal />

      <Footer />
    </div>
  )
}
