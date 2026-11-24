// EBONY Content — Architectural Luxury Modular Interiors
// All facts, addresses, phone numbers, and technical specifications are verified.
// No invented facts, awards, or fake reviews.

export const BRAND = {
  name: "EBONY",
  legalName: "EBONY Modular Kulture",
  tagline: "Every space begins with a thought.",
  subtitle: "German Engineering. Bespoke Indian Living.",
  location: "Sapphire Green, Raipur, Chhattisgarh",
  address: "Sapphire Green, Ring Road, 03, Vidhan Sabha Rd, Chhattisgarh 492014",
  phone: "+91 79742 09352",
  phoneRaw: "+917974209352",
  email: "info@ebony.co.in",
  hours: "Monday – Saturday: 10:30 AM – 8:00 PM",
  googleMapsUrl: "https://maps.google.com/?q=Sapphire+Green+Ring+Road+03+Vidhan+Sabha+Rd+Chhattisgarh+492014",
  copyright: `© ${new Date().getFullYear()} EBONY Modular Kulture. All rights reserved.`,
} as const

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Collections",
    href: "/collections",
    children: [
      { label: "Modular Kitchen", href: "/kitchens", desc: "Metallic surfaces, island, pantry, L & parallel layouts" },
      { label: "Walk In Closet", href: "/walk-in-closets", desc: "Wardrobes with island, pole systems & glass profile suites" },
      { label: "Loose Furnitures", href: "/collections#loose-furniture", desc: "Sculptural dining tables, bespoke chairs & custom accents" },
      { label: "Commercial Furnitures", href: "/collections#commercial", desc: "Executive lounge bars & luxury commercial joinery" },
      { label: "Bar Unit", href: "/collections#tv-bar", desc: "Exotic swirl marble bar counters & architectural TV media walls" },
      { label: "Book Shelf", href: "/collections#book-shelf", desc: "Floor-to-ceiling libraries & fluted acoustic display shelving" },
    ],
  },
  { label: "Finishes", href: "/finishes" },
  { label: "Hardware", href: "/hardware" },
  { label: "Why Ebony", href: "/why-ebony" },
  { label: "Contact", href: "/contact" },
] as const

export const HERO = {
  kicker: "CRAFTING EXTRAORDINARY MODULAR INTERIORS",
  headingLine1: "German Engineering.",
  headingLine2: "Bespoke Indian Living.",
  subtitle:
    "India's benchmark for modular luxury, creating high-end kitchens and wardrobes with meticulous German precision.",
  primaryCta: { label: "Explore the Collection", href: "#explore-designs" },
  secondaryCta: { label: "Invite a Designer Home", href: "/contact" },
  lines: [
    { text: "Every space begins", color: "ebony" as const },
    { text: "with a thought.", color: "gold" as const },
  ],
  cta: "Invite a Designer Home",
} as const

export const CITIES = [
  "Raipur",
  "Bilaspur",
  "Bhilai",
  "Durg",
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Pune",
] as const

