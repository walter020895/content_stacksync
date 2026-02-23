'use client'

import { useState, useMemo } from 'react'
import type { Post } from '@/lib/posts'
import PostCard from './PostCard'
import Filters from './Filters'

interface FeedProps {
  posts: Post[]
  persons: string[]
}

export default function Feed({ posts, persons }: FeedProps) {
  const [selectedPersons, setSelectedPersons] = useState<string[]>([])
  const [search, setSearch] = useState('')

  const handlePersonToggle = (person: string) => {
    setSelectedPersons((prev) =>
      prev.includes(person) ? prev.filter((p) => p !== person) : [...prev, person]
    )
  }

  const filtered = useMemo(() => {
    let result = posts

    if (selectedPersons.length > 0) {
      result = result.filter((p) => selectedPersons.includes(p.person))
    }

    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(
        (p) =>
          p.hook.toLowerCase().includes(q) ||
          p.content.toLowerCase().includes(q) ||
          p.person.toLowerCase().includes(q)
      )
    }

    return result
  }, [posts, selectedPersons, search])

  return (
    <div>
      <Filters
        persons={persons}
        selectedPersons={selectedPersons}
        search={search}
        onPersonToggle={handlePersonToggle}
        onSearchChange={setSearch}
        totalCount={posts.length}
        filteredCount={filtered.length}
      />

      <div className="mt-3 space-y-3">
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <svg className="w-10 h-10 mx-auto mb-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm font-medium">No posts match your filters</p>
            <button
              onClick={() => { setSelectedPersons([]); setSearch('') }}
              className="mt-2 text-sm text-blue-600 hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          filtered.map((post) => <PostCard key={post.id} post={post} />)
        )}
      </div>
    </div>
  )
}
