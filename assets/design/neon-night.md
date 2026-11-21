# Neon Night Design Brief


## Visual Direction

Electric, late-night, neon-sign energy. The page should feel like a wet street outside a 2am ramen shop: jet-black surfaces, magenta and cyan signage glow, condensed display type, and a sense of motion held in stillness.

## Theme Mode

- **Theme mode:** dark
- **Why:** neon only reads as neon against dark. The magenta/cyan accents lose their identity on light surfaces and become flat brand colors.

## Theme Colors

Map these colors onto the target project's existing theme tokens, CSS variables, design tokens, global styles, stylesheet variables, or component styles. If the project has no theme system, introduce the smallest local color structure needed for this design.

- background primary: `#0A0A0F` (jet)
- background secondary: `#14141C`
- background tertiary: `#1E1E2A`
- text strong: `#F2EFFB`
- text: `#C8C5D8`
- text muted: `#9A98B8` (6.6:1 on jet)
- primary accent: `#FF2D92` (hot magenta - primary accent, neon)
- secondary accent: `#36E3FF` (electric cyan - secondary accent, neon)
- border: `#2A2A3A`
- medium shadow: `0 0 40px rgba(255, 45, 146, 0.18)` (neon-bloom)
- focus ring: `0 0 0 3px rgba(54, 227, 255, 0.45)`


## Typography

- **Display:** `Bebas Neue` (Google Fonts, weight 400), fallback `Impact, sans-serif`. Uppercase, tracking 0.04em. Headline, menu names, closing times.
- **Body:** `Inter` (Google Fonts, weights 400, 500, 600), fallback `system-ui, sans-serif`. 16px minimum, nothing under 13px.
- **Accents:** `JetBrains Mono` (Google Fonts, weights 400, 700), fallback `ui-monospace, monospace`. Ticket numbers, prices, labels.
- **Loading:** `https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;700&display=swap`
- **Voice:** punchy and short, like a neon sign caption.

## Section Anatomy

- **Header:** pink glowing wordmark and four uppercase links.
- **Hero:** huge condensed headline with a magenta glowing second line, lede and two buttons, beside a portrait (8:9) neon alley photo in a pink frame. Photo second on a phone.
- **Menu:** twelve ticket-machine tiles in four columns (two on a phone): number and tag in mono, dish name, note, price. Spicy bowls get a pink top border, others cyan.
- **Late hours:** heading and text beside a tall sign photo (3:4), and a row of seven day blocks (day, closing time, note). Friday and Saturday are outlined in pink. Four per row on a phone.
- **Counter:** heading and three 4:3 bowl photos (two on a phone).
- **Find us:** street photo (3:2) beside heading, address, nearest station and seating list, and a phone button.
- **Footer:** wordmark, fictional venue line, link back to the catalog.

## Photography

- Night, neon, steam and black bowls. Never daylight. No filter needed.
- The demo hotlinks Pexels photos. Replace them with the venue's own and keep the crops (8:9 hero, 3:4 sign, 4:3 strip, 3:2 street).

## Avoid

- Warm earth tones, pastels, or "cozy" copy.
- Long-form storytelling - keep all copy in short fragments.
- Soft, blurry, or candle-style imagery; lean into hard light, neon, wet pavement.
- Using both accents in the same component at full opacity (they vibrate); pair one accent with neutral text.
