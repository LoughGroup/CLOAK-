import { NextResponse } from 'next/server'

export interface Alert {
  id: string
  title: string
  date: string
  url: string
  source: string
}

const FALLBACK_ALERTS: Alert[] = [
  { id: '1', title: 'SIM swap attacks up 34% across NSW and VIC — April 2025', date: '2025-04-10', url: 'https://www.scamwatch.gov.au', source: 'Scamwatch' },
  { id: '2', title: 'MyGov phishing campaign active — do not click SMS links', date: '2025-04-08', url: 'https://www.cyber.gov.au', source: 'ACSC' },
  { id: '3', title: 'Medicare card scam targeting elderly Australians — March 2025', date: '2025-03-28', url: 'https://www.scamwatch.gov.au', source: 'Scamwatch' },
  { id: '4', title: 'ATO impersonation scam calls — 4,200 reports in March', date: '2025-03-20', url: 'https://www.scamwatch.gov.au', source: 'Scamwatch' },
  { id: '5', title: 'Investment scam losses reach $180M in first quarter 2025', date: '2025-04-01', url: 'https://www.scamwatch.gov.au', source: 'Scamwatch' },
  { id: '6', title: 'Fake toll road SMS scam targeting all states', date: '2025-03-15', url: 'https://www.cyber.gov.au', source: 'ACSC' },
  { id: '7', title: 'Data breach at major retailer affects 500,000 Australians', date: '2025-02-28', url: 'https://www.oaic.gov.au', source: 'OAIC' },
]

export async function GET() {
  try {
    const res = await fetch('https://www.cyber.gov.au/rss.xml', {
      next: { revalidate: 3600 },
    })

    if (!res.ok) throw new Error('RSS fetch failed')

    const xml = await res.text()
    const items = xml.match(/<item>([\s\S]*?)<\/item>/g) || []

    const alerts: Alert[] = items.slice(0, 8).map((item, i) => {
      const title = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] ||
                    item.match(/<title>(.*?)<\/title>/)?.[1] || 'Security alert'
      const link = item.match(/<link>(.*?)<\/link>/)?.[1] || 'https://www.cyber.gov.au'
      const pubDate = item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || ''
      const date = pubDate ? new Date(pubDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]

      return {
        id: String(i),
        title: title.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').slice(0, 100),
        date,
        url: link,
        source: 'ACSC',
      }
    })

    if (alerts.length === 0) throw new Error('No items parsed')

    return NextResponse.json({ alerts, source: 'live' })
  } catch {
    return NextResponse.json({ alerts: FALLBACK_ALERTS, source: 'fallback' })
  }
}