// Core collections for "What We Make"
export const WHAT_WE_MAKE = [
  {
    id: "modular-kitchen",
    title: "Modular Kitchen",
    subtitle: "Culinary Architecture",
    tag: "CULINARY SUITES",
    description:
      "Where culinary ergonomics meets understated luxury. Tailored metallic surfaces, travertine & green marble islands, pantry kitchens, and precision motion hardware.",
    image: "/img/kitchen-metallic-surface-brass.jpg",
    alt: "EBONY luxury metallic surface kitchen with curved brass island and illuminated vitrine cabinets",
    href: "/kitchens",
    stats: "Metallic Surfaces · Island & Pantry Kitchens",
  },
  {
    id: "walk-in-closet",
    title: "Walk In Closet",
    subtitle: "Haute Dressing Suites",
    tag: "DRESSING SUITES",
    description:
      "Floor-to-ceiling glass walk-in closets, pole wardrobe systems, island dressers, and fluted profile shutter suites with precision lighting.",
    image: "/img/wardrobe-with-island-suite.jpg",
    alt: "Luxury walk-in closet dressing suite with central fluted island and arched vanity mirror",
    href: "/walk-in-closets",
    stats: "Wardrobes with Island · Pole Systems",
  },
  {
    id: "loose-furnitures",
    title: "Loose Furnitures",
    subtitle: "Artisanal Millwork & Seating",
    tag: "BESPOKE ACCENTS",
    description:
      "Handcrafted sculptural dining tables, fluted pedestal stools, bespoke coffee tables, and tailored accent pieces designed to complement your architecture.",
    image: "/img/loose-furniture-dining.jpg",
    alt: "EBONY custom loose furniture fluted dining table and contemporary wooden seating",
    href: "/collections#loose-furniture",
    stats: "Solid Hardwoods · Sculptural Silhouettes",
  },
  {
    id: "commercial-furnitures",
    title: "Commercial Furnitures",
    subtitle: "Executive & Hospitality Spaces",
    tag: "HOSPITALITY & EXECUTIVE",
    description:
      "Sophisticated commercial furniture, executive lounge bars, curved reception counters, and conference millwork built with contract-grade durability.",
    image: "/img/commercial-furniture-lounge.jpg",
    alt: "EBONY luxury commercial executive lounge bar counter and bespoke joinery",
    href: "/collections#commercial",
    stats: "Commercial Grade · High-Traffic Refinement",
  },
  {
    id: "bar-unit",
    title: "Bar Unit",
    subtitle: "Entertainment & Lounges",
    tag: "ENTERTAINMENT & LIVING",
    description:
      "Exotic swirl marble bar counters, champagne brass backdrops, illuminated wine displays, and architectural TV media units with linear fireplaces.",
    image: "/img/bar-unit-exotic-marble.jpg",
    alt: "EBONY luxury exotic swirl marble bar counter with metallic illuminated storage",
    href: "/collections#tv-bar",
    stats: "Exotic Stone · Integrated Bars & TV Units",
  },
  {
    id: "book-shelf",
    title: "Book Shelf",
    subtitle: "Architectural Libraries",
    tag: "STUDY & MILLWORK",
    description:
      "Floor-to-ceiling modular book shelves, backlit library wall systems, fluted acoustic accents, and study joinery engineered for timeless collections.",
    image: "/img/wardrobe-fluted-profile-shutter.jpg",
    alt: "EBONY luxury architectural book shelf and fluted library display wall",
    href: "/collections#book-shelf",
    stats: "Modular Spans · Integrated Warm Illumination",
  },
] as const

// For backwards compatibility
export const COLLECTIONS = WHAT_WE_MAKE

// Kitchen Configurations
export const KITCHEN_CONFIGURATIONS = [
  {
    id: "island",
    name: "Island Kitchen",
    tag: "Focal Masterpiece",
    summary:
      "The definitive layout for open-concept architecture. Combines a central social workstation with expansive perimeter cabinetry.",
    bestFor: "Expansive villas, penthouses, and open-plan living-dining residences.",
    workTriangle: "Optimised all-round circulation with independent prep sink or induction hob.",
    storageCapacity: "Maximum — deep tandem pull-outs on every face of the island.",
    image: "/img/kitchen-metallic-surface-brass.jpg",
    alt: "Metallic surface kitchen with curved champagne brass island and breakfast bar",
    specs: ["Open-plan friendly", "Full surround access", "Integrated breakfast overhang"],
  },
  {
    id: "l-shape",
    name: "L-Shape Kitchen",
    tag: "Fluid Ergonomics",
    summary:
      "Two perpendicular walls creating an open, flexible cooking space. Flawlessly preserves corner utility with carousel hardware.",
    bestFor: "Small to medium floorplans, apartments, and open-corner architectural rooms.",
    workTriangle: "Natural unbroken triangle between refrigerator, sink, and cooking zone.",
    storageCapacity: "High — incorporates Magic Corner pull-out swivel trays.",
    image: "/img/kitchen-green-marble-island.jpg",
    alt: "Fluted walnut and green marble modular kitchen with seamless L-shape counter",
    specs: ["No dead corners with magic swivel trays", "Direct daylight integration", "Seamless dining connection"],
  },
  {
    id: "u-shape",
    name: "U-Shape Kitchen",
    tag: "Chef's Sanctuary",
    summary:
      "Three continuous walls of cabinetry and countertop creating the most comprehensive workspace for serious culinary passion.",
    bestFor: "Dedicated kitchen enclosures requiring maximum counter space and storage.",
    workTriangle: "Tightest and most efficient work triangle with minimal steps between zones.",
    storageCapacity: "Unrivaled — full runs of lower and upper cabinetry with tall larder.",
    image: "/img/kitchen-curved-travertine.jpg",
    alt: "U-shaped kitchen layout with curved travertine island and rich wood detailing",
    specs: ["Dual corner optimization", "Generous counter space", "Dedicated appliance garage"],
  },
  {
    id: "parallel",
    name: "Parallel / Galley",
    tag: "Professional Efficiency",
    summary:
      "Two facing parallel counters preferred by culinary professionals. Segregates wet prep on one side and dry cooking on the other.",
    bestFor: "Longer rectangular rooms, urban residences, and high-efficiency workflow.",
    workTriangle: "Linear separation: cooking/hob on one wall, washing/cleaning on opposite wall.",
    storageCapacity: "Exceptional linear capacity without complex corner mechanisms.",
    image: "/img/kitchen-island-travertine-stools.jpg",
    alt: "Parallel kitchen layout with monolithic travertine island and fluted bar stools",
    specs: ["Comfortable corridor layout", "Clean wet & dry zoning", "High-volume prep zones"],
  },
  {
    id: "straight",
    name: "Straight Line & Pantry Kitchen",
    tag: "Minimalist Geometry",
    summary:
      "All cooking, washing, and cold storage arranged seamlessly along a single architectural wall with tall grocery pull-outs for uncluttered visual purity.",
    bestFor: "Studio penthouses, loft apartments, and secondary pantry kitchens.",
    workTriangle: "Linear sequential flow: Refrigerator → Prep counter → Sink → Hob.",
    storageCapacity: "Pantry kitchen vertical efficiency using full-height overhead cabinets.",
    image: "/img/kitchen-pantry-crimson.jpg",
    alt: "Straight pantry kitchen along one wall with crimson lower cabinets, built-in ovens and tall grocery storage",
    specs: ["Minimalist footprint", "Concealed built-in appliances", "Perfect for long wall expanses"],
  },
] as const

