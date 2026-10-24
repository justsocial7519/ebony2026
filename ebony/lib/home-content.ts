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
  trustStrip: { title: string; line: string }[]
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
      /** Main photo first; the next two show as tappable thumbnails. Each must genuinely show this finish. */
      photos: { src: string; alt: string }[]
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
    subtitle: "Designed around your family, made in our own factory, and fitted cleanly in your home by our own team.",
    primaryCta: { label: "Explore the Collection", href: "#explore-designs" },
    secondaryCta: { label: "Invite a Designer Home", href: "#consultation" },
  },

  trustStrip: [
    { title: "Made in our own factory", line: "Every cabinet is cut and finished in Raipur" },
    { title: "Finishes you can touch first", line: "See and feel each sample before you choose" },
    { title: "Fitted by our own team", line: "Clean, careful work with almost no dust" },
    { title: "Lifetime warranty on SS 304", line: "On every stainless steel basket we fit" },
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
        badge: "Layouts for every home",
        description: "Plenty of storage, easy to clean and a joy to cook in.",
        href: "/kitchens",
        image: "/img/modular-kitchen-showcase.jpg",
        alt: "Kitchen with a white island, wood-grain cabinets and lit open shelves under a skylight",
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
        href: "/collections#tv-bar",
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
        alt: "Straight kitchen along one wall with matte teal cabinets, built-in ovens and a marble backsplash",
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
    title: "Your new kitchen, step by step",
    subtitle: "Simple and easy, from the first chat to the day you start cooking.",
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
        desc: "We show you your kitchen in 3D first, then make it in our own factory.",
      },
      {
        num: "03",
        title: "Start cooking",
        line: "Fitted cleanly by our own team.",
        desc: "Our team fits everything cleanly at your home — no dust, no mess.",
      },
    ],
    cta: "See It in 3D First",
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
    subtitle: "From soft matte to mirror shine, with plenty of options. Tap one to learn more.",
    benefits: [
      "Wipes clean with a damp cloth",
      "Handles heat and steam from daily cooking",
      "Comes in many shades to match your home",
    ],
    swatches: [
      {
        id: "satin",
        name: "Soft Matte",
        line: "Smooth and velvety. Hides fingerprints beautifully.",
        colorHint: "#EDE8E1",
        tag: "Most loved",
        photos: [
          { src: "/img/collections/kitchen-corner-scandi-blue.jpg", alt: "Corner kitchen with flat matte blue cabinets and a white marble backsplash" },
          { src: "/img/kitchen-garden-green.jpg", alt: "Galley kitchen with sage green matte doors and brass handles" },
          { src: "/img/collections/kitchen-charcoal-designer.jpg", alt: "Handleless wall cabinets in matte blush, olive, orange and grey over charcoal base units" },
        ],
      },
      {
        id: "laminate",
        name: "Easy-Care Laminate",
        line: "Tough, scratch-resistant and easy to wipe clean.",
        colorHint: "#C2B6A6",
        tag: "Hard-wearing",
        photos: [
          { src: "/img/finishes/laminate-walnut-kitchen.jpg", alt: "Kitchen with walnut wood-grain cabinet doors around a stainless steel niche" },
          { src: "/img/finishes/laminate-woodgrain-drawers.jpg", alt: "Close view of wood-grain drawer fronts with slim black handles" },
          { src: "/img/collections/kitchen-green-colour.jpg", alt: "Light wood-grain kitchen cabinets and island against a green wall" },
        ],
      },
      {
        id: "acrylic",
        name: "High Gloss",
        line: "A mirror-like shine that makes rooms feel bigger.",
        colorHint: "#1E293B",
        tag: "Shiny",
        photos: [
          { src: "/img/finishes/gloss-red-kitchen.jpg", alt: "L-shaped kitchen with shiny red gloss doors reflecting the room" },
          { src: "/img/collections/kitchen-l-shaped-white.jpg", alt: "White high gloss kitchen cabinets with a steel range cooker" },
          { src: "/img/finishes/gloss-cream-drawers.jpg", alt: "Close view of cream high gloss drawers catching the light" },
        ],
      },
      {
        id: "glass",
        name: "Glass Doors",
        line: "Show off your best crockery and keep out the dust.",
        colorHint: "#4B443B",
        tag: "Display",
        photos: [
          { src: "/img/kitchen-glass-glow.jpg", alt: "Dark kitchen with lit glass-front wall cabinets full of glassware" },
          { src: "/img/collections/kitchen-island-luxury-lit.jpg", alt: "Kitchen island with framed fluted glass doors" },
          { src: "/img/wardrobe-detail-shot.jpg", alt: "Wardrobe wall with lit glass doors in slim dark frames" },
        ],
      },
      {
        id: "membrane",
        name: "Classic Carved",
        line: "Soft curves and grooves for a traditional feel.",
        colorHint: "#D4C7B5",
        tag: "Traditional",
        photos: [
          { src: "/img/collections/kitchen-island-warm-wood.jpg", alt: "White kitchen with raised-panel carved doors and a wooden island" },
          { src: "/img/kitchen-comfort-reach.jpg", alt: "White framed shaker cabinet doors above a marble backsplash" },
          { src: "/img/collections/wardrobe-sliding-grey.jpg", alt: "Grey wardrobe with framed shaker-style sliding doors" },
        ],
      },
      {
        id: "stone",
        name: "Stone Look",
        line: "Looks like marble, and handles hot pans and stains.",
        colorHint: "#7E7468",
        tag: "Strong",
        photos: [
          { src: "/img/finishes/stone-marble-drawer-fronts.jpg", alt: "Drawer fronts in a brown marble finish, one pulled open" },
          { src: "/img/kitchen-island-luxury.jpg", alt: "White marble waterfall island in front of dark wood tall units" },
          { src: "/img/kitchen-curves-arches.jpg", alt: "Travertine stone worktop and backsplash under arched niches" },
        ],
      },
      {
        id: "metal",
        name: "Metal Shine",
        line: "Gold, bronze or silver touches for a rich look.",
        colorHint: "#B8923A",
        tag: "Rich",
        photos: [
          { src: "/img/finishes/metal-copper-kitchen.jpg", alt: "Kitchen with copper metal tall cabinets, a copper sink and copper splashback" },
          { src: "/img/finishes/metal-gold-wall-cabinets.jpg", alt: "Grey framed kitchen with gold metallic wall cabinet doors" },
          { src: "/img/finishes/metal-bronze-doors.jpg", alt: "Close view of bronze metallic doors with ribbed bronze handles" },
        ],
      },
      {
        id: "steel",
        name: "Stainless Steel",
        line: "Will not rust, so it is perfect near the sink.",
        colorHint: "#94A3B8",
        tag: "Rust-proof",
        photos: [
          { src: "/img/finishes/steel-cabinets-worktop.jpg", alt: "Brushed stainless steel cabinets and worktop with a built-in hob" },
          { src: "/img/finishes/steel-island.jpg", alt: "Kitchen island clad in brushed stainless steel" },
          { src: "/img/chefs/chefs-ss-tables.jpg", alt: "Long stainless steel worktables with drawers in a working kitchen" },
        ],
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
        line: "Doors slide sideways, so they never bump into your bed.",
        image: "/img/collections/wardrobe-sliding-ivory.jpg",
        alt: "Ivory sliding wardrobe with a mirrored centre door, partly slid open",
        href: "/wardrobes",
      },
      {
        id: "hinged",
        name: "Swing-Door Wardrobes",
        line: "Doors open wide, so you can see everything at once.",
        image: "/img/collections/wardrobe-hinged-open.jpg",
        alt: "White built-in wardrobe with hinged doors swung open onto lit hanging space and drawers",
        href: "/wardrobes",
      },
      {
        id: "walk-in",
        name: "Walk-in Closets",
        line: "Your own dressing room, with soft lights and open shelves.",
        image: "/img/wardrobe-card.jpg",
        alt: "Walk-in dressing room with dark fluted wardrobes, open hanging rails and lit shelves",
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
    kicker: "Design ideas",
    title: "Looks we",
    accent: "love to make",
    subtitle: "Ideas for kitchens, wardrobes and living rooms. Pick one you like and we make it to fit your home.",
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
        quote: "We approached EBONY with zero experience. Our designer was very patient throughout.",
        avatar: "AH",
        rating: 5,
      },
      {
        id: "t-2",
        name: "Ramesh Goradia",
        city: "Repeat client, Pune",
        quote: "We haven't had a single service issue. Because of the quality and design, we came back for our new home. Their products and services are worth every penny.",
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
        title: "Lifetime Warranty on SS 304",
        line: "Every SS 304 stainless steel basket and fitting we fit comes with a lifetime warranty.",
        icon: "ShieldCheck",
        image: "/img/collections/kitchen-steel-wire-baskets.jpg",
        alt: "Stainless steel wire basket pulled out of a kitchen base cabinet",
      },
      {
        id: "warranty",
        title: "Warranty on Woodwork",
        line: "Strong materials and careful checks, backed by a warranty on all the woodwork we make.",
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
        line: "You get a clear price upfront. No hidden costs, no surprises.",
        icon: "BadgeCheck",
        image: "/img/quote-review-at-home.jpg",
        alt: "Fitter going through a written quote with a homeowner at her kitchen table",
      },
      {
        id: "visit",
        title: "Home Design Visit",
        line: "We visit your home, measure every wall and show you the design in 3D.",
        icon: "Ruler",
        image: "/img/designer-home-consultation.jpg",
        alt: "Designer showing plans to a homeowner on the sofa in his living room",
      },
    ],
    footnote: {
      text: "We use waterproof plywood, strong boards and rust-proof steel where it matters most.",
      label: "See our materials",
      href: "/finishes",
    },
  },

  finalCta: {
    kicker: "Home design visit",
    title: "Let's design your",
    accent: "dream kitchen",
    subtitle: "Tell us a little about your home and we will ring you to plan your space, at a time that suits you.",
    formTitle: "Reserve your design visit",
    formNote: "Just a few details. No pushy sales calls.",
    primaryBtn: "Reserve My Design Visit",
  },
}
