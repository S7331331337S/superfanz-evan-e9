# CLAUDE.md — Superfanz Pro Cards

This file documents the codebase structure, conventions, and development workflows for AI assistants working on this project.

---

## Project Overview

**Superfanz Pro Cards** is a Next.js marketing/landing page for a sports fan engagement platform featuring digital collectible cards of athletes with real-world perks and rewards. The project was bootstrapped with [v0.app](https://v0.app) and is deployed via the Vercel platform.

- **Type:** Marketing landing page (single-page, no backend)
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript + React 19
- **Package Manager:** pnpm

---

## Repository Structure

```
superfanz-evan-e9/
├── app/
│   ├── layout.tsx          # Root layout — fonts (Geist), Vercel Analytics
│   ├── page.tsx            # Home page — imports and renders all landing sections
│   └── globals.css         # Global styles — Tailwind v4 theme, custom utilities, keyframes
├── components/
│   ├── landing/            # 19 page section components (client-side, interactive)
│   │   ├── navigation.tsx
│   │   ├── hero-section.tsx
│   │   ├── pro-card.tsx           # Core 3D flip card (378 LOC)
│   │   ├── pro-card-section.tsx
│   │   ├── animated-sphere.tsx    # Three.js sphere
│   │   ├── animated-tetrahedron.tsx
│   │   ├── animated-wave.tsx
│   │   ├── logo.tsx
│   │   └── [other sections].tsx
│   └── ui/                 # 30+ shadcn/ui components (Radix UI primitives)
├── hooks/
│   ├── use-mobile.ts       # Mobile breakpoint hook (768px threshold)
│   └── use-toast.ts        # Toast notification hook
├── lib/
│   └── utils.ts            # cn() helper — clsx + tailwind-merge
├── public/
│   └── images/             # Static assets (athlete photos, icons)
├── components.json         # shadcn/ui config
├── next.config.mjs         # Next.js config
├── postcss.config.mjs      # PostCSS + Tailwind CSS v4
├── tsconfig.json           # TypeScript config with @/* path alias
└── pnpm-lock.yaml
```

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 16.0.10 |
| UI | React 19.2.0 |
| Language | TypeScript 5.9 |
| CSS | Tailwind CSS 4.1.9 |
| Components | shadcn/ui (new-york style) + Radix UI |
| Icons | Lucide React |
| 3D Graphics | Three.js 0.183.2 + @react-three/fiber |
| Forms | React Hook Form + Zod |
| Charts | Recharts |
| Analytics | Vercel Analytics |
| Animations | CSS custom keyframes + inline transforms |

---

## Development Commands

```bash
# Install dependencies
pnpm install

# Start dev server (http://localhost:3000)
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Lint
pnpm lint
```

---

## Key Conventions

### Component Patterns

- **All landing section components use `"use client"`** — this project is primarily client-side interactive. Do not convert to server components.
- **PascalCase** for all component names and files.
- **One component per file** in `components/landing/`.
- `page.tsx` imports and composes all landing section components in order.

### Styling

- Use **Tailwind CSS utility classes** for all styling. Avoid custom CSS unless adding a new animation/keyframe.
- Use the **`cn()` helper** from `lib/utils.ts` for conditional class merging.
- **Do not use inline `style={{}}` for static values** — prefer Tailwind classes. Inline styles are acceptable only for dynamic/computed values (e.g., mouse-tracking transforms, shimmer position).
- Colors use the **OKLCH color space** via CSS variables defined in `globals.css`. Prefer `var(--color-*)` tokens.
- Custom fonts: `--font-sans` (Instrument Sans), `--font-mono` (JetBrains Mono), `--font-display` (Instrument Serif). Use the `.font-display` utility class for display text.

### TypeScript

- **Strict mode is enabled** in `tsconfig.json`.
- However, `next.config.mjs` sets `typescript.ignoreBuildErrors: true` — the build will not fail on type errors. Still write correct types.
- Define **props interfaces** at the top of each component file.
- Use `@/*` path aliases for all imports (e.g., `import { cn } from "@/lib/utils"`).

### Path Aliases (from tsconfig.json)

| Alias | Resolves to |
|---|---|
| `@/components` | `components/` |
| `@/components/ui` | `components/ui/` |
| `@/lib` | `lib/` |
| `@/hooks` | `hooks/` |

### shadcn/ui Components

- shadcn/ui components live in `components/ui/`. **Do not edit them directly** unless necessary.
- To add a new shadcn component: `pnpm dlx shadcn@latest add <component-name>`
- Style: **new-york**, Base color: **neutral**, RSC: **true**, Icon library: **lucide**

### State Management

- **No global state** — use `useState` and `useEffect` within each component.
- Pass props down for shared state; don't reach for Context or Zustand unless state must genuinely span many components.

### Animations

- Prefer **CSS keyframe animations** defined in `globals.css` over JavaScript animation libraries.
- For scroll-driven or mouse-tracking effects, use `useEffect` with `addEventListener`.
- The `marquee` / `marquee-reverse` utilities (defined in globals.css) provide infinite scroll animations.

---

## Notable Components

### `components/landing/pro-card.tsx`
The centerpiece component. Key behaviors:
- **3D flip** on click using CSS `rotateY` transform (perspective + `transform-style: preserve-3d`).
- **Holographic shimmer** effect: tracks mouse position via `mousemove` event and moves a radial gradient overlay.
- **Front face:** Athlete photo, name, position, team, edition badge.
- **Back face:** Full stats grid, member perks list, authenticity badge.
- Props: `ProCardProps` — controls athlete data, edition details, stats, tier.

### `components/landing/animated-sphere.tsx`
Three.js sphere rendered via `@react-three/fiber`. Used as a decorative background element in the hero section. Keep this isolated — Three.js adds significant bundle size.

### `components/landing/navigation.tsx`
Fixed header that shrinks on scroll (`scrollY > 50` triggers compact mode). Includes a mobile hamburger menu with staggered entrance animations. The logo has two size states tied to scroll position.

### `app/globals.css`
Defines all custom utilities and keyframes. When adding new animations, add them here. Key custom utilities:
- `.font-display` — Instrument Serif font
- `.text-stroke` — SVG text stroke effect
- `.marquee` / `.marquee-reverse` — infinite horizontal scroll
- `.line-reveal` — clip-path reveal animation
- `.hover-lift` — translateY lift on hover
- `.animate-char-in` — per-character blur-in animation
- `.noise-overlay` — SVG grain texture overlay
- `.border-sketch` — diagonal gradient border

---

## No Testing Setup

This project has **no test framework configured** (no Jest, Vitest, Playwright, or Cypress). There are no test files. When adding features, rely on manual browser testing and TypeScript types for correctness.

---

## No Environment Variables

The project requires **no environment variables**. Vercel Analytics uses public client-side tokens that are hardcoded by the platform. If you add backend features or third-party integrations, document required env vars here.

---

## Image Handling

`next.config.mjs` sets `images.unoptimized: true`. This means Next.js `<Image>` optimization is disabled — images are served as-is from `public/`. This is intentional for simpler deployment with v0.

---

## Deployment

- Merges to `main` auto-deploy via **Vercel** (configured through the v0 platform).
- No CI/CD pipeline — no GitHub Actions or test gates before deploy.
- The v0 project is at: `https://v0.app/chat/projects/prj_UmIuw7IBmZaRWXQJ3eT62k6mnbXV`

---

## What NOT to Do

- **Do not add a backend/API routes** without explicit request — this is a static landing page.
- **Do not convert `"use client"` components to server components** — the interactivity depends on client-side hooks.
- **Do not run `npm install`** — use `pnpm install` exclusively.
- **Do not edit `components/ui/`** files casually — they are managed by shadcn/ui.
- **Do not add a global state library** (Redux, Zustand) for simple local state.
- **Do not add a CSS-in-JS library** (styled-components, emotion) — Tailwind handles all styling.
