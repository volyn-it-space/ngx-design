# Redesign plan: full-depth design pages

Status on 2026-11-16. Work was stopped by the developer. Nothing is committed. Delete this file
and `redesign-rules.md` when the redesign is finished.

Goal (agreed with the developer): every landing design gets full depth with its own layout, real
Pexels photos, its own Google Fonts, readable text sizes and passing contrast. Content may be
improved freely (fictional venue name instead of the design name).

Rules for every page: `.ai/redesign-rules.md`. Reference page: `src/app/pages/speakeasy-cocktail/`.

## Already done (not committed)

- Bug fixes and catalog improvements from the first review pass (see `git diff`).
- `fonts` field on catalog entries + `src/app/utils/design-fonts.guard.ts` (per-design Google
  Fonts link), `images.pexels.com` preconnect in `src/index.html`.
- WAW Prime tab hidden (`hidden: true` in `designCategories`).
- `speakeasy-cocktail`: finished and checked in the browser at 1440 and 375.
- Cache pattern fix in `ngx-default/src/server.ts` and `ngx-horeca/src/server.ts`.

## State of the 20 remaining designs (all 20 finished 2026-11-17; this file and redesign-rules.md can now be deleted)

| State | Designs |
| --- | --- |
| Finished, built, audited (no overflow, no broken photos, no text under 13px, links 44px+) at 1024 and 375 wide; brief and catalog `fonts` done | `cafe-bakery`, `luxury-dark`, `neon-night`, `smokehouse-ember`, `wine-cellar`, `whisky-den`, `omakase-black`, `jazz-lounge`, `industrial-brewery`, `dark-roast-coffee`, `botanical-bar`, `fine-dining`, `cozy-family`, `classic-elegant`, `modern-minimal`, `traditional-local`, `event-banquet`, `boutique-hotel`, `resort-spa`, `rustic-farmhouse` |
| Not started (old scaffold, no photos, brief not updated, no `fonts`) | none |

`npm run build` passes (24 routes). Tip: write files with the Write tool, not shell heredocs
(apostrophes break them). `.ai`-external helper for briefs is not kept; edit briefs directly.

## Steps

1. **Make the build pass again.** Finish `cafe-bakery` (`.html`, `.scss`, brief), or run
   `git checkout -- src/app/pages/cafe-bakery/cafe-bakery.component.ts` and reapply only the
   em dash fix. Finishing is preferred: the photo list is already chosen.
2. **Finish the four started dark pages**: `luxury-dark`, `neon-night`, `smokehouse-ember`
   (write the SCSS for the new markup), `wine-cellar` (review). Update each brief.
3. **Rebuild the six other dark pages**: `whisky-den`, `omakase-black`, `jazz-lounge`,
   `industrial-brewery`, `dark-roast-coffee`, `botanical-bar`.
4. **Rebuild the nine other light pages**: `cozy-family`, `classic-elegant`,
   `modern-minimal`, `resort-spa`,
   `rustic-farmhouse`.
5. **Add `fonts` to each catalog entry** in `src/app/design-catalog.ts` (Google css2 `family=`
   syntax, only the weights the page uses).
6. **Build**: `npm.cmd run build` must pass with 24 routes, no errors, no style budget warnings
   (12 kB per component SCSS).
7. **Check every page in the browser** at 1440 and 375 wide: no broken photos, no horizontal
   scroll, no text under 13px, links at least 44px tall, text contrast at least 4.5:1, section
   links scroll, fonts load. Fix what fails.
8. **Catalog follow-ups** (smaller, after the pages): update `README.md` "Current Designs" (lists
   only 11 of 21), refresh `src/assets/design/index.md` descriptions if a design's character
   changed, and consider photo thumbnails on the catalog home cards.

Work in small batches (two or three designs at a time) and build after each batch. The first
attempt ran ten parallel agents and used up the usage limit twice before any page was finished.

## Layout concept per design

Each design must look different from the others. No arched photo frame, dotted-leader menu card
or roman-numeral list outside `speakeasy-cocktail`.

### Light

- **cafe-bakery**, "the morning counter": centered hero above one wide counter photo with a
  rounded top; "Out of the oven today" timetable; two-column menu (coffee / bakes) with prices;
  uneven grid of 4 to 5 photos; visit section with an opening-hours table.
- **cozy-family**, "the family table": split hero with two or three overlapping, slightly rotated
  photos; "This week" row of daily specials (Mon to Sun); three fact blocks for families with a
  photo; short story with one photo; visit with hours and phone button.
- **fine-dining**, "the tasting menu": wide plated-dish photo with the headline panel below it
  (not over it); seven numbered courses in one narrow centered column, one menu price; chef's
  note beside a kitchen photo; small wine pairing table; reservation with seatings and policy.
