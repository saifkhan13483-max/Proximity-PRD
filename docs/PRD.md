# PRD — Proximity Credit Repair Website
### Version 3.0 — Maximum Impact + Scalable Architecture Edition

**Objective:** Build the most visually stunning, high-converting, and technically excellent credit repair website on the web — architected from day one to scale into a full business platform. Every pixel, interaction, and line of code must inspire trust, drive action, and support future growth.

---

## System Prompt Context

> You are an elite AI expert system operating as a Principal Software Architect (10+ years), Advanced SEO Strategist (7+ years), and Content Research Lead (5+ years). Think and execute at the highest professional level.
>
> **Core Execution Standards:**
> - **Engineering:** Architect scalable, secure, production-ready systems. Write clean, maintainable, component-driven code across frontend, animations, APIs, and state management.
> - **SEO & Content:** Create research-driven, high-converting content optimized for visibility, ranking, and measurable business impact.
> - **Strategic Delivery:** Ground all recommendations in deep research and strategic thinking. Build for today, architect for tomorrow.
>
> **Non-Negotiable Priorities:** Accuracy > Speed | Quality > Quantity | Strategy > Generic Output  
> Every response must be precise, actionable, and immediately implementable at enterprise level.

---

## Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| Frontend | React 18 + Vite | Fast SPA with hot reload |
| Styling | Tailwind CSS v3 | Utility-first, responsive design system |
| Animations | Framer Motion | Page transitions, scroll reveals, micro-interactions |
| Routing | React Router v6 | SPA routing + smooth hash scroll + lazy routes |
| State Management | Zustand | Lightweight global state (scalable to Redux if needed) |
| Forms | React Hook Form + Zod | Validated, accessible, schema-driven forms |
| Data Fetching | TanStack Query (React Query) | Server state management, caching, future API calls |
| Fonts | Montserrat + Open Sans (Google Fonts) | Premium typographic hierarchy |
| Icons | Lucide React | Consistent, clean icon set |
| Counters | React CountUp | Animated stat numbers |
| Scroll Effects | Intersection Observer API | Trigger animations on scroll |
| Environment Config | `.env` files | Dev / staging / production environment separation |
| Deployment | Replit | Live production hosting |

---

## Scalable Architecture

### Folder Structure

```
src/
├── assets/              # Images, SVGs, fonts
├── components/
│   ├── ui/              # Reusable primitives: Button, Card, Badge, Input, Modal
│   ├── layout/          # Navbar, Footer, PageWrapper, Section
│   └── sections/        # Page-specific sections: Hero, Services, Testimonials, etc.
├── pages/               # One file per route: Home, About, Services, etc.
├── hooks/               # Custom hooks: useScrollPosition, useCountUp, useMediaQuery
├── store/               # Zustand stores: uiStore, formStore
├── services/            # API service layer: contactService, analyticsService
├── data/                # Static content: services.ts, faqs.ts, testimonials.ts
├── lib/                 # Utilities: cn(), formatters, validators
├── types/               # Global TypeScript interfaces and types
├── config/              # Site config: siteMetadata.ts, navigation.ts, theme.ts
└── styles/              # Global CSS, Tailwind config overrides
```

### Key Scalability Principles

1. **Content is data-driven** — All page content (services, FAQs, testimonials, team) lives in `/data` files. Updating content never requires touching component code.
2. **UI primitives first** — Every repeated UI element (Button, Card, Badge, Input) is a reusable component in `/components/ui` with prop-driven variants.
3. **API-ready service layer** — All external calls are routed through `/services`. When a backend is added, only service files change — no component refactoring needed.
4. **Environment-aware config** — `.env.development`, `.env.staging`, `.env.production` separate all environment-specific values from the start.
5. **Lazy-loaded routes** — Every page is code-split via `React.lazy()` + `Suspense` so adding new pages never bloats the initial bundle.
6. **Type-safe throughout** — TypeScript interfaces for all data models, component props, and API responses.

