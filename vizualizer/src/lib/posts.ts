import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
// build: 2026-02-23

export interface Post {
  id: string
  person: string
  role: string
  date: string | Date
  images?: string[]
  video?: string
  hook: string
  content: string
  personPhoto?: string
  personBadge?: 'linkedin' | 'verified'
}

// ── Persona config ────────────────────────────────────────────
const PERSONAS: Record<string, { name: string; role: string; photo: string; badge?: 'linkedin' | 'verified' }> = {
  ruben:    { name: 'Ruben Burdin',                     role: 'Founder at Stacksync - The Integration Cloud',                  photo: '/images/photo_ruben.jpeg',  badge: 'linkedin' },
  alexis:   { name: 'Alexis Favre',                     role: 'Cofounder & CTO @ Stacksync - Building the Integration Cloud', photo: '/images/photo_alexis.jpeg', badge: 'verified' },
  nacho:    { name: 'Fabian Ignacio Malpartida Negron', role: 'Head of GTM @Stacksync',                                       photo: '/images/photo_nacho.jpeg'                    },
  carter:   { name: 'Carter Supple',                    role: 'Founder and Engineer. Technical Sales @ Stacksync (YC W24)',   photo: '/images/photo_carter.jpeg', badge: 'verified' },
  brittany: { name: 'Brittany Garrett',                  role: 'Operations Manager @Stacksync',                               photo: '/images/photo_brittany.jpeg', badge: 'verified' },
}

const CONTENT_DIR  = path.join(process.cwd(), 'content')
// Local dev: reads from ../[Persona]/  |  Vercel: reads from content/[Persona]/
const PERSONAS_DIR_LOCAL  = path.join(process.cwd(), '..')
const PERSONAS_DIR_VERCEL = path.join(process.cwd(), 'content')
const PERSONAS_DIR = fs.existsSync(path.join(PERSONAS_DIR_LOCAL, 'Ruben')) ? PERSONAS_DIR_LOCAL : PERSONAS_DIR_VERCEL

// ── Simple frontmatter format (legacy content/ files) ─────────
function parseSimpleFile(filepath: string): Post | null {
  try {
    const raw = fs.readFileSync(filepath, 'utf-8')
    const { data, content } = matter(raw)
    if (!data.id || !data.person || !data.hook) return null

    const personKey = (data.person as string).toLowerCase()
    const persona   = PERSONAS[personKey]

    return {
      id:          data.id   as string,
      person:      data.person as string,
      role:        data.role   as string,
      date:        data.date   as string | Date,
      images:      data.image ? [data.image as string] : undefined,
      hook:        data.hook   as string,
      content:     content.trim(),
      personPhoto: persona?.photo || undefined,
      personBadge: persona?.badge,
    }
  } catch {
    return null
  }
}

