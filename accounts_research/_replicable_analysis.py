#!/usr/bin/env python3
"""
Replicable LinkedIn Post Analysis for Stacksync
Analyzes 15 creators (excluding jack_kuveke) to find patterns worth replicating.
"""

import pandas as pd
import os
import re
import warnings
warnings.filterwarnings('ignore')

pd.set_option('display.max_columns', None)
pd.set_option('display.width', 200)
pd.set_option('display.max_colwidth', 110)

# ─────────────────────────────────────────────────
# 1. LOAD ALL POSTS (exclude jack_kuveke)
# ─────────────────────────────────────────────────
BASE = "/Users/TERABYTE10/Downloads/Stacksync/04_linkedin_content/accounts_research"
EXCLUDE_CREATOR = "jack_kuveke"

all_frames = []
for creator_dir in sorted(os.listdir(BASE)):
    if creator_dir == EXCLUDE_CREATOR or creator_dir.startswith('_') or creator_dir.startswith('.') or not os.path.isdir(os.path.join(BASE, creator_dir)):
        continue
    csv_path = os.path.join(BASE, creator_dir, f"{creator_dir}_all_posts.csv")
    if os.path.exists(csv_path):
        df = pd.read_csv(csv_path)
        df['creator'] = creator_dir
        all_frames.append(df)
        print(f"  Loaded {creator_dir}: {len(df)} posts")
    else:
        print(f"  WARNING: No CSV found for {creator_dir}")

all_posts = pd.concat(all_frames, ignore_index=True)
print(f"\n{'='*80}")
print(f"TOTAL POSTS LOADED: {len(all_posts)} from {all_posts['creator'].nunique()} creators")
print(f"{'='*80}\n")

# ─────────────────────────────────────────────────
# 2. FILTER FOR REPLICABLE POSTS ONLY
# ─────────────────────────────────────────────────
# Exclude milestone/non-replicable topics
exclude_topics = ["Company Milestone", "Fundraising", "Job Change", "Personal", "Hiring"]
topic_mask = all_posts['topic'].fillna('').apply(
    lambda t: not any(et.lower() in t.lower() for et in exclude_topics)
)

# Exclude milestone first_lines
exclude_first_line_terms = [
    "announcing", "excited to share", "i'm joining", "i've left",
    "series a", "series b", "series c", "raised"
]
first_line_mask = all_posts['first_line'].fillna('').apply(
    lambda fl: not any(term in fl.lower() for term in exclude_first_line_terms)
)

# Also need valid total_engagement
engagement_mask = all_posts['total_engagement'].notna() & (all_posts['total_engagement'] > 0)

replicable = all_posts[topic_mask & first_line_mask & engagement_mask].copy()

excluded_count = len(all_posts) - len(replicable)
print(f"FILTERING FOR REPLICABLE POSTS:")
print(f"  Posts excluded by topic filter: {(~topic_mask).sum()}")
print(f"  Posts excluded by first_line filter: {(topic_mask & ~first_line_mask).sum()}")
print(f"  Posts excluded by missing engagement: {(topic_mask & first_line_mask & ~engagement_mask).sum()}")
print(f"  Total excluded: {excluded_count}")
print(f"  REPLICABLE POSTS REMAINING: {len(replicable)}")
print(f"{'='*80}\n")

# ─────────────────────────────────────────────────
# 3a. AVERAGE ENGAGEMENT BY HOOK_TYPE
# ─────────────────────────────────────────────────
print("=" * 80)
print("3a. AVERAGE ENGAGEMENT BY HOOK TYPE")
print("=" * 80)
hook_stats = replicable.groupby('hook_type').agg(
    avg_engagement=('total_engagement', 'mean'),
    median_engagement=('total_engagement', 'median'),
    count=('total_engagement', 'count'),
    total=('total_engagement', 'sum')
).sort_values('avg_engagement', ascending=False)
hook_stats['avg_engagement'] = hook_stats['avg_engagement'].round(0).astype(int)
hook_stats['median_engagement'] = hook_stats['median_engagement'].round(0).astype(int)
# Only show hook types with 5+ posts for statistical relevance
hook_significant = hook_stats[hook_stats['count'] >= 5]
print(f"\n(Showing hook types with 5+ posts)")
print(hook_significant.to_string())
print()

# Also show all for reference
print(f"(All hook types including rare ones):")
print(hook_stats.to_string())
print()

# ─────────────────────────────────────────────────
# 3b. AVERAGE ENGAGEMENT BY STRUCTURE
# ─────────────────────────────────────────────────
print("=" * 80)
print("3b. AVERAGE ENGAGEMENT BY STRUCTURE")
print("=" * 80)
struct_stats = replicable.groupby('structure').agg(
    avg_engagement=('total_engagement', 'mean'),
    median_engagement=('total_engagement', 'median'),
    count=('total_engagement', 'count')
).sort_values('avg_engagement', ascending=False)
struct_stats['avg_engagement'] = struct_stats['avg_engagement'].round(0).astype(int)
struct_stats['median_engagement'] = struct_stats['median_engagement'].round(0).astype(int)
struct_significant = struct_stats[struct_stats['count'] >= 5]
print(f"\n(Showing structures with 5+ posts)")
print(struct_significant.to_string())
print()
print(f"(All structures):")
print(struct_stats.to_string())
print()

# ─────────────────────────────────────────────────
# 3c. AVERAGE ENGAGEMENT BY TOPIC
# ─────────────────────────────────────────────────
print("=" * 80)
print("3c. AVERAGE ENGAGEMENT BY TOPIC (replicable only)")
print("=" * 80)
topic_stats = replicable.groupby('topic').agg(
    avg_engagement=('total_engagement', 'mean'),
    median_engagement=('total_engagement', 'median'),
    count=('total_engagement', 'count')
).sort_values('avg_engagement', ascending=False)
topic_stats['avg_engagement'] = topic_stats['avg_engagement'].round(0).astype(int)
topic_stats['median_engagement'] = topic_stats['median_engagement'].round(0).astype(int)
topic_significant = topic_stats[topic_stats['count'] >= 5]
print(f"\n(Showing topics with 5+ posts)")
print(topic_significant.to_string())
print()
print(f"(All topics):")
print(topic_stats.to_string())
print()

# ─────────────────────────────────────────────────
# 3d. AVERAGE ENGAGEMENT BY VISUAL_FORMAT
# ─────────────────────────────────────────────────
print("=" * 80)
print("3d. AVERAGE ENGAGEMENT BY VISUAL FORMAT")
print("=" * 80)
visual_stats = replicable.groupby('visual_format').agg(
    avg_engagement=('total_engagement', 'mean'),
    median_engagement=('total_engagement', 'median'),
    count=('total_engagement', 'count')
).sort_values('avg_engagement', ascending=False)
visual_stats['avg_engagement'] = visual_stats['avg_engagement'].round(0).astype(int)
visual_stats['median_engagement'] = visual_stats['median_engagement'].round(0).astype(int)
print()
print(visual_stats.to_string())
print()

# ─────────────────────────────────────────────────
# 3e. TOP 50 REPLICABLE POSTS
# ─────────────────────────────────────────────────
print("=" * 80)
print("3e. TOP 50 REPLICABLE POSTS BY TOTAL ENGAGEMENT")
print("=" * 80)
top50 = replicable.nlargest(50, 'total_engagement').copy()
top50['first_line_short'] = top50['first_line'].fillna('').str[:100]
top50_display = top50[['creator', 'first_line_short', 'total_engagement', 'hook_type', 'topic', 'structure', 'visual_format']].reset_index(drop=True)
top50_display.index = top50_display.index + 1  # 1-indexed
print()
for idx, row in top50_display.iterrows():
    print(f"\n#{idx:2d} | {row['total_engagement']:,.0f} eng | {row['creator']}")
    print(f"     Hook: {row['first_line_short']}")
    print(f"     Type: {row['hook_type']} | Topic: {row['topic']} | Structure: {row['structure']} | Format: {row['visual_format']}")
