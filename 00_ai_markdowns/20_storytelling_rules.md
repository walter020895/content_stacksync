# Storytelling Rules — Anti-Fact-Listing Framework

**PURPOSE:** Replicable rules to prevent posts from reading like a Wikipedia timeline. Applied AFTER the draft exists, BEFORE the audit.

**RESEARCH BASE:** 3 deep research files (Feb 2026):
- `21_narrative_pull_techniques.md` — 18 techniques across 6 categories
- `22_ai_writing_sentence_connection_research.md` — AI vs human sentence patterns
- `21_storytelling_frameworks_research.md` — 12 LinkedIn storytelling frameworks

---

## THE CORE INSIGHT

**Facts become a story when each one CAUSES or CONTRASTS WITH the next.**

The fact-listing problem ("She did X. She did Y. She did Z.") is a causation problem. AI generates sentence B from scratch using A as context, but without intentionality about the RELATIONSHIP between them. Human writers think about how each sentence connects to the previous one before writing the next.

---

## THE ONE-LINE TEST (run on every pair of consecutive sentences)

Read two consecutive sentences. Ask: **"What is the relationship between these?"**

- If the answer is "they're both about the same topic" → that's AI. Fix it.
- If the answer is "the second one exists BECAUSE of the first one" → that's human. Keep it.

---

## 8 SENTENCE RELATIONSHIP TYPES

Every consecutive sentence in a post must have ONE of these relationships. If it doesn't, it's stacking — fix it or cut it.

| Type | Signal | Example |
|------|--------|---------|
| **Cause → Effect** | "So she..." / "Which meant..." | "Her mother told her she'd be the first woman engineer. So she went into engineering." |
| **Setup → Payoff** | Statement + consequence | "Her parents offered to help. She said no." |
| **Question → Answer** | Sentence raises implied question, next answers it | "She checked the numbers three times. They didn't add up." |
| **Escalation** | Each sentence raises stakes | "$2M. Then $10M. Then $50M. Then she stopped." |
| **Contrast / Reversal** | "Still..." / "But..." | "The data was clear. Still, nobody moved." |
| **Scene → Reaction** | Event + response | "The board said no. She started her own company." |
| **General → Specific** | Broad claim + concrete proof | "Everyone was struggling. Nacho's team spent four months rebuilding a pipeline." |
| **Time Compression** | Bridges a gap | "Three months later, they had their answer." |

**The AI pattern to kill:** PARALLEL sentences — facts at the same level of abstraction, same ground, no movement. If sentences can be rearranged without changing meaning, they're parallel. Fix them.

---

## THE BUT/THEREFORE RULE

**Source:** Trey Parker & Matt Stone (South Park), Randy Olson (ABT Framework), Matthew Dicks (Storyworthy)

Replace every "and then" connection with "but" (conflict) or "therefore" (consequence).

- "And then" = a list. A sequence. No tension.
- "But" = introduces conflict. The turn.
- "Therefore" / "So" = shows consequence. Cause-and-effect.

**Test:** Between any two sentences, mentally insert "and then." If it fits perfectly, the connection is weak. Rewrite so "but" or "therefore" fits instead.

**Before:** "She raised a seed round. She hired 12 people. She launched the product."
**After:** "She had $2,400 in her checking account when she filed the papers. Nine months later, she had 12 people and a product — but no customers. So she did something her investors hated."

---

## THE OPEN LOOP RULE

**Source:** Zeigarnik Effect (1927), Jay Acunzo, Joe Sugarman

The brain retains incomplete information 90% better than completed information. The hook opens a question. The body MUST answer it.

### Two levels:
1. **Macro loop** = the hook opens a question the entire post answers
2. **Micro loops** = sentences within the body that open small questions answered 2-3 lines later

### The mandatory rule: EVERY LOOP MUST CLOSE.

An unclosed loop = clickbait. A closed loop = storytelling.

**Checklist:**
- What question does the hook open?
- Write the answer in one sentence.
- Does the body actually deliver that answer? WHERE in the body?
- If you can't point to the exact sentence that closes the loop, the loop is broken.

**Example of a broken loop (Yamini post, earlier version):**
- Hook: "HubSpot's CEO took a $1 salary in 2023." → Opens: WHO does this and WHY?
- Body: Told her entire backstory → stated she took $1 → never explained WHY
- Fix: Added "If she was going to ask 500 people to walk out the door, she wasn't going to collect a safe paycheck on the way back to her desk." → NOW the why is answered.

---

## 6 HUMAN CONNECTOR TECHNIQUES (AI skips these)

### 1. Causal connectors
"So" / "That's why" / "Which meant"
AI rarely starts a sentence with "So" because it's informal. Humans do it constantly.

### 2. Concessive connectors
"Still" / "Even so" / "And yet"
Signal that reality didn't match expectation. Create tension in two words.

### 3. Scene-placing language
"Inside that apartment..." / "Back then..." / "Three floors up..."
Drops the reader into physical space. AI stays abstract.

### 4. Micro-dialogue
"Her parents offered to help. She said no."
An entire scene in two sentences. AI almost never uses direct speech in short-form.

### 5. Fragment sentences
"Gone." / "Every time." / "Not even close."
A fragment after a full sentence forces a stop. The reader re-reads it. AI avoids fragments because training rewards grammatical completeness.

### 6. Implied questions
"She checked the numbers three times." → reader asks "why?"
The next sentence answers. This is forward pull AI never generates.

---

## THE QUESTION CHAIN (Sentence-Level Pull)

**Source:** Derived from short-form video storytelling; applies to all sentence-level prose.

