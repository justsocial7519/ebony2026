// EBONY Homepage Content — simple, warm words for real families.
// Rule of thumb: if a parent or grandparent can't understand a line on first read, rewrite it.

export interface HomeContent {
  hero: {
    eyebrow: string
    title: string
    accent: string
    subtitle: string
    primaryCta: { label: string; href: string }
    secondaryCta: { label: string; href: string }
  }
  trustStrip: { title: string; subtitle: string; icon: string }[]
  exploreDesigns: {
    kicker: string
    title: string
    accent: string
    subtitle: string
    cards: {
      id: string
      title: string
      badge: string
      description: string
      href: string
      image: string
      /** Describes what the photo actually shows */
      alt?: string
    }[]
  }
  collections: {
    kicker: string
    title: string
    accent: string
    subtitle: string
    layouts: {
      id: string
      name: string
      line: string
      tag: string
      image: string
      /** Describes what the photo actually shows */
      alt?: string
      href: string
    }[]
  }
  uniqueKitchens: {
    kicker: string
    title: string
    accent: string
    subtitle: string
    cards: {
      id: string
      title: string
      line: string
      image: string
      /** Describes what the photo actually shows */
      alt?: string
      tag: string
    }[]
  }
  process: {
    kicker: string
    title: string
    subtitle: string
    steps: {
      num: string
      title: string
      line: string
      desc: string
    }[]
    cta: string
  }
  styles: {
    kicker: string
    title: string
    accent: string
    subtitle: string
    showMore: string
    showLess: string
  }
  finishes: {
    kicker: string
    title: string
    accent: string
    subtitle: string
    benefits: string[]
    swatches: {
      id: string
      name: string
      line: string
      colorHint: string
      tag: string
      image: string
      finishDetail: string
    }[]
  }
  wardrobes: {
    kicker: string
    title: string
    accent: string
    subtitle: string
    types: {
      id: string
      name: string
      line: string
      image: string
      /** Describes what the photo actually shows */
      alt?: string
      href: string
    }[]
  }
  fittings: {
    kicker: string
    title: string
    accent: string
    subtitle: string
    items: {
      id: string
      title: string
      line: string
      image: string
      /** Describes what the photo actually shows */
      alt?: string
    }[]
    brandsKicker: string
    trustedBrands: string[]
  }
  projects: {
    kicker: string
    title: string
    accent: string
    subtitle: string
    filters: { id: string; label: string }[]
    items: {
      id: string
      title: string
      /** Short note on what makes the look */
      tag: string
      category: string
      image: string
      /** Describes what the photo actually shows */
      alt?: string
    }[]
  }
  testimonials: {
    kicker: string
    title: string
    accent: string
    subtitle: string
    items: {
      id: string
      name: string
      city: string
      quote: string
      avatar: string
      rating: number
    }[]
  }
  whyLoveUs: {
    kicker: string
    title: string
    accent: string
    subtitle: string
    points: {
      id: string
      title: string
      line: string
      icon: string
      image: string
      /** Describes what the photo actually shows */
      alt?: string
    }[]
    footnote: {
      text: string
      label: string
      href: string
    }
  }
  finalCta: {
    kicker: string
    title: string
    accent: string
    subtitle: string
    formTitle: string
    formNote: string
    primaryBtn: string
  }
}

