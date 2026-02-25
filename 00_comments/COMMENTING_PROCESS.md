# Commenting Process

How we run the daily commenting session together after posts go live.

---

## The Flow

### 1. Publish posts
Run `/publish-post` for each persona after they post on LinkedIn. This moves drafts to published folders and generates the LinkedIn URLs.

### 2. Generate comments
After all posts are published, ask Claude:
> "do the comments for all the posts"

Claude reads each published post and generates 3 comment options per commenter, saved to `00_comments/YYYY-MM-DD_comments.md`.

### 3. Run the commenting session
Tell Claude: **"run it"** (or "open post 1", "next", etc.)

Claude runs the script for you, one post at a time:

```
[1/4] Opening CARTER's post in 4 profiles:
  → RUBEN    (Profile 5)
  → NACHO    (Profile 6)
  → ALEXIS   (Profile 4)
  → BRITTANY (Profile 10)
```

Carter's post opens in all 4 commenter Brave profiles at once.

### 4. Comment on all 4 tabs
- Open the comments file: `00_comments/YYYY-MM-DD_comments.md`
- Find the section for Carter's post
- Pick Option A, B, or C for each persona
- Switch to each Brave profile, paste the comment, post it

### 5. Say "next"
Claude opens the next post in all profiles. Repeat until done.

---

## Commands Claude runs

| What you say | What Claude does |
|---|---|
| "run it" | Lists today's posts, opens post #1 |
| "next" | Opens the next post in all commenter profiles |
| "open post 3" | Opens a specific post number |
| "run it for 2026-02-25" | Opens posts for a specific date |

---

## Script location

```
scripts/open_comments.py
```

Direct usage (for reference — Claude runs this for you):
```bash
python3 scripts/open_comments.py              # list today's posts
python3 scripts/open_comments.py 1            # open post #1
python3 scripts/open_comments.py 2026-02-25 2 # specific date, post #2
```

---

## Profile map

| Persona | Brave Profile |
|---|---|
| Ruben | Profile 5 |
| Nacho | Profile 6 |
| Alexis | Profile 4 |
| Carter | Profile 7 |
| Brittany | Profile 10 |

---

## Full daily workflow (summary)

1. Posts go live on LinkedIn
2. `/publish-post` for each persona → moves to published folder
3. "do the comments" → Claude generates `00_comments/YYYY-MM-DD_comments.md`
4. "run it" → Claude opens post #1 in all commenter profiles
5. Comment on all tabs → say "next"
6. Repeat for each post
