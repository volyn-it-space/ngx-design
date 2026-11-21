# Redesign rules: ngx-design demo pages

Repo: `C:\Users\crack\work\base\ngx-design` (Angular 22, standalone, prerender-first design
catalog). Each design is one page under `src/app/pages/<slug>/` (`<slug>.component.ts|html|scss`)
plus an AI brief at `src/assets/design/<slug>.md`.

You rebuild the designs you were assigned so each is a full-depth landing page with its OWN layout.
The reference for quality, rules and code style is the already rebuilt page. Read it first:

- `src/app/pages/speakeasy-cocktail/speakeasy-cocktail.component.ts`
- `src/app/pages/speakeasy-cocktail/speakeasy-cocktail.component.html`
- `src/app/pages/speakeasy-cocktail/speakeasy-cocktail.component.scss`
- `src/assets/design/speakeasy-cocktail.md` (how the brief is written)

Then read the current three files and the brief of each design you own. Do NOT copy the speakeasy
layout: copy its rules and technique only. Follow the layout concept given in your task.

## Files you may touch

Only, for each assigned slug: the three files in `src/app/pages/<slug>/` and
`src/assets/design/<slug>.md`. Nothing else: not `design-catalog.ts`, not `app.routes.ts`, not
`index.md`, not other pages. Keep the file names, the exported component class name, and
`templateUrl` / `styleUrl`.

Do NOT run `npm`, `ng build`, a dev server, tests, or any git command. Other agents work in this
repo at the same time. The main session builds and checks everything afterwards.

## Hard rules

1. **No em dash (the long dash) anywhere**: not in copy, comments, or the brief. Use a colon,
   comma, period or parentheses. En dash is allowed only in number ranges.
2. **Palette**: keep the design's colors from the "Theme Colors" section of its brief (dark designs
   stay dark, light stay light). You may lighten or darken a text or accent color to reach
   contrast, and then update the value in the brief. Define colors as CSS variables on the page
   root class.
3. **Fonts**: pick the Google Fonts named in the brief's Typography section (one display + one
   body family; if the brief names none or names a system font, choose a fitting Google pair).
   Use them in SCSS with a system fallback, e.g.
   `--display: 'Fraunces', Georgia, serif;`. Do not add `<link>` tags or `@import`: fonts are
   loaded by the catalog from a list you REPORT BACK (see "Report").
4. **Readability**: body text 1rem (16px) or larger, nothing under 0.8125rem (13px). Text contrast
   at least 4.5:1 against its actual background (compute it; large headings 3:1 minimum). Every
   link and button at least 2.75rem (44px) tall (`min-height` + `inline-flex`).
5. **Depth**: 5 to 7 real sections, roughly 300 to 450 words of believable venue content
   (a fictional venue with its own name, menu or offer with prices, hours, address, phone).
   Invent the venue name; do not use the design name as the brand, and no single-letter logo box.
6. **Photos**: real photos from Pexels, 6 to 9 per page, including a hero photo.
   - Find them with the Pexels MCP tool `mcp__pexels__pexels_search_photos` (load it with
     ToolSearch `select:mcp__pexels__pexels_search_photos` if it is deferred). Always pass
     `per_page` of 6 or less, the output is large. Use `orientation` when you need one.
   - Use ONLY photo ids the tool returned. Never invent or guess an id. If the Pexels tool is not
     available to you, stop and say so in your report instead of making ids up.
   - Use the same helper as the reference page (`pexels(id, width, height, alt)`), which hotlinks
     `https://images.pexels.com/photos/<id>/pexels-photo-<id>.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=<w>&h=<h>`.
     Keep widths at 1200 or less.
   - Render with `NgOptimizedImage`: `[ngSrc]`, `[width]`, `[height]`, `[alt]`; `priority` on the
     hero photo only. Do not use `fill`, `src`, or a `loading` attribute. Give each image box an
     `aspect-ratio` that equals the requested crop, with `object-fit: cover`.
   - Write a plain, specific `alt` for every photo. Pick photos that match the venue type and the
     palette mood (dark designs: low light; light designs: daylight). Avoid photos where a
     person's face is the subject.
7. **Links**: `<base href="/">` is set, so a plain `href="#x"` breaks. Section links are
   `<a routerLink="." fragment="x">`, and each fragment needs a matching `id`. The link back to
   the catalog is `routerLink="/"` (keep one "Back to catalog" link in the footer). The final
   call to action is a `tel:` link with a fictional `+1 (555) 01x xxxx` number or
   `mailto:` at `example.com`. No `href="#"`, no dead buttons, no forms.
8. **Copy**: plain and concrete, sentence case headings, short sentences. No small label line
   above headings ("eyebrow"). No invented testimonials, awards, press quotes, ratings, guest
   counts, countdowns or discounts. The footer includes one line saying the venue is fictional
   and photos are from Pexels (see the reference footer).
9. **Layout**: must work from 360px to 1440px with no horizontal scroll. Use CSS grid with
   `minmax(0, 1fr)` tracks, `clamp()` for type and gaps, and 2 breakpoints (about 60rem and
   40rem). Header nav: 3 to 4 text links that wrap on a phone, no hamburger. Use
   `text-wrap: balance` on headings. Add a `prefers-reduced-motion` block if you use transitions.
   Hero h1: `clamp()` with a maximum near 4.5rem (larger only if the concept says so) so the hero
   and its button fit in the first screen at 1440x900.
10. **Angular**: standalone component, `imports: [RouterLink, NgOptimizedImage]`, no
    `changeDetection`, no `standalone: true`, data as `protected readonly` typed arrays in the
    class, native control flow (`@for` with `track`), tabs for indentation, single quotes in TS.
    Add `theme-focus` to the class list of every link and button (global focus ring helper).
    The template must compile: every name used in the template exists in the class, every `@for`
    has `track`, interfaces are declared in the `.ts` file (do not import from
    `../design-page.types`).
11. **SCSS size**: keep each component SCSS under 11 kB (a 12 kB build budget warns). Use one
    short BEM block name for the page, nest sparingly, no unused rules.

## Update the brief (`src/assets/design/<slug>.md`)

Keep its existing sections and tone. Update so it matches what you built:

- "Theme Colors": any value you changed.
- "Typography": the two Google families with weights and fallbacks, the full
  `https://fonts.googleapis.com/css2?...&display=swap` URL, sizes rule (16px body, 13px minimum).
- "Section Anatomy": one bullet per section of the new page, describing layout concretely
  (columns, photo crops, what stacks on a phone), like the reference brief.
- Add a "Photography" section: mood, treatment, the crops used, and that demo photos are
  hotlinked from Pexels and should be replaced with the venue's own.
- No BOM at the start of the file.

## Report (your final message)

For each slug, report exactly:

- `slug`
- `fonts`: the catalog array in Google css2 `family=` syntax, for example
  `['Playfair+Display:ital,wght@0,500;0,600;0,700;1,500', 'Inter:wght@400;500;600']`
  (only the weights and styles the page really uses)
- venue name, the sections you built (one line), and the Pexels ids used
- anything you could not do or are unsure about (be specific; do not claim it was built or
  tested in a browser, it was not)
