import { Eye, Target, Users, TrendingUp } from 'lucide-react'
import { motion } from 'motion/react'

const features = [
  {
    icon: Eye,
    stat: '78%',
    label: 'Off-Market Success',
    description: "We know where the exclusive opportunities are — and we get you in before everyone else.",
  },
  {
    icon: Target,
    stat: '100+',
    label: 'Hours Saved',
    description: "We do the research, the calls, and the negotiating — so you don't have to.",
  },
  {
    icon: Users,
    stat: '70%',
    label: 'Repeat Clients',
    description: "Over 70% of our clients come back for their second or third property because we focus on service & results, not quick wins. We help you map out clear, achievable goals and build lasting wealth through smart property decisions.",
  },
  {
    icon: TrendingUp,
    stat: '15%+',
    label: 'Above Market Growth',
    description: "Our strategies are driven by data — not emotion. We target suburbs with proven growth, strong rental demand, and low vacancy rates, ensuring every property performs above market averages.",
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
            Stop wasting time on overpriced properties. Get exclusive access to off-market deals
            and expert negotiation that saves you $50K-$200K+.
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
              <p className="text-4xl font-bold text-primary mb-1">{feature.stat}</p>
              <p className="text-lg font-semibold text-primary mb-3">{feature.label}</p>
              <p className="text-primary/60 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
