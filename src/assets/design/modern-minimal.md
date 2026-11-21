# Modern Minimal Design Brief


## Visual Direction

Clean, spacious, ordered, and direct. The design should remove visual noise and make the offer feel premium through clarity - pure white surfaces, deep charcoal text, restrained dividers, generous whitespace.

## Theme Mode

- **Theme mode:** light
- **Why:** white-space is the design. The "premium through clarity" promise depends on a bright neutral ground. Dark mode is a coherent alternate but reframes the experience.

## Theme Colors

Map these colors onto the target project's existing theme tokens, CSS variables, design tokens, global styles, stylesheet variables, or component styles. If the project has no theme system, introduce the smallest local color structure needed for this design.

- background primary: `#FFFFFF` (pure white)
- background secondary: `#F9F9F9` (soft gray)
- background tertiary: `#F2F2F2`
- text strong: `#111111`
- text: `#2E2E2E`
- text muted: `#666666` (5.7:1 on white)
- primary accent: `#1A1A1A` (charcoal - primary accent)
- secondary accent: `#7A7A7A` (mid-gray - secondary accent)
- border: `#DCDCDC` (hairlines); section rules use `#111111`
- medium shadow: `0 8px 20px rgba(0, 0, 0, 0.06)`
- focus ring: `0 0 0 3px rgba(26, 26, 26, 0.30)`


## Typography

- **Display and body:** `Inter` (Google Fonts, weights 300, 400, 500, 600), fallback `system-ui, sans-serif`. The hero headline is weight 300 at up to 6rem with -0.04em tracking; everything else is 16px or larger, nothing under 13px.
- **Loading:** `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap`
- **Voice:** plain statements. Numbers, not adjectives. No cards, no shadows, square corners.

## Section Anatomy

- **Header:** 12-column grid, wordmark left, four text links from column 7, a black hairline below.
- **Hero:** very large light headline over nine columns, lede and a square black button in columns 1 to 5, then one large 3:2 photo from column 4 to the edge (offset). Full width on a phone.
- **Sections 01 to 04 (Menu, Space, Approach, Visit):** each starts with a black hairline; the number sits in column 1, the title in columns 2 and 3, content from column 4. On a phone the number and title sit on one row and content spans the full width.
- **Menu:** three plain columns (morning, midday, drinks) with hairline rows and plain numeric prices.
- **Space:** one paragraph and three 3:4 photos (second one offset down; two on a phone).
- **Approach:** three principles with a hairline top.
- **Visit:** a five-row details list and a square phone button.
- **Footer:** wordmark, fictional venue line, link back to the catalog.

## Photography

- Bright, plain rooms: wood, plaster, one window. No filter, no overlays.
- The demo hotlinks Pexels photos. Replace them with the venue own and keep the crops (3:2 hero, 3:4 space).

## Avoid

- Decorative gradients, busy backgrounds, loud illustrations.
- Unnecessary hover effects, animation, or transitions over 200ms.
- Multiple competing CTAs per section.
- Justified text, all-caps body copy, or letterspaced paragraphs.
