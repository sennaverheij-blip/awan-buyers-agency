import { SITE } from '../../content/site'
import { Button } from '../ui/Button'
import { track } from '../../lib/analytics'
import heroImg from '../../assets/hero-architecture.jpg'

export function HomeHero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] items-end overflow-hidden bg-navy-950 pb-20 pt-28 lg:min-h-screen lg:items-center lg:pb-28 lg:pt-32"
    >
      <div className="absolute inset-0" aria-hidden>
        <img
          src={heroImg}
          alt=""
          width={1536}
          height={1024}
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-navy-950/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/25 to-navy-950/40" />
      </div>

      <div className="container-site relative z-10 max-w-3xl hero-settle">
        <p className="font-brand text-5xl tracking-[0.06em] text-white sm:text-6xl lg:text-7xl">
          {SITE.shortName}
        </p>
        <p className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold-400">
          Buyers Agency · {SITE.city}
        </p>
        <h1 className="mt-8 text-display font-bold text-white">{SITE.tagline}</h1>
        <p className="mt-5 max-w-xl text-lg text-white/75 sm:text-xl">
          We search, evaluate and negotiate on your behalf — including off-market homes you will
          never see on the portals.
        </p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button
            to="/book"
            variant="primary"
            onClick={() => track('cta_book_click', { location: 'hero' })}
          >
            Book a Free Discovery Call
          </Button>
          <a
            href="#how-it-works"
            className="inline-flex min-h-11 items-center text-small font-medium text-white/75 hover:text-white"
          >
            See how it works ↓
          </a>
        </div>
        <p className="mt-8 text-small text-white/50">
          Licensed &amp; independent · We never sell property · Free 20-minute discovery call
        </p>
      </div>
    </section>
  )
}
