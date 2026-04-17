'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/Card'

const AU_STATES = ['ACT', 'NSW', 'NT', 'QLD', 'SA', 'TAS', 'VIC', 'WA']

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async () => {
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, state }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        style={{
          background: 'var(--color-teal-muted)',
          border: '1px solid rgba(26,158,143,0.35)',
          borderRadius: 12,
          padding: '32px 24px',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: 28, marginBottom: 8 }}>✓</div>
        <div
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 700,
            fontSize: 18,
            color: 'var(--color-text-primary)',
            marginBottom: 6,
          }}
        >
          You&apos;re on the list
        </div>
        <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', fontWeight: 300 }}>
          We&apos;ll notify you the moment CLOAK launches in Australia.
        </p>
      </div>
    )
  }

  return (
    <Card variant="default" style={{ borderRadius: 'var(--radius-xl)', padding: '40px 32px' }}>
      <div style={{ marginBottom: 24, textAlign: 'center' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            background: 'var(--color-teal-muted)',
            border: '1px solid rgba(26,158,143,0.3)',
            borderRadius: 999,
            padding: '4px 14px',
            fontSize: 11,
            fontWeight: 600,
            color: 'var(--color-teal)',
            marginBottom: 16,
          }}
        >
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-teal)' }} />
          Launching soon
        </div>
        <h3
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 22,
            color: 'var(--color-text-primary)',
            marginBottom: 8,
          }}
        >
          Be first to know when CLOAK launches
        </h3>
        <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', fontWeight: 300, lineHeight: 1.6 }}>
          Join the waitlist. Get early access, plus a free premium trial when we launch.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <input
          type="email"
          placeholder="your@email.com.au"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          style={{
            background: 'var(--color-bg-page)',
            border: '1px solid var(--color-border)',
            borderRadius: 8,
            padding: '12px 16px',
            fontSize: 14,
            color: 'var(--color-text-primary)',
            outline: 'none',
            fontFamily: 'DM Sans, sans-serif',
            width: '100%',
          }}
        />
        <select
          value={state}
          onChange={(e) => setState(e.target.value)}
          style={{
            background: 'var(--color-bg-page)',
            border: '1px solid var(--color-border)',
            borderRadius: 8,
            padding: '12px 16px',
            fontSize: 14,
            color: state ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
            outline: 'none',
            fontFamily: 'DM Sans, sans-serif',
            width: '100%',
            cursor: 'pointer',
          }}
        >
          <option value="">Your state (optional)</option>
          {AU_STATES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={status === 'loading' || !email}
          style={{
            background: email ? 'var(--color-teal)' : 'rgba(26,158,143,0.35)',
            color: 'var(--color-navy)',
            fontWeight: 700,
            padding: '13px 0',
            borderRadius: 8,
            border: 'none',
            fontSize: 14,
            cursor: email ? 'pointer' : 'not-allowed',
            fontFamily: 'DM Sans, sans-serif',
            transition: 'background 0.2s',
          }}
        >
          {status === 'loading' ? 'Joining...' : 'Notify me when it launches →'}
        </button>
      </div>

      {status === 'error' && (
        <p style={{ fontSize: 13, color: '#F87171', marginTop: 8, textAlign: 'center' }}>
          Something went wrong. Please try again.
        </p>
      )}

      <p style={{ fontSize: 11, color: 'var(--color-text-secondary)', textAlign: 'center', marginTop: 16 }}>
        No spam. Unsubscribe any time. Australian privacy law compliant.
      </p>
    </Card>
  )
}
