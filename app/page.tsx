import type { CSSProperties } from 'react'
import Link from 'next/link'
import AppBanner from '@/components/AppBanner'
import GuideCard from '@/components/GuideCard'
import PageBackground from '@/components/PageBackground'
import StatsBanner from '@/components/StatsBanner'
import WaitlistForm from '@/components/WaitlistForm'
import { FadeUp } from '@/components/animation'
import { getAllGuides } from '@/lib/guides'

const heroCtaPrimary: CSSProperties = {
  background: 'var(--color-teal)',
  color: 'var(--color-bg-card)',
  fontWeight: 600,
  padding: '12px 28px',
  borderRadius: 'var(--radius-md)',
  border: 'none',
  fontSize: 'var(--font-size-base)',
  cursor: 'pointer',
  fontFamily: 'DM Sans, sans-serif',
  textDecoration: 'none',
}

const heroCtaSecondary: CSSProperties = {
  background: 'transparent',
  color: 'var(--color-teal)',
  fontWeight: 600,
  padding: '12px 28px',
  borderRadius: 'var(--radius-md)',
  border: '1.5px solid var(--color-teal)',
  fontSize: 'var(--font-size-base)',
  cursor: 'pointer',
  fontFamily: 'DM Sans, sans-serif',
  textDecoration: 'none',
}

export default function HomePage() {
  const guides = getAllGuides()

  return (
    <div style={{ background: 'var(--color-bg-page)', minHeight: '100vh' }}>
      <div style={{ position: 'relative', background: 'var(--color-bg-page)', overflow: 'hidden' }}>
        <PageBackground contained />
        <section
          className="section-pad-y section-inset-x"
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: 860,
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'var(--color-teal-muted)',
              border: '1px solid var(--color-teal-border)',
              borderRadius: 999,
              padding: '5px 16px',
              fontSize: 'var(--font-size-sm)',
              fontWeight: 600,
              color: 'var(--color-teal)',
              marginBottom: 24,
            }}
          >
            Australia&apos;s recovery resource
          </div>
          <FadeUp delay={0}>
            <h1
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'var(--font-size-3xl)',
                fontWeight: 700,
                lineHeight: 1.15,
                marginBottom: 20,
                color: 'var(--color-navy)',
              }}
            >
              What to do when something&apos;s{' '}
              <span style={{ color: 'var(--color-teal)', fontStyle: 'italic' }}>gone wrong</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p
              style={{
                fontSize: 'var(--font-size-base)',
                color: 'var(--color-text-secondary)',
                fontWeight: 400,
                maxWidth: 520,
                margin: '0 auto 32px',
                lineHeight: 1.7,
              }}
            >
              Clear, Australian-focused guides for high-stress moments — so you can act fast and limit the damage.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/emergency" style={heroCtaPrimary}>
                Get Help Now
              </Link>
              <Link href="/guides" style={heroCtaSecondary}>
                Review guides
              </Link>
              <Link href="/stories" style={heroCtaSecondary}>
                Read real incidents
              </Link>
            </div>
          </FadeUp>
        </section>
      </div>

      <FadeUp delay={0}>
        <StatsBanner />
      </FadeUp>

      <section
        className="section-pad-y section-inset-x"
        style={{
          width: '100%',
          background: 'var(--color-bg-card)',
          borderTop: '1px solid var(--color-border)',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <div style={{ maxWidth: 520, margin: '0 auto' }}>
          <div className="section-heading-wrap">
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--color-teal)',
                marginBottom: 8,
                marginTop: 0,
              }}
            >
              Early access
            </p>
            <h2
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'var(--font-size-2xl)',
                fontWeight: 700,
                marginBottom: 0,
                marginTop: 0,
                color: 'var(--color-navy)',
              }}
            >
              Be first to get access
            </h2>
          </div>
          <WaitlistForm />
        </div>
      </section>

      <section className="section-pad-y section-inset-x" style={{ maxWidth: 1100, margin: '0 auto', background: 'var(--color-bg-page)' }}>
        <div className="section-heading-wrap">
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--color-teal)',
              marginBottom: 8,
              marginTop: 0,
            }}
          >
            Review Guides
          </p>
          <h2
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'var(--font-size-2xl)',
              fontWeight: 700,
              marginBottom: 6,
              marginTop: 0,
              color: 'var(--color-navy)',
            }}
          >
            Review Guides
          </h2>
          <p
            style={{
              fontSize: 'var(--font-size-base)',
              color: 'var(--color-text-secondary)',
              marginBottom: 16,
              marginTop: 0,
              fontWeight: 400,
            }}
          >
            Start with the situation closest to yours.
          </p>
          <Link
            href="/guides"
            style={{
              fontSize: 'var(--font-size-sm)',
              fontWeight: 500,
              color: 'var(--color-teal)',
              textDecoration: 'none',
            }}
          >
            View all
          </Link>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 20,
          }}
        >
          {guides.map((guide, index) => (
            <FadeUp key={guide.slug} delay={0.1 * index}>
              <GuideCard guide={guide} />
            </FadeUp>
          ))}
        </div>
      </section>

      <AppBanner />
    </div>
  )
}
