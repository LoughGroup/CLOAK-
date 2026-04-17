import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { Guide, GuideWithContent } from '@/types'

const guidesDirectory = path.join(process.cwd(), 'content/guides')

function wrapEmergencySteps(content: string): string {
  // Accept hyphen, en dash, or em dash between step number and title.
  const stepHeading = /^##\s+Step\s+(\d+)\s+[-–—]\s+(.+)\s*$/gm
  const matches = Array.from(content.matchAll(stepHeading))
  if (matches.length === 0) {
    return content
  }

  const firstIndex = matches[0]?.index ?? 0
  const intro = content.slice(0, firstIndex).trimEnd()
  const steps = matches
    .map((match, idx) => {
      const number = Number(match[1])
      const title = String(match[2] ?? '').trim()
      const start = (match.index ?? 0) + match[0].length
      const end = idx + 1 < matches.length ? (matches[idx + 1].index ?? content.length) : content.length
      const body = content.slice(start, end).trim()
      const resolvedNumber = Number.isFinite(number) ? number : idx + 1
      // Use string attributes (not JSX expressions) to ensure the MDX runtime preserves props.
      return `<EmergencyStep stepNumber=${JSON.stringify(String(resolvedNumber))} title=${JSON.stringify(title)}>
${body}
</EmergencyStep>`
    })
    .join('\n\n')

  const wrapped = `${intro}\n\n<EmergencySteps>\n${steps}\n</EmergencySteps>\n`

  if (process.env.DEBUG_GUIDES === '1') {
    // eslint-disable-next-line no-console
    console.log('[guides] wrapped emergency steps', {
      steps: matches.length,
      firstHeading: matches[0]?.[0],
      firstTitle: matches[0]?.[2],
      preview: wrapped.slice(0, 220),
    })
  }

  return wrapped
}

function parseGuideFile(fileName: string): {
  slug: string
  data: Record<string, unknown>
  content: string
} {
  const slug = fileName.replace(/\.mdx$/, '')
  const fullPath = path.join(guidesDirectory, fileName)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  return { slug, data: data as Record<string, unknown>, content }
}

function toGuide(
  slug: string,
  data: Record<string, unknown>,
  content: string,
): GuideWithContent {
  return {
    slug,
    type: typeof data.type === 'string' ? data.type : undefined,
    title: String(data.title ?? ''),
    description: String(data.description ?? ''),
    category: String(data.category ?? ''),
    urgency: data.urgency as Guide['urgency'],
    readingTime: Number(data.readingTime ?? 0),
    updatedAt: String(data.updatedAt ?? ''),
    verified: Boolean(data.verified),
    content,
  }
}

export function getAllGuides(): Guide[] {
  if (!fs.existsSync(guidesDirectory)) {
    return []
  }
  const fileNames = fs.readdirSync(guidesDirectory)
  const guides = fileNames
    .filter((f) => f.endsWith('.mdx'))
    .map((fileName) => {
      const { slug, data, content } = parseGuideFile(fileName)
      const full = toGuide(slug, data, content)
      const meta = { ...full } as Omit<GuideWithContent, 'content'> & { content?: string }
      delete meta.content
      return meta
    })
  return guides.sort((a, b) => a.title.localeCompare(b.title))
}

export function getGuideBySlug(slug: string): GuideWithContent | null {
  const fileName = `${slug}.mdx`
  const fullPath = path.join(guidesDirectory, fileName)
  if (!fs.existsSync(fullPath)) {
    return null
  }
  const { data, content } = parseGuideFile(fileName)
  return toGuide(slug, data, wrapEmergencySteps(content))
}
