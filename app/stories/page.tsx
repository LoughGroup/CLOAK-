import type { Metadata } from 'next'
import Link from 'next/link'
import { stories, type Story } from '@/lib/stories'
import { Avatar } from '@/components/ui/Avatar'
import { Card } from '@/components/ui/Card'
import { StatusPill } from '@/components/ui/StatusPill'

export const metadata: Metadata = {
  title: 'About',
  description: 'The story behind Cloak — built after a real incident, designed so it never happens to you again.',
}

function displayNameForStory(s: Story) {
  if (s.initials.length > 1) return `${s.firstName} ${s.initials.slice(1)}`
  return s.firstName
}

function pillStatusForOutcome(o: Story['outcome']): 'recovered' | 'ongoing' | 'contained' {
  if (o === 'recovered' || o === 'resolved') return 'recovered'
  if (o === 'ongoing') return 'ongoing'
  return 'contained'
}

function pillDetailForStory(s: Story): string | undefined {
  if (s.daysToResolve == null) return undefined
  if (s.outcome === 'partial') return `Partial recovery · ${s.daysToResolve} days`
  return `${s.daysToResolve} days to stabilise`
}

export default function StoriesPage() {
  return (
    <div style={{ background: 'var(--color-bg-page)', minHeight: '100vh' }}>
      <section
        style={{
          background: 'linear-gradient(135deg, rgba(15,31,61,1) 0%, rgba(26,47,90,1) 55%, rgba(15,31,61,1) 100%)',
          color: '#F8F9FB',
          padding: '72px 24px',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h1
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(2rem, 4.5vw, 3rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              margin: 0,
              lineHeight: 1.05,
            }}
          >
            The Story Behind Cloak
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(248,249,251,0.78)', fontWeight: 300, margin: '14px 0 0', lineHeight: 1.8, maxWidth: 720 }}>
            Built after a real incident. Designed so it never happens to you again.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '56px 24px 0' }}>
        <section style={{ marginBottom: 56 }}>
          <h2
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 800,
              color: 'var(--color-text-primary)',
              margin: '0 0 18px',
              lineHeight: 1.2,
            }}
          >
            Tom&apos;s Story
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 28,
              alignItems: 'start',
            }}
          >
            <div
              style={{
                aspectRatio: '16 / 9',
                borderRadius: 14,
                background: 'var(--color-navy-light)',
                border: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 20,
                textAlign: 'center',
                color: '#FFFFFF',
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: '0.01em',
              }}
            >
              Tom&apos;s Story — Video Coming Soon
            </div>

            <div style={{ maxWidth: 720 }}>
              <p style={{ fontSize: 15, color: 'var(--color-text-secondary)', fontWeight: 300, margin: 0, lineHeight: 1.9 }}>
                In 2023, Tom experienced firsthand what it felt like to lose everything at once — phone, wallet, and keys —
                on a night out in Melbourne. There was no clear guide. No ordered steps. No one to call first. Cloak was
                built from that moment.
              </p>

              <div
                style={{
                  marginTop: 20,
                  borderLeft: '3px solid rgba(26,158,143,0.55)',
                  background: 'rgba(26,158,143,0.06)',
                  border: '1px solid rgba(26,158,143,0.14)',
                  borderRadius: 12,
                  padding: 18,
                }}
              >
                <p style={{ margin: 0, fontSize: 15, color: 'var(--color-text-primary)', lineHeight: 1.8, fontStyle: 'italic' }}>
                  &quot;I spent four hours calling the wrong people in the wrong order. Cloak fixes that.&quot;
                </p>
                <p style={{ margin: '10px 0 0', fontSize: 13, color: 'var(--color-text-secondary)', fontWeight: 500 }}>
                  — Tom H, Founder
                </p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: 56 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: 16, justifyContent: 'space-between' }}>
            <h2
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 800,
                color: 'var(--color-text-primary)',
                margin: '0 0 10px',
                lineHeight: 1.2,
              }}
            >
              Real People. Real Recoveries.
            </h2>
            <Link
              href="/stories/submit"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px 18px',
                borderRadius: 10,
                border: '1px solid rgba(26,158,143,0.45)',
                background: 'transparent',
                color: 'var(--color-teal)',
                fontSize: 14,
                fontWeight: 600,
                fontFamily: 'DM Sans, sans-serif',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Share your story →
            </Link>
          </div>

          <p style={{ fontSize: 15, color: 'var(--color-text-secondary)', fontWeight: 300, margin: 0, lineHeight: 1.8, maxWidth: 760 }}>
            Anonymised stories from Australians — names and details changed. Outcomes vary; use these as context, not guarantees.
          </p>

          <p style={{ fontSize: 12, color: 'var(--color-text-secondary)', margin: '16px 0 0', fontStyle: 'italic', maxWidth: 760, lineHeight: 1.7 }}>
            Stories are composite accounts based on real incident patterns reported to ACCC Scamwatch and OAIC. Names and identifying details are fictional.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: 16,
              marginTop: 24,
            }}
          >
            {stories.length ? (
              stories.map((s) => (
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
                  <Card variant="teal" style={{ height: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                      <Avatar name={displayNameForStory(s)} />
                      <span style={{ fontWeight: 700, color: 'var(--color-navy)' }}>{displayNameForStory(s)}</span>
                      <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>{s.location}</span>
                    </div>
                    <h3
                      style={{
                        fontFamily: 'Syne, sans-serif',
                        fontSize: 'var(--font-size-base)',
                        fontWeight: 700,
                        lineHeight: 1.4,
                        color: 'var(--color-navy)',
                        margin: '12px 0 0',
                      }}
                    >
                      {s.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--color-text-secondary)',
                        lineHeight: 1.6,
                        margin: '10px 0 0',
                      }}
                    >
                      {s.excerpt}
                    </p>
                    <StatusPill status={pillStatusForOutcome(s.outcome)} detail={pillDetailForStory(s)} />
                  </Card>
                </Link>
              ))
            ) : (
              <>
                {[
                  {
                    name: 'Sarah J',
                    location: 'Melbourne VIC',
                    headline: 'My MyGov Was Drained In 40 Minutes While I Was Asleep',
                    body: 'A scammer linked their bank account to her MyGov and redirected a $4,200 ATO refund. She had no idea until the money was gone.',
                    status: 'recovered' as const,
                    detail: '6 days to stabilise',
                  },
                  {
                    name: 'Marcus T',
                    location: 'Sydney NSW',
                    headline: 'Phone And Wallet Stolen At Circular Quay — I Had No Idea What To Call First',
                    body: 'Without a prioritised list of who to contact, Marcus spent two hours making calls in the wrong order. His bank account was hit within 45 minutes of the theft.',
                    status: 'recovered' as const,
                    detail: '3 days to full recovery',
                  },
                  {
                    name: 'Priya K',
                    location: 'Brisbane QLD',
                    headline: 'Passport Stolen Overseas — Consulate Said To Expect Two Weeks',
                    body: 'Travelling solo in Europe, Priya had her bag stolen including her passport. She had no printed copies and no idea which Australian consulate to call.',
                    status: 'recovered' as const,
                    detail: '9 days to return home',
                  },
                ].map((p) => (
                  <Card key={p.name} variant="teal">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                      <Avatar name={p.name} />
                      <span style={{ fontWeight: 700, color: 'var(--color-navy)' }}>{p.name}</span>
                      <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>{p.location}</span>
                    </div>
                    <h3
                      style={{
                        fontFamily: 'Syne, sans-serif',
                        fontSize: 'var(--font-size-base)',
                        fontWeight: 700,
                        lineHeight: 1.4,
                        color: 'var(--color-navy)',
                        margin: '12px 0 0',
                      }}
                    >
                      {p.headline}
                    </h3>
                    <p
                      style={{
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--color-text-secondary)',
                        lineHeight: 1.6,
                        margin: '10px 0 0',
                      }}
                    >
                      {p.body}
                    </p>
                    <StatusPill status={p.status} detail={p.detail} />
                  </Card>
                ))}
              </>
            )}
          </div>
        </section>
      </div>

      <section style={{ background: 'var(--color-teal-muted)', padding: '56px 24px', marginTop: 8 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          <div style={{ minWidth: 280 }}>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 800, color: 'var(--color-navy)', margin: 0, lineHeight: 1.2 }}>
              See How Cloak Works
            </h2>
            <p style={{ margin: '10px 0 0', fontSize: 15, color: 'rgba(15,31,61,0.78)', lineHeight: 1.7 }}>
              Understand the system before you ever need it.
            </p>
          </div>
          <Link
            href="/about"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px 20px',
              borderRadius: 12,
              background: 'var(--color-navy)',
              color: '#F8F9FB',
              fontSize: 14,
              fontWeight: 700,
              textDecoration: 'none',
              fontFamily: 'DM Sans, sans-serif',
              whiteSpace: 'nowrap',
            }}
          >
            How It Works →
          </Link>
        </div>
      </section>
    </div>
  )
}
