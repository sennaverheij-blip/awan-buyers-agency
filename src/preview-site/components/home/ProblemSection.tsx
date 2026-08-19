import { CalendarX2, Gavel, EyeOff } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { FadeIn } from '../ui/FadeIn'
import { Link } from 'preview-router'

const pains = [
  {
    icon: CalendarX2,
    title: 'Months of Saturday inspections that go nowhere',
    body: 'You burn weekends while the right properties never make it onto your shortlist.',
  },
  {
    icon: Gavel,
    title: 'Emotional bidding wars against professionals',
    body: 'Selling agents and seasoned bidders do this every week. You should not be alone in the room.',
  },
  {
    icon: EyeOff,
    title: 'The best properties sell before they are listed',
    body: 'Off-market stock rewards relationships and speed — not portal alerts.',
  },
]

export function ProblemSection() {
  return (
    <section className="section-pad bg-ground">
      <div className="container-site">
        <SectionHeading
          eyebrow="Why a buyers agent"
          title="The selling agent works for the seller. Who's working for you?"
        />
        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
          {pains.map((p, i) => (
            <FadeIn key={p.title} delay={i * 60}>
              <div>
                <p.icon className="size-6 text-gold-500" strokeWidth={1.5} aria-hidden />
                <h3 className="mt-5 text-h3 font-bold text-ink-900">{p.title}</h3>
                <p className="mt-3 text-body text-ink-600">{p.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <p className="mt-14 text-small text-ink-600">
          Curious how the process removes that friction?{' '}
          <Link
            to="/how-it-works"
            className="font-semibold text-ink-900 underline-offset-4 hover:underline"
          >
            See how it works
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
