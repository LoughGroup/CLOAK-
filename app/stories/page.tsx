import type { Metadata } from 'next'
import Link from 'next/link'
import { stories, type Story } from '@/lib/stories'

export const metadata: Metadata = {
  title: 'Real incidents',
  description: 'Anonymised Australian stories of scams, theft, and recovery — what happened and how it ended.',
}

const outcomeStyles: Record<
  Story['outcome'],
  { label: string; dot: string; text: string; avatarBg: string }
> = {
  recovered: {
    label: 'Recovered',
    dot: '#4ADE80',
    text: '#4ADE80',
    avatarBg: 'rgba(74,222,128,0.15)',
  },
  partial: {
    label: 'Partial recovery',
    dot: '#FBBF24',
    text: '#FBBF24',
    avatarBg: 'rgba(251,191,36,0.15)',
  },
  resolved: {
    label: 'Resolved',
    dot: '#2DD4BF',
    text: '#2DD4BF',
    avatarBg: 'rgba(45,212,191,0.15)',
  },
  ongoing: {
    label: 'Ongoing',
    dot: '#F87171',
    text: '#F87171',
    avatarBg: 'rgba(248,113,113,0.15)',
  },
}

const cardStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 12,
  padding: 20,
  display: 'flex',
  gap: 16,
}

export default function StoriesPage() {
  return (
    <div style={{ background: '#0B0F1A', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 24px 64px' }}>
        <header style={{ maxWidth: 672, marginBottom: 40 }}>
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
            Real incidents
          </p>
          <h1
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
              fontWeight: 700,
              color: '#F1F5F9',
              margin: '0 0 12px',
              lineHeight: 1.2,
            }}
          >
            Real incidents
          </h1>
          <p style={{ fontSize: 15, color: '#94A3B8', fontWeight: 300, margin: 0, lineHeight: 1.7 }}>
            Anonymised stories from Australians — names and details changed. Outcomes vary; use these as context, not
            guarantees.
          </p>
          <Link
            href="/stories/submit"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 24,
              padding: '12px 22px',
              borderRadius: 8,
              border: '1px solid rgba(45,212,191,0.45)',
              background: 'transparent',
              color: '#2DD4BF',
              fontSize: 14,
              fontWeight: 600,
              fontFamily: 'DM Sans, sans-serif',
              textDecoration: 'none',
            }}
          >
            Share your story →
          </Link>
        </header>
        <p
          style={{
            fontSize: 12,
            color: '#64748B',
            marginBottom: 32,
            fontStyle: 'italic',
            marginTop: 0,
            maxWidth: 672,
          }}
        >
          Stories are composite accounts based on real incident patterns reported to ACCC Scamwatch and OAIC. Names and
          identifying details are fictional.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 16,
          }}
        >
          {stories.map((s) => {
            const o = outcomeStyles[s.outcome]
            return (
              <Link
                key={s.id}
                href={`/stories/${s.id}`}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'block',
                  minWidth: 0,
                }}
              >
                <article style={cardStyle}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      minWidth: 40,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'Syne, sans-serif',
                      fontSize: 11,
                      fontWeight: 600,
                      color: '#F1F5F9',
                      background: o.avatarBg,
                    }}
                    aria-hidden
                  >
                    {s.initials}
                  </div>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: 8 }}>
                      <span style={{ fontSize: 14, fontWeight: 500, color: '#F1F5F9' }}>{s.firstName}</span>
                      <span style={{ fontSize: 12, color: '#94A3B8' }}>{s.location}</span>
                    </div>
                    <h2
                      style={{
                        fontFamily: 'Syne, sans-serif',
                        fontSize: 15,
                        fontWeight: 600,
                        lineHeight: 1.4,
                        color: '#F1F5F9',
                        margin: '10px 0 0',
                      }}
                    >
                      {s.title}
                    </h2>
                    <p style={{ fontSize: 13, color: '#94A3B8', lineHeight: 1.6, margin: '10px 0 0' }}>{s.excerpt}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12, marginTop: 16 }}>
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 8,
                          fontSize: 12,
                          fontWeight: 600,
                          color: o.text,
                        }}
                      >
                        <span
                          style={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            background: o.dot,
                            flexShrink: 0,
                          }}
                          aria-hidden
                        />
                        {o.label}
                      </span>
                      {s.daysToResolve != null ? (
                        <span style={{ fontSize: 12, color: '#94A3B8' }}>{s.daysToResolve} days to stabilise</span>
                      ) : null}
                    </div>
                  </div>
                </article>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
