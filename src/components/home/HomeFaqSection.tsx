import { Link } from 'react-router'
import { homeFaqs } from '../../content/faqs'
import { SectionHeading } from '../ui/SectionHeading'
import { FaqAccordion } from '../ui/FaqAccordion'

export function HomeFaqSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-site max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="The objections that usually come last." />
        <div className="mt-12">
          <FaqAccordion items={homeFaqs} />
        </div>
        <p className="mt-10 text-small text-ink-600">
          More answers on fees, process and coverage —{' '}
          <Link
            to="/faq"
            className="font-semibold text-ink-900 underline-offset-4 hover:underline"
          >
            full FAQ
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
