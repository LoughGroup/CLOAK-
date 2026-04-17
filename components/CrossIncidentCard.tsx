import Link from 'next/link'
import type { Guide } from '@/types'
import { getCrossIncidentEntry } from '@/lib/crossIncidentMap'
import { Card } from '@/components/ui/Card'

type Props = {
  incidentKey: string
  allGuides: Guide[]
}

function findGuideHrefByType(allGuides: Guide[], type: string): string | null {
  const match = allGuides.find((g) => g.type === type) ?? allGuides.find((g) => g.slug === type)
  return match ? `/guides/${match.slug}` : null
}

export default function CrossIncidentCard({ incidentKey, allGuides }: Props) {
  const entry = getCrossIncidentEntry(incidentKey)

  const href = entry.href ?? (entry.relatedType ? findGuideHrefByType(allGuides, entry.relatedType) : null)
  const actionHref = href ?? (entry.relatedType ? '/guides' : null)
  const actionLabel = entry.actionLabel

  return (
    <Card variant="teal" className="mt-10" role="region" aria-label="Related incident">
      <div className="flex items-stretch gap-4">
        <div className="w-[3px] shrink-0 rounded-full bg-[#1A9E8F]" aria-hidden />
        <div className="min-w-0 flex-1">
          <h2 className="m-0 text-[14px] font-bold text-[#0F1F3D]">{entry.heading}</h2>
          <p className="mt-2 text-[14px] text-[var(--color-text-secondary)]">{entry.body}</p>

          {actionHref && actionLabel ? (
            <div className="mt-4 flex justify-end">
              <Link
                href={actionHref}
                className="text-[14px] font-medium text-[#1A9E8F] no-underline hover:underline hover:underline-offset-4"
              >
                {actionLabel}
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </Card>
  )
}

