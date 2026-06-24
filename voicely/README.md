# Voicely — Waitlist Landing Page

Voicely is a desktop voice-to-text application that lets you speak and type anywhere on your desktop — faster than you can type, smarter than you expect. Supports Hindi, Marathi & English.

## Features

- **Instant Transcription**: Words appear as you speak — no delay, no lag
- **AI-Powered Accuracy**: Built on a fine-tuned model. Understands context, not just words
- **Indian Language Support**: Speak in Hindi or Marathi. Voicely gets it right
- **Privacy-First**: Nothing leaves your device. No cloud. No logs. Ever
- **Custom Voice Commands**: Say "new paragraph" or "send email" — it just works
- **Free to Start**: Core features are free, always. Upgrade only when you're ready

## Tech Stack

- Framework: Next.js 14 with App Router and TypeScript
- Styling: Tailwind CSS
- Component Library: shadcn/ui
- Animations: Framer Motion
- Database: Supabase
- Email: Resend
- Deployment target: Vercel

## Project Structure

```
voicely/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── privacy-policy/
│   │   └── page.tsx
│   ├── terms-of-service/
│   │   └── page.tsx
│   ├── refund-policy/
│   │   └── page.tsx
│   └── api/
│       └── waitlist/
│           └── route.ts
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── DemoVideo.tsx
│       ├── FeaturesGrid.tsx
│       ├── HowItWorks.tsx
│       ├── LanguageSupport.tsx
│       ├── PrivacyBadge.tsx
│       ├── PricingPreview.tsx
│       ├── FAQSection.tsx
│       └── FooterCTA.tsx
├── lib/
│   ├── supabase.ts
│   └── resend.ts
└── .env.local.example
```

## Local Development

```bash
npm install
npm run dev
```

## Build and Deploy

```bash
npm run build
npm start
```

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your values:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here
RESEND_API_KEY=your_resend_api_key_here
NEXT_PUBLIC_DEMO_VIDEO_URL=https://your-video-url.mp4
NEXT_PUBLIC_WAITLIST_COUNT=1200
```

## Legal

- Privacy Policy: `/privacy-policy`
- Terms of Service: `/terms-of-service`
- Refund Policy: `/refund-policy`

## Credits

- Icons: lucide-react
- UI Components: shadcn/ui
- Animations: Framer Motion
- Fonts: Inter, Geist