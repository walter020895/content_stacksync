# Why AI Writing Sounds Like AI: The Sentence Connection Problem

Research compiled 2026-02-26. Sources at bottom.

---

## 1. THE CORE PROBLEM: SENTENCES THAT SIT NEXT TO EACH OTHER VS. SENTENCES THAT CONNECT

### What "Sentence Stacking" Is

Blake Stockton (AI Writers Room) defines **sentence stacking** as writing where "every sentence stands on its own — no rhythm, no buildup, just one flat fact after another." Each statement exists independently, creating a flat, list-like structure devoid of connection or flow.

**Bad (stacked):**
> "Improv is a type of unscripted theater. It requires performers to make up scenes in the moment. Many exercises focus on listening and reacting."

**Better (connected):**
> "Improv is a form of unscripted theater where performers build scenes in real time. It sharpens listening, encourages quick thinking, and builds trust."

The difference: in the first version, each sentence could be rearranged without losing meaning. In the second, each clause depends on the one before it. Remove one and the chain breaks.

### Three Triggers That Cause Sentence Stacking in AI

1. **RAG (Retrieval-Augmented Generation)** — when AI pulls from source documents, it tries to include everything without prioritizing what matters, creating information-dense prose with no pacing.
2. **Converting bullets to paragraphs** — AI transforms each bullet into an isolated sentence, keeping the list structure but removing the visual cues that made it scannable.
3. **Conflicting prompt constraints** — combining "formal tone" + "actionable" + "under 200 words" compresses ideas into choppy, disconnected sentences.

### The Fundamental Mechanism

AI predicts the **next most probable word** based on statistical patterns. It does not think about how sentence B relates to sentence A. It generates sentence A, then generates sentence B from scratch using A as context — but without intentionality about the *relationship* between them.

Human writers, before beginning a new sentence, think about how it connects to what they just wrote. They use transition words, questions, bridge sentences, cause-and-effect chains. AI lists facts sequentially without establishing relationships between them.

---

## 2. STATING VS. TELLING: THE STRUCTURAL DIFFERENCE

### The "Show, Don't Tell" Framework Applied to Sentence-Level Writing

From CRAFT Literary Magazine's analysis of what AI cannot do:

**AI's default = TELLING (stating):**
- Direct articulation of significance
- All details treated with equal weight
- Uses overly familiar phrases ("gentle breeze," "blooming flowers")
- Adds interpretive summaries: "A peaceful day at a pond is a serene and tranquil experience"
- Explains effects instead of showing them: "casting a warm and inviting glow"

