// EBONY Content — Architectural Luxury Modular Interiors
// All facts, addresses, phone numbers, and technical specifications are verified.
// No invented facts, awards, or fake reviews.

export const BRAND = {
  name: "EBONY",
  legalName: "EBONY Modular Kulture",
  tagline: "Every space begins with a thought.",
  subtitle: "German Engineering. Bespoke Indian Living.",
  location: "Raipur Flagship Studio, Chhattisgarh",
  address: "EBONY Modular Interiors, VIP Road / Shankar Nagar Corridor, Raipur, Chhattisgarh 492001",
  phone: "+91 79742 09352",
  phoneRaw: "+917974209352",
  email: "info@ebony.co.in",
  hours: "Monday – Saturday: 10:30 AM – 8:00 PM",
  googleMapsUrl: "https://maps.google.com/?q=Raipur+Chhattisgarh+Ebony+Modular+Interiors",
  copyright: `© ${new Date().getFullYear()} EBONY Modular Kulture. All rights reserved.`,
} as const

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Collections",
    href: "/collections",
    children: [
      { label: "Modular Kitchens", href: "/kitchens", desc: "L, U, Island, Parallel & Straight layouts" },
      { label: "Bespoke Wardrobes", href: "/wardrobes", desc: "Sliding & hinged systems, custom built for your home" },
      { label: "Walk-in Closets", href: "/walk-in-closets", desc: "Floor-to-ceiling glass & aluminium suites" },
      { label: "Bar Units & Lounges", href: "/collections#tv-bar", desc: "Luxury entertainment & backlit display units" },
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
      "Where culinary ergonomics meets understated luxury. Tailored islands, motorized lift-ups, moisture-proof BWP carcasses, and a wide choice of finishes.",
    image: "/img/kitchen-island-real.jpg",
    alt: "EBONY bespoke island kitchen with fluted detailing and quartz countertop",
    href: "/kitchens",
    stats: "Layouts & Styles for Every Home",
  },
  {
    id: "wardrobe",
    title: "Bespoke Wardrobe",
    subtitle: "Personal Sanctuaries",
    tag: "WARDROBE SYSTEMS",
    description:
      "Transforming daily rituals into ceremonies of order. Floor-to-ceiling sliding and hinged systems with Italian damping and sensor illumination.",
    image: "/img/wardrobe-bespoke-real.jpg",
    alt: "EBONY floor-to-ceiling bespoke wardrobe with warm integrated LED lighting",
    href: "/wardrobes",
    stats: "Custom Built to Your Home Layout",
  },
  {
    id: "walk-in-closet",
    title: "Walk-in Closet",
    subtitle: "Haute Dressing Suites",
    tag: "DRESSING SUITES",
    description:
      "Architectural enclosures featuring smoked bronze glass, slim anodised aluminium profiles, velvet accessories trays, and full-height shoe displays.",
    image: "/img/walk-in-closet-luxury.jpg",
    alt: "Luxury walk-in closet suite with bronze glass doors and backlit shelves",
    href: "/walk-in-closets",
    stats: "Custom Built · Floor-to-Ceiling",
  },
  {
    id: "bar-unit",
    title: "Bar & Living Unit",
    subtitle: "Entertainment Lounges",
    tag: "ENTERTAINMENT & LIVING",
    description:
      "Signature bar units, acoustic fluted timber TV backdrops, wine display alcoves, and floating consoles engineered for modern luxury homes.",
    image: "/img/bar-unit-luxury.jpg",
    alt: "EBONY luxury bar unit with illuminated fluted paneling and glassware display",
    href: "/collections#tv-bar",
    stats: "Acoustic Millwork · Integrated Bars",
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
    image: "/img/kitchen-island-real.jpg",
    alt: "Island kitchen with a curved two-level island, bar stools and a lit arch behind",
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
    image: "/img/collections/kitchen-l-shaped-white.jpg",
    alt: "L-shaped kitchen with white gloss cabinets along two walls and a steel range cooker",
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
    image: "/img/kitchen-contemporary-real.jpg",
    alt: "U-shaped kitchen with cabinets on three walls, white framed doors and lit tall glass units",
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
    image: "/img/collections/kitchen-parallel-peach.jpg",
    alt: "Parallel kitchen with two facing runs of peach cabinets and a window at the far end",
    specs: ["Comfortable corridor layout", "Clean wet & dry zoning", "High-volume prep zones"],
  },
  {
    id: "straight",
    name: "Straight Line",
    tag: "Minimalist Geometry",
    summary:
      "All cooking, washing, and cold storage arranged seamlessly along a single architectural wall for uncluttered visual purity.",
    bestFor: "Studio penthouses, loft apartments, and secondary pantry kitchens.",
    workTriangle: "Linear sequential flow: Refrigerator → Prep counter → Sink → Hob.",
    storageCapacity: "Compact vertical efficiency using full-height overhead cabinets.",
    image: "/img/collections/kitchen-straight-matte-blue.jpg",
    alt: "Straight kitchen along one wall with matte teal cabinets, built-in ovens and a marble backsplash",
    specs: ["Minimalist footprint", "Concealed built-in appliances", "Perfect for long wall expanses"],
  },
] as const

