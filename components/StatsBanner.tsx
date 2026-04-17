import { stats, getLastUpdated } from '@/lib/stats'

export default function StatsBanner() {
  const lastUpdated = getLastUpdated()
  const displayStats = stats.slice(0, 3)

  return (
    <div style={{
      background: 'rgba(11,15,26,0.7)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      padding: '48px 24px',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 32,
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <div>
            <div style={{
              fontSize: 11,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: '#2DD4BF',
              marginBottom: 4,
            }}>
              The scale of the problem
            </div>
            <div style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 22,
              fontWeight: 700,
              color: '#F1F5F9',
            }}>
              Why acting fast matters
            </div>
          </div>
          <div style={{
            fontSize: 12,
            color: '#475569',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}>
            <div style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#2DD4BF',
            }} />
            Updated {lastUpdated} · Sources: ACCC, IDCARE, AIC, AFP
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 16,
        }}>
          {displayStats.map((stat) => (
            <div key={stat.id} style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 12,
              padding: '24px 20px',
            }}>
              <div style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 36,
                fontWeight: 800,
                color: '#2DD4BF',
                lineHeight: 1,
                marginBottom: 10,
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: 14,
                color: '#94A3B8',
                lineHeight: 1.6,
                marginBottom: 12,
                fontWeight: 300,
              }}>
                {stat.label}
              </div>
              <a
                href={stat.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 11,
                  color: '#475569',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  paddingBottom: 1,
                }}
              >
                {stat.source} ↗
              </a>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 12,
          fontSize: 11,
          color: '#334155',
          textAlign: 'right',
        }}>
          Statistics updated monthly from official Australian government sources.
        </div>
      </div>
    </div>
  )
}
