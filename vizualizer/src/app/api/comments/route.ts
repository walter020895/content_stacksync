import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

// GET /api/comments?postId=xxx
export async function GET(req: NextRequest) {
  const postId = req.nextUrl.searchParams.get('postId')
  if (!postId) return NextResponse.json([])

  const { data } = await getSupabase()
    .from('comments')
    .select('*')
    .eq('post_id', postId)
    .order('created_at', { ascending: true })

  return NextResponse.json(data ?? [])
}

// POST /api/comments  body: { postId, author, body }
export async function POST(req: NextRequest) {
  const { postId, author, body } = await req.json()
  if (!postId || !author?.trim() || !body?.trim())
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })

  const { data, error } = await getSupabase()
    .from('comments')
    .insert({ post_id: postId, author: author.trim(), body: body.trim() })
    .select()
    .single()

  if (error) return NextResponse.json({ error }, { status: 500 })
  return NextResponse.json(data)
}
