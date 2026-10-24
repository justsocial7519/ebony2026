import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { WhatWeMakeSection } from "@/components/what-we-make-section"
import { KitchenConfigurationsSection } from "@/components/kitchen-configurations-section"
import { CustomKitchensSection } from "@/components/custom-kitchens-section"
import { KitchenStylesSection } from "@/components/kitchen-styles-section"
import { SurfaceFinishesSection } from "@/components/surface-finishes-section"
import { WardrobesSection } from "@/components/wardrobes-section"
import { InternalFittingsSection } from "@/components/internal-fittings-section"
import { HomesShowcaseSection } from "@/components/homes-showcase-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { WhyEbonySection } from "@/components/why-ebony-section"
import { StudioCtaSection } from "@/components/studio-cta-section"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { FadeReveal } from "@/components/ui/fade-reveal"
import { EnquiryModal } from "@/components/enquiry-modal"
import { MobileStickyBar } from "@/components/mobile-sticky-bar"

export const metadata = {
  title: "Ebony — Modular Kitchens & Home Interiors in Raipur",
  description:
    "Beautiful modular kitchens, wardrobes and walk-in closets made just for you. Designed around your family, made in our own Raipur factory and fitted cleanly by our own team.",
}

export default function Page() {
  return (
    <div className="bg-[#FFFBF5] min-h-screen text-[#1A1A1A] selection:bg-[#C5A572]/20 selection:text-slate-900 overflow-x-hidden">
      <ScrollProgress />
      <Navbar />

      <main>
        {/* Section 1: Cinematic Hero with Video & Trust Promises Strip */}
        <HeroSection />

        {/* Section 2: Explore Modular Designs (4 Collections Bento Grid) */}
        <FadeReveal>
          <WhatWeMakeSection />
        </FadeReveal>

        {/* Section 3: OUR COLLECTIONS (6 Shapes Premium Grid) */}
        <FadeReveal>
          <KitchenConfigurationsSection />
        </FadeReveal>

        {/* Section 4: NEW — Kitchens as Unique as Your Home (6 Family & Budget Designs) */}
        <FadeReveal>
          <CustomKitchensSection />
        </FadeReveal>

        {/* Section 5: Pick Your Style (12 Original Kitchen Designs Gallery with Filter Chips) */}
        <FadeReveal>
          <KitchenStylesSection />
        </FadeReveal>


        {/* Section 7: Colours & Finishes You'll Love (8 Friendly Swatches) */}
        <FadeReveal>
          <SurfaceFinishesSection />
        </FadeReveal>

        {/* Section 8: Space For Everything You Own (Sliding, Hinged, Walk-in Closets) */}
        <FadeReveal>
          <WardrobesSection />
        </FadeReveal>

        {/* Section 9: Little Things, Big Comfort (Soft-close drawers, lift-up doors + Blum, Häfele, Hettich, Salice, Ebco) */}
        <FadeReveal>
          <InternalFittingsSection />
        </FadeReveal>

        {/* Section 10: Design ideas we love to make (kitchens, wardrobes, closets, living) */}
        <FadeReveal>
          <HomesShowcaseSection />
        </FadeReveal>

        {/* Section 11: Happy Homes / Real Stories (Customer Reviews) */}
        <FadeReveal>
          <TestimonialsSection />
        </FadeReveal>

        {/* Section 12: Why Families Love Us (4 Reasons Homeowners Trust Ebony) */}
        <FadeReveal>
          <WhyEbonySection />
        </FadeReveal>

        {/* Section 13: Let's Build Your Dream Kitchen (Studio CTA + 3-Field Quick Form) */}
        <FadeReveal>
          <StudioCtaSection />
        </FadeReveal>
      </main>

      {/* Global Interactive Enquiry Modal */}
      <EnquiryModal />

      {/* Mobile Sticky Action Bar & Desktop Floating WhatsApp/Call Pill */}
      <MobileStickyBar />

      {/* Master Footer */}
      <Footer />
    </div>
  )
}
