import type { Metadata } from 'next'
import './globals.css'
import PageBackground from '@/components/PageBackground'
import Nav from '@/components/Nav'
import IncidentTicker from '@/components/IncidentTicker'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'CLOAK',
    template: '%s | CLOAK',
  },
  description:
    'CLOAK is an Australian security and recovery resource — practical steps when something goes wrong.',
  metadataBase: new URL('https://cloakapp.com.au'),
  openGraph: {
    siteName: 'CLOAK',
    locale: 'en_AU',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-AU">
      <body style={{ background: 'transparent' }}>
        <PageBackground />
        <div style={{ position: 'relative', zIndex: 1, background: 'transparent' }}>
          <Nav />
          <IncidentTicker />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