// Kitchen Styles
export const KITCHEN_STYLES = [
  {
    id: "metallic-contemporary",
    title: "Metallic Surface & Contemporary",
    subtitle: "Curved Champagne Brass Islands",
    description:
      "Curved champagne brass metallic surfaces, illuminated glass vitrine wall cabinets, continuous Gola aluminum profiles, and clean linear silhouettes.",
    image: "/img/kitchen-metallic-surface-brass.jpg",
    palette: "Champagne Brass, Alabaster White, Calacatta Marble",
    features: ["Curved metallic island contours", "Illuminated glass vitrines", "Continuous Gola rail profiles"],
  },
  {
    id: "fluted-green-marble",
    title: "Fluted Walnut & Green Marble",
    subtitle: "Organic Dark Luxury",
    description:
      "Dark fluted timber island cabinetry, dramatic deep green veined marble worktop and backsplash, and sculptural gold ribbon lighting.",
    image: "/img/kitchen-green-marble-island.jpg",
    palette: "Dark Walnut, Emerald Veined Marble, Matte Brass",
    features: ["Fluted solid hardwood panelling", "Continuous bookmatched stone splashback", "Concealed warm cove LEDs"],
  },
  {
    id: "curved-travertine",
    title: "Curved Travertine & Stone",
    subtitle: "Sculptural Architectural Forms",
    description:
      "Sculpted fluted travertine island bases with integrated cantilevered wooden dining extensions and organic tactile textures.",
    image: "/img/kitchen-curved-travertine.jpg",
    palette: "Honed Travertine, Warm Oak, Satin Bronze",
    features: ["Curved stone island fluting", "Cantilevered wooden dining nook", "Custom sculptural chandeliers"],
  },
  {
    id: "pantry-minimalist",
    title: "Pantry Kitchen & Minimalist",
    subtitle: "Ergonomic Culinary Efficiency",
    description:
      "Crimson lower units, alabaster overheads, full-height grocery pull-outs, and integrated appliance towers engineered for daily living.",
    image: "/img/kitchen-pantry-crimson.jpg",
    palette: "Rich Crimson, Warm Muted Alabaster, Matte Black",
    features: ["Integrated grocery pantry pull-outs", "Appliance garage towers", "Zero-fingerprint lacquer fronts"],
  },
] as const

