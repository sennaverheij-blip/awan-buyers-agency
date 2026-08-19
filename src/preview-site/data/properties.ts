export interface Property {
  id: number
  location: string
  state: string
  year: number
  purchasePrice: number
  renovationCost: number
  rentalYield: number
  currentValuation: number
  growth: number
  growthPercent: number
  strategy: string
}

export const properties: Property[] = [
  {
    id: 1,
    location: "Armadale, WA",
    state: "WA",
    year: 2021,
    purchasePrice: 250000,
    renovationCost: 20000,
    rentalYield: 7.20,
    currentValuation: 750000,
    growth: 480000,
    growthPercent: 192,
    strategy: "Buy and Hold with high rental return and future townhouse development"
  },
  {
    id: 2,
    location: "Parmelia, WA",
    state: "WA",
    year: 2022,
    purchasePrice: 300000,
    renovationCost: 0,
    rentalYield: 7.00,
    currentValuation: 665000,
    growth: 365000,
    growthPercent: 122,
    strategy: "Buy and Hold with granny flat potential"
  },
  {
    id: 3,
    location: "Beenleigh, QLD",
    state: "QLD",
    year: 2023,
    purchasePrice: 681000,
    renovationCost: 220000,
    rentalYield: 8.00,
    currentValuation: 1100000,
    growth: 199000,
    growthPercent: 29,
    strategy: "Buy and Hold + Granny Flat construction"
  },
  {
    id: 4,
    location: "St Marys, NSW",
    state: "NSW",
    year: 2020,
    purchasePrice: 610000,
    renovationCost: 0,
    rentalYield: 5.00,
    currentValuation: 1200000,
    growth: 590000,
    growthPercent: 97,
    strategy: "Buy and Hold with future duplex development"
  },
  {
    id: 5,
    location: "Campbellfield, VIC",
    state: "VIC",
    year: 2025,
    purchasePrice: 678500,
    renovationCost: 50000,
    rentalYield: 4.50,
    currentValuation: 750000,
    growth: 21500,
    growthPercent: 3,
    strategy: "Buy and Hold with renovation for instant equity. Future townhouse development"
  },
  {
    id: 6,
    location: "Mount Louisa, QLD",
    state: "QLD",
    year: 2023,
    purchasePrice: 385000,
    renovationCost: 0,
    rentalYield: 6.80,
    currentValuation: 585000,
    growth: 200000,
    growthPercent: 52,
    strategy: "Buy and Hold"
  },
  {
    id: 7,
    location: "Wellard, WA",
    state: "WA",
    year: 2022,
    purchasePrice: 441000,
    renovationCost: 0,
    rentalYield: 6.40,
    currentValuation: 740000,
    growth: 299000,
    growthPercent: 68,
    strategy: "Buy and Hold"
  },
  {
    id: 8,
    location: "Harristown, QLD",
    state: "QLD",
    year: 2022,
    purchasePrice: 400000,
    renovationCost: 0,
    rentalYield: 6.00,
    currentValuation: 590000,
    growth: 190000,
    growthPercent: 48,
    strategy: "Buy and Hold with renovation opportunity"
  },
  {
    id: 9,
    location: "Mount Louisa, WA",
    state: "WA",
    year: 2023,
    purchasePrice: 340000,
    renovationCost: 0,
    rentalYield: 5.80,
    currentValuation: 580000,
    growth: 240000,
    growthPercent: 71,
    strategy: "Buy and Hold"
  },
  {
    id: 10,
    location: "Annandale, WA",
    state: "WA",
    year: 2023,
    purchasePrice: 380000,
    renovationCost: 0,
    rentalYield: 6.00,
    currentValuation: 645000,
    growth: 265000,
    growthPercent: 70,
    strategy: "Buy and Hold"
  },
  {
    id: 11,
    location: "Bethania, QLD",
    state: "QLD",
    year: 2024,
    purchasePrice: 725000,
    renovationCost: 0,
    rentalYield: 5.30,
    currentValuation: 810000,
    growth: 85000,
    growthPercent: 12,
    strategy: "Buy and Hold, Subdivision & Dual Occupancy"
  },
  {
    id: 12,
    location: "Crestmead, QLD",
    state: "QLD",
    year: 2024,
    purchasePrice: 700000,
    renovationCost: 0,
    rentalYield: 5.00,
    currentValuation: 820000,
    growth: 120000,
    growthPercent: 17,
    strategy: "Buy and Hold, Subdivision & Dual Occupancy"
  },
  {
    id: 13,
    location: "Girrawheen, WA",
    state: "WA",
    year: 2025,
    purchasePrice: 650000,
    renovationCost: 0,
    rentalYield: 4.80,
    currentValuation: 760000,
    growth: 110000,
    growthPercent: 17,
    strategy: "Buy and Hold"
  },
  {
    id: 14,
    location: "Mirrabooka, WA",
    state: "WA",
    year: 2025,
    purchasePrice: 728000,
    renovationCost: 0,
    rentalYield: 5.10,
    currentValuation: 805000,
    growth: 77000,
    growthPercent: 11,
    strategy: "Buy and Hold"
  },
  {
    id: 15,
    location: "Craigieburn, VIC",
    state: "VIC",
    year: 2025,
    purchasePrice: 320000,
    renovationCost: 0,
    rentalYield: 7.00,
    currentValuation: 360000,
    growth: 40000,
    growthPercent: 13,
    strategy: "Buy and Hold"
  },
  {
    id: 16,
    location: "Mirrabooka, WA",
    state: "WA",
    year: 2025,
    purchasePrice: 690000,
    renovationCost: 0,
    rentalYield: 5.70,
    currentValuation: 830000,
    growth: 140000,
    growthPercent: 20,
    strategy: "Buy and Hold"
  },
  {
    id: 17,
    location: "Vincent, WA",
    state: "WA",
    year: 2025,
    purchasePrice: 466000,
    renovationCost: 0,
    rentalYield: 6.00,
    currentValuation: 560000,
    growth: 94000,
    growthPercent: 20,
    strategy: "Buy and Hold"
  }
]

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

export function getGrowthBadgeClasses(percent: number): string {
  if (percent >= 100) return 'bg-primary text-white'
  if (percent >= 50) return 'bg-sage text-white'
  if (percent >= 20) return 'bg-accent text-white'
  return 'bg-secondary text-primary'
}
