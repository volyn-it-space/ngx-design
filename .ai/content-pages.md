# Content And Page Patterns

## Purpose

This repo is for HoReCa design catalog pages. Content should help people compare design directions and help AI agents adapt a chosen direction in another Angular 21+ project.

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
- Angular 21+ implementation requirements
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
- add a clean route in `src/app/app.routes.ts`
- add the design entry in `src/app/design-catalog.ts`
- create `src/assets/design/<page-name>.md`
- update `src/assets/design/index.md`
- give the route a specific `data.meta.title`
- add `data.meta.description`
- keep the page content aligned with the route metadata
- confirm the catalog landing page links and copy button work for the new design
