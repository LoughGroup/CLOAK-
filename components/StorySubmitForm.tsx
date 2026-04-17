'use client'

import { useState } from 'react'

const AU_STATES = ['ACT', 'NSW', 'NT', 'QLD', 'SA', 'TAS', 'VIC', 'WA']

const CATEGORIES = [
  'Phone theft',
  'Identity theft',
  'SIM swap',
  'Wallet stolen',
  'Passport stolen',
  'Home burglary',
  'Account hacked',
  'Other',
] as const

const OUTCOMES = ['Fully resolved', 'Partially resolved', 'Still ongoing'] as const

const fieldBase: React.CSSProperties = {
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 8,
  padding: '12px 16px',
  fontSize: 14,
  color: '#F1F5F9',
  outline: 'none',
  fontFamily: 'DM Sans, sans-serif',
  width: '100%',
  boxSizing: 'border-box',
}

export default function StorySubmitForm() {
  const [firstName, setFirstName] = useState('')
  const [location, setLocation] = useState('')
  const [category, setCategory] = useState('')
  const [title, setTitle] = useState('')
  const [whatHappened, setWhatHappened] = useState('')
  const [whatTheyDid, setWhatTheyDid] = useState('')
  const [outcome, setOutcome] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const canSubmit =
    whatHappened.trim().length >= 50 && status !== 'loading'

  const handleSubmit = async () => {
    if (!canSubmit) return
    setStatus('loading')
    setErrorMessage('')
    try {
      const res = await fetch('/api/stories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          location,
          category,
          title,
          whatHappened,
          whatTheyDid,
          outcome,
          contactEmail,
        }),
      })
      const data = (await res.json().catch(() => ({}))) as { error?: string }
      if (!res.ok) {
        setErrorMessage(data.error ?? 'Something went wrong')
        setStatus('error')
        return
      }
      setStatus('success')
      setFirstName('')
      setLocation('')
      setCategory('')
      setTitle('')
      setWhatHappened('')
      setWhatTheyDid('')
      setOutcome('')
      setContactEmail('')
    } catch {
      setErrorMessage('Something went wrong')
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
        <p style={{ fontSize: 28, marginBottom: 10, lineHeight: 1 }} aria-hidden>
          ✓
        </p>
        <p
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 700,
            fontSize: 17,
            color: '#F1F5F9',
            margin: 0,
            lineHeight: 1.55,
          }}
        >
          Thank you — we&apos;ll review your story and may reach out before publishing.
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
        padding: '32px 28px',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <input
          type="text"
          placeholder="First name only"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          style={fieldBase}
        />
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{
            ...fieldBase,
            color: location ? '#F1F5F9' : '#64748B',
            cursor: 'pointer',
          }}
        >
          <option value="">State</option>
          {AU_STATES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            ...fieldBase,
            color: category ? '#F1F5F9' : '#64748B',
            cursor: 'pointer',
          }}
        >
          <option value="">Category</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="One sentence — what happened?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={fieldBase}
        />
        <textarea
          rows={6}
          placeholder="Describe what happened in as much detail as you're comfortable sharing..."
          value={whatHappened}
          onChange={(e) => setWhatHappened(e.target.value)}
          style={{ ...fieldBase, resize: 'vertical', minHeight: 120 }}
        />
        <textarea
          rows={4}
          placeholder="What steps did you take? What worked? What didn't?"
          value={whatTheyDid}
          onChange={(e) => setWhatTheyDid(e.target.value)}
          style={{ ...fieldBase, resize: 'vertical', minHeight: 88 }}
        />
        <select
          value={outcome}
          onChange={(e) => setOutcome(e.target.value)}
          style={{
            ...fieldBase,
            color: outcome ? '#F1F5F9' : '#64748B',
            cursor: 'pointer',
          }}
        >
          <option value="">Outcome</option>
          {OUTCOMES.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <input
          type="text"
          inputMode="email"
          autoComplete="email"
          placeholder="Optional — only used to confirm before we publish"
          value={contactEmail}
          onChange={(e) => setContactEmail(e.target.value)}
          style={fieldBase}
        />
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!canSubmit}
          style={{
            background: canSubmit ? '#2DD4BF' : 'rgba(45,212,191,0.3)',
            color: '#0B0F1A',
            fontWeight: 700,
            padding: '13px 0',
            borderRadius: 8,
            border: 'none',
            fontSize: 14,
            cursor: canSubmit ? 'pointer' : 'not-allowed',
            fontFamily: 'DM Sans, sans-serif',
            transition: 'background 0.2s',
          }}
        >
          {status === 'loading' ? 'Submitting...' : 'Submit my story →'}
        </button>
      </div>

      {whatHappened.length > 0 && whatHappened.trim().length < 50 && (
        <p style={{ fontSize: 13, color: '#FBBF24', marginTop: 12, marginBottom: 0 }}>
          Please add at least 50 characters in &quot;What happened&quot; so we can understand your story.
        </p>
      )}

      {status === 'error' && errorMessage && (
        <p style={{ fontSize: 13, color: '#F87171', marginTop: 12, marginBottom: 0, textAlign: 'center' }}>
          {errorMessage}
        </p>
      )}
    </div>
  )
}
