# EBONY (ebony.co.in) — Simplify, Refresh & Add More Kitchen Designs

> Brief for Claude Code. Read the whole file first, then work through **Section 14 (Build order)**.
> Site: https://ebony.co.in — a modular kitchen, wardrobe and walk-in closet brand in Raipur, Chhattisgarh.

---

## 1. The goal (in plain words)

The homepage today is written like a technical catalogue for architects. Most visitors are ordinary families choosing a kitchen. They get lost in words like *carcass*, *HDHMR*, *sintered stone* and *architectural tolerances*.

Fix it so that:

1. **Much less text.** Cut homepage copy by about 60%. Remove anything a normal homeowner does not need to decide.
2. **Simple, warm, human words.** A Class 8 student should understand every line.
3. **A better, more attractive UI and a smoother UX**, with transitions and effects that feel premium but never slow the site down.
4. **Fancier, friendlier section titles** (no "What we make", "Why us" style titles).
5. **More kitchen designs.** Grow the kitchen style gallery from 4 to 12 original designs.

Do not turn this into a different brand. Same logo, same colours, same pages, same phone number. It should feel like EBONY, just clearer and friendlier.

---

## 2. Hard rules

**Do**
- Inspect the repo first (stack, where copy lives, image folder, fonts, animation libraries already installed). Reuse what exists. The site is a Next.js project and may already use Framer Motion and/or GSAP.
- Put all homepage text and the kitchen designs in data/content files (e.g. `src/content/home.ts`, `src/content/kitchenDesigns.ts`) so the owner can edit words without touching components.
- Keep every route working: `/kitchens`, `/wardrobes`, `/walk-in-closets`, `/finishes`, `/hardware`, `/projects`, `/about`, `/contact`, `/privacy`, `/terms`.
- Keep the real facts already on the site: phone **+91 79742 09352**, email **info@ebony.co.in**, studio in **Sapphire Green, Ring Road, 03, Vidhan Sabha Rd, Chhattisgarh 492014**, **15+ years**, **500+ finishes**, **installed in 3 days**, **10-year warranty**, **48-point quality check**, hardware brands **Blum, Häfele, Hettich, Salice, Ebco**.
- Work mobile-first. Most visitors will be on phones.

**Do not**
- Do not change the logo, the brand colour tokens, or the URL structure.
- Do not copy any text, image, or code from the reference sites in Section 13. Learn the *ideas* only. Every sentence must be original.
- Do not invent new numbers, prices, offers, awards, ratings, or promises. Words like "Free consultation", "EMI", "Best in India" are **not allowed** unless the owner confirms them (see Section 16).
- Do not edit customer testimonial wording. Choose which ones to show; never rewrite them.
- Do not add heavy libraries. If you must add one, say why in one line.
- Do not delete technical information for good. Homepage gets the simple version. Detailed specs stay on `/finishes` and `/hardware` (inside "See full details" accordions if needed).
- Do not break existing forms, analytics, or SEO tags.

---

## 3. Writing rules (voice)

**Voice:** like a friendly shop owner talking to a family. Warm, simple, confident.

- Short sentences. **Max 12 words** in a sentence, **max 2 sentences** in any card.
- Use "you" and "your".
- Card descriptions: **max 15 words**. Section sub-lines: **max 20 words**. Button labels: **max 3 words**.
- One idea per line. No stacked adjectives.
- If a technical word is truly needed, explain it in plain words next to it.

**Banned words on the homepage** (use the plain version):

| Don't write | Write instead |
|---|---|
| bespoke, tailored, curated | made for you, your choice |
| architectural, engineered, precision | strong, neat, exact (or drop it) |
| culinary | kitchen, cooking |
| ergonomics, work triangle | easy to reach, easy to cook |
| carcass, substrate, core | the box / the inside / the strong base |
| joinery, millwork | woodwork (or drop it) |
| vitrine | glass display cabinet |
| fluted | ribbed wood / wood lines |
| sintered stone, HDHMR, BWP, SS 304 | stone look / strong board / waterproof plywood / stainless steel |
| luxury, haute, sanctuary, suite, ceremony, poetry | beautiful, cosy, your own room |
| tolerances, cycles tested, density | drop from the homepage |

