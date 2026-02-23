import { getAllPosts } from '@/lib/posts'
import Feed from '@/components/Feed'

// ── Left sidebar: profile card ────────────────────────────────
function ProfileCard() {
  return (
    <div className="bg-white rounded-lg border border-[rgba(0,0,0,0.08)] overflow-hidden text-center shadow-[0_0_0_1px_rgba(0,0,0,0.04)]">
      {/* Cover */}
      <div
        className="h-[54px]"
        style={{ background: 'linear-gradient(135deg, #7928ca, #0a66c2)' }}
      />
      {/* Avatar */}
      <div className="-mt-7 flex justify-center mb-1">
        <div className="w-[72px] h-[72px] rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-gray-500">
          <svg viewBox="0 0 24 24" className="w-9 h-9" fill="currentColor">
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
          </svg>
        </div>
      </div>
      <div className="px-3 pb-3">
        <p className="font-semibold text-sm text-[#1d2226]">Random Dude</p>
        <p className="text-xs text-[rgba(0,0,0,0.6)] mt-0.5 leading-snug">Reviewing Drafts</p>
        <div className="mt-3 pt-3 border-t border-[rgba(0,0,0,0.08)] text-left space-y-2">
          <p className="text-xs text-[rgba(0,0,0,0.6)]">
            Profile viewers{' '}
            <span className="font-semibold text-[#0a66c2]">124</span>
          </p>
          <p className="text-xs text-[rgba(0,0,0,0.6)]">
            Post impressions{' '}
            <span className="font-semibold text-[#0a66c2]">3,847</span>
          </p>
        </div>
        <div className="mt-3 pt-3 border-t border-[rgba(0,0,0,0.08)] text-left">
          <p className="text-xs font-semibold text-[rgba(0,0,0,0.6)]">
            <span className="text-amber-500">✦</span> Try Premium for free
          </p>
        </div>
        <div className="mt-3 pt-3 border-t border-[rgba(0,0,0,0.08)] text-left">
          <p className="text-xs font-semibold text-[rgba(0,0,0,0.6)] mb-1.5">Recent</p>
          {['Stacksync', 'B2B SaaS', 'Data Engineering'].map((item) => (
            <p key={item} className="text-xs text-[rgba(0,0,0,0.6)] py-0.5 flex items-center gap-1.5 hover:text-[#0a66c2] cursor-pointer">
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Right sidebar: draft info ─────────────────────────────────
function RightSidebar({ persons }: { persons: string[] }) {
  return (
    <div className="space-y-2">
      {/* Add to feed style card */}
      <div className="bg-white rounded-lg border border-[rgba(0,0,0,0.08)] shadow-[0_0_0_1px_rgba(0,0,0,0.04)] p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-[#1d2226]">Draft Queue</h3>
          <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-medium">INTERNAL</span>
        </div>
        <p className="text-xs text-[rgba(0,0,0,0.6)] leading-relaxed mb-3">
          LinkedIn post drafts pending review. Tap <strong>see more</strong> to read full posts. Tap <strong>Comment</strong> to leave feedback.
        </p>
        <div className="border-t border-[rgba(0,0,0,0.08)] pt-3">
          <p className="text-xs font-semibold text-[rgba(0,0,0,0.6)] mb-2">Personas in this queue</p>
          {persons.map((p) => (
            <div key={p} className="flex items-center gap-2 py-1">
              <div className="w-6 h-6 rounded-full bg-[#0a66c2] flex items-center justify-center text-white text-[10px] font-bold shrink-0">
                {p[0]}
              </div>
              <p className="text-xs text-[rgba(0,0,0,0.6)]">{p}</p>
            </div>
          ))}
        </div>
      </div>

      {/* LinkedIn News style */}
      <div className="bg-white rounded-lg border border-[rgba(0,0,0,0.08)] shadow-[0_0_0_1px_rgba(0,0,0,0.04)] p-4">
        <h3 className="text-sm font-semibold text-[#1d2226] mb-3">LinkedIn News</h3>
        {[
          'B2B SaaS funding hits new high',
          'CRMs face data quality crisis',
          'AI needs clean data pipelines',
          'Heroku migration wave continues',
        ].map((headline) => (
          <div key={headline} className="flex items-start gap-1.5 py-1.5">
            <span className="text-[rgba(0,0,0,0.6)] mt-0.5 text-xs font-bold">•</span>
            <p className="text-xs font-semibold text-[rgba(0,0,0,0.9)] leading-snug hover:text-[#0a66c2] cursor-pointer">
              {headline}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Home page ─────────────────────────────────────────────────
export default function HomePage() {
  const posts = getAllPosts()
  const persons = Array.from(new Set(posts.map((p) => p.person))).sort()

  return (
    <div className="max-w-[1128px] mx-auto px-3 py-5">
      <div className="flex gap-5 items-start">

        {/* Left sidebar */}
        <aside className="hidden md:block w-[225px] shrink-0 sticky top-[68px]">
          <ProfileCard />
        </aside>

        {/* Center feed */}
        <div className="flex-1 min-w-0 max-w-[552px]">
          {posts.length === 0 ? (
            <div className="bg-white rounded-lg border border-[rgba(0,0,0,0.08)] p-10 text-center text-sm text-[rgba(0,0,0,0.6)]">
              No posts yet — drop a <code className="bg-gray-100 px-1 rounded">.md</code> file into{' '}
              <code className="bg-gray-100 px-1 rounded">content/</code>
            </div>
          ) : (
            <Feed posts={posts} persons={persons} />
          )}
        </div>

        {/* Right sidebar */}
        <aside className="hidden lg:block w-[300px] shrink-0 sticky top-[68px]">
          <RightSidebar persons={persons} />
        </aside>
      </div>
    </div>
  )
}
