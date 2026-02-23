# Master Outlier Analysis: 15 LinkedIn Creators
## Compiled February 19, 2026 — for Stacksync Content Replication

---

## DATA OVERVIEW

- **889 total posts** across 15 creators (jack_kuveke excluded)
- **496 posts** with valid engagement data (43% had missing/zero engagement)
- **~487 replicable posts** after filtering fundraising, job changes, personal milestones
- Analysis run two ways: **raw engagement** (skewed toward large accounts) and **relative performance** (normalized per-creator)

### Data Quality Warning

Several creators have heavily incomplete engagement data:
- marty_kausas (96% missing), james_hawkins (89%), jordan_cutler (82%), gregor_ojstersek (73%), louie_bacaj (70%), nicola_ballotta (67%)
- alex_xu has 0% missing, which inflates his representation in raw rankings

### Creator Baselines

| Creator | Posts | Avg Engagement | Max | Top Hook | Top Topic | Top Structure |
|---------|-------|---------------|-----|----------|-----------|---------------|
| james_hawkins | 99 | 3,476 | 11,148 | Teacher (75%) | General | Setup/Punchline |
| alex_xu | 37 | 3,331 | 8,497 | Teacher (57%) | AI/ML/Coding | List Post |
| marty_kausas | 85 | 2,220 | 3,573 | Teacher (53%) | Startup/Founder | Statement/Commentary |
| gergely_orosz | 36 | 1,415 | 3,452 | Teacher (69%) | AI/ML/Coding | Observation/Opinion |
| louie_bacaj | 46 | 769 | 2,250 | Teacher (78%) | Engineering | Statement/Commentary |
| jordan_cutler | 73 | 692 | 2,239 | Teacher (81%) | Engineering | Listicle/Breakdown |
| milan_jovanovic | 48 | 681 | 1,629 | Teacher (59%) | AI/ML/Coding | List Post |
| chris_walker | 75 | 679 | 3,371 | Teacher (47%) | GTM/Sales | List Post |
| kyle_poyar | 59 | 583 | 2,862 | Teacher (42%) | GTM/Sales | List Post |
| nicola_ballotta | 85 | 526 | 2,110 | Teacher (77%) | Leadership | Statement/Commentary |
| dave_gerhardt | 53 | 428 | 1,981 | Teacher (65%) | Marketing | List Post |
| gregor_ojstersek | 52 | 327 | 1,137 | Teacher (81%) | Engineering | Listicle/Breakdown |
| luca_rossi | 40 | 121 | 280 | Teacher (67%) | Engineering | Observation/Opinion |
| jordan_crawford | 63 | 102 | 395 | Teacher (57%) | GTM/Sales | Short Punch |
| jen_erickson | 38 | 23 | 156 | Teacher (58%) | Marketing | Observation/Opinion |

---

## FINDING 1: HOOK TYPES — WHAT WORKS

### Raw Engagement (all posts, min 5 posts)

| Hook Type | Count | Median | Mean | P90 | Max |
|-----------|-------|--------|------|-----|-----|
| Experimenter | 32 | 512 | 657 | 1,111 | 3,128 |
| Fortune Teller | 94 | 502 | 954 | 2,226 | 8,497 |
| Teacher | 271 | 501 | 832 | 2,014 | 11,148 |
| Contrarian | 71 | 447 | 641 | 1,665 | 4,376 |
| Magician | 19 | 313 | 1,017 | 2,523 | 5,488 |
| Investigator | 9 | 277 | 339 | 635 | 699 |

### Normalized (relative to creator's average)

| Hook Type | Avg Relative Performance |
|-----------|------------------------|
| Contrarian | 3.2x |
| Fortune Teller | 2.9x |
| Teacher | 2.6x |
| Magician | 2.4x |
| Experimenter | 2.0x |

### Over/Under-Representation in Top 10% Outliers

| Hook Type | Overall % | Outlier % | Diff | Signal |
|-----------|-----------|-----------|------|--------|
| Magician | 3.8% | 8.0% | +4.2pp | OVER (2.09x) |
| Fortune Teller | 19.0% | 22.0% | +3.0pp | OVER (1.16x) |
| Teacher | 54.6% | 56.0% | +1.4pp | Neutral |
| Contrarian | 14.3% | 10.0% | -4.3pp | UNDER (0.70x) |
| Experimenter | 6.5% | 4.0% | -2.5pp | UNDER (0.62x) |

### SYNTHESIS: Hook Types

**Teacher** is the workhorse — 55% of all posts, reliable median. Use as your default.

**Fortune Teller** is the sweet spot — high volume AND high ceiling. Over-represented in outliers. Best for "industry is shifting" and "what's coming next" angles.

