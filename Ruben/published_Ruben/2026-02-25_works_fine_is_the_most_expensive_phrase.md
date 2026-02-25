---
name: cost_good_enough_integration_ruben
description: The real cost of "works fine" integration — specific numbers, recognizable patterns, founder close on what winning companies do differently
domain: business
node_type: linkedin-post
status: published
last_updated: 2026-02-25
published_date: 2026-02-25
tags:
  - integration
  - engineering-cost
  - operations
topics:
  - hidden integration costs
  - engineering overhead
  - data sync economics
related_concepts:
  - "[[ruben_personality_v01]]"
link: https://www.linkedin.com/posts/ruben-burdin_works-fine-is-the-most-expensive-phrase-activity-7432216280167890944-EA0T
image: images/2026-02-25_works_fine_is_the_most_expensive_phrase.jpg
---

# RUBEN — What "Works Fine" Actually Costs
## Angle: Cost math on "good enough" integration — specific numbers, recognizable patterns, and what the companies getting it right are actually doing.

---

## IDEA LEGOS
| Lego | Choice |
|------|--------|
| User's Insight | "Works fine" integration carries a real, calculable cost that never shows up on any P&L. The math makes the invisible visible. |
| Topic | The true cost of integration that "mostly works" |
| Angle | Ruben as founder who has seen this pattern across dozens of companies, presenting the numbers |
| Hook Type | Magician — lead with cost reveal, make the invisible visible through math |
| Story Structure | Bold opener → List (what "works fine" looks like inside) → The math → Compounding → Founder close |
| Psych Triggers | Vindication, Pattern Recognition, Curiosity Gap |
| Visual Format | text-only |
| Key Visuals | N/A |

---

### HOOK A (Recommended)
"Works fine" is the most expensive phrase in enterprise software.

The math makes it visible in about 10 minutes.

### HOOK B
Every company I talk to says their integration "works fine."

Then I ask four questions. The math always surprises them.

---

### VISUAL FORMAT SUGGESTIONS

**Option A (Recommended): Number Hero — "$75K" stat card**
A single dominant stat — "$75K/year" — in IBM Plex Sans 600, large, centered on a dark bg (#08080E) with accent in #4589FF. SQUARE 1:1 (1080×1080). Subline reads: "The invisible cost of 'works fine' integration." The image creates the question (why $75K?) and the hook answers it (the math of "good enough"). Reader sees the number, reads the post, then the number lands with full weight.
Asset tags: [TYPE] [DATA]

**Option B: Split card — "What you see vs. what it costs"**
LANDSCAPE 16:9 (1920×1080). Left dark panel: "Works fine." Right dark panel with #4589FF accent elements listing the four hidden symptoms (reconciliation calls, known issues, watched syncs, engineer rotation). The binary is the concept — left vs. right IS the message. No logos needed.
Asset tags: [TYPE] [SVG]

**Option C: Data Viz — Ratio Bar showing engineering time allocation**
SQUARE 1:1 (1080×1080). Dark bg. A horizontal bar segmented: 25% highlighted in #4589FF labeled "Sync maintenance" versus 75% in dim gray labeled "Everything else." Caption: "Two engineers. One quarter of their time. Just on plumbing." Converts the abstract math into a visual ratio the reader immediately maps onto their own team.
Asset tags: [DATA] [SVG]

---

### FULL POST (using Hook A)

---

"Works fine" is the most expensive phrase in enterprise software.

The math makes it visible in about 10 minutes.

What "works fine" looks like from the inside:

Two engineers with a quarter of their time on maintenance and monitoring.

A monthly reconciliation call between finance and sales that's been on the calendar so long nobody remembers why it started.

At least one "known issue" that's been known for 9 months and will be fixed "next quarter."

A sync that breaks just often enough that someone has to watch it.

Now the math.

Rough math: two engineers, roughly a quarter of their time in our experience across dozens of companies, $150K average salary.

That's somewhere around $75K a year in invisible overhead. One full engineer. Spent entirely on plumbing.

That number doesn't shrink. Every new customer adds volume. Every new field adds a mapping. Every API deprecation becomes a fire drill. The maintenance curve goes one direction.

And it never shows up as a line item. It shows up as "engineering bandwidth" and "Q3 capacity issues" and "we're stretched thin right now."

The companies winning on operations right now don't have better integrations than everyone else. They have fewer of them. One sync layer that runs invisibly. No owner, no rotation, no post-mortem. And the ones they have don't need watching.

That's what we're building at Stacksync. Not faster integrations.

Integrations that disappear.

---

## NOTES
- **Voice**: Data-grounded, not preachy. Specific numbers do the argument. Lists are recognizable enough that engineers will tag their managers. Close is clean conviction, not a sales pitch.
- **Template source**: Kyle Poyar data-backed observation format — bold observation, specific numbers, conclusion tied to larger trend.
- **Idea Legos**: Magician (cost numbers) + List → Founder close confirmed
- **Narrative arc**: Bold opener ("works fine" = expensive) → "I can quantify it" (credibility) → four-point fingerprint (recognition) → the math ($75K/year) → compounding (it doesn't shrink) → why it's invisible → transition into winning companies → what winning companies do (fewer integrations, expanded) → Stacksync close ("integrations that disappear")
- **Psychological triggers**: Vindication (I knew it was costing us) + Pattern Recognition (I've seen that reconciliation call) + Curiosity Gap (what's the actual number?)
- **Hook analysis (Kallaway)**: Single subject: "works fine" integration cost. Single question: "How expensive is it really?" "See more" char count: ~78. Fits mobile: yes.
- **AI slop check**: Clean. No em dashes. No "Here's" constructions.
- **Changes from v1**: "Significant chunk" corrected to "a quarter of their time" to match the math section (internal consistency fix). Canonical cost number is $75K throughout — matches the math shown (2 engineers × $150K × 25%). Slack channel removed from list (deconflicted with cto_pattern post); replaced with "sync that breaks just often enough that someone has to watch it." Added transition line before "companies winning" paragraph. Expanded "fewer integrations" with one concrete supporting line before close.
- **Word count**: ~259
- **Factual sources**: $150K average engineer salary — industry standard (Levels.fyi 2025 averages). 25% maintenance figure — Ruben's observational baseline from customer conversations. $75K overhead math is derived (2 × $150K × 0.25), clearly illustrative.
