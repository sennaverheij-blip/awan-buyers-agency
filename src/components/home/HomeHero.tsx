import { SITE } from '../../content/site'
import { Button } from '../ui/Button'
import { track } from '../../lib/analytics'
import heroImg from '../../assets/hero-architecture.jpg'

export function HomeHero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-navy-950 pb-16 pt-24 sm:pb-20 sm:pt-28 lg:min-h-screen lg:items-center lg:pb-28 lg:pt-32"
    >
      <div className="absolute inset-0" aria-hidden>
        <img
          src={heroImg}
          alt=""
          width={1536}
          height={1024}
          className="h-full w-full scale-105 object-cover object-[68%_center] sm:object-center"
          fetchPriority="high"
        />
        {/* Strong readable wash — especially on mobile where photo detail fights type */}
        <div className="absolute inset-0 bg-navy-950/70 sm:bg-navy-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/55 to-navy-950/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-navy-950/35 to-transparent" />
      </div>

      <div className="container-site relative z-10 w-full max-w-3xl hero-settle">
        <p className="font-brand text-[2.75rem] leading-none tracking-[0.06em] text-white sm:text-5xl lg:text-7xl">
          {SITE.shortName}
        </p>
        <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-400 sm:text-[0.7rem] sm:tracking-[0.22em]">
          Buyers Agency · {SITE.city}
        </p>
        <h1 className="mt-6 max-w-[18ch] text-[1.85rem] font-bold leading-[1.15] tracking-tight text-white sm:mt-8 sm:max-w-none sm:text-display">
          {SITE.tagline}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:mt-5 sm:text-lg lg:text-xl">
          We search, evaluate and negotiate on your behalf — including off-market homes you will
          never see on the portals.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center sm:gap-4">
          <Button
            to="/book"
            variant="primary"
            className="w-full sm:w-auto"
            onClick={() => track('cta_book_click', { location: 'hero' })}
          >
            Book a Free Discovery Call
          </Button>
          <a
            href="#how-it-works"
            className="inline-flex min-h-11 items-center justify-center text-small font-medium text-white/80 hover:text-white sm:justify-start"
          >
            See how it works ↓
          </a>
        </div>
        <p className="mt-6 max-w-md text-[0.8125rem] leading-relaxed text-white/55 sm:mt-8 sm:text-small">
          Licensed &amp; independent · We never sell property · Free 20-minute discovery call
        </p>
      </div>
    </section>
  )
}
