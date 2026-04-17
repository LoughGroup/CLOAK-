import Fuse from 'fuse.js'
import { searchAliases } from './searchAliases'

export type SearchableGuide = {
  slug: string
  title: string
  summary: string
  category: string
  readTime?: string
}

type IndexedGuide = SearchableGuide & { aliases: string }

function buildSearchIndex(guides: SearchableGuide[]): IndexedGuide[] {
  return guides.map((guide) => {
    const aliases = searchAliases[guide.slug] ?? []
    return {
      ...guide,
      aliases: aliases.join(' '),
    }
  })
}

export function createSmartSearch(guides: SearchableGuide[]) {
  const index = buildSearchIndex(guides)

  const fuse = new Fuse(index, {
    keys: [
      { name: 'aliases', weight: 0.5 },
      { name: 'title', weight: 0.3 },
      { name: 'category', weight: 0.15 },
      { name: 'summary', weight: 0.05 },
    ],
    threshold: 0.4,
    distance: 100,
    minMatchCharLength: 2,
    includeScore: true,
    ignoreLocation: true,
  })

  return (query: string): SearchableGuide[] => {
    if (!query.trim()) return guides
    const results = fuse.search(query.trim())
    return results.map((r) => {
      const { aliases, ...rest } = r.item
      void aliases
      return rest
    })
  }
}
