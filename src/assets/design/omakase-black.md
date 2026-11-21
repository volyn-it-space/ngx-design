# Omakase Black Design Brief


## Visual Direction

Precise, quiet, ceremonial. The page should feel like a sumi-ink scroll: deep black ground, rice-paper text, a single lacquer-red accent, and bamboo green used sparingly. Every element earns its place; restraint is the design.

## Theme Mode

- **Theme mode:** dark
- **Why:** the sumi-ink/rice-paper contrast is the entire visual identity. Light mode inverts the metaphor (paper -> ink) and loses the meditative tone the page is meant to set.

## Theme Colors

Map these colors onto the target project's existing theme tokens, CSS variables, design tokens, global styles, stylesheet variables, or component styles. If the project has no theme system, introduce the smallest local color structure needed for this design.

- background primary: `#101010` (sumi ink)
- background secondary: `#1A1A1A`
- background tertiary: `#262626`
- text strong: `#F5F1E8` (rice paper)
- text: `#CDC6B4`
- text muted: `#A49E8E` (6.9:1 on sumi ink)
- primary accent: `#8E1F1F` (lacquer red - primary accent)
- secondary accent: `#3A5A3A` (bamboo green - secondary accent)
- border: `#262626`
- medium shadow: `0 10px 30px rgba(0, 0, 0, 0.55)`
- focus ring: `0 0 0 3px rgba(142, 31, 31, 0.40)`


## Typography

- **Display:** `Cormorant Garamond` (Google Fonts, weights 300, 400, 500), fallback `Georgia, serif`. Quiet headings, course names, large numerals.
- **Body:** `Inter` (Google Fonts, weights 400, 500), fallback `system-ui, sans-serif`. 16px minimum, line-height 1.75, nothing under 13px.
- **Loading:** `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Inter:wght@400;500&display=swap`
- **Voice:** spare and exact. Courses, seats, minutes. Red is used for one hairline only, never for text.

## Section Anatomy

- **Header:** centered letter-spaced wordmark with four text links.
- **Hero:** one narrow centered column: a small quiet headline, one line of lede, a single 3.5rem red hairline, then one wide low counter photo (15:7; 4:3 on a phone).
- **The menu:** ten numbered courses in two columns on hairlines (one column on a phone), then one price line.
- **The counter:** three large light numerals (seats, seatings, minutes) above a row of three photos (3:2, 3:4, 3:2; the tall one is hidden on a phone).
- **Before you come:** four policy items on hairlines in a narrow column.
- **Reservations:** centered heading, hours, an outlined phone button and the address.
- **Footer:** centered wordmark, fictional venue line, link back to the catalog.

## Photography

- Low, warm light: a chef at work, nigiri on black plates. Muted (`saturate(0.8) brightness(0.88)`). Avoid faces as the subject.
- The demo hotlinks Pexels photos. Replace them with the counter own photos and keep the crops (15:7 hero, 3:2 and 3:4 row).

## Avoid

- Saturated photography or busy backgrounds. Black-and-white or low-saturation images only.
- Multi-column layouts at hero - keep one center column.
- Long marketing paragraphs. Each section under 60 words.
- Decorative pattern fills, cherry blossom clip art, or cliched "asian" motifs.
