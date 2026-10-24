import type { Metadata } from "next"
import { Playfair_Display, Poppins } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
})

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Ebony — Modular Kitchens & Wardrobes in Raipur",
  description:
    "Beautiful modular kitchens, wardrobes and walk-in closets, made in our own factory in Raipur and fitted cleanly by our own team. Finishes you can touch first, a warranty on our woodwork and a home design visit.",
  keywords: [
    "luxury modular interiors",
    "modular kitchen",
    "wardrobe",
    "bedroom furniture",
    "German engineered",
    "EBONY",
    "Raipur",
    "India",
  ],
  openGraph: {
    title: "EBONY — Luxury Modular Interiors",
    description:
      "German-engineered modular kitchens, wardrobes, and bed sets. Finishes you can touch first, made in our own factory and tailored to your home.",
    type: "website",
    locale: "en_IN",
    url: "https://ebony.co.in",
    siteName: "EBONY",
  },
  twitter: {
    card: "summary_large_image",
    title: "EBONY — Luxury Modular Interiors",
    description:
      "German-engineered modular kitchens, wardrobes, and bed sets. Finishes you can touch first, made in our own factory and tailored to your home.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["FurnitureStore", "HomeGoodsStore"],
  name: "EBONY Luxury Modular Interiors",
  alternateName: "EBONY Modular Kulture",
  description:
    "German-engineered luxury modular kitchens, wardrobes, and bed sets finished in a wide choice of finishes with custom craftsmanship and careful quality checks.",
  url: "https://ebony.co.in",
  logo: "https://ebony.co.in/logo.png",
  image: "https://ebony.co.in/img/hero-kitchen.jpg",
  telephone: "+91-7974209352",
  email: "info@ebony.co.in",
  priceRange: "₹₹₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "EBONY Design Studio",
    addressLocality: "Raipur",
    addressRegion: "Chhattisgarh",
    postalCode: "492001",
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "20:00",
    },
  ],
  areaServed: ["Mumbai", "Delhi", "Bangalore", "Pune", "Ahmedabad", "Raipur"],
}

import { PageLoader } from "@/components/ui/page-loader"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${poppins.variable} antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0B0F19" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        {/* Set before first paint so the hero waits for the intro curtain */}
        <script dangerouslySetInnerHTML={{ __html: `document.documentElement.dataset.loading="1"` }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <PageLoader />
        {children}
      </body>
    </html>
  )
}

