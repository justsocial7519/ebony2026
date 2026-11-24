// Original Kitchen Designs for EBONY
// Simple, warm, human copy (max 15 words per line) with real photos and palette dots

export type KitchenDesign = {
  id: string
  name: string
  line: string
  colours: [string, string, string]
  bestFor: string
  tags: ("all" | "light" | "dark" | "colourful" | "natural" | "small")[]
  image: string
  alt: string
}

export const KITCHEN_DESIGNS: KitchenDesign[] = [
  {
    id: "metallic-brass-curved",
    name: "Metallic Surface Brass",
    line: "Champagne brass metallic curves with illuminated vitrine display.",
    colours: ["#D4AF37", "#F5F5F2", "#1C1C1C"],
    bestFor: "Luxury villas & modern penthouses",
    tags: ["all", "light", "natural"],
    image: "/img/kitchen-metallic-surface-brass.jpg",
    alt: "Metallic surface kitchen with curved champagne brass island and glass vitrine cabinets",
  },
  {
    id: "green-marble-walnut",
    name: "Fluted Walnut & Green Marble",
    line: "Dark fluted timber with emerald veined stone and gold lighting.",
    colours: ["#234D3D", "#3B2F2A", "#C8A96A"],
    bestFor: "Warm, luxury homes",
    tags: ["all", "dark", "natural"],
    image: "/img/kitchen-green-marble-island.jpg",
    alt: "Luxury island kitchen with fluted walnut panelling and green marble countertop",
  },
  {
    id: "curved-travertine",
    name: "Curved Travertine Island",
    line: "Fluted stone curves with cantilevered wooden dining nook.",
    colours: ["#E6D7C3", "#2B2B2B", "#B58B5A"],
    bestFor: "Architectural, social spaces",
    tags: ["all", "light", "natural"],
    image: "/img/kitchen-curved-travertine.jpg",
    alt: "Curved travertine island kitchen with wooden dining extension and brass chandelier",
  },
  {
    id: "wood-calm",
    name: "Wood & Calm Travertine",
    line: "Monolithic travertine curves with fluted wooden barstools.",
    colours: ["#D8C3A5", "#F2EBDD", "#B58B5A"],
    bestFor: "Calm, natural homes",
    tags: ["all", "natural", "dark"],
    image: "/img/kitchen-island-travertine-stools.jpg",
    alt: "Monolithic travertine curved island with fluted bar stools and dark wood cabinets",
  },
  {
    id: "colour-pop",
    name: "Colour Pop",
    line: "Happy, bright colours for a kitchen that makes you smile.",
    colours: ["#F2B705", "#1B998B", "#F26B5B"],
    bestFor: "Young, lively families",
    tags: ["all", "colourful"],
    image: "/img/kitchen-colour-pop.jpg",
    alt: "Colour Pop modular kitchen with warm mustard yellow and teal cabinetry",
  },
  {
    id: "two-tone-twist",
    name: "Two-Tone Twist",
    line: "Two colours, one kitchen. Dark below, light above.",
    colours: ["#1F3A5F", "#FFFFFF", "#C8D3E0"],
    bestFor: "A fresh, balanced look",
    tags: ["all", "colourful", "light"],
    image: "/img/kitchen-twotone-twist.jpg",
    alt: "Two-Tone Twist modular kitchen with navy blue base and white upper cabinets",
  },
  {
    id: "earth-clay",
    name: "Earth & Clay",
    line: "Warm clay shades with cane and wood. Earthy and welcoming.",
    colours: ["#B5654A", "#E8D5BF", "#8A6F4D"],
    bestFor: "Homes that love warm tones",
    tags: ["all", "natural", "colourful"],
    image: "/img/kitchen-earth-clay.jpg",
    alt: "Earth and Clay Mediterranean style kitchen with terracotta and ribbed oak",
  },
  {
    id: "garden-green",
    name: "Garden Green",
    line: "Soft greens that bring the outdoors in. Fresh and peaceful.",
    colours: ["#5F7A5A", "#EEF1E6", "#C4A77D"],
    bestFor: "Fresh, peaceful kitchens",
    tags: ["all", "natural", "colourful"],
    image: "/img/kitchen-garden-green.jpg",
    alt: "Garden Green modular kitchen with sage green cabinets and courtyard window",
  },
  {
    id: "glass-glow",
    name: "Glass & Glow",
    line: "Glass-front cabinets and warm lights to show off your favourites.",
    colours: ["#2E2A28", "#D9B77E", "#E9E4DA"],
    bestFor: "Homes that love to host",
    tags: ["all", "dark"],
    image: "/img/kitchen-glass-glow.jpg",
    alt: "Glass and Glow luxury modular kitchen with illuminated vitrine display cabinets",
  },
  {
    id: "curves-arches",
    name: "Curves & Arches",
    line: "Rounded corners and arch shapes for a soft, modern feel.",
    colours: ["#E7CFC1", "#F8F4EE", "#9C7B6B"],
    bestFor: "Stylish, trend-loving homes",
    tags: ["all", "light"],
    image: "/img/kitchen-curves-arches.jpg",
    alt: "Curves and Arches modular kitchen with curved fluted island corners",
  },
  {
    id: "pantry-kitchen",
    name: "Pantry Kitchen, Big Ideas",
    line: "Smart storage and tall pull-outs that make efficient kitchens feel roomy.",
    colours: ["#FFFFFF", "#800020", "#CFD8DC"],
    bestFor: "Flats and modern pantry kitchens",
    tags: ["all", "small", "light"],
    image: "/img/kitchen-pantry-crimson.jpg",
    alt: "Pantry Kitchen with tall pull-out pantry and crimson built-in cabinetry",
  },
  {
    id: "rasoi-special",
    name: "Rasoi Special",
    line: "Made for daily Indian cooking: easy to clean with deep masala drawers.",
    colours: ["#E9DCC3", "#8B5E3C", "#4B6B58"],
    bestFor: "Busy, everyday cooking",
    tags: ["all", "natural", "small"],
    image: "/img/kitchen-rasoi-special.jpg",
    alt: "Rasoi Special Indian cooking modular kitchen with durable granite and spice organizers",
  },
]
