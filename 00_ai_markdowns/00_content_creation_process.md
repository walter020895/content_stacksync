# Content Creation Process — Stacksync LinkedIn

The single source of truth for how posts go from idea to published.

**North Star:** Every post must serve the ICP defined in `00_ai_markdowns/00_icp_stacksync.md`. If the target buyer (CTO, VP Engineering, Director RevOps, Head of Business Systems) wouldn't stop scrolling for it, the post doesn't ship.

---

## FOLDER STRUCTURE

```
04_linkedin_content/
├── 00_ai_markdowns/              ← Central knowledge base (process, ICP, slops, auditor, etc.)
├── 02_content_creation_resources/ ← Kallaway transcripts, playbooks, interviews
├── 07_Content Pilars/            ← Company biographies & GTM studies
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
└── Tony/
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

| Persona | Role | Lens | Frames everything as... |
|---------|------|------|------------------------|
| **Ruben** | CEO/Founder | Business & vision | Founder story, market bets, why we built this, conviction |
| **Alexis** | CTO | Technical architecture | How it works, code vs code, engineering tradeoffs, builder lens |
| **Nacho** | GTM Philosopher | Pragmatic business reality | Revenue math, operational constraints, pricing as weapon, "That's it." |
| **Carter** | Young Commercial | Eager learner, sales energy | Educational, accessible, "let me explain this to you," DMs open |
| **Tony** | Industry Veteran | iPaaS/integration experience | Market comparisons, vendor landscape, Celigo background, "Just math." |

**Rule:** Before writing, ask: "Would this person ACTUALLY say this, given their role and experience?" If Ruben is writing about code comparisons, stop. If Alexis is writing a founder story, stop. The persona defines the angle.

---

## THE PROCESS (7 Steps)

### Step 1: IDEA LEGOS — Decompose Before Writing

**Source framework:** Kallaway's 7 Idea Legos
**Reference docs:**
- `/Users/TERABYTE10/Downloads/Moi/references/kallaway_clone.md` — Master framework (7 Legos, hook mastery, story structures)
- `02_content_creation_resources/Content_Creation_Process_Stacksync.md` — [REFERENCE] Early Stacksync adaptation (5 Legos + image specs). Valuable for image specifications and post formulas by persona type. Uses Jack/James as external models, not team personas.
- `00_ai_markdowns/13_idea_legos_patterns_guide.md` — Proven patterns from top 50 posts

**The 7 Idea Legos (decompose EVERY post into these before writing):**

| # | Lego | What to define | Example (Heroku Connect) |
|---|------|---------------|--------------------------|
| 1 | **Topic** | One-sentence summary | "Heroku Connect's End of Sale and what it means" |
| 2 | **Angle** | The unique spin per persona | Ruben: post-mortem story. Alexis: SQL vs API architecture. |
| 3 | **Hook** | 1-3 sentences. Single subject, single question. | "In 2014, Heroku Connect bet your CRM should be a Postgres table." |
| 4 | **Story Structure** | How the narrative unfolds | Problem → Wrong approach → Lesson → Solution |
| 5 | **Visual Format** | Image, text-only, video, document? | Text-only (story post) |
| 6 | **Key Visuals** | If image: what exactly? (pie chart, architecture diagram, screenshot, etc.) | N/A for text-only |
| 7 | **Audio** | N/A for LinkedIn text posts | N/A |

**For LinkedIn text posts, the critical Legos are 1-4. Legos 5-7 apply when using images/video.**

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

**Output of Step 1:** A filled Idea Legos table for each post, with Topic, Angle, Hook Type, and Story Structure chosen BEFORE any writing starts.

---

### Step 1b: CAMPAIGN DECONFLICTION (Multi-Voice Only)

If 2+ personas write on the same topic, fill this table AFTER completing each persona's Idea Legos. The personas should naturally differentiate through their lens (see Persona Roles above), but this table catches any remaining overlap.

```markdown
## Campaign Deconfliction: [Topic Name]

| Element | Ruben | Alexis | Nacho | Carter | Tony |
|---------|-------|--------|-------|--------|------|
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

