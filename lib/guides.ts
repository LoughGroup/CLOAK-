import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { Guide, GuideWithContent } from '@/types'

const guidesDirectory = path.join(process.cwd(), 'content/guides')

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
      const { content: _omit, ...meta } = full
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
  return toGuide(slug, data, content)
}
