# SEO Guide

## Purpose

This website should be easy for search engines to understand and useful for browsing HoReCa design directions.

## Catalog SEO Workflow

This repository is a design catalog. SEO work often overlaps with rebranding and catalog bootstrap.

When the task is phrased as "change SEO", "update brand metadata", "prepare the catalog", or similar, inspect this checklist instead of changing only one file:

- `src/app/design-catalog.ts`
  Shared catalog SEO values, production origin, and design entries.
- `src/app/app.config.ts`
  Global metadata defaults wired through `provideNgxCore({ meta.defaults })`.
- `src/app/app.routes.ts`
  Per-page route metadata such as page-specific titles and descriptions.
- `src/index.html`
  Seed HTML title, description, author, robots, canonical, Open Graph, Twitter, and favicon links.
- `src/assets/design/index.md`
  Public selector brief that helps AI agents choose a design.
- `src/assets/design/*.md`
  Public design-specific AI briefs that should exist for every design route.
- `src/assets/`
  Replace catalog brand assets such as `logo.png`, `favicon.png`, and any public share images if present.
- `CNAME`
  Production domain for deployed static hosting.

When changing SEO, also verify that visible page content still matches the metadata:

- the main H1 should agree with the page title intent
- hero and intro copy should support the description
- design name, audience, route, and AI brief should be real text when relevant
- CTA labels should match the catalog goal

## Core SEO Rules

- every page should have a clear unique title
- every page should have a meaningful description
- keep headings structured and readable
- use semantic HTML where possible
- keep important catalog information in crawlable text, not only in images

## Content Rules

- write naturally for users first
- avoid keyword stuffing
- keep page copy specific to the design direction
- make sure core positioning appears in real text
- do not bury important links below decorative sections

## Technical Direction

- keep routes clean
- preserve prerender compatibility
- avoid content that appears only after unnecessary client-side logic
- ensure internal links are easy to follow

## Route Meta Pattern

This repo uses app-level metadata defaults and route-level overrides.

- keep shared defaults in `provideNgxCore({ meta.defaults })` in `src/app/app.config.ts`
- source shared catalog metadata from `src/app/design-catalog.ts`
- when adding a new page route, fill `data.meta` with page-specific title and description
- do not set empty strings for `title`, `description`, `image`, or `robots` in route data
- let pages inherit shared `image` and `robots` unless the page truly needs different values
- use `titleSuffix` intentionally:
  - default pages can rely on the global suffix
  - the home route may set `titleSuffix: ''` to avoid repeating the catalog name

## `index.html` Expectations

Treat `src/index.html` as the static seed document that should already look valid before Angular applies route-level metadata.

- replace catalog brand strings, URLs, canonical, and social image URLs
- keep robots consistent with the published catalog
- update favicon references when brand assets change
- adjust values there rather than deleting the tags unless the project has a clear replacement strategy

## Asset Expectations

Brand assets under `src/assets/` are part of SEO and project bootstrap, not just UI polish.

- replace `logo.png` when the catalog brand changes
- replace `favicon.png` when the catalog brand changes
- keep asset filenames stable when possible to reduce unnecessary code churn
- if filenames change, update every reference such as `src/index.html`, `src/app/design-catalog.ts`, and templates using `ngSrc`

## Done Criteria

An SEO task is not complete just because route meta changed.

Consider the task complete only when the relevant surfaces are aligned:

- shared catalog data
- route metadata
- seed HTML metadata
- brand assets
- deployment domain and copied AI brief URLs
- visible page copy
- selector brief and design-specific briefs

Example route pattern:

```ts
{
	path: 'cafe-bakery',
	loadComponent: () =>
		import('./pages/cafe-bakery/cafe-bakery.component').then((m) => m.CafeBakeryComponent),
	data: {
		meta: {
			title: designPages[0].title,
			description: designPages[0].description,
		},
	},
}
```

## Page Intent

Each page should serve one clear design intent:
- catalog home -> design overview and AI brief access
- design route -> one complete visual direction
- selector brief markdown -> design choice guidance for agents
- design-specific brief markdown -> implementation guidance for agents adapting another Angular 21+ project
