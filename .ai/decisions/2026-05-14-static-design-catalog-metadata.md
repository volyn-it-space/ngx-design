# Static Design Catalog Metadata

- Date: 2026-05-14
- Status: accepted
- Related files: `src/app/design-catalog.ts`, `src/assets/design/index.md`, `src/assets/design/*.md`, `src/app/app.routes.ts`, `src/app/app.config.ts`

## Context

The repository is now a public HoReCa design catalog. People use route URLs to view designs, and AI agents use markdown URLs under `/assets/design/*.md` to understand how to adapt a selected design in another Angular 21+ project.

Runtime bootstrap data made the catalog harder to reason about because design names, route metadata, and public AI brief links should be static, reviewable, and deployable without an API.

## Decision

Keep catalog metadata static in `src/app/design-catalog.ts`.

Every design entry should have:
- label
- slug
- route path
- icon
- route title
- route description
- best-fit audience

Every design route should have a matching public markdown brief in `src/assets/design/<slug>.md`.

The catalog should also have a selector brief at `src/assets/design/index.md` so AI agents can choose a design when the user has not already selected one.

Do not add runtime bootstrap/API fetching for catalog metadata unless a future task explicitly changes the product direction.

## Consequences

- routes, navigation, footer links, landing cards, and metadata defaults can be reviewed from one source
- the deployed catalog works as static hosting output
- copied AI brief URLs are stable public assets
- AI agents can use one generic brief to choose among all designs
- client-specific business data belongs in target projects, not in this catalog
