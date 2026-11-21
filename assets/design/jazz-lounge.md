# Jazz Lounge Design Brief


## Visual Direction

Smooth, intimate, evening tempo. The page should feel like a 10pm set at a hotel lounge: midnight blue room, plum velvet booths, brass lampshades, and vintage cream linen. Music first, food and drink in service of the room.

## Theme Mode

- **Theme mode:** dark
- **Why:** the lounge metaphor is inherently low-light. Brass and cream accents need the deep blue ground to register as candlelit; on white they flatten into generic premium colors.

## Theme Colors

Map these colors onto the target project's existing theme tokens, CSS variables, design tokens, global styles, stylesheet variables, or component styles. If the project has no theme system, introduce the smallest local color structure needed for this design.

- background primary: `#0E1530` (midnight blue)
- background secondary: `#1A2240`
- background tertiary: `#252E50`
- text strong: `#F2EAD3` (vintage cream)
- text: `#D0C5A6`
- text muted: `#A8A088` (6.7:1 on midnight)
- primary accent: `#C4A574` (warm brass, lightened for contrast)
- secondary accent: `#5A2A4A` (plum - secondary accent)
- border: `#28304D`
- medium shadow: `0 10px 30px rgba(0, 0, 0, 0.5)`
- focus ring: `0 0 0 3px rgba(184, 153, 104, 0.40)`


## Typography

- **Display:** `Cormorant Garamond` (Google Fonts, weights 500, 600, italic 500), fallback `Georgia, serif`. Italic hero and wordmark.
- **Body:** `Lora` (Google Fonts, weights 400, 500), fallback `Georgia, serif`. 16px minimum, line-height 1.7, nothing under 13px.
- **Loading:** `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Lora:wght@400;500&display=swap`
- **Voice:** warm and a little late. Acts, styles, set times, cover.

## Section Anatomy

- **Header:** italic brass wordmark and four text links.
- **Hero:** left: italic headline, lede, a framed poster-like Tonight bill (act, style, sets, cover) and a reserve button; right: stage photo (3:2). Stacks on a phone.
- **This week:** heading, text and a tall sax photo (hidden on small screens) beside six nights as a list (day, act and style, cover). Friday and Saturday have a brass border.
- **Supper:** three groups (to start, to follow, after the set) with prices on hairlines under a plum rule.
- **The room:** heading, text and three numerals (seats, stools, first set) beside two 4:5 photos, the second offset down. 
- **Reserve:** plum-tinted panel with a brass border: text and phone button, plus address and hours.
- **Footer:** wordmark, fictional venue line, link back to the catalog.

## Photography

- Dim stage and bar light, warm and blue-black. Lightly muted (`saturate(0.85) brightness(0.92)`).
- The demo hotlinks Pexels photos. Replace them with the club own photos and keep the crops (3:2 hero, 3:4 sax, 4:5 room).

## Avoid

- Bright daylight imagery or summer-festival energy.
- Generic stock photos of saxophones or pianos in isolation - prefer wide room shots.
- Long bios for every musician; one or two lines is enough.
- Aggressive marketing copy. The lounge sells itself through tempo, not claims.
