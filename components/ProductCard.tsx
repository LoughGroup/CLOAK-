'use client'

import type { ContextualProduct } from '@/lib/contextualProducts'
import { affiliateLinks } from '@/lib/affiliateLinks'
import { Card } from '@/components/ui/Card'

const partnerLabel: Record<ContextualProduct['partner'], string> = {
  amazon: 'Amazon',
  bellroy: 'Bellroy',
  eufy: 'eufy',
  shesbirdie: "She's Birdie",
}

export function ProductCard({ product }: { product: ContextualProduct }) {
  const resolvedUrl = affiliateLinks[product.linkId]?.url ?? '#'

  return (
    <Card variant="default" style={{ padding: '16px 20px' }}>
      <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
        <img
          src={product.image}
          alt={product.name}
          onError={(e) => {
            e.currentTarget.src = '/products/placeholder.jpg'
          }}
          style={{
            width: 90,
            height: 90,
            objectFit: 'cover',
            borderRadius: 8,
            border: '1px solid #E5E7EB',
            flexShrink: 0,
          }}
        />
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
            <span style={{ fontSize: 15, fontWeight: 600, color: '#0F1F3D' }}>{product.name}</span>
            <span
              style={{
                fontSize: 11,
                color: '#9CA3AF',
                background: '#F3F4F6',
                borderRadius: 20,
                padding: '2px 8px',
                marginLeft: 8,
                whiteSpace: 'nowrap',
              }}
            >
              {partnerLabel[product.partner]}
            </span>
          </div>
          <p style={{ fontSize: 13, color: '#6B7280', marginBottom: 10, lineHeight: 1.5 }}>{product.preventionLine}</p>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <a
              href={resolvedUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 13, color: '#1A9E8F', fontWeight: 500, textDecoration: 'none' }}
            >
              {product.cta}
            </a>
          </div>
        </div>
      </div>
    </Card>
  )
}
