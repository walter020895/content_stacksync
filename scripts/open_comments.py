#!/usr/bin/env python3
"""
open_comments.py — Opens today's LinkedIn posts in the right Brave profiles for easy commenting.

For each persona, opens all posts they need to comment on (everyone else's posts).
Grouped by commenter — do all tabs for one Brave profile, then move to the next.

Usage:
    python3 scripts/open_comments.py              # today's posts
    python3 scripts/open_comments.py 2026-02-25   # specific date
"""

import os
import sys
import re
import subprocess
import time
from datetime import date
from pathlib import Path

# ── PROFILE MAP ───────────────────────────────────────────────────────────────
# persona → Brave profile directory name (from Local State detection)
PROFILES = {
    "ruben":    "Profile 5",
    "nacho":    "Profile 6",
    "alexis":   "Profile 4",
    "carter":   "Profile 7",
    "brittany": "Profile 10",
}

BRAVE = "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser"
REPO_ROOT = Path(__file__).parent.parent

# ── PARSE COMMENTS FILE ───────────────────────────────────────────────────────
def parse_posts(filepath):
    """Returns list of (author_key, url) from the daily comments file."""
    posts = []
    with open(filepath) as f:
        content = f.read()

    # Match: ## PersonaName — "title"\n[LinkedIn](url)
    for m in re.finditer(
        r"^## (\w+)[^\n]*\n\[LinkedIn\]\((https://www\.linkedin\.com[^\)]+)\)",
        content,
        re.MULTILINE,
    ):
        author = m.group(1).lower()
        url = m.group(2)
        posts.append((author, url))

    return posts

# ── OPEN URL IN PROFILE ───────────────────────────────────────────────────────
def open_url(profile_dir, url):
    subprocess.Popen(
        [BRAVE, f"--profile-directory={profile_dir}", url],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    time.sleep(0.6)  # small delay so Brave doesn't choke

# ── MAIN ──────────────────────────────────────────────────────────────────────
def main():
    # Date
    target_date = sys.argv[1] if len(sys.argv) > 1 else str(date.today())

    comments_file = REPO_ROOT / "00_comments" / f"{target_date}_comments.md"
    if not comments_file.exists():
        print(f"No comments file for {target_date}")
        print(f"Expected: {comments_file}")
        sys.exit(1)

    posts = parse_posts(comments_file)
    if not posts:
        print(f"No posts found in {comments_file.name}")
        sys.exit(1)

    print(f"\n{target_date} — {len(posts)} post(s) found:")
    for author, url in posts:
        print(f"  [{author.upper()}] {url}")

    print()

    # For each commenter, open all posts that aren't theirs
    for persona, profile_dir in PROFILES.items():
        to_open = [(a, u) for a, u in posts if a != persona]
        if not to_open:
            continue

        print(f"→ {persona.upper()} ({profile_dir}): opening {len(to_open)} post(s)...")
        for author, url in to_open:
            print(f"    {author}'s post")
            open_url(profile_dir, url)

    print(f"\nDone. Comments to copy from:\n  {comments_file}\n")

if __name__ == "__main__":
    main()
