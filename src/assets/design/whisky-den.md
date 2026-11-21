# Whisky Den Design Brief


## Visual Direction

Discreet, members-only, late-hour. The page should feel like the back room of a country hotel at 11pm: tobacco-brown walls, oxblood leather chairs, tarnished brass lamps, decanters of single-malt, hushed voices. Not flashy luxury - quiet authority.

## Theme Mode

- **Theme mode:** dark
- **Why:** the nightcap-room metaphor only works on warm brown/oxblood backgrounds. The tarnished brass accent is intentionally muted - it loses identity on a white surface.

## Theme Colors

Map these colors onto the target project's existing theme tokens, CSS variables, design tokens, global styles, stylesheet variables, or component styles. If the project has no theme system, introduce the smallest local color structure needed for this design.

- background primary: `#2A1810` (tobacco)
- background secondary: `#3A2418`
- background tertiary: `#4A2E20`
- text strong: `#F0E5C8` (parchment cream)
- text: `#D2C3A4`
- text muted: `#AD9C84` (5.9:1 on tobacco)
- primary accent: `#B8934A` (brass, lightened for contrast on tobacco)
- secondary accent: `#5A1A1A` (oxblood - secondary accent)
- border: `#432B1F`
- medium shadow: `0 10px 30px rgba(0, 0, 0, 0.5)`
- focus ring: `0 0 0 3px rgba(156, 122, 59, 0.40)`


## Typography

- **Display:** `Cinzel` (Google Fonts, weights 500, 600), fallback `Georgia, serif`. Wordmark, headings, region names, prices.
- **Body:** `Lora` (Google Fonts, weights 400, 500), fallback `Georgia, serif`. 16px minimum, line-height 1.7, nothing under 13px.
- **Loading:** `https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600&family=Lora:wght@400;500&display=swap`
- **Voice:** a club ledger. Region, age, cask, price per dram.

## Section Anatomy

- **Header:** brass wordmark and four text links.
- **Hero:** split. Left: serif headline, lede and two actions. Right: wide (15:8) low-light bar shelf photo. Stacks on a phone.
- **The ledger:** four real tables in two columns (Speyside, Islay, Highlands and islands, Japan), each with a brass-ruled caption and columns whisky, age, cask, dram price. One column on a phone.
- **Flights:** tall photo (4:5) beside three flights on hairlines with prices.
- **The lounge:** 3:2 photo beside heading, text and three numerals (bottles, seats, smallest pour); a pair of 3:2 photos below.
- **Visit:** oxblood-tinted panel with a brass border: heading, phone button and address, hours, dress and bookings list.
- **Footer:** wordmark, fictional venue line, link back to the catalog.

## Photography

- Low light, amber, wood. Muted (`saturate(0.85) brightness(0.9)`).
- The demo hotlinks Pexels photos. Replace them with the bar's own and keep the crops (15:8 hero, 4:5 flights, 3:2 lounge).

## Avoid

- Loud "luxury" gold-on-black gloss. This is restrained, not aspirational.
- Stock cigar/whisky photos with shallow depth-of-field cliches.
- Marketing claims about award-winning bottles. Cite age and cask, let it stand.
- Family-friendly framing. The audience is adult, evening-only.
