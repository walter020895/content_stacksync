# Content Creation Process — Stacksync LinkedIn

The single source of truth for how posts go from idea to published.

**North Star:** Every post must serve the ICP defined in `00_ai_markdowns/00_icp_stacksync.md`. If the target buyer (CTO, VP Engineering, Director RevOps, Head of Business Systems) wouldn't stop scrolling for it, the post doesn't ship.

---

## CONTENT SOURCE MODEL

Every post is built from one of two modes. Both produce bangers. Neither is better than the other.

**Mode 1 — Insight-Led** *(use when a persona has something real to share)*
The persona provides an observation, experience, or story from their world.
→ That insight becomes Lego 0, preserved verbatim.
→ World knowledge supports and validates it.
→ The persona's voice frames it for the ICP.

**Mode 2 — World-Knowledge-Led** *(default when no persona input exists)*
No insight from the persona. The world already has the story.
→ Mine public events, market patterns, company histories, industry data.
→ The persona's lens determines WHICH story to tell and HOW to frame it.
→ The persona provides the CHARACTER LAYER — not the content source.

**The rule: never wait for a persona insight to write a great post.**

The bangers prove this. Plaid's story is public. Oracle's exit is public. Heroku Connect's shutdown is public. Visa's $5.3B acquisition attempt is public. What makes them Stacksync posts is Nacho's operator conviction, Ruben's founder lens, Alexis's architectural read. The persona is the filter, not the factory.

**Why this matters operationally:** Personas are busy. Waiting for insights creates bottlenecks. The world generates new stories every day — company pivots, acquisitions, market shifts, industry patterns. The job is to find the story that maps to the persona's angle and the ICP's pain, then tell it in that persona's voice.

**Lego 0 in Mode 2:** When no user insight exists, Lego 0 becomes the world story:
*"[Company / Event / Pattern] + [what it reveals through this persona's lens]"*
Example: "Plaid built a consumer app. The painful backend became the product."
→ Nacho's lens turns it into: "The invisible layer always wins."
→ The story is public. The conviction is Nacho's.

---

## FOLDER STRUCTURE

```
04_linkedin_content/
├── 00_ai_markdowns/              ← Central knowledge base (process, ICP, slops, auditor, etc.)
├── 02_content_creation_resources/ ← Kallaway transcripts, playbooks, interviews
├── 01_Content Pilars/            ← Company biographies & GTM studies
├── accounts_research/            ← Creator intelligence (15 accounts, CSVs, outliers)
│
├── Ruben/                        ← Each persona is a self-contained folder
│   ├── ruben_personality_v01.md  ← Persona voice guide (DO NOT EDIT during post creation)
│   ├── README.md
│   ├── drafts_Ruben/             ← Active drafts (WIP)
│   ├── published_Ruben/          ← Published posts + images
│   │   ├── images/
│   │   └── ruben_all_published_kallaway.csv
│   ├── bangers_Ruben/            ← Top-performing posts + images
│   │   └── images/
│   └── research_Ruben/           ← Outlier analysis, datasets, idea legos insights
│
├── Alexis/                       ← Same subfolder pattern as Ruben
├── Nacho/
├── Carter/
└── Tony/ (archived — retired persona)
```

### File Naming Convention

