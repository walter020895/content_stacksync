# Ruben -- CEO

LinkedIn: [ruben-burdin](https://www.linkedin.com/in/ruben-burdin/)
Personality doc: `ruben_personality_v01.md`

## Folder Structure

```
Ruben/
├── ruben_personality_v01.md           Voice, style, hooks, and content lens
├── published_Ruben/                   Every original post that went live
│   ├── YYYY-MM-DD_slug.md            51 published MDs (YAML template)
│   ├── images/                        44 local post images
│   └── ruben_all_published_kallaway.csv   Ranked by engagement
├── bangers_Ruben/                     Posts with 50+ engagement
│   ├── BANGER_YYYY-MM-DD_slug.md     10 banger MDs
│   └── images/                        9 banger images
├── drafts_Ruben/                      Active drafts being worked on
│   └── junior_senior_titles_ruben.md
└── research_Ruben/                    LinkedIn export datasets
    └── dataset_linkedin-post_2026-02-16_00-24-03-456.csv
```

## Current State

| Folder | Count |
|--------|-------|
| `published_Ruben/` | 51 MDs + 44 images + Kallaway CSV |
| `bangers_Ruben/` | 10 bangers (eng 56-2,769) + 9 images |
| `drafts_Ruben/` | 1 active draft |
| `research_Ruben/` | 1 dataset CSV |

## Top 5 Posts

1. At 64, Oracle took his company -- **2,769**
2. Salesforce used to pay $10M/year to a celebrity as brand partner -- **2,127**
3. He'd created MySQL in 1995. Named it after his daughter "My" -- **1,528**
4. A $30B company started because a wife played matchmaker -- **1,121**
5. $70 billion in one day. -- **849**

## All 10 Bangers

| Date | First Line | Engagement |
|------|-----------|------------|
| 2026-01-06 | At 64, Oracle took his company | 2,769 |
| 2026-01-19 | Salesforce used to pay $10M/year to a celebrity | 2,127 |
| 2026-01-02 | He'd created MySQL in 1995 | 1,528 |
| 2026-01-04 | A $30B company started because a wife played matchmaker | 1,121 |
| 2026-01-21 | $70 billion in one day | 849 |
| 2026-01-08 | One company created more billion-dollar competitors | 258 |
| 2026-01-17 | MuleSoft, Workato, Boomi | 138 |
| 2026-02-06 | Salesforce just killed Heroku Enterprise | 119 |
| 2025-12-31 | Stacksync will be a generational company | 62 |
| 2025-12-18 | 77% of the world's transaction revenue runs through | 56 |

## How It Works

**Published posts**: Every original post Ruben has published on LinkedIn. Each MD follows the YAML template (`00_ai_markdowns/17_simple-linkedin-post-template.md`) with frontmatter (name, date, tags, topics, link, image) and Kallaway analysis in HTML comments (Hook Type, Topic, Angle, Structure). Only originals go here, no reshares.

**Bangers**: Copies of published posts that crossed the 50+ total engagement threshold (likes + comments + shares). These are populated from the Kallaway CSV in `published_Ruben/`. Naming: `BANGER_YYYY-MM-DD_slug.md`.

**Drafts**: Posts currently being written. Naming: `descriptive_name_ruben.md`. Once published, they move to `published_Ruben/` with the date-based naming convention.

**Research**: Raw LinkedIn export CSVs. When a new dataset arrives, it gets processed through the pipeline: Kallaway classification, MD generation for originals, image download, Kallaway CSV ranking, and banger selection.

## Content Lens

Ruben writes as the CEO and founder. His content covers founder stories, industry deep dives, SaaS history, and the builder's perspective on integration and data infrastructure. See `ruben_personality_v01.md` for the full voice guide.
