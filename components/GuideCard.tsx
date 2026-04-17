'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { Guide } from '@/types'

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
    return { ...base, background: 'rgba(239,68,68,0.12)', color: '#F87171' }
  }
  if (urgency === 'high-risk') {
    return { ...base, background: 'rgba(245,158,11,0.12)', color: '#FBBF24' }
  }
  return { ...base, background: 'rgba(45,212,191,0.1)', color: '#2DD4BF' }
}

export default function GuideCard({ guide }: Props) {
  const [borderColor, setBorderColor] = useState('rgba(255,255,255,0.08)')

  return (
    <Link
      href={`/guides/${guide.slug}`}
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: `1px solid ${borderColor}`,
        borderRadius: 12,
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        textDecoration: 'none',
        transition: 'border-color 0.2s',
      }}
      onMouseEnter={() => setBorderColor('rgba(45,212,191,0.35)')}
      onMouseLeave={() => setBorderColor('rgba(255,255,255,0.08)')}
    >
      <span
        style={{
          fontSize: 11,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: '#94A3B8',
        }}
      >
        {guide.category}
      </span>
      <h3
        style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 15,
          fontWeight: 600,
          color: '#F1F5F9',
          lineHeight: 1.4,
          margin: 0,
        }}
      >
        {guide.title}
      </h3>
      <p
        style={{
          fontSize: 13,
          color: '#94A3B8',
          lineHeight: 1.6,
          flexGrow: 1,
          margin: 0,
        }}
      >
        {guide.description}
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 4 }}>
        <span style={urgencyBadgeStyle(guide.urgency)}>{guide.urgency.replace('-', ' ')}</span>
        <span style={{ fontSize: 12, color: '#94A3B8' }}>{guide.readingTime} min read</span>
      </div>
    </Link>
  )
}
