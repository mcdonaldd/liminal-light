# DESIGN.md

Design system reference for Liminal Light. Source of truth is `src/app.css` — this file transcribes it for quick reference, but if the two ever disagree, `src/app.css` wins. Regenerate this section if tokens change.

## The one rule that matters most

**Never write `var(--token-name)` without confirming that exact name exists in `src/app.css`.** This codebase's spacing scale has gaps (`--space-5` and `--space-7` do not exist — see below) and a broken reference silently computes to nothing (`0`, `normal`, or the property's initial value) rather than erroring. That class of bug shipped twice in this project already: labels reading as trailing helper text for the wrong field, and zero gap between two form fields that were supposed to have one. Before using any token:

```bash
grep -n "\-\-space-8:" src/app.css   # confirm it exists before using var(--space-8)
```

If the exact value you want doesn't exist as a token, round to the nearest one that does. Don't invent a new one inline unless it's a genuinely new, reusable value — and if so, add it to the scale in `src/app.css`, not just to your component.

## Colors

All colors are defined twice — once in the Tailwind `@theme` block (for utility classes like `bg-primary`), once as plain `:root` custom properties (for inline styles and arbitrary CSS, which is how most of this codebase is written). Use the `--color-*` custom-property form in `style={{}}` props; that's the project's dominant pattern.

### Backgrounds
| Token | Value | Use |
|---|---|---|
| `--color-bg-primary` | `#EAD4A8` | Default page/section background (warm tan). Also the `<body>` background. |
| `--color-bg-surface` | `#F3E8C8` | Lighter card/panel surface, one step up from primary. |
| `--color-bg-dark` | `#181510` | Near-black — ceremonial/ dark sections (BookingCTA, Hapé, Sacred Gatherings). |

### Text
| Token | Value | Use |
|---|---|---|
| `--color-text-primary` | `#1C1A17` | Body copy, headings on light backgrounds. |
| `--color-text-secondary` | `#5C5048` | Secondary/muted copy on light backgrounds. |
| `--color-text-on-dark` | `#F4EBDC` | Body copy, headings on dark backgrounds. |
| `--color-text-on-dark-muted` | `#A89C8C` | Secondary/muted copy on dark backgrounds. |

### Borders
| Token | Value | Use |
|---|---|---|
| `--color-border` | `#CAAF88` | Default hairline/input border. |
| `--color-border-strong` | `#9E7D56` | Hover/emphasis border. |

### Accents (use sparingly — "earned neon," not decoration)
| Token | Value | Meaning established in this codebase |
|---|---|---|
| `--color-accent-ember` | `#C44E19` | Primary brand/CTA color. Every primary button. |
| `--color-accent-ember-hover` | `#A33B0D` | Hover/active state for ember, and the higher-contrast choice when plain ember fails WCAG AA against a light background (see below). |
| `--color-accent-gold` | `#D4940C` | Foil-gradient accent (rarely used alone). |
| `--color-accent-teal` | `#3FB6C9` | "Clarity/focus" meaning — Corporate Offsites accent, section eyebrows. **Caution:** low contrast (~2:1) against the cream backgrounds — do not use for body text or fine UI (rings, small labels) on `--color-bg-primary`/`--color-bg-surface`. Fine on `--color-bg-dark`. |
| `--color-accent-magenta` | `#FF2D87` | "Ceremonial/threshold" meaning — Hapé, Root, Sacred Gatherings, modal eyebrows. |
| `--color-accent-lime` / `--color-accent-volt` | `#E5FF3C` / `#CAFF00` | Fourth accent, used in the elements icon set and Energy offering. |

**Contrast note:** always check contrast before pairing an accent with cream/tan backgrounds — several of these were designed for use on `--color-bg-dark` and read poorly on light surfaces. When in doubt, compute the ratio rather than eyeballing it (WCAG AA: 4.5:1 for text, 3:1 for UI components like borders/focus rings).