---

## Brand System

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| Gold Primary | `#B8924A` | CTAs, headings, icons, borders, highlights |
| Gold Light | `#D4AF72` | Hover states, gradients, subtle fills |
| Gold Dark | `#8B6A2E` | Pressed states, deep accents |
| Pure White | `#FFFFFF` | Backgrounds, text on dark |
| Off White | `#F9F6F1` | Alternating light sections |
| Near Black | `#0A0A0A` | Hero, dark sections |
| Dark Charcoal | `#141414` | Cards on dark sections |
| Body Text | `#1A1A1A` | Paragraph text on light |
| Muted Text | `#6B6B6B` | Captions, subtext |

All color tokens are defined once in `tailwind.config.js` and referenced by name throughout the codebase — never hardcoded inline.

### Gradients
- **Gold Gradient:** `linear-gradient(135deg, #B8924A 0%, #D4AF72 50%, #8B6A2E 100%)`
- **Dark Hero Gradient:** `linear-gradient(160deg, #0A0A0A 0%, #1a1308 100%)`
- **Gold Glow:** `radial-gradient(ellipse at center, rgba(184,146,74,0.15) 0%, transparent 70%)`

### Typography

| Role | Font | Weight | Size |
|---|---|---|---|
| Hero Headline | Montserrat | 800 (ExtraBold) | 64–80px |
| Section Heading | Montserrat | 700 (Bold) | 40–48px |
| Subheading | Montserrat | 600 (SemiBold) | 24–32px |
| Body | Open Sans | 400 (Regular) | 16–18px |
| Caption | Open Sans | 400 (Regular) | 13–14px |
| CTA Button | Montserrat | 700 (Bold) | 15–16px |

### Spacing & Layout
- Max content width: `1280px` (defined as Tailwind `container` config)
- Section padding: `py-24` (96px) top and bottom
- Grid system: 12-column responsive grid
- Border radius: `rounded-2xl` (16px) for cards, `rounded-full` for pills/badges

---

## Visual Design Directives

### Hero Section (Home)
- Full-viewport dark hero with **gold radial glow** behind headline
- Animated floating **gold particle dots** or subtle mesh gradient background
- Headline animates in word-by-word with Framer Motion
- Dual CTA buttons: primary (gold filled) + secondary (gold outlined)
- Trust bar below hero: 3 stats that count up on load (e.g., "10,000+ Clients Helped", "95% Success Rate", "$2M+ in Debt Resolved") with gold icons

### Cards
- Glassmorphism style on dark sections: `backdrop-blur`, semi-transparent dark background, gold top border
- Subtle `box-shadow` with gold tint on hover
- Hover lifts card with `translateY(-6px)` transition (Framer Motion)

### Buttons
- **Primary:** Gold gradient background, white text, rounded-full, subtle glow on hover
- **Secondary:** Transparent background, gold border, gold text, fills gold on hover
- All buttons have `whileHover` and `whileTap` Framer Motion scale effects

### Scroll Animations
- Every section fades in + slides up 30px when it enters the viewport
- Stagger children animations on cards and list items
- Timeline steps draw in sequentially

### Dividers & Accents
- Gold gradient horizontal lines (`h-px`) between sections
- Decorative large faint gold quotation marks behind testimonial text
- Section labels (e.g., "OUR SERVICES") styled as small gold uppercase tracked text above headings

---

## Pages & Detailed Requirements

### 1. Home
- **Navbar:** Sticky, blurs on scroll (`backdrop-blur`), logo left, nav links center, gold CTA right
- **Hero:** Dark full-viewport, animated headline, subheadline, dual CTAs, scroll-down chevron
- **Trust Bar:** 3 animated counters + icons in a gold-bordered row
- **Services Preview:** 4 cards with icon, title, one-line description, "Learn More" link
- **How It Works Strip:** Horizontal 4-step flow with numbered gold circles and connecting gold lines
- **Testimonials Slider:** Auto-rotating carousel, before/after score badges, star ratings
- **Final CTA Band:** Full-width dark section with gold gradient text headline + single CTA button

