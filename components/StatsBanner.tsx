import { stats, getLastUpdated } from '@/lib/stats'
import { Card } from '@/components/ui/Card'

export default function StatsBanner() {
  const lastUpdated = getLastUpdated()
  const displayStats = stats.slice(0, 3)

  return (
    <section
      className="section-pad-y section-inset-x"
      style={{
        background: 'var(--color-bg-page)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="section-heading-wrap">
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--color-teal)',
              marginBottom: 4,
            }}
          >
            The scale of the problem
          </div>
          <h2
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'var(--font-size-2xl)',
              fontWeight: 700,
              color: 'var(--color-navy)',
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Why acting fast matters
          </h2>
        </div>

        <div
          style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-text-secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
            marginBottom: 24,
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: 'var(--color-teal)',
            }}
          />
          Updated {lastUpdated} · Sources: ACCC, IDCARE, AIC, AFP
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 20,
          }}
        >
          {displayStats.map((stat, index) => (
            <Card
              key={stat.id}
              variant={index === 0 ? 'teal' : 'default'}
              style={{ padding: '24px 20px' }}
            >
              <div
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: 'var(--font-size-2xl)',
                  fontWeight: 700,
                  color: 'var(--color-navy)',
                  lineHeight: 1,
                  marginBottom: 10,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: 12,
                  fontWeight: 400,
                }}
              >
                {stat.label}
              </div>
              <a
                href={stat.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 11,
                  color: 'var(--color-text-secondary)',
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--color-border)',
                  paddingBottom: 1,
                }}
              >
                {stat.source} ↗
              </a>
            </Card>
          ))}
        </div>

        <div
          style={{
            marginTop: 12,
            fontSize: 11,
            color: 'var(--color-text-secondary)',
            textAlign: 'center',
          }}
        >
          Statistics updated monthly from official Australian government sources.
        </div>
      </div>
    </section>
  )
}
