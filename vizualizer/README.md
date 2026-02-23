# Staxi Draft Review

Internal LinkedIn draft review tool for Stacksync. Renders a scrollable feed of draft posts. Managers can leave feedback via GitHub Discussions (Giscus) — no database required.

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.local.example .env.local
# (edit .env.local — see Giscus section below)

# 3. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Adding a post

1. Create a `.md` file in `content/`:

```markdown
---
id: ruben-post-2026-02-22
person: Ruben
role: Head of Marketing, Stacksync
date: 2026-02-22
hook: The first sentence of the post. This is the hook.
image: /images/ruben-post-2026-02-22.png
---

Paragraph one of the post body.

Paragraph two. Each blank line creates a new paragraph.
```

2. If the post has an image, drop it into `public/images/` with the same name as the `.md` file.

3. Save. The post appears immediately in dev mode. For production, redeploy.

**File naming convention:** `YYYY-MM-DD_person-short-slug.md`

---

## Frontmatter reference

| Field    | Required | Description                              |
|----------|----------|------------------------------------------|
| `id`     | Yes      | Unique string. Used for Giscus mapping.  |
| `person` | Yes      | Author's name                            |
| `role`   | Yes      | Author's role / title                    |
| `date`   | Yes      | `YYYY-MM-DD` — used for feed sort order  |
| `hook`   | Yes      | First line of the post, shown bold       |
| `image`  | No       | Path like `/images/filename.png`         |

---

## Enabling Giscus (comments)

Giscus stores comments as GitHub Discussions. Free, no database needed.

### Step 1 — Enable Discussions on your repo

Go to your GitHub repo → **Settings** → **Features** → check **Discussions**.

### Step 2 — Install the Giscus app

Install it at: `https://github.com/apps/giscus`
Grant it access to your repo.

### Step 3 — Create a Discussion category

In your repo → **Discussions** → **New category** → name it `Post Reviews` (or anything you prefer).

### Step 4 — Get your config values

1. Go to [https://giscus.app](https://giscus.app)
2. Enter your repo (e.g. `your-org/your-repo`)
3. Select "Discussion title contains page `<title>`" or "Specific term"
4. Select your category
5. Copy the four values shown

### Step 5 — Add to `.env.local`

```env
NEXT_PUBLIC_GISCUS_REPO=your-org/your-repo
NEXT_PUBLIC_GISCUS_REPO_ID=R_xxxxxxxxxxxx
NEXT_PUBLIC_GISCUS_CATEGORY=Post Reviews
NEXT_PUBLIC_GISCUS_CATEGORY_ID=DIC_xxxxxxxxxxxx
```

Restart `npm run dev`. Comments will appear on each post's detail page.

---

## Deploying

### Vercel (recommended)

```bash
# Option A: CLI
npm i -g vercel
vercel

# Option B: GitHub integration
# 1. Push repo to GitHub
# 2. vercel.com → New Project → import repo
# 3. Project Settings → Environment Variables → add Giscus vars
# 4. Deploy
```

**Tip:** For Vercel, you can remove `output: 'export'` from `next.config.js` for faster builds and ISR support.

### Cloudflare Pages (static)

1. Push repo to GitHub.
2. Cloudflare Dashboard → **Pages** → **Create a project** → connect repo.
3. Set:
   - **Build command:** `next build`
   - **Output directory:** `out`
4. **Settings → Environment Variables** → add your `NEXT_PUBLIC_GISCUS_*` vars.
5. Deploy.

Every new `.md` file you push triggers an automatic redeploy.

---

## Project structure

```
vizualizer/
├── content/           ← Drop .md post files here
├── public/
│   └── images/        ← Drop post images here
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx           ← Home feed
│   │   ├── post/[id]/page.tsx ← Post detail + Giscus
│   │   └── setup/page.tsx     ← This guide (in-app)
│   ├── components/
│   │   ├── Feed.tsx
│   │   ├── Filters.tsx
│   │   ├── PostCard.tsx
│   │   ├── CopyButton.tsx
│   │   └── GiscusComments.tsx
│   └── lib/
│       ├── posts.ts   ← Markdown parser
│       └── utils.ts   ← Helpers
├── .env.local.example
└── next.config.js
```
