import { useState } from 'react'
import { properties, formatCurrency } from '../data/properties'
import Header from '../components/Header'

type SortKey = 'id' | 'location' | 'year' | 'purchasePrice' | 'growthPercent' | 'rentalYield' | 'strategy'

export default function AdminPage() {
  const [sortKey, setSortKey] = useState<SortKey>('id')
  const [sortAsc, setSortAsc] = useState(true)

  const sorted = [...properties].sort((a, b) => {
    const aVal = a[sortKey]
    const bVal = b[sortKey]
    if (typeof aVal === 'number' && typeof bVal === 'number') {
      return sortAsc ? aVal - bVal : bVal - aVal
    }
    return sortAsc
      ? String(aVal).localeCompare(String(bVal))
      : String(bVal).localeCompare(String(aVal))
  })

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortAsc(!sortAsc)
    } else {
      setSortKey(key)
      setSortAsc(true)
    }
  }

  const thClass = "text-left px-4 py-3 text-sm font-semibold text-primary/70 cursor-pointer hover:text-accent transition-colors select-none"

  return (
    <>
      <Header />
      <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-primary mb-2">Admin — Property Submissions</h1>
        <p className="text-primary/50 mb-8">This page is for internal use only.</p>

        <div className="bg-white rounded-2xl border border-primary/10 overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-primary/10">
              <tr>
                <th className={thClass} onClick={() => handleSort('id')}>ID</th>
                <th className={thClass} onClick={() => handleSort('location')}>Location</th>
                <th className={thClass} onClick={() => handleSort('year')}>Year</th>
                <th className={thClass} onClick={() => handleSort('purchasePrice')}>Purchase Price</th>
                <th className={thClass} onClick={() => handleSort('growthPercent')}>Growth %</th>
                <th className={thClass} onClick={() => handleSort('rentalYield')}>Rental Yield</th>
                <th className={thClass} onClick={() => handleSort('strategy')}>Strategy</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((p) => (
                <tr key={p.id} className="border-b border-primary/5 hover:bg-accent/5 transition-colors">
                  <td className="px-4 py-3 text-sm text-primary">{p.id}</td>
                  <td className="px-4 py-3 text-sm font-medium text-primary">{p.location}</td>
                  <td className="px-4 py-3 text-sm text-primary">{p.year}</td>
                  <td className="px-4 py-3 text-sm text-primary">{formatCurrency(p.purchasePrice)}</td>
                  <td className="px-4 py-3 text-sm font-semibold text-sage">{p.growthPercent}%</td>
                  <td className="px-4 py-3 text-sm text-accent font-semibold">{p.rentalYield}%</td>
                  <td className="px-4 py-3 text-sm text-primary/60 max-w-xs truncate" title={p.strategy}>{p.strategy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
