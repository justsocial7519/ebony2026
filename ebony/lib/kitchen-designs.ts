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
    id: "clean-modern",
    name: "Clean & Modern",
    line: "Smooth, handleless doors and a look that never ages.",
    colours: ["#2B2B2B", "#F5F5F2", "#C9C5BC"],
    bestFor: "Modern flats & open rooms",
    tags: ["all", "light"],
    image: "/img/kitchen-detail-real.jpg",
    alt: "Handleless kitchen with smooth greige cabinets, a black quartz island and soft under-cabinet lights",
  },
  {
    id: "timeless-classic",
    name: "Timeless Classic",
    line: "Soft colours, framed doors and gold-tone handles.",
    colours: ["#F3EDE0", "#A9B8A0", "#C8A96A"],
    bestFor: "Warm, family homes",
    tags: ["all", "light"],
    image: "/img/kitchen-style-classic.jpg",
    alt: "Timeless Classic modular kitchen with elegant framed shaker cabinetry",
  },
  {
    id: "dark-dramatic",
    name: "Dark & Dramatic",
    line: "Deep black and bronze with warm lights. Rich and bold.",
    colours: ["#121212", "#3B2F2A", "#8C6A43"],
    bestFor: "Big, open kitchens",
    tags: ["all", "dark"],
    image: "/img/kitchen-style-bold.jpg",
    alt: "Black kitchen with a black marble island and lit glass wall cabinets",
  },
  {
    id: "wood-calm",
    name: "Wood & Calm",
    line: "Light wood, soft textures and open shelves. Cosy and peaceful.",
    colours: ["#D8C3A5", "#F2EBDD", "#B58B5A"],
    bestFor: "Calm, natural homes",
    tags: ["all", "natural"],
    image: "/img/kitchen-style-boho.jpg",
    alt: "Wood and Calm Japandi style modular kitchen with light oak fluting",
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
    id: "small-spaces",
    name: "Small Kitchen, Big Ideas",
    line: "Smart storage that makes a small kitchen feel roomy.",
    colours: ["#FFFFFF", "#CFD8DC", "#8FA3AD"],
    bestFor: "Flats and compact homes",
    tags: ["all", "small", "light"],
    image: "/img/kitchen-small-spaces.jpg",
    alt: "Small Kitchen Big Ideas compact modular kitchen with pull-out pantry",
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
