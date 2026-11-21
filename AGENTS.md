# Agent Guide

This repository contains a single Angular 22 project design catalog. It is a static, prerender-first website where people view design routes and AI agents read public markdown briefs under `src/assets/design/*.md`.

## Quick Reference

- Stack: Angular 22, TypeScript 6, Angular SSR/prerender, Tailwind CSS, SCSS
- Package manager: `npm`
- Main goal: fast, clean, SEO-friendly Angular project design demos and AI implementation briefs
- Primary output: prerendered static site from `dist/app/browser`
- Build: `npm run build` (production prerender build plus `tools/seo/generate-static-seo.mjs`);
  `npm run seo` regenerates only `sitemap.xml` / `robots.txt`; there are no tests

## Universal Rules

- Treat this repo as a design catalog first, not as a complex application shell.
- Prefer simple, static, content-first pages over heavy abstractions.
- Preserve prerender compatibility by default.
- Keep changes small, clear, and easy to review.
- Prefer Tailwind for layout, spacing, typography, sizing, responsive behavior, and utility styling.
- Use `src/app/design-catalog.ts` as the source of truth for design metadata.
- Use local page content/config over new services unless reuse is real and repeated.
- Do not introduce CMS, API fetching, dashboards, or heavy state management unless explicitly requested.

## Default Technical Stance

Use these as defaults unless the local code or the task gives a concrete reason to do otherwise:

- Angular 22 modern patterns only.
- Standalone components are the default. Do not add NgModules for new work.
- Do not set `changeDetection` explicitly; OnPush is the Angular 22 default. Use `ChangeDetectionStrategy.Eager` only when eager change detection is required.
- Use signals for local UI state and derived state.
- Use Angular Signal Forms (`@angular/forms/signals`) for all form work; do not add Reactive or template-driven forms.
- Prefer native control flow (`@if`, `@for`, `@switch`) in templates.
- Use Angular bindings instead of manual DOM work.
- Use `NgOptimizedImage` for static images when feasible.
- Keep browser-only code guarded so prerender remains safe.

## Decision Memory

Durable repo-wide rules belong in `.ai/decisions/`, not duplicated ad hoc across docs or task notes.

Read `.ai/decisions/index.md` when:

- a task changes a long-lived repo convention
- a task resolves an ambiguity likely to come up again
- you are unsure whether a rule is temporary guidance or a durable policy

## Read Only What You Need

Start here, then open only the one or two relevant files in `.ai/`:

- `.ai/onboarding.md`
- `.ai/architecture.md`
- `.ai/code-style.md`
- `.ai/content-pages.md`
- `.ai/seo.md`
- `.ai/media.md`
- `.ai/tooling.md`
- `.ai/task-execution.md`

Suggested loading order:

1. `AGENTS.md`
2. one or two relevant `.ai` guides
3. `.ai/decisions/index.md` only if the task may affect durable policy

## Catalog Bootstrap Reminder

This repo is a design catalog. When a user asks to "change SEO", "rebrand the site", "prepare the catalog", or similar, do not stop at route meta only.

At minimum, inspect these surfaces and update the ones that still contain catalog values:

- `src/app/design-catalog.ts` for shared catalog name, title, description, image, production origin, and design entries
- `src/app/app.config.ts` for global metadata defaults that consume catalog data
- `src/app/app.routes.ts` for per-page `data.meta` overrides
- `src/index.html` for seed title/meta/canonical/social tags that should match the real project
- `src/assets/` for replaceable brand assets such as `logo.png` and `favicon.png`
- root `CNAME` for the production domain (absent in the template; created at bootstrap)
- `src/assets/design/*.md` so AI brief URLs match available designs
- `src/assets/design/index.md` so AI agents can choose among all available designs

Also check visible content so headings and hero copy stay aligned with the SEO metadata.
