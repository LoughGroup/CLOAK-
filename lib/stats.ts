export interface Stat {
  id: string
  value: string
  label: string
  source: string
  sourceUrl: string
  lastUpdated: string
}

export const stats: Stat[] = [
  {
    id: 'scam-reports',
    value: '2.8M+',
    label: 'Scam reports made to Australian authorities last year',
    source: 'ACCC Scamwatch 2023',
    sourceUrl: 'https://www.scamwatch.gov.au/research-and-resources/scam-statistics',
    lastUpdated: '2025-04-01',
  },
  {
    id: 'estimated-losses',
    value: '$3.1B',
    label: 'Lost to scams and fraud in Australia in 2023',
    source: 'ACCC Scamwatch 2023',
    sourceUrl: 'https://www.scamwatch.gov.au/research-and-resources/scam-statistics',
    lastUpdated: '2025-04-01',
  },
  {
    id: 'critical-window',
    value: '48hrs',
    label: 'Critical window to act after identity theft before damage compounds',
    source: 'IDCARE 2024',
    sourceUrl: 'https://www.idcare.org',
    lastUpdated: '2025-04-01',
  },
  {
    id: 'identity-crimes',
    value: '1 in 4',
    label: 'Australians affected by identity crime in their lifetime',
    source: 'AIC 2023',
    sourceUrl: 'https://www.aic.gov.au',
    lastUpdated: '2025-04-01',
  },
  {
    id: 'phone-thefts',
    value: '220K',
    label: 'Mobile phones reported stolen in Australia annually',
    source: 'AFP 2023',
    sourceUrl: 'https://www.afp.gov.au',
    lastUpdated: '2025-04-01',
  },
  {
    id: 'recovery-time',
    value: '200hrs',
    label: 'Average time spent recovering from identity theft without guidance',
    source: 'IDCARE 2024',
    sourceUrl: 'https://www.idcare.org',
    lastUpdated: '2025-04-01',
  },
]

export function getLastUpdated(): string {
  const dates = stats.map(s => new Date(s.lastUpdated).getTime())
  const latest = new Date(Math.max(...dates))
  return latest.toLocaleDateString('en-AU', { month: 'long', year: 'numeric' })
}