### Step 2: RESEARCH & FACT GATHERING
**Input:** Idea Legos (especially Topic + Angle)
**Output:** Verified facts, sources, quotes

1. Research the topic (web search, internal docs, Sequin blog, etc.)
2. For every number, quote, or claim — write down the SOURCE
3. Verify quotes are real and in the right context
4. Check dates and timelines
5. Record all sources — these go in the NOTES section of the post

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

**Post file format:**
```markdown
# [PERSONA] — [Post Title]
## Angle: [One-line description]

---

## IDEA LEGOS
| Lego | Choice |
|------|--------|
| Topic | |
| Angle | |
| Hook Type | [Teacher/Contrarian/Magician/Fortune Teller/Experimenter/Investigator] |
| Story Structure | [e.g., News → What It Was → What Happens Now] |
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

### FULL POST (using Hook [X])

---

[Full post body — 270-330 words MAX]

---

## NOTES
- **Voice**: [Persona voice markers used]
- **Idea Legos**: [Hook type] + [Story structure] confirmed
- **Narrative arc**: [Beat-by-beat story flow]
- **Psychological triggers**: [Trigger 1] + [Trigger 2] from triggers library
- **Ego bait**: [Who feels seen and why — run egobait checklist if post mentions a company/team]
- **Hook analysis (Kallaway)**: Single subject: [X]. Single question: [Y]. 3-step: Context Lean [text] → Scroll Stop [text] → Snap Back [text]. "See more" char count: [N]. Fits mobile preview: [yes/no].
- **Traffic driver**: [ICP keywords in hook]
- **AI slop check**: [Confirm clean — list any patterns caught and removed]
- **Word count**: [~XXX]
- **Factual sources**: [Every claim with source]
```

**Hard rules during writing:**
- 270-330 words MAX for post body
- Hook: 1-3 sentences, front-load the angle
- The persona's LENS determines the framing (see Persona Roles table)
- Check every line against `01_ai_slops.md` blacklist
- No em dashes
- No "Here's" constructions
- End with the persona's signature style, not a generic close

---

### Step 4: AUDIT (Post-Auditor-Agent)
**Input:** Draft post
**Output:** Scored audit report with GO / REVISE / KILL verdict

Run the Post-Auditor-Agent (`00_ai_markdowns/16_Post-Auditor-Agent.md`) on every post.

**5 Dimensions scored:**
1. ICP Relevance (25%) — Does the right buyer care?
2. Factual Accuracy (25%) — Can every claim be sourced?
3. Readability (20%) — Hook strength, flow, word count
4. AI Slop (15%) — Cross-reference against `01_ai_slops.md`
5. Reading Pleasure (15%) — Voice authenticity, emotional impact

**Verdicts:**
- **GO (8.0+):** Ready to publish
- **REVISE (6.0-7.9):** Fix flagged issues, re-audit
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

1. Publish on LinkedIn
2. Add to YAML frontmatter:
   - `status: published`
   - `published_date: YYYY-MM-DD`
   - `link: [LinkedIn URL]`
3. Move file from `drafts_[Persona]/` → `published_[Persona]/` (rename to `YYYY-MM-DD_title_slug.md`)

---

## REFERENCE DOCS INDEX

| Doc | Path | Used In |
|-----|------|---------|
| **Kallaway Clone (Master)** | `/Users/TERABYTE10/Downloads/Moi/references/kallaway_clone.md` | Step 1 (7 Idea Legos, hook mastery, story structures) |
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
[ ] Step 1:  Idea Legos filled (Topic, Angle, Hook Type, Story Structure, Visual Format)
[ ] Step 1b: Deconfliction table created (if multi-voice campaign)
[ ] Step 2:  Facts researched, every claim has a source
[ ] Step 3:  Draft written with persona lens + AI slops loaded BEFORE writing
[ ] Step 4:  Post-Auditor-Agent returns GO (8.0+)
[ ] Step 5:  Cross-post check passed (if multi-voice)
[ ] Step 6:  Human review and approval
[ ] Step 7:  Published, YAML updated, file moved from drafts_[Persona]/ to published_[Persona]/
```
