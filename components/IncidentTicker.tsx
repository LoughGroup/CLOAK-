'use client'

import { useEffect, useState } from 'react'

interface Alert {
  id: string
  title: string
  date: string
  url: string
  source: string
}

const SOURCE_COLORS: Record<string, string> = {
  Scamwatch: '#F59E0B',
  ACSC: '#2DD4BF',
  OAIC: '#A78BFA',
}

const FALLBACK: Alert[] = [
  { id: '1', title: 'SIM swap attacks up 34% across NSW and VIC — April 2025', date: '2025-04-10', url: 'https://www.scamwatch.gov.au', source: 'Scamwatch' },
  { id: '2', title: 'MyGov phishing campaign active — do not click SMS links', date: '2025-04-08', url: 'https://www.cyber.gov.au', source: 'ACSC' },
  { id: '3', title: 'Medicare card scam targeting elderly Australians — March 2025', date: '2025-03-28', url: 'https://www.scamwatch.gov.au', source: 'Scamwatch' },
  { id: '4', title: 'ATO impersonation scam calls — 4,200 reports in March', date: '2025-03-20', url: 'https://www.scamwatch.gov.au', source: 'Scamwatch' },
  { id: '5', title: 'Investment scam losses reach $180M in Q1 2025', date: '2025-04-01', url: 'https://www.scamwatch.gov.au', source: 'Scamwatch' },
  { id: '6', title: 'Fake toll road SMS scam targeting all Australian states', date: '2025-03-15', url: 'https://www.cyber.gov.au', source: 'ACSC' },
]

export default function IncidentTicker() {
  const [alerts, setAlerts] = useState<Alert[]>(FALLBACK)

  useEffect(() => {
    fetch('/api/alerts')
      .then((r) => r.json())
      .then((data) => setAlerts(data.alerts || []))
      .catch(() => {})
  }, [])

  if (alerts.length === 0) return null

  const doubled = [...alerts, ...alerts, ...alerts]

  return (
    <div
      style={{
        background: 'var(--color-bg-page)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        padding: '10px 0',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        position: 'relative',
      }}
    >
      {/* Left fade */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 80,
          background: 'linear-gradient(to right, var(--color-bg-page), transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
      {/* Right fade */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: 80,
          background: 'linear-gradient(to left, var(--color-bg-page), transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Label */}
      <div
        style={{
          position: 'absolute',
          left: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 3,
          display: 'flex',
          alignItems: 'center',
          gap: 6,
        }}
      >
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: '#F87171',
            boxShadow: '0 0 6px #F87171',
            animation: 'pulse 2s infinite',
          }}
        />
        <span
          style={{
            fontSize: 10,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: '#F87171',
            whiteSpace: 'nowrap',
          }}
        >
          Live alerts
        </span>
      </div>

      {/* Scrolling content */}
      <div
        style={{
          display: 'flex',
          gap: 0,
          paddingLeft: 140,
          willChange: 'transform',
          animation: 'ticker 90s linear infinite',
          width: 'max-content',
        }}
      >
        {doubled.map((alert, i) => (
          <a
            key={`${alert.id}-${i}`}
            href={alert.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '0 32px',
              textDecoration: 'none',
              borderRight: '1px solid var(--color-border)',
              whiteSpace: 'nowrap',
            }}
          >
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: SOURCE_COLORS[alert.source] || 'var(--color-text-secondary)',
                flexShrink: 0,
              }}
            >
              {alert.source}
            </span>
            <span style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>{alert.title}</span>
            <span style={{ fontSize: 11, color: 'var(--color-text-secondary)', flexShrink: 0 }}>
              {new Date(alert.date).toLocaleDateString('en-AU', { day: 'numeric', month: 'short' })}
            </span>
          </a>
        ))}
      </div>

      <style>{`
@keyframes ticker {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}
      `}</style>
    </div>
  )
}
