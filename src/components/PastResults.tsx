import { useState, useMemo } from 'react'
import { ArrowRight, Building2, TrendingUp, Percent, DollarSign } from 'lucide-react'
import { motion } from 'motion/react'
import { properties, formatCurrency, getGrowthBadgeClasses, type Property } from '../data/properties'
import { Link } from 'react-router'

const states = ['All', 'WA', 'QLD', 'NSW', 'VIC']
const strategies = ['All', 'Buy and Hold', 'Buy & Hold + Renovation', 'Buy & Hold + Granny Flat', 'Subdivision & Dual Occupancy']
const years = ['All', '2020', '2021', '2022', '2023', '2024', '2025']

function matchesStrategy(property: Property, filter: string): boolean {
  if (filter === 'All') return true
  const s = property.strategy.toLowerCase()
  switch (filter) {
    case 'Buy and Hold': return s.includes('buy and hold') || s.includes('buy & hold')
    case 'Buy & Hold + Renovation': return s.includes('renovation')
    case 'Buy & Hold + Granny Flat': return s.includes('granny flat')
    case 'Subdivision & Dual Occupancy': return s.includes('subdivision') || s.includes('dual occupancy')
    default: return true
  }
}

export default function PastResults() {
  const [stateFilter, setStateFilter] = useState('All')
  const [strategyFilter, setStrategyFilter] = useState('All')
  const [yearFilter, setYearFilter] = useState('All')

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (stateFilter !== 'All' && p.state !== stateFilter) return false
      if (yearFilter !== 'All' && p.year !== parseInt(yearFilter)) return false
      if (!matchesStrategy(p, strategyFilter)) return false
      return true
    })
  }, [stateFilter, strategyFilter, yearFilter])

  const totalValue = properties.reduce((sum, p) => sum + p.currentValuation, 0)
  const avgYield = (properties.reduce((sum, p) => sum + p.rentalYield, 0) / properties.length).toFixed(2)
  const avgGrowth = Math.round(properties.reduce((sum, p) => sum + p.growthPercent, 0) / properties.length)

  const summaryStats = [
    { icon: Building2, value: '17', label: 'Total Properties' },
    { icon: DollarSign, value: `$${(totalValue / 1000000).toFixed(2)}M+`, label: 'Total Portfolio Value' },
    { icon: Percent, value: `${avgYield}%`, label: 'Average Rental Yield' },
    { icon: TrendingUp, value: `${avgGrowth}%`, label: 'Average Growth' },
  ]

  return (
    <section className="pt-28 pb-20 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            Verified Portfolio Results
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-primary">
            Our Track Record Speaks For Itself
          </h1>
          <p className="mt-4 text-lg text-primary/60 max-w-3xl mx-auto">
            Every result below is a real property acquisition managed by AWAN Buyers Agency.
            Client names are kept confidential.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {summaryStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-primary/10 text-center"
            >
              <stat.icon className="w-8 h-8 text-accent mx-auto mb-2" />
              <p className="text-2xl lg:text-3xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-primary/60">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          <select
            value={stateFilter}
            onChange={(e) => setStateFilter(e.target.value)}
            className="bg-white border border-primary/20 rounded-xl px-4 py-3 text-primary font-medium focus:outline-none focus:ring-2 focus:ring-accent"
          >
            {states.map((s) => <option key={s} value={s}>{s === 'All' ? 'All States' : s}</option>)}
          </select>
          <select
            value={strategyFilter}
            onChange={(e) => setStrategyFilter(e.target.value)}
            className="bg-white border border-primary/20 rounded-xl px-4 py-3 text-primary font-medium focus:outline-none focus:ring-2 focus:ring-accent"
          >
            {strategies.map((s) => <option key={s} value={s}>{s === 'All' ? 'All Strategies' : s}</option>)}
          </select>
          <select
            value={yearFilter}
            onChange={(e) => setYearFilter(e.target.value)}
            className="bg-white border border-primary/20 rounded-xl px-4 py-3 text-primary font-medium focus:outline-none focus:ring-2 focus:ring-accent"
          >
            {years.map((y) => <option key={y} value={y}>{y === 'All' ? 'All Years' : y}</option>)}
          </select>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filtered.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-2xl p-6 border border-primary/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-primary">{property.location}</h3>
                  <p className="text-sm text-primary/50">Purchase Year: {property.year}</p>
                </div>
                <span className={`text-sm font-bold px-3 py-1 rounded-full ${getGrowthBadgeClasses(property.growthPercent)}`}>
                  {property.growthPercent}%
                </span>
              </div>

              <div className="border-t border-primary/10 pt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-primary/50">Purchase Price</span>
                  <span className="font-semibold text-primary">{formatCurrency(property.purchasePrice)}</span>
                </div>
                {property.renovationCost > 0 && (
                  <div className="flex justify-between">
                    <span className="text-primary/50">+ Renovation</span>
                    <span className="font-semibold text-primary">{formatCurrency(property.renovationCost)}</span>
                  </div>
                )}
              </div>

              <div className="border-t border-primary/10 pt-4 mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-primary/50">Current Valuation</span>
                  <span className="font-semibold text-primary">{formatCurrency(property.currentValuation)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary/50">Capital Growth</span>
                  <span className="font-semibold text-sage">+{formatCurrency(property.growth)}</span>
                </div>
              </div>

              <div className="border-t border-primary/10 pt-4 mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-primary/50">Rental Yield</span>
                  <span className="font-semibold text-accent">{property.rentalYield.toFixed(2)}% p.a.</span>
                </div>
                <div>
                  <span className="text-primary/50">Strategy: </span>
                  <span className="text-primary/70" title={property.strategy}>
                    {property.strategy.length > 60
                      ? property.strategy.slice(0, 60) + '...'
                      : property.strategy}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-primary/50">
            No properties match the selected filters.
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-primary rounded-2xl p-10 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-3">Want Results Like These?</h3>
          <p className="text-white/70 max-w-2xl mx-auto mb-6">
            Every one of these properties was sourced, negotiated, and settled by AWAN Buyers Agency.
            Book a free strategy call to see how we can do the same for you.
          </p>
          <Link
            to="/#booking"
            className="bg-accent text-white px-8 py-4 rounded-xl hover:bg-accent/80 transition-colors duration-300 inline-flex items-center gap-2 font-semibold text-lg shadow-lg"
          >
            Book Free Strategy Call <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
