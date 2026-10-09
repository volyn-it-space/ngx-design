# Angular Project Design Catalog

Angular 21+ static design catalog for reusable project landing page directions. The deployed site is meant for two audiences:

- people open the visual design URLs to compare styles
- AI agents open the markdown brief URLs under `/assets/design/*.md` to understand how to adapt a selected design in another Angular project

This repository is not a CMS, dashboard, or client-specific website. It is a prerendered catalog of reusable visual directions.

## Current Designs

- `/cafe-bakery` - coffee shops, bakeries, pastry venues, breakfast cafes
- `/cozy-family` - family restaurants, casual dining, guest houses
- `/fine-dining` - chef-led restaurants and tasting menu venues
- `/modern-minimal` - contemporary hospitality with restrained UI
- `/classic-elegant` - premium traditional restaurants and private events
- `/traditional-local` - national cuisine, ethnic cafes, family inns
- `/event-banquet` - wedding venues, banquet halls, conference spaces
- `/boutique-hotel` - design hotels, guesthouses, city stays
- `/resort-spa` - wellness hotels, spa resorts, retreats
- `/rustic-farmhouse` - farm-to-table venues and countryside stays
- `/luxury-dark` - high-end lounges, private venues, luxury restaurants

## AI Brief URLs

The catalog has a public selector brief for AI agents that need to choose a design before implementing:

```text
/assets/design/index.md
```

Every design also has a public markdown brief:

```text
/assets/design/cafe-bakery.md
/assets/design/cozy-family.md
/assets/design/fine-dining.md
/assets/design/modern-minimal.md
/assets/design/classic-elegant.md
/assets/design/traditional-local.md
/assets/design/event-banquet.md
/assets/design/boutique-hotel.md
/assets/design/resort-spa.md
/assets/design/rustic-farmhouse.md
/assets/design/luxury-dark.md
```

The catalog landing page copies full URLs using the current browser origin, including the selector brief URL, so the same code works after deploying this project to another domain.

## How To Use This Catalog

1. Open the deployed catalog.
2. Pick a visual direction by opening a design route.
3. If the design is already known, copy the design-specific AI brief URL from the catalog card.
4. If the AI should choose the design, give it `/assets/design/index.md`.
5. Tell the agent to adapt the target Angular 21+ project using the selected design brief and the target project's own content.

The brief is guidance, not code to copy directly. The target project should keep its own routing, content model, assets, metadata, and business details.

## Single Source Of Truth

Catalog metadata and design entries live in:

```text
src/app/design-catalog.ts
```

Update this file when adding, renaming, or describing a design. Routes, navigation, footer links, metadata defaults, and landing cards should stay aligned with it.

When adding a design:

1. Add a new entry to `designPages`.
2. Add a lazy route in `src/app/app.routes.ts`.
3. Create the page under `src/app/pages/<slug>/`.
4. Create the AI brief at `src/assets/design/<slug>.md`.
5. Update the selector brief at `src/assets/design/index.md`.
6. Build and confirm the route is prerendered and markdown assets are copied.

## Technical Stack

- Angular 21
- TypeScript 5
- Angular SSR/prerender
- Tailwind CSS v4
- SCSS
- Zoneless Angular
- `@wawjs/ngx-core` metadata guard

The production build outputs:

```text
dist/app/browser
dist/app/server
```

Static hosting should publish `dist/app/browser`.

## Angular Rules For Designs

- Use standalone components.
- Do not add NgModules.
- Use `ChangeDetectionStrategy.OnPush`.
- Use signals for local UI state.
- Use native control flow: `@if`, `@for`, `@switch`.
- Prefer Tailwind for layout, spacing, typography, sizing, responsive behavior, and common styling.
- Keep browser-only code guarded or event-only so prerender remains safe.
- Use `NgOptimizedImage` for static images when feasible.

## Development

Install dependencies:

```bash
npm install
```

Start local development:

```bash
npm start
```

Build production output:

```bash
npm run build
```

Run the optional SSR server after building:

```bash
npm run serve:ssr:app
```

## Deployment

GitHub Pages deployment is handled by:

```text
.github/workflows/deploy.yml
```

The custom domain is configured in:

```text
CNAME
```

If this catalog is copied to another repository or deployed to another domain, update:

- `CNAME`
- `src/app/design-catalog.ts` `catalogMeta.productionOrigin`
- canonical and social URLs in `src/index.html`
- logo and favicon assets if the catalog brand changes

The copied AI brief URLs use the current browser origin at runtime, so no code change is required for that part.

## Project Structure

```text
src/
  app/
    design-catalog.ts
    app.config.ts
    app.routes.ts
    app.routes.server.ts
    layouts/
    pages/
  assets/
    design/
      index.md
      *.md
    favicon.png
    logo.png
  styles/
  styles.scss
```

## Styling

Use Tailwind utilities for most layout and UI work. Use component SCSS for design-specific art direction, complex selectors, and local visual systems.

Global tokens live in:

```text
src/styles/_theme.scss
```

Global styles enter through:

```text
src/styles.scss
```

## SEO

The catalog is prerender-first. Keep every design route crawlable and give every route a specific title and description.

Global defaults are configured in:

```text
src/app/app.config.ts
```

Seed metadata is configured in:

```text
src/index.html
```

Route canonical URLs are handled by:

```text
src/app/utils/route-seo.guard.ts
```

## License

MIT
