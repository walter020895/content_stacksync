# THE HUMONGOUS DATABASE: The Origin Story of MongoDB

---

## I. THE HOOK: 400,000 Ads Per Second

New York City. Mid-2000s.

Somewhere in a server room, Oracle databases are screaming. Not literally, but the metrics tell the story: latency spikes, timeouts, queries backing up like traffic on the FDR at rush hour.

DoubleClick is serving 400,000 ad requests per second. Every millisecond of delay costs money. Every database failure means advertisers don't pay, publishers don't get paid, and the whole machine of internet advertising grinds toward chaos.

Dwight Merriman, DoubleClick's CTO, stares at the monitoring dashboards. He's been fighting this battle for years. The relational database—Oracle, the king of enterprise data—was designed for a different era. An era of structured forms and predictable queries. Not an era where the entire internet is screaming for data at scales nobody anticipated.

The problem isn't Oracle's fault, exactly. It's the architecture. Rows and columns. Rigid schemas. Join operations that multiply in cost as data grows. The relational model is beautiful and mathematical and completely wrong for what DoubleClick is trying to do.

Merriman makes a mental note: *If I ever build another company, the database will be different.*

He doesn't know it yet, but that mental note will become a $30 billion company.

---

## II. THE BACKSTORY: The DoubleClick Mafia

**The Original Ad-Tech Empire**

Before Google owned online advertising, DoubleClick was king.

Founded in 1996, DoubleClick pioneered the technology that serves banner ads across the internet. When you visited a website in the late '90s or early 2000s and saw an ad, there was a good chance DoubleClick's servers had decided which ad you'd see and tracked whether you clicked it.

Dwight Merriman was the technical architect. Kevin Ryan was the CEO. Together, they built one of the first internet-scale infrastructure companies—a machine that handled billions of requests daily, years before "big data" became a buzzword.

But building that machine had taught them a painful lesson: the database tools they had were fundamentally inadequate.

**Eliot Horowitz: The ShopWiki Veteran**

Eliot Horowitz joined DoubleClick as an engineer and lived through the scaling nightmares firsthand. He later founded ShopWiki, a comparison shopping site, where he encountered the same problems from a different angle.

Traditional relational databases were:
- **Expensive**: Enterprise licenses cost millions
- **Inflexible**: Every schema change required migrations, downtime, prayer
- **Unable to scale horizontally**: When you needed more capacity, you bought bigger, more expensive machines—you couldn't just add commodity servers

Horowitz, like Merriman, became obsessed with the question: *Why do databases have to work this way?*

---

## III. THE GRIND: Building 10gen

**2007: The Founding**

In 2007, Merriman, Horowitz, and Kevin Ryan founded a company called 10gen in New York City. The name referenced "tenth generation" computing—a nod to how far computing had evolved and where it was heading.

The original vision wasn't a database company at all. It was a *platform as a service*—a full cloud stack for running applications. Think: a precursor to Heroku, built entirely on open-source components.

There was just one problem.

**The Database That Didn't Exist**

As they tried to build their platform, 10gen's team went looking for a database that fit their principles:
- Horizontally scalable (add more servers, not bigger servers)
- Schema-flexible (change your data model without migrations)
- Developer-friendly (work with data in formats programmers actually use)
- Cloud-native (designed for distributed systems from day one)

Nothing existed that checked all the boxes.

So Horowitz started writing code. If the database they needed didn't exist, they would build it.

**The Name**

They needed a name for this internal database project. Something that conveyed its purpose: handling massive amounts of data. Dwight Merriman suggested a playful compression of "humongous."

*MongoDB.*

A database for humongous data.

**The Pivot**

By 2009, something unexpected was happening. 10gen released MongoDB as open source, initially just as a component of their platform.

Developers found it.

Not for the platform—for the database itself. The ability to store JSON-like documents without declaring a schema first? Revolutionary for web developers. The ability to scale horizontally by adding commodity servers? Exactly what startups needed. The developer-friendly query language? A breath of fresh air compared to SQL's verbosity for certain use cases.

MongoDB was spreading through the developer community faster than anyone anticipated. The platform-as-a-service vision was interesting, but the database was *on fire*.

10gen's leadership made a critical decision: pivot. Abandon the platform. Go all-in on MongoDB.

The accidental database became the entire company.

---

## IV. THE BREAKTHROUGH: The NoSQL Revolution

