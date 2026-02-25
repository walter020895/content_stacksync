# 04_linkedin_content

This is the operating system for Stacksync's LinkedIn presence. Every post we write, publish, analyze, or archive lives here. One folder per persona, consistent naming everywhere.

## Daily Workflow — Start Here

### When posts go live on LinkedIn

**1. Publish each post**
Tell Claude: *"this post was published: [persona] [linkedin-url]"*
Or use the skill: `/publish-post [persona] [linkedin-url]`

Claude will:
- Move the draft `.md` + image from `drafts_[Persona]/` → `published_[Persona]/`
- Update the YAML frontmatter (status, published_date, link, image)
- Rename the image to match the post slug
- Delete the original draft
- Push to git

**2. Generate comments**
Tell Claude: *"do the comments for all the posts"*

Claude reads each published post and generates 3 comment options per commenter.
Saved to: `00_comments/YYYY-MM-DD_comments.md`

The 5 personas comment on each other's posts. The post author never comments on their own post.

**3. Run the commenting session**
Tell Claude: *"run it"*

Claude opens post #1 in all commenter Brave profiles simultaneously.
You comment on all tabs → tell Claude *"next"* → Claude opens post #2. Repeat.

| You say | Claude does |
|---|---|
| "run it" | Opens post #1 in all profiles |
| "next" | Opens the next post |
| "open post 3" | Jumps to a specific post |
| "run it for 2026-02-25" | Uses a specific date |

Script location: `scripts/open_comments.py`
Full process doc: `00_comments/COMMENTING_PROCESS.md`

---

### Brave Profile Map

| Persona | Brave Profile |
|---|---|
| Ruben | Profile 5 |
| Nacho | Profile 6 |
| Alexis | Profile 4 |
| Carter | Profile 7 |
| Brittany | Profile 10 |

---

### Folder Map

```
00_comments/          ← Daily comment files (YYYY-MM-DD_comments.md)
scripts/              ← open_comments.py (Brave automation)
skills/               ← post-commentator.skill (comment generator)
[Persona]/
  drafts_[Persona]/   ← Active drafts
  published_[Persona]/← Live posts + images/
  [name]_personality_v01.md
```

---

## How It Works

Each persona on the team has their own folder. Inside, everything follows the naming pattern `type_PersonaName`:

```
04_linkedin_content/
│
├── Ruben/                  CEO — owns founder stories, industry deep dives
├── Alexis/                 CTO — owns technical content, data engineering
├── Nacho/                  GTM — owns go-to-market, sales ops, SDR content
├── Tony/                   Industry Veteran — owns enterprise ops perspective
├── Carter/                 Young Commercial — owns early-career B2B angle
│
└── accounts_research/      External creator analysis (16 creators, Kallaway method)
```

## Inside Each Persona Folder

| Folder | What Goes Here | Naming |
|--------|---------------|--------|
| `published_[Name]/` | Every original post that went live on LinkedIn | `YYYY-MM-DD_slug.md` |
| `bangers_[Name]/` | Published posts with 50+ total engagement | `BANGER_[NAME_]YYYY-MM-DD_slug.md` |
| `drafts_[Name]/` | Active drafts being worked on right now | `descriptive_name_persona.md` |
| `research_[Name]/` | LinkedIn export CSVs, analysis scripts, Kallaway insights | Datasets + scripts |
| `[name]_personality_v01.md` | The persona's voice, style, hooks, and content lens | At folder root |

## Post File Format (YAML Template)

Every published post follows this template (`00_ai_markdowns/17_simple-linkedin-post-template.md`):

```yaml
---
name: YYYY-MM-DD_slug_of_first_line
description: "Author published post - First line of post."
domain: business
node_type: linkedin-post
status: published
last_updated: YYYY-MM-DD
published_date: YYYY-MM-DD
tags:
  - integration
  - data-sync
topics:
  - "Integration/Data"
  - "Teacher Hook"
related_concepts:
  - "[[persona_personality_v01]]"
link: https://www.linkedin.com/posts/...
image: images/YYYY-MM-DD_slug.jpg
---

<!-- Kallaway Analysis -->
<!-- Rank: #X | Engagement: N (Likes: N, Comments: N, Shares: N) -->
<!-- Hook Type: Teacher | Topic: Integration/Data | Angle: Data/Numbers | Structure: Story → Lesson -->
<!-- Original [Persona] post: True -->

Post text goes here.
```

**Status values:** `draft` | `review` | `published`

## Bangers — 50+ Engagement Rule

A post enters `bangers_[Name]/` only when:
1. It is an **original** post by the persona (not a reshare)
2. It has **50+ total engagement** (likes + comments + shares)
3. The MD is copied from `published_[Name]/` with a `BANGER_` prefix
4. The image is copied to `bangers_[Name]/images/`

Bangers are populated from the Kallaway CSV inside `published_[Name]/` — that CSV ranks every post by engagement and flags originals.

## Kallaway 5 Content Legos

Every post is classified using the Kallaway method (5 dimensions):

| Lego | Options |
|------|---------|
| **Hook Type** | Teacher, Contrarian, Magician, Fortune Teller, Experimenter |
| **Topic** | Integration/Data, Industry/SaaS, Startup/Founder, GTM/Sales, Technical/Engineering |
| **Angle** | Data/Numbers, Contrarian/Challenge, Personal Experience, Authority/Credibility |
| **Structure** | Story > Lesson, Listicle/Breakdown, Before/After, Question > Answer |
| **Visual Format** | Text-only, Carousel, Image+Text, Video |

Full framework: `/Users/TERABYTE10/Downloads/Moi/Kallaway_Clone.md`

## Processing a New LinkedIn Dataset

When someone exports a new dataset CSV from LinkedIn:

1. Drop the CSV into `research_[Name]/`
2. Run Kallaway classification on all posts
3. Separate originals from reshares
4. Generate MDs for every original post in `published_[Name]/` using the YAML template
5. Download images to `published_[Name]/images/`
6. Generate `[name]_all_published_kallaway.csv` ranking all posts by engagement
7. Copy any post with 50+ engagement to `bangers_[Name]/`

## Content Rules

- All content must serve the ICP: `00_ai_markdowns/00_icp_stacksync.md`
- Master process: `00_ai_markdowns/00_content_creation_process.md`
- "Here's" constructions are **banned** across all personas
- Em dashes (—) are **banned** across all personas
- Each persona writes from their own personality doc — never cross-pollinate voices

## Current State (Feb 2026)

| Persona | Published | Bangers | Active Drafts | Dataset |
|---------|-----------|---------|--------------|---------|
| Ruben   | 51        | 10      | 1            | Processed |
| Alexis  | 49        | 6       | 0            | Processed |
| Nacho   | 46        | 3       | 1            | Processed |
| Tony    | —         | —       | 31           | Ready |
| Carter  | —         | —       | 0            | Ready |