**Magician** is high-risk/high-reward — only 4% of posts but 8% of outliers (2.09x over-represented). Best for "$X billion" or "counterintuitive number" hooks. Use sparingly.

**Contrarian** is overrated in raw terms (under-represented in outliers at 0.70x) BUT the highest relative performer when normalized (3.2x). Interpretation: contrarian posts don't go viral in absolute terms, but they dramatically outperform a creator's own average. Good for engagement within your existing audience; won't break through to new audiences.

**Investigator** and **Experimenter** both underperform. Avoid as primary hook types.

---

## FINDING 2: POST STRUCTURE — WHAT WORKS

### Raw Engagement

| Structure | Count | Median | Mean | P90 | Max |
|-----------|-------|--------|------|-----|-----|
| Statement -> Commentary | 5 | 2,149 | 3,974 | 7,943 | 11,148 |
| Story -> Twist -> Lesson | 3 | 2,568 | 2,602 | 3,372 | 3,573 |
| List Post | 266 | 534 | 933 | 2,244 | 8,497 |
| Story | 23 | 613 | 868 | 2,030 | 3,371 |
| Observation/Opinion | 128 | 426 | 543 | 1,290 | 2,862 |
| Short Punch | 49 | 103 | 280 | 521 | 4,667 |

### Over/Under-Representation in Top 10% Outliers

| Structure | Overall % | Outlier % | Diff | Ratio |
|-----------|-----------|-----------|------|-------|
| List Post | 53.6% | 66.0% | +12.4pp | 1.23x OVER |
| Statement -> Commentary | 1.0% | 8.0% | +7.0pp | **7.94x OVER** |
| Story -> Twist -> Lesson | 0.6% | 4.0% | +3.4pp | **6.61x OVER** |
| Observation/Opinion | 25.8% | 8.0% | -17.8pp | **0.31x UNDER** |
| Short Punch | 9.9% | 2.0% | -7.9pp | **0.20x UNDER** |

### Normalized (relative performance, top 40)

| Structure | Count | Avg Relative Perf |
|-----------|-------|--------------------|
| Story | 3 | 4.4x |
| Statement -> Commentary | 1 | 3.2x |
| Observation/Opinion | 13 | 2.6x |
| List Post | 20 | 2.5x |

### SYNTHESIS: Structure

**List Post** is the dominant winning format. 53.6% of all posts, 66% of outliers. Safe, replicable, high floor.

**Statement -> Commentary** is the single biggest alpha signal: only 1% of posts use it, but 8% of outliers (7.94x ratio). This is james_hawkins's meme format — short provocative statement, then commentary. Massively underused.

**Story -> Twist -> Lesson** is another hidden gem (6.61x ratio). Rarely used but disproportionately represented in top performers.

**Story** has the highest normalized performance (4.4x relative) but small sample size.

**Observation/Opinion is a trap** — 25.8% of posts but only 8% of outliers (0.31x). People default to it, but it rarely breaks through.

**Short Punch almost never works** — 9.9% of posts, 2% of outliers (0.20x ratio). Brevity alone is not a strategy.

---

## FINDING 3: TOPIC — WHAT WORKS

### Over/Under-Representation in Top 10% Outliers

| Topic | Overall % | Outlier % | Diff | Signal |
|-------|-----------|-----------|------|--------|
| AI/ML/Coding Tools | 14.1% | 32.0% | +17.9pp | **MASSIVE OVER** (2.27x) |
| System Design | 3.0% | 12.0% | +9.0pp | **OVER** (3.97x) |
| AI/Tech industry hype | 1.2% | 8.0% | +6.8pp | **OVER** (6.61x) |
| Engineering Career | 8.3% | 12.0% | +3.7pp | OVER |
| Productivity | 2.6% | 6.0% | +3.4pp | OVER |
| GTM/Sales | 25.6% | 0.0% | -25.6pp | **ZERO OUTLIERS** |
| Marketing | 11.3% | 0.0% | -11.3pp | **ZERO OUTLIERS** |
| AI/Automation | 12.9% | 4.0% | -8.9pp | UNDER |

### Normalized Performance (top 40, controlling for creator size)

| Topic | Count in Top 40 | Avg Relative Perf |
|-------|-----------------|-------------------|
| Marketing | 5 | 3.0x |
| AI/Tech industry hype | 2 | 2.9x |
| Engineering Leadership | 5 | 2.8x |
| AI/Automation | 9 | 2.7x |
| AI/ML/Coding Tools | 5 | 2.4x |
| GTM/Sales | 6 | 2.4x |

### SYNTHESIS: Topic

**The raw vs. normalized analyses tell DIFFERENT stories:**

**Raw says:** Technical content (AI/ML, System Design, Engineering) massively outperforms. GTM/Sales and Marketing produce ZERO outliers.

