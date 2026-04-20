import type { Metadata } from 'next'
import GuidesIndexClient from '@/components/GuidesIndexClient'
import { getAllGuides } from '@/lib/guides'
import { FadeIn } from '@/components/animation'

export const metadata: Metadata = {
  title: 'Review Guides',
  description:
    'Step-by-step recovery guides for every incident type. Know what to do before you ever need it.',
}

export default function GuidesIndexPage() {
  const guides = getAllGuides()

  return (
    <div style={{ background: 'var(--color-bg-page)', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 24px 64px' }}>
        <header style={{ maxWidth: 720, marginBottom: 32 }}>
          <FadeIn delay={0}>
            <h1
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
                fontWeight: 700,
                color: 'var(--color-navy)',
                margin: '0 0 16px',
                lineHeight: 1.2,
              }}
            >
              Review Guides
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.7 }}>
              Step-by-step recovery guides for every incident type.
              <br />
              Know what to do before you ever need it.
            </p>
          </FadeIn>
        </header>

        <GuidesIndexClient guides={guides} />
      </div>
    </div>
  )
}
