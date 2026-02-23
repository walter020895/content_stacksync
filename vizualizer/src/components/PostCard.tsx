'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Post } from '@/lib/posts'
import { getInitials, getAvatarColor } from '@/lib/utils'

// LinkedIn truncation (desktop card width ~552px):
// - Text-only post: ~5 lines ≈ 210 chars
// - Post with image: ~3 lines ≈ 140 chars (image takes visual weight)
const TRUNCATE_TEXT_ONLY = 210
const TRUNCATE_WITH_IMAGE = 140

interface PostCardProps {
  post: Post
  expanded?: boolean
}

// ── Icons ─────────────────────────────────────────────────────
function IconLike() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V2.75a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48a4.53 4.53 0 01-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
    </svg>
  )
}
function IconComment() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
    </svg>
  )
}
function IconRepost() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
    </svg>
  )
}
function IconSend() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  )
}
function IconDots() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <circle cx="12" cy="5" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="12" cy="19" r="1.5" />
    </svg>
  )
}
function IconClose() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

// LinkedIn creator mode badge (orange "in" square)
function BadgeLinkedIn() {
  return (
    <svg viewBox="0 0 16 16" className="w-4 h-4 inline-block shrink-0" aria-hidden="true">
      <rect width="16" height="16" rx="3" fill="#0a66c2"/>
      <path d="M4 5.5a1 1 0 100-2 1 1 0 000 2zM3.25 6.5h1.5V12h-1.5V6.5zM6.5 6.5h1.44v.75h.02c.2-.38.7-.77 1.44-.77 1.54 0 1.82.96 1.82 2.2V12H9.74V9c0-.57-.01-1.3-.84-1.3-.85 0-.97.63-.97 1.26V12H6.5V6.5z" fill="white"/>
    </svg>
  )
}

