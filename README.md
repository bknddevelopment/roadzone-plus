# RoadZone Plus

Client website for RoadZone Plus, a 24/7 roadside assistance company serving Orlando and Central Florida.

## Stack

- Next.js App Router
- React
- Tailwind CSS
- pnpm

## Local Commands

```bash
pnpm install
pnpm dev
pnpm build
```

## Launch Notes

- Live domain: `https://roadzoneplus.com`
- Primary CTA: call `(407) 222-2739`
- Hosting: Vercel
- Google Search Console: URL-prefix property verified for `https://roadzoneplus.com/`
- Sitemap: submitted in GSC with 24 discovered URLs

## Lead Tracking

The site automatically records clicks on every `tel:` link as `phone_call_click`.

To send those events to GA4, set this Vercel environment variable:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```
