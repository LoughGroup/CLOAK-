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

export default function IncidentTicker() {
  const [alerts, setAlerts] = useState<Alert[]>([])

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
        background: 'rgba(255,255,255,0.02)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
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
          background: 'linear-gradient(to right, #0B0F1A, transparent)',
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
          background: 'linear-gradient(to left, #0B0F1A, transparent)',
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
              borderRight: '1px solid rgba(255,255,255,0.06)',
              whiteSpace: 'nowrap',
            }}
          >
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: SOURCE_COLORS[alert.source] || '#94A3B8',
                flexShrink: 0,
              }}
            >
              {alert.source}
            </span>
            <span style={{ fontSize: 13, color: '#94A3B8' }}>{alert.title}</span>
            <span style={{ fontSize: 11, color: '#475569', flexShrink: 0 }}>
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
