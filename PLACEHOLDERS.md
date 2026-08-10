# Placeholders — supply before launch

Everything marked `PLACEHOLDER_*` must be replaced with verified business data. **Do not invent numbers, reviews, logos, or credentials.**

## Critical (blocks launch as “real”)

| Key | Where used | Notes |
|-----|------------|-------|
| `PLACEHOLDER_LICENCE` | Footer, About, JSON-LD | Public buyers agent / real estate licence number |
| `PLACEHOLDER_ABN` | Footer bottom bar | Currently fake `12 345 678 901` was removed — supply real ABN |
| `PLACEHOLDER_MEMBERSHIP_*` | Footer, About | REBAA, PIPA, or other — remove rows you do not hold |
| `PLACEHOLDER_REVIEW_RATING` / `PLACEHOLDER_REVIEW_COUNT` | Hero micro-trust | Only if real Google (or other) reviews exist |
| `PLACEHOLDER_GOOGLE_REVIEWS_URL` | Testimonials / trust | Previous URL looked truncated — supply working link |
| `PLACEHOLDER_STATS_*` | Trust bar | Purchased volume, homes secured, avg saved — **or** confirm we should derive only from the 17 `properties.ts` records (no “average saved” without data) |
| `BOOKING_URL` | Already set in `src/content/site.ts` | Confirm Calendly link is final |
| `PLACEHOLDER_FORM_ENDPOINT` | Callback form | Formspree / Netlify Forms / other POST URL |
| `PLACEHOLDER_GUIDE_FORM_ENDPOINT` | Guide download | Email capture endpoint |
| `PLACEHOLDER_QUIZ_FORM_ENDPOINT` | `/go/quiz` nurture leads | Falls back to guide endpoint if unset |
| `PLACEHOLDER_ASSET` | Guide PDF | Actual Playbook file URL or blob path |
| `PLACEHOLDER_META_PIXEL_ID` | Meta ads funnel (`/go/*`) | Facebook Pixel ID — required for Ads Manager optimization |
| `ANALYTICS_PLACEHOLDER` | GA4 / Plausible | Optional alongside Meta Pixel |

## Meta ads funnel (`/go`)

Use these URLs in Ads Manager (keep UTM + `fbclid` intact):

| Path | Role | Primary conversion event |
|------|------|--------------------------|
| `/go` | Landing — dual CTA | `ViewContent` |
| `/go/book` | Direct triage booking (Calendly) | `Schedule` / `InitiateCheckout` |
| `/go/quiz` | Qualifying quiz → segment | `CompleteRegistration` → `Lead` or book |

Quiz scoring: answers sum to a score; ≥8 → book CTA; below → Playbook opt-in. Events include `qualified`, `score`, and first-touch UTMs from `sessionStorage`.

## Important

| Key | Notes |
|-----|-------|
| `PLACEHOLDER_AREAS` | Footer SEO suburb/city links — edit list in `placeholders.ts` |
| `PLACEHOLDER_HERO_PHOTO` | Architectural exterior or founder-with-client (not stock handshake) |
| `PLACEHOLDER_FACEBOOK_URL` / Instagram / LinkedIn | Or remove social icons |
| Testimonial names & photos | Quotes migrated anonymised; supply real names/photos if permitted |
| Case study asking/guide vs purchase | `properties.ts` has purchase + valuation/growth — not asking price or “saved off asking” |
| Off-market badges | Flag which of the 17 were off-market |
| Drop unverified claims | Removed pending verification |

## Optional

- Press / “trusted by” logos
- Additional case study narrative (brief → hunt → outcome) per property
- Fee figures — **not published by design** (discovery call only)

## Files

- Constants: [`src/content/placeholders.ts`](src/content/placeholders.ts)
- Verified site facts: [`src/content/site.ts`](src/content/site.ts)
- Case data: [`src/data/properties.ts`](src/data/properties.ts)
