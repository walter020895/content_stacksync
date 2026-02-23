'use client'

import Giscus from '@giscus/react'

interface GiscusCommentsProps {
  postId: string
}

export default function GiscusComments({ postId }: GiscusCommentsProps) {
  const repo = process.env.NEXT_PUBLIC_GISCUS_REPO
  const repoId = process.env.NEXT_PUBLIC_GISCUS_REPO_ID
  const category = process.env.NEXT_PUBLIC_GISCUS_CATEGORY
  const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID

  if (!repo || !repoId || !category || !categoryId) {
    return (
      <div className="mt-8 p-4 rounded-lg bg-amber-50 border border-amber-200 text-sm text-amber-800">
        <p className="font-medium mb-1">Giscus not configured</p>
        <p>
          Copy <code className="bg-amber-100 px-1 rounded">.env.local.example</code> to{' '}
          <code className="bg-amber-100 px-1 rounded">.env.local</code> and fill in your GitHub
          Discussion credentials. See the <a href="/setup" className="underline">Setup page</a> for
          instructions.
        </p>
      </div>
    )
  }

  return (
    <div className="mt-8">
      <h2 className="text-base font-semibold text-gray-700 mb-4">Feedback &amp; Comments</h2>
      <Giscus
        repo={repo as `${string}/${string}`}
        repoId={repoId}
        category={category}
        categoryId={categoryId}
        mapping="specific"
        term={postId}
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="en"
        loading="lazy"
      />
    </div>
  )
}
