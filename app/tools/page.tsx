import type { Metadata } from 'next'
import AppBanner from '@/components/AppBanner'
import PartnerCard from '@/components/PartnerCard'
import { partners } from '@/lib/partners'

export const metadata: Metadata = {
  title: 'Trusted tools',
  description: 'Security and recovery tools we recommend for Australians — identity, passwords, devices, travel, and more.',
}

export default function ToolsPage() {
  return (
    <div style={{ background: '#0B0F1A', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 24px 64px' }}>
        <header style={{ maxWidth: 672, marginBottom: 40 }}>
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
            Trusted tools
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
            Trusted tools
          </h1>
          <p style={{ fontSize: 15, color: '#94A3B8', fontWeight: 300, margin: 0, lineHeight: 1.7 }}>
            Vetted partners that pair well with our guides. Compare what fits your situation — we list why each one
            matters.
          </p>
        </header>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 16,
          }}
        >
          {partners.map((p) => (
            <PartnerCard key={p.id} partner={p} />
          ))}
        </div>
        <p
          style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            marginTop: 40,
            paddingTop: 24,
            fontSize: 12,
            color: '#94A3B8',
            lineHeight: 1.6,
            marginBottom: 0,
          }}
        >
          <strong style={{ fontWeight: 600, color: '#F1F5F9' }}>Affiliate disclosure:</strong> CLOAK may receive a
          commission when you sign up or purchase through some links on this page. That helps us keep guides free and
          updated. We only recommend tools we believe are useful for recovery and security in Australia; commissions
          never change our editorial picks.
        </p>
      </div>
      <AppBanner />
    </div>
  )
}
