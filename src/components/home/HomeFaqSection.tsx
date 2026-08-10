import { Link } from 'react-router'
import { homeFaqs } from '../../content/faqs'
import { SectionHeading } from '../ui/SectionHeading'
import { FaqAccordion } from '../ui/FaqAccordion'

export function HomeFaqSection() {
  return (
    <section className="section-pad bg-cream-50">
      <div className="container-site max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="The objections that usually come last."
          align="left"
        />
        <div className="mt-10">
          <FaqAccordion items={homeFaqs} />
        </div>
        <p className="mt-8 text-small text-ink-600">
          More answers on fees, process and coverage —{' '}
          <Link to="/faq" className="font-medium text-navy-900 underline-offset-2 hover:underline">
            full FAQ
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
