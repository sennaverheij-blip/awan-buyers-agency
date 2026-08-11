import { Link } from 'react-router'
import { authorityLinks } from '../../content/authority'

type Props = {
  className?: string
  /** Limit how many authority citations to show */
  limit?: number
}

/** Outbound citations to high-authority Australian sources (E-E-A-T). */
export function AuthorityCitations({ className, limit }: Props) {
  const links = limit ? authorityLinks.slice(0, limit) : authorityLinks
  return (
    <aside className={className} aria-label="Authoritative references">
      <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-400">
        Authoritative references
      </p>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-small font-semibold text-ink-900 underline-offset-4 hover:underline"
            >
              {link.label}
            </a>
            <p className="mt-1 text-small text-ink-600">{link.blurb}</p>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export function SeoInternalLinks() {
  return (
    <nav aria-label="Related guides" className="border-t border-border pt-10">
      <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-400">
        Keep exploring
      </p>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        <li>
          <Link
            to="/property-investment-australia"
            className="font-semibold text-ink-900 underline-offset-4 hover:underline"
          >
            Property investment in Australia
          </Link>
        </li>
        <li>
          <Link
            to="/muslim-property-investors"
            className="font-semibold text-ink-900 underline-offset-4 hover:underline"
          >
            For Muslim property investors
          </Link>
        </li>
        <li>
          <Link to="/services" className="font-semibold text-ink-900 underline-offset-4 hover:underline">
            Buyers agency services
          </Link>
        </li>
        <li>
          <Link
            to="/how-it-works"
            className="font-semibold text-ink-900 underline-offset-4 hover:underline"
          >
            How the process works
          </Link>
        </li>
        <li>
          <Link to="/results" className="font-semibold text-ink-900 underline-offset-4 hover:underline">
            Investment purchase results
          </Link>
        </li>
        <li>
          <Link to="/book" className="font-semibold text-ink-900 underline-offset-4 hover:underline">
            Book a free Strategy Call
          </Link>
        </li>
      </ul>
    </nav>
  )
}
