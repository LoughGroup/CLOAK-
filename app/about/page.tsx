import type { Metadata } from 'next'
import PageBackground from '@/components/PageBackground'
import { Avatar } from '@/components/ui/Avatar'
import { Card } from '@/components/ui/Card'
import { StatusPill } from '@/components/ui/StatusPill'
import { FadeIn, FadeUp } from '@/components/animation'

export const metadata: Metadata = {
  title: 'How it works',
  description:
    'CLOAK replaces panic with a clear, ordered action plan for Australians — set up in minutes, built for local agencies and contacts.',
}

const sectionLabel: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.12em',
  color: 'var(--color-teal)',
  marginBottom: 8,
  marginTop: 0,
}

const h2Base: React.CSSProperties = {
  fontFamily: 'Syne, sans-serif',
  fontSize: 28,
  fontWeight: 700,
  marginTop: 0,
  marginBottom: 12,
  color: 'var(--color-text-primary)',
}

const categories = [
  'Phone theft',
  'Wallet stolen',
  'Identity theft',
  'SIM swap attack',
  'Passport stolen',
  'MyGov compromise',
  'Home burglary',
  'Car theft',
  'Laptop stolen',
  'House keys',
  'Pet lost',
  'Mail theft',
  'Medicare card',
  'Driver licence',
  'Bank fraud',
  'Travel incident',
  'Overseas emergency',
  'Number plates',
  'Bicycle theft',
  'Work device',
  'Access cards',
  'Medical essentials',
  'Parcel theft',
  'Found later',
  '+ more added regularly',
] as const

const steps = [
  {
    title: 'Tell CLOAK what happened',
    desc: 'Answer 3 quick questions about your situation. CLOAK identifies your incident type, risk level, and which assets are affected.',
  },
  {
    title: 'Get your personalised action plan',
    desc: 'CLOAK selects the correct playbook and generates an ordered task list. Every task is ranked by urgency — the most time-critical actions come first.',
  },
  {
    title: 'Take action with one tap',
    desc: 'Call your bank, telco, or government agency directly from the app. No Googling phone numbers under stress. Every contact is pre-loaded for Australia.',
  },
  {
    title: 'Track, evidence, and follow up',
    desc: "Log what you've done, capture photos of evidence, and set reminders for follow-up tasks. CLOAK keeps a complete incident record you can share with police or insurers.",
  },
] as const

const timelineItems = [
  { time: '1 min', title: 'Download & create account', desc: "Email and password. That's it." },
  { time: '1 min', title: 'Add your key assets', desc: 'Phone, wallet, passport, licence. Takes seconds each.' },
  { time: '1 min', title: 'Set a Panic PIN', desc: 'A 6-digit code that unlocks recovery mode from any device.' },
  { time: '1 min', title: 'Add a trusted guardian', desc: 'Someone who can help you recover if you lose your phone.' },
] as const

function FeatureRow({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', margin: '0 0 10px', display: 'flex', alignItems: 'flex-start', gap: 10, lineHeight: 1.5 }}>
      <span style={{ color: 'var(--color-teal)', flexShrink: 0 }}>✓</span>
      <span>{children}</span>
    </p>
  )
}