**Before → After examples (follow this style):**

| Before | After |
|---|---|
| German Engineering. Bespoke Indian Living. | Kitchens You'll Love Coming Home To. |
| Where culinary ergonomics meets understated luxury. Tailored islands, motorized lift-ups, moisture-proof BWP carcasses, and 500+ finishes. | Smart, beautiful kitchens that make cooking a joy. |
| Transforming daily rituals into ceremonies of order. | Space for everything you own. |
| Architectural enclosures featuring smoked bronze glass, slim anodised aluminium profiles… | Your own dressing room, neat and stylish. |
| Optimized 360° circulation with independent prep sink or induction hob. | Room to cook, chat and move freely. |

---

## 4. Tagline options

**Use as the homepage hero headline (default):**
**"Kitchens You'll Love Coming Home To."**

Hero sub-line: *"Beautiful modular kitchens and wardrobes, made in our own factory and fitted in just 3 days."*
Hero buttons: **See Our Designs** (primary) · **Book a Visit** (secondary)

**Alternates** (keep these in the content file as commented options, and use one for the footer / meta / social):
- Cook Happy. Live Happy.
- Where Every Meal Feels Special.
- Making Kitchens Feel Like Home.
- Your Home's Happiest Corner.
- Beautiful Kitchens, Made Easy.
- Your Kitchen. Your Style. Your Story.

---

## 5. Section title map (old → new)

| Current title | New title | New sub-line (≤ 20 words) |
|---|---|---|
| What We Make. | **Explore Modular Designs** | Kitchens, wardrobes, dressing rooms and more, made to fit your home. |
| Modular Kitchen Configurations. | **OUR COLLECTIONS** | **Your dream kitchen awaits!** *(then a small line: "Pick the shape that fits your space.")* |
| Four Kitchen Design Styles. | **Pick Your Style** | Find the look that feels like you. |
| 500+ Surface Finishes & Materials. | **Colours & Finishes You'll Love** | 500+ colours and finishes. Glossy, matte, wood-look and more. |
| Sliding & Hinged Wardrobes + Walk-in Closets (merge into one section) | **Space For Everything You Own** | Wardrobes that slide or swing open, and dressing rooms made just for you. |
| Internal Fittings & Motion + Hardware Partners (merge into one section) | **Little Things, Big Comfort** | Smooth drawers, smart corners and fittings from brands we trust. |
| Product & Project Showcase. | **Homes We've Made Beautiful** | Real kitchens and wardrobes from Raipur, Bilaspur and nearby. |
| *(new)* | **From Idea to Home in 4 Steps** | Simple and stress-free, from first visit to move-in. |
| Loved by homeowners. | **Stories From Happy Homes** | *(no sub-line)* |
| Why EBONY. | **The EBONY Promise** | What you can always count on. |
| Let's design a space that's truly yours. | **Let's Plan Your Kitchen Together** | Visit our Raipur studio or call us. We'll help you pick the right design. |

"Three Certified Core Materials" is removed as its own section. Its useful part becomes one short line inside **The EBONY Promise** (see Section 6).

---

## 6. New homepage structure and exact copy

Target: about **9 screens of scroll on desktop** (down from ~14). Use this copy as written. You may trim, never make it longer.

### 6.1 Header
- Labels: Home · Kitchens · Wardrobes · Colours & Finishes · Fittings · Our Work · About · Contact. *(Rename labels only; keep routes. "Hardware" → "Fittings", "Projects" → "Our Work".)*
- Button: **Book a Visit**
- Behaviour: transparent on the hero → blurred solid bar after scrolling; hides when scrolling down, shows when scrolling up.

### 6.2 Preloader
Replace the "0%" counter loader. Max **1 second**, a simple logo fade, or remove it. Content must never wait behind it.

### 6.3 Hero
- Small label: `Modular Kitchens & Wardrobes · Raipur`
- H1: **Kitchens You'll Love Coming Home To.**
- Sub-line and buttons: see Section 4.
- Small hint at the bottom: "Scroll to explore".
- Sound: **no autoplay sound.** Remove the "SOUND: ON" label. If a sound toggle stays, it is muted by default.
- If the hero already has a scroll-driven image sequence that runs smoothly, keep it. Do not rebuild it.