print()

# ─────────────────────────────────────────────────
# 4. CONTENT CATEGORIZATION OF TOP 50
# ─────────────────────────────────────────────────
print("=" * 80)
print("4. CONTENT CATEGORIZATION OF TOP 50 REPLICABLE POSTS")
print("=" * 80)

def categorize_post(text):
    """Categorize a post into content types based on text analysis."""
    if pd.isna(text):
        return "Uncategorized"
    text_lower = text.lower()

    categories = []

    # Competitive comparison - mentions specific tools/companies as comparison
    competitor_signals = [
        'vs ', 'versus', 'compared to', 'instead of', 'better than',
        'switch from', 'moved from', 'replaced', 'alternative to',
        'competitor', 'beat', 'killed'
    ]
    # Also check for specific B2B/tech tool names
    tool_names = [
        'salesforce', 'hubspot', 'snowflake', 'databricks', 'fivetran',
        'aws', 'azure', 'google cloud', 'stripe', 'notion', 'slack',
        'jira', 'confluence', 'mongodb', 'postgres', 'mysql',
        'datadog', 'splunk', 'new relic', 'grafana', 'kubernetes',
        'docker', 'terraform', 'github', 'gitlab', 'bitbucket',
        'vercel', 'netlify', 'heroku', 'supabase', 'firebase',
        'openai', 'anthropic', 'mistral', 'llama', 'chatgpt',
        'copilot', 'cursor', 'replit'
    ]
    if any(s in text_lower for s in competitor_signals):
        # Confirm it's actually comparing things
        categories.append("Competitive Comparison")
    elif sum(1 for t in tool_names if t in text_lower) >= 2:
        categories.append("Competitive Comparison")

    # Educational listicle - numbered items or clear list structure
    numbered_pattern = re.findall(r'(?:^|\n)\s*\d+[\.\)]\s', text)
    bullet_pattern = re.findall(r'(?:^|\n)\s*[-•→✅❌▸]\s', text)
    if len(numbered_pattern) >= 3 or len(bullet_pattern) >= 5:
        categories.append("Educational Listicle")

    # Contrarian take
    contrarian_signals = [
        'unpopular opinion', 'controversial', "most people think",
        "everyone says", "stop doing", "you don't need", "myth",
        "wrong about", "hot take", "here's the truth",
        "nobody talks about", "most engineers", "most developers",
        "overrated", "underrated", "against the grain",
        "i disagree", "the problem with", "is dead", "is dying",
        "isn't what you think", "won't", "don't believe"
    ]
    if any(s in text_lower for s in contrarian_signals):
        categories.append("Contrarian Take")

    # Story/narrative
    story_signals = [
        'last year', 'years ago', 'i remember', 'true story',
        'here is what happened', "here's what happened",
        'i learned', 'i built', 'i shipped', 'we shipped',
        'i worked at', 'when i was', 'my experience',
        'i made the mistake', 'i failed', 'we failed',
        'the story of', 'a story about', 'my journey',
        'looking back', 'the day i', 'one day'
    ]
    if any(s in text_lower for s in story_signals):
        categories.append("Story/Narrative")

    # Industry analysis
    industry_signals = [
        'market', 'industry', 'trend', 'data shows',
        'research', 'survey', 'report', 'growth',
        'revenue', 'valuation', 'funding', 'billion',
        'million users', 'adoption', 'landscape',
        'prediction', 'forecast', 'future of',
        'state of', 'the rise of', 'the fall of'
    ]
    if sum(1 for s in industry_signals if s in text_lower) >= 2:
        categories.append("Industry Analysis")

    # Humor/satire
    humor_signals = [
        'lol', 'haha', '😂', '🤣', 'satire',
        'joke', 'meme', 'parody', 'sarcasm', 'ironic',
        'plot twist', 'fun fact', 'spoiler alert'
    ]
    if any(s in text_lower for s in humor_signals):
        categories.append("Humor/Satire")

    if not categories:
        return "Uncategorized"
    return " + ".join(categories)