### Gradients
`--gradient-warm-fade`, `--gradient-dark-overlay`, `--gradient-ember-glow`, `--gradient-gold-accent` — used for atmospheric overlays, not for gradient text (that's a banned pattern here).

## Typography

- **Display font:** `--font-display` = Instrument Serif — headlines, pull quotes, anything that should feel ceremonial.
- **Body font:** `--font-body` = Manrope — everything else.
- **Mono:** `--font-mono` = JetBrains Mono — rarely used (technical/code contexts only).

### Size scale
`--text-xs` (12px) · `--text-sm` (14px) · `--text-base` (16px) · `--text-lg` (18px) · `--text-xl` (20px) · `--text-2xl` (24px) · `--text-3xl` (30px) · `--text-4xl` (36px) · `--text-5xl` (48px) · `--text-6xl` (60px) · `--text-7xl` (72px)

Headline sizes are usually fluid: `clamp(var(--text-3xl), 4vw, var(--text-5xl))` is a common pattern for page H1s. Body copy stays fixed.

### Weight, leading, tracking
- Weights: `--font-weight-light` (200) · `regular` (400) · `medium` (500) · `semibold` (600) · `bold` (700)
- Line-height: `--leading-tight` (1.25) · `snug` (1.375) · `normal` (1.5) · `relaxed` (1.625)
- Letter-spacing: `--tracking-tight` (-0.025em) · `normal` (0) · `wide` (0.025em) · `wider` (0.05em) · `widest` (0.15em)
- Uppercase eyebrow labels (section labels, field labels, tags) use `font-weight: 600`, `text-transform: uppercase`, and `letter-spacing: var(--tracking-wider)` at `--text-xs` or `--text-sm`.

## Spacing

**The full scale — nothing else exists:**

```
--space-1: 4px    --space-8: 32px
--space-2: 8px    --space-10: 40px
--space-3: 12px   --space-12: 48px
--space-4: 16px   --space-16: 64px
--space-6: 24px   --space-20: 80px
                  --space-24: 96px
                  --space-32: 128px
```

**There is no `--space-5`, `--space-7`, `--space-9`, `--space-11`, or anything beyond `--space-32`.** The scale is not linear after `--space-4` — it jumps 4 → 6 → 8 → 10 → 12 → 16 → 20 → 24 → 32. Round to the nearest defined value.

## Layout

- Containers: `--container-sm` (640px) · `md` (768px) · `lg` (1024px) · `xl` (1280px)
- `--nav-height`: 64px — used in `scroll-margin-top` for anchor links and sticky offsets.

## Radius, shadow, motion, z-index

- Radius: `--radius-sm` (4px) · `md` (8px) · `lg` (12px) · `xl` (16px) · `full` (9999px)
- Shadow: `--shadow-sm` / `md` / `lg` for elevation, `--shadow-card` for the specific card-lift treatment.
- Duration: `--duration-fast` (100ms) · `normal` (200ms) · `slow` (300ms). Most entrance animations in this codebase actually hand-roll a longer duration (0.3–0.9s) directly in the `animation` shorthand rather than using these tokens — follow the nearest existing precedent (grep for the component you're closest to) rather than inventing a new duration.
- Easing: the codebase's de facto standard is `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo), used directly inline almost everywhere (`RevealOnScroll`, `Hero`, `Nav` drawer, `FoilArc`, offering-card hover). `--ease-default` and `--ease-out` exist as tokens but are rarely reached for in practice — prefer matching the `0.16, 1, 0.3, 1` curve for consistency with everything else.
- z-index: `--z-sticky` (200) · `--z-modal` (400). No tokens exist above 400 yet (toast/tooltip) — add one if you need it, don't hardcode a number.

## Components

Shared, reusable classes — use these instead of re-implementing inline:

| Class | What it is |
|---|---|
| `.btn-primary` / `.btn-secondary` | The two button treatments. Primary = filled ember. Secondary = outlined, ember on hover. |
| `.card` | Generic card with hover lift. Rarely used directly — most cards in this codebase (offering cards) have their own bespoke treatment instead. |
| `.field-label` / `.field-input` / `.field-error` | Form primitives — label, input/textarea/select, and error message. Use via the `FormField` component (`src/ui/liminal/FormField.tsx`), not directly, when building a new form. |
| `.date-location-grid` | The specific responsive two-column grid used for paired short fields (currently Date + Location in the inquiry modal). Column gap widens at `min-width: 640px`. |
| `.modal-close-btn` | Branded circular close button (44×44 target, ember hover). Use for any future modal's close affordance instead of re-styling one inline. |
| `.offering-card` (in `OfferingsSection.tsx`) | Hover-lift transition for the offerings grid cards — CSS-only, applied via className alongside inline styles for the rest. |
| `ArcTransition` (`src/ui/liminal/ArcTransition.tsx`) | The curved section-boundary SVG. `variant="top"` fills from the section above's color; `variant="bottom"` fills toward the section below's color; `fill` must match the *neighboring* section's actual background token. Full rules are in `CLAUDE.md`. |

## Working with this file

- When you add a genuinely new, reusable token (a color, a spacing value, a duration) — add it to `src/app.css` first, in the right scale/section, then reflect it here.
- When you add a genuinely new, reusable component class — add it to `src/app.css` (or as a new component file) and list it in the Components table above.
- Don't add one-off values to this file. If it's not reusable, it doesn't belong in the design system.
- **Any edit to this file must also update and verify the Notion design system page:** https://app.notion.com/p/Design-System-Liminal-Light-373cfa81b05c81d0a55df5851703ef4b?source=copy_link. That page is the design system's external/shareable copy — after changing DESIGN.md, open the Notion page, reconcile it against the new content here, and confirm it actually reflects the change (don't just assume the edit went through).