// Surface Finishes
export const SURFACE_FINISHES = [
  {
    id: "pu-lacquer",
    name: "PU (Polyurethane) Lacquer",
    category: "Lacquered Finishes",
    finishType: "Gloss & Deep Satin Matte",
    description:
      "Multi-coat Italian polyurethane spray lacquer applied in cleanrooms. A seamless face with no visible edges, silky tactile warmth and no yellowing.",
    features: ["Seamless all-round finish", "No edge-band lines", "Custom RAL/Pantone color matching"],
    durability: "High scratch & UV resistance",
    badge: "Signature Finish",
  },
  {
    id: "laminate",
    name: "High-Pressure Laminate",
    category: "Engineered Surfaces",
    finishType: "Matte, Woodgrain & Textured",
    description:
      "Anti-fingerprint and thermal-healing laminates bonded with PUR waterproof adhesives for extreme resilience against heat and moisture.",
    features: ["Thermal scratch healing", "Anti-fingerprint technology", "Authentic wood & stone decors"],
    durability: "Maximum impact & abrasion resistance",
    badge: "High Durability",
  },
  {
    id: "acrylic",
    name: "Acrylic (Matte & Gloss)",
    category: "High-Gloss & Super-Matte",
    finishType: "Ultra-Gloss & Velvet Matte",
    description:
      "Optical-grade acrylic sheets with glass-like gloss reflection or velvety soft-touch matte finish. No orange peel effect.",
    features: ["Glass-like mirror depth", "UV colorfast guarantee", "Laser edge-banded seamless joint"],
    durability: "High moisture & heat resistance",
    badge: "Contemporary Favorite",
  },
  {
    id: "glass",
    name: "Toughened & Fluted Glass",
    category: "Architectural Vitrines",
    finishType: "Smoked Bronze, Fluted, Lacquered Back",
    description:
      "Safety tempered glass mounted in ultra-slim anodised aluminium profiles. Creates dramatic transparency and displays lighted glassware.",
    features: ["Slim anodised profile", "Concealed pivot hinges", "Backlit reed and fluted patterns"],
    durability: "Moisture-proof & stain-proof",
    badge: "Display Luxury",
  },
  {
    id: "membrane",
    name: "Membrane (Thermofoil)",
    category: "3D Formed Profiles",
    finishType: "Matte & Woodgrain",
    description:
      "Vacuum-pressed PVC foil wrapped seamlessly around 3D routed CNC door faces. Ideal for intricate classical grooves with no visible edge joints.",
    features: ["Continuous 3D contour wrap", "No separate edge bands", "Moisture-sealed face"],
    durability: "Easy to clean & maintain",
    badge: "Classical Detail",
  },
  {
    id: "terulam",
    name: "Terulam / Sintered Stone",
    category: "Ultra-Compact Minerals",
    finishType: "Natural Textured Stone",
    description:
      "Ultra-thin sintered porcelain and mineral slabs bonded to lightweight honeycomb cores. Impervious to flames, blades, and stains.",
    features: ["Non-porous, stain-proof surface", "High direct heat tolerance", "Authentic Italian marble patterns"],
    durability: "Indestructible surface resilience",
    badge: "Ultra-Luxury",
  },
  {
    id: "metallic-shutters",
    name: "Metallic Anodised Shutters",
    category: "Architectural Metals",
    finishType: "Brushed Champagne, Titanium, Gold",
    description:
      "Precision metal-faced shutters with anodised and brushed micro-finishes. Adds architectural substance and refined metallic reflections.",
    features: ["Real brushed metallic surface", "Anti-fingerprint protective seal", "Matches brass & bronze hardware"],
    durability: "Wear and corrosion proof",
    badge: "Bespoke Accent",
  },
  {
    id: "ss304",
    name: "SS 304 Stainless Steel",
    category: "Commercial Hygiene Grade",
    finishType: "Hairline Brushed Stainless",
    description:
      "Food-grade 304 surgical stainless steel base carcasses and sink modules. No moisture absorption, termite-proof, built for a lifetime.",
    features: ["Anti-drumming acoustic dampers", "No termite or water decay", "Hospital-grade cleanability"],
    durability: "Lifetime structural integrity",
    badge: "Ultimate Wet-Zone Core",
  },
] as const