**Normalized says:** Marketing and GTM/Sales posts DO over-perform relative to their creators' averages (3.0x and 2.4x). They just don't produce absolute viral numbers because those creators have smaller audiences.

**For Stacksync:**
- **Technical infrastructure content** (data pipelines, system design, AI/ML tools) has the highest absolute ceiling. Posts like "ETL vs. ELT", "Kafka vs. RabbitMQ", "How data sync works" can break through to massive audiences.
- **GTM/Sales and Marketing posts** work well for engaging your existing ICP but won't go viral in absolute terms. They over-perform within-audience (2.4-3.0x) but can't compete with technical explainers for reach.
- **AI-adjacent framing** is a multiplier. "AI/Tech industry hype" has a 6.61x ratio in outliers. Connecting data infrastructure topics to AI narratives (like the Salesforce AI post does) is the highest-ceiling approach.

---

## FINDING 4: VISUAL FORMAT

| Visual Format | Overall % | Outlier % | Ratio |
|---------------|-----------|-----------|-------|
| Meme with extended caption | 0.6% | 6.0% | **9.92x** |
| Meme with minimal caption | 0.6% | 4.0% | **6.61x** |
| Text-only | 97.8% | 88.0% | 0.90x |

### SYNTHESIS: Visuals

**Memes are the single most over-represented format in outliers** (9.92x for extended caption). But sample size is tiny (3 posts each, all from james_hawkins).

**Text-only is the proven workhorse** — 88% of outliers, 97.8% of all posts. Reliable, zero production cost.

**For Stacksync:** Use memes strategically (1 in 5-6 posts). The Spider-Man meme banger (244 engagement) already proved this works for Ruben. Text-only is the default.

---

## FINDING 5: FORMATTING & LENGTH

### Word Count (Top 50 by raw engagement)

| Bucket | % of Top 50 |
|--------|-------------|
| 0-50 words | 20% (memes/images) |
| 51-100 | 8% |
| 101-150 | 10% |
| 151-200 | 16% |
| **201-300** | **40%** |
| 301-500 | 6% |

- **Average: 168 words. Median: 176 words.**
- **The sweet spot for text posts is 200-300 words** (40% of top 50 land here)
- Current Stacksync target (270-330) is at the upper end of this range — consider allowing shorter posts (200-270)

### Line Breaks

- **Average: 7 blank lines per post**
- **Average total lines: 19**
- **Ratio: 1 blank line per ~27 words**
- 80% of top posts use 0-10 blank lines
- This confirms: **nearly every sentence gets its own line** on LinkedIn

---

## FINDING 6: TOP COMBINATIONS

### Best Hook x Structure Combos (min 5 posts, by median)

| Hook Type | Structure | Count | Median | Mean | P90 |
|-----------|-----------|-------|--------|------|-----|
| Teacher | Story | 12 | 588 | 797 | 1,964 |
| Teacher | List Post | 142 | 559 | 910 | 2,233 |
| Contrarian | List Post | 35 | 543 | 817 | 1,990 |
| Fortune Teller | List Post | 55 | 518 | 1,146 | 2,683 |
| Teacher | Observation/Opinion | 68 | 518 | 633 | 1,491 |

### High-Alpha Combos (small sample but massive over-representation)

| Combo | Outlier Ratio | Note |
|-------|--------------|------|
| Any hook + Statement -> Commentary | 7.94x | Only 1% of posts, 8% of outliers |
| Any hook + Story -> Twist -> Lesson | 6.61x | Only 0.6% of posts, 4% of outliers |
| Meme + any structure | 9.92x | Only 1.2% of posts, 10% of outliers |
| Fortune Teller + Story | highest median (963) | Only 4 posts, but all performed well |

---

## FINDING 7: CREATORS TO REPLICATE

### For Stacksync's ICP (B2B SaaS / data infrastructure)

**Tier 1 — Most replicable models:**
- **kyle_poyar** (6 posts in normalized top 40): Data-backed opinion posts, pricing analysis, SaaS metrics. Strong for Nacho (GTM) and Ruben (CEO/founder) voices.
- **jordan_crawford** (6 posts in normalized top 40): Short, punchy GTM takes. AI automation angles. Good for Carter (young commercial) voice.
- **dave_gerhardt** (5 posts in normalized top 40): Marketing philosophy, contrarian takes on CMO role. Good for thought leadership angles.

**Tier 2 — Study for specific formats:**
- **alex_xu**: The king of technical List Posts. His formula (topic hook -> numbered breakdown -> "Over to you" CTA) is extremely replicable for technical content about data pipelines, sync architectures, etc.
- **gergely_orosz**: "Reporting from the frontier" approach. Insider access, industry analysis. Good for Alexis (CTO) voice.
- **james_hawkins**: Meme/humor format. Statement -> Commentary. Absurdist tech satire. Good for occasional high-variance posts.

