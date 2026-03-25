import { ArrowRight, Home, Users, CheckCircle, TrendingUp } from 'lucide-react'
import { motion } from 'motion/react'

const stats = [
  { icon: Home, stat: '$8M+', label: 'Personal Portfolio' },
  { icon: Users, stat: '500+', label: 'Properties Secured' },
  { icon: CheckCircle, stat: '98%', label: 'Success Rate' },
]

export default function Hero() {
  const scrollToBooking = () => {
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Stop Overpaying For Investment Property
            </h1>
            <p className="mt-4 text-2xl lg:text-3xl text-accent font-semibold">
              Save $50K-$200K+
            </p>
            <p className="text-xl text-primary/70 mt-1">on your next purchase.</p>
            <p className="mt-6 text-lg lg:text-xl text-primary/80">
              Work with an investor who has built his own{' '}
              <span className="font-bold text-primary">$8M+ portfolio</span>.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToBooking}
                className="bg-primary text-white px-8 py-4 rounded-xl hover:bg-accent transition-colors duration-300 flex items-center justify-center gap-2 font-semibold text-lg shadow-lg"
              >
                Book Free Strategy Call <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <p className="mt-3 text-sm italic text-sage">
              Limited investor spots each month
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white rounded-2xl p-4 border border-primary/10 text-center"
                >
                  <s.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                  <p className="text-2xl font-bold text-primary">{s.stat}</p>
                  <p className="text-sm text-primary/60">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=700&fit=crop"
                alt="Premium property investment"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-accent text-white px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg">
                <TrendingUp className="w-5 h-5" />
                <span className="font-semibold">$8M+ Portfolio Built</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 border-t border-primary/10 pt-8"
        >
          <p className="text-center text-sm text-primary/40 mb-6 uppercase tracking-wider">As Seen In</p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-40">
            {['The Australian', 'realestate.com.au', 'News Corp Australia', 'Courier Mail'].map((name) => (
              <span key={name} className="text-primary font-semibold text-lg">{name}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
