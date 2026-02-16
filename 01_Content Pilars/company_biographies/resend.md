# THE STRIPE FOR EMAIL: The Origin Story of Resend

---

## I. THE HOOK: The Email That Went to Spam

2022.

Zeno Rocha stares at his inbox, waiting for a password reset email that never arrives.

He checks spam. There it is.

This is not a new frustration. As Chief Product Officer at Liferay, he fought this battle. As VP of Developer Experience at WorkOS, he fought it again. Every company he'd worked at had the same problem: transactional emails—the password resets, the signup confirmations, the notifications that users actually needed—were ending up in spam folders.

The existing solutions—SendGrid, Mailgun, Postmark—were old. All founded around 2009-2010. All since acquired by larger companies. All increasingly focused on enterprise sales rather than developer experience.

Rocha knows what a good developer tool looks like. He'd spent years in open source, building tools that developers actually wanted to use. Email infrastructure looked nothing like that.

What if someone built the Stripe of email?

What if email sending could be as elegant as payment processing?

The idea won't leave him alone.

---

## II. THE BACKSTORY: The Open Source Developer

**From Brazil to Silicon Valley**

Zeno Rocha wasn't a typical startup founder. He was an open-source legend.

From Brazil, he'd built a reputation in the developer community through projects, writing, and speaking. He was known for developer tools that actually worked—clean APIs, thoughtful documentation, experiences that respected developers' time.

His career wound through developer-focused companies:
- Liferay: An enterprise open-source platform
- WorkOS: Developer infrastructure for enterprise features

At each stop, the same pain emerged: email was broken.

**The Email Problem**

The problem wasn't sending email—anyone could call an API and fire off a message. The problem was *deliverability*. Getting email into inboxes, not spam folders.

Email deliverability is a dark art:
- Domain reputation and authentication (SPF, DKIM, DMARC)
- IP warming and sender reputation
- Content analysis and spam triggers
- Bounce handling and list hygiene
- ISP relationships and feedback loops

The existing providers had the infrastructure, but their developer experience was trapped in 2010. Documentation was scattered. APIs were clunky. Setting up email felt like configuring a legacy enterprise system.

**Bu Kinoshita**

Rocha found his co-founder in Bu Kinoshita, an engineer who shared his obsession with developer experience. Together, they began exploring what a modern email platform would look like.

---

## III. THE GRIND: The Open Source Foundation

**React Email: The Gateway Drug**

Before building Resend, the team tackled a related problem: email templates.

Creating HTML emails that rendered correctly across email clients (Gmail, Outlook, Apple Mail, and dozens of others) was notoriously painful. CSS support was inconsistent. Testing was tedious. Most developers copied templates from five years ago and hoped for the best.

They built React Email—an open-source project for creating email templates with React components. The project exploded. Developers who'd suffered with inline styles and table layouts finally had a modern solution.

But React Email revealed something bigger: the email template was just the tip of the iceberg. The real pain was getting those beautiful emails into inboxes.

**Y Combinator Winter 2023**

In January 2023, Rocha and Kinoshita joined Y Combinator's Winter batch with a bold thesis: the email infrastructure market was ripe for disruption.

The incumbents were all 13+ years old. All had been acquired. All were optimizing for enterprise sales rather than developer love.

The comparison was clear: what Stripe did for payments, Resend could do for email. Take something complex and infrastructure-heavy, wrap it in an elegant API, and obsess over the developer experience.

Paul Graham agreed. He described Resend as "the Stripe for Email."

**The Waitlist Strategy**

During Y Combinator, Resend kept the product behind a waitlist. This wasn't artificial scarcity—it was deliberate quality control.

Each early user provided feedback. The API evolved. The documentation improved. By the time they opened to the public, the product had been refined through hundreds of real-world use cases.

---

## IV. THE BREAKTHROUGH: Developer-First Email

**The API**

Resend's API was exactly what you'd expect from someone who'd spent years in developer tools:

```javascript
await resend.emails.send({
  from: 'you@company.com',
  to: 'user@gmail.com',
  subject: 'Hello',
  html: '<p>Welcome!</p>'
});
```

Clean. Simple. No configuration nightmare. No 47-step setup process.

But the simplicity hid sophisticated infrastructure:
- Automatic domain authentication
- Built-in deliverability optimization
- Real-time analytics
- Webhook integrations

**The Documentation**

Rocha's open-source background showed in the documentation. It wasn't an afterthought—it was a product.

Clear examples. Copy-paste code. Honest explanations of email deliverability. The kind of documentation developers wished every API had.

**The Funding**

After Y Combinator, Resend raised a $3 million seed round. The investors read like a who's-who of developer tools:
- Y Combinator
- SV Angel
- Dylan Field (Figma founder)
- Guillermo Rauch (Vercel founder)

People who understood developer experience were betting on Resend.

---

## V. THE AFTERMATH: 80,000 Developers and Growing

**The Numbers**

By 2024, Resend had:
- 80,000+ developers using the platform
- A team of just 6 people
- Millions of emails sent daily

The efficiency was remarkable. A tiny team serving a massive developer community—the kind of leverage that only comes from obsessing over the right problems.

**The Ecosystem**

Resend integrated naturally into the modern developer stack:
- Works with React Email for templates
- Integrates with Next.js, Remix, and other frameworks
- Connects to the tools developers already use

The open-source foundation (React Email) drove awareness. The paid product (Resend) monetized the infrastructure.

**Zeno Rocha Today**

Rocha remains CEO, continuing to build in public and engage with the developer community. His approach—shipping fast, documenting well, and genuinely caring about developer experience—has become Resend's brand.

**The Lesson**

Resend's founding story is a reminder that old markets can be disrupted by teams who simply care more.

Email infrastructure wasn't exciting. The incumbents weren't failing. But they were coasting—optimizing for enterprise procurement rather than developer joy.

Rocha saw an opportunity not in new technology, but in new attitude. Treat developers like users who deserve great experiences. Build the API you wish existed. Document like your users' time matters.

Sometimes the biggest disruption is just giving a damn.

---

## Sources

- [Y Combinator: Resend - Email for Developers](https://www.ycombinator.com/companies/resend)
- [Resend: How We Got Here](https://resend.com/handbook/company/how-we-got-here)
- [Resend: About](https://resend.com/about)
- [Railway Blog: How Resend is Building a New Kind of Email Platform](https://blog.railway.com/p/zeno-rocha-resend)
- [APIs You Won't Hate: Building a Simple API for Email with Zeno Rocha](https://apisyouwonthate.com/podcast/building-a-simple-api-for-email-with-zeno-rocha-from-resend/)
- [Ownerpreneur: How Zeno Rocha Built a 20,000-User Email Platform in 9 Months](https://ownerpreneur.com/case-studies/resend-com-how-zeno-rocha-built-a-20000-user-email-platform-in-9-months/)
- [Mintlify: Resend Customer Story](https://www.mintlify.com/customers/resend)