| Folder | Convention | Example |
|--------|-----------|---------|
| **drafts_[Persona]/** | `[topic_slug]_[persona].md` | `data_engineers_dead_nacho.md` |
| **published_[Persona]/** | `YYYY-MM-DD_[title_slug].md` | `2026-02-04_why_we_built_stacksync.md` |
| **bangers_[Persona]/** | `BANGER_[PERSONA]_YYYY-MM-DD_[title_slug].md` | `BANGER_RUBEN_2026-01-15_oracle_diaspora.md` |

### When a post is published
1. Add `status: published` and `published_date: YYYY-MM-DD` to the YAML frontmatter
2. Move the file from `drafts_[Persona]/` to `published_[Persona]/`, renaming to the `YYYY-MM-DD_title_slug.md` convention
3. Add the LinkedIn post URL to the YAML `link:` field
4. If the post qualifies as a banger (high engagement), copy it to `bangers_[Persona]/` with the `BANGER_` prefix

---

## PERSONA ROLES (Primary Differentiator)

The persona IS the first guard against overlap. Each person frames the SAME topic through a completely different lens. If the personas are strong enough, the content differentiates naturally.

**Canonical reference:** `00_ai_markdowns/00_personas.md` — single source of truth for all personas, lenses, connector pairings, and voice docs. Update that file when adding or retiring personas; do not maintain persona lists here.

→ Active personas, lenses, connector pairings, and voice doc paths: **`00_ai_markdowns/00_personas.md`**

**Rule:** Before writing, ask: "Would this person ACTUALLY say this, given their role and experience?" The persona defines the angle.

---

## THE PROCESS (7 Steps)

### Step 1: IDEA LEGOS — Decompose Before Writing

**Source framework:** Kallaway's 7 Idea Legos
**Reference docs:**
- `kallaway_clone.md` (external file — see your local copy) — Master framework (7 Legos, hook mastery, story structures)
- `02_content_creation_resources/Content_Creation_Process_Stacksync.md` — [REFERENCE] Early Stacksync adaptation (5 Legos + image specs). Valuable for image specifications and post formulas by persona type. Uses Jack/James as external models, not team personas.
- `00_ai_markdowns/13_idea_legos_patterns_guide.md` — Proven patterns from top 50 posts

**The 7 Idea Legos (decompose EVERY post into these before writing):**

| # | Lego | What to define | Example (Heroku Connect) |
|---|------|---------------|--------------------------|
| 0 | **User's Insight** | The user's original idea, preserved verbatim | "Heroku Connect is shutting down and nobody's talking about it" |
| 1 | **Topic** | One-sentence summary | "Heroku Connect's End of Sale and what it means" |
| 2 | **Angle** | The unique spin per persona | Ruben: post-mortem story. Alexis: SQL vs API architecture. |
| 3 | **Hook** | 1-3 sentences. Single subject, single question. | "In 2014, Heroku Connect bet your CRM should be a Postgres table." |
| 4 | **Story Structure** | How the narrative unfolds | Problem → Wrong approach → Lesson → Solution |
| 5 | **Psych Triggers** | 1-2 triggers from the Psychological Triggers Library (below) | Vindication + Curiosity Gap |
| 6 | **Visual Format** | Image, text-only, video, document? | Text-only (story post) |
| 7 | **Key Visuals** | If image: what exactly? (pie chart, architecture diagram, screenshot, etc.) | N/A for text-only |

**Lego 0 (User's Insight)** preserves the original idea verbatim. The packaging changes through Legos 1-7; the core idea does NOT. Always verify the Angle still serves the original insight.

**For LinkedIn text posts, the critical Legos are 0-5. Legos 6-7 apply when using images/video.**

#### Hook Architecture: The 3-Step Formula (Kallaway)

Every hook, regardless of type, must follow this 3-step structure:

| Step | Name | Job | What to write |
|------|------|-----|---------------|
| 1 | **Context Lean** | Establish what the post is about. Reader self-selects in. | Common ground, pain point, or benefit. Super clear. Reader must instantly know the topic. |
| 2 | **Scroll Stop Interjection** | A single line that stuns. Reader freezes. | Uses contrast words: "but," "however," "yet," "although." Acts like a stun gun before the snap. |
| 3 | **Contra Snap Back** | Goes in the OPPOSITE direction from the context. Creates the curiosity loop. | The bigger the shock vs. the context lean, the stronger the hook. Reader can't stop reading. |

**Example (Heroku Connect — Ruben):**
- **Context Lean:** "In 2014, Heroku Connect bet your entire CRM should live in a Postgres table."
- **Scroll Stop:** "For a decade, it worked."
- **Snap Back:** "Last month, Salesforce killed it."

**LinkedIn "See More" Constraint:**
- Mobile shows ~150 characters before "see more." Desktop shows ~210 characters.
- **Design for mobile first.** The Context Lean + Scroll Stop must fit BEFORE "see more" — this is the only text the reader sees while scrolling.
- The Snap Back can land right after "see more" — it rewards the click and pulls them into the body.
- If the full 3-step hook exceeds ~150 characters, the Context Lean alone must be compelling enough to earn the tap.
- **Test:** Read only the text that fits before "see more." Would YOU tap? If not, compress or rewrite.

#### Hook Type Selection (from pattern library)

Pick the hook archetype BEFORE writing. The type determines the KIND of contrast in your 3-step hook:

| Hook Type | % of Top Posts | Best For | Contrast Pattern |
|-----------|---------------|----------|------------------|
| **Teacher** | 30% | Lessons, frameworks, playbooks | "Everyone does X. The unlock was actually Y." Context = common approach. Snap = surprising lesson. |
| **Contrarian** | 22% | Challenge assumptions, provocative takes | "Everyone believes X. They're wrong." Context = conventional wisdom. Snap = direct flip. Most explicit contrast. |
| **Magician** | 20% | Numbers, dramatic statements, pattern interrupts | "[Big number]. That's what [problem] cost us." Context = setup. Snap = dramatic stat or visual stun. Can combine with any other type. |
| **Fortune Teller** | 18% | Announcements, predictions, news | "X is how things work today. That's about to change." Context = present reality. Snap = future shift. |
| **Experimenter** | 8% | Test results, spending reveals | "We used to do X. We tested Y instead." Context = old method. Snap = new method + result. Peer-to-peer tone. |
| **Investigator** | 2% | Hidden insights, decoded secrets | "Nobody knows about X. We found it." Context = what everyone sees. Snap = what's hidden underneath. |

#### Story Structure Selection

Pick the story structure BEFORE writing:

| Structure | Best For |
|-----------|----------|
| Problem → Wrong Approach → Lesson → Solution | Teaching moments |
| Hook → Bullet List → Product Pivot → CTA | Resource posts |
| News → What It Was → What Happens Now → Death/Consequence | News reaction (like Heroku posts) |
| Contrarian Hook → Personal Failure → Lesson → Advice | Authority building |
| Announcement → Social Proof → Why Us → Vision | Milestones/launches |
| Pain Point → Promise → Contents → CTA | Lead magnets, resource posts |

**Reader Value checkpoint (mandatory before moving to Step 2):** After filling the Idea Legos table, answer this question in one sentence: *"What does the ICP walk away knowing, able to do, or better equipped to decide after reading this?"* If you can't answer it specifically — not "they'll understand integration better" but something like "they'll be able to tell if their stack has real bi-directional sync or two one-way pipes" — the idea needs sharpening before writing starts. This becomes D6 in the audit. Fix it now, not after the draft.

**Output of Step 1:** A filled Idea Legos table for each post, with User's Insight, Topic, Angle, Hook Type, Story Structure, Psych Triggers, and Reader Value answer chosen BEFORE any writing starts.

---

### Step 1b: CAMPAIGN DECONFLICTION (Multi-Voice Only)

If 2+ personas write on the same topic, fill this table AFTER completing each persona's Idea Legos. The personas should naturally differentiate through their lens (see Persona Roles above), but this table catches any remaining overlap.

```markdown
## Campaign Deconfliction: [Topic Name]

| Element | Ruben | Alexis | Nacho | Carter | Brittany |
|---------|-------|--------|-------|--------|---------|
| Angle (from Lego #2) | | | | | |
| Hook type (from Lego #3) | | | | | |
| Story structure (from Lego #4) | | | | | |
| Reserved stat/number | | | | | |
| Emotional beat | | | | | |
| CTA type | none/soft/direct | | | | |
| Stacksync features mentioned | yes/no | | | | |
```

**Rule:** If two personas have the same hook type AND the same story structure, one of them needs to change. The angles should already be different because of the persona lens.

---

### Step 1c: VISUAL HOOK SUGGESTIONS

**The Image-Hook-Image Loop (core principle):**
The image and the post hook are ONE MESSAGE delivered twice. Person sees image → reads hook → looks at image again. The second look must land differently — deeper, confirmed, reinforced. Design every card for the second look, not just the first. If the image and hook say different things, it's a scroll-past.

**Alignment test:** Can you look at ONLY the visual and understand the same message as the hook? If not, revise.

**Text-only override:** If the persona/topic works best as text-only, state that explicitly and explain why. (Nacho's personal conviction posts often work better text-only.)

---

**How to pick 3 visual concepts — answer these 5 questions in order:**

1. **Company mentioned?** → Consider Logo-Featured (Brand Callout, Brand vs Brand, Market Map)
2. **Person/founder mentioned?** → Consider Person/Founder (Portrait, Quote Portrait, Stat Behind Person)
3. **Cultural reference fits naturally?** → Consider Cultural Reference (Distracted Boyfriend, Iceberg, This Is Fine)
4. **What's the data shape?** One big stat → Typographic (Number Hero, Verdict). Proportion/ratio → Data Viz (Ratio Bar). List/ranking → Infographic (Ranked List). Timeline → Data Viz (Timeline).
5. **What's the emotional arc?** Binary war → Split layout (1920×1080). Authority → Document/Authority (Classified, Brief). Complexity exposed → Infographic.

Always pick 3 concepts from DIFFERENT categories. Never all typographic. Never all dark.

**Full format library (33 formats, 7 categories):** See `05_card_generator/` — Typographic, Logo-Featured, Person/Founder, Data Visualization, Infographic, Document/Authority, Cultural Reference.

**Match hook type to visual direction:**
| Hook Type | Visual Direction |
|-----------|-----------------|
| Teacher | Chart, diagram, process visual, timeline |
| Contrarian | Comparison table, "vs" layout, Split (1920×1080) |
| Magician | Number Hero, stacked bar chart, dramatic stat card |
| Fortune Teller | Announcement visual, calendar, timeline with deadline |
| Experimenter | Before/after split, screenshot comparison |
| Investigator | Architecture diagram, code screenshot, data table |

**For each post, provide:**
```
### VISUAL HOOKS
**Option A (Recommended):** [Format name + description + why it matches the hook + image-hook-image loop]
**Option B:** [Format name + description + why it matches the hook]
**Option C:** [Format name + description + why it matches the hook]

Resources needed: [Logo / photo / none — WHY each matters emotionally, not just visually]
```

**Card generation:** Take the chosen visual concept to `05_card_generator/` to build the card once the post is approved (Step 7).

---

### Step 2: RESEARCH & FACT GATHERING
**Input:** Idea Legos (especially Topic + Angle)
**Output:** Verified facts, sources, quotes

1. Research the topic (web search, internal docs, Sequin blog, etc.)
2. For every number, quote, or claim — write down the SOURCE
3. Verify quotes are real and in the right context
4. Check dates and timelines
5. Record all sources — these go in the NOTES section of the post

**GATE: No draft begins until every claim passes fact-check.**
- Before writing, list every number, stat, date, and factual claim you plan to use
- Verify each against a primary source (earnings report, press release, official docs)
- For each claim, record: claim → source → verified (yes/no)
- If a claim can't be verified, don't use it. Find a verified alternative or cut it.
- Inferred claims (e.g., "their community asks about X" based on ICP docs, not actual community data) are NOT verified. Only use what you can point to a specific source for.
- Use the latest available data. If a number has been updated by a newer earnings report or filing, use the new number. Stale stats erode trust.

---

### Step 3: WRITE THE DRAFT (Assemble the Legos)

**Input:** Filled Idea Legos table + persona doc + verified facts
**Output:** Draft post with hook variations + full post + NOTES

**Reference docs to load BEFORE writing:**
- The persona's writing guide: `[Persona]/[name]_personality_v01.md`
- `00_ai_markdowns/01_ai_slops.md` — blacklist (load BEFORE writing, not after)
- `00_ai_markdowns/08_stacksync_Description.md` — product reference (6 products, features, competitive positioning, messaging angles). Use for accurate product claims and terminology.
- The Idea Legos table from Step 1 (hook type + story structure already chosen)
- The campaign deconfliction table (if multi-voice)

**Assembly order:**
1. Write 3 hook variations using the chosen hook type from Step 1. Each hook must follow the 3-step formula: Context Lean → Scroll Stop → Contra Snap Back.
2. Apply the **Single Subject / Single Question** test to each hook:
   - **Single Subject:** The hook talks about ONE thing. Not two topics. Not a comparison of three tools. One subject.
   - **Single Question:** After reading the hook, the reader has exactly ONE question they need answered. That question pulls them into the post.
   - If the hook plants two questions or covers two subjects, split it or pick one.
3. Apply the **"See More" Fit** test to each hook:
   - Paste the hook text and count characters. The Context Lean + Scroll Stop must fit in ~150 characters (mobile preview).
   - Read ONLY those ~150 characters. Would you tap "see more"? If not, compress or rewrite.
   - The Snap Back can land right after "see more" — it rewards the tap.
4. Pick the strongest hook
5. Write the body following the chosen story structure from Step 1, applying hook-to-body connection rules (see below)
6. End with the persona's signature close (not a generic line)
7. Cross-check every line against `01_ai_slops.md`

**Hook-to-Body Connection Rules (Kallaway):**
The hook creates a curiosity loop. The body must CONFIRM and then EXCEED the expectation the hook set. If the body doesn't deliver on the hook's promise, the reader feels cheated and disengages.

- **First line of body must confirm the hook's promise.** The reader just tapped "see more" because the hook planted a question. The first line after the hook must signal: "Yes, you're about to get the answer."
- **Put your 2nd-best point first, best point second.** This creates ascending value. The reader recognizes a pattern: "This keeps getting better." If you put the best point first, everything after feels like a decline and they stop reading.
- **Use rehooks between sections.** Mini-transitions that maintain momentum between points. Examples: "That was the first problem. The second one was worse." / "But that's not what killed the deal." These prevent attention decay mid-post.
- **No bait-and-switch.** The hook type determines the body's frame. A Contrarian hook must deliver a genuine contrarian argument in the body. A Teacher hook must deliver a real lesson. If the hook promises a number (Magician), the body must deliver that number early.

#### Psychological Triggers Library

When choosing the emotional angle for the hook, pick 1-2 triggers from this table. The trigger amplifies the hook type — a Contrarian hook with a Vindication trigger hits harder than a Contrarian hook alone.

| Trigger | Description | Example |
|---------|-------------|---------|
| **Outrage/Fear** | Big company villain, system is rigged | "Google doesn't want you to know this" |
| **Validation** | "You're not crazy, proof exists" | "90% of spreadsheets don't have formulas" |
| **Schadenfreude** | Villain gets outsmarted | "Larry Ellison is worth $150B. He still lost this fight." |
| **Vindication** | Rejection becomes success | "'Get a proper job.' $10.2B acquisition later..." |
| **Curiosity Gap** | Incomplete info creates tension | "Shopify was a $200 billion accident." |
| **Tribal Identity** | "This is for people like us" | "The introvert's revenge" |
| **Pattern Recognition** | Smart insight connecting dots | "Slack, Instagram, Shopify = same story" |
| **Underdog** | David vs Goliath | "A 16-year-old dropout built the second-largest e-commerce platform" |
| **Conspiracy** | Hidden truth revealed | "What Oracle couldn't see coming" |
| **Contrast** | Unexpected comparison | "Gary Vee was screaming on camera. Dharmesh was hiding behind plants." |
| **Age-Defying** | Success at unexpected age | "At 64, Oracle took his company. At 65, he started building again." |
| **Geographic Luck** | Location as unfair advantage/disadvantage | "Spotify had Stockholm. Zendesk had nothing." |
| **Romantic/Human** | Unexpected personal detail | "He moved countries for a girl he met gaming online." |
| **Famous Parallel** | Same story, different domain | "Decca told The Beatles no. Danish VCs told Zendesk no." |
| **Milestone Proof** | Numbers that silence critics | "$1M ARR. Self-funded. That's when Benchmark called." |

#### Celebrity/Company Name-Drop Rules

When referencing real companies, founders, or public figures in a post, apply these rules:

1. **Real Connection** — They actually interacted or invested. "The PayPal founders said payments were solved. Then they funded Stripe."
2. **Contrast (Difference IS The Point)** — Opposite approaches that both worked. "Gary Vee was screaming on camera. Dharmesh was hiding behind plants. Both built empires."
3. **Pattern** — Multiple examples prove the same phenomenon. "Slack was a failed video game. Instagram was a check-in app. Shopify was a snowboard store."
4. **Same Era** — They competed or built simultaneously. "Spotify and Zendesk launched months apart. 300 miles apart. Opposite ecosystems."
5. **Parallel Rejection** — Same story of rejection, different domain. "'Guitar groups are on their way out.' — Decca to The Beatles. 'Get a proper job.' — Danish VCs to Zendesk."

**The Swap Test:** Could you swap in any other company/person and the connection still works? If YES, the connection is forced — find a better angle. If NO, it's specific and valid — use it.

#### Egobait Checklist

When the post mentions a real company, team, or community, it should make those people want to share it. Check:
- [ ] They feel proud of their story as told
- [ ] They'd want to share it on their LinkedIn
- [ ] They'd tag colleagues
- [ ] They feel like insiders to a story worth telling
- [ ] Their values are reflected accurately

#### Writing Style Rules

- Lead with conflict, numbers, fear, curiosity, or controversy — not names
- Specific > Generic ("$125 million spacecraft" not "expensive project")
- Numbers that feel real (not rounded): $10.2B, not "billions"
- Create callbacks to the hook at the end of the post
- Short sentences work. Fragments too.
- Show conflict, don't just state it happened

#### LinkedIn Formatting Rules

LinkedIn is a mobile-first, scroll-reading platform. Dense paragraphs kill posts regardless of how good the ideas are. These rules ensure every post is visually packaged for the feed.

**A. One-Thought-Per-Line Rule**
- Each sentence gets its own visual line
- Max 2 short, closely related sentences per paragraph block
- 3+ sentences in one block = break it up
- Single-word/phrase punch lines are weapons ("Speed.", "Deleted.", "That's it.")

**B. Breathing Room Rule**
- Blank line between every paragraph
- After every 2-3 content lines, create a beat of air
- No paragraph should exceed 3 lines on mobile (~40 words)
- Mobile screen = ~6-8 visible lines. If one screen looks dense, reformat.

**C. Bullet Points (→) for Parallel Items**
- 3+ parallel items = use → bullets, not prose
- One idea per bullet, one line per bullet
- Setup line → blank line → bullets → blank line → continue prose

**D. Conversational Connectors (the "friend at dinner" test)**
Use natural bridges between sections, not formal transitions.

Approved connectors by tone:
- **Pivot**: "But that's not the interesting part." / "That was problem one."
- **Confession**: "To be honest," / "Look." / "And honestly?"
- **Curiosity pull**: "You know what happened next?" / "Guess what they found."
- **Grounding**: "The thing is," / "That part I get. What I don't get is..."
- **Momentum**: "That's when it changed." / "Then it got worse."

BANNED transitions: "Furthermore," "Additionally," "In conclusion," "Moreover," "It's worth noting" (essay-speak), plus any from the AI slops list.

Persona-connector pairings (lean into these): → see `00_ai_markdowns/00_personas.md`

**E. The "Phone Scroll Test"**
- Read the post imagining it on a phone screen
- Each screen should feel light, never hit a text wall
- If you wouldn't read it on your phone in a cafe, reformat

**F. Rhythm Variation Rule**
- Alternate: short punches (1-5 words) → medium narrative (15-25 words) → occasional longer context (25-35 words)
- Never 3+ sentences of the same length back-to-back
- After a dense line, follow with a short punch

**Post file format:**
```yaml
---
name: [TOPIC_SLUG]
description: [One-line description of the post]
domain: business
node_type: linkedin-post
status: draft
last_updated: [TODAY'S DATE YYYY-MM-DD]
published_date:
tags:
  - [relevant tags]
topics:
  - [relevant topics]
related_concepts:
  - "[[concept1]]"
link:
image:
---
```

```markdown
# [PERSONA] — [Post Title]
## Angle: [One-line description]

---

## IDEA LEGOS
| Lego | Choice |
|------|--------|
| User's Insight | [the user's original idea, preserved verbatim] |
| Topic | |
| Angle | |
| Hook Type | [Teacher/Contrarian/Magician/Fortune Teller/Experimenter/Investigator] |
| Story Structure | [e.g., News → What It Was → What Happens Now] |
| Psych Triggers | [1-2 triggers from the Psychological Triggers Library] |
| Visual Format | [text-only / image / video] |
| Key Visuals | [if image: description] |

---

### HOOK A (Recommended)
[Hook text]

### HOOK B
[Hook text]

### HOOK C
[Hook text]

---

### VISUAL HOOKS
**Option A (Recommended):** [Description + why it matches the hook]
**Option B:** [Description + why it matches the hook]
**Option C:** [Description + why it matches the hook]

---

### FULL POST (using Hook [X])

---

[Full post body — 270-330 words MAX]

---

## NOTES
- **Voice**: [Persona voice markers used]
- **Idea Legos**: [Hook type] + [Story structure] confirmed
- **Reader value**: [One sentence — what the ICP walks away knowing or able to do]
- **Narrative arc**: [Beat-by-beat story flow]
- **Psychological triggers**: [Trigger 1] + [Trigger 2] from triggers library
- **Ego bait**: [Who feels seen and why — run egobait checklist if post mentions a company/team]
- **Hook analysis (Kallaway)**: Single subject: [X]. Single question: [Y]. 3-step: Context Lean [text] → Scroll Stop [text] → Snap Back [text]. "See more" char count: [N]. Fits mobile preview: [yes/no].
- **Traffic driver**: [ICP keywords in hook]
- **AI slop check**: [Confirm clean — list any patterns caught and removed]
- **Formatting check**: Phone scroll test [pass/fail]. Longest paragraph: [X sentences]. Connectors used: [list]. Single-sentence air lines: [count].
- **Redundancy sweep**: [Pass/fail — any duplicates found and removed]
- **Connector pass**: [Connectors added at section jumps — list them]
- **Word count**: [~XXX]
- **Factual sources**: [Every claim with source]
```

**Hard rules during writing:**
- 270-330 words MAX for post body (but never pad to hit word count — 160 tight words beat 300 bloated ones)
- Hook: 1-3 sentences, front-load the angle
- The persona's LENS determines the framing (see Persona Roles table)
- **Sentence-level slop guard:** Check each sentence AS you write it against `01_ai_slops.md`. The #1 trap is flip formulas (#6, #21, #22, #25, #26) — they creep in during storytelling rewrites because they're the easiest way to create contrast. If you catch yourself writing "This isn't X. It's Y." or "Not X. Y." or "It wasn't X. It was Y." — stop, rewrite with a specific claim, causal connector, or natural "but" instead. Don't write first and scan later. Scan while writing.
- No em dashes
- No "Here's" constructions
- End with the persona's signature style, not a generic close
- **Story replacement rule:** If a human/story element gets removed during revision (a scene, anecdote, dialogue, or community detail), the next rewrite must include a replacement human element — a different scene, action, or moment. Never replace story with more analysis. Analysis without any human element reads as a Wikipedia summary.

#### Post-Writing Quality Passes

Run these four passes IN ORDER after the draft is written, before sending to audit.

**Pass 1: Time-to-Value Compression**
- Every sentence must earn its spot. If removing it loses nothing, cut it.
- No redundancy. If two sentences make the same point, keep the stronger one.
- Don't say in a paragraph what a scorecard or single line can say. Don't scorecard what a paragraph already covered. Pick one format.
- The audience's time is the scarcest resource. Respect it.

**Pass 2: Redundancy Sweep**
Read the post backwards, section by section. For each claim or contrast, ask: "Did I already establish this earlier?" If yes, one must go. Establish a fact ONCE, then build on it. Never restate it in different words for emphasis. Common trap: stating a contrast in a data section (e.g., "$0 ad budget") then restating it as prose later ("We're spending zero"). The data point does the work. The prose should advance, not repeat.

**Pass 3: Connector Pass**
Stripping for compression kills connective tissue first because transitions look like "filler." They're not. Without them, the post reads like a list of facts — robotic, AI-generated.

After stripping, re-read the post and identify every **section jump** (where the post shifts from one idea to the next). At each jump, ask: "Would a human just slam these two ideas together, or would they bridge them?" If the answer is bridge, add a connector.

Good connectors are contextual — they reference the specific topic, not a generic formula. Test: could you paste this connector into any other post and it still works? If yes, it's too generic. Rewrite it. Reference the approved connectors by tone and persona-connector pairings in Section D of LinkedIn Formatting Rules above.

**Rule:** Every post with 3+ sections needs at least ONE human connector. A post without connectors is a post that sounds like AI wrote it.

**Pass 4: Phone Scroll Test**
Read the post imagining it on a phone screen (see Section E of LinkedIn Formatting Rules above):
- Every paragraph ≤ 2 sentences?
- Connectors between sections sound like a friend talking?
- At least 3 single-sentence "air" lines in the post?
- Bullet points (→) used for any list of 3+ items?
- No text wall longer than 3 lines on mobile?

---

### Step 4: AUDIT (Post-Auditor-Agent)
**Input:** Draft post
**Output:** Scored audit report with GO / REVISE / KILL verdict

Run the Post-Auditor-Agent (`00_ai_markdowns/16_Post-Auditor-Agent.md`) on every post.

**7 Dimensions scored:**
1. ICP Relevance (20%) — Does the right buyer care? Check against `00_icp_stacksync.md` + `07_stacksync_icp_terms_an_tags.md`
2. Factual Accuracy (20%) — Can every claim be sourced? Check against `05_list_of_connectors.md` for product claims + web search every claim
3. Readability & Attention (20%) — Hook strength, narrative momentum, word economy, coherence, closing
4. AI Slop Detection (10%) — Cross-ref every line against `01_ai_slops.md`
5. Reading Pleasure (10%) — Rhythm, white space, tone, vocabulary, emotional texture
6. Reader Value (15%) — Does the ICP walk away knowing or able to do something specific? Is this genuinely useful to a CTO, VP Eng, or RevOps Director, independent of whether they buy?
7. Visual-Hook Alignment (5%) — Does the suggested visual from Step 1c match the written hook's message? Would the visual alone tell the same story? (N/A for text-only posts — redistributes to D6)

**Override Rules (automatic, regardless of composite):**
- D2 (Factual Accuracy) score 3 or below → automatic **KILL**
- D4 (AI Slop) score 3 or below → automatic **REVISE** minimum
- D1 (ICP Relevance) score 3 or below → automatic **REVISE** minimum
- D6 (Reader Value) score 4 or below → automatic **REVISE** minimum

**AI Slop score caps:**
- 3-4 blacklisted patterns in a single post → D4 capped at 5
- 5+ blacklisted patterns → D4 capped at 3

**Verdicts:**
- **GO (8.0+):** Ready to publish
- **REVISE (6.0-7.9):** Fix flagged issues, re-audit. Provide Top 3 Fixes.
- **KILL (<6.0):** Rewrite from scratch

**Rule:** No post publishes without a GO verdict (8.0+).

---

### Step 5: CROSS-POST CHECK (Multi-Voice Campaigns Only)
**Input:** All posts in the campaign with GO verdicts
**Output:** Confirmed no cross-post issues

Read all posts as a SET and check:
- [ ] No repeated phrases across posts (especially emotional beats)
- [ ] No shared stats that should be exclusive to one persona
- [ ] Each post sounds like a different person wrote it (persona lens is clear)
- [ ] Stacksync pitch varies between posts (not copy-paste)
- [ ] Facts are consistent across posts (same dates, same scope)
- [ ] Deconfliction table was followed

---

### Step 6: FINAL REVIEW (Human)
**Input:** Audited posts
**Output:** Approved for publishing

The human reviews and:
- Confirms voice sounds right
- Confirms facts are accurate from their knowledge
- Confirms the campaign tells a cohesive story across personas
- Makes any final edits
- Approves for publishing

---

### Step 7: PUBLISH & ARCHIVE
**Input:** Approved posts
**Output:** Published posts moved to archive

1. **If the post uses an image:** Run the card generator (`05_card_generator/`) using the approved visual concept from Step 1c. Save the generated PNG to `published_[Persona]/images/YYYY-MM-DD_title_slug.png` and update the YAML `image:` field.
2. Publish on LinkedIn
3. Add to YAML frontmatter:
   - `status: published`
   - `published_date: YYYY-MM-DD`
   - `link: [LinkedIn URL]`
4. Move file from `drafts_[Persona]/` → `published_[Persona]/` (rename to `YYYY-MM-DD_title_slug.md`)

---

## REFERENCE DOCS INDEX

| Doc | Path | Used In |
|-----|------|---------|
| **Kallaway Clone (Master)** | `kallaway_clone.md` (external file — see your local copy) | Step 1 (7 Idea Legos, hook mastery, story structures) |
| **Content Creation System** | `02_content_creation_resources/Content_Creation_Process_Stacksync.md` | Step 1 [REFERENCE] (image specs, post formulas by persona type. 5 Legos → use 7 from Kallaway master. Jack/James = external models, not team personas.) |
| **Idea Legos Patterns** | `00_ai_markdowns/13_idea_legos_patterns_guide.md` | Step 1 (hook types, story structures, Stacksync examples) |
| **Outlier Research (per persona)** | `[Persona]/research_[Persona]/outliers_raw.csv` + `idea_legos_analysis.csv` | Step 1 (per-persona outlier posts with Idea Lego breakdowns: hook types, structures, angles) |
| **Creator Research** | `accounts_research/[creator]/[creator]_kallaway_summary.csv` | Step 1 (15 creators with post datasets + Kallaway metrics) |
| Content Strategy | `00_ai_markdowns/11_content_strategy.md` | Step 1 (3-lane strategy, 5-persona exec role assignment) |
| ICP | `00_ai_markdowns/00_icp_stacksync.md` | Step 1, Step 4 (audit D1) |
| ICP Terms & Tags | `00_ai_markdowns/07_stacksync_icp_terms_an_tags.md` | Step 3, Step 4 (audit D1) |
| AI Slops Blacklist | `00_ai_markdowns/01_ai_slops.md` | Step 3 (during writing), Step 4 (audit D4) |
| Stacksync Product Description | `00_ai_markdowns/08_stacksync_Description.md` | Step 3 (product reference: 6 products, features, competitive positioning, messaging angles) + Step 4 (audit D2: fact-check product claims) |
| Post Auditor Agent | `00_ai_markdowns/16_Post-Auditor-Agent.md` | Step 4 (audit framework) |
| YAML Template | `00_ai_markdowns/17_simple-linkedin-post-template.md` | Step 3 (frontmatter format) |
| Persona Docs | `[Persona]/[name]_personality_v01.md` | Step 3 (voice, personality, lens) |
| List of Connectors | `00_ai_markdowns/05_list_of_connectors.md` | Step 4 (audit D2 — fact-check product claims, referenced by Post-Auditor-Agent) |
| Content Ideas | `00_ai_markdowns/12_content_ideas.md` | Step 1 (idea sourcing) |
| Kallaway Transcripts | `02_content_creation_resources/kallaway_transcripts/` | Step 1, Step 3 (8 transcripts: hooks, storytelling, packaging, psychology) |
| Creator Research | `accounts_research/` | Step 1 (15 accounts with post datasets + Kallaway summaries per creator) |

---

## QUICK PROCESS CHECKLIST

```
[ ] Step 1:   Idea Legos filled (User's Insight, Topic, Angle, Hook Type, Story Structure, Psych Triggers, Visual Format)
[ ] Step 1:   Reader Value answered — "What does the ICP walk away knowing or able to do?" (specific, not abstract)
[ ] Step 1b:  Deconfliction table created (if multi-voice campaign)
[ ] Step 1c:  Visual hook suggestions created (3 options, aligned with hook type)
[ ] Step 2:   Facts researched, every claim has a source
[ ] Step 2:   GATE PASSED — claim list verified (claim → source → yes/no), zero unverified claims in draft
[ ] Step 3:   Draft written with persona lens + sentence-level slop guard active DURING writing
[ ] Step 3a:  Time-to-Value Compression pass (every sentence earns its spot)
[ ] Step 3b:  Redundancy Sweep pass (no fact stated twice in different words)
[ ] Step 3c:  Connector Pass (at least 1 human connector at section jumps)
[ ] Step 3d:  Phone Scroll Test pass (no text walls, air lines, ≤2 sentences per paragraph)
[ ] Step 4:   Post-Auditor-Agent returns GO (8.0+)
[ ] Step 5:   Cross-post check passed (if multi-voice)
[ ] Step 6:   Human review and approval
[ ] Step 7:   Published, YAML updated, file moved from drafts_[Persona]/ to published_[Persona]/
```
