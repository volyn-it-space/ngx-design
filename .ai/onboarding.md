# Onboarding Guide

## Project Overview

This repository contains one Angular 21 website for an Angular project design catalog.

Typical goals:
- present available Angular project design directions clearly
- let people open each visual design route
- let AI agents open the selector brief at `/assets/design/index.md`
- let AI agents open public design-specific markdown briefs under `/assets/design/*.md`
- keep route metadata and design descriptions aligned
- rank well for catalog pages
- load fast on mobile

This is not a complex dashboard, CMS, or client-specific business website. Treat it as a prerender-first design catalog.

## Start Here

Read in this order unless the task is extremely narrow:

1. `AGENTS.md`
2. this file
3. the one or two `.ai` guides relevant to the task

Do not read everything by default.

## First Things To Understand

- there is only one design catalog in this repo
- the repo-level defaults live in `AGENTS.md`
- the website is static-first and SEO-oriented
- pages should stay simple and design-direction driven
- users need quick access to visual routes and AI brief URLs
- mobile experience matters more than fancy effects

## What To Inspect Before Editing

- `src/app/design-catalog.ts` if the task affects design names, slugs, descriptions, or metadata
- `src/assets/design/index.md` if the task affects the available design list or selection guidance
- `src/assets/design/*.md` if the task affects AI implementation guidance
- the nearest existing page
- shared layout pieces such as header, footer, topbar, landing cards, and route metadata
- current styling approach with Tailwind and local SCSS
- current SEO/meta setup if the task affects page content or structure

## What To Avoid

- do not restate repo-wide policy in task-specific notes
- do not overengineer static sections
- do not introduce unnecessary services or state
- do not add runtime bootstrap/API fetching for catalog metadata
- do not add heavy motion, sliders, or effects unless requested
- do not break prerender compatibility