// Wardrobe Opening Systems
export const WARDROBE_SYSTEMS = [
  {
    id: "sliding",
    name: "Sliding Door Systems",
    tag: "Space-Saving Grandeur",
    headline: "Effortless Glide, Custom Heights",
    description:
      "Engineered with Italian top-hung or bottom-guided motion gear. Damped soft-close dampers gently catch and cushion each door on both open and close cycles.",
    benefits: [
      "No door swing encroachment — ideal for master suites with tighter bed clearance",
      "Custom-sized door leaves for grand panoramic visuals",
      "Integrated dust-barrier brush seals along all vertical overlap channels",
      "Available with smoked bronze glass, fluted acoustic timber, or lacquer finishes",
    ],
    image: "/img/walk-in-closet-luxury-dressing.jpg",
    alt: "Luxury walk-in closet with integrated shoe display and central ottoman bench",
  },
  {
    id: "hinged",
    name: "Profile Shutter & Hinged Systems",
    tag: "Full Unobstructed View",
    headline: "Wide-Angle Access with Precision Profile Shutters",
    description:
      "Equipped with Blum Clip-top Blumotion hinges built for years of daily use. Acoustic fluted profile shutters swing open to reveal illuminated shoe and wardrobe bays.",
    benefits: [
      "Simultaneous visibility across all wardrobe bays and accessory sections",
      "Interior door back mounts for vanity mirrors, tie holders, and belt hooks",
      "Fluted acoustic timber profile shutters or ultra-slim anodised aluminium vitrines",
      "Seamless integration with corner walk-in modules and drawer stacks",
    ],
    image: "/img/wardrobe-fluted-profile-shutter.jpg",
    alt: "Fluted profile shutter wardrobe opening to illuminated shoe and accessory shelving",
  },
] as const

// Walk-in Closets
export const WALK_IN_CLOSETS = [
  {
    id: "wardrobe-with-island",
    name: "Wardrobe with Island Suite",
    description:
      "Expansive luxury dark wood dressing suite featuring a sculptural fluted drawer island, arched full-height vanity mirror, and integrated ambient cove lighting.",
    image: "/img/wardrobe-with-island-suite.jpg",
    alt: "Luxury dark wood wardrobe dressing suite with central fluted island and arched vanity mirror",
  },
  {
    id: "pole-wardrobe",
    name: "Architectural Pole Wardrobe System",
    description:
      "Floor-to-ceiling modular black pole wardrobe system with backlit open garment hanging rails, glass-top jewelry island, and minimalist German architectural fittings.",
    image: "/img/wardrobe-pole-system.jpg",
    alt: "Floor-to-ceiling modular black pole wardrobe system with modular shelves and central island",
  },
  {
    id: "profile-shutter-glass",
    name: "Profile Shutter & Glass Walk-In Closet",
    description:
      "Slim anodised aluminium profile glass shutters and fluted acoustic timber accents opening to reveal vertical sensor illumination and custom shoe displays.",
    image: "/img/wardrobe-profile-shutter-glass.jpg",
    alt: "Glass walk-in closet with dark profile shutters and integrated vertical LED lighting",
  },
] as const

// Core Materials
export const CORE_MATERIALS = [
  {
    id: "marine-ply",
    name: "Marine Plywood (IS 710 BWP)",
    badge: "Waterproof Standard",
    description:
      "Boiling Water Proof grade plywood composed of selected hardwood veneers bonded with unextended phenol formaldehyde synthetic resin. Engineered to withstand prolonged boiling water without delamination.",
    idealZones: "Kitchen sink modules, base cabinets, and bathroom vanity carcass joinery.",
    density: "Dense hardwood veneers",
    warranty: "Termite & Borer Proof",
  },
  {
    id: "hdhmr",
    name: "HDHMR Engineered Board",
    badge: "High-Density Precision Core",
    description:
      "High Density High Moisture Resistance board engineered with eucalyptus hardwood fibers and special moisture-resistant bonding matrix. Its homogeneous core enables high-precision German CNC routing without fiber chipping.",
    idealZones: "Wardrobe shutters, routed classical profiles, dry overhead kitchen modules, and wall paneling.",
    density: "High-density fibre core",
    warranty: "Superior Screw Holding & Moisture Resistance",
  },
  {
    id: "ss304-core",
    name: "SS 304 Surgical Stainless Steel",
    badge: "Lifetime Indestructible Core",
    description:
      "Non-magnetic Grade 304 stainless steel fabricated with anti-drumming dampeners. No wood, no organic glue, completely immune to moisture, rot, pests, and fire.",
    idealZones: "High-moisture coastal homes, wet dishwashing zones, and under-sink hygiene areas.",
    density: "Solid stainless steel",
    warranty: "Lifetime Rust & Decay Guarantee",
  },
] as const