### 6.4 Trust strip (animated counters, one row)
| Big | Small |
|---|---|
| 15+ | Years of happy kitchens |
| 500+ | Colours & finishes |
| 3 Days | To fit it at your home |
| 10 Years | Warranty |

### 6.5 Explore Modular Designs
Four big image cards.

| Card | One line | Button |
|---|---|---|
| Modular Kitchens | Smart, beautiful kitchens that make cooking a joy. | See Kitchens |
| Wardrobes | Roomy wardrobes with a place for everything. | See Wardrobes |
| Walk-in Closets | Your own dressing room, neat and stylish. | See Closets |
| Bar & TV Units | Stylish corners for family time and guests. | See Designs |

Remove the small chips such as "5 Configurations · 4 Design Styles". For the kitchen card only, show "5 Layouts · 12 Styles".

### 6.6 OUR COLLECTIONS — "Your dream kitchen awaits!"
Tabs: **Island · L-Shape · U-Shape · Parallel · Straight**. One image per tab, crossfade on change. Under each: name, one line, a "Best for" line, and two buttons: **See Kitchens** and **Get a 3D Plan**.

| Layout | One line | Best for |
|---|---|---|
| Island | A centre counter for cooking, chatting and breakfast. | Big, open homes. Needs a room about 14 ft wide. |
| L-Shape | Uses two walls and keeps everything within easy reach. | Most homes and medium kitchens. |
| U-Shape | Three walls of storage and counter space. | Big families and lots of cooking. |
| Parallel | Two facing walls with a walkway in the middle. | Narrow rooms and flats. |
| Straight | Everything along one wall. Simple and neat. | Small homes and tight spaces. |

Delete the long "Ergonomic Layout Matrix / Architectural Criteria" panels. Keep only the "14 ft" fact for Island.

### 6.7 Pick Your Style (the kitchen design gallery — 12 designs)
See **Section 7** for the full list and data. Layout:
- Filter chips: **All · Light & Bright · Dark & Rich · Colourful · Natural · Small Space**
- Card grid (3 across on desktop, horizontal swipe on mobile). Each card: image, name, one line, 3 colour dots, a "Best for" chip, and a **Get This Look** button that opens the enquiry form with the design name pre-filled.
- Filtering must animate smoothly (cards fade and re-flow).

### 6.8 Colours & Finishes You'll Love
A swipeable row of 8 swatch cards with a name and one short line. Hover or tap reveals a bigger preview. Link: **See All Finishes** → `/finishes`.

| Name | Line |
|---|---|
| Smooth Satin | A silky, seamless painted look. |
| Scratch-Safe Laminate | Tough, easy to wipe, many colours. |
| Gloss or Soft Matte | Mirror shine or velvet-soft touch. |
| Glass Doors | Clear or tinted, to show off your favourites. |
| Classic Carved Look | Soft grooves and curves, no sharp edges. |
| Stone Look | Looks like marble. Handles heat and stains. |
| Metal Shine | Gold, bronze or silver tones for a rich touch. |
| Stainless Steel | Strong, rust-free, great near the sink. |

### 6.9 Space For Everything You Own (wardrobes + closets merged)
Three cards:
- **Sliding Wardrobes** — Doors glide open and close softly. No swing space needed.
- **Hinged Wardrobes** — Open wide and see everything at once.
- **Walk-in Closets** — Your own dressing room with soft lights and smart storage.

Buttons: **See Wardrobes** / **See Closets**.

### 6.10 Little Things, Big Comfort
Four icon cards:
- **Soft-Close Drawers** — Quiet and smooth, every single time.
- **Lift-Up Doors** — They open upward and stay where you leave them.
- **Corner Magic Trays** — Reach every corner with ease.
- **Pull-Out Mirror** — A full-length mirror that hides inside your wardrobe.

Below the cards, one slim strip: `Fittings from trusted brands: Blum · Häfele · Hettich · Salice · Ebco` (logo images if available, otherwise clean text) with a link **See Fittings** → `/hardware`.

