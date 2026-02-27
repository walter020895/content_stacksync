---
name: crm_migration_what_breaks
description: Carter breaks down the four things that break in every Salesforce-to-HubSpot migration that nobody budgets for — activity history, custom objects, the Lead object mismatch, and integration rebuilds.
domain: business
node_type: linkedin-post
status: draft
last_updated: 2026-02-27
published_date:
tags:
  - salesforce
  - hubspot
  - crm-migration
  - data-integration
  - revops
topics:
  - CRM Migration Pain
  - What Breaks in a CRM Switch
related_concepts:
  - "[[CRM]]"
  - "[[Salesforce]]"
  - "[[HubSpot]]"
  - "[[data-integration]]"
link:
image:
---

# CARTER — What Actually Breaks When You Switch CRMs
## Angle: The four things every Salesforce-to-HubSpot migration breaks that nobody puts on the budget spreadsheet

---

## IDEA LEGOS
| Lego | Choice |
|------|--------|
| User's Insight | Custom objects don't map 1:1, activity history doesn't migrate cleanly, every integration built for Salesforce is dead and has to be rebuilt, Lead object exists in Salesforce but not HubSpot so all leads have to be converted. Teams plan for the license cost. Nobody budgets for the rebuild. |
| Topic | Four structural breaks in a Salesforce-to-HubSpot migration that teams don't account for |
| Angle | Carter as someone who talks to teams mid-migration — the rebuild cost is the invisible line item |
| Hook Type | Teacher — "I've seen what month two looks like" |
| Story Structure | Hook (common cost assumption) → Four ascending pain points → Insight (the invisible cost) → Light CTA |
| Psych Triggers | Validation ("it's not just your migration that's hard") + Curiosity Gap ("what else breaks?") |
| Visual Format | image |
| Key Visuals | Before/After infographic — "What's on the budget" vs "What actually costs you" |

**Reader value:** The ICP walks away knowing exactly which four systems break in a Salesforce-to-HubSpot migration and why the rebuild cost never shows up on the initial spreadsheet — actionable before they say yes to a switch.

---

### HOOK A (Recommended)
Switching from Salesforce to HubSpot saves money on the license.

Month two is when teams find out what they lost.

### HOOK B
Every CRM migration budget has one line item: the new license.

The rebuild doesn't show up until you're already in it.

### HOOK C
Salesforce has a Lead object. HubSpot doesn't.

That one structural difference breaks more CRM migrations than anything else.

---

### VISUAL HOOKS

