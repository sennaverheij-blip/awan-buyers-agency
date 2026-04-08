import { ArrowRight, Home, Users, CheckCircle } from 'lucide-react'
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
    <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-20 bg-[var(--background)] overflow-hidden min-h-[90vh] lg:min-h-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* AWAN watermark behind content */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
          <span className="text-[10rem] sm:text-[12rem] lg:text-[14rem] font-black text-primary/[0.06] leading-none tracking-wider">
            AWAN
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            Your Strategic Partner<br />
            in Property Investment
          </h1>
          <p className="mt-5 text-lg lg:text-xl text-primary/70 max-w-2xl mx-auto">
            From strategy to acquisition, we partner with you to scale intelligently.
          </p>

          {/* CTA Button */}
          <div className="mt-8 flex flex-col items-center">
            <button
              onClick={scrollToBooking}
              className="group relative bg-gradient-to-r from-primary to-primary/90 text-white px-12 py-5 rounded-xl hover:from-accent hover:to-accent/90 transition-all duration-300 flex items-center gap-3 font-bold text-xl lg:text-2xl shadow-lg"
            >
              Book Free Strategy Call <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="mt-2 bg-gradient-to-r from-primary to-primary/80 text-white/90 px-8 py-2 rounded-b-xl">
              <p className="text-sm">
                Limited investor spots <span className="font-bold text-accent">each month</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative z-10 mt-8 lg:mt-12 grid grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="bg-white rounded-2xl p-3 sm:p-4 border border-primary/10 text-center shadow-sm"
            >
              <s.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent mx-auto mb-1 sm:mb-2" />
              <p className="text-xl sm:text-2xl font-bold text-primary">{s.stat}</p>
              <p className="text-xs sm:text-sm text-primary/60">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* As Seen In */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 lg:mt-14 border-t border-primary/10 pt-6"
        >
          <p className="text-center text-sm text-primary/40 mb-4 uppercase tracking-wider">As Seen In</p>
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-12 opacity-40">
            {['The Australian', 'realestate.com.au', 'News Corp Australia', 'Courier Mail'].map((name) => (
              <span key={name} className="text-primary font-semibold text-sm sm:text-base lg:text-lg">{name}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
