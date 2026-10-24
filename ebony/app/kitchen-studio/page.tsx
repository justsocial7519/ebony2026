import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { EnquiryModal } from "@/components/enquiry-modal"
import { KitchenStudio } from "@/components/kitchen-studio/kitchen-studio"

export const metadata: Metadata = {
  title: "Kitchen Studio — Design Your Kitchen in 3D | EBONY",
  description:
    "Try cabinet finishes, countertops and backsplashes on a 3D kitchen, then share your design with EBONY on WhatsApp.",
}

export default function KitchenStudioPage() {
  return (
    <div className="bg-[#F7F6F3] min-h-screen text-[#0B1020] selection:bg-amber-500/20">
      <Navbar />
      <main className="pt-[69px]">
        <KitchenStudio />
      </main>
      <EnquiryModal />
      <Footer />
    </div>
  )
}
