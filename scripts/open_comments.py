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

    total = len(posts)
    print(f"\n{target_date} — {total} post(s)")
    print(f"Comments file: {comments_file}")
    print(f"\nEach post opens in all commenter profiles at once.")
    print(f"Comment on all tabs, then press Enter to move to the next post.")
    print(f"Press Q + Enter to quit.\n")
    print("─" * 60)

    for i, (author, url) in enumerate(posts, 1):
        commenters = [(p, d) for p, d in PROFILES.items() if p != author]

        print(f"\n[{i}/{total}]  {author.upper()}'s post — opening in {len(commenters)} profiles:")
        for persona, profile_dir in commenters:
            print(f"  → {persona.upper()} ({profile_dir})")
            open_url(profile_dir, url)

        print(f"\n  URL: {url}")
        answer = input(f"\n  Done commenting on {author.upper()}'s post? [Enter / Q to quit] ").strip().lower()
        if answer == "q":
            print("\nStopped.\n")
            sys.exit(0)

    print("\n" + "─" * 60)
    print(f"All {total} posts done for {target_date}.\n")

if __name__ == "__main__":
    main()
