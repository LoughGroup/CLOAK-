import type { Metadata } from 'next'
import AppBanner from '@/components/AppBanner'
import WaitlistForm from '@/components/WaitlistForm'
import { Card } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Waitlist',
  description:
    'Join the CLOAK waitlist for early access when the Australian recovery app launches.',
}

const TEASERS = [
  { title: '25+ incident playbooks', body: 'Step-by-step flows tuned for common scams and breaches in Australia.' },
  { title: 'One-tap emergency calling', body: 'Get to the right hotlines fast when every second counts.' },
  { title: 'Guardian-assisted recovery', body: 'Loop in someone you trust with clear, safe guidance.' },
] as const

export default function WaitlistPage() {
  return (
    <div style={{ background: 'var(--color-bg-page)', minHeight: '100vh' }}>
      <section
        style={{
          maxWidth: 560,
          margin: '0 auto',
          padding: '72px 24px 48px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'var(--color-teal)',
            marginBottom: 12,
            marginTop: 0,
          }}
        >
          Coming soon
        </p>
        <h1
          style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(2rem, 5vw, 2.75rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: 16,
            marginTop: 0,
            color: 'var(--color-text-primary)',
          }}
        >
          CLOAK is coming
        </h1>
        <p
          style={{
            fontSize: 17,
            color: 'var(--color-text-secondary)',
            fontWeight: 300,
            margin: '0 auto 40px',
            lineHeight: 1.7,
            maxWidth: 440,
          }}
        >
          The recovery app built for Australians — launching soon.
        </p>
        <WaitlistForm />
      </section>

      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px 56px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 16,
          }}
        >
          {TEASERS.map((item) => (
            <Card key={item.title} variant="default" style={{ borderRadius: 14, padding: '24px 22px', textAlign: 'left' }}>
              <h2
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 700,
                  fontSize: 17,
                  color: 'var(--color-text-primary)',
                  marginTop: 0,
                  marginBottom: 8,
                }}
              >
                {item.title}
              </h2>
              <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', fontWeight: 300, margin: 0, lineHeight: 1.55 }}>
                {item.body}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <AppBanner />
    </div>
  )
}
