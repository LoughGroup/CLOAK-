import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get Help Now',
  description:
    'Answer a few questions and get a prioritised recovery checklist for your situation — built for Australians.',
}

export default function EmergencyLayout({ children }: { children: React.ReactNode }) {
  return children
}
