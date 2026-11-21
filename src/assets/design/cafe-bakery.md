# Cafe Bakery Design Brief


## Visual Direction

Warm, friendly, bright, hand-made, and welcoming. The page should feel like a neighbourhood cafe at 9am: cream and tan walls, soft pink accents, the kind of polish that makes pastries look desirable without becoming corporate.

## Theme Mode

- **Theme mode:** light
- **Why:** the palette is built around cream and ivory backgrounds. Cafe-brown text and dusty-pink accents are designed to read on warm light surfaces; on dark they lose the bakery-window warmth.

## Theme Colors

Map these colors onto the target project's existing theme tokens, CSS variables, design tokens, global styles, stylesheet variables, or component styles. If the project has no theme system, introduce the smallest local color structure needed for this design.

- background primary: `#FAF8F5` (ivory)
- background secondary: `#F5EDE3` (warm cream)
- background tertiary: `#E8DCCF` (light tan)
- text strong: `#4A3B2D` (warm dark brown)
- text: `#5F4A3C` (coffee brown)
- text muted: `#7A5F3C` (cafe brown, 5.7:1 on ivory)
- primary accent: `#7A5F3C` (cafe brown, for buttons)
- secondary accent: `#D4A5A5` (dusty pink - secondary accent)
- border: `#D9C9BC`
- medium shadow: `0 6px 18px rgba(107, 83, 68, 0.12)`
- focus ring: `0 0 0 3px rgba(212, 165, 165, 0.45)`


## Typography

- **Display:** `Fraunces` (Google Fonts, weights 600, 700), fallback `Georgia, serif`. Hero, H2s, item names, times.
- **Body:** `Inter` (Google Fonts, weights 400, 500, 600), fallback `system-ui, sans-serif`. 16px minimum, line-height 1.6, nothing under 13px.
- **Loading:** `https://fonts.googleapis.com/css2?family=Fraunces:wght@600;700&family=Inter:wght@400;500;600&display=swap`
- **Voice:** warm, friendly, local. Say what is baked and when. No "premium coffee experience" language.

## Section Anatomy

- **Header:** text wordmark and four text links that wrap on a phone.
- **Hero:** centered title, short lede, a pill button and an underlined link, then one wide (2:1) counter photo with a rounded top. On a phone the photo is 4:3.
- **Out of the oven today:** cream panel. Left: heading and one line. Right: four bake times (7:00, 9:00, 11:30, 14:00) with the bake and a note, on hairlines.
- **Coffee and bakes:** two columns (coffee, bakes) with six lines each, name, note and price, under a pink rule. One column on a phone.
- **The counter:** uneven mosaic of five photos on a five-column grid (wide 3:2 and tall 3:4 crops), rounded corners. Two columns on a phone.
- **Visit:** arched tall photo (3:4) beside heading, address, an opening-hours table and a phone button.
- **Footer:** wordmark, fictional venue line, link back to the catalog.

## Photography

- Daylight only: pastries on trays, loaves on shelves, cappuccinos on marble. No filters.
- The demo hotlinks Pexels photos. Replace them with the bakery's own and keep the crops (2:1 hero, 3:2 and 3:4 mosaic, 3:4 visit).

## Avoid

- Dark photography, late-night atmosphere, or premium-restaurant gloss.
- Long marketing claims ("best coffee in town"). Mention origin, roaster, baker - let it speak.
- Dashboards, auth, CMS, API fetching, complex filtering, or heavy animation.
- Tiny mobile text. Keep hours/address/phone large and unmissable.
