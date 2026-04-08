import { Target, Users, Search, Handshake } from 'lucide-react'
import { motion } from 'motion/react'

const features = [
  {
    icon: Target,
    label: 'Strategy Before Property',
    description: "We don't start with listings. We start with your goals. Every acquisition is aligned to a clear, long-term investment strategy.",
  },
  {
    icon: Users,
    label: 'Proven Results & Repeat Clients',
    description: "Our business is built on referrals and repeat investors. A reflection of consistent outcomes and trust.",
  },
  {
    icon: Search,
    label: 'Access to the Right Opportunities',
    description: "We source both on-market and off-market opportunities, focusing on assets with strong fundamentals — not hype.",
  },
  {
    icon: Handshake,
    label: 'End-to-End Partnership',
    description: "From strategy through to settlement, we manage the process, coordinate key stakeholders, and guide every decision so you can move with confidence.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            Why Work With Us
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary">
            We Do The Hard Work, You Reap The Rewards
          </h2>
          <p className="mt-4 text-lg text-primary/60 max-w-3xl mx-auto">
            We work alongside you at every stage, from strategy to settlement, ensuring every decision
            is considered, aligned, and built for long-term success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-primary/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <feature.icon className="w-10 h-10 text-accent mb-4" />
              <p className="text-xl font-bold text-primary mb-3">{feature.label}</p>
              <p className="text-primary/60 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