### 2. About Us
- Mission statement in large elegant typography with gold accent bar
- 3–4 Core Values in icon + heading + text cards
- Team section: photo cards with name, title, and gold hover overlay
- Brand story paragraph with a subtle gold left-border blockquote

### 3. Services
- Hero sub-banner with page title and breadcrumb
- 4 detailed service cards (full description, bullet benefits, icon)
  - Credit Analysis
  - Dispute Filing
  - Score Monitoring
  - Debt Validation
- Bottom CTA strip: "Not sure where to start? Talk to an expert."

### 4. How It Works
- Large numbered visual timeline (vertical on mobile, horizontal on desktop)
- Step 1: Free Consultation
- Step 2: Full Credit Review
- Step 3: Dispute & Repair
- Step 4: Monitor Your Progress
- Each step: icon, title, 2–3 sentence description
- Progress line animates with scroll

### 5. Testimonials
- Full-page testimonial grid with before/after credit score badges
- Star ratings, client first name + city
- Featured video testimonial placeholder (dark card with play button)
- Trust badges row: BBB, Google Reviews, Trustpilot-style icons

### 6. FAQ
- Animated accordion (Framer Motion `AnimatePresence`)
- 10 Q&As organized in 2 categories: "About Credit Repair" and "Working with Proximity"
- Gold chevron icon rotates on open/close
- Bottom: "Still have questions?" with link to Contact

### 7. Contact
- Split layout: left = contact info + map placeholder, right = form
- Form fields: Full Name, Email, Phone, Service of Interest (dropdown), Message
- Real-time Zod validation with inline gold error states
- Success state: animated gold checkmark + confirmation message
- Phone, email, and address with gold icons

---

## Global UI Components

| Component | Specification |
|---|---|
| Navbar | Sticky, blur-on-scroll, mobile hamburger menu with slide-in drawer |
| Footer | 4-column: Logo + tagline, Quick Links, Services, Contact Info. Social icons row. Legal disclaimer. |
| Back-to-Top Button | Fixed bottom-right, gold circle, appears after 400px scroll |
| Loading Screen | Brief gold logo animation on first load |
| 404 Page | On-brand error page with CTA back to Home |
| Toast Notifications | Success/error feedback system (for form submissions) |
| SEO Head Component | Reusable `<Head>` wrapper that accepts title, description, OG image per page |

**Legal Disclaimer (required in footer):**
> *"Results may vary. We do not guarantee specific credit score improvements."*

---

## Animation System (Framer Motion)

| Trigger | Animation |
|---|---|
| Page load | Hero headline word-by-word fade-in |
| Page transition | Fade + slight upward slide between routes |
| Scroll into view | Fade up + opacity 0→1 (staggered for lists) |
| Card hover | `translateY(-6px)` + glow shadow |
| Button hover | Scale 1.03, glow pulse |
| Button tap | Scale 0.97 |
| FAQ open/close | Height expand/collapse + icon rotate |
| Testimonial carousel | Smooth slide with fade |
| Counter stats | Count up from 0 on scroll enter |
| Timeline | Steps reveal sequentially on scroll |
| Mobile menu | Slide in from right |

---

## State Management (Zustand)

| Store | State It Manages |
|---|---|
| `uiStore` | Mobile menu open/close, scroll position, active nav item, toast queue |
| `formStore` | Contact form state, submission status, validation errors |

As the product grows, stores can be extended to handle: user auth session, client dashboard state, and CMS-fetched content.

---

## Data Layer (Future-Proof)

All content lives in typed data files in `/data`:

```
data/
├── services.ts       # Service card content
├── faqs.ts           # FAQ questions and answers
├── testimonials.ts   # Client testimonials and scores
├── team.ts           # Team member profiles
├── navigation.ts     # Navbar and footer links
└── siteMetadata.ts   # Site-wide SEO config
```

