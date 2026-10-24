# Design System: EBONY Modular Kitchens & Wardrobes

The single source of truth for new EBONY screens, whether built by hand, in code, or generated with Google Stitch. It describes the site as it is built today (Playfair Display, Poppins, warm gold on night navy and cream).

## 1. Visual Theme & Atmosphere

A warm, gallery-airy showroom: big real-home photography, generous cream space, and confident asymmetric layouts. It should feel like walking into a well-lit Raipur design studio, calm and premium but never cold. Copy is short, plain and friendly, written for families rather than architects.

- **Density:** 4 of 10, "Daily App Balanced" leaning airy. Sections breathe (`py-20` to `py-32`).
- **Variance:** 7 of 10, offset and asymmetric. One large tile next to two stacked tiles, zig-zag rows, left-aligned heroes.
- **Motion:** 5 of 10, fluid CSS. Soft reveals, slow image zoom on hover, one gentle pulse on interactive markers.

## 2. Color Palette & Roles

- **Night Navy** (#0B0F19): dark sections, header, footer, image overlays.
- **Studio Ink** (#0B1020): primary text and buttons inside the Kitchen Studio.
- **Deep Slate Ink** (#020617, Tailwind `slate-950`): headings and body text on light sections.
- **Muted Slate** (#475569, `slate-600`): secondary text and descriptions.
- **Warm Cream** (#FBF8F3): alternate light sections.
- **Stone Panel** (#F5F2ED): soft panels behind content, such as the comfort section.
- **Studio Linen** (#F7F6F3): Kitchen Studio page background.
- **Hairline** (#E6E1D8): 1px borders and dividers.
- **Brand Gold** (#B8923A): the single accent. Primary buttons, active states, kickers, focus rings.
- **Gold Text** (#9A7637): accent words in headings on light backgrounds (upright, never italic).
- **Soft Gold** (#C5A572 / #D8B97F): accents and accent words in headings on dark backgrounds (upright, never italic).

Only one accent family (gold). No purple, no neon, no gradient text. Never pure black (#000000).

## 3. Typography Rules

- **Display:** Playfair Display (`font-serif`), regular weight, tight tracking. Headlines pair a plain phrase with one gold accent in the same upright style: "Find the one you love". No italic or cursive type in any title. Scale with `clamp` or responsive steps, `2.1rem` on phones to `3.5rem` on desktop for section titles.
- **Body:** Poppins (`font-sans`), 15 to 18px, relaxed leading, lines kept under 65 characters.
- **Kicker:** the `.kicker` class. Small uppercase Poppins in gold with a short gold rule before it.
- **Numbers:** No statistics, years in business, counts or numeric promises in copy. `tabular-nums` only for UI progress and step numbers.
- **Banned:** Inter, Times New Roman, Georgia as a visible face, and serif type inside dense tool panels apart from headings.

## 4. Component Stylings

- **Buttons:** fully rounded pills, at least 44px tall (52px for main calls to action). Gold fill with slate text on dark sections, slate fill with white text on light ones. Press feedback with `active:scale-[0.98]`. No outer glows.
- **Photo tiles:** large radius (`rounded-[1.75rem]`), full-bleed image, navy gradient from the bottom, label and one-line description inside, round white arrow button bottom-right.
- **Gallery cards:** image first with a small white type pill, caption below the image (serif name, one plain line). No boxed card around the caption.
- **Promise cards (Why Ebony):** white card, image on top, gold rounded icon badge overlapping the image edge. The lead promise spans two columns.
- **Filter chips:** pill buttons with `aria-pressed`; active is slate with white text, secondary chips use a gold ring on cream.
- **Numbered photo markers:** frosted white circles with serif numbers on the photo, linked both ways to a numbered list; the active one turns slate.
- **Forms:** label above the field, error below, gold focus ring.
- **Loading:** a branded progress card with named steps (see the Kitchen Studio), never a bare spinner.

## 5. Layout Principles

- Content sits in `max-w-7xl` (1280px) with `px-5 sm:px-8 lg:px-12`. The Kitchen Studio uses 1480px.
- Heroes are left-aligned or split screen. No centered hero headlines.
- Feature groups use bento (7/5 split, lead tile spanning two rows), zig-zag rows, or horizontal scroll. No row of three equal cards.
- Every multi-column layout collapses to one column below 768px. No horizontal page scroll.
- Sticky elements sit under the 69px header (`top-[69px]`). Page wrappers use `overflow-x-clip`, never `overflow-x-hidden`, so sticky positioning keeps working.
- Photos that carry positioned markers keep a fixed aspect ratio so markers never drift.

## 6. Motion & Interaction

- Reveal on scroll with `FadeReveal`; gallery items cascade with `.card-in` and a capped stagger.
- Images zoom slowly on hover (`duration-1000`, scale 1.04 to 1.06).
- Markers and hotspots use the `.hotspot-pulse` ring.
- Animate `transform` and `opacity` only. Every animation stops under `prefers-reduced-motion`.
- 3D (Kitchen Studio) loads only on its own page, renders only when something changes, and releases all GPU memory when the page is left.

## 7. Anti-Patterns (Banned)

- The word "free" anywhere in site copy (no "free visit", "free quote" or "rust-free").
- Emojis, AI filler words ("elevate", "seamless", "unleash", "next-gen"), and "scroll to explore" prompts or bouncing arrows.
- Photos taken from other brands' websites. Use EBONY's own photos or licensed stock, and present stock as design ideas, not as EBONY projects.
- Invented statistics, fake round numbers, or warranty and service promises the business has not confirmed.
- Pure black, neon glows, purple or blue AI gradients, gradient-filled headline text, custom cursors.
- Centered hero headlines and rows of three identical cards.
