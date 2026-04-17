'use client'

import type { CSSProperties } from 'react'
import React, { useMemo, useState } from 'react'
import { triageSteps, type TriageStep } from '@/lib/triageSteps'
import { getProductsForAssets } from '@/lib/contextualProducts'
import { ProductCard } from '@/components/ProductCard'
import { Card } from '@/components/ui/Card'

type IncidentType = 'stolen' | 'lost' | 'hacked' | 'home_break_in'

type AssetKey =
  | 'phone'
  | 'wallet'
  | 'cards'
  | 'cash'
  | 'passport'
  | 'licence'
  | 'medicare'
  | 'tfn'
  | 'house_keys'
  | 'car_keys'
  | 'vehicle'
  | 'laptop'
  | 'luggage'
  | 'jewellery'
  | 'mygov'
  | 'work_keys'
  | 'access_card'
  | 'plates'
  | 'bicycle'
  | 'pet'

type Urgency = TriageStep['urgency']

type Screen = 'incident' | 'assets' | 'checklist'

const incidentOptions: Array<{ id: IncidentType; label: string }> = [
  { id: 'stolen', label: 'It was stolen' },
  { id: 'lost', label: 'I lost it' },
  { id: 'hacked', label: 'I was hacked or scammed' },
  { id: 'home_break_in', label: 'My home was broken into' },
]

const assetOptions: Array<{ key: AssetKey; label: string }> = [
  { key: 'phone', label: 'Phone' },
  { key: 'wallet', label: 'Wallet' },
  { key: 'cards', label: 'Cards (bank/credit)' },
  { key: 'cash', label: 'Cash' },
  { key: 'passport', label: 'Passport' },
  { key: 'licence', label: 'Driver Licence' },
  { key: 'medicare', label: 'Medicare Card' },
  { key: 'tfn', label: 'TFN' },
  { key: 'house_keys', label: 'House Keys' },
  { key: 'car_keys', label: 'Car Keys' },
  { key: 'vehicle', label: 'Vehicle' },
  { key: 'laptop', label: 'Laptop / Device' },
  { key: 'luggage', label: 'Bag / Luggage' },
  { key: 'jewellery', label: 'Jewellery / Watch' },
  { key: 'mygov', label: 'MyGov Access' },
  { key: 'work_keys', label: 'Work Keys' },
  { key: 'access_card', label: 'Access Card / Fob' },
  { key: 'plates', label: 'Number Plates' },
  { key: 'bicycle', label: 'Bicycle' },
  { key: 'pet', label: 'Pet' },
]

const urgencyMeta: Record<
  Urgency,
  {
    label: string
    progressLabel: string
    heading: string
    accent: string
  }
> = {
  critical: {
    label: 'CRITICAL',
    progressLabel: 'Critical Actions',
    heading: 'Do These Right Now',
    accent: '#DC2626',
  },
  important: {
    label: 'IMPORTANT',
    progressLabel: 'Important Actions',
    heading: 'Do These Today',
    accent: '#D97706',
  },
  recovery: {
    label: 'RECOVERY',
    progressLabel: 'Recovery',
    heading: 'Start Your Recovery',
    accent: '#1A9E8F',
  },
}

function intersects(selected: Set<string>, triggers: string[]) {
  for (const key of triggers) {
    if (selected.has(key)) return true
  }
  return false
}

