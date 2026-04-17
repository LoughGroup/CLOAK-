import Link from 'next/link'
import AppBanner from '@/components/AppBanner'
import GuideCard from '@/components/GuideCard'
import StatsBanner from '@/components/StatsBanner'
import WaitlistForm from '@/components/WaitlistForm'
import { getAllGuides } from '@/lib/guides'

export default function HomePage() {
  const guides = getAllGuides()

  return (
    <div style={{ background: 'transparent', minHeight: '100vh' }}>
      <section
        style={{
          maxWidth: 860,
          margin: '0 auto',
          paddingTop: 80,
          paddingBottom: 60,
          textAlign: 'center',
          paddingLeft: 24,
          paddingRight: 24,
        }}
      >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(45,212,191,0.08)',
                border: '1px solid rgba(45,212,191,0.25)',
                borderRadius: 999,
                padding: '5px 16px',
                fontSize: 12,
                fontWeight: 600,
                color: '#2DD4BF',
                marginBottom: 24,
              }}
            >
              Australia&apos;s recovery resource
            </div>
            <h1
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: 20,
                color: '#F1F5F9',
              }}
            >
              What to do when something&apos;s{' '}
              <span style={{ color: '#2DD4BF', fontStyle: 'italic' }}>gone wrong</span>
            </h1>
            <p
              style={{
                fontSize: 17,
                color: '#94A3B8',
                fontWeight: 300,
                maxWidth: 520,
                margin: '0 auto 32px',
                lineHeight: 1.7,
              }}
            >
              Clear, Australian-focused guides for high-stress moments — so you can act fast and limit the damage.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/guides"
                style={{
                  background: '#2DD4BF',
                  color: '#0B0F1A',
                  fontWeight: 600,
                  padding: '13px 28px',
                  borderRadius: 8,
                  border: 'none',
                  fontSize: 14,
                  cursor: 'pointer',
                  fontFamily: 'DM Sans, sans-serif',
                  textDecoration: 'none',
                }}
              >
                Browse emergency guides
              </Link>
              <Link
                href="/stories"
                style={{
                  background: 'transparent',
                  color: '#F1F5F9',
                  fontWeight: 500,
                  padding: '13px 28px',
                  borderRadius: 8,
                  border: '1px solid rgba(255,255,255,0.12)',
                  fontSize: 14,
                  cursor: 'pointer',
                  fontFamily: 'DM Sans, sans-serif',
                  textDecoration: 'none',
                }}
              >
                Read real incidents
              </Link>
            </div>
      </section>

      <StatsBanner />

      <section
        style={{
          width: '100%',
          padding: '56px 24px 60px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div style={{ maxWidth: 520, margin: '0 auto' }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: '#2DD4BF',
              marginBottom: 8,
              marginTop: 0,
              textAlign: 'center',
            }}
          >
            Early access
          </p>
          <h2
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 26,
              fontWeight: 700,
              marginBottom: 24,
              marginTop: 0,
              color: '#F1F5F9',
              textAlign: 'center',
            }}
          >
            Be first to get access
          </h2>
          <WaitlistForm />
        </div>
      </section>

      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: 16,
            marginBottom: 32,
          }}
        >
          <div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#2DD4BF',
                marginBottom: 8,
                marginTop: 0,
              }}
            >
              Emergency guides
            </p>
            <h2
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 28,
                fontWeight: 700,
                marginBottom: 6,
                marginTop: 0,
                color: '#F1F5F9',
              }}
            >
              Emergency guides
            </h2>
            <p
              style={{
                fontSize: 15,
                color: '#94A3B8',
                marginBottom: 0,
                marginTop: 0,
                fontWeight: 300,
              }}
            >
              Start with the situation closest to yours.
            </p>
          </div>
          <Link
            href="/guides"
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: '#2DD4BF',
              textDecoration: 'none',
            }}
          >
            View all
          </Link>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 16,
          }}
        >
          {guides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </section>

      <AppBanner />
    </div>
  )
}
