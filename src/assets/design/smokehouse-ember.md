# Smokehouse Ember Design Brief


## Visual Direction

Smoke, fire, leather, and bronze. The page should feel like a low-lit grill room at service: charcoal walls, ember orange in the embers, leather banquettes, no apology for the carnivore agenda.

## Theme Mode

- **Theme mode:** dark
- **Why:** ember orange only reads as fire on a charcoal ground; on a bright surface it flattens to "construction safety orange". The smoke/leather mood requires darkness.

## Theme Colors

Map these colors onto the target project's existing theme tokens, CSS variables, design tokens, global styles, stylesheet variables, or component styles. If the project has no theme system, introduce the smallest local color structure needed for this design.

- background primary: `#1C1A18` (charcoal)
- background secondary: `#2A2521`
- background tertiary: `#3A332D`
- text strong: `#F4EBDA` (smoked cream)
- text: `#C8B89E`
- text muted: `#A89B88` (6.4:1 on charcoal)
- primary accent: `#E8602C` (ember orange, lightened for contrast)
- secondary accent: `#8B5A2B` (leather brown - secondary accent)
- border: `#3A332D`
- medium shadow: `0 10px 30px rgba(0, 0, 0, 0.5)`
- focus ring: `0 0 0 3px rgba(217, 80, 30, 0.40)`


## Typography

- **Display:** `Bebas Neue` (Google Fonts, weight 400), fallback `Impact, sans-serif`. Uppercase headings, cut names and prices.
- **Body:** `Inter` (Google Fonts, weights 400, 500, 600, 700), fallback `system-ui, sans-serif`. 16px minimum, nothing under 13px.
- **Loading:** `https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap`
- **Voice:** direct and confident. Cuts, weights, wood, cook time.

## Section Anatomy

- **Header:** ember wordmark with a one-line note, four text links.
- **Hero:** a 21:9 fire photo strip with an ember underline, then a heavy headline on the left and lede with two actions on the right. Stacks on a phone.
- **The board:** bordered panel with a leather top rule. Cuts in two columns: name, price per half pound, wood and hours on a dashed line.
- **How we smoke:** four numbered steps in a row (two, then one per row), each with a 4:3 photo, time and text.
- **Sides and sauces:** left, sides list with prices and a four-sauce list; right, a tall (4:5) photo.
- **Book a table:** photo (4:3) beside heading, text, phone button and visit details.
- **Footer:** wordmark, fictional venue line, link back to the catalog.

## Photography

- Fire, smoke, meat on wood. Warm and a little dark, lightly muted (`saturate(0.9) brightness(0.92)`).
- The demo hotlinks Pexels photos. Replace them with the pit's own and keep the crops (21:9 hero, 4:3 steps and room, 4:5 sides).

## Avoid

- Pastels, floral motifs, or cozy/family copy.
- Vegetarian-forward hero imagery (sides can appear in a sub-section but don't lead with them).
- Cute mascots, cartoon flames, or playful illustrations.
- Listing every menu item - preview signature cuts, link to full PDF or sub-page for the rest.