- **classic-elegant**, "the carte": symmetrical centered layout with thin ornamental rules; hero
  with a framed landscape dining-room photo; a la carte in two columns with right-aligned prices
  on a hairline; private dining band with two photos and capacity facts; history paragraph;
  reservations and dress code.
- **modern-minimal**, "the index": strict 12-column grid, hairlines, very large light headline
  (up to 6rem), sections numbered 01 to 05 in a left rail; one large offset hero photo, few
  photos after; three-column plain menu; three principles; spare hours and contact table. No
  cards, no shadows, square corners.
- **traditional-local**, "the house recipes": hero with a CSS folk-pattern band and a hearth
  photo; four signature dishes with photos and prices; heritage timeline of four dated
  milestones; "from the region" suppliers list; visit section.
- **event-banquet**, "plan the day": wide hall photo and a bar of three capacity facts; three
  halls as a real table on desktop, stacked cards on a phone, one photo per hall; three package
  tiers with "from" prices; four-step planning timeline; enquiry with phone and email.
- **boutique-hotel**, "the stay": tall room photo and a plain-text facts strip (check-in,
  check-out, rooms, neighborhood), not a form; three room types as alternating photo/text rows
  with "from" price; neighborhood guide as five numbered places with walking minutes; two-column
  amenities list; booking section.
- **resort-spa**, "a day here": very tall calm photo beside a narrow text column; treatments in
  two lists (name, minutes, price); vertical timeline from morning to night, two moments with
  photos; three stay packages; closing full-width photo band with the button under it. Load the
  Better Design `wellness-sites` guidance first.
- **rustic-farmhouse**, "what's growing": three-photo collage hero; four-column seasons calendar
  with autumn marked by a border; suppliers list with distance in km; table and rooms blocks with
  photos; visit with directions. Square photos with thick paper-like borders.

### Dark

- **luxury-dark**, "the private floor": centered serif title inside a thin gold inset frame,
  21:9 interior photo below; three private rooms as alternating wide rows; short centered
  signature menu; concierge list in two columns; reservation section. No filled cards.
- **whisky-den**, "the ledger": split hero with a wide low-light bar photo; whisky list as a
  ledger table grouped by region (name, age, cask, price per dram); three tasting flights;
  lounge section with two photos and house facts; visit section.
- **neon-night**, "the ticket machine": huge condensed uppercase headline with neon glow beside
  a neon-sign photo; menu as ticket-machine tiles (number, dish, price, tag); week of seven day
  blocks with closing times; three-photo strip; find-us with nearest station.
- **omakase-black**, "the counter": one narrow centered column, large gaps; small quiet headline
  and one wide low counter photo; 10 to 12 numbered courses in two columns, one menu price;
  three large numerals (seats, seatings, minutes per seating); reservation policy list. Red only
  for one hairline and one small seal, never for text.
- **wine-cellar**, "the list": tall narrow cellar photo on the left, headline on the right; wine
  list table by region (wine, grape, year, glass, bottle); three flights; three large numerals
  beside a photo; tastings as "First Thursday" style list; visit section.
- **jazz-lounge**, "tonight's bill": hero with a poster-like "Tonight" bill (act, style, set
  times, cover) and a stage photo beside the headline; weekly lineup list with Friday marked by a
  border; supper menu in three groups; the room with two photos and seating facts; reserve.
- **smokehouse-ember**, "the pit": 21:9 fire photo strip at the top, heavy headline under it;
  "the board" of cuts by weight (cut, wood, hours, price); four numbered smoking steps in a row;
  sides and sauces beside a photo; book-a-table section.
- **industrial-brewery**, "the tap list": hero whose right column is the tap board (tap number,
  beer, style, ABV, pint price), wide tank photo under both columns; three large numerals beside
  a photo; three-step tour with duration and price; four food pairing photo tiles; visit with
  growler fills.
- **dark-roast-coffee**, "the roast": headline left, top-down cup photo cropped in a circle
  right; three bean cards (origin, altitude, process, notes, price per 250 g); brew bar table;
  "roast days" weekly row; three dessert photos with prices; visit section.
- **botanical-bar**, "the greenhouse": hero photo in a soft organic shape overlapping a smaller
  round photo; cocktails grouped by plant family in three columns (herb, flower, root); garden
  section with a plant list as text chips beside a tall photo; autumn seasonal note with two
  photos; visit section.

## Open questions for the developer

1. Continue with small batches in the main session (slower, cheaper per step) or parallel agents
   again (faster, but it hit the limit twice)?
2. Order: dark designs first (they were the thin scaffolds), or the designs most used by
   `ngx-horeca` clients first?
3. Should the catalog get non-HoReCa directions for `ngx-default` and `ngx-bos` after this, or is
   that out of scope for now?
