# THE BIGQUERY FOUNDER'S SECOND ACT: The Origin Story of MotherDuck

---

## I. THE HOOK: Most People Don't Have Big Data

Seattle, Washington. 2022.

Jordan Tigani has spent over a decade building one of the world's largest data systems. As a founding engineer at Google BigQuery, he helped create the data warehouse that processes petabytes for the world's biggest companies.

He's supposed to believe in big data. He's supposed to evangelize the hyperscale systems he helped build.

Instead, he's having a crisis of faith.

"I started noticing that most people actually didn't have big data," Tigani later explained. "And the ones who do tend to only use a small portion of that data."

The math doesn't lie. People might have ten years of logs, but they're only looking at the past seven days. They might have billions of rows in their warehouse, but their actual queries hit a tiny fraction.

The systems Tigani spent his career building—massively distributed, scaled horizontally across clusters—are overkill for 99% of actual workloads.

Then he sees DuckDB.

DuckDB is an embedded analytical database—a SQLite for analytics. It runs entirely on a single machine, in-process, with no server. It's incredibly fast because it doesn't have the overhead of distributed computing.

"Wow, this is amazing," Tigani thinks. "Someone should really build a serverless version."

He pauses.

At Google, he helped take one query engine (Dremel) and turn it into a serverless cloud service (BigQuery).

Why couldn't he do it again?

The man who built Google's data warehouse is about to bet against the entire big data paradigm he helped create.

---

## II. THE BACKSTORY: Building BigQuery

**The Google Years**

Jordan Tigani joined Google in the early days of cloud computing. He became a founding engineer on BigQuery—Google's fully managed, serverless data warehouse.

BigQuery was revolutionary. Traditional data warehouses required provisioning servers, managing clusters, tuning performance. BigQuery eliminated all of that. You uploaded data, wrote SQL, and Google handled everything else.

The scale was staggering. BigQuery processed queries across thousands of machines, handling petabytes of data for customers like Spotify, Twitter, and major financial institutions.

Tigani became an expert in hyperscale data systems. He understood every tradeoff, every architectural decision, every assumption baked into big data infrastructure.

**The Doubt Emerges**

But somewhere along the way, Tigani started questioning the assumptions.

"The systems that we had bent over backward to build were highly scaled-out systems that glued a SQL interface on top," he observed. "It seemed like overkill."

Most companies didn't have petabytes. They had gigabytes. Maybe terabytes. Amounts that fit comfortably on a modern laptop.

For these companies, BigQuery's power was wasted. They were paying for distributed computing overhead they didn't need. They were adding complexity that didn't serve them.

**SingleStore and the Confirmation**

After Google, Tigani became Chief Product Officer at SingleStore—another database company. The experience reinforced his suspicions.

The vast majority of database workloads were small. Less than 10 gigabytes. Low bandwidth. Simple queries.

The big data industry had optimized for the exceptions while ignoring the common case.

---

## III. THE GRIND: Discovering DuckDB

**The DuckDB Moment**

DuckDB was an open-source project from Centrum Wiskunde & Informatica (CWI) in the Netherlands, led by Hannes Mühleisen and Mark Raasveldt.

The concept was simple: an embedded analytical database. Like SQLite, but for analytics instead of transactions. Runs in-process. No server. Just a library you include in your code.

DuckDB was shockingly fast. Because it wasn't distributed, it avoided all the coordination overhead of cluster systems. For datasets that fit in memory—which was most datasets—it outperformed systems a hundred times more complex.

Tigani saw DuckDB and immediately recognized the opportunity. His entire career had been building the complex systems. Now someone had proved you could get better performance with elegant simplicity.

**The Vision: Serverless DuckDB**

The insight: DuckDB was brilliant for local analytics, but it had no cloud story. You couldn't share queries, collaborate on data, or persist state across machines.

What if you built a cloud layer around DuckDB? Serverless, like BigQuery. Simple, like DuckDB. The best of both worlds.

You could run queries locally when that made sense, sync to the cloud when you needed persistence or collaboration, and switch between seamlessly.

**Meeting Hannes Mühleisen**

