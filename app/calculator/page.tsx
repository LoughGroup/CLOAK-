'use client'

import { useMemo, useState } from 'react'
import AppBanner from '@/components/AppBanner'

type IncidentType = 'theft' | 'identity' | 'account' | 'home'

const INCIDENT_OPTIONS: { id: IncidentType; label: string }[] = [
  { id: 'theft', label: 'Theft / physical loss' },
  { id: 'identity', label: 'Identity theft or fraud' },
  { id: 'account', label: 'Account compromise' },
  { id: 'home', label: 'Home break-in' },
]

type ItemDef = {
  id: string
  emoji: string
  label: string
  note: string
  cost: number
  /** Included in the ~60% insurance coverage estimate for physical losses */
  insuredPhysical: boolean
  resolveHours: number
}

const ITEMS: ItemDef[] = [
  { id: 'phone', emoji: '📱', label: 'Phone', note: '$800 avg replacement', cost: 800, insuredPhysical: true, resolveHours: 4 },
  { id: 'laptop', emoji: '💻', label: 'Laptop', note: '$1,400 avg', cost: 1400, insuredPhysical: true, resolveHours: 4 },
  { id: 'wallet', emoji: '👛', label: 'Wallet', note: '$80 contents avg', cost: 80, insuredPhysical: true, resolveHours: 4 },
  { id: 'cards', emoji: '💳', label: 'Cards', note: '3 cards avg, $200 fraud exposure', cost: 200, insuredPhysical: false, resolveHours: 6 },
  { id: 'passport', emoji: '🛂', label: 'Passport', note: '$350 replacement', cost: 350, insuredPhysical: true, resolveHours: 4 },
  { id: 'licence', emoji: '🪪', label: 'Driver licence', note: '$50 replacement', cost: 50, insuredPhysical: true, resolveHours: 4 },
  { id: 'medicare', emoji: '💊', label: 'Medicare card', note: '$0 replacement but 4hrs admin', cost: 0, insuredPhysical: false, resolveHours: 4 },
  { id: 'houseKeys', emoji: '🔑', label: 'House keys', note: '$400 locksmith + rekey', cost: 400, insuredPhysical: true, resolveHours: 4 },
  { id: 'carKeys', emoji: '🚗', label: 'Car keys', note: '$600 replacement', cost: 600, insuredPhysical: true, resolveHours: 4 },
  { id: 'bag', emoji: '🎒', label: 'Bag/luggage', note: '$300 avg', cost: 300, insuredPhysical: true, resolveHours: 4 },
  { id: 'pet', emoji: '🐶', label: 'Pet', note: 'Microchip + search $200', cost: 200, insuredPhysical: true, resolveHours: 4 },
  { id: 'burglary', emoji: '🏠', label: 'Home burglary', note: '$3,500 avg loss', cost: 3500, insuredPhysical: true, resolveHours: 8 },
]

const card: React.CSSProperties = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 12,
  padding: 20,
}

const sectionTitle: React.CSSProperties = {
  fontFamily: 'Syne, sans-serif',
  fontWeight: 700,
  fontSize: 16,
  color: '#F1F5F9',
  marginTop: 0,
  marginBottom: 14,
}

