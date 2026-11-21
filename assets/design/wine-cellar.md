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
- text muted: `#A89A88` (6.5:1 on the dark ground)
- primary accent: `#E8B86C` (candlelight gold - primary accent)
- secondary accent: `#6B2C3A` (mulled wine - secondary accent)
- border: `#3A2530`
- medium shadow: `0 10px 30px rgba(0, 0, 0, 0.55)`
- focus ring: `0 0 0 3px rgba(232, 184, 108, 0.40)`


## Typography

- **Display:** `Cormorant Garamond` (Google Fonts, weights 500, 600, 700, italic 500), fallback `Georgia, serif`. Titles, wine names, numerals.
- **Body:** `Crimson Text` (Google Fonts, weights 400, 600), fallback `Georgia, serif`. 16px minimum, line-height 1.7, nothing under 13px.
- **Loading:** `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Crimson+Text:wght@400;600&display=swap`
- **Voice:** knowledgeable but inviting. Region, vintage, grape, mood.

## Section Anatomy

- **Header:** wordmark and four text links.
- **Hero:** tall narrow cellar photo (3:5) on the left, headline, lede and actions on the right. Stacks on a phone.
- **The list:** a real table by region (wine, grape, year, glass, bottle) with gold region rows.
- **Flights:** three flights as columns with prices and a wide photo.
- **From the cellar:** three large numerals beside a photo.
- **Tastings:** monthly tastings as a dated list beside a photo.
- **Visit:** photo, address, hours and a phone button.
- **Footer:** wordmark, fictional venue line, link back to the catalog.

## Photography

- Low light: cellars, bottles, glasses on dark wood. Never daylight.
- The demo hotlinks Pexels photos. Replace them with the venue's own and keep the crops used in the page (3:5 hero, 5:2 wide, 4:5, 3:4 and 3:2).

## Avoid

- Stock imagery of grapes, barrels, or generic wine glasses unless treated very moodily.
- Wine-rating badges, scores, or shopping-cart UI patterns.
- Bright primary colors or playful illustrations.
- Long marketing claims ("award-winning", "best wine list"). Let the list speak.
