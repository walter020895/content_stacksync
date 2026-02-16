# SEVEN LINES OF CODE: The Origin Story of Stripe

---

## I. THE HOOK: The Problem That Shouldn't Have Existed

San Francisco, 2010.

Patrick Collison is staring at his laptop, fuming. He's twenty-one years old, already a millionaire, and he cannot, for the life of him, figure out why accepting money on the internet is this hard.

The documentation is a maze. The APIs are ancient. The forms are endless. Bank relationships, gateway providers, compliance certifications, fraud detection systems—each one a new circle of bureaucratic hell. Want to charge someone's credit card? Better set aside three weeks and a good lawyer.

It's 2010. You can stream movies. You can video chat across continents. You can summon a car with your phone. But if you want to sell something online?

Good luck.

Patrick calls his younger brother John, who's still in college. They'd already sold a company together. They'd already made their first million. And now they're looking at the same impossible question:

*Why does the internet have a payment problem?*

The answer, it turns out, isn't complicated. It's just that nobody had bothered to fix it.

Until now.

---

## II. THE BACKSTORY: Two Brothers from Dromineer

**The Village with Nothing but Mooing Cows**

To understand Stripe, you have to understand Dromineer.

It's a village in County Tipperary, Ireland. Population: barely 100. The main sounds are wind and livestock. There are no traffic lights. There are no fast food restaurants. For most of Patrick and John Collison's childhood, there was barely any internet—the connection was so unreliable it was almost useless.

So instead of screens, there were books.

Their father Denis was an electrical engineer. Their mother Lily was a microbiologist. Both became entrepreneurs, running the Dromineer Bay Hotel. The house was filled with books—science, business, programming, everything. The parents never pushed a particular path. They just encouraged curiosity.

Patrick, the eldest of three boys, found his obsession early. At eight years old, he took his first computer course at the University of Limerick. At ten, he bought a programming textbook at an Eason's bookshop in Limerick and taught himself to code. By sixteen, he had invented his own programming language.

**The Young Scientist**

In 2005, Patrick Collison won Ireland's 41st Young Scientist and Technology Exhibition. His project was called Croma—a Lisp-type programming language he'd built himself. He was sixteen years old. President Mary McAleese handed him the trophy and a €7,500 check.

His younger brother John wasn't far behind. John scored the highest marks ever recorded on the Irish Leaving Certificate—the national exam that determines university placement. Both brothers were, by any measure, prodigies.

But they weren't interested in academic credentials. They wanted to build things.

**Auctomatic: The First Exit**

In 2007, Patrick was seventeen and John was fifteen when they founded their first company: Shuppa (a play on *siopa*, the Irish word for "shop"). It was a software tool for managing online auctions.

Enterprise Ireland, the government's startup funding agency, turned them down. So the brothers looked west.

Silicon Valley's Y Combinator saw potential. The Collisons moved to California, merged with two Oxford graduates—Harjeet and Kulveer Taggar—and renamed the company Auctomatic.

On Good Friday, March 2008, Patrick Collison was nineteen years old. John was seventeen. They sold Auctomatic to Canadian company Live Current Media for $5 million.

The teenage brothers from a village of mooing cows were millionaires.

---

## III. THE GRIND: Building the Obvious Thing

**The Kafkaesque Ordeal**

After Auctomatic, both brothers enrolled in American universities—Patrick at MIT, John at Harvard. They had money. They had options. They could have coasted.

Instead, they kept building side projects. And every time they tried to accept payments, they hit the same wall.

Before Stripe, accepting payments online was what one writer called "a kafkaesque ordeal." Small businesses and startups faced a gauntlet:

