'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { Guide } from '@/types'
import { Card } from '@/components/ui/Card'

type Props = {
  guide: Guide
}

const urgencyBadgeStyle = (urgency: Guide['urgency']): React.CSSProperties => {
  const base: React.CSSProperties = {
    fontSize: 10,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    padding: '3px 10px',
    borderRadius: 4,
  }
  if (urgency === 'urgent') {
    return { ...base, background: 'var(--color-danger-muted)', color: 'var(--color-danger)' }
  }
  if (urgency === 'high-risk') {
    return { ...base, background: 'var(--color-warning-muted)', color: 'var(--color-warning)' }
  }
  return { ...base, background: 'var(--color-teal-muted)', color: 'var(--color-teal)' }
}

export default function GuideCard({ guide }: Props) {
  const [borderColor, setBorderColor] = useState('var(--color-border)')

  return (
    <Link
      href={`/guides/${guide.slug}`}
      style={{
        display: 'block',
        textDecoration: 'none',
        color: 'inherit',
        height: '100%',
        transition: 'border-color 0.2s',
      }}
      onMouseEnter={() => setBorderColor('var(--color-teal-border)')}
      onMouseLeave={() => setBorderColor('var(--color-border)')}
    >
      <Card
        variant="default"
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          border: `1px solid ${borderColor}`,
          boxSizing: 'border-box',
          borderLeft: '3px solid var(--color-teal)',
          paddingLeft: 21,
        }}
      >
      <span
        style={{
          fontSize: 11,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: 'var(--color-text-secondary)',
        }}
      >
        {guide.category}
      </span>
      <h3
        style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 'var(--font-size-md)',
          fontWeight: 600,
          color: 'var(--color-navy)',
          lineHeight: 1.4,
          margin: 0,
        }}
      >
        {guide.title}
      </h3>
      <p
        style={{
          fontSize: 'var(--font-size-sm)',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.6,
          flexGrow: 1,
          margin: 0,
        }}
      >
        {guide.description}
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 4 }}>
        <span style={urgencyBadgeStyle(guide.urgency)}>{guide.urgency.replace('-', ' ')}</span>
        <span style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>{guide.readingTime} min read</span>
      </div>
      </Card>
    </Link>
  )
}
