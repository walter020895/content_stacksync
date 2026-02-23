import { getAllPosts, getPostById } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import GiscusComments from '@/components/GiscusComments'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface PageProps {
  params: { id: string }
}

export function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((p) => ({ id: p.id }))
}

export function generateMetadata({ params }: PageProps) {
  const post = getPostById(params.id)
  if (!post) return { title: 'Post not found' }
  return {
    title: `${post.person} — Staxi Draft Review`,
    description: post.hook,
  }
}

export default function PostPage({ params }: PageProps) {
  const post = getPostById(params.id)
  if (!post) notFound()

  return (
    <div className="max-w-[668px] mx-auto px-4 py-6">
      {/* Back link */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 mb-6 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to feed
      </Link>

      {/* Post card (expanded view) */}
      <PostCard post={post} expanded />

      {/* Giscus comments */}
      <GiscusComments postId={post.id} />
    </div>
  )

}
