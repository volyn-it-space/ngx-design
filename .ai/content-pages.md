# Content And Page Patterns

## Purpose

This repo is for HoReCa design catalog pages. Content should help people compare design directions and help AI agents adapt a chosen direction in another Angular 22+ project.

## Catalog Page Priorities

The landing page should make these clear fast:
- what design directions are available
- which type of HoReCa business each design fits
- how to open the visual demo
- how to copy the AI brief URL

## Design Route Priorities

Each design route should feel like a complete landing page concept, not a documentation page.

Common sections:
- hero
- highlights
- offer or menu preview
- gallery
- about or concept
- event, room, package, or service section when relevant
- booking/contact CTA

## AI Brief Rules

The catalog should have a selector brief under:

```text
src/assets/design/index.md
```

Use it to help AI agents choose the right design before opening a design-specific brief.

Every design route should have a matching markdown brief under:

```text
src/assets/design/<slug>.md
```

The brief should explain:
- best-fit business types
- visual direction
- Angular 22+ implementation requirements
- suggested sections
- content replacement rules
- what to avoid

## CTA Principles

Catalog CTAs should stay simple:
- view design
- copy AI brief

Design-demo CTAs may use realistic HoReCa labels:
- reserve a table
- view menu
- call now
- order delivery
- ask about events
- book a stay

## New Design Checklist

When adding a new design:

- create the page under `src/app/pages/<page-name>/`
- add the design entry in `src/app/design-catalog.ts` (slug, path, theme, title, description,
  best fit, and `category` when it is not a landing page direction)
- add one line for the slug to `designComponents` in `src/app/app.routes.ts`; the route path,
  `data.meta.title` and `data.meta.description` are generated from the catalog entry
- create `src/assets/design/<page-name>.md`
- update `src/assets/design/index.md`
- keep the page content aligned with the catalog title and description
- confirm the catalog landing page links and copy button work for the new design

`npm run build` fails when a catalog entry has no route component, no brief file, or no entry in
the selector brief.

## Links Inside A Design Page

`src/index.html` sets `<base href="/">`, so a plain `href="#menu"` leaves the demo and opens the
catalog home page. Link to sections of the same page with the router instead:

```html
<a routerLink="." fragment="menu">Menu</a>
```

Use `routerLink="/"` for links back to the catalog.

## Fonts And Photos In A Design Page

- A design loads its own Google Fonts: list the families in the catalog entry's `fonts` field
  (css2 `family=` syntax). `src/app/utils/design-fonts.guard.ts` adds one stylesheet link for the
  open design only. Always give a system fallback in the page SCSS, and name the same families and
  the Google Fonts URL in the design's brief.
- Demo photos are hotlinked from Pexels (`images.pexels.com`, not copied into `src/assets`). Ask
  for the exact crop in the URL (`fit=crop&w=...&h=...`) and pass the same `width` / `height` to
  `NgOptimizedImage`; mark only the hero photo `priority`. Say in the page footer that the photos
  are from Pexels and the venue is fictional.
- Body text is 16px or larger, nothing under 13px, text contrast at least 4.5:1, links and buttons
  at least 44px tall.
- `src/app/pages/speakeasy-cocktail/` is the reference page for these rules.

## Light And Dark Families

- Landing page directions (no `category`, or `landing-pages`) belong to the light or dark family
  through `theme`. Opening one switches the catalog chrome and the topbar "next design" rotation
  to that family (`src/app/utils/design-mode.guard.ts`) without changing the saved preference.
- The AI prompt cart holds one light and one dark landing direction. Design systems such as
  `ngx-ui` are not part of the rotation or the cart.
