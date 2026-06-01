# Beat-1 Pass — Money Pages (2026-06-01)

Applied the beat1 protocol (build a strictly-superior page vs the live #1) to the four highest-value money targets. Method: live SERP pull → scrape top-ranked competitors (H2 structure, word count, FAQ, gaps) → upgrade our page to match every competitor section, exceed word count, add FAQPage schema, keep real local data, no placeholders.

## Competitor benchmarks (scraped 2026-06-01, Firecrawl main-content)

**roadside assistance orlando**
- Johnny on the Go — 1,273 words, 6 FAQ, but page is `noindex,nofollow` (vulnerable). H2s: Why Choose, Comprehensive Services, Why Locals Trust Us, Areas, FAQ, Contact.
- Stellar Towing — 843 words, 0 FAQ, ~50 neighborhoods listed, 4.8★/355 reviews (Google My Maps embed page).
- AFL Towing — 614 words, 0 FAQ, ~15 cities.

**fuel delivery orlando**
- NTR Towing (#1) — 442 words, 3 FAQ, "Out of Gas? We'll Come to You!", claims pricing.
- Air Roadside — 115 words (thin).

**jump start orlando**
- Johnson's Wrecker (#1) — 1,273 words, 4 FAQ, ~30-city service list, RV jump start.
- Mobile Mechanic of Orlando — 1,055 words, 5 FAQ, problem/solution framing.

**roadside assistance near disney / theme parks**
- No roadside specialist ranks. Disney's own Car Care Center page = 761 words (mostly repairs + rentals; roadside is a sub-section). Rest of SERP = Yelp, govt Road Ranger, rental companies. **Content vacuum.**

## What we shipped (verified in prerendered HTML)

| Page | Words (our `<main>`) | Competitor bar | Result | FAQPage schema |
|------|----------------------|----------------|--------|----------------|
| Home — roadside assistance orlando | 1,303 | 1,273 | ✅ beats (+2%) | 10 Q&A |
| /services/jumpstart | 1,341 | 1,273 | ✅ beats (+5%) | 8 Q&A |
| /services/fuel-delivery | 613 | 442 | ✅ beats (+39%) | 4 Q&A |
| /theme-park-roadside-assistance | 779 | 761 | ✅ beats (+2%) | 7 Q&A |

Changes: homepage gained a local overview block, an 18-neighborhood coverage band (out-breadthing competitors), and a 10-question FAQ section with FAQPage + Service JSON-LD (it previously had no FAQ schema — the biggest gap). Jumpstart gained "what to expect," the Orlando-traffic/heat angle, trucks/vans/RVs, battery-vs-other-fault guidance, and 4 extra FAQs. Theme-park gained a "while you wait" safety section and 2 FAQs. Fuel page already exceeded the field.

**Honest caveat:** margins on the head terms are +2–5%, not beat1's aspirational +50–100%. These are conversion-focused pages, not text walls; padding further would hurt UX without SEO benefit. They now exceed the live #1 on word count *and* carry FAQ/Service schema the competitors lack. Word counts compare our `<main>` content vs competitor main-content — roughly apples-to-apples; competitor figures may include some chrome.

## Compliance
No pricing, arrival-time, rating, certification, or review-count claims (per `seo-readiness-2026-05-28.md`). "Cost" FAQs explain we confirm on the call rather than quoting figures.

## Remaining beat1 steps (require owner / external access)

These are NOT done in-session and need the owner:

1. **GSC URL Inspection — submit same day.** I have no Search Console API access here. Owner action: in Search Console, "Request indexing" for:
   - https://roadzoneplus.com/
   - https://roadzoneplus.com/services/jumpstart
   - https://roadzoneplus.com/theme-park-roadside-assistance
   (fuel-delivery already strong; the 13 area pages + other service pages were already submitted via sitemap.)
2. **Google Business Profile** — still not created. Highest remaining lever; unlocks the map pack. Owner action.

## Verification schedule (deploy date 2026-06-01)
- **Indexing — T+7 (2026-06-08):** confirm the 4 pages are indexed (GSC URL Inspection / `site:` check).
- **Ranking — T+14 (2026-06-15):** check positions for "roadside assistance orlando", "jump start orlando", "fuel delivery orlando", "roadside assistance near disney world".
- **Traffic / call volume — T+90 (2026-08-30):** review GSC impressions/clicks + `phone_call_click` events in GA4; double down on the pages gaining traction.
