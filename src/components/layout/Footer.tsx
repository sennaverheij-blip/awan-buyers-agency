import { Link } from 'react-router'
import { SITE, navLinks } from '../../content/site'
import {
  PLACEHOLDER_ABN,
  PLACEHOLDER_AREAS,
  PLACEHOLDER_LICENCE,
  PLACEHOLDER_MEMBERSHIPS,
} from '../../content/placeholders'
import { track } from '../../lib/analytics'

type Props = {
  legalOnly?: boolean
}

export function Footer({ legalOnly = false }: Props) {
  if (legalOnly) {
    return (
      <footer className="border-t border-white/10 bg-navy-950 py-6 text-center text-small text-white/45">
        <div className="container-site flex flex-wrap items-center justify-center gap-4">
          <Link to="/privacy" className="hover:text-white">
            Privacy
          </Link>
          <Link to="/terms" className="hover:text-white">
            Terms
          </Link>
          <span>
            © {SITE.year} {SITE.legalName}
          </span>
        </div>
      </footer>
    )
  }

  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-site section-pad !pb-14 !pt-20">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <p className="font-brand text-3xl tracking-[0.04em] text-white">{SITE.shortName}</p>
            <p className="mt-1 text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-white/45">
              Buyers Agency
            </p>
            <p className="mt-5 max-w-xs text-small leading-relaxed text-white/55">
              Independent buyers representation across {SITE.city} — search, evaluate, negotiate.
            </p>
            <p className="mt-6 text-small text-white/40">Licence: {PLACEHOLDER_LICENCE}</p>
            <ul className="mt-2 space-y-1 text-small text-white/40">
              {PLACEHOLDER_MEMBERSHIPS.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-white/40">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-small text-white/70 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/book" className="text-small text-white/70 hover:text-white">
                  Book a call
                </Link>
              </li>
              <li>
                <Link to="/guide" className="text-small text-white/70 hover:text-white">
                  Free playbook
                </Link>
              </li>
              <li>
                <Link
                  to="/property-investment-australia"
                  className="text-small text-white/70 hover:text-white"
                >
                  Property investment
                </Link>
              </li>
              <li>
                <Link
                  to="/muslim-property-investors"
                  className="text-small text-white/70 hover:text-white"
                >
                  Muslim investors
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-white/40">
              Service areas
            </p>
            <ul className="mt-5 space-y-3">
              {PLACEHOLDER_AREAS.map((area) => (
                <li key={area} className="text-small text-white/70">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-white/40">
              Contact
            </p>
            <ul className="mt-5 space-y-3 text-small text-white/70">
              <li>
                <a
                  href={SITE.phone.href}
                  className="hover:text-white"
                  onClick={() => track('phone_click', { location: 'footer' })}
                >
                  {SITE.phone.display}
                </a>
              </li>
              <li>
                <a href={SITE.email.href} className="hover:text-white">
                  {SITE.email.display}
                </a>
              </li>
              <li className="text-white/50">
                {SITE.address.line1}
                <br />
                {SITE.address.suburb} {SITE.address.state} {SITE.address.postcode}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-site flex flex-col gap-3 text-small text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            ABN: {PLACEHOLDER_ABN} · © {SITE.year} {SITE.legalName}
          </p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
