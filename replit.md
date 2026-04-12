# Proximity Credit Repair — Project Documentation

## Overview
A high-end, premium credit repair website built with React 18 + Vite + TypeScript + Tailwind CSS v3. Features a gold-and-dark luxury design system, animated UI with Framer Motion, and all 7 pages of content.

## Tech Stack
- **Frontend:** React 18 + Vite 5 (TypeScript)
- **Styling:** Tailwind CSS v3 with custom design tokens
- **Animations:** Framer Motion v10
- **Routing:** React Router v6 (lazy-loaded routes)
- **State/Forms:** Zustand, React Hook Form + Zod validation
- **Data Fetching:** TanStack Query (React Query)
- **Icons:** Lucide React
- **Counters:** React CountUp + Intersection Observer

## Project Structure
```
src/
├── components/
│   ├── layout/     Navbar, Footer
│   ├── ui/         Button, SectionWrapper
│   └── sections/   (available for future expansion)
├── pages/          Home, About, Services, HowItWorks, Testimonials, FAQ, Contact
├── data/           services.ts, testimonials.ts, faqs.ts
├── config/         site.ts (siteConfig, navLinks)
├── lib/            cn.ts (clsx utility)
└── styles/         globals.css (Tailwind + custom utilities)
```

## Design System
- **Gold Primary:** `#B8924A`
- **Gold Light:** `#D4AF72`
- **Gold Dark:** `#8B6A2E`
- **Near Black:** `#0A0A0A`
- **Off White:** `#F9F6F1`
- **Fonts:** Montserrat (headings) + Open Sans (body) — Google Fonts

## Pages
1. **Home** — Hero, stats counter bar, services preview, how-it-works steps, testimonials, CTA
2. **About** — Mission, core values, team section
3. **Services** — Detailed service cards with benefits lists
4. **How It Works** — Visual 4-step timeline
5. **Testimonials** — Full grid with before/after score badges + video placeholder
6. **FAQ** — Animated accordion organized by category
7. **Contact** — Split layout form with Zod validation + success state

## Running the App
```
npm run dev    # Dev server at localhost:5000
npm run build  # Production build
```

## Notes
- Framer Motion is pinned to v10 (v11 has different dist structure incompatible with Vite's dep scanner)
- All content is data-driven via `/data` files — no component code changes needed for content updates
- Contact form simulates submission (no backend API connected yet)