### 6.11 Homes We've Made Beautiful
Filter chips: **All · Kitchens · Wardrobes · Closets · Bar & TV**. Show 6 cards: image, short title, place. No spec chips.

| Short title | Place |
|---|---|
| Island Kitchen | Shankar Nagar, Raipur |
| Floor-to-Ceiling Sliding Wardrobe | VIP Road, Raipur |
| Walk-in Closet with Glass Doors | Civil Lines, Raipur |
| Glowing Bar Unit | Devendra Nagar, Raipur |
| Modern L-Shape Kitchen | Bilaspur |
| TV Unit with Wood Panel | Raipur |

Hover: image zooms slightly, a "View Project" label slides in. Link: **See All Projects**.

### 6.12 From Idea to Home in 4 Steps
1. **Visit or Call Us** — Tell us what you dream of.
2. **See It in 3D** — Watch your kitchen come to life before we build.
3. **We Build It** — Made in our own factory.
4. **We Fit It** — Fitted at your home in about 3 days.

A line connects the steps and draws itself as the visitor scrolls. Button: **Book a Visit**.

### 6.13 Stories From Happy Homes
- Show **6 different** testimonials (the page currently repeats the same 8 twice in the HTML — render each once; if you want an endless loop, clone with `aria-hidden`).
- Pick the shortest, strongest ones. **Do not edit the words.**
- Show name and city **once** (the city is currently printed twice).
- Slow auto-scroll, pauses on hover/touch.

### 6.14 The EBONY Promise (4 short points)
- **Made in Our Own Factory** — Cut on German machines. Neat, exact, and no noisy cutting at your home.
- **Your Size, Your Colour** — 500+ finishes, made to fit your room.
- **Fitted in 3 Days** — Ready-made units and a clean, dust-free fitting.
- **10-Year Warranty** — Checked 48 times before we hand it over.

Under the four points, one small line: *"Strong materials where it matters: waterproof plywood, strong board and stainless steel."* → link **Learn more** → `/finishes`.

Remove the four identical "Explore Our Heritage" links. Use one **Our Story** link to `/about`.

### 6.15 Final call-to-action
- Title: **Let's Plan Your Kitchen Together**
- Sub-line: Visit our Raipur studio or call us. We'll help you pick the right design.
- Buttons: **Book a Visit** · **Call +91 76669 02365** · **WhatsApp** *(use only if the owner confirms the number is on WhatsApp)*

### 6.16 Footer
Logo, one-line tagline (use an alternate from Section 4), two short link columns (Explore, Collections), phone, email, address, **Get Directions**, Privacy, Terms. Replace the placeholder social links (`facebook.com`, `twitter.com`, `instagram.com`, `youtube.com` with no profile) with the real EBONY profiles, or remove the icons you can't verify.

---

## 7. Kitchen designs (grow from 4 to 12)

All names and lines are original. Put them in `src/content/kitchenDesigns.ts`.

```ts
export type KitchenDesign = {
  id: string;
  name: string;
  line: string;            // one friendly sentence, max 15 words
  colours: [string, string, string]; // hex values for the 3 dots
  bestFor: string;         // short chip text
  tags: ('light' | 'dark' | 'colourful' | 'natural' | 'small')[];
  image?: string;          // real photo path if we have one
  needsNewPhoto: boolean;  // true = show the SVG sketch fallback
};
```

