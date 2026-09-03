# WAW UI Design Brief

## Visual Direction

Clean, practical, token-driven application UI. Use clear hierarchy, compact but readable spacing,
quiet surfaces, and a small set of consistently styled controls. The visual language should help a
user complete operational work quickly rather than compete for attention.

## Theme Mode

- **Theme mode:** light
- **Why:** this direction is intended as a calm default for dashboards, portals, and internal tools.
  Dark mode can be added through the target application's own theme configuration when needed.

## Use `@wawjs/ngx-ui`

- Install and import public APIs from `@wawjs/ngx-ui`.
- Use its standalone primitives for repeated controls: buttons, inputs, select, tables, modals, and alerts.
- Configure tokens in the consuming application's UI provider. Do not duplicate component styling in each feature.
- Keep app-specific palettes and workflow layout in the consuming app.

## Section Anatomy

- **Workspace header:** compact navigation, one primary action, clear context.
- **Summary cards:** concise status, counts, and one focused next action.
- **Operational sections:** structured tables or form panels with predictable controls and feedback.
- **Destructive actions:** use confirmation alerts instead of inline browser dialogs.

## Avoid

- Marketing-style hero imagery or decorative gradients in operational screens.
- Recreating buttons, inputs, select controls, modals, or alerts when `@wawjs/ngx-ui` already provides them.
- Overloading a single screen with competing primary actions.
