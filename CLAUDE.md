# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (Next.js)
npm run build    # Production build
npm run lint     # ESLint
```

No test suite is currently configured.

## Architecture

**Next.js 15 App Router** — server components by default. Client components are used sparingly: `Header.tsx` (scroll/mobile menu), `BobtailShowcase.tsx` (scroll-synced video RAF loop), and `contact/page.tsx` (form state).

**Routing:** Standard file-based App Router. Pages live at `app/<route>/page.tsx`.

**Component layers:**
- `components/sections/` — Homepage sections, each self-contained, server-rendered unless noted
- `components/layout/` — `Header` and `Footer`, included in root `app/layout.tsx`
- `components/ui/` — Primitives: `Button` (polymorphic `<a>`/`<button>`, three variants/sizes) and `SectionLabel` (decorative accent label)

## Styling

**Tailwind CSS v4** — configured entirely via CSS `@theme` directives in `app/globals.css` (no `tailwind.config.js`). All custom tokens (colors, typography scale, animations) live there.

**Color system:**
- Background/text: Zinc scale (`zinc-950`, `zinc-900`, `zinc-50`)
- Accent: Amber scale (`amber-400/500/600`) — "propane flame" metaphor, intentional brand choice

**Typography utilities:** `display-xl` → `display-sm`, `body-lg`, `body-base` — defined in `globals.css`.

**Animation:** CSS keyframe utilities (`fade-up`, `fade-in`) with stagger delay classes (`.stagger-1` through `.stagger-8`). Framer Motion is installed but not yet used.

**Spacing:** Sections use the `section-padding` utility (`py-24 md:py-32`).

## Known Placeholders / Pending Work

- **Contact form** (`app/contact/page.tsx`): Simulates submission with an 800ms delay. Needs a real endpoint (HubSpot, Formspree, or `app/api/` route).
- **Bobtail video**: `BobtailShowcase.tsx` is wired up and ready; waiting on `/public/bobtail.mp4`.
- **Client logos / testimonials**: Rendered as animated skeleton placeholders in `Credibility.tsx`.
- **Remote images**: `next.config.ts` allows `picsum.photos` as a placeholder domain — swap to real image host before launch.

## Brand / Design Constraints

- **No dark mode** — intentional. The site is always light.
- **No generic AI language** — copy is propane-industry specific (bobtail, dispatch, seasonal demand, etc.).
- **No external component library** — all UI is custom-built on Tailwind primitives.
- **Asymmetric grids are intentional** — e.g., `lg:grid-cols-[1.2fr_0.8fr]` is a deliberate design choice.
