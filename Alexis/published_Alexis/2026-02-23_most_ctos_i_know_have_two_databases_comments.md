# Comments — Most CTOs I know have two databases
**Post:** [LinkedIn](https://www.linkedin.com/posts/favre-alexis_most-ctos-i-know-have-two-databases-one-share-7431857705117511680-DiF3)
**Date:** 2026-02-23
**Author:** Alexis

---

## RUBEN

**Option A — Sales call reality**
> "We see this in every sales call. The CTO describes two completely separate data strategies — one for their infra, one for their CRM — and treats it as normal. It's not normal. It's just familiar."

**Option B — Architecture shift**
> "The moment a customer starts querying Salesforce data with SQL from their own database, they stop treating it like a vendor tool. The architecture change changes how they think about the data."

**Option C — Dry one-liner**
> "The reconciliation spreadsheet in someone's Google Drive is always there. Always."

---

## NACHO

**Option A — Distilled truth**
> "You don't own the data you can't query."

**Option B — Mental model flip**
> "CRM as 'source of truth' was always the wrong model. It's a write surface. Your database is the truth."

**Option C — Market observation**
> "Half the companies I talk to have built entire teams around working around their CRM. That's not ops. That's a workaround stack."

---

## CARTER

**Option A — Discovery call irony**
> "I asked about the reconciliation spreadsheet in someone's Google Drive as a joke once. It's never a joke. It's always there."

**Option B — The 'real' source of truth**
> "Every mid-market ops team has a Notion doc or a Google Sheet that is 'the real source of truth.' They just don't call it that."

**Option C — Tuesday**
> "The CRM runs the business until it doesn't. And when it doesn't, everyone finds out at the same time on a Tuesday."

---

## BRITTANY

**Option A — Ops ownership**
> "From the ops side — the reconciliation spreadsheet isn't just a technical problem, it's a cultural one. It means somebody owns the discrepancy, and that somebody usually doesn't have the authority to fix the root cause."

**Option B — Invisible work**
> "And y'all — none of that 'CRM as write surface' architecture holds without someone doing the quiet ops work to keep it aligned. That person exists in every company and rarely gets credit."

**Option C — Quarter-end close**
> "This sounds purely technical until you've lived through a quarter-end close with three misaligned data sources. Then it becomes very personal, very fast."
