# Proximity Credit Repair — Project Documentation

## Overview
A high-end, premium marketing website for Proximity Credit Repair. Built with React 18 + Vite + TypeScript + Tailwind CSS v3. Features a gold-and-dark luxury design system, animated UI with Framer Motion, and a fully data-driven architecture across 7 pages.

## Tech Stack
- **Frontend:** React 18 + Vite 5 (TypeScript)
- **Styling:** Tailwind CSS v3 with custom design tokens
- **Animations:** Framer Motion v10
- **Routing:** React Router v6 (lazy-loaded routes + `v7_startTransition` future flag)
- **State/Forms:** Zustand, React Hook Form + Zod validation
- **Data Fetching:** TanStack Query (React Query)
- **Icons:** Lucide React
- **Counters:** Custom `useCountUp` hook with IntersectionObserver

## Project Structure
```
src/
├── components/
│   ├── layout/     AppLayout, Navbar, Footer, Section, PageWrapper, SEOHead
│   ├── ui/         Button, Card, Badge, Input, Select, Textarea, Toast, SectionLabel, etc.
│   └── sections/   HeroSection, ServicesPreview, HowItWorksStrip, TestimonialsSlider, FinalCTABand
├── pages/          Home, About, Services, HowItWorks, Testimonials, FAQ, Contact, NotFound
├── data/           services.ts, testimonials.ts, faqs.ts, stats.ts, team.ts
├── config/         siteMetadata.ts, navigation.ts, theme.ts, site.ts
├── hooks/          useCountUp, useMediaQuery, useScrollPosition
├── store/          uiStore.ts, formStore.ts
├── services/       contactService.ts (simulated, ready for real API)
├── lib/            animations.ts, cn.ts, utils.ts, validators.ts
├── types/          index.ts, component-props.ts
└── styles/         globals.css (Tailwind + custom utilities)
```

## Design System
- **Gold Primary:** `#B8924A`
- **Gold Light:** `#D4AF72`
- **Gold Dark:** `#8B6A2E`
- **Near Black:** `#0A0A0A`
- **Off White:** `#F9F6F1`
- **Fonts:** Montserrat (headings) + Open Sans (body) — Google Fonts

## Pages (Phase 7 — Fully Implemented)
1. **Home** (`/`) — Full-screen hero with particles + animated headline, animated stat counters, services preview, how-it-works strip, testimonials auto-slider, CTA band
2. **About** (`/about`) — Sub-hero banner, mission blockquote with gold accent bar, core values grid, team grid with hover bio overlay
3. **Services** (`/services`) — Sub-hero, 4 alternating service detail sections with hash IDs for anchor navigation, CTA strip
4. **How It Works** (`/how-it-works`) — Sub-hero, 4-step timeline with animated gold connector lines (desktop) and vertical connectors (mobile)
5. **Testimonials** (`/testimonials`) — Sub-hero, trust badges row, full 8-card testimonials grid, video placeholder
6. **FAQ** (`/faq`) — Sub-hero, animated accordion organized by 2 categories (5 items each), only 1 item open at a time
7. **Contact** (`/contact`) — Split layout: contact info + form with Zod validation, phone auto-format, animated success state + toast

## Key Architectural Notes
- `PageWrapper` uses `noPaddingTop` on Home (hero handles its own spacing) and `dark` on all other pages (dark sub-hero blends with transparent navbar)
- `Button` component handles internal Links, external `<a>` tags, and `<button>` elements — `onClick` is passed to all variants
- `AppLayout` uses `ScrollToTop` to reset scroll position on route change
- Contact form resets submission status on mount to prevent stale success state on revisit
- All data is centralized in `src/data/` — no strings hardcoded in components
- TypeScript strict mode passes with zero errors

## Running the App
```
npm run dev    # Dev server at localhost:5000
npm run build  # Production build
```

## Notes
- Framer Motion pinned to v10 (v11+ dist structure incompatibility with Vite)
- Contact form simulates API submission (no backend connected yet)
- `v7_startTransition` future flag set on `RouterProvider` to suppress React Router v7 migration warning
