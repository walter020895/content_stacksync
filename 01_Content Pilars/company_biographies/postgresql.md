# THE ELEPHANT IN THE ROOM: The Origin Story of PostgreSQL

---

## I. THE HOOK: The Berkeley Professor's Obsession

Evans Hall, UC Berkeley. June 1989.

The grad students weren't sleeping.

Not unusual at Berkeley's computer science department, where fluorescent lights burned past 3 AM most nights. But this was different. This was the week before Version 1 of POSTGRES had to ship, and Michael Stonebraker—the man who'd already built one revolutionary database system—was pacing the halls with that particular energy that made everyone nervous.

"It's not fast enough," he said, staring at a printout of query execution times.

One of his grad students, bleary-eyed, looked up from a terminal. "It's faster than Ingres was at this stage."

"I don't care about Ingres. Ingres is the past. This"—Stonebraker tapped the printout hard enough to make it flutter—"this has to be different. Not just faster. *Smarter*."

The distinction mattered. Because what they were building wasn't just another relational database. It was a database that could evolve. A database that users could extend with their own data types, their own operators, their own everything.

It was either the most ambitious database project ever attempted in academia, or an over-engineered disaster waiting to collapse.

Stonebraker had bet his reputation on one idea: **databases were too stupid, and making them smarter required making them extensible.**

---

## II. THE BACKSTORY: The Man Who Got Mad at His Own Database

**The Ingres Years: 1973-1984**

Michael Stonebraker didn't start out trying to revolutionize databases. He started out trying to prove that Edgar Codd was right.

In 1970, Codd at IBM published a paper proposing something radical: organizing data in tables with rows and columns, manipulated through relational algebra. It was elegant, powerful, and IBM mostly ignored it.

Stonebraker, a young professor at UC Berkeley, saw something different: a chance to prove that academic research could build real systems. In 1973, he launched Ingres with Eugene Wong and a crew of graduate students.

By the late 1970s, Ingres wasn't just a research prototype—it was a production database system with a growing user base. In 1980, Stonebraker co-founded Relational Technology Inc. to commercialize it.

Ingres proved Codd right. Relational databases were the future.

But by the mid-1980s, Stonebraker was watching Ingres—his creation—run into walls.

**The Three Walls**

**Wall #1: New Data Types**

Ingres was built around fixed data types: integers, floats, strings, dates. Fine for business data. But the world was generating new kinds of data—geographic coordinates, time-series, complex geometric objects. Every time someone asked if Ingres could handle their exotic data type, the answer was: "No, and adding support would require rewriting core parts."

This drove Stonebraker insane.

**Wall #2: Rigid Architecture**

Ingres was monolithic. Want to experiment with a new indexing structure? Modify the core engine. Want a specialized optimizer? Same thing. The database was a closed box.

**Wall #3: The Knowledge Base Problem**

Researchers wanted to build expert systems on databases, but relational databases weren't designed for complex reasoning. They reinvented database internals from scratch because existing databases couldn't support their needs.

It felt like waste. Intellectual waste.

**The Decision: Start Over**

By 1984, Stonebraker faced a choice: keep iterating on Ingres, or start over.

He started over.

The project would be called POSTGRES—"POST inGRES." The name was a statement: this was what came *after* Ingres.

**The Core Insight: Extensibility as First Principle**

What if users could define their own data types—along with their own functions, operators, indexing methods—and the query processor would *just work* with them?

What if the database was a platform that could be programmed, not just queried?

This violated every principle of careful database engineering. But Stonebraker had a hunch: the cost of *not* being extensible was higher than the architectural complexity required to enable it.

---

## III. THE GRIND: Building the Impossible Thing

**1986-1994: The Berkeley Years**

POSTGRES launched with funding from DARPA, the Army Research Office, and the National Science Foundation. This wasn't a side project—it was a multi-million-dollar research program.

Stonebraker assembled graduate students. PhD students in their twenties, many who'd never worked on a database before.

One former student described his management style: "Mike would come into your office with a paper he'd read that morning, point at a diagram, and say, 'We should implement this. How long will it take?' And you'd say, 'Six months,' and he'd say, 'You have three weeks. Go.'"

**The Features**

They built:
- **User-defined data types with custom operators**: Want polygons? Define them. Want "polygon contains point"? Define it.
- **User-defined functions**: Write functions in C, load them into the database, call them in queries.
- **Rules and triggers**: Automatic actions in response to events.
- **Time travel queries**: Query the database "as of" a particular time in the past.
- **Table inheritance**: Tables could inherit columns from parent tables.

**1989: Version 1 Ships**

June 1989: POSTGRES Version 1 shipped. It was rough. The documentation was sparse. Performance was mediocre.

But it worked. The extensibility features worked. Users reported successfully defining custom data types and querying them.

**1994: The End of Berkeley**

In 1994, POSTGRES Version 4.2 shipped—the last Berkeley version.

The project had one massive problem: **it didn't speak SQL.**

POSTGRES used PostQUEL, an extended version of Ingres's query language. More powerful than SQL in some ways, but by 1994, SQL had won. Oracle, IBM, Microsoft—everyone used SQL.

A database that didn't speak SQL was a dead end.

The Berkeley project officially ended. Stonebraker moved on. The source code sat there—impressive, powerful, and almost completely unusable.

