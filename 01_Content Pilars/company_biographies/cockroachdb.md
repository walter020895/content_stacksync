# THE DATABASE THAT WON'T DIE: The Origin Story of CockroachDB

---

## I. THE HOOK: Looking Into Google's Crystal Ball

Mountain View, California. 2010.

Spencer Kimball stares at the architecture diagrams for Google Spanner—the database system Google is building to handle the internet's most demanding workload: AdWords.

Billions of dollars in advertising revenue. Millions of transactions per second. Data centers spanning the globe. The existing databases can't keep up. Even Google's legendary infrastructure is straining.

Spanner is the answer: a globally distributed relational database that provides the impossible combination of horizontal scale, ACID transactions, and global consistency. It's years ahead of anything in the outside world.

Kimball realizes something that will change his life.

"It was like looking into a crystal ball and asking, 'What are the parameters of a database that people are going to want in 2020?'" he later said. "Well, I knew in 2010, because Google was answering this question and I was there."

The technology is revolutionary. It's also locked inside Google, never to be released.

When Kimball eventually leaves Google, the frustration follows him. The world needs Spanner. Google won't share it.

Fine. He'll build his own.

He'll call it Cockroach—because like the insect, it'll be nearly impossible to kill.

---

## II. THE BACKSTORY: From GIMP to Google

**The Berkeley Students**

Long before Google, long before databases, Spencer Kimball and Peter Mattis were undergraduates at UC Berkeley with a side project.

In 1995, they created GIMP—the GNU Image Manipulation Program. It was an open-source alternative to Adobe Photoshop, and it exploded across the nascent internet. Designers, photographers, and hobbyists who couldn't afford Photoshop's prices suddenly had professional-grade tools for free.

GIMP became one of the most successful open-source projects of its era. It's still used by millions today.

The project was so successful that when Kimball and Mattis joined Google in 2002, they got an unusual welcome.

**The Google Welcome**

Larry Page and Sergey Brin—Google's founders—personally stopped by to greet the new hires.

"We love GIMP," they told Kimball and Mattis. The first Google logo? Created in GIMP.

The two Berkeley students who built an image editor in their spare time were now working at the center of the tech universe.

**The Google File System Team**

At Google, Kimball and Mattis joined the team building core infrastructure. They worked on the Google File System—the distributed storage layer that powered Google's search index and data processing.

They watched as Google's scale overwhelmed every traditional approach. Databases that worked for normal companies buckled under Google's load. The solutions Google invented—MapReduce, Bigtable, eventually Spanner—represented the bleeding edge of distributed systems.

**Ben Darnell**

Ben Darnell joined Google and worked on Google Reader—the beloved RSS aggregator that would eventually be shut down, to the internet's dismay.

Like Kimball and Mattis, Darnell absorbed Google's infrastructure philosophy: design for failure, scale horizontally, assume nothing is reliable.

The three would eventually find each other outside Google, united by a shared vision.

---

## III. THE GRIND: Viewfinder and the Birth of an Idea

**Leaving the Googleplex**

Darnell left Google first, in 2009, joining FriendFeed (later acquired by Facebook) and then Dropbox.

Kimball and Mattis left in 2012 to start a company called Viewfinder—a photo-sharing app. Darnell joined them a few months later.

Viewfinder was a solid product, but it wasn't the grand vision. In 2013, Square acquired the company. The founders joined Square, built what they needed to build, and started thinking about what came next.

**The Design Document**

In January 2014, while still at Square, Kimball wrote the first design document for what would become CockroachDB.

The inspiration was Spanner—but the goal was democratization. Google's infrastructure was the most advanced in the world, but nobody outside Google could use it. The rest of the industry was stuck with databases designed for a previous era.

Kimball's design described:
- A distributed SQL database
- Horizontal scaling across nodes
- Strong consistency and ACID transactions
- Automatic replication and repair
- Survivability across data center failures

Each node would be symmetric. No single point of failure. The system would colonize available resources and heal itself when parts failed.

Like a cockroach.

**The Name**