Every sentence must create exactly one question in the reader's head. The next sentence answers that question — and opens a new one. The chain runs sentence by sentence through the entire post.

**The closing exception:** The final sentence answers the last open question with resolution. It opens nothing. That's what makes it a closer.

**Three failure modes:**

| Failure | Symptom | Fix |
|---------|---------|-----|
| **No question created** | Reader can stop after this sentence without losing anything | Sentence is stacking. Cut it or rewrite so it creates tension. |
| **Wrong question answered** | Next sentence addresses something the previous sentence didn't raise | Logic jump. Add a bridge sentence or reorder. |
| **Loop restated** | Next sentence re-answers a question already closed | Repetition. Cut the second occurrence. |

**Editing test:** After drafting, read each sentence and write the question it creates in the margin. Then check: does the next sentence answer *exactly* that question? If not, you have a chain break.

**Relationship to other rules:**
- The But/Therefore Rule works *because* of this: "but" creates a conflict question ("why did it fail?"), "therefore" creates a consequence question ("so what happened?"). Both generate forward pull.
- The One-Line Test ("second exists BECAUSE of first") is a looser version. The question chain is the underlying mechanism.
- The Open Loop Rule operates at the macro level (hook → body). The question chain operates at the micro level (sentence → sentence). Both must work simultaneously.

---

## THE SLIPPERY SLIDE (Sugarman)

Every sentence's ONLY job is to get the reader to read the next sentence. If a sentence doesn't create a reason to continue, it's dead weight.

**Seeds of curiosity** at paragraph endings — small forward-pointing phrases:
- GOOD (voice-native): "So we did." / "That wasn't the hard part." / "The numbers tell a different story."
- SLOP (generic): "Here's the thing." / "Let that sink in." / "But wait."

---

## RHYTHM VARIATION (Gary Provost)

AI text has LOW burstiness — sentences cluster around 15-25 words, uniform. Human writing has HIGH burstiness — wild variation from 1 word to 30+ words.

**The rule:** A 3-word sentence after a 20-word sentence creates PULL. The short sentence forces a stop. It lands harder.

**Example:**
- "She graduated first." (3 words — after a sentence about 8% women)
- "Music." (1 word — Gary Provost's famous passage)
- "If HubSpot didn't grow, she didn't get paid." (standalone — after a full paragraph explaining the equity structure)

**Nature study (2025) confirmed:** AI texts demonstrate "lower perplexity, more uniform sentence structures, and higher lexical repetitiveness compared to human-written texts."

---

## SHOW DON'T TELL (action over adjective)

Don't describe a state. Show the action that IMPLIES the state.

| Telling (AI) | Showing (Human) |
|--------------|-----------------|
| "She was determined." | "Her parents offered to help. She said no." |
| "The product was a failure." | "Six months after launch, the dashboard showed 4 daily active users. Three were employees." |
| "She was a great leader." | "When the round fell through, she called every employee before the board." |

**LinkedIn rule:** Let the reader decide the adjective. Show what happened. If the story needs a label ("she was brave"), the story isn't showing enough.

---

## SCENE-SETTING IN ONE SENTENCE (Talese Method)

Pack setting + character + specific detail into ONE sentence. This switches the reader's brain from "processing information" mode to "watching a movie" mode.

**Formula:** Person + Action + One Specific Detail

- BEFORE: "She started the company after leaving her corporate job."
- AFTER: "She wrote the first line of code in a $400/month apartment in Medellín, still wearing her Deloitte lanyard."

**LinkedIn constraint:** You get ONE scene-setting sentence per post. Make it count. Include a person, an action, and a sensory/specific detail.

---

## THE ABT FRAMEWORK (And-But-Therefore)

**Source:** Randy Olson

Every post should be expressible as:
```
[Situation] AND [status quo],
BUT [problem/contradiction],
THEREFORE [insight/action].
```

- **AND** = establishes the world. Reader nods.
- **BUT** = the conflict. The more they nodded, the harder BUT hits.
- **THEREFORE** = the consequence, resolution, or reframe.

**The death pattern:** AND-AND-AND (AAA). A post that's all agreement with no conflict is a list, not a story. If your post has no BUT, it has no tension.

---

## PRE-WRITING CHECKLIST (answer before drafting)

1. **What is the five-second moment?** (Matthew Dicks) — The single instant of transformation. Not a topic, not a theme. A moment.
2. **What is the ABT?** — One sentence: situation AND status quo, BUT problem, THEREFORE insight.
3. **What loop are you opening?** — What's the gap between what the reader knows and what they'll learn?
4. **What is the opposite of the ending?** — Start there. (Dicks: the beginning must be the OPPOSITE of the end.)

## EDITING CHECKLIST (run after every draft, before audit)

1. **One-Line Test:** Read every pair of consecutive sentences. What's the relationship? If it's "same topic" → fix it.
2. **But/Therefore Test:** Mentally insert "and then" between sentences. If it fits → the connection is weak. Rewrite.
3. **Loop Closure:** What question does the hook open? Point to the EXACT sentence in the body that answers it.
4. **Iceberg Test:** For every sentence, ask "Does removing this make the post stronger?" If yes → cut.
5. **Rhythm Check:** Are all sentences roughly the same length? Add a 3-word sentence after a long one. Or vice versa.
6. **Show Check:** Does any sentence state a character trait ("she was determined")? Replace with the action that proves it.
7. **Scene Check:** Is there at least ONE sentence that places the reader in physical space? ("Inside that apartment," "At 2am in a WeWork")
8. **Question Chain Test:** After each sentence, write the question it creates. Does the next sentence answer exactly that question? No question created → stacking. Wrong question answered → logic jump. Loop already closed → repetition.