// ── Draft format parser (extracts ### FULL POST section) ───────
function parseDraftFile(filepath: string, personKey: string): Post | null {
  try {
    const persona = PERSONAS[personKey]
    if (!persona) return null

    const raw = fs.readFileSync(filepath, 'utf-8')

    // Find the FULL POST section: ### FULL POST ... \n\n---\n\n[content]\n\n---
    const match = raw.match(/### FULL POST[^\n]*\n\n---\n\n([\s\S]+?)(?=\n\n---|\n\n## )/i)
    if (!match) return null

    const fullPost = match[1].trim()
    if (fullPost.length < 50) return null

    // Split into paragraphs; first = hook, rest = content
    const paragraphs    = fullPost.split(/\n\n/)
    const hook          = paragraphs[0].trim()
    const contentParas  = paragraphs.slice(1)

    // Stop at any meta section that leaked through
    const stopIdx = contentParas.findIndex(p =>
      p.startsWith('## ') || p.startsWith('---') || p.startsWith('| ')
    )
    const content = contentParas
      .slice(0, stopIdx > 0 ? stopIdx : undefined)
      .join('\n\n')
      .trim()

    if (!content) return null

    // Date: prefer last_updated in frontmatter, fall back to file mtime
    let date: string | Date
    const fmMatch   = raw.match(/^---\n([\s\S]*?)\n---/)
    const dateMatch = fmMatch?.[1].match(/last_updated:\s*(\d{4}-\d{2}-\d{2})/)
    date = dateMatch ? dateMatch[1] : fs.statSync(filepath).mtime

    const filename = path.basename(filepath, '.md')

    // Auto-detect matching images & video in the same directory.
    // Supports multiple images: base name + numbered variants (e.g. post_ruben.png, post_ruben_2.png).
    // Copy to public/draft-images/ so they get bundled into the Vercel deployment.
    const IMAGE_EXTS = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif']
    const VIDEO_EXTS = ['.mp4', '.webm', '.mov']
    const dir = path.dirname(filepath)
    const imageUrls: string[] = []
    let videoUrl: string | undefined
    const destDir = path.join(process.cwd(), 'public', 'draft-images')

    // Collect all matching images (base filename + numbered variants like _2, _3)
    const dirFiles = fs.readdirSync(dir)
    for (const file of dirFiles) {
      const ext = path.extname(file).toLowerCase()
      if (!IMAGE_EXTS.includes(ext)) continue
      const nameWithoutExt = file.slice(0, -ext.length)
      if (nameWithoutExt !== filename) {
        if (!nameWithoutExt.startsWith(filename + '_')) continue
        const suffix = nameWithoutExt.slice(filename.length + 1)
        if (!/^\d+$/.test(suffix)) continue
      }
      try {
        fs.mkdirSync(destDir, { recursive: true })
        fs.copyFileSync(path.join(dir, file), path.join(destDir, file))
        imageUrls.push(`/draft-images/${file}`)
      } catch {
        imageUrls.push(`/api/asset?file=${encodeURIComponent(path.join(dir, file))}`)
      }
    }
    // Sort: base first, then numbered variants by number
    imageUrls.sort((a, b) => {
      const num = (u: string) => { const m = path.basename(u).match(/_(\d+)\.[^.]+$/); return m ? parseInt(m[1]) : 0 }
      return num(a) - num(b)
    })

    // Check for video
    for (const ext of VIDEO_EXTS) {
      const candidate = path.join(dir, filename + ext)
      if (fs.existsSync(candidate)) {
        const destFile = path.join(destDir, filename + ext)
        try {
          fs.mkdirSync(destDir, { recursive: true })
          fs.copyFileSync(candidate, destFile)
          videoUrl = `/draft-images/${filename + ext}`
        } catch {}
        break
      }
    }

    return {
      id:          `draft-${personKey}-${filename}`,
      person:      persona.name,
      role:        persona.role,
      date,
      hook,
      content,
      images:      imageUrls.length > 0 ? imageUrls : undefined,
      video:       videoUrl,
      personPhoto: persona.photo || undefined,
      personBadge: persona.badge,
    }
  } catch {
    return null
  }
}

// ── Main export ───────────────────────────────────────────────
export function getAllPosts(): Post[] {
  const posts: Post[] = []

  // 1. Legacy simple-format files in content/
  if (fs.existsSync(CONTENT_DIR)) {
    fs.readdirSync(CONTENT_DIR)
      .filter(f => f.endsWith('.md'))
      .forEach(f => {
        const p = parseSimpleFile(path.join(CONTENT_DIR, f))
        if (p) posts.push(p)
      })
  }

  // 2. Actual drafts from each persona's drafts_[Persona]/ folder
  if (fs.existsSync(PERSONAS_DIR)) {
    for (const [personKey, persona] of Object.entries(PERSONAS)) {
      const folderName = personKey.charAt(0).toUpperCase() + personKey.slice(1)
      const draftDir = path.join(PERSONAS_DIR, folderName, `drafts_${folderName}`)
      if (!fs.existsSync(draftDir)) continue

      fs.readdirSync(draftDir)
        .filter(f => f.endsWith('.md'))
        .forEach(f => {
          const p = parseDraftFile(path.join(draftDir, f), personKey)
          if (p) posts.push(p)
        })
    }
  }

  return posts.sort((a, b) => {
    // Posts with media (image or video) first
    const aMedia = (a.images && a.images.length > 0) || a.video
    const bMedia = (b.images && b.images.length > 0) || b.video
    if (aMedia && !bMedia) return -1
    if (!aMedia && bMedia) return 1
    // Then by date (newest first)
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

export function getPostById(id: string): Post | undefined {
  return getAllPosts().find(p => p.id === id)
}
