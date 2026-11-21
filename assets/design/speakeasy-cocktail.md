# Speakeasy Cocktail Design Brief


## Visual Direction

Confidential, candlelit, and hand-crafted. The page should feel like stepping behind a bookcase: dim, intimate, with aged brass and dark wood doing the work, and the menu treated like a private dossier.

## Theme Mode

- **Theme mode:** dark
- **Why:** the palette is built for low light. Cards, hero, and section surfaces all rely on dark wood and oxblood to register as a cocktail-bar interior; the brass accent only reads warm against deep backgrounds.

## Theme Colors

Map these colors onto the target project's existing theme tokens, CSS variables, design tokens, global styles, stylesheet variables, or component styles. If the project has no theme system, introduce the smallest local color structure needed for this design.

- background primary: `#1A0F0F` (dark wood / smoke)
- background secondary: `#2B1A1A`
- background tertiary: `#3A2424`
- text strong: `#F0E6D2` (parchment)
- text: `#C9BBA0`
- text muted: `#A3978A` (5.8:1 or better on every surface)
- primary accent: `#C19A52` (brass, for buttons, prices and links)
- accent line: `#A07C3B` (aged brass, for hairline borders only)
- secondary accent: `#5A1A1A` (oxblood - secondary accent)
- border: `#3D2A2A`
- medium shadow: `0 10px 30px rgba(0, 0, 0, 0.55)`
- focus ring: `0 0 0 3px rgba(160, 124, 59, 0.40)`


## Typography

- **Display:** `Playfair Display` (Google Fonts, weights 500 italic, 600, 700), fallback `Georgia, serif`. Use for the hero title, section H2s, drink names and the brand wordmark (italic).
- **Body:** `Inter` (Google Fonts, weights 400, 500, 600), fallback `system-ui, sans-serif`. 16px minimum, line-height 1.6. Nothing on the page is smaller than 13px.
- **Loading:** `https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&family=Inter:wght@400;500;600&display=swap`
- **Voice:** confidential, like a handwritten menu note. Short sentences. Cocktail names in title case, ingredients in lowercase.

## Section Anatomy

- **Header:** italic serif wordmark with a one-line note under it, four text links. No logo box, no menu button: the links wrap under the wordmark on a phone.
- **Hero:** two columns. Left: serif title (two to three lines), a lede of under 20 words, one brass button ("Reserve a table") plus an underlined text link ("See the menu"), then one line with hours and address. Right: a tall photo of the back bar inside an arched frame with a brass hairline, like a doorway. Stack on a phone, photo second.
- **Signature drinks:** three portrait photo cards (4:5), each with the name in serif, ingredients in lowercase and the price in brass. On a phone the photo moves to the left of the text.
- **The card:** one panel with a brass top rule: six more drinks in two columns, name and price joined by a dotted leader, ingredients below in muted text.
- **The room:** wide photo (3:2) beside a heading, one paragraph and three numbers (seats, stools, candles), then a strip of three 4:3 photos.
- **House rules:** heading on the left, four numbered rules on the right with italic roman numerals and hairline dividers.
- **Visit / reserve:** bordered oxblood panel. Left: heading, one paragraph and a button that dials the phone number. Right: address, hours, dress and private hire as a definition list.
- **Footer:** wordmark, one muted line, hairline divider.

## Photography

- Low light only: back bar, hands at work, a single glass on the counter. Treat photos muted (`filter: saturate(0.8) brightness(0.92)`), never saturated.
- The demo hotlinks Pexels photos. Replace them with the venue's own photos and keep the same crops (4:5 drinks, 3:2 room, 4:3 strip, 10:13 hero).

## Avoid

- Bright primary colors, neon, or playful illustrations.
- Photos with daylight or vibrant food shots.
- Multi-line cocktail descriptions; keep them under 15 words.
- Decorative SVG patterns or busy backgrounds that compete with the candlelight feel.
