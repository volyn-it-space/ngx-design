# Dark Roast Coffee Design Brief


## Visual Direction

Late-evening, roast-nerdy but warm. The page should feel like a roastery at 9pm: espresso-dark walls, copper portafilter glint, steamed-cream highlights, the smell of dark cocoa. The counterpart and counterpoint to the bright "Cafe Bakery" design.

## Theme Mode

- **Theme mode:** dark
- **Why:** espresso-brown surfaces, cream type, and copper accents are designed for evening. Light mode flattens the moody roastery atmosphere to a generic coffee shop.

## Theme Colors

Map these colors onto the target project's existing theme tokens, CSS variables, design tokens, global styles, stylesheet variables, or component styles. If the project has no theme system, introduce the smallest local color structure needed for this design.

- background primary: `#1F140E` (espresso)
- background secondary: `#2D1F16`
- background tertiary: `#3A2A1F`
- text strong: `#F0E2CC` (steamed cream)
- text: `#D0BFA4`
- text muted: `#AD9C84` (6.2:1 on espresso)
- primary accent: `#D08E55` (copper, lightened for contrast)
- secondary accent: `#6B4A30` (cocoa - secondary accent)
- border: `#3A2A1F`
- medium shadow: `0 10px 30px rgba(0, 0, 0, 0.45)`
- focus ring: `0 0 0 3px rgba(194, 129, 72, 0.40)`


## Typography

- **Display:** `Fraunces` (Google Fonts, weights 600, 700, italic wordmark), fallback `Georgia, serif`.
- **Body:** `Inter` (Google Fonts, weights 400, 500, 600), fallback `system-ui, sans-serif`. 16px minimum, line-height 1.65, nothing under 13px.
- **Loading:** `https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,600;0,700;1,600&family=Inter:wght@400;500;600&display=swap`
- **Voice:** a roaster talking about batches: origin, altitude, process, days since roast.

## Section Anatomy

- **Header:** italic copper wordmark and four text links.
- **Hero:** headline, lede and two actions on the left; a top-down cup photo cropped to a circle (1:1) with a cocoa ring on the right. Stacks on a phone, circle capped at 22rem.
- **Beans:** three bean cards with a copper top rule: name, a small origin/altitude/process list, tasting notes and price per 250 g.
- **Brew bar:** a table (method, time, size, price), a five-day roast-days row, and two photos (3:2 and a smaller 3:4).
- **Cups:** three square photo cards with name, price and one line each; photo left on a phone.
- **Visit:** cocoa gradient panel with phone button and address, hours, beans and Wi-Fi list.
- **Footer:** wordmark, fictional venue line, link back to the catalog.

## Photography

- Dark, warm, close: cups, beans, a pour-over. Slightly muted (`saturate(0.9) brightness(0.92)`).
- The demo hotlinks Pexels photos. Replace them with the roastery own and keep the crops (1:1 hero circle, 3:2 and 3:4 brew bar, 1:1 cups).

## Avoid

- Generic cafe-mug stock photos. Prefer roastery and brewing detail shots.
- Pastel "coffee with milk-foam art" hero - lean dark and moody.
- Vague tasting copy. Use third-wave specifics: variety, altitude, process.
- Family-friendly framing - this is for the third-wave / evening-coffee audience.
