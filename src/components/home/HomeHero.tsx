import { SITE } from '../../content/site'
import { PLACEHOLDER_REVIEWS } from '../../content/placeholders'
import { Button } from '../ui/Button'
import { track } from '../../lib/analytics'
import sohaibImg from '../../assets/sohaib-original.png'

export function HomeHero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[85vh] items-end overflow-hidden bg-navy-950 pb-16 pt-28 lg:items-center lg:pb-24 lg:pt-32"
    >
      <div className="absolute inset-0" aria-hidden>
        <img
          src={sohaibImg}
          alt=""
          width={900}
          height={1200}
          className="h-full w-full object-cover object-top opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" />
      </div>

      <div className="container-site relative z-10 max-w-3xl">
        <p className="eyebrow">Buyers Agency · {SITE.city}</p>
        <h1 className="mt-4 font-display text-display text-white">{SITE.tagline}</h1>
        <p className="mt-5 max-w-prose text-body text-cream-100/75">
          {SITE.name} searches, evaluates and negotiates on your behalf — including off-market
          homes you will never see on the portals. You get the property; we handle the fight.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button
            to="/book"
            variant="primary"
            onClick={() => track('cta_book_click', { location: 'hero' })}
          >
            Book a Free Discovery Call
          </Button>
          <a
            href="#how-it-works"
            className="inline-flex min-h-11 items-center text-small font-medium text-cream-100/80 hover:text-gold-400"
          >
            See how it works ↓
          </a>
        </div>
        <p className="mt-6 text-small text-cream-100/55">
          ★ {PLACEHOLDER_REVIEWS.rating} · {PLACEHOLDER_REVIEWS.count} reviews · Licensed &amp;
          independent · No conflict — we never sell property
        </p>
      </div>
    </section>
  )
}
