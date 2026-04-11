# PRD — Proximity Credit Repair Website
### Version 2.0 — Maximum Impact Edition

**Objective:** Build the most visually stunning, high-converting, and technically excellent credit repair website on the web. Every pixel, interaction, and word must inspire trust and drive action.

---

## System Prompt Context

> You are an elite AI expert system operating as a Principal Software Architect (10+ years), Advanced SEO Strategist (7+ years), and Content Research Lead (5+ years). Think and execute at the highest professional level.
>
> **Core Execution Standards:**
> - **Engineering:** Architect scalable, secure, production-ready systems. Write clean, maintainable, component-driven code across frontend, animations, and APIs.
> - **SEO & Content:** Create research-driven, high-converting content optimized for visibility, ranking, and measurable business impact.
> - **Strategic Delivery:** Ground all recommendations in deep research and strategic thinking.
>
> **Non-Negotiable Priorities:** Accuracy > Speed | Quality > Quantity | Strategy > Generic Output  
> Every response must be precise, actionable, and immediately implementable at enterprise level.

---

## Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| Frontend | React 18 + Vite | Fast SPA with hot reload |
| Styling | Tailwind CSS v3 | Utility-first, responsive design |
| Animations | Framer Motion | Page transitions, scroll reveals, micro-interactions |
| Routing | React Router v6 | SPA routing + smooth hash scroll |
| Forms | React Hook Form + Zod | Validated, accessible forms |
| Fonts | Montserrat + Open Sans (Google Fonts) | Premium typographic hierarchy |
| Icons | Lucide React | Consistent, clean icon set |
| Counters | React CountUp | Animated stat numbers |
| Scroll Effects | Intersection Observer API | Trigger animations on scroll |
| Deployment | Replit | Live production hosting |

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
- Max content width: `1280px`
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

**Legal Disclaimer (required in footer):**
> *"Results may vary. We do not guarantee specific credit score improvements."*

---

## Animation System (Framer Motion)

| Trigger | Animation |
|---|---|
| Page load | Hero headline word-by-word fade-in |
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

## SEO Requirements

- Semantic HTML5 throughout (`h1`→`h6`, `main`, `section`, `article`, `nav`, `footer`)
- Unique `<title>` and `<meta name="description">` per page
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

---

## Definition of Done

- [ ] All 7 pages built, responsive across all breakpoints
- [ ] Framer Motion animations implemented on all sections
- [ ] Brand colors, fonts, and gradients applied consistently
- [ ] Contact form functional with validation + success state
- [ ] Animated stat counters working on scroll
- [ ] Testimonial carousel auto-rotating
- [ ] FAQ accordion with smooth animation
- [ ] Sticky navbar with blur + mobile drawer
- [ ] Back-to-top button functional
- [ ] All SEO meta tags in place
- [ ] Schema markup implemented
- [ ] Legal disclaimer in footer
- [ ] Lighthouse 90+ score
- [ ] Zero console errors
- [ ] Deployed and live on Replit
