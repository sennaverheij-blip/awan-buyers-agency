import { Link } from 'react-router'
import { SITE, navLinks } from '../../content/site'
import {
  PLACEHOLDER_ABN,
  PLACEHOLDER_AREAS,
  PLACEHOLDER_LICENCE,
  PLACEHOLDER_MEMBERSHIPS,
  PLACEHOLDER_SOCIALS,
} from '../../content/placeholders'
import { track } from '../../lib/analytics'

type Props = {
  legalOnly?: boolean
}

export function Footer({ legalOnly = false }: Props) {
  if (legalOnly) {
    return (
      <footer className="border-t border-navy-800 bg-navy-950 py-6 text-center text-small text-cream-100/60">
        <div className="container-site flex flex-wrap items-center justify-center gap-4">
          <Link to="/privacy" className="hover:text-gold-400">
            Privacy
          </Link>
          <Link to="/terms" className="hover:text-gold-400">
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
    <footer className="bg-navy-950 text-cream-100">
      <div className="container-site section-pad !pb-12 !pt-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-3xl text-white">{SITE.shortName}</p>
            <p className="mt-1 text-[0.65rem] uppercase tracking-[0.18em] text-gold-400">
              Buyers Agency
            </p>
            <p className="mt-4 text-small text-cream-100/70">
              Independent buyers representation across {SITE.city} — search, evaluate, negotiate.
            </p>
            <p className="mt-4 text-small text-cream-100/55">
              Licence: {PLACEHOLDER_LICENCE}
            </p>
            <ul className="mt-2 space-y-1 text-small text-cream-100/55">
              {PLACEHOLDER_MEMBERSHIPS.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-small font-semibold uppercase tracking-wider text-gold-400">
              Explore
            </p>
            <ul className="mt-4 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-small hover:text-gold-400">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/book" className="text-small hover:text-gold-400">
                  Book a call
                </Link>
              </li>
              <li>
                <Link to="/guide" className="text-small hover:text-gold-400">
                  Free playbook
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-small font-semibold uppercase tracking-wider text-gold-400">
              Service areas
            </p>
            <ul className="mt-4 space-y-3">
              {PLACEHOLDER_AREAS.map((area) => (
                <li key={area} className="text-small text-cream-100/75">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-small font-semibold uppercase tracking-wider text-gold-400">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-small">
              <li>
                <a
                  href={SITE.phone.href}
                  className="hover:text-gold-400"
                  onClick={() => track('phone_click', { location: 'footer' })}
                >
                  {SITE.phone.display}
                </a>
              </li>
              <li>
                <a href={SITE.email.href} className="hover:text-gold-400">
                  {SITE.email.display}
                </a>
              </li>
              <li className="text-cream-100/70">
                {SITE.address.line1}
                <br />
                {SITE.address.suburb} {SITE.address.state} {SITE.address.postcode}
              </li>
            </ul>
            <ul className="mt-4 flex gap-4 text-small text-cream-100/55">
              <li>
                <span title={PLACEHOLDER_SOCIALS.facebook}>Facebook</span>
              </li>
              <li>
                <span title={PLACEHOLDER_SOCIALS.instagram}>Instagram</span>
              </li>
              <li>
                <span title={PLACEHOLDER_SOCIALS.linkedin}>LinkedIn</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-navy-800 py-5">
        <div className="container-site flex flex-col gap-3 text-small text-cream-100/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            ABN: {PLACEHOLDER_ABN} · © {SITE.year} {SITE.legalName}
          </p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-gold-400">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-gold-400">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
