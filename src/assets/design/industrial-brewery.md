# Industrial Brewery Design Brief


## Visual Direction

Raw, industrial, honest. The page should feel like a working brewhouse: exposed concrete, iron, copper tanks, a chalkboard tap list, and zero marketing gloss. Function-first, beer-nerd-friendly.

## Theme Mode

- **Theme mode:** dark
- **Why:** the concrete/iron metaphor needs gray-on-dark to register; light mode collapses the industrial mood into a generic cafe look. Copper accent only glows on dark.

## Theme Colors

Map these colors onto the target project's existing theme tokens, CSS variables, design tokens, global styles, stylesheet variables, or component styles. If the project has no theme system, introduce the smallest local color structure needed for this design.

- background primary: `#1F1F1F` (iron black)
- background secondary: `#2A2A2A` (concrete)
- background tertiary: `#363636`
- text strong: `#ECE6D5` (oat malt)
- text: `#C9C3AF`
- text muted: `#A39D8B` (6.1:1 on iron)
- primary accent: `#D08440` (copper, lightened for contrast)
- secondary accent: `#D9A04E` (amber - secondary accent)
- border: `#383838`
- medium shadow: `0 6px 18px rgba(0, 0, 0, 0.45)`
- focus ring: `0 0 0 3px rgba(184, 115, 51, 0.40)`


## Typography

- **Display:** `Bebas Neue` (Google Fonts, weight 400), fallback `Impact, sans-serif`. Uppercase headings, tap numbers, numerals.
- **Body:** `Inter` (Google Fonts, weights 400, 500, 600, 700), fallback `system-ui, sans-serif`. 16px minimum, nothing under 13px.
- **Loading:** `https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap`
- **Voice:** plain and physical. Styles, ABV, barrels, hours.

## Section Anatomy

- **Header:** copper wordmark and four text links.
- **Hero:** left: headline, lede, two actions. Right: the tap board in a copper frame (eight taps with number, beer, style, ABV and pint price). Under both: a wide 12:5 photo of tap handles with a copper rule.
- **Numbers:** three large copper numerals (taps, barrels, hours) with labels, beside a tall 7:9 glass photo.
- **The Saturday tour:** three step cards with copper top borders.
- **The taproom bar:** three 7:5 photos of taps.
- **Visit:** copper-framed panel: text and phone button, address, hours, growlers and tours.
- **Footer:** wordmark, fictional venue line, link back to the catalog.

## Photography

- Taproom bar light, copper and steel. Slightly muted (`saturate(0.9) brightness(0.9)`). No tank photo was found, so tap handles stand in; swap in the brewery own tank photo where possible.
- The demo hotlinks Pexels photos. Replace them and keep the crops (12:5 hero, 7:9 glass, 7:5 tiles).

## Avoid

- Decorative serifs, cursive, or "craft beer brand" calligraphy.
- Round, soft, watercolor labels - keep typography stencil/industrial.
- Stock imagery of generic clinking pints.
- Hiding tap-list specs behind hover/expand - keep ABV/IBU visible.