Tigani reached out to Hannes Mühleisen, DuckDB's co-creator.

"What made Jordan stand out to me was his background at SingleStore and BigQuery," Mühleisen later recalled. "It was a big shock that somebody who had this kind of background would consider our scrappy single-node system for something serious."

The partnership formed. DuckDB Labs would own equity in the new company, ensuring alignment between the open-source project and the commercial entity.

---

## IV. THE BREAKTHROUGH: Building MotherDuck

**June 2022: The Team Assembles**

MotherDuck started thinking about things in April 2022. By June, the founding team had gathered in Seattle.

First to join was Tino Tereshko, also a veteran of Google BigQuery. They understood each other's perspective—both had built hyperscale systems and now questioned whether all that complexity was necessary.

**The Name**

The name came from an unlikely source: Lloyd Tabb, founder of Looker (acquired by Google for $2.6 billion).

"Trust me, it is a good name," Tabb said. "And the domain name is available."

MotherDuck it was.

**The Product: EasyQuery**

The internal code name was "EasyQuery." The focus was singular: make it easy to understand your data.

Not powerful. Not scalable. Not enterprise-grade.

Easy.

The team built a hybrid system:
- Local execution for speed (DuckDB running on your machine)
- Cloud sync for collaboration and persistence
- Seamless switching between local and remote
- Web interface for exploration

**The Funding**

The pedigree attracted investors quickly:
- $12 million seed round led by Redpoint Ventures
- $35 million from Andreessen Horowitz (a16z)

Total: $47.5 million before public launch.

Investors were betting on Tigani's thesis: the big data era had overbuilt for problems most companies didn't have. A simpler approach could capture a massive market.

---

## V. THE AFTERMATH: Challenging Big Data Orthodoxy

**The Public Launch**

MotherDuck emerged from stealth in November 2022. The launch resonated immediately with developers frustrated by complex data infrastructure.

The value proposition was clear: why run a distributed data warehouse when your data fits on a laptop? Why pay for cluster overhead when a single machine is faster?

**The Market Position**

MotherDuck positioned itself against the giants:
- Snowflake: powerful but expensive, complex
- BigQuery: powerful but built for massive scale
- Databricks: powerful but oriented toward data engineering

MotherDuck would be the simple option. The one you chose when you wanted to analyze data without building infrastructure.

**Jordan Tigani Today**

Tigani runs MotherDuck as CEO, evangelizing the counter-intuitive message: most companies need less data infrastructure, not more.

It's a strange position for someone who built BigQuery. But Tigani sees it as intellectual honesty: he built big data systems, and now he's telling people when they don't need them.

**The Lesson**

MotherDuck's founding story is about questioning your own expertise.

Tigani spent his career building hyperscale systems. He was successful. He was respected. He could have kept building bigger and bigger data platforms.

Instead, he looked at actual workloads and realized most of them didn't need what he'd been building. The complexity was solving the wrong problem.

Building MotherDuck required admitting that the paradigm he'd championed was overkill for most use cases. It required betting against his own resume.

Sometimes the most valuable thing an expert can do is tell you when you don't need their expertise.

---

## Sources

- [MotherDuck: About Us](https://motherduck.com/about-us/)
- [TechCrunch: MotherDuck secures investment from Andreessen Horowitz](https://techcrunch.com/2022/11/15/motherduck-secures-investment-from-andreessen-horowitz-to-commercialize-duckdb/)
- [Madrona: MotherDuck's Jordan Tigani and DuckDB's Hannes Mühleisen](https://www.madrona.com/motherduck-jordan-tigani-duckdbs-hannes-muhleisen-partnerships-commercializing-open-source-projects/)
- [GeekWire: Seattle startup MotherDuck emerges from stealth](https://www.geekwire.com/2022/seattle-data-analytics-startup-motherduck-emerges-from-stealth-reveals-47-5m-in-funding/)
- [Zero Prime Podcast: From BigQuery to MotherDuck](https://www.zeroprimepodcast.com/e22-from-bigquery-to-motherduck-the-journey-of-jordan-tigani/)