**Two Students Refused to Let It Die**

Andrew Yu and Jolly Chen were grad students who'd been using POSTGRES. They loved it but felt the pain of PostQUEL.

So they had a simple idea: replace PostQUEL with SQL.

"Simple" in concept. Horrifying in implementation.

They started in 1994, working nights and weekends. They weren't funded. This wasn't their dissertation research. They just believed it needed to exist.

By the time they finished:
- The codebase was 25% smaller
- The system was 30-50% faster
- It spoke SQL

They called it **Postgres95** and released it as open source in May 1995.

**1996: PostgreSQL**

The name changed to PostgreSQL, signaling continuity with POSTGRES plus SQL support.

---

## IV. THE BREAKTHROUGH: Trust Takes Time

**1997-2001: The Reliability Crucible**

Trust takes time with databases.

PostgreSQL in the late 1990s was powerful but not yet trustworthy. It had bugs. Weird edge cases. Performance cliffs.

The community spent years in the crucible of reliability testing. Every bug report became a test case. Every crash dump got analyzed.

This wasn't glamorous work. It was grinding, detail-oriented debugging.

**2001: ACID Compliance**

PostgreSQL 7.1 achieved full ACID compliance. This was the watershed moment.

ACID compliance meant PostgreSQL could be compared directly to Oracle, DB2, and SQL Server on correctness grounds. It wasn't "pretty good for open source"—it was legitimate.

**PostGIS: Proving Extensibility Works**

In 2001, PostGIS launched—an extension adding geographic objects to PostgreSQL.

The critical detail: **it was built entirely as an extension. No one modified PostgreSQL's core code.**

Developers created new data types (geometry, geography), new operators (distance, intersection), new indexing methods (R-tree)—and PostgreSQL's extension infrastructure just handled it.

This was exactly what Stonebraker envisioned in 1986.

PostGIS became wildly popular. Government agencies, logistics companies, web companies—all became PostgreSQL users because PostGIS only ran on PostgreSQL.

The flywheel began: PostgreSQL's extensibility attracted extension developers. Extensions attracted users. Users contributed to stability. Which attracted more extensions.

---

## V. THE AFTERMATH: The Elephant's Stampede

**2008-2015: Enterprise Adoption**

The 2008 financial crisis changed enterprise software. Companies scrutinized every line item, including Oracle's expensive licenses.

CTOs started asking: "Do we actually need Oracle?"

For many workloads, the answer was no.

PostgreSQL offered:
- Free (no license fees)
- Extensible
- Reliable enough for most workloads
- Strong community support

The migration pattern emerged: Use PostgreSQL for new projects. Migrate one non-critical system. Build confidence. Then cascade.

**The Cloud Era**

Every major cloud provider now offers managed PostgreSQL:
- Amazon RDS and Aurora
- Google Cloud SQL
- Microsoft Azure Database
- Heroku Postgres
- Dozens of others

These services generate billions in revenue, proving PostgreSQL's value.

**The Extension Ecosystem**

PostGIS was just the beginning:
- **TimescaleDB**: Time-series optimization
- **Citus**: Distributed PostgreSQL
- **pgvector**: Vector similarity search for AI
- **Hundreds more**

Each proves Stonebraker's thesis: a database that lets users extend it becomes more valuable over time, because extensions compound.

**2025: The Modern Era**

PostgreSQL is now:
- **4th most popular database** globally (DB-Engines)
- **Most popular among developers** starting new projects
- **Default for modern web frameworks** (Rails, Django)
- **Running mission-critical systems** at Apple, Instagram, Spotify, Reddit

Still community-governed. No PostgreSQL Inc. Development happens through public mailing lists and annual releases.

**The Culture**

Talk to PostgreSQL core developers, themes emerge:
- **Correctness over speed**: Choose correct behavior even if slower
- **Standards compliance**: Implement SQL standards properly
- **Backward compatibility**: Avoid breaking existing applications
- **Community over corporate**: Technical consensus, not corporate control

This culture traces to Berkeley. Academic databases care about correctness and elegance.

**The Legacy**

Michael Stonebraker won the Turing Award in 2014—computer science's Nobel Prize.

In interviews, he's characteristically blunt: "I didn't expect it to last this long. I thought we'd built a research prototype, proven concepts, and moved on. The fact that people turned it into a production system used by millions? That wasn't the plan."

But all of it was enabled by the architectural decisions made in 1986: extensibility, user-defined types, a platform mindset.

PostgreSQL is what Stonebraker built without knowing he was building it: a database that could survive its creators, evolve beyond their vision, and become essential infrastructure for a digital world they couldn't have imagined.

The elephant—PostgreSQL's logo, chosen because elephants never forget—is in every room now.

---

## Sources

- [PostgreSQL - Wikipedia](https://en.wikipedia.org/wiki/PostgreSQL)
- [Michael Stonebraker - Wikipedia](https://en.wikipedia.org/wiki/Michael_Stonebraker)
- [PostgreSQL Official History](https://www.postgresql.org/docs/current/history.html)
- [The Berkeley POSTGRES Project](https://dsf.berkeley.edu/postgres.html)
- [PostGIS - Wikipedia](https://en.wikipedia.org/wiki/PostGIS)
