# Liminal Light

Personal practice site for Nathan Ghabour — somatic healer and practitioner.

**Stack:** Next.js 16 · Sanity CMS · Tailwind CSS v4 · TypeScript  
**Deploy:** Vercel — [liminal-light.vercel.app](https://liminal-light.vercel.app)  
**Repo:** [github.com/mcdonaldd/liminal-light](https://github.com/mcdonaldd/liminal-light)

---

## Getting started

**Prerequisites:** [Bun](https://bun.sh) (`curl -fsSL https://bun.sh/install | bash`)

```bash
bun install
```

You'll need a `.env.local` file with Sanity credentials before the CMS features work. See Nathan's onboarding doc or ask David.

```bash
bun run dev       # http://localhost:3000
```

Studio (Sanity CMS editor) runs at `http://localhost:3000/admin`.

---

## Commands

```bash
bun run dev          # Dev server
bun run build        # Production build
bun run typecheck    # TypeScript check
bun run typegen      # Regenerate Sanity types (run after schema changes)
```

---

## Architecture

Next.js App Router + Sanity CMS. Pages are composed of **modules** — schema-defined content blocks edited in Sanity Studio and rendered by `ModulesResolver`.

```
src/
  app/
    (frontend)/     # Public site — catch-all [[...slug]] route
    (studio)/       # Sanity Studio at /admin
  sanity/           # Schema, queries, client config
  ui/
    modules/        # One component per module type
    liminal/        # Site-specific components (nav, footer, etc.)
  app.css           # Design tokens + global styles
```

### Adding a new module

Use `/new-module` in Claude Code — it handles all 5 required files automatically. See `CLAUDE.md` for the full module system docs.

---

## Design system

All tokens in `src/app.css`. Never use hardcoded hex or px values.

| Token | Value | Use |
|---|---|---|
| `--color-accent-ember` | Orange | Primary CTAs |
| `--font-display` | Instrument Serif | Headings |
| `--font-body` | Manrope 300 | Body text |
| `--nav-height` | 64px | Layout spacing |

---

## Deploying

Push to `main` → Vercel auto-deploys.

To add env vars to Vercel: Project Settings → Environment Variables. Use the same values as `.env.local`, with `NEXT_PUBLIC_BASE_URL` set to the production domain.
