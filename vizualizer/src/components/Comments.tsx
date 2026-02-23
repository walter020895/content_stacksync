'use client'

import { useState, useEffect } from 'react'
import { getInitials, getAvatarColor } from '@/lib/utils'

interface Comment {
  id: string
  post_id: string
  author: string
  body: string
  created_at: string
}

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime()
  const m = Math.floor(diff / 60000)
  if (m < 1) return 'just now'
  if (m < 60) return `${m}m`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h}h`
  const d = Math.floor(h / 24)
  return `${d}d`
}

function Avatar({ name }: { name: string }) {
  return (
    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-semibold shrink-0 ${getAvatarColor(name)}`}>
      {getInitials(name)}
    </div>
  )
}

export default function Comments({ postId }: { postId: string }) {
  const [comments, setComments] = useState<Comment[]>([])
  const [author, setAuthor] = useState('')
  const [body, setBody] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [focused, setFocused] = useState(false)

  useEffect(() => {
    fetch(`/api/comments?postId=${encodeURIComponent(postId)}`)
      .then(r => r.json())
      .then(data => setComments(data))
  }, [postId])

  const submit = async () => {
    if (!author.trim() || !body.trim()) return
    setSubmitting(true)
    const res = await fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ postId, author, body }),
    })
    const newComment = await res.json()
    setComments(prev => [...prev, newComment])
    setBody('')
    setFocused(false)
    setSubmitting(false)
  }

  return (
    <div className="mt-4">
      <h2 className="text-sm font-semibold text-[#1d2226] mb-3">
        {comments.length > 0 ? `${comments.length} comment${comments.length > 1 ? 's' : ''}` : 'Comments'}
      </h2>

      {/* Comment input */}
      <div className="flex gap-2 mb-4">
        <Avatar name={author || '?'} />
        <div className="flex-1">
          {focused && (
            <input
              type="text"
              placeholder="Your name"
              value={author}
              onChange={e => setAuthor(e.target.value)}
              className="w-full text-sm border border-[rgba(0,0,0,0.2)] rounded-md px-3 py-1.5 mb-2 focus:outline-none focus:border-[#0a66c2]"
            />
          )}
          <textarea
            placeholder="Add a comment…"
            value={body}
            onFocus={() => setFocused(true)}
            onChange={e => setBody(e.target.value)}
            rows={focused ? 3 : 1}
            className="w-full text-sm border border-[rgba(0,0,0,0.2)] rounded-2xl px-4 py-2 resize-none focus:outline-none focus:border-[#0a66c2] transition-all"
          />
          {focused && (
            <div className="flex justify-end gap-2 mt-1">
              <button
                onClick={() => { setFocused(false); setBody('') }}
                className="text-sm text-[rgba(0,0,0,0.6)] font-semibold px-3 py-1 rounded-full hover:bg-[rgba(0,0,0,0.04)]"
              >
                Cancel
              </button>
              <button
                onClick={submit}
                disabled={submitting || !author.trim() || !body.trim()}
                className="text-sm text-white font-semibold px-4 py-1 rounded-full bg-[#0a66c2] hover:bg-[#004182] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                {submitting ? 'Posting…' : 'Post'}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Comments list */}
      <div className="space-y-3">
        {comments.map(c => (
          <div key={c.id} className="flex gap-2">
            <Avatar name={c.author} />
            <div className="flex-1">
              <div className="bg-[#f3f2ef] rounded-2xl px-3 py-2">
                <p className="text-sm font-semibold text-[#1d2226] leading-tight">{c.author}</p>
                <p className="text-sm text-[rgba(0,0,0,0.9)] whitespace-pre-line mt-0.5">{c.body}</p>
              </div>
              <p className="text-xs text-[rgba(0,0,0,0.5)] mt-1 ml-3">{timeAgo(c.created_at)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
