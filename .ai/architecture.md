# Architecture Guide

## Overview

This repository contains one Angular 21 HoReCa design catalog with multiple visual demo pages.

The architecture should stay lightweight and fit prerendered design demos. Treat `AGENTS.md` as the source of truth for repo-wide defaults and use this guide for structure choices.

## Core Stack

- Angular 21
- TypeScript 5
- Angular SSR/prerender
- Tailwind CSS
- SCSS

## Project Direction

- optimize for static design routes first
- prefer clear page composition over app-like architecture
- keep reuse practical, not abstract for its own sake
- preserve prerender safety by default

## Suggested Structure

Keep code predictable and easy to scan.

- pages: `src/app/pages/<page-name>/`
- layouts: `src/app/layouts/`
- shared UI/directives/pipes/interfaces/services: `src/app/<type>/`
- utility guards/helpers: `src/app/utils/`
- design registry: `src/app/design-catalog.ts`
- AI selector brief: `src/assets/design/index.md`
- AI implementation briefs: `src/assets/design/*.md`
- global theme tokens: `src/styles/_theme.scss`
- global styles entry: `src/styles.scss`

## Page Composition

Prefer section-based page composition.

Typical demo sections:
- hero
- highlights
- menu or offer preview
- gallery
- about or concept
- events, rooms, packages, or offers where relevant
- contact / map / CTA
- footer

Only extract shared sections when they are clearly reused across multiple pages.

## Routing And Prerender

- keep routes simple and crawlable
- each page should work with prerender by default
- do not assume browser-only APIs are available during build
- guard browser-specific code when necessary
- keep app-wide meta defaults in `src/app/app.config.ts`
- keep page-specific metadata in route `data.meta`, sourced from `src/app/design-catalog.ts` when possible

## Data Strategy

For catalog pages:
- prefer `src/app/design-catalog.ts` for shared design metadata
- prefer page-local constants for section content
- keep AI design-selection guidance in `src/assets/design/index.md`
- keep AI guidance in `src/assets/design/*.md`
- avoid API/CMS integration unless explicitly required

This catalog should not use runtime bootstrap data. Keep design metadata static and reviewable.
