import type { Metadata } from 'next'
import GuideCard from '@/components/GuideCard'
import { getAllGuides } from '@/lib/guides'

export const metadata: Metadata = {
  title: 'Emergency guides',
  description: 'Step-by-step recovery guides for Australians — phone theft, fraud, hacked accounts, and more.',
}

export default function GuidesPage() {
  const guides = getAllGuides()

  return (
    <div className="mx-auto max-w-[1100px] px-4 py-12 sm:px-6 lg:py-16">
      <header className="max-w-2xl">
        <p className="mb-2 text-[11px] font-normal uppercase tracking-[0.12em] text-[#2DD4BF]">Emergency guides</p>
        <h1 className="font-[family-name:'Syne',sans-serif] text-[1.75rem] font-bold text-[#F1F5F9] sm:text-4xl">
          Emergency guides
        </h1>
        <p className="mt-3 text-[#94A3B8]">
          Practical checklists you can follow under pressure — written for Australian numbers, institutions, and timelines.
        </p>
      </header>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide) => (
          <GuideCard key={guide.slug} guide={guide} />
        ))}
      </div>
    </div>
  )
}