"I imagined the right database would be composed of symmetric nodes, require no external dependencies, spread itself naturally across availability zones for survival," Kimball explained. "Each node would autonomously replicate and repair data. These were the capabilities that led me to the name 'cockroach,' because they'll colonize the available resources and are nearly impossible to kill."

It was ugly. It was memorable. It captured exactly what the database was supposed to be.

**Open Source from Day One**

In February 2014, Kimball pushed the first CockroachDB code to GitHub. The project was open source from the start—a deliberate contrast to Google's proprietary approach.

The philosophy: if this technology was important enough for Google to build, it was important enough for everyone to have.

---

## IV. THE BREAKTHROUGH: Cockroach Labs

**May 2015: The Company**

On May 13, 2015, Kimball, Mattis, and Darnell officially founded Cockroach Labs. Benchmark Capital led the seed round, investing $6.3 million.

The pitch was simple: the world was moving to distributed, cloud-native infrastructure. Databases needed to follow. CockroachDB was the bridge—traditional SQL semantics with hyperscale architecture.

**The Multi-Cloud Moment**

CockroachDB hit the market at exactly the right moment.

Companies were adopting cloud infrastructure rapidly, but they were terrified of lock-in. AWS, Google Cloud, and Azure were all growing—and all competing to trap customers in their ecosystems.

CockroachDB offered escape. A database that ran identically across all clouds. True portability. No vendor lock-in.

The multi-cloud narrative resonated deeply with CTOs who'd watched their predecessors get trapped by Oracle.

**The Enterprise Push**

CockroachDB found early adoption with companies that needed massive scale and couldn't compromise on consistency:
- Financial services (every transaction must be correct)
- Gaming (millions of concurrent players)
- E-commerce (Black Friday traffic spikes)

The database that wouldn't die became the database that enterprises trusted with their most critical data.

---

## V. THE AFTERMATH: From Open Source to Unicorn

**The Funding Rounds**

The rounds grew rapidly:
- 2015: $6.3 million seed
- 2017: $27 million Series A
- 2018: $55 million Series B
- 2020: $86.6 million Series C
- 2021: $278 million Series D
- 2022: $160 million Series E at $5 billion valuation

Cockroach Labs reached unicorn status and beyond—all built on the frustration of three ex-Googlers who couldn't use Spanner.

**The Competitive Landscape**

CockroachDB now competes with the giants: Amazon Aurora, Google Cloud Spanner (ironically), and traditional databases like PostgreSQL. The open-source roots differentiate it—companies can run CockroachDB anywhere, with no cloud dependency.

**Spencer Kimball Today**

Kimball remains CEO of Cockroach Labs, steering the company through the competitive database market. The GIMP creator who caught Larry and Sergey's attention is now building infrastructure for the next generation of applications.

**The Full Circle**

The story has a certain symmetry: Berkeley students create open-source software that Google's founders use. Those students join Google and learn to build at unprecedented scale. They leave Google and create new open-source software—this time, database infrastructure that competes with Google itself.

GIMP was about giving everyone Photoshop's power.

CockroachDB is about giving everyone Spanner's power.

The mission hasn't changed. The scale has.

---

## Sources

- [CockroachDB - Wikipedia](https://en.wikipedia.org/wiki/CockroachDB)
- [TechCrunch: CockroachDB, The Database That Just Won't Die](https://techcrunch.com/2021/07/15/cockroachdb-ec1-origin/)
- [Contrary Research: Cockroach Labs Business Breakdown & Founding Story](https://research.contrary.com/company/cockroach-labs)
- [Spencer Kimball (Computer Programmer) - Wikipedia](https://en.wikipedia.org/wiki/Spencer_Kimball_(computer_programmer))
- [The Next Platform: Google Spanner Inspires CockroachDB To Outrun It](https://www.nextplatform.com/2017/02/22/google-spanner-inspires-cockroachdb-outrun/)
- [Brand Hopper: Scaling for the Future with Cockroach Labs](https://thebrandhopper.com/2023/03/19/scaling-for-the-future-with-cockroach-labs/)
- [Money Inc: 10 Things You Didn't Know about Spencer Kimball](https://moneyinc.com/spencer-kimball/)