// LinkedIn verified identity badge (shield with checkmark)
function BadgeVerified() {
  return (
    <svg viewBox="0 0 16 16" className="w-4 h-4 inline-block shrink-0" aria-hidden="true">
      <path d="M8 1L2 3.5v4C2 11 4.8 13.9 8 15c3.2-1.1 6-4 6-7.5v-4L8 1z" fill="#6c757d"/>
      <path d="M5.5 8l1.8 1.8L10.5 6.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  )
}
function IconCopy({ copied }: { copied: boolean }) {
  if (copied) {
    return (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
    </svg>
  )
}

// ── Post body with inline "see more" ─────────────────────────
function PostBody({
  hook,
  content,
  alwaysExpanded,
  hasImage,
}: {
  hook: string
  content: string
  alwaysExpanded: boolean
  hasImage: boolean
}) {
  const [expanded, setExpanded] = useState(false)
  const full = content.trim()
  const truncateAt = hasImage ? TRUNCATE_WITH_IMAGE : TRUNCATE_TEXT_ONLY
  const needsTruncation = !alwaysExpanded && full.length > truncateAt
  const isExpanded = expanded || alwaysExpanded

  return (
    <div className="mt-2 text-sm text-[rgba(0,0,0,0.9)] leading-[1.42857]">
      {/* Hook — preserves line breaks for multi-line Kallaway hooks */}
      <p className="mb-1 whitespace-pre-line">{hook}</p>

      {/* Body */}
      {needsTruncation && !isExpanded ? (
        <p className="whitespace-pre-line break-words">
          {full.slice(0, truncateAt)}…{' '}
          <button
            onClick={() => setExpanded(true)}
            className="text-[rgba(0,0,0,0.6)] font-semibold hover:underline"
          >
            see more
          </button>
        </p>
      ) : (
        <>
          <div className="space-y-2 whitespace-pre-line break-words">
            {full.split(/\n{2,}/).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          {!alwaysExpanded && needsTruncation && (
            <button
              onClick={() => setExpanded(false)}
              className="text-[rgba(0,0,0,0.6)] font-semibold hover:underline mt-1 text-sm"
            >
              see less
            </button>
          )}
        </>
      )}
    </div>
  )
}

// ── Copy action ───────────────────────────────────────────────
function CopyAction({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  const handle = async () => {
    try { await navigator.clipboard.writeText(text) } catch {
      const ta = document.createElement('textarea')
      ta.value = text; document.body.appendChild(ta); ta.select()
      document.execCommand('copy'); document.body.removeChild(ta)
    }
    setCopied(true); setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button
      onClick={handle}
      className="flex flex-col items-center justify-center gap-1 py-3 flex-1 text-[rgba(0,0,0,0.6)] hover:text-[rgba(0,0,0,0.9)] hover:bg-[rgba(0,0,0,0.04)] rounded transition-colors"
    >
      <IconCopy copied={copied} />
      <span className={`text-xs font-semibold hidden sm:block ${copied ? 'text-green-600' : ''}`}>
        {copied ? 'Copied!' : 'Copy'}
      </span>
    </button>
  )
}

// ── Action button ─────────────────────────────────────────────
function ActionBtn({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode
  label: string
  href?: string
}) {
  const cls =
    'flex flex-col items-center justify-center gap-1 py-3 flex-1 text-[rgba(0,0,0,0.6)] hover:text-[rgba(0,0,0,0.9)] hover:bg-[rgba(0,0,0,0.04)] rounded transition-colors'
  if (href) {
    return (
      <Link href={href} className={cls}>
        {icon}
        <span className="text-xs font-semibold hidden sm:block">{label}</span>
      </Link>
    )
  }
  return (
    <button className={cls}>
      {icon}
      <span className="text-xs font-semibold hidden sm:block">{label}</span>
    </button>
  )
}

// ── PostCard ──────────────────────────────────────────────────
export default function PostCard({ post, expanded = false }: PostCardProps) {
  const initials = getInitials(post.person)
  const avatarColor = getAvatarColor(post.person)
  const fullText = `${post.hook}\n\n${post.content}`

  return (
    <article className="bg-white rounded-lg border border-[rgba(0,0,0,0.08)] shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_2px_4px_rgba(0,0,0,0.04)] overflow-hidden">

      {/* ── Card header ── */}
      <div className="p-3 pb-0">
        <div className="flex items-start gap-2">

          {/* Avatar — real photo if available, else colored initials */}
          {post.personPhoto ? (
            <img
              src={post.personPhoto}
              alt={post.person}
              className="w-12 h-12 rounded-full object-cover shrink-0"
            />
          ) : (
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-sm shrink-0 ${avatarColor}`}
            >
              {initials}
            </div>
          )}

          {/* Name / role / time */}
          <div className="flex-1 min-w-0 pt-0.5">
            <div className="flex items-start justify-between gap-1">
              <div className="min-w-0">
                {/* Name + badge + 1st */}
                <p className="font-semibold text-sm text-[#1d2226] leading-tight hover:text-[#0a66c2] hover:underline cursor-pointer flex items-center gap-1 flex-wrap">
                  <span className="truncate">{post.person}</span>
                  {post.personBadge === 'linkedin' && <BadgeLinkedIn />}
                  {post.personBadge === 'verified' && <BadgeVerified />}
                  <span className="text-[rgba(0,0,0,0.6)] font-normal text-xs shrink-0">· 1st</span>
                </p>
                <p className="text-xs text-[rgba(0,0,0,0.6)] leading-snug truncate">{post.role}</p>
                <p className="text-xs text-[rgba(0,0,0,0.6)]">
                  4h · <span>🌐</span>
                </p>
              </div>

              {/* Right controls */}
              <div className="flex items-center gap-1 shrink-0">
                {!expanded && (
                  <button className="text-xs text-[#0a66c2] font-semibold border border-[#0a66c2] rounded-full px-3 py-0.5 hover:bg-[#eef3f8] transition-colors whitespace-nowrap">
                    + Follow
                  </button>
                )}
                <button className="text-[rgba(0,0,0,0.6)] hover:text-[#1d2226] hover:bg-[rgba(0,0,0,0.08)] rounded-full p-1 transition-colors">
                  <IconDots />
                </button>
                <button className="text-[rgba(0,0,0,0.6)] hover:text-[#1d2226] hover:bg-[rgba(0,0,0,0.08)] rounded-full p-1 transition-colors">
                  <IconClose />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Post text */}
        <div className="mt-3 pb-3">
          <PostBody hook={post.hook} content={post.content} alwaysExpanded={expanded} hasImage={!!post.image} />
        </div>
      </div>

      {/* ── Image ── */}
      {post.image && (
        <div
          className="bg-[#f3f2ef] flex justify-center items-center overflow-hidden"
          style={{ maxHeight: '510px' }}
        >
          <img
            src={post.image}
            alt=""
            className="w-full h-auto block object-contain"
            style={{ maxHeight: '510px' }}
          />
        </div>
      )}

      {/* ── Action bar ── */}
      <div className="flex items-stretch border-t border-[rgba(0,0,0,0.08)] px-1 pt-1 pb-1">
        <ActionBtn icon={<IconLike />} label="Like" />
        <ActionBtn
          icon={<IconComment />}
          label="Comment"
          href={expanded ? undefined : `/post/${post.id}`}
        />
        <ActionBtn icon={<IconRepost />} label="Repost" />
        <CopyAction text={fullText} />
      </div>
    </article>
  )
}
