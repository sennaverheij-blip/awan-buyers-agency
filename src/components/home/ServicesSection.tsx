import { Link } from 'react-router'
import { serviceTiers } from '../../content/services'
import { SectionHeading } from '../ui/SectionHeading'
import { FadeIn } from '../ui/FadeIn'
import { cn } from '../../lib/utils'

export function ServicesSection() {
  return (
    <section className="section-pad bg-navy-900">
      <div className="container-site">
        <SectionHeading
          eyebrow="What we do"
          title="Your entire purchase, handled."
          tone="dark"
          lede="Three clear tiers. One standard of independence — we never sell property."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {serviceTiers.map((tier, i) => (
            <FadeIn key={tier.id} delay={i * 60}>
              <article
                className={cn(
                  'flex h-full flex-col rounded-card border border-navy-800 bg-navy-800/60 p-6',
                  tier.popular && 'border-t-4 border-t-gold-500',
                )}
              >
                {tier.popular && (
                  <p className="eyebrow mb-3 text-gold-400">Most popular</p>
                )}
                <h3 className="font-display text-h3 text-white">{tier.name}</h3>
                <p className="mt-2 text-body text-cream-100/75">{tier.promise}</p>
                <ul className="mt-6 flex-1 space-y-2 text-small text-cream-100/70">
                  {tier.inclusions.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-gold-400" aria-hidden>
                        ·
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="mt-6 inline-flex min-h-11 items-center text-small font-medium text-gold-400 hover:text-gold-400/80"
                >
                  Learn more →
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
