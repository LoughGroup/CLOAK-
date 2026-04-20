import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { format, parseISO } from 'date-fns'
import { enAU } from 'date-fns/locale'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Clock } from 'lucide-react'
import AppBanner from '@/components/AppBanner'
import CrossIncidentCard from '@/components/CrossIncidentCard'
import { EmergencyStep, EmergencySteps } from '@/components/EmergencySteps'
import PartnerCard from '@/components/PartnerCard'
import { FadeIn, FadeUp } from '@/components/animation'
import { getGuideBySlug, getAllGuides } from '@/lib/guides'
import { getPartnersForGuide } from '@/lib/partners'

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllGuides().map((g) => ({ slug: g.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const guide = getGuideBySlug(slug)
  if (!guide) {
    return { title: 'Guide not found' }
  }
  return {
    title: guide.title,
    description: guide.description,
  }
}

const mdxBodyClass =
  'mt-10 max-w-[720px] mx-auto px-4 sm:px-0 [&_p]:text-[15px] [&_p]:font-light [&_p]:leading-[1.8] [&_p]:text-[var(--color-text-secondary)] [&_p]:mb-4 ' +
  '[&_h2]:font-[family-name:Syne,sans-serif] [&_h2]:text-[1.2rem] [&_h2]:font-bold [&_h2]:text-[var(--color-text-primary)] [&_h2]:border-t [&_h2]:border-[var(--color-border)] [&_h2]:pt-6 [&_h2]:mt-8 [&_h2]:mb-4 [&_h2:first-child]:mt-0 [&_h2:first-child]:border-t-0 [&_h2:first-child]:pt-0 ' +
  '[&_strong]:text-[var(--color-text-primary)] [&_strong]:font-medium ' +
  '[&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-[15px] [&_ul]:leading-[1.8] [&_ul]:text-[var(--color-text-secondary)] [&_li]:mb-2 ' +
  '[&_a]:text-[var(--color-teal)] [&_a]:underline [&_a]:underline-offset-[3px] hover:[&_a]:text-[var(--color-teal-light)]'

export default async function GuideArticlePage({ params }: Props) {
  const { slug } = await params
  const guide = getGuideBySlug(slug)
  if (!guide) {
    notFound()
  }

  const partners = getPartnersForGuide(slug)
  const allGuides = getAllGuides()
  const incidentKey = guide.type ?? guide.slug
  let updatedLabel = guide.updatedAt
  try {
    updatedLabel = format(parseISO(guide.updatedAt), 'd MMMM yyyy', { locale: enAU })
  } catch {
    /* keep raw */
  }

  return (
    <article className="bg-[var(--color-bg-page)]">
      <div className="border-b border-[var(--color-border)] bg-[var(--color-bg-page)] px-6 py-12">
        <div className="mx-auto max-w-[1100px]">
          <Link
            href="/guides"
            className="text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-teal)]"
          >
            ← All guides
          </Link>
          <p className="mt-6 text-[11px] font-normal uppercase tracking-wider text-[var(--color-teal)]">{guide.category}</p>
          <FadeIn delay={0}>
            <h1 className="mt-2 font-[family-name:'Syne',sans-serif] text-[2rem] font-extrabold leading-[1.2] text-[var(--color-text-primary)]">
              {guide.title}
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-4 text-lg font-light text-[var(--color-text-secondary)]">{guide.description}</p>
          </FadeIn>
          <FadeUp delay={0.2}>
            <div className="mt-6 rounded-lg border-l-[3px] border-l-[#D97706] bg-[#FEF3C7] px-4 py-3 text-[14px] text-[#92400E]">
              Can&apos;t access your phone? Open Cloak on a friend&apos;s phone or call them directly using the numbers below.
            </div>
          </FadeUp>
          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] text-[var(--color-text-secondary)]">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 shrink-0" aria-hidden />
              {guide.readingTime} min read
            </span>
            <span className="text-[#94A3B8]/50" aria-hidden>
              ·
            </span>
            <span>Updated {updatedLabel}</span>
            {guide.verified ? (
              <>
                <span className="text-[var(--color-text-secondary)]/50" aria-hidden>
                  ·
                </span>
                <span className="inline-flex items-center gap-2 text-[13px] font-medium text-[#4ADE80]">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#4ADE80]" aria-hidden />
                  Verified accurate
                </span>
              </>
            ) : null}
          </div>
        </div>
      </div>

      <div className={mdxBodyClass}>
        <MDXRemote
          source={guide.content}
          components={{
            EmergencySteps,
            EmergencyStep,
          }}
        />
      </div>

      <FadeUp delay={0}>
        <div className="mx-auto max-w-[720px] px-4 sm:px-0">
          <CrossIncidentCard incidentKey={incidentKey} allGuides={allGuides} />
        </div>
      </FadeUp>

      {partners.length > 0 ? (
        <section className="mx-auto mt-16 max-w-[1100px] border-t border-[var(--color-border)] bg-[var(--color-bg-page)] px-4 pt-12 sm:px-6">
          <h2 className="font-[family-name:'Syne',sans-serif] text-[1.75rem] font-bold text-[var(--color-text-primary)]">
            Recommended tools for this situation
          </h2>
          <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
            Partners we trust for this situation. We may earn a commission from some links — this helps fund free guides.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((p) => (
              <PartnerCard key={p.id} partner={p} />
            ))}
          </div>
        </section>
      ) : null}

      <div className="mx-auto max-w-[1100px] px-4 pb-16 pt-12 sm:px-6">
        <AppBanner />
      </div>
    </article>
  )
}
