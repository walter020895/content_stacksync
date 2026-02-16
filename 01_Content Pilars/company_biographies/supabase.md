# THE OPEN SOURCE FIREBASE: The Origin Story of Supabase

---

## I. THE HOOK: Eight Databases to Eight Hundred

May 2020.

Paul Copplestone stares at his dashboard. Eight databases. That's all Supabase hosts after months of work. Eight.

He and his co-founder Ant Wilson have been grinding since January. They've raised a small pre-seed round. They've built the core product—real-time Postgres, the thing they know developers need. They've launched it to the world.

And the world has responded with... eight databases.

Copplestone opens the website code and looks at the tagline: "Real-time Postgres."

It's accurate. It's technically correct. It's also completely failing to communicate why anyone should care.

He thinks back to his previous startup, Nimbus for Work in Singapore. He remembers the hell of using Firebase—the slow queries, the limited flexibility, the vendor lock-in. He remembers the workarounds he had to build. He remembers how desperate he was for an alternative.

On impulse, he changes the tagline: "The open-source Firebase alternative."

He pushes the update live. Then he goes to bed.

Three days later, Supabase hosts eight hundred databases.

---

## II. THE BACKSTORY: The Firebase Problem

**Paul Copplestone: The CTO Who Got Burned**

Before Supabase, Paul Copplestone was CTO of Nimbus for Work, a Singapore-based startup building a chat application. The product needed WhatsApp-level functionality: real-time messaging, voice messaging, the works.

The obvious choice was Google Firebase. Everyone used Firebase. It was the standard backend-as-a-service for startups that needed to move fast.

But Firebase had problems.

Cloud Firestore, Firebase's database, was too slow for what Nimbus needed. The querying options were limited. The data model was inflexible. As the product grew more complex, the team found themselves fighting against Firebase instead of building with it.

Copplestone devised a workaround: attach serverless functions to Firestore and replicate data into a Postgres database. It was a hack, but it worked. Eventually, the team migrated entirely to Postgres.

And that's when Copplestone noticed something.

Postgres was powerful—far more powerful than Firestore. But it lacked the real-time features that made Firebase so useful. There was no "push" of data changes to connected clients. You had to poll the database, which was slow and expensive.

What if someone combined Postgres's power with Firebase's real-time capabilities?

What if someone built the Firebase that Firebase *should* have been?

**Ant Wilson: The Engineer**

Ant Wilson had a software engineering background and an entrepreneurial streak. He'd co-founded Crypto Squad and STYLINDEX before meeting Copplestone through the Entrepreneur First accelerator program in Singapore.

The two had lived together during the program, bonding over late-night discussions about technology and business. When Copplestone pitched the idea of an open-source Firebase alternative built on Postgres, Wilson was intrigued.

It was technically ambitious. Postgres wasn't designed for real-time by default. But if they could crack it...

In January 2020, Wilson joined as co-founder and CTO.

---

## III. THE GRIND: From Zero to Y Combinator

**January 2020: The Founding**

Supabase started in January 2020, just as the world was about to change. Within weeks of writing their first code, COVID-19 would lock down the planet and send developers everywhere scrambling for remote-first tools.

The initial vision was clear:
- Postgres as the foundation (because developers know and trust Postgres)
- Real-time subscriptions (the Firebase killer feature, but without the Firebase lock-in)
- Open source (so nobody ever gets trapped)
- Instant APIs (so you can build without writing backend code)

**The $100K Pre-Seed**

Copplestone and Wilson raised $100,000 from angel investors—enough to build and survive while finding product-market fit.

They built. They launched. They waited.

By April 2020, after months of work, Supabase hosted exactly eight databases.

**The Tagline That Changed Everything**

"Real-time Postgres" was a technical description. It appealed to database nerds who understood the implications. But most developers weren't thinking about real-time Postgres. They were thinking about Firebase and its limitations.

When Copplestone changed the tagline to "the open-source Firebase alternative," everything clicked.

