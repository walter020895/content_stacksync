# Execution Steps — How to Create a Stacksync LinkedIn Post

Steps Claude follows when creating a post. Load this at the start of every content session.

---

## BEFORE YOU START

Load these files into context:
1. `00_ai_markdowns/00_content_creation_process.md` — master process
2. `00_ai_markdowns/00_icp_stacksync.md` — ICP (north star: every post serves this buyer)
3. `00_ai_markdowns/01_ai_slops.md` — blacklist (load BEFORE writing, not after)

---

## STEP 1: GET THE BRIEF

Ask the user:
- **Topic:** What are we writing about?
- **Personas:** Which persona(s)? Single or multi-voice campaign?
- **Lane:** Reach (category), Relevance (ICP pain), or Revenue (product proof)?
- **Any constraints?** News peg, specific angle, stat to include?

---

## STEP 2: IDEA LEGOS (per persona)

For each persona assigned, fill this table BEFORE writing anything:

```
| Lego | Choice |
|------|--------|
| Topic | [one sentence] |
| Angle | [unique spin through this persona's lens] |
| Hook Type | [Teacher/Contrarian/Magician/Fortune Teller/Experimenter/Investigator] |
| Story Structure | [e.g., Problem → Wrong Approach → Lesson → Solution] |
| Visual Format | [text-only / image / video] |
| Key Visuals | [if image: what exactly] |
```

**Resources to consult:**
- `00_ai_markdowns/13_idea_legos_patterns_guide.md` — hook types with %, story structures, worked examples
- `00_ai_markdowns/central_outliers_db.csv` — 171 top posts from 86 authors, search by hook type or structure for inspiration
- `02_content_creation_resources/kallaway_transcripts/` — 8 transcripts: hook architecture, storytelling, packaging, psychology

**Hook Architecture reminder (Kallaway 3-Step Formula):**
Every hook must follow: **Context Lean** (establish topic, reader self-selects) → **Scroll Stop** (contrast word that stuns: "but," "however," "yet") → **Contra Snap Back** (opposite direction, creates curiosity loop). The hook TYPE (Teacher, Contrarian, etc.) determines the KIND of contrast. See master process doc for full table.

**Persona lens check:** Would this person ACTUALLY say this? Refer to the Persona Roles table in the master process doc:
- **Ruben** = business, founder conviction, market bets
- **Alexis** = technical architecture, code comparisons, builder lens
- **Nacho** = revenue math, operational constraints, pragmatic philosopher
- **Carter** = educational, accessible, eager learner, DMs open
- **Tony** = iPaaS/integration landscape, vendor comparisons, industry veteran

---

## STEP 2b: DECONFLICTION (multi-voice campaigns only)

If 2+ personas write on the same topic, fill the deconfliction table:

```
| Element | Persona 1 | Persona 2 | ... |
|---------|-----------|-----------|-----|
| Angle | | | |
| Hook type | | | |
| Story structure | | | |
| Reserved stat/number | | | |
| Emotional beat | | | |
| CTA type | | | |
| Stacksync features mentioned | | | |
```

**Rule:** No two personas share the same hook type AND story structure.

---

## STEP 2c: VISUAL HOOK SUGGESTIONS

For every post, suggest 3 visual hook options that MATCH the written hook. The visual and the text must say the same thing. Misalignment = confusion = scroll-past.

**Match the visual to the hook type:**
| Hook Type | Visual Direction |
|-----------|-----------------|
| Teacher | Chart, diagram, process visual, timeline |
| Contrarian | Comparison table, "vs" layout, product teardown |
| Magician | Numbers graphic, stacked bar chart, dramatic stat card |
| Fortune Teller | Announcement visual, calendar, timeline with deadline |
| Experimenter | Before/after split, screenshot comparison |
| Investigator | Architecture diagram, code screenshot, data table |

**Proven LinkedIn visual specs:**
- Pie chart meme (absurd resource allocation)
- Architecture diagram (system complexity with annotations)
- Before/after split (expectation vs reality)
- Slack/alert screenshot mockup (day-in-the-life chaos)
- Stacked bar chart (cost breakdown)
- Side-by-side comparison (two reports, two systems)
- Quote card with anchor stat
- Code screenshot comparison
- Vendor comparison table

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

## STEP 3: RESEARCH

1. Web search the topic. Verify every number, quote, and claim.
2. For every fact, write down the SOURCE.
3. Check quotes are real and in the right context (lesson: Craig Kerstiens quote was from 2022, not 2026).
4. Record all sources — these go in the NOTES section.