top50['content_category'] = top50['full_text'].apply(categorize_post)

print("\nCATEGORY DISTRIBUTION (posts can belong to multiple categories):")
print("-" * 60)

# Count each category
category_counts = {}
for cat_string in top50['content_category']:
    for cat in cat_string.split(' + '):
        cat = cat.strip()
        category_counts[cat] = category_counts.get(cat, 0) + 1

for cat, count in sorted(category_counts.items(), key=lambda x: -x[1]):
    pct = count / 50 * 100
    bar = '#' * int(pct / 2)
    print(f"  {cat:<25s} {count:3d} ({pct:5.1f}%) {bar}")

print(f"\nDETAILED CATEGORY FOR EACH TOP-50 POST:")
print("-" * 60)
for idx, (_, row) in enumerate(top50.iterrows(), 1):
    first_line = str(row['first_line'])[:80] if pd.notna(row['first_line']) else 'N/A'
    print(f"  #{idx:2d} [{row['content_category']}] {first_line}")

# ─────────────────────────────────────────────────
# 5. WORD COUNT ANALYSIS OF TOP 50
# ─────────────────────────────────────────────────
print()
print("=" * 80)
print("5. WORD COUNT ANALYSIS — TOP 50 REPLICABLE POSTS")
print("=" * 80)

top50['word_count'] = top50['full_text'].fillna('').apply(lambda x: len(x.split()))

avg_wc = top50['word_count'].mean()
median_wc = top50['word_count'].median()
min_wc = top50['word_count'].min()
max_wc = top50['word_count'].max()
std_wc = top50['word_count'].std()

print(f"\n  Average word count:  {avg_wc:.0f}")
print(f"  Median word count:  {median_wc:.0f}")
print(f"  Std deviation:      {std_wc:.0f}")
print(f"  Min:                {min_wc}")
print(f"  Max:                {max_wc}")

# Distribution buckets
print(f"\n  WORD COUNT DISTRIBUTION:")
print(f"  {'Bucket':<20s} {'Count':>5s} {'%':>6s}  Bar")
print(f"  {'-'*50}")
buckets = [(0, 50), (51, 100), (101, 150), (151, 200), (201, 300), (301, 500), (501, 9999)]
bucket_labels = ['0-50', '51-100', '101-150', '151-200', '201-300', '301-500', '500+']
for (lo, hi), label in zip(buckets, bucket_labels):
    count = ((top50['word_count'] >= lo) & (top50['word_count'] <= hi)).sum()
    pct = count / 50 * 100
    bar = '#' * int(pct / 2)
    print(f"  {label:<20s} {count:5d} {pct:5.1f}%  {bar}")

# ─────────────────────────────────────────────────
# 6. LINE BREAK ANALYSIS OF TOP 50
# ─────────────────────────────────────────────────
print()
print("=" * 80)
print("6. LINE BREAK / PARAGRAPH BREAK ANALYSIS — TOP 50 REPLICABLE POSTS")
print("=" * 80)

def count_blank_lines(text):
    """Count blank/empty lines (paragraph breaks) in a post."""
    if pd.isna(text):
        return 0
    lines = text.split('\n')
    blank = sum(1 for line in lines if line.strip() == '')
    return blank

def count_total_lines(text):
    if pd.isna(text):
        return 0
    return len(text.split('\n'))

top50['blank_lines'] = top50['full_text'].apply(count_blank_lines)
top50['total_lines'] = top50['full_text'].apply(count_total_lines)
top50['linebreak_to_wordcount_ratio'] = top50['blank_lines'] / top50['word_count']

