#!/usr/bin/env python3
"""
open_comments.py — Opens LinkedIn posts one at a time in the right Brave profiles.

Walks through each post, then each commenter — one tab at a time.
Press Enter after you've commented to move to the next. Press Q to quit.

Usage:
    python3 scripts/open_comments.py              # today's posts
    python3 scripts/open_comments.py 2026-02-25   # specific date
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
    """Returns list of (author_key, url) from the daily comments file."""
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
    target_date = sys.argv[1] if len(sys.argv) > 1 else str(date.today())

    comments_file = REPO_ROOT / "00_comments" / f"{target_date}_comments.md"
    if not comments_file.exists():
        print(f"\nNo comments file for {target_date}")
        print(f"Expected: {comments_file}")
        sys.exit(1)

    posts = parse_posts(comments_file)
    if not posts:
        print(f"\nNo posts found in {comments_file.name}")
        sys.exit(1)

    # Build the full queue: for each post, open in each commenter's profile
    queue = []
    for author, url in posts:
        for persona, profile_dir in PROFILES.items():
            if persona != author:
                queue.append((author, persona, profile_dir, url))

    total = len(queue)
    print(f"\n{target_date} — {len(posts)} post(s), {total} comments to make")
    print(f"Comments file: {comments_file}")
    print(f"\nPress Enter after each comment. Press Q + Enter to quit.\n")
    print("─" * 60)

    for i, (author, commenter, profile_dir, url) in enumerate(queue, 1):
        print(f"\n[{i}/{total}]  {commenter.upper()} comments on {author.upper()}'s post")
        print(f"  Profile : {profile_dir}")
        print(f"  URL     : {url}")

        open_url(profile_dir, url)

        answer = input("\n  Done commenting? [Enter / Q to quit] ").strip().lower()
        if answer == "q":
            print("\nStopped. Resume later with the same command.\n")
            sys.exit(0)

    print("\n" + "─" * 60)
    print(f"All {total} comments done for {target_date}.\n")

if __name__ == "__main__":
    main()
