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
- text muted: `#7A7898`
- primary accent: `#FF2D92` (hot magenta - primary accent, neon)
- secondary accent: `#36E3FF` (electric cyan - secondary accent, neon)
- border: `#2A2A3A`
- medium shadow: `0 0 40px rgba(255, 45, 146, 0.18)` (neon-bloom)
- focus ring: `0 0 0 3px rgba(54, 227, 255, 0.45)`


## Typography

- **Display:** `Bebas Neue` or `Oswald`, condensed sans. Tracking `+0.06em` for titles, uppercase nav.
- **Body:** `Inter` or `IBM Plex Sans`, weight 400.
- **Accents:** `JetBrains Mono` or any monospace for prices, hours, table numbers.
- **Voice:** punchy, lowercase, short - like a neon-sign caption. "open late." "ramen + highballs." No corporate copy.

## Section Anatomy

- **Hero:** tall, dark, eyebrow uses magenta uppercase ("OPEN UNTIL 3AM"), display title in condensed sans, lede 1-2 short lines. Primary CTA pill in magenta, secondary CTA outlined in cyan. A single neon-glow motif (sign-shaped SVG or text-shadow on a word) can replace any photo.
- **Menu strip:** horizontal scroll of dish cards, mono prices, magenta/cyan dividers between sections.
- **Tonight section:** short list of "what's playing" / "now pouring" / "tonight's special" - treat like a chalkboard panel.
- **Location:** map link, hours (emphasize late close), reservation/walk-in line, phone.
- **Footer:** mono small text, cyan and magenta divider hairlines.

## Avoid

- Warm earth tones, pastels, or "cozy" copy.
- Long-form storytelling - keep all copy in short fragments.
- Soft, blurry, or candle-style imagery; lean into hard light, neon, wet pavement.
- Using both accents in the same component at full opacity (they vibrate); pair one accent with neutral text.