**Tier 3 — Limited replicability for Stacksync:**
- **milan_jovanovic**, **nicola_ballotta**, **louie_bacaj**: Solid technical content but lower ceilings
- **marty_kausas**: Startup/founder content (high engagement but data mostly missing)

---

## ACTIONABLE PLAYBOOK FOR STACKSYNC

### Default Formula (70% of posts)
- **Hook:** Teacher or Fortune Teller
- **Structure:** List Post
- **Topic:** Data infrastructure, system design, or AI-adjacent technical content
- **Length:** 200-300 words
- **Format:** Text-only, ~7 paragraph breaks, nearly every sentence on its own line
- **Expected outcome:** Reliable mid-range engagement, builds authority

### High-Ceiling Formula (20% of posts)
- **Hook:** Magician ("$X billion" / counterintuitive number) or Fortune Teller ("industry is shifting")
- **Structure:** Statement -> Commentary or Story -> Twist -> Lesson
- **Topic:** AI + data infrastructure intersection, Salesforce ecosystem, competitive landscape
- **Format:** Text-only or meme
- **Expected outcome:** Higher variance, but 7-10x over-representation in outliers

### Audience Growth Formula (10% of posts)
- **Hook:** Contrarian
- **Structure:** List Post or Story
- **Topic:** Industry hot take (e.g., "ETL is dead", "iPaaS is the problem")
- **Format:** Text-only
- **Expected outcome:** Highest within-audience over-performance (3.2x), strong for engagement from existing ICP

### What to STOP Doing
1. **Observation/Opinion posts** — 25.8% of all posts, only 8% of outliers. 0.31x ratio. Default lazy format.
2. **Short Punch posts** — 9.9% of posts, 2% of outliers. 0.20x ratio. Brevity without structure fails.
3. **Investigator hooks** — lowest engagement across all metrics.
4. **Pure GTM/Sales or Marketing topics** without a technical angle — zero representation in raw outliers. Frame GTM content through a technical or data lens instead.

### What to START Doing More
1. **Statement -> Commentary** structure (7.94x outlier ratio, massively underused)
2. **Story -> Twist -> Lesson** structure (6.61x outlier ratio)
3. **Meme posts** (9.92x outlier ratio, at least 1 per 5-6 posts)
4. **AI-adjacent framing** of data infrastructure topics (6.61x outlier ratio for "AI/Tech industry hype")
5. **Competitive comparison posts** naming specific tools (30% of top 50 in raw rankings)

---

## APPENDIX: Top 15 Replicable Posts (Normalized)

| # | Creator | Rel. Perf | Raw Eng | Hook | Topic | Structure |
|---|---------|-----------|---------|------|-------|-----------|
| 1 | dave_gerhardt | 4.6x | 1,981 | Contrarian | Marketing | Story |
| 2 | nicola_ballotta | 4.0x | 2,110 | Contrarian | Eng Leadership | List Post |
| 3 | jordan_crawford | 3.9x | 395 | Teacher | Marketing | Observation |
| 4 | kyle_poyar | 3.5x | 2,042 | Teacher | AI/Automation | Story |
| 5 | james_hawkins | 3.2x | 11,148 | Teacher | AI/Tech hype | Statement/Commentary |
| 6 | kyle_poyar | 3.1x | 1,811 | Contrarian | AI/Automation | List Post |
| 7 | gregor_ojstersek | 3.0x | 1,137 | Teacher | Eng Leadership | N/A |
| 8 | james_hawkins | 2.6x | 9,196 | Teacher | AI/Tech hype | Meme/Image |
| 9 | gergely_orosz | 2.4x | 3,452 | Fortune Teller | AI/ML/Coding | Question |
| 10 | jordan_crawford | 2.3x | 237 | Teacher | GTM/Sales | List Post |
| 11 | kyle_poyar | 2.3x | 1,354 | Teacher | GTM/Sales | List Post |
| 12 | jordan_crawford | 2.3x | 236 | Magician | AI/Automation | Observation |
| 13 | jordan_crawford | 2.2x | 225 | Magician | AI/Automation | List Post |
| 14 | kyle_poyar | 2.1x | 1,204 | Fortune Teller | GTM/Sales | List Post |
| 15 | dave_gerhardt | 2.0x | 872 | Teacher | Marketing | Observation |

*Note: Posts #1-2 from original top 40 (chris_walker exit, kyle_poyar solopreneur announcement, jordan_cutler promotion) excluded as non-replicable career milestones that slipped through the topic filter.*

---

*Analysis compiled from 4 parallel agents processing all_posts.csv and kallaway_summary.csv files across 15 creators in `/04_linkedin_content/accounts_research/`.*
