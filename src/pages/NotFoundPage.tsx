import { Link } from 'react-router'
import { Helmet } from 'react-helmet-async'
import { Button } from '../components/ui/Button'
import { track } from '../lib/analytics'
import { SITE } from '../content/site'

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>{`Page not found | ${SITE.name}`}</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <section className="flex min-h-[70vh] flex-col items-center justify-center bg-navy-950 px-4 pb-20 pt-32 text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-display text-h1 text-white">This page is off-market.</h1>
        <p className="mt-4 max-w-md text-body text-white/70">
          The link may be outdated. Head home — or book a Strategy Call while you are here.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            to="/book"
            variant="primary"
            onClick={() => track('cta_book_click', { location: '404' })}
          >
            Book a Free Strategy Call
          </Button>
          <Link
            to="/"
            className="inline-flex min-h-11 items-center justify-center text-small text-white/70 hover:text-gold-400"
          >
            Back home
          </Link>
        </div>
      </section>
    </>
  )
}