export const HOME_CONTENT: HomeContent = {
  hero: {
    eyebrow: "Modular kitchens & wardrobes · Raipur",
    title: "Beautiful kitchens,",
    accent: "made just for you.",
    subtitle: "Designed around your family, crafted with machine precision in our Raipur factory, and fitted seamlessly in your home.",
    primaryCta: { label: "Explore The Collections", href: "#explore-designs" },
    secondaryCta: { label: "Curate Your Space", href: "#consultation" },
  },

  trustStrip: [
    { title: "Bespoke Design", subtitle: "Tailored to your family's routine & space", icon: "Compass" },
    { title: "Curated Finishes", subtitle: "Anti-scratch, moisture & heat resistant textures", icon: "Sparkles" },
    { title: "Machine Precision", subtitle: "Factory-cut for tight, accurate joints", icon: "Layers" },
    { title: "Dedicated Care", subtitle: "Direct studio guidance from measurement to handover", icon: "ShieldCheck" },
  ],

  exploreDesigns: {
    kicker: "What we make",
    title: "One team for",
    accent: "your whole home",
    subtitle: "Kitchens, wardrobes, dressing rooms and living room units — all designed to match.",
    cards: [
      {
        id: "kitchens",
        title: "Modular Kitchens",
        badge: "Custom layouts & styles",
        description: "Plenty of storage, easy to clean and a joy to cook in.",
        href: "/kitchens",
        image: "/img/kitchen-island-real.jpg",
      },
      {
        id: "wardrobes",
        title: "Wardrobes",
        badge: "Sliding & swing doors",
        description: "Room for every outfit, with doors that close softly.",
        href: "/wardrobes",
        image: "/img/wardrobe-bespoke-real.jpg",
        alt: "Floor-to-ceiling wardrobe with white framed glass doors and long brass handles",
      },
      {
        id: "closets",
        title: "Walk-in Closets",
        badge: "Your own dressing room",
        description: "Open shelves, soft lights and a place for everything.",
        href: "/walk-in-closets",
        image: "/img/walk-in-closet-luxury.jpg",
        alt: "Walk-in closet with lit glass-front wardrobes and a marble-topped island in the middle",
      },
      {
        id: "living-bar",
        title: "Bar & TV Units",
        badge: "For your living room",
        description: "Stylish units for movie nights and weekend guests.",
        href: "/collections",
        image: "/img/bar-unit-luxury.jpg",
        alt: "Arched bar unit with lit bottle shelves, a wine rack and drawers between two gold columns",
      },
    ],
  },

  collections: {
    kicker: "Kitchen layouts",
    title: "Pick the shape that",
    accent: "fits your home",
    subtitle: "Not sure which one is right? Tap a layout to see more — we'll help you choose.",
    layouts: [
      {
        id: "l-shape",
        name: "L-Shaped",
        line: "Uses two walls. Great for corners and most Indian homes.",
        tag: "Most popular",
        image: "/img/collections/kitchen-l-shaped-white.jpg",
        alt: "L-shaped kitchen with white gloss cabinets along two walls and a steel range cooker",
        href: "/kitchens#l-shape",
      },
      {
        id: "u-shape",
        name: "U-Shaped",
        line: "Storage on three sides. Perfect for big families who cook a lot.",
        tag: "Most storage",
        image: "/img/kitchen-contemporary-real.jpg",
        alt: "U-shaped kitchen with cabinets on three walls, white framed doors and lit tall glass units",
        href: "/kitchens#u-shape",
      },
      {
        id: "straight",
        name: "Straight",
        line: "Everything along one wall. Simple, neat and space-saving.",
        tag: "Small homes",
        image: "/img/collections/kitchen-straight-matte-blue.jpg",
        href: "/kitchens#straight",
      },
      {
        id: "island",
        name: "Island",
        line: "A counter in the middle to cook, chat and eat together.",
        tag: "Big & open",
        image: "/img/kitchen-island-real.jpg",
        alt: "Island kitchen with a curved two-level island, bar stools and a lit arch behind",
        href: "/kitchens#island",
      },
      {
        id: "parallel",
        name: "Parallel",
        line: "Two counters facing each other. Quick and easy to cook in.",
        tag: "Chef's favourite",
        image: "/img/collections/kitchen-parallel-peach.jpg",
        alt: "Parallel kitchen with two facing runs of peach cabinets and a window at the far end",
        href: "/kitchens#parallel",
      },
      {
        id: "open-kitchen",
        name: "Open Kitchen",
        line: "Opens into your living room, so you're never cut off from family.",
        tag: "Modern living",
        image: "/img/collections/kitchen-open-plan-living.jpg",
        alt: "Open kitchen with wood cabinets that flows into a dining table and the living room sofas",
        href: "/kitchens#open",
      },
    ],
  },

  uniqueKitchens: {
    kicker: "Made for your life",
    title: "A kitchen for",
    accent: "every family",
    subtitle: "Big home or small, any budget — we design around the way you live.",
    cards: [
      {
        id: "small-homes",
        title: "For Small Homes",
        line: "Smart storage that makes a small kitchen feel big.",
        image: "/img/kitchen-small-spaces.jpg",
        alt: "Compact L-shaped kitchen with a tall pull-out pantry open beside the oven",
        tag: "Small spaces",
      },
      {
        id: "luxury-homes",
        title: "For Big Homes",
        line: "Rich finishes and soft lighting that feel like a luxury hotel.",
        image: "/img/project-shankar-nagar.jpg",
        alt: "Large walnut kitchen with a stone island, four bar stools and warm cove lighting",
        tag: "Luxury",
      },
      {
        id: "budget-homes",
        title: "Beautiful on a Budget",
        line: "The premium look you want, at a price that works for you.",
        image: "/img/collections/kitchen-wood-white.jpg",
        alt: "Simple kitchen with white wall cabinets, a wood-look worktop and backsplash and a steel sink",
        tag: "Best value",
      },
      {
        id: "indian-cooking",
        title: "Made for Indian Cooking",
        line: "Tough surfaces and deep drawers for daily tadka and masala.",
        image: "/img/kitchen-rasoi-special.jpg",
        alt: "Kitchen with a granite worktop, gas hob and spice pull-outs open below",
        tag: "Daily cooking",
      },
      {
        id: "open-airy",
        title: "Open & Airy",
        line: "Light colours and open shelves that feel calm and fresh.",
        image: "/img/hero-kitchen.jpg",
        alt: "Bright kitchen with cream cabinets, open shelves and tall windows onto a garden",
        tag: "Calm & bright",
      },
      {
        id: "smart-storage",
        title: "Smart Storage",
        line: "A place for everything, so your counters stay clear.",
        image: "/img/collections/kitchen-drawer-organiser.jpg",
        alt: "Open kitchen drawer with a cutlery organiser and a knife insert",
        tag: "Clutter-proof",
      },
    ],
  },

  process: {
    kicker: "How it works",
    title: "From initial sketch to your living space",
    subtitle: "A smooth, transparent journey from first sketch to handover.",
    steps: [
      {
        num: "01",
        title: "Talk to us",
        line: "Tell us what you dream of.",
        desc: "We visit your home, measure your space and learn how your family cooks and lives.",
      },
      {
        num: "02",
        title: "See it in 3D",
        line: "Know exactly how it will look.",
        desc: "We show you your kitchen in photorealistic 3D, select physical material swatches, and finalize every detail.",
      },
      {
        num: "03",
        title: "Start cooking",
        line: "Swift, seamless fitting.",
        desc: "Our master fitting team installs everything cleanly at your home — precisely aligned, tidy and move-in ready.",
      },
    ],
    cta: "Reserve Your Design Session",
  },

  styles: {
    kicker: "Kitchen styles",
    title: "Find the look that",
    accent: "feels like you",
    subtitle: "Looks our families love. Tap the one you like and we'll make it yours.",
    showMore: "Show all styles",
    showLess: "Show fewer styles",
  },

  finishes: {
    kicker: "Colours & finishes",
    title: "Finishes you'll",
    accent: "love to touch",
    subtitle: "From velvety soft matte to mirror glass — an endless palette of tactile textures. Tap one to explore.",
    benefits: [
      "Wipes clean effortlessly with a soft damp cloth",
      "Resistant to high heat, spice stains, and daily cooking steam",
      "Available in tailored colors and tones to complement your home",
    ],
    swatches: [
      {
        id: "satin",
        name: "Soft Matte",
        line: "Smooth and velvety Italian super-matte finish. Completely fingerprint-resistant and calm under natural daylight.",
        colorHint: "#EDE8E1",
        tag: "Most loved",
        image: "/img/kitchen-contemporary-real.jpg",
        finishDetail: "Italian PU Spray Lacquer · Zero-Gloss",
      },
      {
        id: "laminate",
        name: "Easy-Care Laminate",
        line: "Tough, high-pressure textured laminate. Exceptional scratch resistance and easy wipe-down maintenance.",
        colorHint: "#C2B6A6",
        tag: "Hard-wearing",
        image: "/img/collections/kitchen-wood-white.jpg",
        finishDetail: "High-Pressure Laminate · Scratch Resistant",
      },
      {
        id: "acrylic",
        name: "High Gloss",
        line: "Glass-like optical acrylic with crystal reflections that expand the visual depth of your room.",
        colorHint: "#1E293B",
        tag: "Ultra reflective",
        image: "/img/kitchen-detail-real.jpg",
        finishDetail: "Optical Acrylic · UV Resistant",
      },
      {
        id: "glass",
        name: "Smoked Glass",
        line: "Tinted tempered glass shutters with integrated warm backlighting to display fine dinnerware and glassware.",
        colorHint: "#4B443B",
        tag: "Display & bar",
        image: "/img/bar-unit-luxury.jpg",
        finishDetail: "Fluted & Smoked Toughened Glass",
      },
      {
        id: "membrane",
        name: "Classic Carved",
        line: "Seamless vacuum-pressed membrane over 3D routed grooves, creating timeless neo-classical profiles.",
        colorHint: "#D4C7B5",
        tag: "Timeless profile",
        image: "/img/kitchen-style-classic.jpg",
        finishDetail: "Vacuum Wrapped · Seamless Edges",
      },
      {
        id: "stone",
        name: "Stone Look & Quartz",
        line: "Seamless composite stone and quartz finishes that withstand sizzling pots, stains, and daily chopping.",
        colorHint: "#7E7468",
        tag: "Heat & stain proof",
        image: "/img/kitchen-island-real.jpg",
        finishDetail: "Engineered Quartz · Non-Porous",
      },
      {
        id: "metal",
        name: "Metallic Accents",
        line: "Brushed champagne gold, bronze, and anodised metallic profiles for subtle, architectural warmth.",
        colorHint: "#B8923A",
        tag: "Rich champagne gold",
        image: "/img/hardware-fittings-luxury.jpg",
        finishDetail: "Anodised Aluminium · PVD Coated",
      },
      {
        id: "steel",
        name: "Stainless Steel SS 304",
        line: "Surgical-grade rust-proof SS 304 stainless steel carcass and internal wirework, impervious to water.",
        colorHint: "#94A3B8",
        tag: "Rust-proof & hygienic",
        image: "/img/why-ss304-basket.jpg",
        finishDetail: "IS 304 Food-Grade Steel",
      },
    ],
  },

  wardrobes: {
    kicker: "Wardrobes & closets",
    title: "A place for",
    accent: "everything you own",
    subtitle: "Wardrobes that fit your room perfectly — wall to wall, floor to ceiling.",
    types: [
      {
        id: "sliding",
        name: "Sliding Wardrobes",
        line: "Doors slide sideways smoothly, maximizing floor space in any room.",
        image: "/img/wardrobe-bespoke-real.jpg",
        href: "/wardrobes",
      },
      {
        id: "hinged",
        name: "Swing-Door Wardrobes",
        line: "Doors open wide with architectural tall handles, giving you a full view at once.",
        image: "/img/collections/wardrobe-white-tall-handles.jpg",
        href: "/wardrobes",
      },
      {
        id: "walk-in",
        name: "Walk-in Closets",
        line: "Your own dedicated dressing room, with integrated lighting, jewelry trays and open displays.",
        image: "/img/walk-in-closet-luxury.jpg",
        href: "/walk-in-closets",
      },
    ],
  },

  fittings: {
    kicker: "The little details",
    title: "Small things that",
    accent: "make life easier",
    subtitle: "Drawers that close quietly, doors that lift up, and corners you can actually reach.",
    items: [
      {
        id: "drawers",
        title: "Soft-Close Drawers",
        line: "No more banging. Drawers close gently, even when full of pots.",
        image: "/img/collections/kitchen-soft-close-drawers.jpg",
        alt: "White kitchen drawers pulled open on full-extension runners",
      },
      {
        id: "lift-up",
        title: "Lift-Up Doors",
        line: "Top cabinets open upward and stay open. No bumping your head.",
        image: "/img/hardware-fittings-luxury.jpg",
        alt: "Wall cabinet door lifted up and held open by a lift-up fitting",
      },
      {
        id: "magic-corner",
        title: "Corner Pull-Outs",
        line: "Corner shelves slide out, so nothing gets lost at the back.",
        image: "/img/collections/kitchen-corner-pull-out.jpg",
        alt: "Hand pulling a curved corner shelf out of a kitchen base cabinet",
      },
      {
        id: "mirror",
        title: "Pull-Out Mirror",
        line: "A full-length mirror that slides out of your wardrobe.",
        image: "/img/collections/dressing-room-full-mirror.jpg",
        alt: "Dressing room with a tall full-length mirror panel beside the storage units",
      },
    ],
    brandsKicker: "Fittings from brands you can trust",
    trustedBrands: ["Blum", "Häfele", "Hettich", "Salice", "Ebco"],
  },

  projects: {
    kicker: "Completed residences",
    title: "Homes we've",
    accent: "made beautiful",
    subtitle: "Real bespoke kitchens and wardrobes designed and fitted for residences across Raipur and Central India.",
    filters: [
      { id: "all", label: "All" },
      { id: "kitchen", label: "Kitchens" },
      { id: "wardrobe", label: "Wardrobes" },
      { id: "closet", label: "Closets" },
      { id: "living", label: "Living Room" },
    ],
    items: [
      { id: "proj-1", title: "Island Kitchen", tag: "Curved island and lit arch", category: "kitchen", image: "/img/kitchen-island-real.jpg", alt: "Island kitchen with a curved two-level island, bar stools and a lit arch" },
      { id: "proj-2", title: "Floor-to-Ceiling Glass-Door Wardrobe", tag: "Framed glass and brass handles", category: "wardrobe", image: "/img/wardrobe-bespoke-real.jpg", alt: "Floor-to-ceiling wardrobe with white framed glass doors and long brass handles" },
      { id: "proj-3", title: "Walk-in Closet with Glass Doors", tag: "Lit cabinets and a centre island", category: "closet", image: "/img/walk-in-closet-luxury.jpg", alt: "Walk-in closet with lit glass-front wardrobes and a marble-topped island" },
      { id: "proj-4", title: "Glowing Bar Unit", tag: "Lit shelves and a wine rack", category: "living", image: "/img/bar-unit-luxury.jpg", alt: "Arched bar unit with lit bottle shelves and a wine rack between two gold columns" },
      { id: "proj-5", title: "L-Shaped Kitchen with Island", tag: "Wood grain with tall oven units", category: "kitchen", image: "/img/kitchen-layout-real.jpg", alt: "L-shaped kitchen with wood-grain base units, tall oven units and a white island" },
      { id: "proj-6", title: "TV Unit with Wood Panels", tag: "Oak panels over a floating unit", category: "living", image: "/img/collections/tv-unit-white-oak.jpg", alt: "Wall-mounted TV on oak wood panels above a floating white TV unit" },
    ],
  },

  testimonials: {
    kicker: "Happy families",
    title: "In their",
    accent: "own words",
    subtitle: "Real words from families who trusted us with their homes.",
    // Reviews from the live site (brief/content-inventory.md §6). Quotes are verbatim excerpts, trimmed only to drop numeric claims. Do not reword them.
    items: [
      {
        id: "t-1",
        name: "Anuska Hormaz",
        city: "New homeowner",
        quote: "We approached EBONY with zero experience. Our designer was very patient throughout. They installed the kitchen smoothly, and post-installation service is commendable.",
        avatar: "AH",
        rating: 5,
      },
      {
        id: "t-2",
        name: "Ramesh Goradia",
        city: "Repeat client, Pune",
        quote: "Because of the impeccable quality and design, we chose EBONY for our new home. Their products and services are worth every penny.",
        avatar: "RG",
        rating: 5,
      },
      {
        id: "t-3",
        name: "C.L. Sandesh",
        city: "Homeowner, Bangalore",
        quote: "I had hired another carpenter with the same products, but the finishing and accuracy EBONY provides are unmatchable. Their products' quality and installation services were beyond expectation.",
        avatar: "CS",
        rating: 5,
      },
      {
        id: "t-4",
        name: "Mr. Kanyalal",
        city: "Client, Delhi",
        quote: "In one word — Excellent! The entire team is very humble and highly responsive. The designs and quality they offer are marvellous. I'm highly satisfied with EBONY's product design, quality, and services.",
        avatar: "MK",
        rating: 5,
      },
      {
        id: "t-5",
        name: "Rupali Rach",
        city: "Interior enthusiast",
        quote: "While renovating our kitchen, we searched many places, but EBONY's quality seemed far superior. The finishes are something we hadn't imagined — very user-friendly and elegant.",
        avatar: "RR",
        rating: 5,
      },
      {
        id: "t-6",
        name: "Manoj Mandre",
        city: "Homeowner, Mumbai",
        quote: "Conceptualization and implementation of a modular kitchen with high-quality material was daunting. EBONY understood the needs, conceptualised the design, and did smart engineering. The team has been rock-solid throughout the journey.",
        avatar: "MM",
        rating: 5,
      },
    ],
  },

  whyLoveUs: {
    kicker: "Why Ebony",
    title: "Why families",
    accent: "choose us",
    subtitle: "Simple promises we keep in every home.",
    points: [
      {
        id: "lifetime-ss304",
        title: "Rust-Proof SS 304 Guarantee",
        line: "Every SS 304 stainless steel basket and wet-zone fitting is backed by our rust-proof promise.",
        icon: "ShieldCheck",
        image: "/img/collections/kitchen-steel-wire-baskets.jpg",
        alt: "Stainless steel wire basket pulled out of a kitchen base cabinet",
      },
      {
        id: "warranty",
        title: "Calibrated Build Quality",
        line: "Multi-point precision checks and certified marine-grade joinery engineered to endure everyday Indian living.",
        icon: "Award",
        image: "/img/craftsmanship-detail.jpg",
        alt: "Carpenter's hands chiselling a wooden joint at a workbench",
      },
      {
        id: "materials",
        title: "Material Quality",
        line: "Waterproof plywood, branded hardware and SS 304 steel. You see every sample first.",
        icon: "Layers",
        image: "/img/core-materials-luxury.jpg",
        alt: "Samples of waterproof plywood, moisture-resistant board and stainless steel on a table",
      },
      {
        id: "after-sales",
        title: "After-Sales Support",
        line: "A hinge to adjust or a drawer to fix later? Call us and our team comes back to help.",
        icon: "Wrench",
        image: "/img/why-after-sales.jpg",
        alt: "Technician adjusting the hinge of a kitchen wall cabinet door",
      },
      {
        id: "delivery",
        title: "No Mess at Home",
        line: "Everything is made in our factory, so fitting is quick and clean, with almost no dust.",
        icon: "Clock",
        image: "/img/process-engineering.jpg",
        alt: "Clean factory floor with a CNC machine cutting cabinet panels",
      },
      {
        id: "pricing",
        title: "Clear, Honest Pricing",
        line: "You get transparent, itemized investment estimates upfront. No hidden costs, no surprises.",
        icon: "BadgeCheck",
        image: "/img/quote-review-at-home.jpg",
        alt: "Fitter going through a written quote with a homeowner at her kitchen table",
      },
      {
        id: "visit",
        title: "Bespoke On-Site Consultation",
        line: "We visit your home, measure every wall and curate the design in immersive 3D.",
        icon: "Ruler",
        image: "/img/designer-home-consultation.jpg",
        alt: "Designer showing plans to a homeowner on the sofa in his living room",
      },
    ],
    footnote: {
      text: "We use waterproof plywood, strong boards and rust-proof steel where it matters most.",
      label: "Explore Material & Finish Standards",
      href: "/finishes",
    },
  },

  finalCta: {
    kicker: "Private Design Session",
    title: "Let's design your",
    accent: "dream space",
    subtitle: "Share your floor plan or ideas. We'll plan an exclusive studio consultation at a time that suits you.",
    formTitle: "Craft Your Dream Space",
    formNote: "Just a few details to get started. No spam, ever.",
    primaryBtn: "Bring Your Vision to Life",
  },
}
