# Idea Legos Pattern Guide for Stacksync

## Source Analysis
Analyzed top 50 LinkedIn posts by engagement from Product-Led Storytelling accounts (founders of Recall.ai, Pylon, Vapi).

**Data Location:** `/accounts_analysis/Product_Led_Storytelling/top50_idea_legos_complete.csv`

---

## Pattern Summary

### Hook Types That Work

| Hook Type | % of Top Posts | Best For |
|-----------|----------------|----------|
| **Teacher** | 30% | Lessons learned, frameworks, playbooks |
| **Contrarian** | 22% | Challenge assumptions, provocative takes |
| **Magician** | 20% | Numbers, dramatic statements, pattern interrupts |
| **Fortune Teller** | 18% | Announcements, predictions, launches |
| **Experimenter** | 8% | Results from testing, spending reveals |
| **Investigator** | 2% | Hidden insights, decoded meanings |

### Visual Formats

| Format | Count | Usage |
|--------|-------|-------|
| **Image** | 46% | Documents, team photos, screenshots, graphics |
| **Text-only** | 32% | Pure story posts, lessons, contrarian takes |
| **Video** | 20% | Product launches, announcements, behind-scenes |
| **Document** | 2% | Pitch decks, playbooks (carousel-style) |

### Topics That Perform

1. **Company Milestones** (10%) - Fundraising, awards, growth
2. **Product Launches** (10%) - New features, updates
3. **Company Culture** (10%) - Team, values, behind-scenes
4. **Founder Journey** (6%) - Personal stories, lessons
5. **Sales/GTM** (6%) - Playbooks, frameworks, tactics

---

## Top 10 Posts - Idea Legos Breakdown

### #1: "The exact deck that got us $10M" (3,629 engagement)

| Lego | Element |
|------|---------|
| **Topic** | Fundraising/Pitch Decks |
| **Angle** | Radical transparency - sharing exact materials |
| **Hook** | Magician - Direct value offer with number |
| **Hook Text** | "The exact deck that got us $10M last year. Copy whatever you want." |
| **Structure** | Hook → Bullet list → Product pivot → CTA |
| **Format** | Image (pitch deck cover) |
| **Rhythm** | Varied - short and medium with whitespace |

**Why it worked:** Immediate value promise + specific number + permission to steal

---

### #2: "Announcing Pylon's Series B" (3,573 engagement)

| Lego | Element |
|------|---------|
| **Topic** | Company Milestone |
| **Angle** | Social proof through customer names |
| **Hook** | Fortune Teller - Announcement |
| **Hook Text** | "Announcing Pylon's Series B led by a16z and BCV." |
| **Structure** | Announcement → Social proof → Why us → Vision |
| **Format** | Video |
| **Rhythm** | Varied with whitespace |

**Why it worked:** Authority investors + customer name-drops + "why now" narrative

---

### #3: "The biggest unlock between $1M and $10M" (3,558 engagement)

| Lego | Element |
|------|---------|
| **Topic** | Startup Messaging |
| **Angle** | Counterintuitive insight (messaging > product) |
| **Hook** | Teacher - Lesson from experience |
| **Hook Text** | "The biggest unlock between $1M and $10M ARR wasn't product or sales. It was messaging." |
| **Structure** | Problem → Wrong approach → Lesson → Solution |
| **Format** | Text-only |
| **Rhythm** | Varied |

**Why it worked:** Specific revenue brackets + unexpected insight + numbered steps

---

### #4: "BREAKING NEWS: We just raised $38M" (3,145 engagement)

| Lego | Element |
|------|---------|
| **Topic** | Fundraising Announcement |
| **Angle** | Authority through investor names |
| **Hook** | Fortune Teller - Breaking news |
| **Hook Text** | "BREAKING NEWS: We just raised our $38M Series B..." |
| **Structure** | Breaking news → Origin story → Social proof → Product |
| **Format** | Video |
| **Rhythm** | Varied |

**Why it worked:** "Breaking news" pattern interrupt + big number + origin story

---

### #5: "I'm sick of vague fundraising advice" (3,004 engagement)

| Lego | Element |
|------|---------|
| **Topic** | Fundraising Playbook |
| **Angle** | Anti-fluff, practical resource |
| **Hook** | Contrarian - Frustration-driven |
| **Hook Text** | "I'm sick of vague fundraising advice." |
| **Structure** | Pain point → Promise → Bullet list → CTA |
| **Format** | Image (document preview) |
| **Rhythm** | Varied |

**Why it worked:** Frustration hook resonates + promise of concrete value + bullet list preview

---

## Patterns to Apply to Stacksync

### Hook Formulas That Work

**Magician (Number + Value):**
- "The exact [resource] that got us [result]. Copy whatever you want."
- "[Big number]. That's what [problem] cost us last year."

