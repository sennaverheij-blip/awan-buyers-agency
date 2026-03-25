import { Search, FileText, Home, Key, ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Discovery & Strategy',
    description: 'We understand your needs, preferences, and budget to create a personalized buying strategy.',
    details: ['Initial consultation', 'Budget assessment', 'Area analysis', 'Strategy development'],
  },
  {
    icon: FileText,
    number: '02',
    title: 'Property Research',
    description: 'Access to off-market properties and comprehensive market analysis to find hidden gems.',
    details: ['Off-market access', 'Market research', 'Property shortlisting', 'Due diligence'],
  },
  {
    icon: Home,
    number: '03',
    title: 'Inspection & Evaluation',
    description: 'Professional property inspections and detailed evaluations to ensure the best investment.',
    details: ['Property inspections', 'Market evaluation', 'Investment analysis', 'Risk assessment'],
  },
  {
    icon: Key,
    number: '04',
    title: 'Negotiation & Settlement',
    description: 'Expert negotiation to secure the best price and smooth settlement process.',
    details: ['Price negotiation', 'Contract review', 'Settlement coordination', 'Keys in hand'],
  },
]

export default function ProcessFlow() {
  const scrollToBooking = () => {
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-20 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Process
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary">
            How We Find Your Perfect Property
          </h2>
          <p className="mt-4 text-lg text-primary/60 max-w-3xl mx-auto">
            Our proven 4-step process ensures you get the best property at the best price,
            with minimal stress and maximum results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-primary/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative"
            >
              <span className="text-6xl font-bold text-primary/5 absolute top-4 right-4">
                {step.number}
              </span>
              <step.icon className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
              <p className="text-primary/60 mb-4 text-sm">{step.description}</p>
              <ul className="space-y-2">
                {step.details.map((detail) => (
                  <li key={detail} className="text-sm text-primary/50 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-primary rounded-2xl p-10 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-3">Ready to Start Your Journey?</h3>
          <p className="text-white/70 max-w-2xl mx-auto mb-6">
            Let's schedule a free consultation to discuss your property goals and create your
            personalized strategy.
          </p>
          <button
            onClick={scrollToBooking}
            className="bg-accent text-white px-8 py-4 rounded-xl hover:bg-accent/80 transition-colors duration-300 inline-flex items-center gap-2 font-semibold text-lg shadow-lg"
          >
            Book Free Consultation <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