avg_bl = top50['blank_lines'].mean()
median_bl = top50['blank_lines'].median()
avg_tl = top50['total_lines'].mean()
avg_ratio = top50['linebreak_to_wordcount_ratio'].mean()

print(f"\n  Average blank lines (paragraph breaks):    {avg_bl:.1f}")
print(f"  Median blank lines:                        {median_bl:.1f}")
print(f"  Average total lines:                       {avg_tl:.1f}")
print(f"  Average line-break-to-word-count ratio:    {avg_ratio:.4f}")
print(f"  (i.e., roughly 1 blank line per {1/avg_ratio:.0f} words)" if avg_ratio > 0 else "")

print(f"\n  BLANK LINE DISTRIBUTION:")
print(f"  {'Bucket':<20s} {'Count':>5s} {'%':>6s}  Bar")
print(f"  {'-'*50}")
bl_buckets = [(0, 5), (6, 10), (11, 15), (16, 20), (21, 30), (31, 50), (51, 999)]
bl_labels = ['0-5', '6-10', '11-15', '16-20', '21-30', '31-50', '50+']
for (lo, hi), label in zip(bl_buckets, bl_labels):
    count = ((top50['blank_lines'] >= lo) & (top50['blank_lines'] <= hi)).sum()
    pct = count / 50 * 100
    bar = '#' * int(pct / 2)
    print(f"  {label:<20s} {count:5d} {pct:5.1f}%  {bar}")

# ─────────────────────────────────────────────────
# SUMMARY / KEY TAKEAWAYS
# ─────────────────────────────────────────────────
print()
print("=" * 80)
print("SUMMARY: KEY TAKEAWAYS FOR STACKSYNC")
print("=" * 80)

# Best hook type
best_hook = hook_significant.index[0] if len(hook_significant) > 0 else "N/A"
best_hook_eng = hook_significant.iloc[0]['avg_engagement'] if len(hook_significant) > 0 else 0

# Best structure
best_struct = struct_significant.index[0] if len(struct_significant) > 0 else "N/A"
best_struct_eng = struct_significant.iloc[0]['avg_engagement'] if len(struct_significant) > 0 else 0

# Best topic
best_topic = topic_significant.index[0] if len(topic_significant) > 0 else "N/A"
best_topic_eng = topic_significant.iloc[0]['avg_engagement'] if len(topic_significant) > 0 else 0

# Best visual
best_visual = visual_stats.index[0] if len(visual_stats) > 0 else "N/A"
best_visual_eng = visual_stats.iloc[0]['avg_engagement'] if len(visual_stats) > 0 else 0

# Top content category
top_cat = max(category_counts.items(), key=lambda x: x[1]) if category_counts else ("N/A", 0)

print(f"""
  1. BEST HOOK TYPE:      {best_hook} (avg {best_hook_eng:,} engagement)
  2. BEST STRUCTURE:      {best_struct} (avg {best_struct_eng:,} engagement)
  3. BEST TOPIC:          {best_topic} (avg {best_topic_eng:,} engagement)
  4. BEST VISUAL FORMAT:  {best_visual} (avg {best_visual_eng:,} engagement)
  5. DOMINANT CATEGORY:   {top_cat[0]} ({top_cat[1]}/50 posts = {top_cat[1]/50*100:.0f}%)
  6. IDEAL WORD COUNT:    ~{median_wc:.0f} words (median), range {min_wc}-{max_wc}
  7. IDEAL LINE BREAKS:   ~{median_bl:.0f} paragraph breaks per post
  8. CREATORS IN TOP 50:  {top50['creator'].value_counts().to_dict()}
""")

print("=" * 80)
print("CREATOR REPRESENTATION IN TOP 50:")
print("=" * 80)
creator_top50 = top50['creator'].value_counts()
for creator, count in creator_top50.items():
    bar = '#' * (count * 2)
    print(f"  {creator:<25s} {count:3d}  {bar}")

print("\nDone.")