**Contrarian (Challenge + Truth):**
- "I'm sick of [common advice]. Here's what actually works."
- "[Common belief]. They're wrong. Here's why."
- "Stop [common practice]. It's killing your [metric]."

**Teacher (Lesson + Framework):**
- "The biggest unlock between [$X] and [$Y] wasn't [obvious]. It was [surprising]."
- "[Number] things I learned after [experience]."
- "Here's exactly how we [solved problem]."

**Fortune Teller (Prediction + Urgency):**
- "This is going to change how [audience] [action] forever."
- "INTRODUCING: [Product]. The first [category] built for [ICP]."

### Story Structures That Convert

1. **Problem → Wrong Approach → Lesson → Solution**
   Best for teaching moments

2. **Hook → Bullet List → Product Pivot → CTA**
   Best for resource posts

3. **Contrarian Hook → Personal Failure → Lesson → Advice**
   Best for authority building

4. **Announcement → Social Proof → Why Us → Vision**
   Best for milestones/launches

5. **Pain Point → Promise → Contents → CTA**
   Best for lead magnets

### Rhythm Rules

- **Use whitespace liberally** - Every top post has paragraph breaks
- **Mix sentence lengths** - Short punchy + longer explanatory
- **Lists work** - Bullet points in 60%+ of top posts
- **First line stands alone** - Hook is own paragraph

---

## Stacksync Application Examples

### Example 1: Magician Hook for Stacksync

**Original pattern:** "The exact deck that got us $10M. Copy whatever you want."

**Stacksync version:**
```
The exact field mapping template that saved us 40 hours of sync debugging.

Steal it.

After helping 100+ companies set up NetSuite ↔ Salesforce sync,
we noticed the same 3 mapping mistakes every time.

So we built the template we wish we had on Day 1.

What's inside:
- Standard object mappings (Account, Contact, Opportunity)
- Common custom field patterns
- Currency handling rules
- Conflict resolution logic

Comment "MAP" and I'll send it over.
```

### Example 2: Contrarian Hook for Stacksync

**Original pattern:** "I'm sick of vague fundraising advice."

**Stacksync version:**
```
I'm sick of integration vendors saying "bi-directional sync."

Most of them are lying.

Here's what they actually do:
- One-way sync from A → B (runs every 15 min)
- One-way sync from B → A (runs every 15 min)
- Call it "bi-directional"

The problems:
- 30-minute round-trip latency
- Conflicts handled by "last write wins" (data loss)
- No awareness of what changed where

True bi-directional means:
- Sub-second latency
- Conflict detection and resolution
- Both systems always in lock-step

If your vendor can't explain their conflict resolution strategy,
you don't have bi-directional sync.

You have two one-way jobs pretending.
```

### Example 3: Teacher Hook for Stacksync

**Original pattern:** "The biggest unlock between $1M and $10M ARR wasn't product or sales. It was messaging."

**Stacksync version:**
```
The biggest unlock for our customers' quote-to-cash cycle wasn't
a new CRM. It wasn't more headcount. It was sync latency.

At one customer, here's what we found:

Sales closes a deal in Salesforce.
→ Finance manually updates NetSuite (1-2 days)
→ Someone reconciles the discrepancy (4 hours)
→ Invoice goes out (finally)

Total time: 3-5 days

With real-time sync:
Sales closes a deal.
→ NetSuite updates in <1 second
→ Invoice triggers automatically
→ Cash in 24 hours

Same process. 5x faster.

The bottleneck wasn't people. It was the latency between systems.
```

---

## Quick Reference: Building Your Post

### Step 1: Choose Your Hook Type
- **Teaching something?** → Teacher hook
- **Challenging a belief?** → Contrarian hook
- **Have a big number?** → Magician hook
- **Announcing something?** → Fortune Teller hook
- **Sharing results?** → Experimenter hook

### Step 2: Pick Your Structure
- Resource post → Hook → Bullet list → CTA
- Lesson post → Problem → Wrong way → Right way → Advice
- Milestone post → Announcement → Proof → Why → Future

### Step 3: Format Check
- First line = own paragraph
- Use whitespace between ideas
- Mix short + medium sentences
- Include a list if possible
- End with CTA or question

### Step 4: Visual Decision
- Sharing a resource? → Image (document preview)
- Personal story? → Text-only or personal photo
- Product launch? → Video demo
- Data insight? → Image (chart/infographic)

---

## Files Created

1. **`top50_idea_legos_complete.csv`** - Full analysis of 50 top posts
2. **`top50_posts_raw.json`** - Raw post data with URLs
3. **This guide** - Pattern reference for content creation

Use the CSV to study specific posts when creating new content. Find posts with similar topics/angles to yours and analyze what made them work.
