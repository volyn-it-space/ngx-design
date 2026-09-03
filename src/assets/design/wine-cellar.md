# Wine Cellar Design Brief


## Visual Direction

Candlelit, scholarly, and warm. The page should feel like descending into a vaulted cellar at dusk: deep burgundy walls, parchment menus, brass candlelight, and reverence for the list. Wine forward, never showy.

## Theme Mode

- **Theme mode:** dark
- **Why:** the cellar metaphor only works on a deep burgundy/charcoal surface. Candlelight gold and parchment are accent values that depend on dark backgrounds to glow.

## Theme Colors

Map these colors onto the target project's existing theme tokens, CSS variables, design tokens, global styles, stylesheet variables, or component styles. If the project has no theme system, introduce the smallest local color structure needed for this design.

- background primary: `#1A0D14` (burgundy night)
- background secondary: `#2B1620`
- background tertiary: `#3A1E2A`
- text strong: `#F4E8D2` (parchment)
- text: `#D4C5AB`
- text muted: `#8A7C6A`
- primary accent: `#E8B86C` (candlelight gold - primary accent)
- secondary accent: `#6B2C3A` (mulled wine - secondary accent)
- border: `#3A2530`
- medium shadow: `0 10px 30px rgba(0, 0, 0, 0.55)`
- focus ring: `0 0 0 3px rgba(232, 184, 108, 0.40)`


## Typography

- **Display:** `Cormorant Garamond` italic or `Playfair Display` for hero and section titles; tracking `+0.02em`.
- **Body:** `Crimson Text` or any quality book-serif at 16px, line-height 1.7.
- **Accents:** small caps for region labels ("PIEMONTE", "BURGUNDY") in gold.
- **Voice:** knowledgeable but inviting. Sommelier register: mention region, vintage, grape, mood - not marketing claims.

## Section Anatomy

- **Hero:** dark burgundy ground, candlelight-gold eyebrow ("Cellar since 1974"), serif italic display title, two-line lede, primary CTA ("Reserve A Table") + ghost link ("View The List").
- **The list:** stylized preview with 3-5 wine cards. Each card: region (small-caps gold), name (serif title), grape + vintage (body), short tasting note, price.
- **By the glass / flights:** horizontal row of flight cards with names like "Old World Reds" or "Champagne House Flight".
- **About the cellar:** paragraph on selection philosophy, sommelier name, and food pairing approach.
- **Visit:** address, opening hours (lean into evening), corkage policy line, reservation method.

## Avoid

- Stock imagery of grapes, barrels, or generic wine glasses unless treated very moodily.
- Wine-rating badges, scores, or shopping-cart UI patterns.
- Bright primary colors or playful illustrations.
- Long marketing claims ("award-winning", "best wine list"). Let the list speak.
