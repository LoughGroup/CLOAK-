import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import AppBanner from '@/components/AppBanner'
import { getGuideBySlug } from '@/lib/guides'
import { getAllStories, getStoryById, type Story } from '@/lib/stories'

type Props = {
  params: Promise<{ id: string }>
}

export function generateStaticParams() {
  return getAllStories().map((s) => ({ id: s.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const story = getStoryById(id)
  if (!story) {
    return { title: 'Story not found' }
  }
  return {
    title: story.title,
    description: story.excerpt,
  }
}

const outcomeStyles: Record<
  Story['outcome'],
  { label: string; dot: string; text: string }
> = {
  recovered: {
    label: 'Recovered',
    dot: '#4ADE80',
    text: '#4ADE80',
  },
  partial: {
    label: 'Partial recovery',
    dot: '#FBBF24',
    text: '#FBBF24',
  },
  resolved: {
    label: 'Resolved',
    dot: '#2DD4BF',
    text: '#2DD4BF',
  },
  ongoing: {
    label: 'Ongoing',
    dot: '#F87171',
    text: '#F87171',
  },
}

const sectionLabelStyle: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.12em',
  color: '#2DD4BF',
  marginBottom: 12,
  marginTop: 0,
}

const bodyParagraphStyle: React.CSSProperties = {
  fontSize: 16,
  color: '#CBD5E1',
  lineHeight: 1.8,
  fontWeight: 300,
  margin: 0,
}

export default async function StoryDetailPage({ params }: Props) {
  const { id } = await params
  const story = getStoryById(id)
  if (!story) {
    notFound()
  }

  const outcome = outcomeStyles[story.outcome]
  const relatedGuide = getGuideBySlug(story.relatedGuideSlug)

  return (
    <div style={{ background: '#0B0F1A', minHeight: '100vh' }}>
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '24px 24px 0' }}>
        <Link
          href="/stories"
          style={{
            fontSize: 13,
            color: '#94A3B8',
            textDecoration: 'none',
            display: 'inline-block',
            marginBottom: 24,
          }}
        >
          ← Back to stories
        </Link>
      </div>

      <header
        style={{
          background: '#111827',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          padding: '48px 24px',
          maxWidth: 860,
          margin: '0 auto',
        }}
      >
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: '#2DD4BF',
            margin: '0 0 12px',
          }}
        >
          {story.category}
        </p>
        <h1
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
            lineHeight: 1.2,
            color: '#F1F5F9',
            margin: '0 0 24px',
          }}
        >
          {story.title}
        </h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 16, marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Syne, sans-serif',
                fontSize: 13,
                fontWeight: 700,
                color: '#F1F5F9',
                background: 'rgba(45,212,191,0.12)',
                flexShrink: 0,
              }}
              aria-hidden
            >
              {story.initials}
            </div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 600, color: '#F1F5F9' }}>{story.firstName}</div>
              <div style={{ fontSize: 13, color: '#94A3B8' }}>
                {story.location} · {story.incidentDate}
              </div>
            </div>
          </div>
        </div>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            fontSize: 13,
            fontWeight: 600,
            color: outcome.text,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: outcome.dot,
              flexShrink: 0,
            }}
            aria-hidden
          />
          {outcome.label}
          {story.daysToResolve != null ? (
            <span style={{ color: '#94A3B8', fontWeight: 500 }}> · {story.daysToResolve} days to resolve</span>
          ) : null}
        </span>
      </header>

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '40px 24px' }}>
        <section style={{ marginBottom: 40 }}>
          <p style={sectionLabelStyle}>What happened</p>
          <p style={bodyParagraphStyle}>{story.whatHappened}</p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <p style={sectionLabelStyle}>How they felt</p>
          <blockquote
            style={{
              borderLeft: '3px solid rgba(45,212,191,0.4)',
              paddingLeft: 20,
              margin: 0,
              fontSize: 16,
              color: '#94A3B8',
              fontStyle: 'italic',
              lineHeight: 1.8,
            }}
          >
            {story.howTheyFelt}
          </blockquote>
        </section>

        <section style={{ marginBottom: 40 }}>
          <p style={sectionLabelStyle}>What they did</p>
          <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {story.whatTheyDid.map((step, index) => (
              <li
                key={index}
                style={{
                  display: 'flex',
                  gap: 12,
                  alignItems: 'flex-start',
                  marginBottom: index < story.whatTheyDid.length - 1 ? 14 : 0,
                }}
              >
                <span
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    background: 'rgba(45,212,191,0.12)',
                    color: '#2DD4BF',
                    fontSize: 12,
                    fontWeight: 700,
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  aria-hidden
                >
                  {index + 1}
                </span>
                <span style={{ fontSize: 15, color: '#CBD5E1', lineHeight: 1.7, paddingTop: 1 }}>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section style={{ marginBottom: 40 }}>
          <p style={sectionLabelStyle}>What worked</p>
          <p style={bodyParagraphStyle}>{story.whatWorked}</p>
        </section>

        <section style={{ marginBottom: 0 }}>
          <p style={sectionLabelStyle}>What they wish they&apos;d known</p>
          <div
            style={{
              background: 'rgba(245,158,11,0.08)',
              border: '1px solid rgba(245,158,11,0.2)',
              borderRadius: 10,
              padding: 20,
            }}
          >
            <p
              style={{
                fontSize: 10,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#F59E0B',
                marginBottom: 8,
                marginTop: 0,
              }}
            >
              Heads up
            </p>
            <p style={{ fontSize: 15, color: '#CBD5E1', lineHeight: 1.7, margin: 0 }}>{story.whatTheyWishTheyKnew}</p>
          </div>
        </section>
      </div>

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px 48px' }}>
        <div
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 12,
            padding: 20,
          }}
        >
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: '#2DD4BF',
              margin: '0 0 12px',
            }}
          >
            Related guide
          </p>
          <Link
            href={`/guides/${story.relatedGuideSlug}`}
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: '#F1F5F9',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            {relatedGuide?.title ?? 'View guide'}
            <span style={{ color: '#2DD4BF' }} aria-hidden>
              →
            </span>
          </Link>
        </div>
      </div>

      <AppBanner />
    </div>
  )
}