**Human craft = SHOWING:**
- Embeds meaning in sensory specifics
- Uses dialogue gaps (what's NOT said creates meaning)
- Intentional detail selection — each detail serves multiple narrative purposes
- Obliqueness and indirection as primary tools
- Strategic omission (Hemingway's Iceberg Theory: if the writer knows enough, they can omit things and the reader will sense them)

### Applied to LinkedIn Short-Form

**Stating (AI pattern):**
> She grew up poor. She went to college. She became CEO.

Three parallel facts. No causal chain. No tension. No question raised by sentence 1 that sentence 2 answers.

**Telling (human pattern):**
> She grew up sharing a bedroom with three siblings. College wasn't the plan — her parents needed her income. She went anyway. Fifteen years later, she runs the company.

What changed:
- "sharing a bedroom with three siblings" = specific detail that SHOWS poverty
- "wasn't the plan" = introduces tension/expectation
- "her parents needed her income" = cause that creates conflict
- "She went anyway." = 3-word fragment that carries all the emotional weight (defiance, sacrifice)
- "Fifteen years later" = time compression that implies the grind without stating it
- "she runs the company" = payoff that lands harder because of the setup

The stating version has 3 sentences with 0 relationships between them.
The telling version has 5 sentences with 4 relationships: context -> conflict -> defiance -> time gap -> payoff.

---

## 3. SENTENCE RELATIONSHIP TYPES IN GOOD NARRATIVE WRITING

### The Taxonomy of How Sentences Connect

In good prose, every sentence has a REASON for following the previous one. That reason falls into one of these categories:

**A. Cause -> Effect**
"So she..." / "That's why..." / "As a result..."
Sentence B happened BECAUSE of sentence A.

**B. Setup -> Payoff**
A plants an expectation. B delivers (or subverts) it.
"Her parents offered to help. She said no." (The offer is the setup. The refusal is the payoff.)

**C. Question -> Answer (implied)**
Sentence A raises a question in the reader's mind. Sentence B answers it.
"She checked the numbers three times." [Reader asks: why?] "They didn't add up." [Answer.]

**D. Escalation**
Each sentence raises the stakes.
"Implementations measured in months. Certified consultants required before you start. Onboarding programs longer than the actual rollout."

**E. Contrast / Reversal**
"Still..." / "But..." / "That wasn't what happened."
Sentence B contradicts the expectation set by A.

**F. Scene -> Reaction**
A describes what happened. B describes the emotional or logical response.
"The board said no. She walked out of the room and started her own company."

**G. General -> Specific (or Specific -> General)**
"Everyone was struggling with the same problem." [general] "Nacho's team spent four months rebuilding a pipeline that broke every Tuesday." [specific]

**H. Time Compression**
"Three months later, they had their answer."
Bridges a gap without narrating every step.

### The AI Problem: Dominance of Parallel Sentences

In AI writing, the overwhelming majority of consecutive sentences have a **parallel** relationship — they sit at the same level of abstraction, covering the same ground, with no movement between them:

> "The platform offers real-time analytics. It provides customizable dashboards. Users can export data in multiple formats."

Each sentence is a feature. None causes the next. None sets up or pays off the others. They are interchangeable. This is a list wearing paragraph clothing.

Research from Michelle Kassorla (Substack, "Recognizing AI Structures in Writing") confirms: AI writing is "predictable, average, and boring" because AI language results from "averaging many different original and interesting styles into one big unoriginal average style."

---

## 4. RHYTHM AND SENTENCE LENGTH VARIATION

### Gary Provost's Famous Passage (from *100 Ways to Improve Your Writing*, 1985)

> "This sentence has five words. Here are five more words. Five-word sentences are fine. But several together become monotonous. Listen to what is happening. The writing is getting boring. The sound of it drones. It's like a stuck record. The ear demands some variety.
>
> Now listen. I vary the sentence length, and I create music. Music. The writing sings. It has a pleasant rhythm, a lilt, a harmony. I use short sentences. And I use sentences of medium length. And sometimes, when I am certain the reader is rested, I will engage him with a sentence of considerable length, a sentence that burns with the energy and builds with all the impetus of a crescendo, the roll of the drums, the crash of the cymbals — sounds that say listen to this, it is important."

### What Research Shows About AI Sentence Length

**Burstiness** = the variation in sentence length and structure throughout a document.

- AI-generated text has **lower burstiness** than human writing. Sentences cluster around the same length (typically 15-25 words). Paragraphs are uniform in size.
- Human writing alternates between **short punchy bursts and longer complex sentences**. This variation is measurable — human writing has higher standard deviation in sentence length.
- Low burstiness correlates with low perplexity (predictability). Uniform sentences = easier for detectors to spot.

From a stylometric study in *Humanities and Social Sciences Communications* (Nature, 2025): AI texts demonstrate "lower perplexity, more uniform sentence structures, and higher lexical repetitiveness compared to human-written texts."

### The Rhythm Principle for LinkedIn

A 3-word sentence after a 20-word sentence creates **pull**. The short sentence forces a stop. The reader re-reads it. It lands harder.

Examples of rhythm variation in practice:
- "Music." (1 word — after a full paragraph of buildup)
- "She went anyway." (3 words — carries more weight than the longer sentences around it)
- "That was the last time they used Salesforce." (8 words — after escalating complexity)

AI doesn't do this. AI produces sentence after sentence of roughly equal length, creating a drone.

---

## 5. THE "HUMAN CONNECTOR" TECHNIQUES AI TENDS TO SKIP

### A. Causal Connectors
- **"So"** — implies cause and effect without spelling it out
- **"That's why"** — makes the connection explicit
- **"Which meant"** — chains consequences

AI rarely uses "so" as a sentence starter because it's informal. Humans use it constantly in spoken narrative and editorial writing.

### B. Concessive Connectors (Despite Expectations)
- **"Still"** — "The data was clear. Still, nobody moved."
- **"Even so"**
- **"And yet"**

These words signal that reality didn't match the expectation. They create tension in two words.

### C. Scene-Placing Language
- **"Inside that..."** — zooms the camera into a specific space
- **"Back then..."** — establishes temporal context
- **"Three floors up..."** — spatial specificity

AI tends to stay abstract. Human storytelling drops into physical space.

### D. Micro-Dialogue
- **"Her parents offered. She said no."** — two sentences that create an entire scene with conflict, character, and resolution.
- **"The CEO asked one question: 'How long?'"** — a single quoted line that reveals character.

AI almost never introduces direct speech in short-form content. Humans use it instinctively to make moments vivid.

### E. Fragment Sentences as Editorial Voice
- **"Gone."** / **"Every time."** / **"Not even close."**
- A fragment after a full sentence forces the reader to stop. It functions as a rhetorical punch.
- By placing a period after a fragment, a writer says: "Stop here. Look at this. Do not move on yet."
- Fragments speed up the "heartbeat" of a paragraph — short, choppy fragments create tension or urgency.

AI avoids fragments because its training rewards grammatical completeness. Human editorial voice uses fragments as a primary tool.

### F. Implied Questions
- "She checked the numbers three times." (Why? What was wrong?)
- The reader's brain fills in the question. The next sentence answers it. This creates forward pull.

AI states facts that don't raise questions. Human writing creates gaps the reader wants filled.

---

## 6. WIKIPEDIA'S SIGNS OF AI WRITING (Structural Patterns)

Wikipedia editors compiled a field guide for detecting AI-generated text. The structural tells:

1. **Uniform sentence structure** — every sentence roughly the same length, every paragraph the same size.
2. **Present participle tacking** — AI attaches "-ing" phrases at the end of sentences: "emphasizing the significance of..." / "reflecting the continued relevance of..."
3. **Negative parallelism** — "It's not X, it's Y" / "Not just X, but Y" used reflexively.
4. **Rule of three** — lists always contain exactly three items, three adjectives stacked.
5. **Compulsive summaries** — "Overall" or "In conclusion" even in brief passages.
6. **False ranges** — "From X to Y" implying a spectrum where none exists.
7. **Em dash overuse** — em dashes where commas suffice; complete absence of en dashes.
8. **"Serves as a" substitution** — replacing "is" with "serves as a" to sound sophisticated.
9. **Cursed vocabulary** — delve, intricate, tapestry, pivotal, underscore, landscape, foster, testament, enhance, crucial.

---

## 7. FIVE AI SENTENCE STRUCTURES (Kassorla Analysis)

Michelle Kassorla identified five detectable AI sentence structures:

1. **Simple sentences** — basic statements connected sequentially with no syntactic variety.
2. **Semicolon connection** — instead of conjunctions that create flow, AI uses semicolons that create jarring pauses.
3. **Adverbial transitions** — "however," "albeit," "therefore" used excessively and mechanically.
4. **End-of-sentence modifying phrases** — AI compensates for simple core sentences by tacking modifying phrases at the end.
5. **Parallel list structures** — repetitive parallel constructions that mask linguistic simplicity.

What humans do that AI does not: **syntactic surprises, unusual word ordering, sarcasm, puns, alliteration, and unexpected rhythmic variations.**

---

## 8. THE TRANSITION CRAFT (The Open Notebook)

From The Open Notebook's guide on narrative transitions in longform journalism:

### Head-to-Tail Transitions
A word or concept at the START of each paragraph that echoes the END of the preceding paragraph. Not repetition — echo. The reader follows the thread without noticing it.

### The "Invisible" Standard
Good transitions are invisible. The article compares it to yoga: "The brain is a muscle too, in a way. The reason that flow is important in writing is so that it doesn't tax the brain."

### Strategic Repetition
Repeating a concept (not a word) across sentences builds connection. Readers follow dense material through repeated concept threads.

### Section-Break Anchors
Specific temporal and spatial details (exact dates, locations) ground readers before major narrative shifts. "On March 3rd, in the basement of their Oakland office..." makes an unexpected turn feel purposeful rather than jarring.

---

## 9. SYNTHESIS: THE ANTI-AI WRITING CHECKLIST

Based on all research, here's what separates human writing from AI writing at the sentence level:

| AI Pattern | Human Pattern |
|---|---|
| Sentences of uniform length (15-25 words) | Sentences vary from 1 word to 30+ words |
| Parallel structure (facts sit side by side) | Connected structure (each sentence relates to the last) |
| Transitions are formulaic ("Furthermore," "Moreover") | Transitions are earned or invisible |
| Every sentence is grammatically complete | Fragments used for emphasis and voice |
| Abstract and general | Drops into specific scenes and spaces |
| States significance ("This was important because...") | Shows significance through detail and omission |
| No dialogue | Micro-dialogue creates vivid moments |
| Summarizes at the end | The last sentence advances, doesn't restate |
| Every paragraph = same structure | Paragraphs vary: 1 sentence, then 3, then 1 |
| Facts are deposited | Facts are connected by cause, contrast, escalation |

### The One-Line Test

Read two consecutive sentences. Ask: **"What is the relationship between these?"**

If the answer is "they're both about the same topic" — that's AI.
If the answer is "the second one exists BECAUSE of the first one" — that's human.

---

## Sources

- [Blake Stockton - Don't Write Like AI: Sentence Stacking](https://www.blakestockton.com/sentence-stacking/)
- [Blake Stockton - Don't Write Like AI: Negation Pattern](https://www.blakestockton.com/dont-write-like-ai-1-101-negation/)
- [Blake Stockton - Red Flag Words](https://www.blakestockton.com/red-flag-words/)
- [CRAFT Literary Magazine - Show, Don't Tell: What AI Can't Do](https://www.craftliterary.com/2025/03/26/show-dont-tell-what-ai-cant-do/)
- [Michelle Kassorla - Recognizing AI Structures in Writing (Substack)](https://michellekassorla.substack.com/p/recognizing-ai-structures-in-writing)
- [Wikipedia - Signs of AI Writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing)
- [Beutler Ink - How to Spot AI Writing According to Wikipedia](https://www.beutlerink.com/blog/how-to-spot-ai-writing)
- [The Open Notebook - Good Transitions: A Guide to Cementing Stories Together](https://www.theopennotebook.com/2018/09/25/good-transitions-a-guide-to-cementing-stories-together/)
- [Gary Provost - This Sentence Has Five Words (Aerogramme Studio)](https://www.aerogrammestudio.com/2014/08/05/this-sentence-has-five-words/)
- [Gary Provost - 100 Ways to Improve Your Writing (Goodreads)](https://www.goodreads.com/quotes/373814-this-sentence-has-five-words-here-are-five-more-words)
- [Nature - Stylometric Comparisons of Human vs AI-Generated Creative Writing](https://www.nature.com/articles/s41599-025-05986-3)
- [Originality.ai - Perplexity and Burstiness in Writing](https://originality.ai/blog/perplexity-and-burstiness-in-writing)
- [QuillBot - Burstiness and Perplexity Definition & Examples](https://quillbot.com/blog/ai-writing-tools/burstiness-and-perplexity/)
- [Writing With AI - 15 Signs of an AI-Generated Paragraph](https://writingwithai.com/15-signs-of-an-ai-generated-paragraph-and-how-to-fix-them/)
- [Pangram Labs - Comprehensive Guide to Spotting AI Writing Patterns](https://www.pangram.com/blog/comprehensive-guide-to-spotting-ai-writing-patterns)
- [WordRake - Why AI-Generated Text Sounds Wordy and Choppy](https://www.wordrake.com/resources/wordy-choppy-generative-ai)
- [FindSkill.ai - Why AI Writing Sounds Robotic](https://findskill.ai/blog/why-ai-sounds-robotic/)
- [Hastewire - Uncover Linguistic Patterns of AI Writing](https://hastewire.com/blog/uncover-linguistic-patterns-of-ai-writing-key-tells)
- [Hastewire - Human vs AI Writing Side-by-Side](https://hastewire.com/blog/human-vs-ai-writing-examples-side-by-side-style-differences)
- [UW-Madison Writing Center - Connecting Ideas Through Transitions](https://writing.wisc.edu/handbook/style/connectingideas/)
- [Chuck Wendig - On Sentence Fragments and Other Stylistic Jibber-Jabber](https://terribleminds.com/ramble/2016/02/09/on-sentence-fragments-and-other-stylistic-jibber-jabber/comment-page-1/)
- [Inventing Reality - Use Fragments for Rhetorical Effect](https://inventingrealityeditingservice.typepad.com/inventing_reality_editing/2013/08/use-fragments-for-rhetorical-effect.html)
