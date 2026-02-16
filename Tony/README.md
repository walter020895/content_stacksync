# Tony -- Industry Veteran

Personality doc: `tony_personality_v01.md`

## Folder Structure

```
Tony/
├── tony_personality_v01.md            Voice, style, hooks, and content lens
├── drafts_Tony/                       All draft content (31 files)
│   ├── posts/                         Standalone post drafts
│   │   ├── tony_ask_why.md
│   │   ├── tony_fishing_baits.md
│   │   ├── tony_five_bosses.md
│   │   ├── tony_heroku_enterprise_end.md
│   │   └── tony_slow_down_to_close.md
│   ├── netsuite_teasers/              NetSuite campaign teaser series
│   │   ├── 00_INDEX.md
│   │   ├── teaser_01_operators.md
│   │   ├── teaser_02_numbers.md
│   │   ├── teaser_02_numbers_v2_superhero.md
│   │   ├── teaser_03_friday_night.md
│   │   ├── teaser_04_celigo_credibility.md
│   │   └── teaser_05_midwest.md
│   ├── bangers_originals/             Reference bangers for Tony's voice
│   │   └── Heroku_Connect_Tony.md
│   ├── tony_post_1_brothers.md        Numbered post series
│   ├── tony_post_2_open_to_work.md
│   ├── tony_post_3_remote_work.md
│   ├── tony_post_4_new_job.md
│   ├── tony_post_follow_up_v1-v5.md   Follow-up variants
│   ├── tony_post_stacksync_official_announcement.md
│   ├── LogisticsStack_Tony.md         Topic-specific drafts
│   ├── Netsuite_Tony.md
│   ├── Netsuite_Tony_thumbnails.md
│   ├── Tony Profile(DR).md            Profile draft
│   └── tony-voice-and-thinking-guide.md
└── research_Tony/                     LinkedIn export datasets
    └── dataset_linkedin-post_2026-01-12_12-58-28-339.csv
```

## Current State

| Folder | Count |
|--------|-------|
| `drafts_Tony/` | 31 files (posts, teasers, follow-ups, campaign content) |
| `research_Tony/` | 1 dataset CSV (not yet processed) |
| `published_Tony/` | Does not exist yet |
| `bangers_Tony/` | Does not exist yet |

## Next Steps

1. **Process the dataset**: Run the LinkedIn export CSV through the pipeline:
   - Kallaway classification on all posts
   - Separate originals from reshares
   - Generate MDs for every original in a new `published_Tony/` folder using the YAML template
   - Download images to `published_Tony/images/`
   - Generate `tony_all_published_kallaway.csv` ranking all posts by engagement
   - Copy any post with 50+ engagement to a new `bangers_Tony/` folder

2. **Review drafts**: 31 draft files spanning standalone posts, a NetSuite teaser campaign, a numbered post series, and follow-up variants. These need review before publishing.

## How It Works

**Drafts**: Tony has the largest draft collection. Content spans multiple formats: standalone posts (`posts/` subfolder), a NetSuite teaser campaign (`netsuite_teasers/` with indexed series), follow-up variants (v1-v5), and topic-specific deep dives. Naming: `descriptive_name_tony.md` or `tony_post_N_topic.md`.

**Research**: Raw LinkedIn export CSV ready to be processed. Once processed, it will create `published_Tony/` and `bangers_Tony/` following the same conventions as Ruben, Alexis, and Nacho.

**Published/Bangers**: Will be created once the dataset is processed through the pipeline. Published posts will follow the YAML template with Kallaway analysis. Bangers will be copies of posts crossing the 50+ engagement threshold.

## Content Lens

Tony writes as the industry veteran with decades of enterprise operations experience. His content covers enterprise software, logistics, operations workflows, and the practitioner's view of SaaS tooling from someone who has seen multiple technology cycles. See `tony_personality_v01.md` for the full voice guide.
