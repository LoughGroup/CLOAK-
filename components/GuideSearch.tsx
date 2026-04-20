'use client'

import type { CSSProperties } from 'react'
import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react'
import type { Guide } from '@/types'
import { Card } from '@/components/ui/Card'
import { FadeUp } from '@/components/animation'
import { createSmartSearch, type SearchableGuide } from '@/lib/smartSearch'

const categoryStyle: CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  color: 'var(--color-teal)',
  marginBottom: 8,
  marginTop: 0,
}

const titleStyle: CSSProperties = {
  fontSize: 16,
  fontWeight: 700,
  color: 'var(--color-navy)',
  lineHeight: 1.35,
  margin: '0 0 8px',
}

const summaryStyle: CSSProperties = {
  fontSize: 13,
  color: 'var(--color-text-secondary)',
  lineHeight: 1.55,
  margin: '0 0 12px',
}

const metaStyle: CSSProperties = {
  fontSize: 13,
  color: 'var(--color-text-muted)',
  margin: '0 0 12px',
}

const linkStyle: CSSProperties = {
  fontSize: 13,
  fontWeight: 600,
  color: 'var(--color-teal)',
  textDecoration: 'none',
}

function guideToSearchable(guide: Guide): SearchableGuide {
  return {
    slug: guide.slug,
    title: guide.title,
    summary: guide.description,
    category: guide.category,
    readTime: `${guide.readingTime} min`,
  }
}

export function GuideSearch({ guides }: { guides: Guide[] }) {
  const [query, setQuery] = useState('')
  const searchables = useMemo(() => guides.map(guideToSearchable), [guides])
  const search = useMemo(() => createSmartSearch(searchables), [searchables])

  const results = useMemo(() => {
    if (!query.trim()) return guides
    const ordered = search(query)
    const bySlug = new Map(guides.map((g) => [g.slug, g]))
    return ordered.map((s) => bySlug.get(s.slug)).filter((g): g is Guide => g != null)
  }, [guides, query, search])

  return (
    <>
      <FadeUp delay={0.2}>
        <div style={{ marginBottom: 28 }}>
          <label
            htmlFor="guides-search"
            style={{
              display: 'block',
              fontSize: 'var(--font-size-sm)',
              fontWeight: 600,
              color: 'var(--color-text-secondary)',
              marginBottom: 8,
            }}
          >
            Search guides
          </label>
          <div style={{ position: 'relative', maxWidth: 560 }}>
            <Search
              size={18}
              aria-hidden
              style={{
                position: 'absolute',
                left: 14,
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--color-text-muted)',
                pointerEvents: 'none',
              }}
            />
            <input
              id="guides-search"
              type="search"
              name="guides-search"
              autoComplete="off"
              placeholder="Search by topic, incident type, or keyword…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="guides-search-input"
              style={{
                width: '100%',
                padding: '12px 14px 12px 44px',
                fontSize: 'var(--font-size-base)',
                fontFamily: 'DM Sans, sans-serif',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                background: 'var(--color-bg-card)',
                color: 'var(--color-text-primary)',
                boxShadow: 'var(--shadow-card)',
              }}
            />
          </div>
        </div>
      </FadeUp>

      {results.length === 0 && query.trim() !== '' ? (
        <p
          style={{
            fontSize: 'var(--font-size-base)',
            color: 'var(--color-text-secondary)',
            margin: 0,
            padding: '24px',
            background: 'var(--color-bg-card)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            textAlign: 'center',
          }}
        >
          No guides match &ldquo;{query.trim()}&rdquo;. Try a different keyword.
        </p>
      ) : (
        <div
          className="guides-index-grid"
          style={{
            display: 'grid',
            gap: 20,
            gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
          }}
        >
          {results.map((guide) => (
            <Card
              key={guide.slug}
              variant="default"
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                padding: '20px 24px',
              }}
            >
              <p style={categoryStyle}>{guide.category}</p>
              <h3 style={titleStyle}>{guide.title}</h3>
              <p style={summaryStyle}>{guide.description}</p>
              <p style={metaStyle}>{guide.readingTime} min read</p>
              <div style={{ marginTop: 'auto' }}>
                <Link href={`/guides/${guide.slug}`} style={linkStyle}>
                  Read guide →
                </Link>
              </div>
            </Card>
          ))}
        </div>
      )}

      <style>{`
        .guides-search-input:focus {
          outline: 2px solid var(--color-teal-border);
          outline-offset: 2px;
          border-color: var(--color-teal);
        }
        @media (min-width: 640px) {
          .guides-index-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (min-width: 1024px) {
          .guides-index-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
      `}</style>
    </>
  )
}
