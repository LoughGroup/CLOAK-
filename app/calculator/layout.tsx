import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Incident cost calculator',
  description:
    'Estimate financial impact, recovery time, and risk from stolen items, identity incidents, and delays — interactive calculator for Australians.',
}

export default function CalculatorLayout({ children }: { children: React.ReactNode }) {
  return children
}