**Option A (Recommended): Before/After Infographic — "What's on the migration budget vs. what actually costs you"**
PORTRAIT 4:5 (1080×1350). Dark bg (#161616). Left column, faded gray text: "What's on the budget" — single row: "New license." Right column, white text with #0043CE accent: "What actually costs you" — four rows: "Activity history rebuild / Custom object redesign / Lead remapping / Integration rebuild from scratch." Salesforce logo (dim) at top-left, HubSpot logo (bright) at top-right. The visual asymmetry — 1 row vs 4 rows — makes the budget gap unmissable at a glance.
Asset tags: [LOGO][SVG][DATA]
Image-hook loop: The single line vs. four lines stops the thumb → hook reveals why month two is when teams figure this out → second look: reader checks which of the four they've already budgeted for.

**Option B: Ranked List — "4 things that break in every CRM migration"**
PORTRAIT 4:5 (1080×1350). Dark bg (#161616). Numbered list 1–4, IBM Plex Sans 600, 52px per item. Items: "Activity history / Custom objects / Lead remapping / Integrations." Each with a one-line descriptor in 36px below. Clean, scannable, no logos needed. The list IS the post argument as a card.
Asset tags: [TYPE][SVG]

**Option C: Comparison Table — Salesforce vs. HubSpot structural differences**
PORTRAIT 4:5 (1080×1350). Dark bg. Four rows: Activity history / Custom objects / Lead object / Integrations. Two columns: Salesforce (what it has) / HubSpot (what happens on migration). Salesforce and HubSpot logos at column headers. The table is the technical proof — ICP recognizes their own stack.
Asset tags: [LOGO][DATA]

---

### FULL POST (using Hook A)

---

Switching from Salesforce to HubSpot saves money on the license.

Month two is when teams find out what they lost.

Activity history. Tasks, emails, and calls only sync going forward. Every historical touchpoint stays in Salesforce. If your reps need context from before the migration date, they're opening two tabs for months.

Custom objects. Salesforce has master-detail relationships, roll-up summaries, complex field logic. HubSpot's custom object model can't replicate these. Every custom object is a redesign, not a migration.

The Lead object. Salesforce splits people into Leads and Contacts. HubSpot uses only Contacts. Your Salesforce Leads become HubSpot Contacts on import. Attribution above the Lead stage disappears.

Every integration you built. Your ERP sync, your marketing automation, your internal tooling. All built to Salesforce's API. Dead on arrival in HubSpot. Rebuild from scratch.

The license savings are real. The rebuild cost is what nobody puts on the spreadsheet until they're already in it.

If your team is in the middle of this, DMs are open.

---

## NOTES
- **Voice**: Carter voice markers: plain language category labels (Activity history / Custom objects / The Lead object / Every integration), specific tool names (Salesforce, HubSpot, ERP), concrete operational consequences ("opening two tabs for months"), "Dead on arrival in HubSpot. Rebuild from scratch." as short punches, "DMs are open" close. No expert performance — he's reporting what breaks, not lecturing.
- **Idea Legos**: Teacher hook + Hook (common cost assumption) → Four ascending pain points → Insight → CTA confirmed
- **Reader value**: Gives the ICP a precise four-point checklist to audit their own CRM migration budget before committing.
- **Narrative arc**: Hook (license savings are the obvious win) → Activity history (pain 1: historical data frozen in Salesforce) → Custom objects (pain 2: structural redesign not migration) → Lead object (pain 3: attribution break with specific mechanic) → Integrations (pain 4: budget killer, rebuild from scratch) → Insight (the invisible line item) → CTA
- **Psychological triggers**: Validation (the migration struggle is structural, not your team's fault) + Curiosity Gap (what else breaks after month two?)
- **Ego bait**: RevOps directors and HubSpot admins recognize their exact pain. No company is called out negatively — the framing is structural (architecture difference), not a knock on either platform.
- **Hook analysis (Kallaway)**: Single subject: CRM migration hidden costs. Single question: "What did they lose?" 3-step: Context Lean ["Switching from Salesforce to HubSpot saves money on the license."] → Scroll Stop ["Month two is when teams find out what they lost."] → Snap Back [body opens with "Activity history." — first answer to the question]. "See more" char count: ~109. Fits mobile preview: yes.
- **Traffic driver**: Salesforce, HubSpot, CRM migration, RevOps, data integration
- **AI slop check**: Clean. No em dashes. No "Here's" constructions. No flip formulas (#21/#22/#25/#26). "Every custom object is a redesign, not a migration." uses natural contrast (naming what the work actually is), not a template flip. "Dead on arrival in HubSpot." is a fragment punch, not slop. No "Not X. Y." templates.
- **Formatting check**: Phone scroll test PASS. Longest paragraph: 3 sentences (activity history section — reads as short punches, not a wall). Connectors: none needed between sections — each label+explanation is self-contained, the reader's question ("what broke?") carries the momentum. Single-sentence air lines: 5 ("Month two is when teams find out what they lost." / "Activity history." / "Custom objects." / "The Lead object." / "Rebuild from scratch." / "The license savings are real.").
- **Redundancy sweep**: PASS. License cost mentioned once in hook, once in closer — but from different angles (assumption → reality). No fact restated in different words mid-post.
- **Connector pass**: Section jumps between the four pain points are intentional — the list structure means each label IS the connector. The jump from "Rebuild from scratch." to "The license savings are real." is deliberate abruptness: the reader just absorbed four pain points, the pivot to "savings are real" acknowledges their original intent before landing the insight.
- **Word count**: ~188
- **Factual sources**:
  - Activity history only syncs going forward: Instrumental Group Salesforce-to-HubSpot migration guide (https://www.instrumental.net/resources/salesforce-to-hubspot-migration-guide); Import2 comparison (https://www.import2.com/hubspot-salesforce-integration-vs-import2-syncing-vs-migrating)
  - HubSpot custom objects can't replicate Salesforce master-detail/roll-up summaries: Atak Interactive (https://www.atakinteractive.com/blog/custom-objects-in-hubspot-and-salesforce-integration-challenges-and-solutions)
  - Salesforce Lead → HubSpot Contact on import, no Lead object in HubSpot: HubSpot Knowledge Base (https://knowledge.hubspot.com/integrations/sync-salesforce-leads-and-contacts-to-hubspot); hubops.dk (https://www.hubops.dk/blog/hubspot-and-salesforce-integration-no-salesforce-lead-object)
  - All Salesforce-native integrations are Salesforce API-specific, don't transfer to HubSpot: industry standard, documented in Syncmatters migration guide (https://syncmatters.com/blog/salesforce-to-hubspot-migration-a-detailed-step-by-step-guide)

## AUDIT

### D1: ICP Relevance — 9.0/10
Directly addresses RevOps Directors and VP Engineering at mid-market companies who own CRM systems. CRM migrations are a top-of-mind event for companies scaling off Salesforce. The four pain points map precisely to Stacksync's ICP pain profile (custom integrations, data latency, rebuild cost). Salesforce and HubSpot are the two most-used CRMs in the sweet spot (100-1,500 employees). High resonance.

### D2: Factual Accuracy — 8.5/10
Four primary claims each verified against primary sources:
- Activity history: ✓ (Instrumental Group, Import2)
- Custom object model mismatch: ✓ (Atak Interactive)
- Lead object → Contact conversion: ✓ (HubSpot KB, hubops.dk)
- Integration rebuild: ✓ (industry standard, Syncmatters)
"Attribution above the Lead stage disappears" is slightly inferential — the mechanic is accurate (Lead records become Contacts, losing stage history) but the word "attribution" could be narrowed. Kept because it's directionally true and the most consequential outcome for RevOps.

### D3: Readability & Attention — 8.5/10
Hook creates a clean curiosity loop (license savings → month two → what did they lose?). Four-section body follows ascending value (activity history → custom objects → lead object → integrations). Each section: label + mechanic + consequence. No meandering. Closer returns to the hook's premise (license savings acknowledged) before landing the insight. Carter's voice throughout.

### D4: AI Slop Detection — 9.0/10
Zero blacklisted patterns detected:
- No em dashes ✓
- No "Here's" constructions ✓
- No flip formulas ✓
- No "Let that sink in" / "Here's the thing" / colon staging ✓
- "Every custom object is a redesign, not a migration." — natural contrast, not #21/#22 template ✓
- "Dead on arrival in HubSpot." — specific fragment, not slop ✓

### D5: Reading Pleasure — 8.0/10
Good rhythm variation: hook (2 short sentences) → four sections (label + 2-3 sentences each) → two-sentence closer → one-sentence CTA. Fragments ("Activity history." / "Dead on arrival in HubSpot. Rebuild from scratch.") create punchy air. No text walls on mobile. Could use one more human detail (Carter's personal observation) — the post is clean but slightly clinical. Acceptable for an educational post in this format.

### D6: Reader Value — 9.0/10
The ICP walks away with a precise four-point framework to audit their own CRM migration plan. Actionable before signing any contract. Specific enough that a RevOps Director could forward it to their team as a pre-migration checklist.

### D7: Visual-Hook Alignment — 8.5/10
Option A (Before/After) shows exactly the budget gap the hook describes: one line item vs. four costs. The visual asymmetry mirrors the post's argument. Second look confirms the insight.

### Composite Score
(9.0×0.20) + (8.5×0.20) + (8.5×0.20) + (9.0×0.10) + (8.0×0.10) + (9.0×0.15) + (8.5×0.05)
= 1.80 + 1.70 + 1.70 + 0.90 + 0.80 + 1.35 + 0.425
= **8.675 → GO**

### Verdict: GO (8.7/10)
No fixes required. Post is ready for human review.
