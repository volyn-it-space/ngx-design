# Luxury Dark Design Brief


## Visual Direction

Dramatic, dark, exclusive, precise, and elegant. The page should feel premium without becoming hard to read - true black surfaces, rich gold and champagne accents, ivory text, generous space, and strong hierarchy.

## Theme Mode

- **Theme mode:** dark
- **Why:** this is the catalog's only true dark-native design. Gold and champagne accents only register as luxury against black; on a light surface they flatten into generic brand colors and lose the exclusivity.

## Theme Colors

Map these colors onto the target project's existing theme tokens, CSS variables, design tokens, global styles, stylesheet variables, or component styles. If the project has no theme system, introduce the smallest local color structure needed for this design.

- background primary: `#0F0F0F` (jet black)
- background secondary: `#1A1A1A`
- background tertiary: `#2A2A2A`
- text strong: `#F5F1EB` (ivory)
- text: `#D6D0C2`
- text muted: `#A39D7F` (muted gold, 7:1 on jet)
- primary accent: `#D4AF37` (rich gold - primary accent)
- secondary accent: `#F4D4A8` (champagne - secondary accent)
- border: `#2D2D2D`
- medium shadow: `0 12px 30px rgba(0, 0, 0, 0.55)`
- focus ring: `0 0 0 3px rgba(212, 175, 55, 0.45)`


## Typography

- **Display:** `Cormorant Garamond` (Google Fonts, weights 500, 600, 700), fallback `Georgia, serif`. Wordmark, titles, room names, prices.
- **Body:** `Lora` (Google Fonts, weights 400, 500), fallback `Georgia, serif`. 16px minimum, line-height 1.7, nothing under 13px.
- **Loading:** `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Lora:wght@400;500&display=swap`
- **Voice:** confident and restrained. Service, access, menu, reservation details. Make exclusivity concrete.

## Section Anatomy

- **Header:** centered gold wordmark with four text links under it that wrap on a phone.
- **Hero:** centered serif title inside a thin gold inset frame (hairline plus inner outline), lede and two actions, then a 21:9 interior photo below the frame.
- **Private rooms:** three wide alternating rows (photo 3:2 and text, mirrored on every second row), each with room name, seats, purpose and minimum spend, separated by a gold hairline. Stacks on a phone.
- **Menu:** one narrow centered column: a 16:9 dish photo, five dishes with price on hairlines, and one tasting menu line.
- **Concierge:** six services in a plain two-column list with hairline dividers, one column on a phone. No filled cards.
- **Reservations:** tall bar photo (4:5) beside heading, text, phone and email links and a details list (address, hours, dress, changes).
- **Footer:** centered wordmark, fictional venue line, link back to the catalog.

## Photography

- Low light, warm: set tables, leather, bottles, a single plated dish. Treated muted (`saturate(0.85) brightness(0.9)`).
- The demo hotlinks Pexels photos. Replace them with the venue's own and keep the crops (21:9 hero, 3:2 rooms, 16:9 dish, 4:5 bar).

## Avoid

- Sacrificing accessibility for atmosphere. Dark UI still needs WCAG AA contrast and visible focus states.
- Bright neon or saturated brand colors - luxury here is gold-on-black, not pink-on-black.
- Casual or friendly copy. This brand sells discretion.
- Loyalty-program prompts or popups - wrong register entirely.
