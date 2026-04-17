import React from 'react'
import { Card } from '@/components/ui/Card'

type EmergencyStepsProps = {
  children: React.ReactNode
}

export function EmergencySteps({ children }: EmergencyStepsProps) {
  return <div style={{ marginTop: 24 }}>{children}</div>
}

type EmergencyStepProps = {
  // `stepNumber` is the canonical prop injected by the MDX wrapper.
  // `number` is supported for backwards compatibility.
  stepNumber?: number | string
  number?: number | string
  title: string
  children: React.ReactNode
}

export function EmergencyStep({ stepNumber, number, title, children }: EmergencyStepProps) {
  const raw = stepNumber ?? number
  const resolvedStepNumber =
    typeof raw === 'string' ? (Number.isFinite(Number(raw)) ? Number(raw) : raw.trim()) : raw

  return (
    <Card variant="default" style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: '50%',
            background: '#0F1F3D',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 13,
            fontWeight: 600,
            flexShrink: 0,
          }}
        >
          {resolvedStepNumber}
        </div>
        <span style={{ fontSize: 16, fontWeight: 600, color: '#0F1F3D' }}>{title}</span>
      </div>
      <div style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.6 }}>{children}</div>
    </Card>
  )
}

