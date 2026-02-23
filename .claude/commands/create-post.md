---
description: Create a LinkedIn post following the Stacksync content creation process. Usage: /create-post [persona] [your insight/angle]
---

You are executing the Stacksync LinkedIn content creation process. Follow every step precisely. Do not skip steps. Do not reorder steps.

## CONTENT SOURCE MODE

Every post operates in one of two modes. Both produce great content.

**Mode 1 — Insight-Led:** The user provides a real observation, experience, or story from the persona's world. Capture it verbatim as Lego 0. Package it using the process.

**Mode 2 — World-Knowledge-Led (default when no insight provided):** The persona is busy. The world already has the story — company pivots, acquisitions, market shifts, industry patterns. Mine world knowledge for the story that maps to the persona's angle and the ICP's pain. The persona is the CHARACTER LAYER (voice, conviction, lens), not the content source.

**Rule: never wait for a persona insight. If the user doesn't provide one, activate Mode 2 immediately.**

See the full Content Source Model in `04_linkedin_content/00_ai_markdowns/00_content_creation_process.md`.

---

## STEP 0: LOAD CORE CONTEXT

Read these files BEFORE doing anything else:
1. `04_linkedin_content/00_ai_markdowns/00_content_creation_process.md` — master process (follow this exactly)
2. `04_linkedin_content/00_ai_markdowns/00_icp_stacksync.md` — ICP (north star)
3. `04_linkedin_content/00_ai_markdowns/01_ai_slops.md` — blacklist (load BEFORE writing, not after)
4. `04_linkedin_content/00_ai_markdowns/08_stacksync_Description.md` — product reference (6 products, features, competitive positioning)
5. `04_linkedin_content/00_ai_markdowns/07_stacksync_icp_terms_an_tags.md` — ICP language, terminology, tags
6. `04_linkedin_content/00_ai_markdowns/13_idea_legos_patterns_guide.md` — hook types with %, story structures, worked examples
7. `04_linkedin_content/00_ai_markdowns/11_content_strategy.md` — 3-lane strategy, 5-persona role assignment

---

## STEP 1: PARSE THE BRIEF

The user provided: $ARGUMENTS

Extract from the user input:
- **Persona:** Which persona? (Ruben/Alexis/Nacho/Carter/Brittany) — see `00_ai_markdowns/00_personas.md`
- **User's Insight:** The core idea, angle, or observation the user wants to write about

The user's insight is the SEED of the post. Preserve its essence. Your job is to find the best hook type, story structure, and packaging to make that insight land with the ICP.

If the persona is unclear, ask. If no insight is provided, activate Mode 2 (World-Knowledge-Led) immediately — see CONTENT SOURCE MODE above. Never wait for an insight.

Once you know the persona, also read:
- `04_linkedin_content/[Persona]/[name]_personality_v01.md` — persona voice guide
- Any existing posts in `04_linkedin_content/[Persona]/published_[Persona]/` (read 3-5 to calibrate voice)
- Any existing posts in `04_linkedin_content/[Persona]/bangers_[Persona]/` (read all to understand what performs)
- `04_linkedin_content/[Persona]/research_[Persona]/outliers_raw.csv` + `idea_legos_analysis.csv` — per-persona outlier posts with Idea Lego breakdowns

Then ask the user for anything still missing:
- **Lane:** Reach (category), Relevance (ICP pain), or Revenue (product proof)?
- **Any constraints?** News peg, specific stat to include, timing?

---

## STEP 2: IDEA LEGOS

Take the user's insight and package it into the Idea Legos table BEFORE writing anything:

```
| Lego | Choice |
|------|--------|
| User's Insight | [the user's original idea, preserved verbatim] |
| Topic | [one sentence distillation] |
| Angle | [the persona's unique spin on the user's insight] |
| Hook Type | [Teacher/Contrarian/Magician/Fortune Teller/Experimenter/Investigator] |
| Story Structure | [e.g., Problem → Wrong Approach → Lesson → Solution] |
| Psych Triggers | [1-2 triggers from the Psychological Triggers Library in the master process] |
| Visual Format | [text-only / image / video] |
| Key Visuals | [if image: what exactly] |
```

