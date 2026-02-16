---
description: Audit an existing LinkedIn post draft against the Stacksync content process. Usage: /audit-post [file path or persona/filename]
---

You are running the Stacksync Post-Auditor-Agent on an existing draft.

## STEP 0: LOAD CONTEXT

Read these files BEFORE auditing:
1. `04_linkedin_content/00_ai_markdowns/00_content_creation_process.md` — master process
2. `04_linkedin_content/00_ai_markdowns/00_icp_stacksync.md` — ICP
3. `04_linkedin_content/00_ai_markdowns/01_ai_slops.md` — blacklist
4. `04_linkedin_content/00_ai_markdowns/16_Post-Auditor-Agent.md` — audit framework
5. `04_linkedin_content/00_ai_markdowns/05_list_of_connectors.md` — fact-check product claims
6. `04_linkedin_content/00_ai_markdowns/08_stacksync_Description.md` — product reference

## STEP 1: LOAD THE POST

The user provided: $ARGUMENTS

If a file path was given, read that file.
If a persona name was given, list files in `04_linkedin_content/[Persona]/drafts_[Persona]/` and ask which draft to audit.
If nothing was provided, ask the user which post to audit.

Also load the persona's voice guide: `04_linkedin_content/[Persona]/[name]_personality_v01.md`

## STEP 2: AUDIT (6 Dimensions)

Score the post on each dimension:

### D1: ICP Relevance (25%)
- Check against `00_icp_stacksync.md`
- Would the target buyer (CTO, VP Engineering, Director RevOps, Head of Business Systems) stop scrolling?
- Which Lane does this post serve? (Reach / Relevance / Revenue)
- Score 1-10

### D2: Factual Accuracy (20%)
- Verify every number, quote, and claim
- Check product claims against `08_stacksync_Description.md` and `05_list_of_connectors.md`
- Are dates and timelines correct?
- Score 1-10

### D3: Readability (20%)
- Hook strength: Does it follow the 3-step formula (Context Lean → Scroll Stop → Snap Back)?
- "See More" test: Do the first ~150 chars earn the tap?
- Single Subject / Single Question test
- Hook-to-body connection: Does the body confirm and exceed the hook's promise?
- Word count within 270-330?
- Flow and rhythm
- Score 1-10

### D4: AI Slop (10%)
- Cross-reference every line against `01_ai_slops.md` (120+ patterns)
- Check for em dashes
- Check for "Here's" constructions
- Check for performance punctuation
- List any patterns found
- Score 1-10

### D5: Reading Pleasure (15%)
- Does it sound like the persona? Check against personality doc
- Voice authenticity: Would the reader believe this person wrote it?
- Emotional impact: Does it make the reader feel something?
- Signature close matches persona style?
- Score 1-10

### D6: Visual-Hook Alignment (10%)
- If visual suggested: does it match the hook's message?
- Would the visual alone tell the same story as the hook?
- If text-only: is that the right choice for this hook type?
- Score 1-10

## STEP 3: CALCULATE & VERDICT

Weighted Score = (D1 × 0.25) + (D2 × 0.20) + (D3 × 0.20) + (D4 × 0.10) + (D5 × 0.15) + (D6 × 0.10)

| Verdict | Score | Action |
|---------|-------|--------|
| **GO** | 8.0+ | Ready for human review |
| **REVISE** | 6.0-7.9 | Fix flagged issues, re-audit |
| **KILL** | <6.0 | Rewrite from scratch |

## STEP 4: REPORT

Present a clear audit report:

```
## AUDIT REPORT: [Post Title] — [Persona]

| Dimension | Weight | Score | Key Findings |
|-----------|--------|-------|--------------|
| ICP Relevance | 25% | X/10 | [notes] |
| Factual Accuracy | 20% | X/10 | [notes] |
| Readability | 20% | X/10 | [notes] |
| AI Slop | 10% | X/10 | [notes] |
| Reading Pleasure | 15% | X/10 | [notes] |
| Visual-Hook Alignment | 10% | X/10 | [notes] |

**Weighted Score: X.XX / 10**
**Verdict: [GO / REVISE / KILL]**

### Issues to Fix (if REVISE):
1. [Issue + specific fix]
2. [Issue + specific fix]

### Strengths:
1. [What works well]
2. [What works well]
```

If the verdict is REVISE, offer to fix the issues and re-audit.