- Apply for a merchant account (takes weeks)
- Negotiate with a payment gateway (more weeks)
- Get certified for PCI compliance (expensive consultants)
- Integrate with ancient APIs (documentation from the '90s)
- Pray the money shows up

The process was designed for big enterprises with dedicated compliance teams—not two developers in a garage trying to launch something.

"Not long ago," one account noted, "paying online was slow and messy. Shop owners had to fill out piles of forms, add clunky PayPal buttons, and hope the money showed up."

Patrick and John kept asking the same question: *Why?*

The internet was supposed to eliminate friction. Payments had more friction than ever.

**The Prototype**

In early 2010, the brothers dropped out of college. They moved to Palo Alto and started building.

The premise was radical in its simplicity: What if accepting payments was as easy as copy-pasting a few lines of code?

Not weeks of integration. Not legal teams. Not enterprise sales calls.

*Seven lines of code.*

They built a prototype and showed it to their network. Within two weeks, they had their first transaction—a Y Combinator company called 280 North paid for something using Stripe. Their first customer, Ross Boucher, would eventually join Stripe as one of the first employees.

**The Paul Graham Connection**

Patrick knew Paul Graham, the co-founder of Y Combinator, through his work with Lisp and through Auctomatic. When the Collisons told Graham what they were building, he offered to fund it immediately.

Y Combinator put in the first check. By fall 2010, both brothers were working on Stripe full-time.

**The $2 Million Bet**

In 2011, the big names came calling.

Elon Musk invested. Peter Thiel invested. Both were PayPal co-founders—they understood payments better than anyone and recognized what Stripe was doing. Sequoia Capital, Andreessen Horowitz, and SV Angel all wrote checks.

The seed round raised $2 million.

The thesis was simple: Stripe wasn't competing on features. It was competing on *developer experience*. Every other payment company was built for merchants or consumers. Stripe was built for programmers.

---

## IV. THE BREAKTHROUGH: The Magic of Simplicity

**Seven Lines of Code**

The legend—the one that Bloomberg would later immortalize in a headline—was the "seven lines of code."

Stripe's own engineers admitted the phrase was more poetry than literal truth. A production-ready integration obviously required more than seven lines. But the *feeling*? The feeling was seven lines.

"Taking something as complex as credit card processing and reducing the integration to only a few lines of code," Stripe's engineering team wrote, "is really quite magical."

Developers who'd spent weeks wrestling with PayPal's byzantine documentation could now open a terminal, run a curl snippet, and see a successful charge. The time from "I want to accept payments" to "I'm accepting payments" collapsed from weeks to an afternoon.

**The Philosophy**

PayPal started as a consumer wallet—designed to help everyday people send money. Stripe started as developer infrastructure—designed to help programmers build businesses.

"PayPal views the payer as its primary client," one analysis noted. "Stripe views the developer and merchant as its primary client, which means the entire ecosystem is optimized for debugging, integration, and programmatic control."

This wasn't just positioning. It was architecture. Stripe's documentation was legendary. Their error messages were clear. Their API design was elegant. Everything was built around one user: the developer at 2 AM trying to ship a feature.

**The Network Effect**

As more startups used Stripe, more developers became fluent in Stripe. As more developers became fluent in Stripe, more startups chose Stripe. The flywheel spun.

Y Combinator companies used Stripe. Then their alumni used Stripe at their next companies. Then the companies they invested in used Stripe. The Silicon Valley ecosystem became a Stripe distribution engine.

---

## V. THE AFTERMATH: From API to Empire

**The Youngest Billionaires**

By 2016, John Collison—then 25 years old—became the youngest self-made billionaire in the world.

The brothers from Dromineer, the village with nothing but mooing cows and unreliable internet, had built one of the most valuable private companies in tech history.

**The Expansion**

Stripe didn't stop at payments. They launched:

- **Stripe Atlas**: Incorporate a company in Delaware in days, from anywhere in the world
- **Stripe Radar**: Machine learning fraud detection
- **Stripe Treasury**: Banking-as-a-service APIs
- **Stripe Issuing**: Create and manage virtual and physical cards
- **Stripe Climate**: Let customers contribute to carbon removal at checkout

The seven lines of code became a full-stack financial infrastructure.

**The Valuation**

At its peak in 2021, Stripe was valued at $95 billion—the most valuable private startup in the United States. Even after the tech correction, the company remains worth tens of billions, processing hundreds of billions of dollars in transactions annually.

**The Culture**

Patrick and John remain deeply involved in the company's culture. Patrick is known for his voracious reading—his personal website lists hundreds of book recommendations. John focuses on operations and building Stripe's international presence.

Neither brother seems particularly interested in the trappings of billionaire life. No yachts. No tabloid drama. Just the work.

**Where They Are Now**

Today, Stripe processes payments for millions of businesses—from one-person Shopify stores to Amazon, Google, and Salesforce. The infrastructure that was supposed to already exist finally does.

The two Irish brothers who couldn't connect to the internet in their own home built the infrastructure that lets the entire internet do business.

Seven lines of code at a time.

---

## Sources

- [Patrick Collison - Wikipedia](https://en.wikipedia.org/wiki/Patrick_Collison)
- [John Collison - Wikipedia](https://en.wikipedia.org/wiki/John_Collison)
- [Startup Grind: The Collison Brothers and Story Behind Stripe](https://www.startupgrind.com/blog/the-collison-brothers-and-story-behind-the-founding-of-stripe/)
- [Y Combinator: Patrick & John Collison, Co-Founders of Stripe](https://www.ycombinator.com/library/Kx-patrick-john-collison-co-founders-of-stripe)
- [The Gentleman's Journal: Patrick and John Collison](https://www.thegentlemansjournal.com/article/patrick-john-collison-introducing-irish-billionaires-30/)
- [Irish Examiner: Collison Brothers Have Earned Their Stripes](https://www.irishexaminer.com/news/arid-20456885.html)
- [Stripe Blog: Payments APIs - The First 10 Years](https://stripe.com/blog/payment-api-design)
- [Medium: How Stripe Turned Seven Lines of Code Into a $70 Billion Brand](https://medium.com/@MatildaAnebi/how-stripe-turned-seven-lines-of-code-into-a-70-billion-brand-and-what-you-can-learn-about-626ab0452a47)
- [Aspire: How Stripe Grew from 7 Lines of Code](https://www.thisisaspire.com/blog/stripe-case-study)
- [Irish Times: Earning Their Stripe](https://www.irishtimes.com/business/technology/earning-their-stripe-irish-brothers-on-quest-for-world-domination-1.2670217)