**When a CMS or backend is added (Phase 2), these files become API call responses — zero component changes required.**

---

## Environment Configuration

```
.env.development     # Local dev settings
.env.staging         # QA / preview environment
.env.production      # Live production values
```

Variables:
```
VITE_SITE_URL=
VITE_CONTACT_API_URL=
VITE_ANALYTICS_ID=
VITE_GOOGLE_MAPS_KEY=
```

---

## Scalable Growth Roadmap (Future Phases)

| Phase | Feature | Notes |
|---|---|---|
| Phase 1 | Marketing website (current PRD) | React + Vite, static data |
| Phase 2 | CMS integration | Connect Sanity or Contentful; data files → API calls |
| Phase 3 | Client portal | Auth (JWT), dashboard, credit score tracker, document upload |
| Phase 4 | Admin dashboard | Manage leads, clients, disputes, and progress internally |
| Phase 5 | Blog / Content hub | SEO-driven articles, credit tips, guides |
| Phase 6 | Payment integration | Subscription plans via Stripe, service invoicing |
| Phase 7 | Mobile app | React Native (code-share from existing React logic) |

The current architecture is designed so each phase can be added without rebuilding what came before.

---

## SEO Requirements

- Semantic HTML5 throughout (`h1`→`h6`, `main`, `section`, `article`, `nav`, `footer`)
- Unique `<title>` and `<meta name="description">` per page via reusable SEO Head component
- Alt text on every image
- Open Graph + Twitter Card meta tags
- Schema markup: `LocalBusiness`, `FAQPage`, `Service`
- Canonical URLs
- Sitemap-ready URL structure:
  - `/` — Home
  - `/about` — About Us
  - `/services` — Services
  - `/how-it-works` — How It Works
  - `/testimonials` — Testimonials
  - `/faq` — FAQ
  - `/contact` — Contact
- Image optimization: WebP format, lazy loading
- Core Web Vitals target: LCP < 2.5s, CLS < 0.1, FID < 100ms

---

## Content Tone & Voice

- **Tone:** Professional, empowering, and reassuring — never salesy or desperate
- **Voice:** A trusted financial expert speaking directly to someone who feels stuck
- **Power words to use:** proven, trusted, expert, results-driven, transparent, dedicated, certified
- **Avoid:** overpromising, vague claims, fear-based language
- **Social proof first:** Let testimonials and stats do the persuading

---

## Performance & Accessibility

- Lighthouse score target: 90+ across all categories (Performance, Accessibility, Best Practices, SEO)
- WCAG 2.1 AA compliance
- Keyboard navigable
- ARIA labels on interactive elements
- Focus-visible outlines in gold
- Color contrast ratio: minimum 4.5:1 for all text
- Code splitting: every route lazy-loaded via `React.lazy()` + `Suspense`
- Bundle analysis: `vite-bundle-visualizer` to monitor and keep bundle lean

---

## Definition of Done

**Phase 1 — Marketing Site**
- [ ] All 7 pages built, responsive across all breakpoints
- [ ] Scalable folder structure implemented from the start
- [ ] All content in `/data` files, zero hardcoded strings in components
- [ ] Reusable UI primitives in `/components/ui`
- [ ] Zustand stores configured for UI and form state
- [ ] Framer Motion animations on all sections and page transitions
- [ ] Brand colors and fonts defined in Tailwind config (not inline)
- [ ] Contact form functional with validation + success state + toast notification
- [ ] Animated stat counters working on scroll
- [ ] Testimonial carousel auto-rotating
- [ ] FAQ accordion with smooth animation
- [ ] Sticky navbar with blur + mobile drawer
- [ ] Back-to-top button functional
- [ ] SEO Head component used on every page
- [ ] Schema markup implemented
- [ ] Environment config files set up
- [ ] Legal disclaimer in footer
- [ ] Lighthouse 90+ score
- [ ] Zero console errors
- [ ] Deployed and live on Replit