| # | Name | One line | Colours (hex) | Best for | Filter tags | Photo |
|---|---|---|---|---|---|---|
| 1 | **Clean & Modern** *(was Contemporary)* | Smooth, handle-free doors and a look that never ages. | #2B2B2B · #F5F5F2 · #C9C5BC | Modern flats | light | `kitchen-contemporary-real.jpg` |
| 2 | **Timeless Classic** *(was Classic & Neo-Classical)* | Soft colours, framed doors and gold-tone handles. | #F3EDE0 · #A9B8A0 · #C8A96A | Warm, family homes | light | `kitchen-style-classic.jpg` |
| 3 | **Dark & Dramatic** *(was Bold Architectural)* | Deep black and bronze with warm lights. Rich and bold. | #121212 · #3B2F2A · #8C6A43 | Big, open kitchens | dark | `kitchen-style-bold.jpg` |
| 4 | **Wood & Calm** *(was Boho & Japandi)* | Light wood, soft textures and open shelves. Cosy and peaceful. | #D8C3A5 · #F2EBDD · #B58B5A | Calm, natural homes | natural | `kitchen-style-boho.jpg` |
| 5 | **Colour Pop** | Happy, bright colours for a kitchen that makes you smile. | #F2B705 · #1B998B · #F26B5B | Young, lively families | colourful | new photo needed |
| 6 | **Two-Tone Twist** | Two colours, one kitchen. Dark below, light above. | #1F3A5F · #FFFFFF · #C8D3E0 | Anyone who wants a fresh look | colourful, light | new photo needed |
| 7 | **Earth & Clay** | Warm clay shades with cane and wood. Earthy and welcoming. | #B5654A · #E8D5BF · #8A6F4D | Homes that love warm tones | natural, colourful | new photo needed |
| 8 | **Garden Green** | Soft greens that bring the outdoors in. | #5F7A5A · #EEF1E6 · #C4A77D | Fresh, peaceful kitchens | natural, colourful | new photo needed |
| 9 | **Glass & Glow** | Glass-front cabinets and warm lights to show off your best dishes. | #2E2A28 · #D9B77E · #E9E4DA | Homes that love to host | dark | new photo needed |
| 10 | **Curves & Arches** | Rounded corners and arch shapes for a soft, modern feel. | #E7CFC1 · #F8F4EE · #9C7B6B | Stylish, trend-loving homes | light | new photo needed |
| 11 | **Small Kitchen, Big Ideas** | Smart storage that makes a small kitchen feel roomy. | #FFFFFF · #CFD8DC · #8FA3AD | Flats and compact homes | small, light | new photo needed |
| 12 | **Rasoi Special** | Made for daily Indian cooking: easy to clean, deep drawers for pots and masalas. | #E9DCC3 · #8B5E3C · #4B6B58 | Busy, everyday cooking | natural, small | new photo needed |

**Images for designs 5–12:** we don't have real photos yet. Do **not** reuse the same photo over and over, and do **not** hotlink images from other sites.
- Build a small `<KitchenSketch palette={colours} />` component: a simple SVG kitchen wall (base cabinets, wall cabinets, counter, backsplash, a hob/chimney hint) coloured from the design's palette. It should look neat and intentional, like an illustration.
- When `image` is later filled in, the card automatically shows the photo instead.
- Create `docs/IMAGES_NEEDED.md` listing the 8 shots needed (design name, suggested angle, suggested file name) so the owner knows what to photograph.

Card interaction: hover lifts the card and zooms the image; **Get This Look** opens the enquiry form with `Interested in: <design name>` already filled.

---

## 8. UI (look and feel) changes

Keep the brand colours and logo. Improve how they are used.

- **Image-first cards.** Big photos, rounded corners (16–24px), soft shadow, dark gradient behind text so it's always readable. Same aspect ratio across a row.
- **Bigger, shorter headings.** Section titles large and bold; body text 16–18px, never wider than about 60 characters per line.
- **More white space.** Section padding about 96–128px on desktop, 56–72px on mobile.
- **Clear buttons.** One primary (filled pill) and one secondary (outline pill) per area. Hover: fill sweeps across, arrow slides right.
- **Rhythm.** Alternate light and dark section backgrounds from the existing tokens so the long page doesn't feel flat.
- **Consistency.** Same card style, same radius, same shadow, same icon style everywhere. Max two font families.
- **Mobile.** Card rows become swipeable carousels with snap points. Filter chips scroll sideways. A **sticky bottom bar** with **Call · WhatsApp · Book a Visit** (hide it on the contact page and while the enquiry form is open). Tap targets at least 44px.
- **Desktop.** A slim floating **Book a Visit** pill on the right edge after the hero. Never show it at the same time as the mobile bottom bar.

---

## 9. Motion and transitions

Use Framer Motion if it's already installed; use GSAP only where it already is (hero). Rules for all motion:

- Animate **transform and opacity only**. No animating width, height, top or left.
- Duration 0.3–0.8 s. Easing `cubic-bezier(0.22, 1, 0.36, 1)`.
- Each element animates **once**, when it enters the screen.
- Respect `prefers-reduced-motion`: fall back to simple fades or nothing.
- On mobile: no parallax, lighter hover effects (use tap states).
- Nothing may block content or delay the first meaningful paint.

| Where | Effect |
|---|---|
| Page load | Logo fades in (≤ 1 s), then hero headline reveals line by line (text slides up from a mask, 0.08 s stagger). |
| Hero | Slow gentle zoom or a light parallax on the background image. |
| Section titles | Words rise and fade in on first view. |
| Any card or block | Fade-up 24px with a 0.08–0.12 s stagger. |
| Cards (hover/focus) | Lift 6px, image scales to ~1.06, overlay label slides in. Same look on keyboard focus. |
| Trust strip | Numbers count up once. |
| Collections tabs | Sliding underline; image crossfades and slides 0.4 s (use `AnimatePresence`). |
| Style gallery filters | Cards re-flow smoothly with Framer `layout` animation. |
| Projects filters | Same smooth re-flow. |
| 4 steps | The connecting line draws itself (SVG `pathLength`) as you scroll. |
| Testimonials | Slow marquee, pauses on hover/touch. |
| Header | Shrinks and blurs after scrolling; hides on scroll down, returns on scroll up. |
| Buttons | Fill sweep and arrow nudge on hover. |
| Route changes | Soft 0.35 s fade/slide between pages (App Router: `template.tsx`). |
| Desktop only | A small cursor-follow "View" bubble on gallery and project cards. Disabled on touch. |

---

## 10. UX improvements

1. **Enquiry form (modal).** Fields: **Name**, **Phone** (Indian number validation), **Interested in** (dropdown: Kitchen, Wardrobe, Walk-in Closet, Bar/TV, Not sure), optional **City**. Opens from every **Book a Visit** / **Get This Look** button; pre-fills the design name. Show a friendly success message. If a contact form/API already exists, reuse it. If not, send through the existing contact route or fall back to a WhatsApp / `mailto:` link, and tell me which you used.
2. **Repeat the main call-to-action** after every 2–3 sections (small, not pushy).
3. **Smooth anchor scrolling** and an active-section highlight in the header.
4. **Fast images.** `next/image`, correct `sizes`, priority only for the hero, lazy-load the rest, modern formats.
5. **Accessibility.** Visible keyboard focus, proper heading order (one H1), simple descriptive alt text, colour contrast AA, tabs/filters usable by keyboard.
6. **Stretch goal (do last, only if everything else is done): "Find My Kitchen Style" mini quiz.** 3 taps (room size → colour mood → how you cook) → shows the 2–3 best matching designs from Section 7 with **Get This Look**. Keep it light and skippable.

---

## 11. Inner pages, SEO and tone pass

- Apply the **same plain tone and new titles** to `/kitchens`, `/wardrobes`, `/walk-in-closets`, `/finishes`, `/hardware`, `/projects`, `/about`, `/contact`: friendlier headings, shorter intros, the same card style and motion.
- On `/kitchens`, show all 12 designs and all 5 layouts using the same data files.
- Keep detailed specs on `/finishes` and `/hardware`, tucked into "See full details" accordions.
- **Meta title:** `EBONY Modular Kitchens & Wardrobes in Raipur`
- **Meta description:** `Beautiful modular kitchens, wardrobes and walk-in closets in Raipur. Made in our own factory and fitted in 3 days. Visit our studio today.`
- Keep or add `LocalBusiness` JSON-LD with the real name, phone, email and address from Section 2. No invented ratings.
- Simple, local keywords in headings and alt text where natural (modular kitchen Raipur, wardrobe Raipur). No keyword stuffing.

---

## 12. Problems spotted on the current homepage (fix these)

