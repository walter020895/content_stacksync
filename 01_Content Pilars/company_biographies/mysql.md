# THE DATABASE THAT CONQUERED THE WORLD: The Origin Story of MySQL

---

## I. THE HOOK: The Finnish Coder Who Couldn't Stand Inefficiency

Helsinki, Finland. January 8, 2008. 4:47 AM.

Michael "Monty" Widenius couldn't sleep. Again.

The Finnish programmer sat in his home office, staring at a Bloomberg terminal showing Sun Microsystems' stock price. In approximately four hours, Sun would announce they were acquiring MySQL AB for one billion dollars. One. Billion. Dollars. For software that had always been free.

He should have felt victorious. Vindicated. This was the moment every entrepreneur dreams about—the exit, the validation, the proof that thirteen years of obsessive coding and evangelical preaching about open source databases had been worth it.

But Monty's stomach churned with something between nausea and dread.

His daughter My—the "My" in MySQL—was seventeen now. He'd named the database after her when she was four years old, back in 1995, when the whole thing was just him and David Axmark and Allan Larsson working out of a Swedish basement, convinced they could build something better than Oracle.

And they had. MySQL now powered Yahoo, Google, Facebook, Wikipedia, YouTube. It was the "M" in LAMP—Linux, Apache, MySQL, PHP. Twenty percent of all websites on Earth ran on MySQL.

But Sun? Sun was dying. Everyone knew it. And Oracle—Larry Ellison's Oracle, the very company MySQL had spent a decade eating alive from the bottom up—Oracle was circling Sun like a shark.

What Monty couldn't know that sleepless morning was that his worst fears would come true. Oracle would acquire Sun. And he would have to fork his own creation to save it.

---

## II. THE BACKSTORY: The Obsessive Optimizer

**Uppsala, Sweden, 1981**

Long before MySQL, before open source became a movement, there was just a weird Finnish kid in Sweden who was unreasonably obsessed with making computers go fast.

Michael Widenius—"Monty" to everyone who knew him, after the Monty Python sketches he could quote verbatim—grew up in Helsinki but moved to Sweden to study at Uppsala University. This was 1981. Personal computers barely existed.

Monty was different. Not just smart—lots of computer science students were smart. Monty was *obsessed*. He would spend eighteen-hour sessions optimizing assembly code to shave milliseconds off database queries. He'd skip meals, skip sleep, skip everything, all to make a database index search run 3% faster.

"I don't think Monty ever learned how to do anything halfway," a classmate later recalled. "He either didn't care about something at all, or he cared about it with a frightening intensity."

**Meeting David Axmark**

In Uppsala, Monty met David Axmark.

If Monty was the obsessive technician, David was the philosopher-activist. Born in Sweden, raised in a culture that valued social democracy and collective good, David looked at the American commercial software industry—Microsoft, Oracle, Informix—and saw something fundamentally wrong.

Software should be free. Not free as in "costs nothing," though that too. Free as in freedom. The source code should be open, accessible, a public good.

Monty liked David's ideas, but honestly, he was more interested in the technical challenge. He'd started working for a company called TcX in Sweden, doing database work. And the databases available—Oracle, Informix, Sybase—they were all so *slow*. So bloated. So inefficient.

Monty couldn't stand inefficiency.

---

## III. THE GRIND: Building Something Better

**1994: The Breaking Point**

By 1994, Monty had been working at TcX for several years, developing database applications. The company's main product was a custom database system Monty had written called UNIREG.

UNIREG was fast. Monty had optimized it obsessively. But it wasn't a relational database—it was a simpler system. And clients were starting to ask for SQL, the Structured Query Language that had become the standard.

The problem was: all the SQL databases were garbage. Well, not garbage—they worked. But they were slow, expensive, and closed-source. Oracle would charge $50,000 or more for a database license.

Monty ran benchmarks constantly. He'd test Oracle doing simple SELECT queries on tables with a few thousand rows. The results made him physically angry.

"Look at this," he'd tell colleagues, pointing at his terminal. "It's taking 400 milliseconds to search a table that fits entirely in memory. The entire database fits in RAM and it's still hitting the disk. Why is it hitting the disk?!"

Allan Larsson, another programmer at TcX, was used to Monty's rants. "So write a better one."

Monty looked at him. "What?"

"Write a better database. You wrote UNIREG. You know exactly how databases work. Write an SQL database that doesn't suck."

**May 23, 1995: MySQL Is Born**

Between May and July 1995, working primarily alone, Monty wrote approximately 30,000 lines of C code. He integrated an SQL parser with his blazing-fast ISAM storage engine. He rewrote the query optimizer. He implemented his own memory management system because the standard malloc() was too slow.

He called it MySQL.

**The Name**

Monty's daughter, born in 1991, was named My (pronounced "Mee" in Finnish/Swedish). The name was perfect—short, distinctive, easy to pronounce.

"My-S-Q-L." My + SQL. The database named after his four-year-old daughter.

Years later, journalists would ask if he'd thought about trademark issues, about professional branding.

Monty's response was always the same: "I name things after what matters to me. My matters to me more than anything."

**Open Source from Day One**

David Axmark saw something bigger than just a fast database.

"This could change everything," David said.

"It's just a database," Monty replied.

"No. Listen. Oracle charges $50,000 per installation. Small companies can't afford that. But everyone needs databases. If we release this as open source—completely free—we could democratize database access."

Monty was skeptical. "How do we make money?"

David had been thinking about this. "Support. Consulting. We give away the software but charge for expertise. Red Hat is doing this with Linux."

"Fine," Monty said. "Open source."

---

## IV. THE BREAKTHROUGH: The LAMP Stack Revolution

**1998-2000: Perfect Timing**

MySQL launched just as the web exploded.

Every startup building a website needed to store user accounts, product listings, forum messages, shopping carts. They needed databases. But they didn't have Oracle money. Most of them were college kids maxing out credit cards.

MySQL was free.

More importantly: MySQL was *fast* for web applications. Web apps didn't need complex transactions. They needed to show webpages (read data), update when users clicked (simple write), and handle thousands of concurrent users.

MySQL excelled at exactly this workload.

And then something magical happened: **LAMP**.

**Linux** (free operating system)
**Apache** (free web server)
**MySQL** (free database)
**PHP/Perl/Python** (free programming languages)

Someone called this combination "LAMP" and suddenly there was a *stack*. A complete, free, open-source infrastructure for building web applications.

MySQL became the default database of Web 2.0.

- Slashdot ran on MySQL
- Wikipedia launched in 2001 on MySQL
- Google used MySQL internally
- Yahoo ran huge MySQL installations
- Facebook would later run billions of queries per day on MySQL

By 2003, MySQL claimed over 4 million installations worldwide.

**The Technical Genius: What Made MySQL Fast**

Non-technical people thought MySQL's success was about being free. That was part of it. But "free" isn't enough—free software that sucks disappears.

MySQL won because Monty made it *fast*.

The key decisions:

1. **The MyISAM storage engine**: Optimized aggressively for reads. Table-level locking (crude but fast for read-heavy workloads). Compressed indexes. No transaction overhead.

2. **The query cache**: If you ran the exact same query twice, MySQL returned the cached result without touching the disk. "Cheating" by traditional standards, but brilliant for websites serving the same pages repeatedly.

3. **Minimal overhead**: Monty would profile MySQL using hardware performance counters, identifying which assembly instructions were executed most frequently. Then he'd rewrite those code paths in hand-optimized C.

This is psychotic behavior. Modern programmers don't do this. But it made MySQL viable on cheap hardware.

---

## V. THE AFTERMATH: Billion-Dollar Exit, Bitter Fork

**2008: The Sun Acquisition**

By 2007, MySQL AB had:
- 400+ employees worldwide
- $75 million in annual revenue
- 12 million installations

Sun Microsystems came calling. The price: $1 billion.

Monty was conflicted. On one hand: validation. Security. Resources.

On the other hand: selling out. Losing control. Sun was struggling—what if they got acquired themselves?

In January 2008, the deal closed. Champagne was popped.

And Monty couldn't sleep.

**2009-2010: The Oracle Nightmare**

His fears proved prophetic.

In April 2009, Oracle announced plans to acquire Sun Microsystems.

Oracle. Larry Ellison's Oracle. The company MySQL had spent fifteen years eating alive.

Oracle was going to own MySQL.

Monty went to war. He launched "Help MySQL" campaigns. He testified before the European Commission. He argued Oracle would destroy MySQL.

The EC approved the acquisition anyway.

**MariaDB: The Fork**

Monty did the only thing he could: he forked MySQL.

A copy of the codebase, developed independently, named after his younger daughter Maria.

The message was clear: "You can buy my company, but you can't buy me. I'll build the database again if I have to."

MariaDB became the default database for many Linux distributions. Red Hat, Fedora, Debian—all switched from MySQL to MariaDB.

Today, the database world is split:
- **MySQL (Oracle)**: Enterprise customers, legacy applications
- **MariaDB (Monty)**: Open source purists, Linux distributions

**The Legacy**

MySQL didn't just build a database. It changed how software was built.

Before MySQL:
- Databases were expensive enterprise products
- Small companies couldn't afford serious data storage
- The web was mostly static HTML

After MySQL:
- Databases were free, fast, and accessible
- Any developer could run a production database
- The web became dynamic and personalized

The LAMP stack—powered by MySQL—built Wikipedia, Facebook, YouTube, WordPress (which powers 40% of all websites).

MySQL proved that open source could compete with—and beat—commercial software. Not by being free, but by being *better* for real-world use cases.

Monty Widenius never really made peace with the Oracle acquisition. But late at night, in his home office in Helsinki, he still pulls up the MariaDB repository and starts coding.

Because that's who Monty is. Just a Finnish programmer who couldn't stand inefficiency, who named a database after his daughter, and who couldn't stop building even after winning.

---

## Sources

- [MySQL - Wikipedia](https://en.wikipedia.org/wiki/MySQL)
- [Michael Widenius - Wikipedia](https://en.wikipedia.org/wiki/Michael_Widenius)
- [MariaDB Foundation](https://mariadb.org/about/)
- [TechCrunch: Sun to Buy MySQL for $1 Billion](https://techcrunch.com/2008/01/16/sun-to-acquire-mysql-for-1-billion/)
- [The Register: MySQL founder on Oracle acquisition](https://www.theregister.com/2009/12/07/monty_says_boycott_mysql/)