// Internal Fittings & Storage Solutions
export const INTERNAL_FITTINGS = [
  {
    name: "Soft-Close Drawer Systems",
    description: "Tandembox full-extension drawer runners with feather-light opening and integrated Blumotion damping.",
    brand: "Blum & Hettich",
  },
  {
    name: "Overhead Lift-Up Systems",
    description: "Aventos bi-fold and up-and-over mechanisms that stay in any desired position with no head obstruction.",
    brand: "Blum Aventos",
  },
  {
    name: "Pull-Out Rotating Mirrors",
    description: "Full-length swiveling dressing mirror that tucks away neatly into a slim wardrobe slot.",
    brand: "EBONY Bespoke",
    image: "/img/collections/dressing-room-full-mirror.jpg",
  },
  {
    name: "Blind Corner Carousels",
    description: "Ergonomic corner swivel trays that glide fully outside the cabinet for effortless access.",
    brand: "Häfele & Ebco",
  },
  {
    name: "Velvet Accessory & Jewelry Trays",
    description: "Custom dividers for watches, jewelry, ties, and sunglasses lined with anti-tarnish Italian velvet.",
    brand: "EBONY Craft",
  },
] as const

// Hardware Brand Partners (All verified spellings)
export const HARDWARE_BRANDS = [
  {
    name: "Blum",
    country: "Austria",
    specialty: "Aventos Lift Systems & Blumotion Hinges",
    description: "World leader in motion technology. Renowned for Aventos lift systems and smooth tandembox runners.",
  },
  {
    name: "Häfele",
    country: "Germany",
    specialty: "Architectural Hardware & LOOX LED Systems",
    description: "German heritage in precision sliding gears, corner units, and smart interior cabinet illumination.",
  },
  {
    name: "Hettich",
    country: "Germany",
    specialty: "InnoTech Drawers & Sensys Hinges",
    description: "Pioneering engineering with Sensys integrated soft-close hinges and multi-functional folding systems.",
  },
  {
    name: "Salice",
    country: "Italy",
    specialty: "Concealed Titanium & Air Miniature Hinges",
    description: "Italian design elegance with whisper-quiet damping and compact concealed hinge mechanisms.",
  },
  {
    name: "Ebco",
    country: "India",
    specialty: "Certified Modular Hardware & Organizers",
    description: "India's premier certified fittings manufacturer for high-durability pantries and wardrobe slides.",
  },
] as const

// Proof points for "Why EBONY"
export const WHY_EBONY = [
  {
    number: "01",
    title: "Factory & German CNC Precision",
    subtitle: "Precision Tolerances",
    description:
      "All cabinetry is cut, grooved, and edge-banded on automated German CNC machines in our dedicated manufacturing plant. No manual site sawing, no jagged edges, and flawless laser joinery.",
    image: "/img/craftsmanship-detail.jpg",
  },
  {
    number: "02",
    title: "Bespoke Customization Flexibility",
    subtitle: "Many Finishes & Custom Dimensions",
    description:
      "Unlike rigid modular brands with fixed box sizes, EBONY adapts every millimeter to your architectural floor plan. Choose from a wide range of finishes, custom ceiling-height joinery, and tailored internal organization.",
    image: "/img/core-materials-luxury.jpg",
  },
  {
    number: "03",
    title: "Clean Assembly & Precision Handover",
    subtitle: "Pre-Assembled & Low-Dust Handover",
    description:
      "Cabinets arrive pre-assembled and fully pre-fitted from the factory. Our certified installation crew completes on-site assembly cleanly with precision laser leveling and almost no carpentry dust.",
    image: "/img/process-engineering.jpg",
  },
  {
    number: "04",
    title: "Finish Quality & Final Audit",
    subtitle: "Warranty on Woodwork",
    description:
      "Every project undergoes an exhaustive quality sign-off before handover — inspecting drawer alignment, door gaps, seal integrity, and motion damping.",
    image: "/img/hardware-fittings-luxury.jpg",
  },
] as const

// Real Homeowner Testimonials
export const HOMEOWNER_TESTIMONIALS = [
  {
    name: "Anita Sharma",
    location: "VIP Road, Raipur",
    project: "Island Kitchen & Master Wardrobe",
    quote:
      "Excellent design sense and flawless execution. Our island kitchen looks stunning and the on-site installation was clean, quick and completely smooth.",
    rating: 5,
    avatar: "AS",
  },
  {
    name: "Rahul Verma",
    location: "Bilaspur Residence",
    project: "Full Home Modular Joinery",
    quote:
      "From 3D visualization to final hardware calibration, the EBONY team operated with absolute professionalism. The Blum fittings feel indestructible.",
    rating: 5,
    avatar: "RV",
  },
  {
    name: "Neha & Karan Agarwal",
    location: "Shankar Nagar, Raipur",
    project: "Penthouse Walk-In Suite & Living Unit",
    quote:
      "The smoked glass walk-in wardrobe transformed our bedroom into a hotel-style suite. Ebony's finish quality is on par with European luxury imports.",
    rating: 5,
    avatar: "NK",
  },
] as const

