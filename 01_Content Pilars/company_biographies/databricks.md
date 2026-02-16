# THE APACHE SPARK SEVEN: The Origin Story of Databricks

---

## I. THE HOOK: 100x Faster

UC Berkeley, 2012.

In the basement of Soda Hall, Matei Zaharia stares at his benchmark results. He's run the test three times. The numbers are the same every time.

100 times faster.

His new system—the one he's calling "Spark"—is executing machine learning algorithms 100 times faster than Hadoop MapReduce. The same data. The same hardware. The same workload. But instead of minutes, it takes seconds.

MapReduce is the king of big data. Google invented it. Yahoo and Facebook built empires on it. Every data engineer in the world knows that if you want to process massive datasets, you use Hadoop's implementation of MapReduce.

Zaharia knows this is wrong.

MapReduce was designed for batch processing—take a huge dataset, grind through it slowly, produce an output. But what if you need to run an algorithm iteratively? Machine learning, for example, requires multiple passes over the same data. With MapReduce, each pass reads from disk, processes, writes to disk. Read, process, write. Over and over. The disk I/O becomes a bottleneck.

What if you kept the data in memory?

Zaharia's Spark does exactly that. Resilient Distributed Datasets—RDDs—live in RAM across a cluster. Instead of writing intermediate results to disk, Spark keeps them ready for the next iteration. The improvement isn't incremental. It's transformational.

The paper will change big data forever. But first, someone needs to build a company.

---

## II. THE BACKSTORY: The AMPLab Dream Team

**Berkeley in 2009**

The AMPLab at UC Berkeley wasn't a typical university research lab. It was a $40 million, five-year project funded by DARPA, the NSF, and a consortium of industry partners. The mission: reinvent how we process and analyze massive amounts of data.

The lab assembled a dream team of distributed systems researchers:

**Ion Stoica**: The professor who would become Berkeley's expert on networking and distributed systems. His previous work, Chord, had become foundational in peer-to-peer networking.

**Scott Shenker**: Another Berkeley legend, whose research spanned networking, economics, and computer science.

**Michael Franklin**: The database expert, focused on how to query and manage data at scale.

And among the PhD students, one name stood out.

**Matei Zaharia: The PhD Student Who Changed Everything**

Matei Zaharia arrived at Berkeley with a singular frustration: MapReduce was too slow for the things he wanted to do.

MapReduce worked for single-pass batch jobs. But machine learning algorithms needed to iterate. Interactive data exploration needed speed. The disk-heavy design of MapReduce turned these workloads into marathons.

In 2009, Zaharia started building an alternative. He called it Spark.

**Ali Ghodsi: The Swedish Visitor**

Ali Ghodsi was a researcher from Sweden, a distributed systems expert who joined AMPLab as a visiting scholar in 2009. Berkeley wasn't just an academic opportunity—it was the epicenter of big data innovation.

In the halls of Soda Hall, Ghodsi met Zaharia. They bonded over shared obsessions: distributed computing, fault tolerance, the frustrating limitations of existing tools. Ghodsi saw in Spark something that could change the industry—if someone commercialized it properly.

---

## III. THE GRIND: From Paper to Product

**The 2012 Paper**

In 2012, Zaharia and his collaborators published "Resilient Distributed Datasets: A Fault-Tolerant Abstraction for In-Memory Cluster Computing." The paper introduced Spark's core innovation: keep data in memory across a cluster, recover from failures through lineage rather than replication.

The benchmarks were undeniable. Spark was 10-100x faster than MapReduce for iterative algorithms. The academic world took notice. The industry started paying attention.

**Open Source and Apache**

Spark was open-sourced in 2010, allowing anyone to use and improve it. In 2013, the project was donated to the Apache Software Foundation, giving it the governance and credibility needed for enterprise adoption.

But open source alone doesn't build a business.

**The $10 Billion Vision**

Enter Ben Horowitz.

The co-founder of Andreessen Horowitz had heard about Spark through Scott Shenker. He saw the potential immediately. A faster, more flexible alternative to Hadoop—one that could handle the emerging world of machine learning and real-time analytics?

"A $10 billion company could be built around this technology," Horowitz reportedly told the team.

He wasn't wrong. He was just thinking too small.

**The Founding: 2013**

In 2013, seven researchers from AMPLab founded Databricks:

- **Matei Zaharia**: Spark's creator, CTO
- **Ion Stoica**: The Berkeley professor, first CEO
- **Ali Ghodsi**: VP of Engineering and Product Management (later CEO)
- **Andy Konwinski**: Co-founder
- **Arsalan Tavakoli-Shiraji**: Co-founder
- **Patrick Wendell**: Co-founder
- **Reynold Xin**: Co-founder

They called themselves the "Apache Spark Seven."

The initial business model was simple: provide a managed Spark service so enterprises could run Spark workloads without building and maintaining their own clusters. No DevOps headaches. No infrastructure nightmares. Just data processing.

---

## IV. THE BREAKTHROUGH: The Lakehouse

**Beyond Spark**

Databricks launched and grew, but the founders realized something: Spark alone wasn't enough.

Enterprises had two systems for data:
1. **Data Warehouses**: Fast, structured queries (like Snowflake)
2. **Data Lakes**: Cheap storage for raw data (often on cloud object storage)

Moving data between these systems was expensive, error-prone, and slow. What if you could have both in one place?

**The Lakehouse Architecture**

In 2020, Databricks introduced the concept of the "Lakehouse"—a single platform that combined the reliability and performance of a data warehouse with the flexibility and cost-effectiveness of a data lake.

The architecture used open formats (Delta Lake) to store data in cloud object storage while providing SQL query performance that rivaled dedicated warehouses. Machine learning workflows could run on the same data as business intelligence dashboards.

The lakehouse became Databricks' differentiator—and its rallying cry.

---

## V. THE AFTERMATH: The $62 Billion Colossus

**The Funding Rocket Ship**

Andreessen Horowitz led the first round in 2013. The subsequent rounds got bigger:
- **2019**: $250 million at $2.75 billion valuation
- **2021**: $1 billion at $28 billion valuation
- **2023**: $500 million at $43 billion valuation
- **2024**: $10 billion at $62 billion valuation

Databricks became one of the most valuable private companies in the world—worth more than many public tech giants.

**Ali Ghodsi Takes the Helm**

In January 2016, Ali Ghodsi became CEO, with Ion Stoica transitioning to Executive Chairman. Under Ghodsi's leadership, Databricks transformed from a Spark company to a unified data and AI platform.

The vision expanded: not just processing data, but building machine learning models, deploying AI applications, unifying every data workflow in the enterprise.

**The IPO Waiting Game**

As of late 2024, Databricks remains private—one of the largest private tech companies in history. The expected IPO looms on the horizon, likely to be one of the biggest in tech history when it happens.

**Where They Are Now**

Matei Zaharia became the Chief Technology Officer at Databricks and continued his academic work, eventually becoming a professor at Stanford. The Spark project he started in a Berkeley basement now powers data processing at thousands of companies worldwide.

Ali Ghodsi runs a company worth $62 billion—a company that started when seven academics realized their research project could change an industry.

The PhD student who thought MapReduce was too slow built something 100 times faster. And then he and his collaborators built a company worth more than most of the enterprises they serve.

---

## Sources

- [Matei Zaharia - Wikipedia](https://en.wikipedia.org/wiki/Matei_Zaharia)
- [Growfers: The Dramatic Rise of Startup Databricks](https://growfers.com/story/databricks/)
- [Bigeye: A Brief History of Databricks](https://www.bigeye.com/blog/a-brief-history-of-databricks)
- [MicroVentures: Databricks History and Milestones](https://microventures.com/microventures-portfolio-company-databricks-history-and-milestones)
- [LinkedIn: Company Closeup - Databricks From Academia to AI](https://www.linkedin.com/pulse/company-closeup-databricks-from-academia-ai-khushbu-raval)
- [Infinitive: The Databricks Journey - Idea to Industry Leader](https://infinitive.com/the-databricks-journey-idea-to-industry-leader/)
- [Medium: The Story Behind Apache Spark](https://medium.com/@itai.yaffe/i-havent-heard-it-through-the-grapevine-the-story-behind-apache-spark-2bb234089dd)
- [Ali Ghodsi: Databricks' $62B Lakehouse Revolution](https://digidai.github.io/2025/11/19/ali-ghodsi-databricks-ceo-lakehouse-revolution-ipo-deep-analysis/)
