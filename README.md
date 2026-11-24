# Meridian Commerce — High-Performance E-Commerce Marketing Landing Page

A strictly frontend-only, performance-engineered e-commerce marketing & CRO agency landing page built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS v4**. Designed for fast Core Web Vitals (**FCP**, **LCP**, **TBT**, **CLS**) and **100/100 WCAG Accessibility** without sacrificing visual craft or interactivity.

---

## Sections Included

- **Navbar** — Sticky accessible navigation with skip-to-content link, zero-reflow `IntersectionObserver` scroll elevation, and keyboard-accessible mobile drawer.
- **Hero** — Above-the-fold editorial value proposition rendered immediately with zero opacity delay, responsive preloaded WebP LCP showcase image, proof metrics, and static client brand strip.
- **Services** — 6-card full-funnel e-commerce capabilities grid with inline SVG icons and GPU-composited hover/reveal transitions.
- **Portfolio (Case Studies)** — Interactive industry filter tabs (`All Work`, `Beauty & Skincare`, `Apparel & Fashion`, `Home & Wellness`), lazy-loaded WebP cards, and a dynamically imported accessible detail modal.
- **Testimonials** — Founder & VP reviews with accessible 5-star ratings and measurable revenue badges.
- **FAQ** — Accessible accordion powered by zero-reflow CSS Grid transitions (`grid-template-rows`) and complete ARIA linkage.
- **Contact Form** — Strictly frontend-only storefront growth audit request form with real-time client-side validation, ARIA error linkage, focus management, and interactive confirmation state.
- **Footer** — Semantic navigation columns, studio details, and high-contrast typography.

---

## Performance Optimizations Implemented

### 1. JavaScript Bundle & Execution Reduction
- **Zero heavy animation or icon libraries**: Replaced runtime animation libraries (e.g., Framer Motion) and large icon packs with a shared 40-line `IntersectionObserver` reveal hook (`src/hooks/useReveal.ts`) and minimal tree-shakeable inline SVGs (`src/components/Icons.tsx`).
- **Dynamic code splitting**: Below-the-fold sections (`Portfolio`, `Testimonials`, `FaqSection`, `ContactSection`, `Footer`) and `CaseStudyModal` use `React.lazy` + `Suspense` with fixed-height fallback placeholders to prevent layout shifts.
- **Minimal re-renders**: Static data lives outside component render cycles (`src/data/siteData.ts`), scroll reveals toggle CSS classes directly via refs (zero React state updates on scroll), and repeated cards (`ServiceCard`, `CaseStudyCard`) are memoized.

### 2. LCP & Image Pipeline Optimization
- **WebP conversion & exact sizing**: Converted all visuals from 1.2 MiB raw JPEGs to **192 KiB total** across 6 stripped WebP assets:
  - `hero-commerce-480.webp`: **21 KiB** (mobile LCP)
  - `hero-commerce-800.webp`: **58 KiB** (desktop LCP)
  - `case-solis.webp` / `case-kestrel.webp` / `case-norden.webp` / `case-aurelia.webp`: **23–29 KiB** each
- **LCP prioritization**: Preloaded the responsive hero image in `index.html` using `imagesrcset`, `imagesizes`, and `fetchpriority="high"`, paired with `loading="eager"` and `decoding="sync"` on the `<img>` element.
- **Below-the-fold lazy loading**: All portfolio images specify explicit `width={640}` and `height={420}` attributes plus `loading="lazy"` and `decoding="async"` to preserve **CLS ≈ 0**.

### 3. FCP, Main-Thread & Forced Reflow Prevention
- **Zero entrance delay on Hero**: Above-the-fold content is immediately visible on first paint.
- **Non-blocking typography**: Minimal Google Font weights (`Plus Jakarta Sans` 600–800, `Inter` 400–600) load asynchronously via `media="print" onload="this.media='all'"` with `display=swap` and system fallback stacks.
- **Zero forced reflows**: Eliminated `window.scroll` listeners, `getBoundingClientRect`, and `offsetHeight`/`scrollHeight` measurements. Sticky header elevation uses a 1px `IntersectionObserver` sentinel, and FAQ panels animate via pure CSS Grid transitions.
- **`content-visibility: auto`**: Applied to below-the-fold sections (`.cv-section` with `contain-intrinsic-size`) to minimize initial style/layout work.
- **Reduced-motion respect**: Both CSS (`@media (prefers-reduced-motion: reduce)`) and `useReveal` disable motion immediately when requested by the user.

### 4. Accessibility Preservation
- Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) and sequential heading hierarchy (`h1` → `h2` → `h3`).
- Skip-to-content link, visible `:focus-visible` rings, and keyboard Escape handling + focus restoration for the mobile drawer and case study modal.
- Complete ARIA semantics for filter tabs (`tablist`/`tab`/`aria-selected`), accordion regions (`aria-expanded`/`aria-controls`), decorative icons (`aria-hidden="true"`), and form validation (`aria-invalid`/`aria-describedby`/`role="alert"`).
- WCAG AA/AAA color contrast ratios across all text, badges, form errors, and interactive controls.

---

## Verified Production Build Output

Measured via `npm run build`:

| Asset | Raw Size | Gzipped Size | Notes |
| --- | --- | --- | --- |
| `dist/index.html` (HTML + JS + CSS) | 273.06 KiB | **80.55 KiB** | Minified & tree-shaken singlefile bundle |
| `dist/images/hero-commerce-480.webp` | 21 KiB | — | Mobile LCP image (preloaded) |
| `dist/images/hero-commerce-800.webp` | 58 KiB | — | Desktop LCP image (preloaded) |
| `dist/images/case-*.webp` (4 files) | 102 KiB total | — | Lazy-loaded below the fold |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Type-check & build for production
npx tsc --noEmit && npm run build

# Preview production build locally
npm run preview
```

## Running Lighthouse Audits

Always audit the **production** build (never the Vite dev server, which serves unminified modules and HMR scripts):

1. Build and serve the production output:
   ```bash
   npm run build && npm run preview
   ```
2. Open the preview URL (e.g., `http://localhost:5173`) in an **Incognito** Google Chrome window (so browser extensions do not skew results).
3. Open **Chrome DevTools → Lighthouse**.
4. Run **Navigation** audits for **Mobile** and **Desktop** separately with **Performance** and **Accessibility** selected.

---

## Frontend-Only Scope

This project is strictly frontend-only with no backend server, database, API routes, authentication, or third-party form submission services. The contact form validates all fields locally in the browser and displays a demonstration confirmation state.
