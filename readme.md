# Voicely Landing Page

Landing page for [Voicely](https://voicely.app) — a desktop voice-to-text application for macOS that supports Hindi, Marathi, and English. Processes speech entirely on-device for privacy.

Collects email signups for an early-access waitlist via Supabase, sends confirmation emails via Resend.

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | [Next.js](https://nextjs.org/) 16 (App Router, Turbopack) |
| Language | TypeScript 5, React 19 |
| Styling | [Tailwind CSS](https://tailwindcss.com/) v4 with `@theme` tokens |
| Animation | [Framer Motion](https://motion.dev/) 12 |
| UI Primitives | [Radix UI](https://radix-ui.com/) (Accordion, Dialog/Sheet, Slot) |
| Icons | [Lucide React](https://lucide.dev/) |
| Database | [Supabase](https://supabase.com/) (waitlist emails) |
| Email | [Resend](https://resend.com/) (confirmation emails) |
| Font | Inter via `next/font/google` |
| Linting | ESLint with `eslint-config-next` |
| Deployment | Optimized for Vercel |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server (Turbopack)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## Scripts

| Script | Command | Description |
|---|---|---|
| `dev` | `next dev --turbopack` | Start dev server |
| `build` | `next build` | Production build |
| `start` | `next start` | Start production server |
| `lint` | `next lint` | Run ESLint |

---

## Environment Variables

Copy `.env.local.example` to `.env.local`:

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key (public) |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (server-side only) |
| `RESEND_API_KEY` | Resend API key for confirmation emails |
| `NEXT_PUBLIC_DEMO_VIDEO_URL` | URL to demo video MP4 |
| `NEXT_PUBLIC_WAITLIST_COUNT` | Number shown in counter (default: 1200) |

---

## Project Structure

```
app/
├── api/waitlist/route.ts      POST /api/waitlist — email signup endpoint
├── globals.css                 Tailwind v4 styles + custom theme tokens
├── layout.tsx                  Root layout, metadata, SEO, favicon
├── page.tsx                    Home page composing all sections
├── privacy-policy/page.tsx     Privacy policy
├── refund-policy/page.tsx      Refund policy
└── terms-of-service/page.tsx   Terms of service

components/
├── layout/
│   ├── Navbar.tsx              Scroll-aware nav, mobile sheet menu
│   └── Footer.tsx              4-column footer with legal/social links
├── sections/
│   ├── HeroSection.tsx                  Hero with waitlist form, animated counter, SVG
│   ├── PerformanceStatsBar.tsx           Animated stat counters
│   ├── DemoVideo.tsx                     Video player section
│   ├── SpeedComparisonSection.tsx        45 wpm vs 135+ wpm comparison
│   ├── FeaturesGrid.tsx                  6-card feature grid (3x3 on desktop)
│   ├── FeatureSpecsSection.tsx           Deep-dive voice commands, shortcuts, punctuation
│   ├── PlatformSpecsSection.tsx          macOS requirements, system specs
│   ├── HowItWorks.tsx                    3-step process
│   ├── LanguageSupport.tsx               Hindi/Marathi/English badges
│   ├── PrivacyBadge.tsx                  On-device privacy section
│   ├── PricingPreview.tsx                2 pricing cards (Free Starter / Pro Coming Soon)
│   ├── FAQSection.tsx                    Accordion FAQ (7 items)
│   └── FooterCTA.tsx                     Final waitlist CTA
└── ui/
    ├── accordion.tsx           Radix Accordion wrapper
    ├── badge.tsx               Variant badge (default, secondary, outline, indigo)
    ├── button.tsx              Variant button with asChild support
    ├── index.ts                Re-exports
    ├── input.tsx               Styled input
    └── sheet.tsx               Radix Dialog sheet (mobile menu)

lib/
├── resend.ts                   Resend client (lazy singleton)
├── supabase.ts                 Supabase client + admin (lazy from env)
└── utils.ts                    cn() utility (clsx + tailwind-merge)

public/
├── favicon.svg                 Site favicon
├── hero-illustration.svg       Hero section SVG
├── og-image.svg                Open Graph / Twitter card (1200×630)
└── poster-placeholder.svg      Video poster placeholder
```

---

## Components Overview

### Layout
- **Navbar** — Fixed header; scroll-aware transparent-to-white background; desktop links (Features, How It Works, Pricing, FAQ) + Join Waitlist button; mobile uses a Radix Sheet slide-in menu.
- **Footer** — 4-column grid: brand, product links, company links, legal links; animated scroll-in via `framer-motion`.

### Sections (in page order)

| Section | Description |
|---|---|
| HeroSection | Badge + headline + waitlist form + animated count-up (1,200+) + mic SVG + language pill |
| PerformanceStatsBar | 4 animated counters (95% accuracy, <500ms latency, 3x faster, on-device) |
| DemoVideo | HTML5 video player with poster, source from env var |
| SpeedComparisonSection | Two-card layout: 45 wpm typing vs 135+ wpm speaking with 3x badge |
| FeaturesGrid | 6 cards: Instant Transcription, AI Accuracy, Indian Languages, Privacy, Custom Commands, Free to Start |
| FeatureSpecsSection | 3 deep-dive cards with inline SVG illustrations |
| PlatformSpecsSection | macOS 12+ requirements, M1/Core i5, 4GB RAM, 200MB disk |
| HowItWorks | 3-step process (Download → Press & Speak → It Types) with connector arrows |
| LanguageSupport | Hindi/Marathi/English pills + more coming soon |
| PrivacyBadge | On-device, no data stored, GDPR-ready |
| PricingPreview | ₹0 Starter (30 min/day) vs Coming Soon Pro (unlimited) |
| FAQSection | 7 Radix Accordion items covering pricing, privacy, requirements, launch |
| FooterCTA | Full-width indigo→violet gradient with waitlist form |

---

## API

### POST /api/waitlist

Saves an email to the Supabase waitlist and sends a confirmation via Resend.

**Request:**
```json
{ "email": "user@example.com" }
```

**Responses:**
| Status | Description |
|---|---|
| 200 | Successfully added to waitlist |
| 400 | Missing or invalid email |
| 409 | Email already registered |
| 500 | Server error |

**Supabase schema (`waitlist_emails`):**
- `id` — UUID primary key
- `email` — TEXT, unique
- `source` — TEXT, default `'landing_page'`
- `created_at` — TIMESTAMPTZ

---

## Design Decisions

- **SVG illustrations** are inline React components (not `<img>` or external files) for animation support and direct Tailwind styling.
- **Feature cards** use `Card` component from `@/components/ui/card` with `framer-motion` stagger animations.
- **Language support section** uses a gradient background (indigo→violet) to create visual separation.
- **Waitlist form** appears in both Hero and FooterCTA; both POST to the same endpoint.
- The `voicely/` directory at project root is an archived Next.js 14 prototype and is excluded from the active build.

---

## Deployment

Deploy on Vercel:

```bash
npm run build
```

Set all environment variables in your Vercel project dashboard. The `NEXT_PUBLIC_*` variables need to be available at build time.

---

## License

Private — all rights reserved.
