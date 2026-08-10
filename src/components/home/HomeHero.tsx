import { SITE } from '../../content/site'
import { Button } from '../ui/Button'
import { track } from '../../lib/analytics'
import heroImg from '../../assets/hero-architecture.jpg'

export function HomeHero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-navy-950 pb-[max(5rem,env(safe-area-inset-bottom))] pt-[5.5rem] sm:pb-24 sm:pt-28 lg:min-h-screen lg:items-center lg:pb-32 lg:pt-36"
    >
      <div className="absolute inset-0" aria-hidden>
        <img
          src={heroImg}
          alt=""
          width={1536}
          height={1024}
          className="h-full w-full scale-105 object-cover object-[72%_center] sm:object-[60%_center] lg:object-center"
          fetchPriority="high"
        />
        {/* Dense washes so type never fights the photo on any breakpoint */}
        <div className="absolute inset-0 bg-navy-950/75 sm:bg-navy-950/65 lg:bg-navy-950/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 from-15% via-navy-950/70 to-navy-950/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/50 to-navy-950/20 sm:via-navy-950/40 sm:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-navy-950 to-transparent sm:h-1/3" />
      </div>

      <div className="container-site relative z-10 w-full max-w-3xl hero-settle">
        <p className="hero-copy font-brand text-[2.35rem] leading-none tracking-[0.06em] text-white sm:text-5xl lg:text-7xl">
          {SITE.shortName}
        </p>
        <p className="mt-2.5 text-[0.625rem] font-semibold uppercase tracking-[0.22em] text-gold-400 sm:text-[0.7rem]">
          Buyers Agency · {SITE.city}
        </p>
        <h1 className="hero-copy mt-5 max-w-[16ch] text-[1.65rem] font-bold leading-[1.18] tracking-tight text-white sm:mt-7 sm:max-w-[20ch] sm:text-[2.35rem] sm:leading-[1.12] lg:mt-8 lg:max-w-none lg:text-display">
          {SITE.tagline}
        </h1>
        <p className="hero-copy mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-white/85 sm:mt-5 sm:text-lg lg:text-xl">
          We search, evaluate and negotiate on your behalf — including off-market homes you will
          never see on the portals.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center sm:gap-5">
          <Button
            to="/book"
            variant="primary"
            className="w-full shadow-[0_8px_24px_rgb(0_0_0/0.35)] sm:w-auto"
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
        <p className="mt-5 max-w-md text-[0.75rem] leading-relaxed text-white/70 sm:mt-7 sm:text-small">
          Licensed &amp; independent · We never sell property · Free 20-minute discovery call
        </p>
      </div>
    </section>
  )
}
