export interface Guide {
  slug: string
  title: string
  description: string
  category: string
  urgency: 'urgent' | 'high-risk' | 'common'
  readingTime: number
  updatedAt: string
  verified: boolean
}

export type PartnerCategory =
  | 'identity-monitoring'
  | 'password-manager'
  | 'antivirus'
  | 'vpn'
  | 'travel-insurance'
  | 'device-security'

export interface Partner {
  id: string
  name: string
  category: PartnerCategory
  description: string
  why: string
  url: string
  affiliateUrl: string
  relevantGuides: string[]
  color: string
}

export interface GuideWithContent extends Guide {
  content: string
}
