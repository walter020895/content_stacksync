---
description: Create a LinkedIn post following the Stacksync content creation process. Usage: /create-post [persona] [your insight/angle]
---

You are executing the Stacksync LinkedIn content creation process. Follow every step precisely.

**CRITICAL RULE:** Every post starts from the USER'S insight. The user provides the core idea, angle, or observation. Your job is to PACKAGE that insight into the best possible LinkedIn post using the Stacksync process. You do NOT generate the topic or angle yourself. Only in extreme cases where the user explicitly asks you to ideate should you propose topics.

## STEP 0: LOAD CONTEXT

Read these files BEFORE doing anything else:
1. `04_linkedin_content/00_ai_markdowns/00_content_creation_process.md` — master process (follow this exactly)
2. `04_linkedin_content/00_ai_markdowns/00_icp_stacksync.md` — ICP (north star)
3. `04_linkedin_content/00_ai_markdowns/01_ai_slops.md` — blacklist (load BEFORE writing)
4. `04_linkedin_content/00_ai_markdowns/08_stacksync_Description.md` — product reference

## STEP 1: PARSE THE BRIEF

The user provided: $ARGUMENTS

Extract from the user input:
- **Persona:** Which persona? (Ruben/Alexis/Nacho/Carter/Tony)
- **User's Insight:** The core idea, angle, or observation the user wants to write about

The user's insight is the SEED of the post. Preserve its essence. Your job is to find the best hook type, story structure, and packaging to make that insight land with the ICP.

If the persona is unclear, ask. If the insight is unclear, ask. Do NOT proceed without both.

Once you know the persona, also read:
- `04_linkedin_content/[Persona]/[name]_personality_v01.md` — persona voice guide
- Any existing posts in `04_linkedin_content/[Persona]/published_[Persona]/` (read 3-5 to calibrate voice)
- Any existing posts in `04_linkedin_content/[Persona]/bangers_[Persona]/` (read all to understand what performs)

Then ask the user for anything still missing:
- **Lane:** Reach (category), Relevance (ICP pain), or Revenue (product proof)?
- **Any constraints?** News peg, specific stat to include, timing?

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
| Visual Format | [text-only / image / video] |
| Key Visuals | [if image: what exactly] |
```

Consult:
- `04_linkedin_content/00_ai_markdowns/13_idea_legos_patterns_guide.md` — hook types with %, structures
- `04_linkedin_content/[Persona]/research_[Persona]/` — outlier analysis for inspiration

**Insight fidelity check:** Does the Angle preserve the user's original insight? The packaging changes, the core idea does NOT.

**Persona lens check:** Would this person ACTUALLY say this? Apply the persona roles from the master process.

**Hook Architecture (Kallaway 3-Step Formula):**
Every hook must follow: Context Lean (establish topic) → Scroll Stop (contrast word: "but," "however," "yet") → Contra Snap Back (opposite direction, curiosity loop).

Show the Idea Legos to the user and get confirmation before writing.

## STEP 3: WRITE THE DRAFT

Follow the assembly order from the master process doc exactly:

1. Write 3 hook variations using the chosen hook type. Each must follow the 3-step formula.
2. Apply Single Subject / Single Question test to each hook.
3. Apply "See More" Fit test: Context Lean + Scroll Stop must fit in ~150 chars (mobile preview).
4. Pick the strongest hook.
5. Write the body following hook-to-body connection rules:
   - First line confirms the hook's promise
   - 2nd-best point first, best point second (ascending value)
   - Rehooks between sections
   - No bait-and-switch
6. End with the persona's signature close.
7. Cross-check every line against `01_ai_slops.md`.

**Hard rules:**
- 270-330 words MAX (but never pad to hit word count — 160 tight words beat 300 bloated ones)
- No em dashes
- No "Here's" constructions
- Pick 1-2 psychological triggers from the triggers library in the master process
- Apply celebrity/company name-drop rules if referencing real entities
- Run egobait checklist if post mentions a company/team

**Time-to-Value Compression (enforce on EVERY post):**
- Every sentence must earn its spot. If removing it loses nothing, cut it.
- No redundancy. If two sentences make the same point, keep the stronger one.
- Don't say in a paragraph what a scorecard or single line can say. Don't scorecard what a paragraph already covered. Pick one format.
- Maintain natural storytelling flow — not everything is a one-liner fragment. But no bloat either.
- Storytelling serves retention, not decoration. Just enough to keep the reader moving forward, never so much it tires them.
- The audience's time is the scarcest resource. Respect it.

Use the post file format from the master process doc (IDEA LEGOS table + 3 hooks + visual hooks + full post + NOTES).

## STEP 4: AUDIT

Run the Post-Auditor-Agent scoring on the post:

| Dimension | Weight |
|-----------|--------|
| ICP Relevance | 25% |
| Factual Accuracy | 20% |
| Readability | 20% |
| AI Slop | 10% |
| Reading Pleasure | 15% |
| Visual-Hook Alignment | 10% |

Verdicts: GO (8.0+) / REVISE (6.0-7.9) / KILL (<6.0)

If REVISE: fix the flagged issues and re-audit.
If KILL: rewrite from scratch.

## STEP 5: SAVE

Save the finished post to: `04_linkedin_content/[Persona]/drafts_[Persona]/[topic_slug]_[persona_lowercase].md`

File naming: lowercase, underscores, no spaces. Example: `data_engineers_dead_nacho.md`

## STEP 6: PRESENT

Show the user:
1. The finished post (ready to copy-paste to LinkedIn)
2. The audit score
3. Any flags or trade-offs
4. The 3 visual hook suggestions
5. The file path where it was saved
