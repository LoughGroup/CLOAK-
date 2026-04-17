'use client'

import type { Guide } from '@/types'
import { GuideSearch } from '@/components/GuideSearch'

export default function GuidesIndexClient({ guides }: { guides: Guide[] }) {
  return <GuideSearch guides={guides} />
}
