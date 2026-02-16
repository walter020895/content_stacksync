# Alexis -- CTO

LinkedIn: [favre-alexis](https://www.linkedin.com/in/favre-alexis/)
Personality doc: `alexis_personality_v01.md`

## Folder Structure

```
Alexis/
├── alexis_personality_v01.md          Voice, style, hooks, and content lens
├── published_Alexis/                  Every original post that went live
│   ├── YYYY-MM-DD_slug.md            49 published MDs (YAML template)
│   ├── images/                        37 local post images
│   └── alexis_all_published_kallaway.csv   Ranked by engagement
├── bangers_Alexis/                    Posts with 50+ engagement
│   ├── BANGER_ALEXIS_YYYY-MM-DD_slug.md   6 banger MDs
│   └── images/                        4 banger images
└── research_Alexis/                   Datasets, analysis scripts, insights
    ├── 00_INDEX.md
    ├── dataset_linkedin-post_2026-01-19_21-21-52-420.csv
    ├── dataset_linkedin-post_2026-02-16_14-48-57-954.csv
    ├── analyze_outliers.py
    ├── create_idea_legos.py
    ├── outliers_raw.csv
    ├── idea_legos_analysis.csv
    ├── ALEXIS_IDEA_LEGOS_INSIGHTS.md
    └── Alexis_Outlier_Research_Targets.md
```

## Current State

| Folder | Count |
|--------|-------|
| `published_Alexis/` | 49 MDs + 37 images + Kallaway CSV |
| `bangers_Alexis/` | 6 bangers (eng 56-760) + 4 images |
| `research_Alexis/` | 2 datasets + 2 scripts + 4 analysis files + 1 index |

## Top 5 Posts

1. Data scientists blame data engineers for broken data. -- **760**
2. Security teams in 2020: "Please stop committing API keys" -- **258**
3. In 2011, integrating payments into your app took weeks. -- **107**
4. Intern: "What's the difference between data engineer and data scientist?" -- **79**
5. Data engineering job interview: "you'll architect our real-time..." -- **71**

## All 6 Bangers

| Date | First Line | Engagement |
|------|-----------|------------|
| 2025-12-08 | Data scientists blame data engineers for broken data | 760 |
| 2026-01-09 | Security teams in 2020: "Please stop committing API keys" | 258 |
| 2026-01-27 | In 2011, integrating payments into your app took weeks | 107 |
| 2026-01-06 | Intern: "What's the difference between data engineer and data scientist?" | 79 |
| 2025-12-30 | Data engineering job interview: "you'll architect our real-time..." | 71 |
| 2026-01-13 | Your engineers didn't get hired to babysit Salesforce | 56 |

## How It Works

**Published posts**: Every original post Alexis has published on LinkedIn. Each MD follows the YAML template (`00_ai_markdowns/17_simple-linkedin-post-template.md`) with frontmatter (name, date, tags, topics, link, image) and Kallaway analysis in HTML comments (Hook Type, Topic, Angle, Structure). Only originals go here, no reshares.

**Bangers**: Copies of published posts that crossed the 50+ total engagement threshold (likes + comments + shares). Populated from the Kallaway CSV in `published_Alexis/`. Naming: `BANGER_ALEXIS_YYYY-MM-DD_slug.md`.

**Research**: Contains raw LinkedIn export CSVs, analysis scripts, and processed insights. The `analyze_outliers.py` script identifies top-performing posts; `create_idea_legos.py` extracts Kallaway content patterns. `ALEXIS_IDEA_LEGOS_INSIGHTS.md` summarizes which hooks, topics, and angles drive engagement for Alexis. `Alexis_Outlier_Research_Targets.md` lists outlier benchmarks to aim for.

## Content Lens

Alexis writes as the CTO. His content covers technical topics: data engineering, integration architecture, security, API design, and the engineering side of SaaS infrastructure. See `alexis_personality_v01.md` for the full voice guide.
