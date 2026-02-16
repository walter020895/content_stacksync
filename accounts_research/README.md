# accounts_research

Kallaway analysis of 16 external LinkedIn creators (30+ posts each). These are creators outside the Stacksync team whose content patterns serve as reference material for our own content strategy.

## Folder Structure

```
accounts_research/
├── _index_all_creators.csv              Master index of all 16 creators with stats
├── _other_creators_under_30_posts.csv   364 posts from 235 smaller creators (merged)
└── [creator_slug]/                      One folder per creator (16 total)
    ├── [slug]_all_posts.csv             All posts with Kallaway classification
    └── [slug]_kallaway_summary.csv      Aggregated Kallaway breakdown
```

## 16 Creators

| Folder | Creator |
|--------|---------|
| `alex_xu/` | Alex Xu |
| `chris_walker/` | Chris Walker |
| `dave_gerhardt/` | Dave Gerhardt |
| `gergely_orosz/` | Gergely Orosz |
| `gregor_ojstersek/` | Gregor Ojstersek |
| `jack_kuveke/` | Jack Kuveke |
| `james_hawkins/` | James Hawkins |
| `jen_erickson/` | Jen Erickson |
| `jordan_crawford/` | Jordan Crawford |
| `jordan_cutler/` | Jordan Cutler |
| `kyle_poyar/` | Kyle Poyar |
| `louie_bacaj/` | Louie Bacaj |
| `luca_rossi/` | Luca Rossi |
| `marty_kausas/` | Marty Kausas |
| `milan_jovanovic/` | Milan Jovanovic |
| `nicola_ballotta/` | Nicola Ballotta |

## How This Feeds the Process

1. **Central Outliers DB**: Top 3 posts per creator (by engagement) are extracted into `00_ai_markdowns/central_outliers_db.csv` (171 rows, 86 authors). This DB excludes all Jack Kuveke data.

2. **Pattern recognition**: Each creator's `_kallaway_summary.csv` shows which Hook Types, Topics, Angles, and Structures drive their engagement. These patterns inform what we write for Stacksync personas.

3. **Outlier benchmarks**: High-performing posts from these creators set engagement targets for each persona. The `research_[Persona]/Outlier_Research_Targets.md` files reference this data.

4. **Idea Legos**: The `create_idea_legos.py` scripts in persona research folders use these external patterns to generate content combinations tailored to each persona's voice.

## Index Files

- **`_index_all_creators.csv`**: Lists all 16 creators with post count and summary stats. Use this to quickly see who has the most data.
- **`_other_creators_under_30_posts.csv`**: 364 posts from 235 creators who had fewer than 30 posts each. Merged into a single file rather than individual folders since the sample size is too small for reliable Kallaway analysis per creator.

## Rebuild Process

The central outliers database can be rebuilt with:
```
python3 00_ai_markdowns/rebuild_central_outliers_db.py
```
This script scans all `accounts_research/` subfolders, takes the top 3 posts per author by engagement, and writes the consolidated CSV.