export default function AboutPage() {
  return (
    <div style={{ background: 'var(--color-bg-page)', minHeight: '100vh' }}>
      {/* Section 1 — Hero */}
      <div style={{ position: 'relative', background: 'var(--color-navy)', overflow: 'hidden' }}>
        <PageBackground contained />
        <section
          style={{
            position: 'relative',
            zIndex: 1,
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
            background: 'rgba(26,158,143,0.12)',
            border: '1px solid rgba(26,158,143,0.35)',
            borderRadius: 999,
            padding: '5px 16px',
            fontSize: 12,
            fontWeight: 600,
            color: 'var(--color-teal-light)',
            marginBottom: 24,
          }}
        >
          Free to download · iOS & Android
        </div>
        <FadeIn delay={0}>
          <h1
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              color: '#F8F9FB',
              lineHeight: 1.15,
              maxWidth: 900,
              margin: '0 auto 20px',
            }}
          >
            The app that tells you exactly what to do — and in what order
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p
            style={{
              fontSize: 17,
              color: 'rgba(248,250,252,0.75)',
              fontWeight: 300,
              maxWidth: 560,
              margin: '0 auto 32px',
              lineHeight: 1.7,
            }}
          >
            Most people freeze when something goes wrong. CLOAK replaces panic with a clear, ordered action plan — built specifically for Australians.
          </p>
        </FadeIn>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 20 }}>
          <a
            href="/#app"
            style={{
              background: 'var(--color-teal)',
              color: 'var(--color-navy)',
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
            Download free
          </a>
          <a
            href="#how-it-works"
            style={{
              background: 'transparent',
              color: '#F8F9FB',
              fontWeight: 500,
              padding: '13px 28px',
              borderRadius: 8,
              border: '1px solid rgba(255,255,255,0.2)',
              fontSize: 14,
              cursor: 'pointer',
              fontFamily: 'DM Sans, sans-serif',
              textDecoration: 'none',
            }}
          >
            See how it works
          </a>
        </div>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            background: 'rgba(255,255,255,0.08)',
            borderRadius: 999,
            padding: '5px 14px',
            fontSize: 12,
            color: 'rgba(248,250,252,0.8)',
            fontWeight: 500,
          }}
        >
          ⏱ Takes 4 minutes to set up
        </div>
      </section>
      </div>

      {/* Section 2 — The problem */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px' }}>
        <p style={sectionLabel}>The problem</p>
        <h2 style={{ ...h2Base, marginBottom: 32 }}>Most people have no plan when things go wrong</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 20,
          }}
        >
          <Card variant="default" style={{ padding: 24 }}>
            <p style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: 'var(--color-teal)', margin: '0 0 12px' }}>
              67%
            </p>
            <p style={{ fontSize: 15, color: 'var(--color-text-primary)', lineHeight: 1.55, margin: '0 0 16px' }}>
              of Australians don&apos;t know the correct first step after phone theft
            </p>
            <p style={{ fontSize: 12, color: 'var(--color-text-secondary)', margin: 0 }}>Source: ACCC 2023</p>
          </Card>
          <Card variant="default" style={{ padding: 24 }}>
            <p style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: '#F59E0B', margin: '0 0 12px' }}>
              48hrs
            </p>
            <p style={{ fontSize: 15, color: 'var(--color-text-primary)', lineHeight: 1.55, margin: '0 0 16px' }}>
              is the critical window to act after identity theft before damage compounds
            </p>
            <p style={{ fontSize: 12, color: 'var(--color-text-secondary)', margin: 0 }}>Source: IDCARE</p>
          </Card>
          <Card variant="default" style={{ padding: 24 }}>
            <p style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: '#F87171', margin: '0 0 12px' }}>
              $3.1B
            </p>
            <p style={{ fontSize: 15, color: 'var(--color-text-primary)', lineHeight: 1.55, margin: '0 0 16px' }}>
              lost to fraud in Australia in 2023 — much of it preventable with faster action
            </p>
            <p style={{ fontSize: 12, color: 'var(--color-text-secondary)', margin: 0 }}>Source: ACCC Scamwatch</p>
          </Card>
        </div>
      </section>

      {/* Section — Real stories (placeholders) */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px 60px' }}>
        <p style={sectionLabel}>Real stories</p>
        <h2 style={{ ...h2Base, marginBottom: 20 }}>What recovery looked like for others</h2>
        <p style={{ fontSize: 15, color: 'var(--color-text-secondary)', fontWeight: 300, maxWidth: 640, margin: '0 0 28px', lineHeight: 1.65 }}>
          Anonymised accounts — names and details changed. Outcomes vary; use these as context, not guarantees.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 16,
          }}
        >
          <FadeUp delay={0}>
            <Card variant="teal">
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                <Avatar name="Sarah J" />
                <span style={{ fontWeight: 700, color: 'var(--color-navy)' }}>Sarah J</span>
                <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Melbourne VIC</span>
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
                My MyGov Was Drained In 40 Minutes While I Was Asleep
              </h3>
              <p
                style={{
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                  margin: '10px 0 0',
                }}
              >
                A scammer linked their bank account to her MyGov and redirected a $4,200 ATO refund. She had no idea until the money was gone.
              </p>
              <StatusPill status="recovered" detail="6 days to stabilise" />
            </Card>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Card variant="teal">
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                <Avatar name="Marcus T" />
                <span style={{ fontWeight: 700, color: 'var(--color-navy)' }}>Marcus T</span>
                <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Sydney NSW</span>
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
                Phone And Wallet Stolen At Circular Quay — I Had No Idea What To Call First
              </h3>
              <p
                style={{
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                  margin: '10px 0 0',
                }}
              >
                Without a prioritised list of who to contact, Marcus spent two hours making calls in the wrong order. His bank account was hit within 45 minutes of the theft.
              </p>
              <StatusPill status="recovered" detail="3 days to full recovery" />
            </Card>
          </FadeUp>
          <FadeUp delay={0.2}>
            <Card variant="teal">
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                <Avatar name="Priya K" />
                <span style={{ fontWeight: 700, color: 'var(--color-navy)' }}>Priya K</span>
                <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Brisbane QLD</span>
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
                Passport Stolen Overseas — Consulate Said To Expect Two Weeks
              </h3>
              <p
                style={{
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                  margin: '10px 0 0',
                }}
              >
                Travelling solo in Europe, Priya had her bag stolen including her passport. She had no printed copies and no idea which Australian consulate to call.
              </p>
              <StatusPill status="recovered" detail="9 days to return home" />
            </Card>
          </FadeUp>
        </div>
      </section>

      {/* Section 3 — How it works */}
      <section id="how-it-works" style={{ background: '#FFFFFF', padding: '60px 24px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <p style={sectionLabel}>How it works</p>
          <h2 style={{ ...h2Base, marginBottom: 40 }}>From panic to action in under 60 seconds</h2>
          {steps.map((step, i) => (
            <div key={step.title}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: 'rgba(26,158,143,0.12)',
                    color: 'var(--color-teal)',
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: 700,
                    fontSize: 16,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {i + 1}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      fontWeight: 600,
                      fontSize: 16,
                      color: 'var(--color-text-primary)',
                      margin: '0 0 8px',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                </div>
              </div>
              {i < steps.length - 1 ? (
                <div
                  style={{
                    width: 0,
                    height: 32,
                    marginLeft: 20,
                    borderLeft: '2px solid var(--color-border)',
                  }}
                />
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 — What it covers */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px' }}>
        <p style={sectionLabel}>What CLOAK covers</p>
        <h2 style={{ ...h2Base, marginBottom: 12 }}>25+ incident types built for Australia</h2>
        <p style={{ fontSize: 15, color: 'var(--color-text-secondary)', fontWeight: 300, maxWidth: 640, margin: '0 0 28px', lineHeight: 1.65 }}>
          From phone theft to identity fraud — every playbook is written for Australian systems, agencies, and contact numbers.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {categories.map((cat) => {
            const isMore = cat === '+ more added regularly'
            return (
              <span
                key={cat}
                style={{
                  background: isMore ? 'var(--color-teal-muted)' : 'var(--color-bg-page)',
                  border: isMore ? '1px solid rgba(26,158,143,0.35)' : '1px solid var(--color-border)',
                  borderRadius: 999,
                  padding: '6px 16px',
                  fontSize: 13,
                  color: isMore ? 'var(--color-teal)' : 'var(--color-text-secondary)',
                }}
              >
                {cat}
              </span>
            )
          })}
        </div>
      </section>

      {/* Section 5 — Setup time */}
      <section style={{ background: '#FFFFFF', padding: '60px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={sectionLabel}>Getting started</p>
          <h2 style={{ ...h2Base, marginBottom: 12 }}>Set up in 4 minutes. Ready before anything goes wrong.</h2>
          <p style={{ fontSize: 15, color: 'var(--color-text-secondary)', fontWeight: 300, maxWidth: 560, margin: '0 0 40px', lineHeight: 1.65 }}>
            CLOAK is most useful when it&apos;s already set up. Here&apos;s how fast it is.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
              gap: 16,
            }}
          >
            {timelineItems.map((item) => (
              <Card
                key={item.title}
                variant="default"
                style={{
                  textAlign: 'center',
                  padding: 24,
                }}
              >
                <div
                  style={{
                    display: 'inline-block',
                    background: 'rgba(26,158,143,0.12)',
                    color: 'var(--color-teal)',
                    borderRadius: 999,
                    padding: '4px 12px',
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  {item.time}
                </div>
                <p style={{ fontFamily: 'Syne, sans-serif', fontSize: 15, fontWeight: 600, color: 'var(--color-text-primary)', marginTop: 12, marginBottom: 8 }}>
                  {item.title}
                </p>
                <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.55 }}>{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Free vs Premium */}
      <section style={{ maxWidth: 960, margin: '0 auto', padding: '60px 24px' }}>
        <p style={sectionLabel}>Plans</p>
        <h2 style={{ ...h2Base, marginBottom: 32 }}>Start free. Upgrade when you&apos;re ready.</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 24,
          }}
        >
          <Card variant="default" style={{ borderRadius: 'var(--radius-xl)', padding: 32 }}>
            <span
              style={{
                display: 'inline-block',
                background: 'var(--color-bg-page)',
                color: 'var(--color-text-secondary)',
                borderRadius: 999,
                padding: '3px 12px',
                fontSize: 11,
                fontWeight: 600,
                marginBottom: 16,
              }}
            >
              Free forever
            </span>
            <p style={{ fontFamily: 'Syne, sans-serif', fontSize: 36, fontWeight: 800, color: 'var(--color-text-primary)', margin: '0 0 24px' }}>AU$0</p>
            <div style={{ marginBottom: 28 }}>
              <FeatureRow>All emergency guides</FeatureRow>
              <FeatureRow>One-tap calling</FeatureRow>
              <FeatureRow>25+ incident playbooks</FeatureRow>
              <FeatureRow>Basic incident tracking</FeatureRow>
            </div>
            <a
              href="/#app"
              style={{
                display: 'block',
                width: '100%',
                boxSizing: 'border-box',
                textAlign: 'center',
                background: 'var(--color-teal)',
                color: 'var(--color-navy)',
                fontWeight: 600,
                padding: '14px 20px',
                borderRadius: 8,
                fontSize: 14,
                fontFamily: 'DM Sans, sans-serif',
                textDecoration: 'none',
              }}
            >
              Download free
            </a>
          </Card>
          <Card
            variant="teal"
            style={{ borderRadius: 'var(--radius-xl)', padding: 32, border: '2px solid rgba(26,158,143,0.35)' }}
          >
            <span
              style={{
                display: 'inline-block',
                background: 'rgba(26,158,143,0.15)',
                color: 'var(--color-teal)',
                borderRadius: 999,
                padding: '3px 12px',
                fontSize: 11,
                fontWeight: 600,
                marginBottom: 16,
              }}
            >
              Premium
            </span>
            <p style={{ fontFamily: 'Syne, sans-serif', fontSize: 36, fontWeight: 800, color: 'var(--color-teal)', margin: '0 0 24px', lineHeight: 1.1 }}>
              AU$4.99{' '}
              <span style={{ fontSize: 16, fontWeight: 600, color: 'var(--color-text-secondary)' }}>/month</span>
            </p>
            <div style={{ marginBottom: 28 }}>
              <FeatureRow>All emergency guides</FeatureRow>
              <FeatureRow>One-tap calling</FeatureRow>
              <FeatureRow>25+ incident playbooks</FeatureRow>
              <FeatureRow>Basic incident tracking</FeatureRow>
              <FeatureRow>Saved assets & providers</FeatureRow>
              <FeatureRow>Guardian-assisted Panic Mode</FeatureRow>
              <FeatureRow>Evidence kit & photo capture</FeatureRow>
              <FeatureRow>Reminder & follow-up tracking</FeatureRow>
              <FeatureRow>Masked identifier storage</FeatureRow>
              <FeatureRow>Priority support</FeatureRow>
            </div>
            <a
              href="/#app"
              style={{
                display: 'block',
                width: '100%',
                boxSizing: 'border-box',
                textAlign: 'center',
                background: 'var(--color-teal)',
                color: 'var(--color-navy)',
                fontWeight: 600,
                padding: '14px 20px',
                borderRadius: 8,
                fontSize: 14,
                fontFamily: 'DM Sans, sans-serif',
                textDecoration: 'none',
              }}
            >
              Start free trial
            </a>
          </Card>
        </div>
      </section>

      {/* Section 7 — Final CTA */}
      <section style={{ textAlign: 'center', padding: '80px 24px', background: 'var(--color-bg-page)' }}>
        <FadeUp delay={0}>
          <h2
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: 800,
              color: 'var(--color-text-primary)',
              margin: '0 auto 16px',
              maxWidth: 640,
              lineHeight: 1.15,
            }}
          >
            Set it up before you need it
          </h2>
        </FadeUp>
        <p style={{ fontSize: 17, color: 'var(--color-text-secondary)', fontWeight: 300, maxWidth: 480, margin: '0 auto 28px', lineHeight: 1.65 }}>
          Takes 4 minutes. Free to start. Could save you days of stress.
        </p>
        <FadeUp delay={0.1}>
          <a
            href="/#app"
            style={{
              display: 'inline-block',
              background: 'var(--color-teal)',
              color: 'var(--color-navy)',
              fontWeight: 600,
              padding: '13px 32px',
              borderRadius: 8,
              fontSize: 14,
              fontFamily: 'DM Sans, sans-serif',
              textDecoration: 'none',
              marginBottom: 16,
            }}
          >
            Download free
          </a>
        </FadeUp>
        <p style={{ fontSize: 12, color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
          Available on iOS and Android · Free to download · No credit card required
        </p>
      </section>
    </div>
  )
}
