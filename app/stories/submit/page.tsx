import type { Metadata } from 'next'
import StorySubmitForm from '@/components/StorySubmitForm'

export const metadata: Metadata = {
  title: 'Share your story',
  description:
    'Tell us what happened in your own words — anonymised stories help other Australians prepare and recover.',
}

export default function StorySubmitPage() {
  return (
    <div style={{ background: '#0B0F1A', minHeight: '100vh' }}>
      <div style={{ maxWidth: 640, margin: '0 auto', padding: '48px 24px 72px' }}>
        <header style={{ marginBottom: 28 }}>
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
            Share your story
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
            What happened to you?
          </h1>
          <p style={{ fontSize: 15, color: '#94A3B8', fontWeight: 300, margin: 0, lineHeight: 1.7 }}>
            Your experience could help other Australians recover faster. All stories are anonymised before publishing.
          </p>
        </header>

        <div
          style={{
            background: 'rgba(251,191,36,0.08)',
            border: '1px solid rgba(251,191,36,0.28)',
            borderRadius: 12,
            padding: '18px 20px',
            marginBottom: 28,
          }}
        >
          <p style={{ fontSize: 13, color: '#FDE68A', fontWeight: 600, margin: '0 0 8px', lineHeight: 1.5 }}>
            Before you submit
          </p>
          <p style={{ fontSize: 14, color: '#E2E8F0', fontWeight: 300, margin: 0, lineHeight: 1.65 }}>
            Every story is reviewed before we publish anything. We change names and identifying details. If you add an
            email, we only use it to confirm with you before your story goes live — never for marketing.
          </p>
        </div>

        <StorySubmitForm />
      </div>
    </div>
  )
}