export default function EmergencyTriagePage() {
  const [screen, setScreen] = useState<Screen>('incident')
  const [incidentType, setIncidentType] = useState<IncidentType | null>(null)
  const [selectedAssets, setSelectedAssets] = useState<AssetKey[]>([])
  const [currentPhase, setCurrentPhase] = useState<number>(0)
  const [checkedSteps, setCheckedSteps] = useState<Record<string, boolean>>({})

  const selectedAssetSet = useMemo(() => new Set<string>(selectedAssets), [selectedAssets])
  const recommendedProducts = getProductsForAssets(selectedAssets)

  const generatedSteps = useMemo(() => {
    if (selectedAssets.length === 0) return []
    const byId = new Map<string, TriageStep>()
    for (const step of triageSteps) {
      if (!intersects(selectedAssetSet, step.triggerAssets)) continue
      if (!byId.has(step.id)) byId.set(step.id, step)
    }
    return Array.from(byId.values())
  }, [selectedAssets.length, selectedAssetSet])

  const stepsByUrgency = useMemo(() => {
    const grouped: Record<Urgency, TriageStep[]> = { critical: [], important: [], recovery: [] }
    for (const step of generatedSteps) {
      grouped[step.urgency].push(step)
    }
    return grouped
  }, [generatedSteps])

  const phaseOrder = useMemo(() => {
    const order: Urgency[] = ['critical', 'important', 'recovery']
    return order.filter((u) => stepsByUrgency[u].length > 0)
  }, [stepsByUrgency])

  const activeUrgency = phaseOrder[currentPhase] ?? phaseOrder[0]
  const activeSteps = activeUrgency ? stepsByUrgency[activeUrgency] : []

  function toggleAsset(key: AssetKey) {
    setSelectedAssets((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]))
  }

  function startPlan() {
    setCheckedSteps({})
    setCurrentPhase(0)
    setScreen('checklist')
  }

  function nextChecklist() {
    const nextIdx = currentPhase + 1
    if (nextIdx < phaseOrder.length) {
      setCurrentPhase(nextIdx)
      return
    }
    setScreen('incident')
    setIncidentType(null)
    setSelectedAssets([])
    setCurrentPhase(0)
    setCheckedSteps({})
  }

  const stepHeadingStyle: CSSProperties = {
    fontFamily: 'Syne, sans-serif',
    fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
    fontWeight: 700,
    color: 'var(--color-text-primary)',
    margin: '0 0 12px',
    lineHeight: 1.2,
  }

  return (
    <div style={{ background: 'var(--color-bg-page)', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 24px 64px' }}>
      <header style={{ marginBottom: 32 }}>
        <h1
          style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
            fontWeight: 700,
            color: 'var(--color-text-primary)',
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          Get Help Now
        </h1>
      </header>
      {screen === 'incident' ? (
        <div>
          <header style={{ maxWidth: 672 }}>
            <h2 style={stepHeadingStyle}>What happened?</h2>
          </header>

          <div style={{ marginTop: 24, display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {incidentOptions.map((opt) => {
              const selected = incidentType === opt.id
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setIncidentType(opt.id)}
                  style={{
                    minHeight: 96,
                    padding: 0,
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    textAlign: 'left',
                    width: '100%',
                  }}
                >
                  <Card
                    variant="default"
                    style={{
                      width: '100%',
                      minHeight: 96,
                      boxSizing: 'border-box',
                      border: `1px solid ${selected ? 'rgba(26,158,143,0.45)' : 'var(--color-border)'}`,
                      background: selected ? 'rgba(26,158,143,0.12)' : 'var(--color-bg-card)',
                      transition: 'border-color 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      if (selected) return
                      e.currentTarget.style.borderColor = 'rgba(26,158,143,0.45)'
                    }}
                    onMouseLeave={(e) => {
                      if (selected) return
                      e.currentTarget.style.borderColor = 'var(--color-border)'
                    }}
                  >
                    <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--color-navy)', lineHeight: 1.35 }}>{opt.label}</div>
                  </Card>
                </button>
              )
            })}
          </div>

          {incidentType ? (
            <div style={{ marginTop: 24, display: 'flex', justifyContent: 'flex-end' }}>
              <button
                type="button"
                onClick={() => setScreen('assets')}
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
                }}
              >
                Next →
              </button>
            </div>
          ) : null}
        </div>
      ) : null}

      {screen === 'assets' ? (
        <div>
          <header style={{ maxWidth: 672, marginBottom: 24 }}>
            <h2 style={stepHeadingStyle}>What did you lose?</h2>
            <p style={{ fontSize: 15, color: 'var(--color-text-secondary)', fontWeight: 300, margin: 0, lineHeight: 1.7 }}>
              Select everything — we&apos;ll prioritise what to do first.
            </p>
          </header>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: 12,
            }}
          >
            {assetOptions.map((asset) => {
              const selected = selectedAssets.includes(asset.key)
              return (
                <button
                  key={asset.key}
                  type="button"
                  onClick={() => toggleAsset(asset.key)}
                  style={{
                    padding: 0,
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    textAlign: 'left',
                    width: '100%',
                  }}
                >
                  <Card
                    variant="default"
                    style={{
                      width: '100%',
                      boxSizing: 'border-box',
                      border: `1px solid ${selected ? 'rgba(26,158,143,0.45)' : 'var(--color-border)'}`,
                      background: selected ? 'rgba(26,158,143,0.12)' : 'var(--color-bg-card)',
                      padding: 18,
                      transition: 'border-color 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      if (selected) return
                      e.currentTarget.style.borderColor = 'rgba(26,158,143,0.45)'
                    }}
                    onMouseLeave={(e) => {
                      if (selected) return
                      e.currentTarget.style.borderColor = 'var(--color-border)'
                    }}
                  >
                    <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-navy)', lineHeight: 1.35 }}>{asset.label}</div>
                  </Card>
                </button>
              )
            })}
          </div>

          {selectedAssets.length > 0 ? (
            <div style={{ marginTop: 24, display: 'flex', justifyContent: 'flex-end' }}>
              <button
                type="button"
                onClick={startPlan}
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
                }}
              >
                Generate My Plan →
              </button>
            </div>
          ) : null}
        </div>
      ) : null}

      {screen === 'checklist' ? (
        <div>
          <div style={{ marginBottom: 24 }}>
            {activeUrgency ? (
              <>
                <div style={{ marginBottom: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--color-text-secondary)' }}>
                    {urgencyMeta[activeUrgency].progressLabel} · Step {Math.min(currentPhase + 1, phaseOrder.length)} of {phaseOrder.length}
                  </div>
                </div>
                <div style={{ height: 8, width: '100%', borderRadius: 999, background: 'var(--color-border)' }}>
                  <div
                    style={{
                      height: 8,
                      borderRadius: 999,
                      width: `${phaseOrder.length === 0 ? 0 : ((currentPhase + 1) / phaseOrder.length) * 100}%`,
                      background: urgencyMeta[activeUrgency].accent,
                    }}
                  />
                </div>
              </>
            ) : null}
          </div>

          {activeUrgency ? (
            <header style={{ maxWidth: 672, marginBottom: 24 }}>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: urgencyMeta[activeUrgency].accent,
                  marginBottom: 8,
                  marginTop: 0,
                }}
              >
                {urgencyMeta[activeUrgency].label}
              </p>
              <h2
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
                  fontWeight: 700,
                  color: 'var(--color-text-primary)',
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                {urgencyMeta[activeUrgency].heading}
              </h2>
            </header>
          ) : (
            <header style={{ maxWidth: 672 }}>
              <h2 style={stepHeadingStyle}>No steps found</h2>
              <p style={{ fontSize: 15, color: 'var(--color-text-secondary)', fontWeight: 300, margin: 0, lineHeight: 1.7 }}>
                Try selecting a different set of assets. (This shouldn&apos;t normally happen.)
              </p>
            </header>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {activeSteps.map((step) => {
              const checked = Boolean(checkedSteps[step.id])
              return (
                <Card
                  key={step.id}
                  variant="default"
                  style={{
                    position: 'relative',
                    padding: 20,
                    opacity: checked ? 0.6 : 1,
                    transition: 'opacity 0.15s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <input
                      type="checkbox"
                      style={{ marginTop: 4, width: 16, height: 16 }}
                      checked={checked}
                      onChange={() => setCheckedSteps((prev) => ({ ...prev, [step.id]: !prev[step.id] }))}
                      aria-label={`Mark complete: ${step.title}`}
                    />
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
                        <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--color-navy)', lineHeight: 1.35 }}>
                          {step.title}
                        </div>
                        <div
                          style={{
                            flexShrink: 0,
                            fontSize: 10,
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            padding: '3px 10px',
                            borderRadius: 999,
                            background: 'rgba(15,31,61,0.06)',
                            color: urgencyMeta[step.urgency].accent,
                            border: `1px solid ${urgencyMeta[step.urgency].accent}33`,
                          }}
                        >
                          {urgencyMeta[step.urgency].label}
                        </div>
                      </div>
                      <div style={{ marginTop: 8, fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.7, fontWeight: 300 }}>
                        {step.description}
                      </div>
                      {step.actionLabel ? (
                        <div style={{ marginTop: 12, display: 'flex', justifyContent: 'flex-end' }}>
                          {step.actionUrl ? (
                            <a
                              href={step.actionUrl}
                              target="_blank"
                              rel="noreferrer"
                              style={{
                                fontSize: 13,
                                fontWeight: 600,
                                color: 'var(--color-teal)',
                                textDecoration: 'none',
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.color = 'var(--color-teal-light)'
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.color = 'var(--color-teal)'
                              }}
                            >
                              {step.actionLabel}
                            </a>
                          ) : (
                            <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-teal)' }}>{step.actionLabel}</span>
                          )}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          {activeUrgency === 'recovery' && recommendedProducts.length > 0 ? (
            <div style={{ marginTop: 32 }}>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: '#1A9E8F',
                  textTransform: 'uppercase',
                  marginBottom: 4,
                }}
              >
                Prevent This Happening Again
              </p>
              <p style={{ fontSize: 13, color: '#6B7280', marginBottom: 16 }}>
                Based on what happened to you, these are worth looking at.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {recommendedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              <p
                style={{
                  fontSize: 11,
                  color: '#9CA3AF',
                  fontStyle: 'italic',
                  textAlign: 'center',
                  marginTop: 8,
                }}
              >
                Affiliate links — we may earn a small commission if you purchase. We only recommend products relevant to what
                happened to you.
              </p>
            </div>
          ) : null}

          <div style={{ marginTop: 24, display: 'flex', justifyContent: 'flex-end' }}>
            <button
              type="button"
              onClick={nextChecklist}
              style={{
                background: activeUrgency ? urgencyMeta[activeUrgency].accent : 'var(--color-teal)',
                color: activeUrgency === 'critical' || activeUrgency === 'important' ? '#FFFFFF' : 'var(--color-navy)',
                fontWeight: 600,
                padding: '13px 28px',
                borderRadius: 8,
                border: 'none',
                fontSize: 14,
                cursor: 'pointer',
                fontFamily: 'DM Sans, sans-serif',
              }}
            >
              {currentPhase + 1 >= phaseOrder.length ? 'Done' : 'Next →'}
            </button>
          </div>
        </div>
      ) : null}
      </div>
    </div>
  )
}

