# Nacho -- GTM

LinkedIn: [fabianignaciomalpartidanegron](https://www.linkedin.com/in/fabianignaciomalpartidanegron/)
Personality doc: `nacho_personality_v01.md`

## Folder Structure

```
Nacho/
├── nacho_personality_v01.md           Voice, style, hooks, and content lens
├── published_Nacho/                   Every original post that went live
│   ├── YYYY-MM-DD_slug.md            46 published MDs (YAML template)
│   ├── images/                        37 local post images
│   └── nacho_all_published_kallaway.csv   Ranked by engagement
├── bangers_Nacho/                     Posts with 50+ engagement
│   ├── BANGER_NACHO_YYYY-MM-DD_slug.md   3 banger MDs
│   └── images/                        3 banger images
├── drafts_Nacho/                      Active drafts being worked on
│   └── data_engineers_dead_nacho.md
└── research_Nacho/                    Datasets, analysis scripts, insights
    ├── NACHO_IDEA_LEGOS_INSIGHTS.md
    ├── Nacho_Outlier_Research_Targets.md
    ├── analyze_outliers.py
    ├── create_idea_legos.py
    ├── dataset_linkedin-post_2026-01-19_21-50-35-388.csv
    ├── dataset_linkedin-post_2026-02-16_14-55-06-351.csv
    ├── idea_legos_analysis.csv
    └── outliers_raw.csv
```

## Current State

| Folder | Count |
|--------|-------|
| `published_Nacho/` | 46 MDs + 37 images + Kallaway CSV |
| `bangers_Nacho/` | 3 bangers (eng 112-617) + 3 images |
| `drafts_Nacho/` | 1 active draft |
| `research_Nacho/` | 2 datasets + 2 scripts + 4 analysis files |

## Top 5 Posts

1. Salesforce sold to salespeople. Not C-Level Executives -- **617**
2. Let's make SDRs be SDRs again. -- **114**
3. NetSuite didn't outbuild SAP. They out-priced them. -- **112**
4. A trillion-dollar opportunity is being lost because of LLM costs -- **48**
5. This was my first time in Vegas. -- **41**

## All 3 Bangers

| Date | First Line | Engagement |
|------|-----------|------------|
| 2026-01-23 | Salesforce sold to salespeople. Not C-Level Executives | 617 |
| 2026-01-22 | Let's make SDRs be SDRs again. | 114 |
| 2026-01-27 | NetSuite didn't outbuild SAP. They out-priced them. | 112 |

## How It Works

**Published posts**: Every original post Nacho has published on LinkedIn. Each MD follows the YAML template (`00_ai_markdowns/17_simple-linkedin-post-template.md`) with frontmatter (name, date, tags, topics, link, image) and Kallaway analysis in HTML comments (Hook Type, Topic, Angle, Structure). Only originals go here, no reshares.

**Bangers**: Copies of published posts that crossed the 50+ total engagement threshold (likes + comments + shares). Populated from the Kallaway CSV in `published_Nacho/`. Naming: `BANGER_NACHO_YYYY-MM-DD_slug.md`.

**Drafts**: Posts currently being written. Naming: `descriptive_name_nacho.md`. Once published, they move to `published_Nacho/` with the date-based naming convention.

**Research**: Contains raw LinkedIn export CSVs, analysis scripts, and processed insights. The `analyze_outliers.py` script identifies top-performing posts; `create_idea_legos.py` extracts Kallaway content patterns. `NACHO_IDEA_LEGOS_INSIGHTS.md` summarizes which hooks, topics, and angles drive engagement for Nacho. `Nacho_Outlier_Research_Targets.md` lists outlier benchmarks to aim for.

## Content Lens

Nacho writes as the GTM lead. His content covers go-to-market strategy, sales operations, SDR workflows, CRM friction, and the commercial side of SaaS. See `nacho_personality_v01.md` for the full voice guide.
