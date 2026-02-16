---
description: Create a multi-persona campaign on the same topic. Usage: /create-campaign [your insight] [personas comma-separated]
---

You are executing a multi-persona Stacksync LinkedIn campaign. This means 2+ personas write about the SAME topic through different lenses.

**CRITICAL RULE:** Every campaign starts from the USER'S insight. The user provides the core idea or angle. Your job is to PACKAGE that insight through each persona's lens using the Stacksync process. You do NOT generate the topic yourself. Only in extreme cases where the user explicitly asks you to ideate should you propose topics.

## STEP 0: LOAD CONTEXT

Read these files BEFORE doing anything:
1. `04_linkedin_content/00_ai_markdowns/00_content_creation_process.md` — master process
2. `04_linkedin_content/00_ai_markdowns/00_icp_stacksync.md` — ICP
3. `04_linkedin_content/00_ai_markdowns/01_ai_slops.md` — blacklist
4. `04_linkedin_content/00_ai_markdowns/08_stacksync_Description.md` — product reference

## STEP 1: PARSE THE BRIEF

The user provided: $ARGUMENTS

Extract:
- **User's Insight:** The core idea all personas will write about (preserve the essence)
- **Personas:** Which 2-5 personas? (Ruben/Alexis/Nacho/Carter/Tony)

If the insight is unclear, ask. If personas are missing, ask. Do NOT proceed without both.

Load ALL persona voice guides for the assigned personas:
- `04_linkedin_content/[Persona]/[name]_personality_v01.md` for each

Ask for anything missing:
- **Lane per persona:** Same lane or different lanes?
- **Any constraints?** News peg, coordinated timing, specific angles?

## STEP 2: IDEA LEGOS (per persona)

Take the user's insight and package it into an Idea Legos table for EACH persona separately. Each persona must frame the user's insight through their own lens. The core idea stays the same; the packaging changes per persona:

**Insight fidelity check:** Does every persona's angle trace back to the user's original insight? The packaging changes, the core idea does NOT.

- **Ruben** = business, founder conviction, market bets
- **Alexis** = technical architecture, code comparisons, builder lens
- **Nacho** = revenue math, operational constraints, pragmatic philosopher
- **Carter** = educational, accessible, eager learner, DMs open
- **Tony** = iPaaS/integration landscape, vendor comparisons, industry veteran

## STEP 3: DECONFLICTION TABLE

After completing Idea Legos for each persona, fill this table:

```
| Element | [Persona 1] | [Persona 2] | [Persona 3] | ... |
|---------|-------------|-------------|-------------|-----|
| Angle | | | | |
| Hook type | | | | |
| Story structure | | | | |
| Reserved stat/number | | | | |
| Emotional beat | | | | |
| CTA type | | | | |
| Stacksync features mentioned | | | | |
```

**Rule:** No two personas share the same hook type AND story structure. If they do, change one.

Show the deconfliction table to the user and get confirmation before writing.

## STEP 4: WRITE ALL POSTS

For each persona, follow the full writing process from the master process doc:
1. Write 3 hooks (3-step formula each)
2. Single Subject / Single Question test
3. "See More" Fit test (~150 chars)
4. Pick strongest hook
5. Write body with hook-to-body rules
6. Persona signature close
7. AI slop check

## STEP 5: CROSS-POST CHECK

Read ALL posts as a SET and verify:
- [ ] No repeated phrases across posts (especially emotional beats)
- [ ] No shared stats that should be exclusive to one persona
- [ ] Each post sounds like a different person wrote it
- [ ] Stacksync pitch varies between posts (not copy-paste)
- [ ] Facts are consistent across posts (same dates, same scope)
- [ ] Deconfliction table was followed

If any issues found, fix them before auditing.

## STEP 6: AUDIT ALL POSTS

Run the full 6-dimension audit on each post. All posts need GO (8.0+).

## STEP 7: SAVE ALL POSTS

Save each post to its persona's drafts folder:
`04_linkedin_content/[Persona]/drafts_[Persona]/[topic_slug]_[persona_lowercase].md`

## STEP 8: PRESENT

Show the user:
1. All finished posts side-by-side
2. The deconfliction table (final)
3. Audit scores for each post
4. Cross-post check results
5. Suggested posting order and timing
