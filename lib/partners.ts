import type { Partner, PartnerCategory } from '@/types'

export const partners: Partner[] = [
  {
    id: 'truyu',
    name: 'Truyu',
    category: 'identity-monitoring',
    description:
      'Australian identity monitoring that watches for your details on the dark web and alerts you to misuse.',
    why:
      'Fast alerts give you a head start if your identity is exposed after theft or a data breach.',
    url: 'https://www.truyu.com.au',
    affiliateUrl: 'https://www.truyu.com.au',
    relevantGuides: ['phone-stolen'],
    color: '#00A3A3',
  },
  {
    id: '1password',
    name: '1Password',
    category: 'password-manager',
    description:
      'A secure vault for passwords, passkeys, and sensitive notes across your devices.',
    why:
      'Unique, strong passwords limit fallout when one account is compromised — essential after device loss.',
    url: 'https://1password.com',
    affiliateUrl: 'https://1password.com',
    relevantGuides: ['phone-stolen'],
    color: '#0364D3',
  },
  {
    id: 'norton-360',
    name: 'Norton 360',
    category: 'device-security',
    description:
      'Device security suite with antivirus, firewall, and optional VPN on supported plans.',
    why:
      'Helps protect replacement devices and home networks while you recover from theft or fraud.',
    url: 'https://norton.com',
    affiliateUrl: 'https://norton.com',
    relevantGuides: ['phone-stolen'],
    color: '#FDBA12',
  },
  {
    id: 'nordvpn',
    name: 'NordVPN',
    category: 'vpn',
    description:
      'Encrypted VPN for safer browsing on public Wi‑Fi and extra privacy on untrusted networks.',
    why:
      'Useful when signing in to banking and email from cafés, hotels, or while travelling.',
    url: 'https://nordvpn.com',
    affiliateUrl: 'https://nordvpn.com',
    relevantGuides: ['phone-stolen'],
    color: '#4687C9',
  },
  {
    id: 'cover-more',
    name: 'Cover-More',
    category: 'travel-insurance',
    description:
      'Travel insurance with options for overseas medical, cancellation, and lost belongings.',
    why:
      'If your passport or gear goes missing abroad, the right policy can cover costs and support.',
    url: 'https://www.covermore.com.au',
    affiliateUrl: 'https://www.covermore.com.au',
    relevantGuides: ['phone-stolen'],
    color: '#E31837',
  },
  {
    id: 'bitdefender',
    name: 'Bitdefender',
    category: 'antivirus',
    description:
      'Antivirus and multi-layer ransomware protection for Windows, macOS, and mobile.',
    why:
      'A clean baseline on your next device reduces the chance malware compounds a security incident.',
    url: 'https://www.bitdefender.com.au',
    affiliateUrl: 'https://www.bitdefender.com.au',
    relevantGuides: ['phone-stolen'],
    color: '#ED1C24',
  },
]

export function getPartnersForGuide(slug: string): Partner[] {
  return partners.filter((p) => p.relevantGuides.includes(slug))
}

export function getPartnersByCategory(category: PartnerCategory): Partner[] {
  return partners.filter((p) => p.category === category)
}