function formatMoney(n: number) {
  return n.toLocaleString('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 0 })
}

function riskFromInputs(incident: IncidentType, selectedCount: number): 'Low' | 'Medium' | 'High' | 'Critical' {
  if (incident === 'identity' || selectedCount >= 3) return 'Critical'
  if (incident === 'home' || incident === 'account' || selectedCount === 2) return 'High'
  if (selectedCount === 1) return 'Medium'
  return 'Low'
}

function financialColor(total: number): string {
  if (total > 1000) return '#F87171'
  if (total >= 200) return '#FBBF24'
  return '#2DD4BF'
}

function delayMessage(hours: number): { tone: 'green' | 'amber' | 'red'; text: string } {
  if (hours <= 2) {
    return {
      tone: 'green',
      text: 'Acting this fast significantly limits your exposure. Well done.',
    }
  }
  if (hours <= 12) {
    return {
      tone: 'amber',
      text: 'Acting within 12 hours is still within the critical window for most accounts.',
    }
  }
  if (hours <= 48) {
    return {
      tone: 'red',
      text: 'Delays beyond 12 hours increase the risk of compounding fraud.',
    }
  }
  return {
    tone: 'red',
    text: 'At this point professional identity support from IDCARE is strongly recommended.',
  }
}

export default function CalculatorPage() {
  const [selected, setSelected] = useState<Record<string, boolean>>({})
  const [incident, setIncident] = useState<IncidentType>('theft')
  const [hasInsurance, setHasInsurance] = useState(false)
  const [delayHours, setDelayHours] = useState(0)

  const selectedItems = useMemo(() => ITEMS.filter((i) => selected[i.id]), [selected])
  const selectedCount = selectedItems.length

  const { grossCost, financialCost, recoveryHours, riskLevel, daysToResolve } = useMemo(() => {
    const gross = selectedItems.reduce((s, i) => s + i.cost, 0)
    if (!hasInsurance) {
      const recovery = Math.min(200, 8 + selectedCount * 4 + delayHours * 2)
      return {
        grossCost: gross,
        financialCost: gross,
        recoveryHours: recovery,
        riskLevel: riskFromInputs(incident, selectedCount),
        daysToResolve: Math.ceil(recovery / 3),
      }
    }
    const insuredPart = selectedItems.filter((i) => i.insuredPhysical).reduce((s, i) => s + i.cost, 0)
    const uninsuredPart = gross - insuredPart
    const outOfPocket = insuredPart * 0.4 + uninsuredPart
    const recovery = Math.min(200, 8 + selectedCount * 4 + delayHours * 2)
    return {
      grossCost: gross,
      financialCost: outOfPocket,
      recoveryHours: recovery,
      riskLevel: riskFromInputs(incident, selectedCount),
      daysToResolve: Math.ceil(recovery / 3),
    }
  }, [selectedItems, hasInsurance, incident, selectedCount, delayHours])

  const delayCtx = delayMessage(delayHours)

  const riskColor =
    riskLevel === 'Critical'
      ? '#F87171'
      : riskLevel === 'High'
        ? '#FB923C'
        : riskLevel === 'Medium'
          ? '#FBBF24'
          : '#2DD4BF'

  const msgStyles: Record<'green' | 'amber' | 'red', React.CSSProperties> = {
    green: {
      background: 'rgba(34,197,94,0.12)',
      border: '1px solid rgba(34,197,94,0.35)',
      color: '#86EFAC',
    },
    amber: {
      background: 'rgba(245,158,11,0.12)',
      border: '1px solid rgba(245,158,11,0.35)',
      color: '#FCD34D',
    },
    red: {
      background: 'rgba(248,113,113,0.1)',
      border: '1px solid rgba(248,113,113,0.35)',
      color: '#FCA5A5',
    },
  }

  function toggleItem(id: string) {
    setSelected((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div style={{ background: '#0B0F1A', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 24px 64px' }}>
        <header style={{ marginBottom: 36 }}>
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
            Tools
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
            Incident cost calculator
          </h1>
          <p style={{ fontSize: 15, color: '#94A3B8', fontWeight: 300, margin: 0, lineHeight: 1.7, maxWidth: 640 }}>
            Indicative estimates only — every situation differs. Use this to understand rough financial exposure, time
            burden, and how delay can compound risk.
          </p>
        </header>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(280px, 380px)',
            gap: 32,
            alignItems: 'start',
          }}
          className="calculator-grid"
        >
          {/* Inputs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <p
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                fontSize: 18,
                color: '#F1F5F9',
                margin: 0,
              }}
            >
              Tell us about your incident
            </p>

            <section style={card}>
              <h2 style={sectionTitle}>Step 1 — What was affected?</h2>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                  gap: 10,
                }}
              >
                {ITEMS.map((item) => {
                  const on = !!selected[item.id]
                  return (
                    <label
                      key={item.id}
                      style={{
                        display: 'flex',
                        gap: 10,
                        alignItems: 'flex-start',
                        cursor: 'pointer',
                        padding: '12px 14px',
                        borderRadius: 10,
                        border: on ? '1px solid rgba(45,212,191,0.45)' : '1px solid rgba(255,255,255,0.08)',
                        background: on ? 'rgba(45,212,191,0.06)' : 'rgba(0,0,0,0.2)',
                        transition: 'border-color 0.15s, background 0.15s',
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={on}
                        onChange={() => toggleItem(item.id)}
                        style={{ marginTop: 3, accentColor: '#2DD4BF', width: 16, height: 16, flexShrink: 0 }}
                      />
                      <span style={{ minWidth: 0 }}>
                        <span style={{ fontSize: 18, marginRight: 6 }} aria-hidden>
                          {item.emoji}
                        </span>
                        <span style={{ fontSize: 14, fontWeight: 600, color: '#F1F5F9' }}>{item.label}</span>
                        <span style={{ display: 'block', fontSize: 12, color: '#94A3B8', marginTop: 4, lineHeight: 1.45 }}>
                          {item.note}
                        </span>
                      </span>
                    </label>
                  )
                })}
              </div>
            </section>

            <section style={card}>
              <h2 style={sectionTitle}>Step 2 — What type of incident?</h2>
              <fieldset style={{ border: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <legend className="sr-only">Incident type</legend>
                {INCIDENT_OPTIONS.map((opt) => (
                  <label
                    key={opt.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      cursor: 'pointer',
                      padding: '10px 14px',
                      borderRadius: 10,
                      border: incident === opt.id ? '1px solid rgba(45,212,191,0.45)' : '1px solid rgba(255,255,255,0.08)',
                      background: incident === opt.id ? 'rgba(45,212,191,0.06)' : 'transparent',
                    }}
                  >
                    <input
                      type="radio"
                      name="incident"
                      value={opt.id}
                      checked={incident === opt.id}
                      onChange={() => setIncident(opt.id)}
                      style={{ accentColor: '#2DD4BF', width: 16, height: 16 }}
                    />
                    <span style={{ fontSize: 14, color: '#E2E8F0' }}>{opt.label}</span>
                  </label>
                ))}
              </fieldset>
            </section>

            <section style={card}>
              <h2 style={sectionTitle}>Step 3 — Did you have insurance?</h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={() => setHasInsurance(true)}
                  style={{
                    padding: '10px 22px',
                    borderRadius: 8,
                    border: hasInsurance ? '1px solid #2DD4BF' : '1px solid rgba(255,255,255,0.15)',
                    background: hasInsurance ? 'rgba(45,212,191,0.15)' : 'transparent',
                    color: '#F1F5F9',
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontFamily: 'DM Sans, sans-serif',
                  }}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => setHasInsurance(false)}
                  style={{
                    padding: '10px 22px',
                    borderRadius: 8,
                    border: !hasInsurance ? '1px solid #2DD4BF' : '1px solid rgba(255,255,255,0.15)',
                    background: !hasInsurance ? 'rgba(45,212,191,0.15)' : 'transparent',
                    color: '#F1F5F9',
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontFamily: 'DM Sans, sans-serif',
                  }}
                >
                  No
                </button>
              </div>
              {hasInsurance ? (
                <p style={{ fontSize: 13, color: '#94A3B8', marginTop: 14, marginBottom: 0, lineHeight: 1.6 }}>
                  Insurance covers approx 60% of physical losses
                </p>
              ) : null}
            </section>

            <section style={card}>
              <h2 style={sectionTitle}>Step 4 — How quickly did you act?</h2>
              <label htmlFor="delay-slider" style={{ display: 'block', fontSize: 14, color: '#94A3B8', marginBottom: 10 }}>
                Hours before you took action:{' '}
                <strong style={{ color: '#F1F5F9' }}>{delayHours}</strong>
              </label>
              <input
                id="delay-slider"
                type="range"
                min={0}
                max={72}
                step={1}
                value={delayHours}
                onChange={(e) => setDelayHours(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#2DD4BF' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#64748B', marginTop: 6 }}>
                <span>0 h</span>
                <span>72 h</span>
              </div>
            </section>
          </div>

          {/* Results — sticky on desktop */}
          <div
            className="calculator-results"
            style={{
              position: 'sticky',
              top: 88,
              alignSelf: 'start',
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
            }}
          >
            <p
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                fontSize: 18,
                color: '#F1F5F9',
                margin: 0,
              }}
            >
              Your estimated impact
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12 }}>
              <div style={{ ...card, padding: 16 }}>
                <p style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94A3B8', margin: '0 0 8px' }}>
                  Estimated financial cost
                </p>
                <p style={{ fontFamily: 'Syne, sans-serif', fontSize: 22, fontWeight: 700, margin: 0, color: financialColor(financialCost) }}>
                  {formatMoney(financialCost)}
                </p>
                {hasInsurance && grossCost > 0 ? (
                  <p style={{ fontSize: 11, color: '#64748B', margin: '8px 0 0', lineHeight: 1.4 }}>
                    Before cover: {formatMoney(grossCost)}
                  </p>
                ) : null}
              </div>
              <div style={{ ...card, padding: 16 }}>
                <p style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94A3B8', margin: '0 0 8px' }}>
                  Estimated recovery time
                </p>
                <p style={{ fontFamily: 'Syne, sans-serif', fontSize: 22, fontWeight: 700, margin: 0, color: '#F1F5F9' }}>{recoveryHours}</p>
                <p style={{ fontSize: 12, color: '#94A3B8', margin: '6px 0 0', fontWeight: 500 }}>hours of your time</p>
              </div>
              <div style={{ ...card, padding: 16 }}>
                <p style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94A3B8', margin: '0 0 8px' }}>
                  Risk level
                </p>
                <p style={{ fontFamily: 'Syne, sans-serif', fontSize: 22, fontWeight: 700, margin: 0, color: riskColor }}>{riskLevel}</p>
              </div>
              <div style={{ ...card, padding: 16 }}>
                <p style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94A3B8', margin: '0 0 8px' }}>
                  Days to full resolution
                </p>
                <p style={{ fontFamily: 'Syne, sans-serif', fontSize: 22, fontWeight: 700, margin: 0, color: '#F1F5F9' }}>
                  {daysToResolve}
                  <span style={{ fontSize: 13, fontWeight: 500, color: '#94A3B8', marginLeft: 6 }}>days (at ~3 hrs/day)</span>
                </p>
              </div>
            </div>

            {selectedItems.length > 0 ? (
              <div style={card}>
                <h3 style={{ ...sectionTitle, fontSize: 15, marginBottom: 12 }}>Breakdown</h3>
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '8px 6px 10px 0', color: '#94A3B8', fontWeight: 600 }}>Item</th>
                        <th style={{ textAlign: 'right', padding: '8px 0 10px 6px', color: '#94A3B8', fontWeight: 600 }}>Cost</th>
                        <th style={{ textAlign: 'right', padding: '8px 0 10px 6px', color: '#94A3B8', fontWeight: 600 }}>Est. resolve</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedItems.map((row) => (
                        <tr key={row.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                          <td style={{ padding: '10px 6px 10px 0', color: '#E2E8F0' }}>
                            <span aria-hidden>{row.emoji}</span> {row.label}
                          </td>
                          <td style={{ textAlign: 'right', padding: '10px 0', color: '#F1F5F9', whiteSpace: 'nowrap' }}>
                            {formatMoney(row.cost)}
                          </td>
                          <td style={{ textAlign: 'right', padding: '10px 0', color: '#94A3B8', whiteSpace: 'nowrap' }}>
                            {row.resolveHours}h
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <p style={{ ...card, margin: 0, fontSize: 14, color: '#94A3B8', lineHeight: 1.6 }}>
                Select at least one affected item to see a cost and time breakdown.
              </p>
            )}

            <div style={{ borderRadius: 12, padding: 16, fontSize: 14, lineHeight: 1.65, ...msgStyles[delayCtx.tone] }}>
              {delayCtx.text}
            </div>

            <AppBanner
              headline="CLOAK guides you through every step of recovery — reducing your time and financial exposure."
              subline=""
            />
          </div>
        </div>

        <style jsx global>{`
          @media (max-width: 900px) {
            .calculator-grid {
              grid-template-columns: 1fr !important;
            }
            .calculator-results {
              position: static !important;
              top: auto !important;
            }
          }
          .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
          }
        `}</style>
      </div>
    </div>
  )
}
