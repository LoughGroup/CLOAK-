import type { Metadata } from 'next'
import AppBanner from '@/components/AppBanner'
import PartnerCard from '@/components/PartnerCard'
import { ProductCard } from '@/components/ProductCard'
import { Card } from '@/components/ui/Card'
import { contextualProducts } from '@/lib/contextualProducts'
import { partners } from '@/lib/partners'

export const metadata: Metadata = {
  title: 'Trusted Tools & Products',
  description: 'Security and recovery tools we recommend for Australians — identity, passwords, devices, travel, and more.',
}

export default function ToolsPage() {
  return (
    <div style={{ background: 'var(--color-bg-page)', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 24px 64px' }}>
        <header style={{ maxWidth: 672, marginBottom: 40 }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--color-teal)',
              marginBottom: 8,
              marginTop: 0,
            }}
          >
            Trusted Tools & Products
          </p>
          <h1
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              margin: '0 0 12px',
              lineHeight: 1.2,
            }}
          >
            Trusted Tools & Products
          </h1>
          <p style={{ fontSize: 15, color: 'var(--color-text-secondary)', fontWeight: 300, margin: 0, lineHeight: 1.7 }}>
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

        <section style={{ marginTop: 48 }}>
          <p
            style={{
              fontSize: 12,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--color-teal)',
              marginBottom: 8,
              marginTop: 0,
            }}
          >
            Recommended prevention gear
          </p>
          <h2
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(1.35rem, 3vw, 1.75rem)',
              fontWeight: 700,
              color: 'var(--color-navy)',
              margin: '0 0 12px',
              lineHeight: 1.2,
            }}
          >
            Products That Help Prevent This Happening Again
          </h2>
          <p style={{ fontSize: 15, color: 'var(--color-text-secondary)', fontWeight: 300, margin: '0 0 20px', lineHeight: 1.7 }}>
            Vetted products used by Australians to protect their phones, wallets, keys, and identity.
          </p>
          <Card variant="amber" style={{ padding: '10px 16px', marginBottom: 20, borderRadius: 'var(--radius-sm)' }}>
            <p style={{ fontSize: 12, color: '#6B7280', fontStyle: 'italic', margin: 0, lineHeight: 1.6 }}>
              Some links in this section are affiliate links. We may earn a small commission if you purchase. We only
              recommend products relevant to theft prevention, digital safety, or recovery readiness.
            </p>
          </Card>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {contextualProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <p
          style={{
            borderTop: '1px solid var(--color-border)',
            marginTop: 40,
            paddingTop: 24,
            fontSize: 12,
            color: 'var(--color-text-secondary)',
            lineHeight: 1.6,
            marginBottom: 0,
          }}
        >
          <strong style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>Affiliate disclosure:</strong> CLOAK may receive a
          commission when you sign up or purchase through some links on this page. That helps us keep guides free and
          updated. We only recommend tools we believe are useful for recovery and security in Australia; commissions
          never change our editorial picks.
        </p>
      </div>
      <AppBanner />
    </div>
  )
}
