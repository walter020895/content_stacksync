import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

// GET /api/likes?postId=xxx  →  { liked: boolean }
export async function GET(req: NextRequest) {
  const postId = req.nextUrl.searchParams.get('postId')
  if (!postId) return NextResponse.json({ liked: false })

  const { data } = await getSupabase()
    .from('likes')
    .select('post_id')
    .eq('post_id', postId)
    .single()

  return NextResponse.json({ liked: !!data })
}

// POST /api/likes  body: { postId, liked }  →  { ok: true }
export async function POST(req: NextRequest) {
  const { postId, liked } = await req.json()
  if (!postId) return NextResponse.json({ ok: false })

  const sb = getSupabase()

  if (liked) {
    await sb.from('likes').upsert({ post_id: postId })
  } else {
    await sb.from('likes').delete().eq('post_id', postId)
  }

  return NextResponse.json({ ok: true })
}