// Filterable Portfolio Projects
export const PROJECTS_GALLERY = [
  {
    id: "shankar-nagar-penthouse",
    category: "Modular Kitchen",
    categorySlug: "kitchen",
    title: "Penthouse Island with Quartzite Waterfall",
    location: "Shankar Nagar, Raipur",
    image: "/img/kitchen-island-real.jpg",
    description: "Calacatta gold quartz island, fluted oak under-counter cabinetry, Blum Aventos bi-fold lift-ups.",
    specs: ["Island Kitchen", "Matte Acrylic & Oak", "Blum Motion"],
  },
  {
    id: "vip-road-villa-wardrobe",
    category: "Wardrobes",
    categorySlug: "wardrobe",
    title: "Full-Height Sliding Wardrobe Suite",
    location: "VIP Road Villa, Raipur",
    image: "/img/wardrobe-bespoke-real.jpg",
    description: "Floor-to-ceiling sliding system with acoustic fluted profile and warm LED reveals.",
    specs: ["Sliding System", "Fluted Oak & Bronze", "Italian Soft-Damp"],
  },
  {
    id: "civil-lines-dressing-suite",
    category: "Walk-in Closets",
    categorySlug: "closet",
    title: "Smoked Bronze Vitrine Walk-In Suite",
    location: "Civil Lines, Raipur",
    image: "/img/walk-in-closet-luxury.jpg",
    description: "Slim anodised aluminium frames, sensor lighting, pull-out mirror, and velvet jewelry drawers.",
    specs: ["Walk-in Vitrine", "Toughened Bronze Glass", "Häfele LOOX LED"],
  },
  {
    id: "devendra-nagar-bar",
    category: "Bar & Living",
    categorySlug: "living",
    title: "Illuminated Fluted Bar & Wine Lounge",
    location: "Devendra Nagar, Raipur",
    image: "/img/bar-unit-luxury.jpg",
    description: "Custom bar unit with ambient backlight fluting, brass glassware rails, and quartz prep counter.",
    specs: ["Bar Unit", "Fluted PU & Brass", "Concealed Bar Fridge"],
  },
  {
    id: "bilaspur-contemporary-kitchen",
    category: "Modular Kitchen",
    categorySlug: "kitchen",
    title: "Contemporary L-Shape Culinary Suite",
    location: "Bilaspur Villa",
    image: "/img/kitchen-contemporary-real.jpg",
    description: "Handleless J-pull cabinetry with seamless acrylic finish and integrated magic corner swivel trays.",
    specs: ["L-Shape", "Super-Matte Acrylic", "Magic Corner Trays"],
  },
  {
    id: "raipur-luxury-living-console",
    category: "Bar & Living",
    categorySlug: "living",
    title: "Architectural TV & Living Room Console",
    location: "Raipur Residence",
    image: "/img/living-room-showcase.jpg",
    description: "Floating travertine stone media console with fluted acoustic backdrop and concealed wiring.",
    specs: ["Living & TV", "Acoustic Walnut", "Concealed Routing"],
  },
] as const

export const STATS = [
  { title: "Made in our own factory", line: "Every cabinet is cut and finished in Raipur" },
  { title: "Finishes you can touch first", line: "See and feel each sample before you choose" },
  { title: "Fitted by our own team", line: "Clean, careful work with almost no dust" },
  { title: "Lifetime warranty on SS 304", line: "On every stainless steel basket we fit" },
] as const

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Laser Space Audit & 3D Visualization",
    subtitle: "Precision Digital Survey",
    description:
      "Our architects conduct millimeter-accurate laser surveys of your space. We build photorealistic 3D renders showing materials, lighting, and ergonomics before anything is manufactured.",
    tag: "Raipur Design Studio",
    stat: "Finishes to Touch",
  },
  {
    number: "02",
    title: "German CNC Machining & Pre-Assembly",
    subtitle: "Factory Built to Precise Tolerances",
    description:
      "Engineered on German automated CNC cutting and laser edge-banding machines. Cabinets are fully pre-assembled, aligned, and calibrated in the factory with no manual site cutting.",
    tag: "Almost No On-Site Dust",
    stat: "Careful Quality Checks",
  },
  {
    number: "03",
    title: "Clean Installation & Careful Handover",
    subtitle: "Laser Leveling & White Glove Service",
    description:
      "Factory-certified installers assemble the pre-engineered components with utmost care. We calibrate all motion dampers, connect plumbing/electrical lines, and perform a rigorous final audit before sign-off.",
    tag: "Warranty on Woodwork",
    stat: "Clean Assembly",
  },
] as const