**Resources to consult:**
- `04_linkedin_content/00_ai_markdowns/13_idea_legos_patterns_guide.md` — hook types with %, structures (already loaded in Step 0)
- `kallaway_clone.md` (external file — see your local copy) — Kallaway master framework (7 Legos, hook mastery, story structures)
- `04_linkedin_content/[Persona]/research_[Persona]/` — outlier analysis for inspiration (already loaded in Step 1)
- `04_linkedin_content/accounts_research/` — 15 creators with Kallaway metrics (browse relevant creators for the hook type you're considering)

**Insight fidelity check:** Does the Angle preserve the user's original insight? The packaging changes, the core idea does NOT.

**Persona lens check:** Would this person ACTUALLY say this? → See `00_ai_markdowns/00_personas.md` for all persona lenses, connector pairings, and voice doc paths.

**Hook Architecture (Kallaway 3-Step Formula):**
Every hook must follow: Context Lean (establish topic, reader self-selects in) → Scroll Stop (contrast word: "but," "however," "yet" — stun gun) → Contra Snap Back (opposite direction, creates curiosity loop). The hook TYPE determines the KIND of contrast (see master process hook type table).

Show the Idea Legos to the user and get confirmation before proceeding.

---

## STEP 3: RESEARCH & FACT GATHERING

**Do NOT skip this step.** Before writing a single word, verify the facts.

1. **Web search** the topic. Find current data, sources, and context.
2. For every number, quote, or claim in the user's insight or your planned angle — find and record the **SOURCE** (URL + date).
3. **Verify quotes** are real and in the right context. (Lesson learned: Craig Kerstiens "starvation" quote was from 2022, not 2026.)
4. **Check dates and timelines** — confirm nothing is stale.
5. If the post references Stacksync product capabilities, verify against `04_linkedin_content/00_ai_markdowns/05_list_of_connectors.md`.
6. Record all sources — these go in the NOTES section of the final post file.

**Output of this step:** A list of verified facts with sources. If a claim can't be verified, flag it and either soften the language or remove it.

---

## STEP 4: VISUAL HOOK SUGGESTIONS

For every post, create 3 visual hook options that MATCH the written hook. The visual and the text must say the same thing. Misalignment = confusion = scroll-past.

**Match the visual to the hook type:**

| Hook Type | Visual Direction |
|-----------|-----------------|
| Teacher | Chart, diagram, process visual, timeline |
| Contrarian | Comparison table, "vs" layout, product teardown |
| Magician | Numbers graphic, stacked bar chart, dramatic stat card |
| Fortune Teller | Announcement visual, calendar, timeline with deadline |
| Experimenter | Before/after split, screenshot comparison |
| Investigator | Architecture diagram, code screenshot, data table |

**Proven LinkedIn visual specs:** Pie chart meme, architecture diagram, before/after split, Slack/alert screenshot mockup, stacked bar chart, side-by-side comparison, quote card with anchor stat, code screenshot comparison, vendor comparison table.

**For each post, provide:**
```
### VISUAL HOOKS
**Option A (Recommended):** [Description + why it matches the hook]
**Option B:** [Description + why it matches the hook]
**Option C:** [Description + why it matches the hook]
```

**Alignment test:** Can you look at ONLY the visual and understand the same message as the hook? If not, revise.

**Text-only override:** If the persona/topic works best as text-only, state that explicitly and explain why.

---

## STEP 5: WRITE THE DRAFT

**Load before writing (if not already loaded):**
- The persona's writing guide (from Step 1)
- `04_linkedin_content/00_ai_markdowns/01_ai_slops.md` (from Step 0)
- `04_linkedin_content/00_ai_markdowns/08_stacksync_Description.md` (from Step 0)
- The Idea Legos table from Step 2
- The verified facts from Step 3
- `04_linkedin_content/00_ai_markdowns/17_simple-linkedin-post-template.md` — YAML frontmatter template

**Assembly order:**
1. Write 3 hook variations using the chosen hook type. Each hook must follow the 3-step formula: Context Lean → Scroll Stop → Contra Snap Back.
2. Apply the **Single Subject / Single Question** test to each hook:
   - Single Subject: the hook talks about ONE thing. Not two topics. One subject.
   - Single Question: the reader has exactly ONE question pulling them into the post.
   - If the hook plants two questions or covers two subjects, split or pick one.
3. Apply the **"See More" Fit** test:
   - Context Lean + Scroll Stop must fit in ~150 characters (mobile preview before "see more").
   - Read ONLY those characters. Would you tap? If not, compress or rewrite.
   - The Snap Back can land right after "see more" — it rewards the tap.
4. Pick the strongest hook.
5. Write the body following the chosen story structure from Step 2. **Hook-to-body rules:**
   - First line after hook must CONFIRM the hook's promise (reader tapped "see more" for a reason)
   - Put 2nd-best point first, best point second (ascending value keeps them reading)
   - Use rehooks between sections ("That was the first problem. The second one was worse.")
   - No bait-and-switch: hook type determines the body's frame
6. End with the persona's signature close (not a generic line).
7. Cross-check every line against `01_ai_slops.md`.

**Hard rules:**
- 270-330 words MAX (but never pad to hit word count — 160 tight words beat 300 bloated ones)
- Hook: 1-3 sentences, front-load the angle
- No em dashes
- No "Here's" constructions
- Pick 1-2 psychological triggers from the triggers library (already chosen in Idea Legos)
- Apply celebrity/company name-drop rules if referencing real entities (Swap Test from master process)
- Run egobait checklist if post mentions a company/team

**Post-Writing Quality Passes (run IN ORDER after draft, before audit):**

**Pass 1: Time-to-Value Compression**
- Every sentence must earn its spot. If removing it loses nothing, cut it.
- No redundancy. If two sentences make the same point, keep the stronger one.
- Don't say in a paragraph what a scorecard or single line can say. Don't scorecard what a paragraph already covered. Pick one format.
- Maintain natural storytelling flow — not everything is a one-liner fragment. But no bloat either.
- The audience's time is the scarcest resource. Respect it.

**Pass 2: Redundancy Sweep**
Read the post backwards, section by section. For each claim or contrast, ask: "Did I already establish this earlier?" If yes, one must go. Establish a fact ONCE, then build on it. Never restate it in different words for emphasis. Common trap: stating a contrast in a data section (e.g., "$0 ad budget") then restating it as prose later ("We're spending zero"). The data point does the work. The prose should advance, not repeat.

**Pass 3: Connector Pass**
Stripping for compression kills connective tissue first because transitions look like "filler." They're not. Without them, the post reads like a list of facts — robotic, AI-generated.

After stripping, re-read the post and identify every **section jump** (where the post shifts from one idea to the next). At each jump, ask: "Would a human just slam these two ideas together, or would they bridge them?" If the answer is bridge, add a connector.

**Good connectors are contextual** — they reference the specific topic, not a generic formula. Test: could you paste this connector into any other post and it still works? If yes, it's too generic. Rewrite it.

**Reference the master process Section D (Conversational Connectors)** for approved connectors by tone. Persona-connector pairings: → see `00_ai_markdowns/00_personas.md`

Examples of GOOD connectors (specific, contextual):
- "This is the thing nobody tells you about building in a legacy category." (bridges evidence → insight, references the specific context)
- "That was the first problem." (rehook, creates anticipation for what's next)
- A question that bridges two specific sections

Examples of BAD connectors (generic, AI-sounding — already in slop list):
- "But here's the thing..."
- "Let me explain."
- "And that's just the beginning."
- "Furthermore," / "Additionally," / "In conclusion,"

**Rule:** Every post with 3+ sections needs at least ONE human connector. A post without connectors is a post that sounds like AI wrote it.

**Pass 4: Phone Scroll Test**
Read the post imagining it on a phone screen:
- Every paragraph ≤ 2 sentences?
- Connectors between sections sound like a friend talking?
- At least 3 single-sentence "air" lines in the post?
- Bullet points (→) used for any list of 3+ items?
- No text wall longer than 3 lines on mobile?

---

## STEP 6: AUDIT

Read and follow `04_linkedin_content/00_ai_markdowns/16_Post-Auditor-Agent.md` — this is the actual auditor agent specification with full rubrics, sub-criteria, and output format.

**The 7 Audit Dimensions (from the Post-Auditor-Agent):**

| Dimension | Weight | Reference Docs to Load |
|-----------|--------|----------------------|
| D1: ICP Relevance | 20% | `00_icp_stacksync.md` + `07_stacksync_icp_terms_an_tags.md` |
| D2: Factual Accuracy | 20% | `05_list_of_connectors.md` + web search every claim |
| D3: Readability & Attention | 20% | Hook quality, narrative momentum, word economy, coherence, closing |
| D4: AI Slop Detection | 10% | `01_ai_slops.md` — cross-ref every line |
| D5: Reading Pleasure | 10% | Rhythm, white space, tone, vocabulary, emotional texture |
| D6: Reader Value | 15% | Does the ICP walk away knowing or able to do something specific? |
| D7: Visual-Hook Alignment | 5% | Does the visual match the hook message? N/A for text-only (redistributes to D6) |

Formula: `(D1×0.20) + (D2×0.20) + (D3×0.20) + (D4×0.10) + (D5×0.10) + (D6×0.15) + (D7×0.05)`

**Override Rules (automatic, regardless of composite):**
- D2 (Factual Accuracy) score 3 or below → automatic **KILL**
- D4 (AI Slop) score 3 or below → automatic **REVISE** minimum
- D1 (ICP Relevance) score 3 or below → automatic **REVISE** minimum
- D6 (Reader Value) score 4 or below → automatic **REVISE** minimum

**AI Slop score caps:**
- 3-4 blacklisted patterns in a single post → D4 capped at 5
- 5+ blacklisted patterns → D4 capped at 3

**Verdicts:**
- **GO (8.0+):** Ready for human review
- **REVISE (6.0-7.9):** Fix flagged issues, re-audit
- **KILL (<6.0):** Rewrite from scratch

If REVISE: fix the flagged issues and re-audit. Provide Top 3 Fixes.
If KILL: rewrite from scratch starting at Step 5.

Use the full audit output format from `16_Post-Auditor-Agent.md` (the scored report with per-dimension breakdown, claims checked, patterns found, and Top 3 Fixes).

---

## STEP 7: SAVE

Save the finished post to: `04_linkedin_content/[Persona]/drafts_[Persona]/[topic_slug]_[persona_lowercase].md`

File naming: lowercase, underscores, no spaces. Example: `data_engineers_dead_nacho.md`

**The saved file must include YAML frontmatter** (template: `04_linkedin_content/00_ai_markdowns/17_simple-linkedin-post-template.md`):

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

**Then the full post file format:**

```markdown
# [PERSONA] — [Post Title]
## Angle: [One-line description]

---

## IDEA LEGOS
| Lego | Choice |
|------|--------|
| User's Insight | |
| Topic | |
| Angle | |
| Hook Type | |
| Story Structure | |
| Psych Triggers | |
| Visual Format | |
| Key Visuals | |

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
- **Narrative arc**: [Beat-by-beat story flow]
- **Psychological triggers**: [Trigger 1] + [Trigger 2] from triggers library
- **Ego bait**: [Who feels seen and why — run egobait checklist if post mentions a company/team]
- **Hook analysis (Kallaway)**: Single subject: [X]. Single question: [Y]. 3-step: Context Lean [text] → Scroll Stop [text] → Snap Back [text]. "See more" char count: [N]. Fits mobile preview: [yes/no].
- **Traffic driver**: [ICP keywords in hook]
- **AI slop check**: [Patterns caught and removed]
- **Formatting check**: Phone scroll test [pass/fail]. Longest paragraph: [X sentences]. Connectors used: [list]. Single-sentence air lines: [count].
- **Redundancy sweep**: [Pass/fail — any duplicates found and removed]
- **Connector pass**: [Connectors added at section jumps — list them]
- **Word count**: [~XXX]
- **Factual sources**: [Every claim with source URL and date]
```

---

## STEP 8: PRESENT

Show the user:
1. The finished post (ready to copy-paste to LinkedIn)
2. The full audit report (all 7 dimensions scored)
3. Top 3 Fixes applied (if any)
4. Any remaining flags or trade-offs
5. The 3 visual hook suggestions with recommended option
6. The file path where it was saved