---

## STEP 4: LOAD PERSONA + WRITE

**Load before writing:**
- `04_linkedin_content/Stacksync Universe/[Persona]/[name]_personality_v01.md`
- `00_ai_markdowns/06_linkedin-post-generator-prompt.md` — psychological triggers library ONLY (file is LEGACY)
- The Idea Legos table from Step 2
- The deconfliction table (if multi-voice)

**Write in this order:**
1. Write 3 hook variations using the chosen hook type. Each hook must follow the 3-step formula: **Context Lean → Scroll Stop → Contra Snap Back.**
2. Apply the **Single Subject / Single Question** test to each hook:
   - Single Subject: the hook talks about ONE thing
   - Single Question: the reader has ONE question pulling them into the post
   - If the hook plants two questions or covers two subjects, split or pick one
3. Apply the **"See More" Fit** test:
   - Context Lean + Scroll Stop must fit in ~150 characters (mobile preview before "see more")
   - Read ONLY those characters. Would you tap? If not, compress or rewrite.
   - The Snap Back can land right after "see more" — it rewards the tap.
4. Pick the strongest hook
5. Write the body following the chosen story structure. **Hook-to-body rules:**
   - First line after hook must CONFIRM the hook's promise (reader tapped "see more" for a reason)
   - Put 2nd-best point first, best point second (ascending value keeps them reading)
   - Use rehooks between sections ("That was the first problem. The second one was worse.")
   - No bait-and-switch: hook type determines the body's frame
6. End with the persona's signature close
7. Cross-check every line against `01_ai_slops.md`

**Hard rules:**
- 270-330 words MAX
- Hook: 1-3 sentences, front-load the angle
- Context Lean + Scroll Stop must fit in ~150 chars (LinkedIn mobile "see more" cutoff)
- No em dashes
- No "Here's" constructions
- Persona lens determines framing

**Output format:**
```markdown
# [PERSONA] — [Post Title]
## Angle: [One-line description]

---

## IDEA LEGOS
| Lego | Choice |
|------|--------|
| Topic | |
| Angle | |
| Hook Type | |
| Story Structure | |
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

[Full post body]

---

## NOTES
- **Voice**: [Persona markers used]
- **Idea Legos**: [Hook type] + [Story structure] confirmed
- **Narrative arc**: [Beat-by-beat flow]
- **Ego bait**: [Who feels seen and why]
- **Hook analysis (Kallaway)**: Single subject: [X]. Single question: [Y]. 3-step: Context Lean [text] → Scroll Stop [text] → Snap Back [text]. "See more" char count: [N]. Fits mobile preview: [yes/no].
- **Traffic driver**: [ICP keywords in hook]
- **AI slop check**: [Patterns caught and removed]
- **Word count**: [~XXX]
- **Factual sources**: [Every claim with source]
```

---

## STEP 5: AUDIT

Run the Post-Auditor-Agent (`00_ai_markdowns/Post-Auditor-Agent.md`).

**6 Dimensions:**
1. ICP Relevance (25%) — check against `00_icp_stacksync.md`
2. Factual Accuracy (20%) — check against `05_list_of_connectors.md` for product claims
3. Readability (20%) — hook strength, flow, word count
4. AI Slop (10%) — cross-ref against `01_ai_slops.md`
5. Reading Pleasure (15%) — voice authenticity, emotional impact
6. Visual-Hook Alignment (10%) — does the suggested visual match the hook message? Would the visual alone tell the same story?

**Verdicts:**
- **GO (8.0+):** Ready for human review
- **REVISE (6.0-7.9):** Fix issues, re-audit
- **KILL (<6.0):** Rewrite from scratch

---

## STEP 6: CROSS-POST CHECK (multi-voice only)

Read all posts as a SET:
- [ ] No repeated phrases across posts
- [ ] No shared stats that belong to one persona
- [ ] Each post sounds like a different person
- [ ] Stacksync pitch varies
- [ ] Facts consistent across posts
- [ ] Deconfliction table was followed

---

## STEP 7: PRESENT TO USER

Show the user:
1. The finished post(s)
2. The audit score
3. Any flags or trade-offs

User reviews, edits, approves.

---

## STEP 8: PUBLISH & ARCHIVE

After user confirms publication:
1. Add to YAML: `status: published`, `published_date: YYYY-MM-DD`, `link: [URL]`
2. Move from `Bangers/drafts/` to `Bangers/published/[Persona]/`