// Legacy constants for older components
export const CRAFTSMANSHIP_STATS = [
  { value: "Made", label: "IN OUR OWN FACTORY" },
  { value: "Fitted", label: "BY OUR OWN TEAM" },
  { value: "Backed", label: "BY LIFETIME CARE" },
] as const

export const EXPERIENCE_STEPS = [
  {
    number: "01",
    title: "CONSULTATION",
    description: "Understand your space, architectural layout, and lifestyle needs.",
  },
  {
    number: "02",
    title: "DESIGN & VISUALISE",
    description: "Immersive 3D photorealistic renders & tactile material swatches.",
  },
  {
    number: "03",
    title: "CLEAN INSTALLATION",
    description: "Precision laser leveling, almost no dust, and sign-off on the final audit.",
  },
] as const

export const FEATURES = [
  {
    icon: "layers",
    title: "Vertical Integration",
    description:
      "EBONY controls every phase — design, manufacturing, logistics, and distribution — ensuring no compromise at any step.",
  },
  {
    icon: "box",
    title: "Bespoke for Every Home",
    description:
      "No two EBONY projects are alike. Each space is meticulously planned and made with utmost precision, team of experts and modernised machinery.",
  },
  {
    icon: "shield",
    title: "Lifetime Support",
    description:
      "We are with you long after the last panel is fitted. Lifetime after-sales support, because every EBONY home deserves enduring care.",
  },
  {
    icon: "globe",
    title: "Pan-India Network",
    description:
      "Dealers, distributors and franchise partners in Mumbai, Delhi, Bangalore, Pune, Ahmedabad, and Raipur.",
  },
] as const

export const PHILOSOPHY = {
  eyebrow: "Our Philosophy",
  heading: ["Crafting spaces", "that outlive", "their moment."],
  body: "EBONY Modular Kulture is committed to creating new experiences, ambitions, and ways of life. Innovation is at the heart of every project — designing, manufacturing, and delivering perfection across India.",
  pillars: [
    {
      number: "01",
      title: "Visionary Design",
      description:
        "Each project begins with deep conversation — understanding how you live, what you love, and how your space should make you feel.",
    },
    {
      number: "02",
      title: "German Engineering",
      description:
        "Our manufacturing units are engineered in Germany, fusing Teutonic precision with the warmth and sensibility of Indian living.",
    },
    {
      number: "03",
      title: "Enduring Craft",
      description:
        "EBONY is building a name for modular luxury, trusted by families who value excellence.",
    },
  ],
} as const

export const REFERENCE_COLLECTIONS = [
  {
    id: "kitchen",
    title: "Modular Kitchens",
    tagline: "Functional. Elegant. Built for life.",
    description: "Honed marble waterfall islands, soft-close German lift-ups, and moisture-resistant marine core.",
    image: "/img/kitchen-island-luxury.jpg",
    href: "/kitchens",
  },
  {
    id: "wardrobe",
    title: "Wardrobes",
    tagline: "Organised beautifully.",
    description: "Bespoke walk-ins with smoked bronze fluted glass, vertical LED reveals, and Italian hardware.",
    image: "/img/wardrobe-bespoke-real.jpg",
    href: "/wardrobes",
  },
  {
    id: "living",
    title: "Living & TV Units",
    tagline: "Designed for togetherness.",
    description: "Acoustic fluted walnut paneling, floating media consoles, and seamless concealed cable integration.",
    image: "/img/living-room-showcase.jpg",
    href: "/collections#tv-bar",
  },
  {
    id: "interiors",
    title: "Complete Home Interiors",
    tagline: "A unified design language.",
    description: "Holistic architectural spaces synchronized across living, culinary, and master suite sanctuaries.",
    image: "/img/master-suite-luxury.jpg",
    href: "/collections",
  },
] as const
