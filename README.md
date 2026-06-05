# Liminal Light

Personal practice site for Nathan Ghabour — somatic healer and practitioner.

**Stack:** Next.js 16 · Sanity CMS (SanityPress template) · Tailwind CSS v4 · TypeScript  
**Deploy:** Vercel via GitHub ([mcdonaldd/liminal-light](https://github.com/mcdonaldd/liminal-light))

---

## Running locally

```bash
npm install
npm run dev       # http://localhost:3000
```

The dev server starts without Sanity credentials. All Liminal Light sections render from static components. Sanity-driven features (visual editing, blog, CMS content) activate only after you connect a project.

---

## Connecting Sanity

1. Create a project at [sanity.io/manage](https://sanity.io/manage)
2. Copy `.env.example` → `.env.local`
3. Fill in:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID="your_project_id"
   NEXT_PUBLIC_SANITY_DATASET="production"
   SANITY_API_READ_TOKEN="your_viewer_token"
   NEXT_PUBLIC_BASE_URL="https://your-domain.com"
   ```
4. Run `npm run dev` — visit `http://localhost:3000/admin` to open the Sanity Studio

---

## Pages & sections

### `/` — Home

| Section | Status | File |
|---|---|---|
| Nav | Built | `src/ui/liminal/Nav.tsx` |
| Hero | Placeholder | `src/ui/liminal/Hero.tsx` |
| About | Placeholder | `src/ui/liminal/About.tsx` |
| Offerings (card grid) | Placeholder | `src/ui/liminal/OfferingsSection.tsx` |
| Booking CTA | Placeholder | `src/ui/liminal/BookingCTA.tsx` |
| Is This You (accordion) | **Copy final** | `src/ui/liminal/IsThisYou.tsx` |
| Substack | Placeholder | `src/ui/liminal/SubstackSection.tsx` |
| Footer | Built | `src/ui/liminal/LiminalFooter.tsx` |

### `/offerings` — Services

Full offerings list page. All offering cards are placeholder. File: `src/app/(frontend)/offerings/page.tsx`

---

## Copy needed

All placeholder slots are labelled `[PLACEHOLDER — ...]` in the source. Full copy doc:  
→ **[Notion: Website Copy](https://www.notion.so/Website-Copy-375cfa81b05c81f5b605c133673336e1)**

**Confirmed copy already wired in:**
- Is This You — all three accordion items + "How We Walk Through It" anchor

**Still needed (Nathan to provide):**
- Hero headline + subhead + eyebrow
- About section — copy + portrait photo
- Offerings — names, descriptions, duration, format, price for each
- Booking CTA — headline + 1–2 sentence body
- Substack — heading + pitch
- Footer tagline
- All meta descriptions
- Booking platform URL (goes in `BookingCTA.tsx` href + nav CTA)
- Substack URL (goes in `SubstackSection.tsx` href)

---

## Deploying to Vercel

1. Push to GitHub: `git push origin main`
2. In [Vercel](https://vercel.com/new), import repo `mcdonaldd/liminal-light`
3. Set environment variables (same as `.env.local` values, minus `NEXT_PUBLIC_BASE_URL` — set that to your Vercel domain)
4. Deploy

For subsequent deploys: push to `main` → Vercel auto-deploys.

---

## Design system

All design tokens live in `src/app.css` as CSS custom properties and Tailwind `@theme` values. Never use hardcoded hex or px values in components — reference tokens via `var(--...)` or Tailwind classes.

Key tokens: `--color-accent-ember` (primary CTA), `--font-display` (Instrument Serif), `--font-body` (Manrope 300), `--nav-height` (64px).

See full spec in the project brief.
