# Competitive Intelligence Research Prompt

Conduct verified, defensible research on customer complaints for the iPaaS/integration platform specified at the end of this prompt.

---

## VERIFICATION STANDARDS (Non-negotiable)

1. **Cross-reference requirement**: Only include complaints that appear in at least 2 independent sources
2. **Recency filter**: Prioritize complaints from the last 24 months; flag older issues and check if they've been resolved
3. **Pattern detection**: Distinguish between isolated incidents vs. systemic/repeated issues (note frequency)
4. **Source credibility weighting**:
   - Verified purchaser reviews → High weight
   - Named individuals with LinkedIn profiles → High weight
   - Anonymous forum posts → Low weight (only include if corroborated)
5. **Counter-evidence check**: For each major complaint, search for evidence the company has addressed or fixed the issue

---

## SOURCE PROTOCOL

### Documentation Requirements

For each source, document:
- Exact URL (not just platform name)
- Publication/review date
- Reviewer context: role, company size, industry, verified purchaser status
- Geographic region if available

### Primary Sources (Required)

| Source | How to Use |
|--------|------------|
| G2 | Navigate to product page, filter by 1-3 stars, read full reviews |
| Gartner Peer Insights | Focus on "Cons" and "Areas for Improvement" sections |
| TrustRadius | Check "What do you dislike?" responses |

### Secondary Sources (Corroboration)

- Reddit threads: r/salesforce, r/netsuite, r/mulesoft, r/devops, r/sysadmin
- Stack Overflow questions showing unresolved issues
- Official vendor community forums (support threads)
- LinkedIn posts and comments
- YouTube video comments on tutorials/reviews

### Tertiary Sources (Context)

- Glassdoor employee reviews (internal dysfunction signals)
- Job postings (high turnover in implementation roles = product complexity)
- Analyst reports (Gartner, Forrester) with noted weaknesses

---

## CATEGORIZATION FRAMEWORK

For each category below, provide:
- The specific complaint pattern
- Number of independent sources mentioning it
- Representative quotes (with source links)
- Severity assessment: Annoyance / Significant Pain / Deal-breaker
- Evidence of resolution or persistence

### Categories

#### 1. Pricing & Commercial
- Licensing model complexity
- Hidden costs / surprise charges
- Price increases at renewal
- Cost vs. value perception
- Minimum commitments / contract lock-in

#### 2. Implementation & Time-to-Value
- Deployment timelines (expected vs. actual)
- Professional services dependency
- Failed or abandoned implementations
- Internal resource requirements
- Partner/SI quality issues

#### 3. Technical Performance
- Sync reliability and failure rates
- Real-time vs. batch limitations
- Error handling and debugging
- Scalability issues
- API rate limits or throttling

#### 4. Usability & Learning Curve
- UI/UX complaints
- Documentation quality
- Training requirements
- Citizen integrator accessibility
- Developer experience

#### 5. Support & Customer Success
- Response times
- Technical competence of support
- Escalation difficulties
- Account management quality
- Community support availability

#### 6. Vendor & Platform Risk
- Migration/exit difficulty
- Data portability
- Acquisition or ownership changes
- Product roadmap concerns
- Sunset features or deprecated functionality

---

## OUTPUT FORMAT

For each complaint pattern discovered, use this structure:

```
### Complaint: [Clear description of the issue]

**Category**: [From list above]
**Frequency**: [Number of independent sources]
**Severity**: Annoyance / Significant Pain / Deal-breaker
**Status**: Ongoing / Partially Addressed / Resolved

#### Evidence

**Source 1**
> "[Exact quote]"
- URL: [link]
- Date: [date]
- Reviewer: [role, company size, industry]

**Source 2**
> "[Exact quote]"
- URL: [link]
- Date: [date]
- Reviewer: [role, company size, industry]

#### Counter-evidence
[Has vendor addressed this? Any evidence of fixes or improvements?]
```

---

## FACT-CHECK PROTOCOL

### Before Finalizing Any Complaint

For each complaint included in the final report, complete this fact-check:

#### Step 1: Source Verification
- [ ] Visit the source URL — confirm it exists and is accessible
- [ ] Confirm the quote is accurate (not paraphrased or taken out of context)
- [ ] Verify the date is correct
- [ ] Check if the reviewer profile still exists (not deleted)

#### Step 2: Claim Validation
- [ ] Is the complaint about the correct product? (Not a different product from same vendor)
- [ ] Is the complaint about the current version? (Not a legacy/deprecated version)
- [ ] Does the complaint describe a real limitation or a user error/misunderstanding?

#### Step 3: Current State Check
- [ ] Search vendor's release notes for fixes related to this issue
- [ ] Check vendor's community forum for official responses
- [ ] Search for recent reviews (last 6 months) mentioning this issue is resolved
- [ ] Check vendor's documentation for workarounds or solutions

#### Step 4: Context Validation
- [ ] Is the complaint relevant to our target market (mid-market)?
- [ ] Is the use case similar to what our prospects would have?
- [ ] Could this be an edge case or unusual configuration?

### Fact-Check Rating

Assign each complaint a confidence rating:

| Rating | Definition |
|--------|------------|
| ✅ **Verified** | 3+ sources, current issue, directly relevant to our market |
| ⚠️ **Likely Valid** | 2 sources, may be partially addressed, mostly relevant |
| ❓ **Unverified** | Single source or old data — DO NOT USE in sales materials |

**Only complaints rated ✅ Verified or ⚠️ Likely Valid should be used externally.**

---

## FINAL QUALITY CHECK

Before including any complaint, verify:

- [ ] Can I provide a clickable link to the source?
- [ ] Is the source less than 24 months old (or explicitly flagged if older)?
- [ ] Is it corroborated by at least one other independent source?
- [ ] Have I checked if the issue was resolved or addressed?
- [ ] Has it passed the Fact-Check Protocol above?
- [ ] Would I be comfortable if the competitor's CEO saw this claim?

**If any answer is NO**: Either find additional verification or exclude the claim.

---

## RESEARCH EXECUTION

1. Extract company/product information from the link provided below
2. Identify: Company name, Product name(s), Primary market positioning, Claimed features
3. Systematically work through each source type
4. Document findings in the output format
5. Run every finding through the Fact-Check Protocol
6. Assign confidence ratings
7. Only include ✅ and ⚠️ rated complaints in final deliverable

---

## TARGET COMPANY

Research the company at this link:

