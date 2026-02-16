# THE FORK THAT SAVED MYSQL: The Origin Story of MariaDB

---

## I. THE HOOK: Naming It After His Daughter—Again

Helsinki, Finland. December 2009.

Michael "Monty" Widenius is watching his life's work slip away.

A year ago, he sold MySQL—the database he'd built and named after his daughter My—to Sun Microsystems for $1 billion. It was supposed to be a happy ending. Sun promised to keep MySQL open source. They promised to invest in development.

Then Oracle bought Sun.

Oracle. Larry Ellison's Oracle. The $30 billion database empire that MySQL had spent fifteen years eating alive from the bottom up. The company that charged $50,000 for licenses that MySQL gave away for free.

Now Oracle owns MySQL.

Widenius fights. He launches a "Save MySQL" petition. He lobbies the European Commission to block the acquisition. He testifies before regulators, warning that Oracle will slowly strangle the open-source project.

The EC approves the deal anyway.

Widenius does the only thing he can: he forks MySQL.

He takes the open-source codebase—which Oracle can't stop him from copying—and starts a new project. A truly independent database, governed by a foundation, protected from corporate acquisition.

He names it after his youngest daughter.

MariaDB.

If one database named after his child gets captured by a corporation, he'll build another one. This time, he'll make sure no one can take it away.

---

## II. THE BACKSTORY: The MySQL Empire

**The Father of MySQL**

Ulf Michael Widenius—known universally as "Monty"—created MySQL in 1995. He named it after his daughter My (pronounced "Mee" in Finnish).

With co-founders David Axmark and Allan Larsson, Widenius built MySQL into the most popular open-source database in the world. It powered the LAMP stack—Linux, Apache, MySQL, PHP—that built the early web.

Wikipedia ran on MySQL. Facebook ran on MySQL. Google used MySQL internally. By 2008, MySQL had over 12 million installations worldwide.

The database was free, but MySQL AB—the company behind it—made money on support, consulting, and enterprise features.

**The Sun Acquisition: 2008**

In January 2008, Sun Microsystems acquired MySQL AB for $1 billion.

For Widenius and the founders, it was validation. A billion dollars for software they'd given away for free. Sun promised to invest in development, maintain the open-source commitment, and take MySQL to the next level.

Widenius was cautiously optimistic. Sun had a good reputation in open source. They'd released Java and Solaris as open source. Maybe this would work.

It didn't.

**The Oracle Nightmare: 2009**

By 2009, Sun was dying. The company was hemorrhaging money. Their server business was collapsing.

In April 2009, Oracle announced plans to acquire Sun Microsystems for $7.4 billion.

Widenius was horrified.

Oracle's entire business model depended on expensive database licenses. MySQL threatened that model. Every company running MySQL was a company not paying Oracle. Why would Oracle invest in a competitor they now owned?

Widenius went public with his concerns. He launched the "Help MySQL" campaign. He lobbied European regulators to block the deal or force Oracle to divest MySQL.

"Oracle will destroy MySQL," he warned. "Maybe not immediately. Maybe not obviously. But they'll starve it of resources and let it wither."

The EC investigated for months. They demanded concessions from Oracle. Oracle promised to keep MySQL open source.

In January 2010, the acquisition was approved.

---

## III. THE GRIND: The Fork

**February 2009: Monty Program Ab**

Even before the Oracle deal closed, Widenius was preparing his escape.

In February 2009, he founded Monty Program Ab—a new company focused on MySQL development. Initially, they worked on the Maria storage engine (a component within MySQL).

But as Oracle's acquisition became inevitable, the strategy shifted. They would fork the entire MySQL codebase. Create an independent project. Build a community that Oracle couldn't control.

**MariaDB: The Name**

The name was obvious.

Widenius had named MySQL after his daughter My. He would name the fork after his younger daughter Maria.

The family naming convention continued. The Finnish programmer who'd built the world's most popular database by naming it after his child would build its successor the same way.

**The Fork Philosophy**

MariaDB wasn't just a copy of MySQL—it was a statement about open-source governance.

The philosophy:
- **True open source**: No proprietary "Enterprise Edition" with features withheld from the community
- **Foundation governance**: The MariaDB Foundation (created in 2012) would ensure no single company could control the project
- **Drop-in replacement**: MariaDB would maintain compatibility with MySQL, so users could switch without code changes
- **Faster innovation**: Free from Oracle's bureaucracy, MariaDB could ship features faster

**The Migration**

Widenius recruited many of the original MySQL developers. People who'd built the database and didn't want to work for Oracle.

The team began improving the codebase:
- Performance optimizations
- New storage engines
- Features MySQL users had requested for years
- Security improvements

MariaDB wasn't just MySQL's twin—it was becoming MySQL's more ambitious sibling.

---

## IV. THE BREAKTHROUGH: Linux Distributions Switch

**The Adoption Cascade**

The real breakthrough came when major Linux distributions switched from MySQL to MariaDB.

- **Red Hat** switched RHEL to MariaDB
- **Fedora** switched to MariaDB
- **Debian** switched to MariaDB
- **Ubuntu** offered MariaDB as an option

When the core Linux ecosystem embraced MariaDB, millions of servers followed. System administrators who installed standard Linux packages got MariaDB instead of MySQL.

The fork had achieved critical mass.

**Why Distributions Switched**

The Linux community valued open-source purity. Oracle's reputation—the aggressive licensing, the proprietary tendencies—made MySQL suspect.

MariaDB, governed by a foundation and led by MySQL's original creator, felt safer. Even if Oracle kept MySQL open source today, who knew what they'd do tomorrow?

MariaDB was insurance against Oracle's future decisions.

**The Features Diverge**

Over time, MariaDB and MySQL diverged. MariaDB added features MySQL didn't have:
- Columnar storage engines
- More storage engine options
- Different performance optimizations
- Alternative approaches to replication

MariaDB wasn't just a fork—it was becoming a distinct database with its own roadmap.

---

## V. THE AFTERMATH: The Daughter Databases

**The MariaDB Foundation**

In December 2012, the MariaDB Foundation was created to ensure the project's independence.

The foundation's mission: "To ensure MariaDB remains open and free for everyone, and to foster and grow the community."

Unlike MySQL, which Oracle could (theoretically) relicense or neglect, MariaDB had institutional protection. No corporate acquisition could compromise its open-source nature.

**MariaDB Corporation**

Alongside the foundation, MariaDB Corporation (later MariaDB plc) was created as a commercial entity—selling enterprise support, cloud services, and additional features.

The corporation funded development. The foundation ensured governance. The structure was designed to avoid the MySQL fate.

**The 2022 Struggles**

MariaDB plc went public via SPAC in 2022, but the company struggled. The stock declined. Layoffs followed.

The commercial company's difficulties didn't affect the open-source project—the foundation continued independently. But it was a reminder that building a business around open-source infrastructure is hard.

**Monty Widenius Today**

Widenius remains involved with MariaDB, continuing to develop the database he forked from his original creation.

He has three children: My, Max, and Maria. All three inspired database names (MySQL, MaxDB/MySQL-Max, MariaDB).

His legacy is remarkable: the creator of one of the world's most important databases, who forked his own creation to save it from corporate capture.

**The Lesson**

MariaDB's founding story is about the tension between open source and corporate ownership.

Widenius created MySQL as open source. He sold the company, believing the new owners would honor that commitment. When Oracle's acquisition threatened the project's independence, he did the only thing he could: copied the code and started fresh.

The lesson for open-source creators is sobering: you can build something that changes the world, but if you sell control, you might have to rebuild it.

For users, the lesson is different: open-source software is never truly controlled by one company. If the steward fails, the community can fork. MariaDB exists because Widenius exercised that right.

The database named after his daughter My was captured. The database named after his daughter Maria was designed to be uncapturable.

---

## Sources

- [Michael Widenius - Wikipedia](https://en.wikipedia.org/wiki/Michael_Widenius)
- [MariaDB - Wikipedia](https://en.wikipedia.org/wiki/MariaDB)
- [TecMint: The Story Behind Acquisition of MySQL and the Rise of MariaDB](https://www.tecmint.com/the-story-behind-acquisition-of-mysql-and-the-rise-of-mariadb/)
- [BastakiSS: The Story of MariaDB - When Community Decides](https://bastakiss.com/blog/open-source-4/the-story-of-mariadb-when-community-decides-about-the-fate-of-the-project-708)
- [MariaDB Foundation](https://mariadb.org/about/)