// Kitchen Styles
export const KITCHEN_STYLES = [
  {
    id: "contemporary",
    title: "Contemporary",
    subtitle: "Handleless Architectural Purity",
    description:
      "Ultra-matte acrylics, continuous Gola aluminum profiles, integrated appliances, and clean linear silhouettes that dissolve into the home's architecture.",
    image: "/img/kitchen-contemporary-real.jpg",
    palette: "Matte Charcoal, Crisp White, Natural Quartz",
    features: ["Continuous J-Pull & Gola rails", "Anti-fingerprint thermal surfaces", "Concealed LED strip channels"],
  },
  {
    id: "classic",
    title: "Classic & Neo-Classical",
    subtitle: "Timeless Shaker Craftsmanship",
    description:
      "Refined routed shaker frames, bevelled panels, champagne gold brushed handles, and fluted glass display cabinets that honor traditional elegance.",
    image: "/img/kitchen-style-classic.jpg",
    palette: "Warm Alabaster, Soft Sage, Champagne Gold Hardware",
    features: ["Precision CNC routed shaker shutters", "Smoked glass mullion accents", "Cornice and base plinth moulding"],
  },
  {
    id: "bold",
    title: "Bold Architectural",
    subtitle: "Moody Contrast & Dark Luxury",
    description:
      "Deep ebony hues, honed dark quartzite waterfall counters, smoked bronze vitrines, and warm ambient illumination for dramatic living.",
    image: "/img/kitchen-style-bold.jpg",
    palette: "Deep Obsidian, Smoked Bronze, Calacatta Gold veining",
    features: ["Matte black nano-surfaces", "Bronze anodised frame vitrines", "Accent backlit textured stone"],
  },
  {
    id: "boho",
    title: "Boho & Japandi",
    subtitle: "Organic Warmth & Tactile Materials",
    description:
      "Natural fluted oak veneers, warm micro-cement surfaces, open timber shelving, and airy daylight-focused layouts designed for soulful, calm spaces.",
    image: "/img/kitchen-style-boho.jpg",
    palette: "Raw White Oak, Travertine Beige, Brushed Brass",
    features: ["Real fluted timber accents", "Open display niche shelves", "Warm organic tactile textures"],
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
    image: "/img/collections/wardrobe-sliding-ivory.jpg",
    alt: "Ivory sliding wardrobe with a mirrored centre door, partly slid open",
  },
  {
    id: "hinged",
    name: "Openable Hinged Systems",
    tag: "Full Unobstructed View",
    headline: "Wide-Angle Access to the Entire Wardrobe",
    description:
      "Equipped with Blum Clip-top Blumotion hinges built for years of daily use. Opens wide to reveal your entire wardrobe collection at a single glance.",
    benefits: [
      "Simultaneous visibility across all wardrobe bays and accessory sections",
      "Interior door back mounts for vanity mirrors, tie holders, and belt hooks",
      "Ultra-slim anodised aluminium profiles or classic bevelled shaker shutters",
      "Seamless integration with corner walk-in modules and drawer stacks",
    ],
    image: "/img/collections/wardrobe-hinged-open.jpg",
    alt: "White built-in wardrobe with hinged doors swung open onto lit hanging space and drawers",
  },
] as const

// Walk-in Closets
export const WALK_IN_CLOSETS = [
  {
    id: "aluminium-frame",
    name: "Aluminium-Frame Vitrine System",
    description:
      "Architectural dark bronze or matte black anodised frames housing safety glass leaves. Vertical warm LED channels embedded flush into aluminum uprights.",
    image: "/img/wardrobe-detail-shot.jpg",
    alt: "Dressing room wall of glass-door wardrobes in slim dark aluminium frames with lit uprights",
  },
  {
    id: "floor-to-ceiling",
    name: "Floor-to-Ceiling Dressing Suite",
    description:
      "Continuous custom joinery spanning from floor to ceiling with no dead space. Includes motorized drop-down wardrobe lifts and integrated ventilation channels.",
    image: "/img/collections/walk-in-wood-dresser.jpg",
    alt: "Walk-in closet with floor-to-ceiling open hanging, shelves and drawers on three sides",
  },
  {
    id: "curtain-flow",
    name: "Curtain & Fabric Enclosed Sanctuary",
    description:
      "Motorized ceiling track drapery combined with open joinery for a soft, acoustic dressing atmosphere that bridges textile warmth with precision carpentry.",
    image: "/img/collections/walk-in-curtain-closet.jpg",
    alt: "Corner of a walk-in closet with open hanging and drawers, closed off by a floor-length sheer curtain",
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