**The Movement**

MongoDB emerged into a world primed for disruption.

By 2009, the internet had changed. Web applications weren't just serving static pages—they were handling user-generated content, social feeds, real-time updates. The data was messy, nested, unpredictable. The rigid rows and columns of relational databases felt like fitting a square peg into a round hole.

A term emerged for this new wave of databases: *NoSQL*. (Some said it meant "not SQL"; others claimed "not only SQL.") MongoDB became one of the movement's flagship products.

**The Document Model**

MongoDB's core innovation was the *document model*. Instead of storing data in tables with fixed columns, MongoDB stored data as documents—essentially JSON objects that could contain nested arrays, subdocuments, any structure you needed.

For a web developer, this meant:
- Store data the way your application thinks about it
- No mapping layer between your code and your database
- Evolve your schema as your product evolves—just start storing new fields

The schema flexibility was liberating. In the early days of a startup, when you're iterating rapidly and your data model changes weekly, not having to run migration scripts was transformative.

**Horizontal Scaling**

The second breakthrough was *sharding*—automatic horizontal scaling.

Traditional databases scaled *vertically*: buy a bigger machine. Eventually, you hit a ceiling. The biggest machine in the world still has limits.

MongoDB could scale *horizontally*: spread your data across dozens or hundreds of commodity servers. Need more capacity? Add more nodes. The database handles distributing the data automatically.

For companies facing DoubleClick-scale problems—or companies that dreamed of reaching that scale—this was the answer.

---

## V. THE AFTERMATH: From New York Underdogs to IPO

**The New York Question**

"So when are you moving to California?"

Every VC meeting started the same way. A database company based in New York? The database world lived in Silicon Valley. Oracle was in Redwood Shores. The expertise, the engineers, the ecosystem—all of it was on the West Coast.

"People thought we were completely crazy for starting a database company in New York," the founders later recalled.

But they stayed. DoubleClick had been a New York company. The advertising industry was in New York. They knew how to build infrastructure companies from Manhattan.

**The Funding**

Despite the geographic skepticism, money came. Union Square Ventures. Sequoia Capital. Others followed.

By 2017, MongoDB had raised $311 million in venture funding. The company that started as a side project inside a platform-as-a-service had become one of the most valuable database companies in the world.

**The IPO**

On October 20, 2017, MongoDB went public on NASDAQ under the ticker MDB. The IPO priced at $24 per share, raising $192 million.

The market loved the story. A developer-first database. The NoSQL leader. The antidote to Oracle's complexity.

Within years, MongoDB's market cap would soar past $30 billion. The database named after "humongous" had become, fittingly, humongous itself.

**The 10gen Rebrand**

In 2013, the company officially renamed itself MongoDB Inc. The 10gen platform was long gone. The database was everything.

**Where MongoDB Is Now**

Today, MongoDB powers applications at thousands of companies—from startups to Fortune 500 enterprises. MongoDB Atlas, the company's cloud database service, has become its fastest-growing product, handling the infrastructure so developers can focus on building.

The lessons from DoubleClick live on in every document stored, every shard distributed, every developer who never has to run a schema migration just to add a new field.

Because databases don't have to work the way they always have.

Sometimes, you have to build the tool that should have existed all along.

---

## Sources

- [MongoDB Inc. - Wikipedia](https://en.wikipedia.org/wiki/MongoDB_Inc.)
- [MongoDB - Wikipedia](https://en.wikipedia.org/wiki/MongoDB)
- [MongoDB Company Page](https://www.mongodb.com/company)
- [CNBC: Disruptors 2014 - MongoDB](https://www.cnbc.com/2014/06/17/disruptors-in-2014-mongodb.html)
- [Yahoo News: People Told MongoDB Founders They Were Crazy](https://www.yahoo.com/news/people-told-mongodb-founders-were-222500378.html)
- [AlleyCorp: MongoDB](https://alleycorp.com/companies/mongodb/)
- [Eliot Horowitz - Wikipedia](https://en.wikipedia.org/wiki/Eliot_Horowitz)
- [The Next Platform: The Ever-Embiggening Humongous Document Database](https://www.nextplatform.com/2020/06/12/the-ever-embiggening-humongous-document-database/)
- [ByteScout: History of MongoDB](https://bytescout.com/blog/2019/09/mongodb-history-and-advantages.html)
