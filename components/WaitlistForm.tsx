'use client'

import { useState } from 'react'

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
          background: 'rgba(45,212,191,0.08)',
          border: '1px solid rgba(45,212,191,0.25)',
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
            color: '#F1F5F9',
            marginBottom: 6,
          }}
        >
          You&apos;re on the list
        </div>
        <p style={{ fontSize: 14, color: '#94A3B8', fontWeight: 300 }}>
          We&apos;ll notify you the moment CLOAK launches in Australia.
        </p>
      </div>
    )
  }

  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 16,
        padding: '40px 32px',
      }}
    >
      <div style={{ marginBottom: 24, textAlign: 'center' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            background: 'rgba(45,212,191,0.08)',
            border: '1px solid rgba(45,212,191,0.2)',
            borderRadius: 999,
            padding: '4px 14px',
            fontSize: 11,
            fontWeight: 600,
            color: '#2DD4BF',
            marginBottom: 16,
          }}
        >
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#2DD4BF' }} />
          Launching soon
        </div>
        <h3
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 22,
            color: '#F1F5F9',
            marginBottom: 8,
          }}
        >
          Be first to know when CLOAK launches
        </h3>
        <p style={{ fontSize: 14, color: '#94A3B8', fontWeight: 300, lineHeight: 1.6 }}>
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
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 8,
            padding: '12px 16px',
            fontSize: 14,
            color: '#F1F5F9',
            outline: 'none',
            fontFamily: 'DM Sans, sans-serif',
            width: '100%',
          }}
        />
        <select
          value={state}
          onChange={(e) => setState(e.target.value)}
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 8,
            padding: '12px 16px',
            fontSize: 14,
            color: state ? '#F1F5F9' : '#64748B',
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
            background: email ? '#2DD4BF' : 'rgba(45,212,191,0.3)',
            color: '#0B0F1A',
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

      <p style={{ fontSize: 11, color: '#475569', textAlign: 'center', marginTop: 16 }}>
        No spam. Unsubscribe any time. Australian privacy law compliant.
      </p>
    </div>
  )
}