1. Page is very long, with ~14 heavy sections and big technical paragraphs.
2. The walk-in closet cards show a raw path (`/walk-in-closets`) as visible link text, and all three cards carry the same "Bespoke Illumination" tag.
3. The "Explore Our Heritage" link repeats four times under four different points.
4. Testimonials are printed twice in the HTML, and each city is shown twice per card.
5. Social icons point to bare `facebook.com`, `twitter.com`, `instagram.com`, `youtube.com`.
6. The "0%" preloader and the "SOUND: ON" label slow and surprise first-time visitors.
7. SEO title and description are full of technical words ("German engineered… bespoke joinery").
8. Many words a normal customer won't understand (see the banned list in Section 3).

---

## 13. Reference sites — learn the idea, copy nothing

| Site | What to learn |
|---|---|
| **conceptkitchenindia.com** | Very simple copy. One short line per banner. "Book consultation" button repeated after every section. Each kitchen has a *name and a one-line story*. A friendly 5-step process. Customer video stories. Clear service list. |
| **designcafe.com** | "Made easy" feeling: a 4-step flow (book, meet, personalise, move in), big trust numbers, popular-designs grid with icons, sticky call/WhatsApp/quote buttons, short guides. Do **not** copy offers, EMI or price content. |
| **haecker-india.com** | The **OUR COLLECTIONS → "Your dream kitchen awaits!"** heading pattern, icon + short title + one-line benefit blocks, very little text, a "journey" story (design → build → fit). |
| **saviesahome.com** | I couldn't open this site directly while preparing the brief. If your browser/fetch tool can open it, check how it groups kitchen designs and its "Book a Home Visit" call-to-action. If it won't load, skip it. A public listing describes kitchens, wardrobes and space-saving bedroom furniture with a home-visit booking. |

---

## 14. Build order

Before coding: read the repo and give me a **10-line plan** in your reply, then continue without waiting.

1. **Content layer.** Create `home.ts` and `kitchenDesigns.ts` with all copy from Sections 4–7.
2. **Homepage rebuild** section by section (6.1 → 6.16). Delete the old sections you replace; don't leave dead code.
3. **Kitchen gallery** with 12 designs, filters, the `KitchenSketch` fallback, and `docs/IMAGES_NEEDED.md`.
4. **UI polish** (Section 8): cards, spacing, buttons, header, mobile bottom bar.
5. **Motion** (Section 9), then check reduced-motion behaviour.
6. **Enquiry modal and UX items** (Section 10, items 1–5).
7. **Inner pages tone pass, nav labels, footer, SEO** (Section 11).
8. **Cleanup** the problems in Section 12.
9. **QA** (Section 15).
10. *(Optional)* Style quiz.

---

## 15. Done means

- [ ] Homepage copy is about 60% shorter; no banned word from Section 3 remains on the homepage.
- [ ] All section titles match Section 5 exactly. "OUR COLLECTIONS" shows **"Your dream kitchen awaits!"**.
- [ ] 12 kitchen designs show, filter smoothly, and **Get This Look** pre-fills the form.
- [ ] Every sentence is original (nothing copied from reference sites).
- [ ] No invented claims. Only the facts listed in Section 2.
- [ ] Looks right at **375, 768, 1280 and 1920 px** widths. No sideways scroll.
- [ ] Motion follows Section 9, and is calm with `prefers-reduced-motion`.
- [ ] Mobile Lighthouse: Performance **90+** (aim), Accessibility **95+**, no layout shift from images or fonts.
- [ ] `npm run build` and lint pass. No console errors. No broken links.
- [ ] All old routes still work.
- [ ] If Playwright is available, save screenshots at the 4 widths to `docs/screenshots/`.
- [ ] Final reply: a short list of what changed, what you assumed, and which items need the owner's input.

---

## 16. Confirm with the owner (don't block on these — use the safe default)

| Question | Safe default until confirmed |
|---|---|
| Is the **+91 76669 02365** number on WhatsApp? | Hide the WhatsApp buttons; keep Call. |
| Does EBONY offer a **free** studio visit or consultation? | Say "Book a Visit", never "Free". |
| Real social profile links? | Remove icons that can't be verified. |
| "15+ years" vs "Est. 2009" (that is about 17 years). | Keep "15+ years". |
| Real photos for designs 5–12? | Use the SVG sketch fallback. |
| Is the 3D plan service offered to everyone? | Keep the "Get a 3D Plan" button; the form still collects the lead. |