Firebase was everywhere. Every startup had used it. Every developer had hit its limitations. And everyone knew the feeling of vendor lock-in—the creeping realization that migrating away would be impossibly expensive.

"Open-source Firebase alternative" wasn't just positioning. It was *liberation*.

Three days after the tagline change: eight hundred databases.

**Y Combinator Summer 2020**

The momentum caught Y Combinator's attention. Supabase joined the Summer 2020 batch—one of the most unusual YC cohorts in history, conducted entirely remotely due to the pandemic.

By July 2020, Supabase hosted over 3,000 databases. The growth was exponential.

---

## IV. THE BREAKTHROUGH: Building the Developer Stack

**The Full Backend**

Supabase didn't stop at real-time Postgres. They built the entire backend stack developers needed:

- **Database**: Postgres, with real-time subscriptions
- **Authentication**: Built-in user management
- **Storage**: File storage with CDN
- **Edge Functions**: Serverless compute
- **Auto-generated APIs**: REST and GraphQL without writing code

The philosophy was clear: take everything Firebase did and rebuild it on open standards. No lock-in. No proprietary formats. If you wanted to leave Supabase, you could export your Postgres database and take it anywhere.

**The Developer Love**

Developers didn't just use Supabase—they evangelized it.

The product hit a nerve. After years of fighting with Firebase's limitations, here was something that felt *right*. Postgres under the hood meant familiar SQL. Open source meant transparency and control. The DX (developer experience) was smooth enough to build a weekend project, powerful enough to scale to millions.

Hacker News threads exploded with enthusiasm. Twitter threads went viral. The growth was word-of-mouth, developer-to-developer, exactly how Firebase had grown years before.

---

## V. THE AFTERMATH: From Weekend Project to $5 Billion

**The Funding Rocket Ship**

The rounds came fast:
- **December 2020**: $6 million seed (led by Y Combinator)
- **September 2021**: $30 million Series A
- **May 2022**: $80 million Series B
- **September 2024**: $80 million Series C
- **April 2025**: $200 million Series D at $2 billion valuation
- **October 2025**: $5 billion valuation

Total funding: nearly $400 million.

Supabase went from eight databases to powering hundreds of thousands of projects in five years.

**The Open Source Bet**

The open-source decision proved strategic. Unlike Firebase, which Google controls completely, Supabase's core components are open source. Developers can self-host if they want. They can inspect the code. They can contribute.

This created trust. Enterprises that would never bet on a proprietary startup platform were willing to bet on something they could always escape from.

**Where Supabase Is Now**

Today, Supabase powers projects ranging from weekend hackathons to production applications serving millions of users. The team has grown to over 120 people.

The "open-source Firebase alternative" has become the *default* backend-as-a-service for a generation of developers who saw through Firebase's limitations.

Paul Copplestone, the CTO who got burned by Firebase, built the alternative he wished existed. And all it took was a tagline change to make the world notice.

Sometimes the product is ready before the positioning is.

---

## Sources

- [Y Combinator: Supabase](https://www.ycombinator.com/companies/supabase)
- [Contrary Research: Supabase Business Breakdown & Founding Story](https://research.contrary.com/company/supabase)
- [Primary VC: Supabase's Paul Copplestone Interview](https://www.primary.vc/firstedition/posts/supabase-s-paul-copplestone-on-working-to-create-the-world-s-most-productive-developer-platform/)
- [TechCrunch: Supabase Raises $6M for Open-Source Firebase Alternative](https://techcrunch.com/2020/12/15/supabase-raises-6m-for-its-open-source-firebase-alternative/)
- [TechCrunch: Supabase Nabs $5B Valuation](https://techcrunch.com/2025/10/03/supabase-nabs-5b-valuation-four-months-after-hitting-2b/)
- [Frederick: Founder Story - Paul Copplestone of Supabase](https://www.frederick.ai/blog/paul-copplestone-supabase)
- [Medium: Why Supabase Became the Go-To Open-Source Alternative to Firebase](https://medium.com/@takafumi.endo/why-supabase-became-the-go-to-open-source-alternative-to-firebase-2d3cd59e7094)
