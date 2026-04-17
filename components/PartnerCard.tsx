import type { Partner } from '@/types'
import { ExternalLink } from 'lucide-react'

type Props = {
  partner: Partner
}

const categoryLabels: Record<Partner['category'], string> = {
  'identity-monitoring': 'Identity monitoring',
  'password-manager': 'Password manager',
  antivirus: 'Antivirus',
  vpn: 'VPN',
  'travel-insurance': 'Travel insurance',
  'device-security': 'Device security',
}

export default function PartnerCard({ partner }: Props) {
  return (
    <article
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 12,
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      }}
    >
      <h3
        style={{
          fontFamily: 'Syne, sans-serif',
          fontWeight: 700,
          fontSize: 18,
          color: partner.color,
          margin: 0,
        }}
      >
        {partner.name}
      </h3>
      <p
        style={{
          fontSize: 10,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: '#94A3B8',
          margin: 0,
        }}
      >
        {categoryLabels[partner.category]}
      </p>
      <p style={{ fontSize: 13, color: '#94A3B8', lineHeight: 1.6, flexGrow: 1, margin: 0 }}>{partner.description}</p>
      <p style={{ fontSize: 12, fontStyle: 'italic', color: '#94A3B8', margin: 0 }}>{partner.why}</p>
      <a
        href={partner.affiliateUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          width: '100%',
          background: 'transparent',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 8,
          padding: '9px 0',
          fontSize: 13,
          fontWeight: 500,
          color: '#F1F5F9',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
          fontFamily: 'DM Sans, sans-serif',
          textDecoration: 'none',
        }}
      >
        Visit site
        <ExternalLink size={16} aria-hidden />
      </a>
    </article>
  )
}
