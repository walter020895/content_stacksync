#!/usr/bin/env python3
"""
open_comments.py — Opens one post at a time in all commenter Brave profiles.

Usage:
    python3 scripts/open_comments.py              # list today's posts
    python3 scripts/open_comments.py 2026-02-25   # list posts for a date
    python3 scripts/open_comments.py 1            # open post #1 in all profiles
    python3 scripts/open_comments.py 2            # open post #2 in all profiles
    python3 scripts/open_comments.py 2026-02-25 2 # specific date + post number
"""

import sys
import re
import subprocess
import time
from datetime import date
from pathlib import Path

# ── PROFILE MAP ───────────────────────────────────────────────────────────────
PROFILES = {
    "ruben":    "Profile 5",
    "nacho":    "Profile 6",
    "alexis":   "Profile 4",
    "carter":   "Profile 7",
    "brittany": "Profile 10",
}

BRAVE     = "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser"
REPO_ROOT = Path(__file__).parent.parent

# ── PARSE COMMENTS FILE ───────────────────────────────────────────────────────
def parse_posts(filepath):
    posts = []
    with open(filepath) as f:
        content = f.read()
    for m in re.finditer(
        r"^## (\w+)[^\n]*\n\[LinkedIn\]\((https://www\.linkedin\.com[^\)]+)\)",
        content,
        re.MULTILINE,
    ):
        posts.append((m.group(1).lower(), m.group(2)))
    return posts

# ── OPEN URL IN PROFILE ───────────────────────────────────────────────────────
def open_url(profile_dir, url):
    subprocess.Popen(
        [BRAVE, f"--profile-directory={profile_dir}", url],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    time.sleep(0.8)

# ── MAIN ──────────────────────────────────────────────────────────────────────
def main():
    args = sys.argv[1:]

    # Parse args: optional date (YYYY-MM-DD) and optional post number
    target_date = str(date.today())
    post_number = None

    for arg in args:
        if re.match(r"\d{4}-\d{2}-\d{2}", arg):
            target_date = arg
        elif re.match(r"^\d+$", arg):
            post_number = int(arg)

    comments_file = REPO_ROOT / "00_comments" / f"{target_date}_comments.md"
    if not comments_file.exists():
        print(f"No comments file for {target_date}")
        print(f"Expected: {comments_file}")
        sys.exit(1)

    posts = parse_posts(comments_file)
    if not posts:
        print(f"No posts found in {comments_file.name}")
        sys.exit(1)

    # No post number — just list what's available
    if post_number is None:
        print(f"\n{target_date} — {len(posts)} post(s):\n")
        for i, (author, url) in enumerate(posts, 1):
            commenters = [p for p in PROFILES if p != author]
            print(f"  [{i}] {author.upper()}'s post — commenters: {', '.join(c.upper() for c in commenters)}")
        print(f"\nRun with a post number to open it, e.g.: open_comments.py {target_date} 1\n")
        return

    # Open a specific post
    if post_number < 1 or post_number > len(posts):
        print(f"Post #{post_number} not found. Available: 1–{len(posts)}")
        sys.exit(1)

    author, url = posts[post_number - 1]
    commenters = [(p, d) for p, d in PROFILES.items() if p != author]

    print(f"\n[{post_number}/{len(posts)}] Opening {author.upper()}'s post in {len(commenters)} profiles:\n")
    for persona, profile_dir in commenters:
        print(f"  → {persona.upper()} ({profile_dir})")
        open_url(profile_dir, url)

    print(f"\n  URL: {url}")

    if post_number < len(posts):
        next_author = posts[post_number][0]
        print(f"\nWhen done, say 'next' to open post #{post_number + 1} ({next_author.upper()}'s post).")
    else:
        print(f"\nThat's the last post. All done for {target_date}.")

if __name__ == "__main__":
    main()
