# **HEROKU: The Accidental Revolution**
### *How Three Guys Who Couldn't Stop Building the Wrong Thing Accidentally Built the Future of the Internet*

---

## I. THE SCENE NOBODY TALKS ABOUT

It was sometime in the fall of 2008, deep into one of those San Francisco nights where the fog doesn't roll in so much as suffocate, and Adam Wiggins was staring at a dashboard that told him everything he didn't want to know.

Twenty thousand applications. That's how many were running on Heroku's beta platform. Twenty thousand little experiments and side projects and half-finished ideas, all humming along on infrastructure held together with the digital equivalent of duct tape and prayer. The numbers looked impressive if you squinted. They looked terrifying if you understood what they meant.

Because the thing was, nobody was using the product the way it was supposed to be used.

Heroku had been built as an in-browser code editor. A place where you could write Ruby on Rails applications right there in your web browser, like Google Docs but for code. It was supposed to be "FileMaker Pro for the web" --- a tool that would democratize programming, make computing accessible to normal people, let anyone spin up a web application the way anyone could spin up a spreadsheet. That was the pitch. That was the dream. That was what had gotten them into Y Combinator. That was the vision Adam had been nursing since he first fell in love with the idea that computers could be instruments of human creativity.

And the users --- all twenty thousand of them --- didn't care about any of it.

What they cared about was a tiny, almost accidental feature buried in the platform: you could upload your code, and it would just... run. Somewhere. In the cloud. Without you having to think about servers or Apache configurations or SSH keys or any of the other ritual humiliation that deploying a Rails application in 2008 required.

Adam had been watching the usage data for weeks. He could see it in the logs, plain as a confession: users were ignoring the beautiful code editor entirely. Instead, they were using an import feature --- a glorified file upload button --- to shove zip files of code they'd written somewhere else onto Heroku's servers. It was, in Adam's words, a "folk practice." The users had collectively, wordlessly, independently arrived at the same conclusion: *we don't want to write code in your browser. We want you to make deployment not suck.*

It was the kind of insight that could save a company or destroy the founders' egos, depending on how they chose to hear it.

Adam Wiggins, sitting in the dim glow of his monitor that night, the city of San Francisco murmuring outside, had to decide whether to listen.

---

## II. THE SOULS BEFORE THE SOFTWARE

To understand how Heroku came to exist, you have to understand three people who shouldn't have worked together, but did, in that volatile and unrepeatable way that only happens when the chemistry is irrational and the timing is absurd.

### **Adam Wiggins: The Runaway Game Developer**

Adam Wiggins was nineteen years old when he dropped out to join a game development shop in Arizona. He'd grown up programming --- one of those kids for whom a computer was less a tool than an extension of his nervous system --- and by his late teens he'd landed in the video game industry, which in the late 1990s still carried the romantic sheen of an artistic frontier. He worked on titles. He built things with polygon counts and vertex shaders. He was living the dream of every teenager who'd ever stayed up past midnight playing *Doom*.

And then the dream started to rot.

What Adam discovered, working inside the machine of commercial game development, was that the industry didn't care about fun. It cared about polygon counts. It cared about vertex shading benchmarks. It cared about technology demos that could impress publishers. The childhood dream of creating *truly engaging, truly fun* games was getting crushed under the weight of graphical arms races. He could feel his creative soul being ground into a fine corporate powder.

So Adam did what restless, brilliant people do when their current life stops making sense: he built something on the side. A MUD. A Multi-User Dungeon --- the text-based ancestor of every MMORPG that would later eat the world. He called it **Blood Dusk**, and he poured into it all the creative energy that his day job was squeezing out of him. Blood Dusk was free. Blood Dusk was a labor of pure love. Blood Dusk, against all reasonable odds, is *still running today*, decades later, a digital monument to a young man's refusal to let corporate game development kill his love of building things.

It was through the world of MUDs and open-source hacking that Adam met a man who would change the trajectory of his life: Orion Henry.

### **Orion Henry: The Quiet Catalyst**

Orion Henry is the co-founder of Heroku that nobody writes profiles about. He wasn't the face. He wasn't the philosopher-king. He was something arguably more important: he was the person who saw talent in other people before they saw it in themselves, and then pulled them, sometimes against their will, into the orbits where that talent could ignite.

Orion had studied computer science at the University of San Diego. He was technical, deeply so, but he also had an entrepreneur's restlessness. In 2000, when Adam Wiggins was still languishing in the Arizona game development scene, feeling the polygon counts crushing his soul, Orion made his move. He lured Adam out of the video game industry to co-found **TrustCommerce**, a payment processing company.

It was not a romantic endeavor. Payment processing is the plumbing of the internet --- essential, invisible, and mind-numbingly boring to anyone who isn't doing it. But it was real. It was a real business solving a real problem, and for Adam, it was a portal into a new world: the world of entrepreneurship, where building software wasn't about impressing publishers or hitting frame-rate targets, but about solving problems for actual human beings.

The two of them --- Adam the restless creative, Orion the quiet recruiter of talent --- would go on to start several ventures together over the next few years. They were building a partnership, slowly, through the accumulated scar tissue of shared failures and small victories.

And then they met James.

### **James Lindenbaum: The Obsessive Perfectionist**

James Lindenbaum was a hacker with the soul of a designer. He was what people in the industry called, sometimes admiringly and sometimes with exasperation, an "OCD perfectionist." Where Adam thought in grand philosophical arcs about what computing should *mean*, and Orion operated with a quiet, structural intelligence about how businesses should *work*, James fixated on the details. The pixel-perfect spacing. The exact shade of purple. The way a button should feel when you clicked it.

He was chiefly responsible for what would become Heroku's brand and products --- the *look and feel* of the thing, which, in a world of stodgy infrastructure companies, would turn out to be a secret weapon nobody saw coming.

How they all ended up in the same room is one of those stories that, in retrospect, looks like destiny, but at the time looked like three guys who couldn't figure out what to do next. After TrustCommerce, after various ventures, Orion and Adam and eventually James found themselves working together at a consulting shop called **Bitscribe** in Los Angeles.

Bitscribe built enterprise software. Warehouse management systems. The kind of software that makes the world's supply chains run but makes the software engineers who build it want to claw their eyes out. It was soul-crushing work. It was also the crucible where everything that would become Heroku was forged.

Because at Bitscribe, three things happened simultaneously:

**First**, they discovered Ruby on Rails.

In the mid-2000s, Rails was less a framework than a movement. Created by David Heinemeier Hansson --- a Danish programmer with strong opinions and a knack for provocation --- Rails was a web application framework built on the Ruby programming language. Ruby itself had been created by Yukihiro "Matz" Matsumoto in Japan, and its design philosophy could be summed up in Matz's famous dictum: *"Ruby is designed to make programmers happy."*

That idea --- that the *experience of the programmer* mattered, that software tools should be a joy to use, not just functional --- hit Adam Wiggins like a thunderbolt. He would later describe reading *The Pragmatic Programmer* by Andy Hunt and Dave Thomas as a turning point, the moment when he understood that his work was about *technique*, not just technology. Ruby and Rails gave that philosophy a living, breathing embodiment. Here was a language and a framework that said: *You, the developer, are a creative person. Your experience matters. Your happiness matters.*

**Second**, they discovered agile development --- the idea that software should be built incrementally, in tight feedback loops, with the customer (or the market) constantly whispering corrections into the process.

**Third**, and most importantly, they discovered each other. Adam, the philosopher with the video game background and the MUD still running on some forgotten server. Orion, the quiet catalyst who'd pulled Adam out of the game industry and into entrepreneurship. James, the perfectionist who couldn't look at a poorly kerned font without his eye twitching.

They were sitting in the fluorescent-lit offices of Bitscribe, building warehouse management software, and they were falling in love --- not with each other (though there was certainly a deep platonic bond) --- but with the idea of building something that would make developers as happy as Ruby made them.

The only question was: what?

---

## III. RAILSCONF AND THE TRIBE

The answer didn't come in an office or a brainstorming session. It came in the sweaty, overstimulated atmosphere of a tech conference.

In the summer of 2007, Adam Wiggins attended **RailsConf**. For those outside the Ruby community, RailsConf in the mid-2000s was not just a conference. It was a revival meeting. It was Woodstock for people who cared about elegant code. The Ruby on Rails community at that point was small enough to feel like a secret society but growing fast enough to feel like a revolution.

Adam walked into RailsConf and felt something he had never felt before in his professional life.

*"I really felt I had found my tribe,"* he would later recall, *"in a way that I had not felt meeting other kinds of software engineers."*

Think about that. A man who had spent years in the video game industry, surrounded by brilliant programmers. A man who had worked at consulting shops and startups. And here, at a conference for web developers who happened to love a Japanese programming language, he felt *for the first time* like he belonged.

This was not a small thing. This was the emotional accelerant that turned a vague dissatisfaction with consulting into a burning need to build something *for these people*. These were his people. And they had a problem.

The problem was deployment.

In 2007, getting a Ruby on Rails application onto the internet was an exercise in suffering. You had to provision a server --- usually a VPS from some hosting provider with a website that looked like it had been designed in 1998. You had to SSH into that server. You had to install Ruby, install Rails, install all the dependencies, configure Apache or Nginx, set up a reverse proxy, configure your database, manage Mongrel instances (Mongrel being the Ruby application server of the era, famous for its instability), and then, if everything went perfectly --- which it never did --- you could deploy your code.

And then when your app got popular, you had to do it all again. And again. Scaling was not "turning a dial." Scaling was "spending your weekend weeping into a terminal."

The Ruby on Rails community was full of brilliant application developers who were terrible system administrators, and they were hemorrhaging time and energy on the unglamorous work of keeping their apps alive. They wanted to write code. They were stuck wrestling with servers.

Adam saw this. He felt this. He *was* this. And he went back to Orion and James with an idea.

---

## IV. THE FIRST WRONG ANSWER (THAT LED TO THE RIGHT ONE)

Adam Wiggins had, before RailsConf, been tinkering with a prototype. It started as something very specific: a Ruby debugger that ran in the browser. The idea was that you could hit a "Pause" button on a production application and examine the stack trace right there in your web browser, like a mechanic popping the hood of a car.

But Adam's imagination wasn't built for small ideas. The debugger prototype expanded. It grew panes: a code editor pane. A stack trace viewer. A REPL console (a place where you could type Ruby commands and see the results immediately). An application output pane showing logs. It was becoming, bit by bit, a complete development environment that lived entirely in the web browser.

And then the vision crystallized into something grand, maybe too grand: **end-user programming.**

Adam was inspired by spreadsheets --- the original "programming for non-programmers" tool --- and by FileMaker Pro, which let normal people build database-driven applications without writing code. What if you could do the same thing for web applications? What if the act of creating a web app could be as simple as opening a Google Doc?

*"It's all one thing,"* Adam explained about the vision. The editor, the runtime, the database, the deployment --- they wouldn't be separate concerns. They would be a single, unified experience. You would open Heroku in your browser, write some code (or maybe not even code --- maybe something more accessible), and your application would just... *exist*. On the internet. Running. No servers. No configuration. No tears.

This was the idea that the three founders carried with them when they left Bitscribe. When Paul Graham and Y Combinator asked them to drop their outside commitments, they went back to Los Angeles one last time, wrapped up their consulting work at Bitscribe, and headed north to San Francisco.

They were going to make programming accessible to everyone.

They were wrong. But they were wrong in exactly the right way.

---

## V. THE Y COMBINATOR CRUCIBLE (WINTER 2008)

Y Combinator in 2008 was not what Y Combinator is today. Today, YC is a Silicon Valley institution, a brand name that opens doors and writes checks. In 2008, it was still Paul Graham's weird experiment --- a tiny accelerator that gave small amounts of money to young founders and made them work like dogs for three months in exchange for a sliver of equity and a network that might or might not be worth anything.

Heroku was one of twenty-one startups in the Winter 2008 batch. Adam, Orion, and James pitched their "FileMaker Pro for the web" vision. The pitch was good. The demo was good. The idea of an in-browser code editor that democratized programming was *seductive*.

There was just one problem: nobody wanted it.

Well, that's not exactly true. People *loved* the demo. They'd sign up, play with the editor for a few minutes, maybe build a little toy app, and then... vanish. The usage data told a brutal story: the product lacked **stickiness**. People were impressed but not addicted. They'd come in, say "wow, that's cool," and leave. Like a museum exhibit. Interesting to look at, but nobody was moving in.

This was the nightmare scenario for a YC startup. You had a product that *demoed* beautifully --- the kind of product that made investors nod and take notes --- but that users didn't actually *need*. Demo-ware. Vaporware with a pulse.

Y Combinator itself, according to Adam, didn't so much validate the product as educate the founders. The program taught them how to raise venture capital, how to think about company-building, how to talk to investors without sounding like engineers. These were useful skills. But they didn't solve the fundamental problem: the product was beautiful and useless.

What Y Combinator *did* give them was time in San Francisco. Time in the same city as the burgeoning Ruby community. Time in the same city as a small group of developers who were, at that very moment, building something that would become critical to Heroku's survival: **GitHub**.

---

## VI. THE FOLK PRACTICE AND THE ZIPFILE REVELATION

The months after Y Combinator were a slow-motion crisis. Heroku had raised money. They had users. They had a product that people liked but didn't love. And the founders were starting to argue.

Not the screaming, table-flipping kind of argument. The worse kind: the quiet, corrosive disagreement where everyone knows something is wrong but nobody wants to be the one to say it out loud. Because saying it out loud meant admitting that the thing they'd poured their hearts into --- the in-browser editor, the democratization-of-programming dream --- was a dead end.

Adam was watching the usage data obsessively. And he kept coming back to the same anomaly: the **import feature**.

Heroku's in-browser editor had a little feature that let you upload existing code. It was supposed to be a convenience --- a way to get started quickly if you already had a project. But the power users, the ones who stuck around, were using it as their *primary workflow*. They were writing code in TextMate or Vim or Emacs on their own machines, zipping it up, and uploading it to Heroku.

They were using the deployment infrastructure and ignoring the editor entirely.

*"This instant deployment aspect --- that's really nice,"* the users were effectively saying through their behavior. Not through surveys. Not through feedback forms. Through the silent, honest language of what they actually *did*.

Adam called it a "folk practice" --- a term that carries a certain anthropological weight. Like watching a primitive society develop agriculture: nobody planned it, nobody announced it, but a pattern emerged because the underlying need was so strong that human beings couldn't help but invent a way to meet it.

The message was clear: **Developers don't want to write code in your browser. They love their editors. They love their terminals. What they hate --- what they despise with a burning, visceral hatred --- is deployment. Make deployment not suck, and you have a business. Keep trying to replace their editor, and you're dead.**

---

## VII. THE PIVOT THAT BROKE THEIR HEARTS

The decision to pivot was not a decision. It was a funeral.

Adam, Orion, and James loved the editor. Other people loved the editor. There was a community of users who genuinely enjoyed the in-browser coding experience, who thought it was the future, who would be devastated to see it go.

*"We loved the editor,"* Adam would say later, the emotional weight still audible in his voice years after the fact. *"There was a lot of people that did love the editor, and we were cutting something away."*

They tried to soften the blow. The editor was spun off into a separate product called **Heroku Garden**, with the tagline "Learn Rails, Work from Anywhere, Move to Heroku Later." It was, in the kindest interpretation, an attempt to preserve the original vision while pursuing the new one. In the less kind interpretation, it was a goodbye letter. Heroku Garden launched and limped along for about three months before being shut down in January 2010. Nobody mourned it. The world had moved on.

In September 2008, the founders made the call. They gave themselves **three months** to rebuild Heroku from scratch. Not a tweak. Not an iteration. A complete ground-up reimagining of what the product was.

The old Heroku said: *Come write code in our browser.*

The new Heroku would say: *Write code wherever you want. When you're ready, push it to us. We'll handle the rest.*

Three months. September, October, November, December. Four people --- the three founders and their first engineering hire --- working to rebuild the entire platform from nothing.

---

## VIII. THE GIT GAMBLE AND THE ENGINE YARD OFFICE

To understand the breakthrough, you have to understand a technical debate that was raging in the software world in 2008.

Version control --- the system by which programmers track changes to their code --- was in the middle of a civil war. On one side: **Subversion** (SVN), the established incumbent, centralized, familiar, boring. On the other side: **Git**, created by Linus Torvalds (yes, the Linux guy) in a fit of pique after a licensing dispute with another version control company. Git was decentralized, fast, powerful, and --- in 2008 --- deeply confusing to most developers.

Adam Wiggins initially built Heroku's deployment integration using Subversion. It was the safe choice. It was the choice that made sense. Most Ruby developers were using SVN.

But then Adam had one of those moments of clarity that, in retrospect, look like genius but in the moment felt more like insanity. He was looking at Heroku's user numbers --- which were, to put it charitably, not great --- and he thought: *"No one uses us. What is the point of integrating to a thing that no one uses?"* If almost nobody was using Heroku yet, then backward compatibility didn't matter. They were free to bet on the future instead of the present.

And the future, Adam believed, was Git.

He wasn't wrong, but he wasn't obviously right either. In 2008, Git was still a niche tool, beloved by kernel hackers and early adopters but baffling to the mainstream. Betting on Git was like betting on electric cars in 2005: probably correct in the long run, but potentially suicidal in the short run.

And then fate intervened, as it sometimes does, in the form of an office visit.

Adam Wiggins found himself at **Engine Yard's office in South Park**, San Francisco. Engine Yard was another Ruby hosting company --- bigger, more established, Heroku's competitor. And in that office, Adam met a young developer named **Chris Wanstrath**.

Chris Wanstrath and his co-founders were building a new product: a web-based hosting service for Git repositories. They were calling it **GitHub**.

Wanstrath, casual, friendly, unaware that he was participating in a moment of historical significance, asked Adam a simple question: *"Do you want to put some projects on our thing?"*

Neither of them viewed it as a strategic partnership. It was two guys at a mutual friend's office, swapping links to their respective side projects. But the collision of these two ideas --- GitHub as the place where you store your code, Heroku as the place where you run your code --- would become one of the most natural and powerful developer workflows in the history of the internet.

In 2008, the Ruby on Rails project itself switched to GitHub. The entire Ruby community followed. Almost overnight, every serious Ruby developer was using Git. Adam's gamble paid off with a speed that startled even him.

---

## IX. GIT PUSH HEROKU MAIN

On January 15, 2009, the new Heroku launched.

The old homepage --- friendly, approachable, inviting you to "Create and Edit Online" --- was gone. In its place was something that looked like a terminal. Dark background. Monospaced font. Code snippets. It was deliberately, almost aggressively technical.

James Lindenbaum, the design perfectionist, had made a conscious choice. The old Heroku had "scared off serious developers" with its toy-like editor. The new Heroku would be the opposite. It would signal, through every pixel, that this was a tool for professionals. The homepage would show *nothing but code*, and it would show the single most revolutionary command in the history of web deployment:

```
$ git push heroku main
```

That's it. That was the entire deployment process. You wrote your code. You committed it to Git. You typed those four words. And your application was live on the internet.

No servers to configure. No SSH keys to manage. No Apache reverse proxies to debug at 3 AM. No Mongrel instances crashing under load. None of it. You pushed your code, and Heroku did *everything else*.

*"The thing that blew people's mind,"* James Lindenbaum would later say, *"was the Git push to deploy, which is the core idea people take away from Heroku."*

"Blew people's mind" is not an exaggeration. In 2009, deploying a web application was a multi-hour, multi-step, anxiety-inducing process that required specialized knowledge that most application developers didn't have and didn't want. `git push heroku main` reduced it to a single command that took seconds. It was like replacing a horse-drawn carriage with a teleporter.

Heroku launched commercially with paid tiers in April 2009. The stickiness problem was gone. Users weren't just signing up and playing around; they were deploying real applications and coming back every day. The usage curves that had flatlined with the browser editor were now pointing up and to the right with the aggressive slope that makes venture capitalists salivate.

---

## X. THE CUSTOM LOAD BALANCER AND THE ENGINEER WHO QUIT

But behind the elegant simplicity of `git push heroku main` was an infrastructure nightmare that the founders had to solve through sheer technical will.

The early Heroku ran on a relatively standard web stack. They used NGINX as their load balancer and reverse proxy, which worked fine when they had a few hundred applications. But Heroku was growing fast --- thousands of applications, then tens of thousands --- and each application ran in what they called a **"dyno"**: a lightweight, isolated process that could be spun up, scaled, and torn down on demand.

The dyno was Heroku's signature invention, and it was beautiful conceptually: instead of managing servers, you managed dynos. Want to handle more traffic? Spin up more dynos. It was like "dialing up a knob" --- James Lindenbaum's metaphor --- instead of calling your operations team and begging them to provision another server.

But behind the scenes, the load balancer had to route incoming HTTP requests to the right dyno, and as the number of dynos grew from hundreds to thousands, NGINX started to creak. Every time a dyno was created or destroyed, the NGINX configuration file had to be rewritten and the server had to be gracefully reloaded using a SIGHUP signal. At hundreds of dynos, this was manageable. At thousands, it was becoming a bottleneck. At the scale they were heading toward, it would be impossible.

Adam Wiggins and **Blake Mizerany** --- Heroku's first full-time engineering hire, a brilliant and opinionated developer who had created **Sinatra**, the minimalist Ruby web framework --- sat down and stared at the problem.

The conclusion they reached was radical: *"We really just need to write our own load balancer."*

This is, in the world of systems engineering, the equivalent of telling your mechanic you're going to build your own engine. Custom load balancers are the kind of thing that companies like Google and Amazon build with teams of dozens. They are not the kind of thing that a startup with a handful of engineers casually decides to whip up on a Tuesday.

One of Heroku's operations engineers heard the plan and reacted with undisguised horror. He called it *"the worst case of Not Invented Here I've ever heard."* "Not Invented Here" syndrome --- the tendency of engineers to build things themselves instead of using existing solutions --- is one of the cardinal sins of software engineering. It's how companies waste millions of dollars reinventing wheels that already spin perfectly well.

And then the engineer quit.

He walked out. He'd seen enough. Building a custom HTTP load balancer from scratch, in a startup that was still fighting for its life, was, in his professional judgment, insane.

Adam and Blake built it anyway.

They built it, and it worked. The custom routing mesh --- built with MochiWeb, an Erlang-based HTTP library --- outperformed NGINX. It could dynamically route traffic to thousands of dynos without configuration file rewrites, without graceful reloads, without any of the bottlenecks that were strangling the NGINX-based system. It was, against all reasonable expectations, exactly the right decision.

The engineer who quit was wrong. But he wasn't unreasonable. Sometimes the line between genius and insanity is only visible in retrospect, and only from the winning side.

---

## XI. THE NAME

A brief interlude about the word "Heroku."

The founders wanted a name that didn't mean anything specific --- not in English, not in Japanese, not in any language. They wanted a blank slate, a word that could mean whatever they wanted it to mean.

They settled on a portmanteau: **"heroic"** and **"haiku."**

"Heroic" because they wanted to make developers into heroes --- to take the misery of deployment and slay it, to give programmers superpowers they didn't know they could have. "Haiku" because of Ruby's Japanese origins, because of the elegance and brevity that haiku represents, because a haiku is a small thing that contains a vast world.

**Heroku.** Heroic haiku. The heroic compression of something vast into something small. Deploy your entire application with a single command. Express infinite complexity in seventeen syllables. It was a name that encoded the company's philosophy in six letters.

Adam consulted with Matz --- Yukihiro Matsumoto, the creator of Ruby --- about the name. When Adam told Matz what they were calling it, he was watching carefully for a reaction. Would Matz, a native Japanese speaker, hear a Japanese word? Would it mean something embarrassing?

Matz asked what the name meant. He didn't recognize it as Japanese. Adam exhaled. The name was clean. It was theirs.

And then they took the Japanese aesthetic further. The application names that Heroku auto-generated for new projects were **haiku-style**: random combinations of evocative words like "falling-water-3429" or "hidden-meadow-7841." The color scheme was **purple** --- not the boring blue of every other tech company, not the aggressive red of a startup trying too hard, but purple: regal, unusual, unmistakable. The entire brand was a deliberate, James-Lindenbaum-obsessed rejection of everything that infrastructure companies were supposed to look like.

*"Infrastructure was traditionally stodgy, boring, clunky, annoying,"* Adam said. *"Developers are people, too. Developers like stuff to be slick, and look nice, and feel nice."*

This sounds obvious now, in a world where developer tools compete on design and user experience. In 2008, it was borderline revolutionary. Hosting companies had websites that looked like they were built in Microsoft FrontPage. Server dashboards were walls of gray tables and tiny text. The idea that a cloud platform should be *beautiful* was treated as frivolous by the engineering establishment.

It wasn't frivolous. It was a competitive advantage that nobody else understood.

---

## XII. THE SUITORS

By 2009 and into 2010, Heroku was growing fast enough to attract attention from the giants.

**Amazon** came first. The offer was approximately **$30 million**. For three guys who had been building warehouse management software at a consulting shop in Los Angeles a few years earlier, $30 million was a staggering number. It was life-changing money. It was never-work-again money.

They said no.

Then came **VMware**. The offer was **$70 million**, with a formal letter of intent. VMware was a serious company with deep pockets and a genuine strategic interest in cloud platforms. The deal made sense on paper.

Adam felt ambivalent. He could see the logic of the combination, but something gnawed at him. Heroku was in the middle of building the Cedar stack --- the next-generation platform that would support multiple programming languages and transform Heroku from a Ruby-only tool into a universal deployment platform. The Twelve-Factor App methodology was taking shape in his mind, the codification of everything he'd learned about how applications should be built and deployed. He was in the middle of the most creative and productive period of his life.

*"If this acquisition disrupts that,"* Adam thought, *"for me, that wouldn't be worth any amount of money."*

The VMware negotiations were advancing, the letter of intent was on the table, and then **Steve Anderson** stepped in.

Steve Anderson was the founder of Baseline Ventures. He had invested in Heroku's seed round in 2008, back when Heroku was still an in-browser code editor with a stickiness problem. Anderson was not a passive investor. He had conviction about what Heroku was worth, and $70 million wasn't it.

Anderson pulled the founders into a meeting. The VMware letter of intent was sitting there, a $70 million bird in the hand. Anderson looked at them and said:

*"I think this is too cheap."*

He argued that Heroku had no peer. There was nothing else like it in the market. The value was going to compound. They should hold out. They should raise more money instead.

This is the kind of moment that only looks easy in hindsight. In the moment, you have $70 million on the table --- real, guaranteed, cash money --- and an investor is telling you to walk away because he thinks there's more to come. What if he's wrong? What if the market turns? What if a competitor catches up? What if the next offer is $50 million instead of $70 million?

They walked away from VMware. Anderson's conviction held. In mid-2010, Heroku raised a **Series B** financing round, buying time and runway.

And then, six months later, the phone rang, and it was Salesforce.

---

## XIII. $212 MILLION IN CASH

The Salesforce offer arrived in late 2010: **$212 million in cash**, net of cash acquired. Plus approximately $27 million in restricted stock and restricted stock units for employees, and $10 million in cash for unvested shares. The total package was close to $250 million.

At the time, Heroku had roughly **30 employees**. It supported **only Ruby**. It had powered over **105,000 applications**. It had raised **$13 million** in total funding. And it was about to become the **largest exit in Y Combinator's history** up to that point.

James Lindenbaum and **Byron Sebastian** --- Heroku's CEO, who had been brought in to handle the business side while the founders focused on product --- handled the bulk of the negotiations with Salesforce. Adam stayed focused on the product, on the Cedar stack, on the Twelve-Factor App.

*"The higher the number is, the more you should really listen,"* Adam would reflect later. $212 million was a number that demanded attention.

Marc Benioff, Salesforce's flamboyant CEO, saw in Heroku something that most enterprise software executives would have missed entirely: the developer was becoming the most important person in the technology ecosystem. Salesforce was an enterprise company selling to CIOs and procurement departments. Heroku was a developer company selling to individual programmers. The combination would give Salesforce something it desperately needed: credibility with the people who actually built the software.

Byron Sebastian, at the time of the announcement, put it in corporate terms: *"Together, we will provide the best place to run and deploy Cloud 2 apps. We believe this is the winning combination to bring cloud application platforms into the mainstream of the enterprise."*

The deal closed in January 2011. Heroku was no longer an independent startup. It was a Salesforce company.

Adam Wiggins stayed on. There was still work to do.

---

## XIV. THE CEDAR REVOLUTION AND THE TWELVE COMMANDMENTS

2011 was the year Adam Wiggins said what he needed to say.

In rapid succession, two things happened that cemented Heroku's place in the history of software:

**First: The Cedar Stack.**

Cedar was the new platform architecture that Adam and the team had been building since early 2010 --- the work he'd been so worried about disrupting when VMware came calling. Cedar was Heroku's transformation from a Ruby-only platform into a **polyglot** platform that could run applications written in any programming language: Ruby, Node.js, Python, Java, Clojure, Scala, and eventually dozens more.

The key innovation was the **buildpack**: a scripted build process that could compile and package an application written in any language. Cedar itself had no native language support at all --- it was a blank canvas, and buildpacks were the paint. This was an architectural decision of stunning elegance: instead of building separate platforms for each language (the obvious approach, the approach any committee would have chosen), they built *one* platform that was infinitely extensible.

Cedar also introduced **workers** --- background processes that could handle jobs outside the web request cycle --- and vastly improved **logging**, giving developers real-time visibility into what their applications were doing.

The Cedar stack took more engineering effort than the original Heroku platform itself. It was the work of a team that had grown from three founders to over a hundred people, backed by Salesforce's resources and credibility. And it transformed Heroku from "the best way to deploy a Rails app" into "the best way to deploy *anything*."

**Second: The Twelve-Factor App.**

This was Adam's manifesto. His thesis. His attempt to compress everything he'd learned from building Heroku --- from deploying hundreds of his own applications and watching hundreds of thousands of others --- into a set of principles.

The Twelve-Factor App was not a product announcement or a marketing document. It was a philosophical text, closer in spirit to a religious tract than a press release. It laid out twelve principles --- codebase, dependencies, config, backing services, build-release-run, processes, port binding, concurrency, disposability, dev/prod parity, logs, admin processes --- that described how a well-behaved cloud application should be built.

The principles weren't arbitrary. They were distilled from observation. Adam and his team had seen hundreds of thousands of applications deployed on Heroku. The ones that worked well --- that scaled easily, deployed reliably, and caused minimal operational headaches --- all followed similar patterns. The ones that broke, that leaked memory, that crashed under load, that drove their developers to despair --- all violated the same principles in the same ways.

The Twelve-Factor App was a map of the terrain, drawn by someone who had watched thousands of people walk it and noted where they fell.

Adam published it and stepped back. He had, in his own estimation, *"said what I needed to say."*

---

## XV. MATZ COMES HOME

In July 2011, Heroku made an announcement that sent a shockwave through the Ruby community: **Yukihiro "Matz" Matsumoto** --- the creator of Ruby, the man whose philosophy of programmer happiness had inspired everything Heroku stood for --- was joining Heroku as **Chief Architect of Ruby**.

This was the equivalent of a car company hiring Henry Ford. The creator of the language that had given birth to Heroku, the man whose insistence that programming should be joyful had set the entire chain of events in motion, was now part of the team.

Matz would continue working from Shimane Prefecture, Japan, continuing his role at the Network Applied Communication Laboratory. He would continue leading the Ruby community. But he would do so as a Heroku employee, with Heroku's resources behind him, deepening the already profound connection between the platform and the language that had inspired it.

It was a poetic full circle: a company named for heroism and haiku, built on a language designed for happiness, hiring the man who had designed that happiness into the language in the first place.

---

## XVI. WAZA: THE CONFERENCE THAT WASN'T A CONFERENCE

In 2012, Heroku did something that no infrastructure company had ever done: they threw a conference about **art**.

They called it **Waza** --- the Japanese word for "art and technique." It was held in San Francisco, and it was unlike any developer conference that had come before.

There were technical sessions, yes. But there was also **quilting**. There was **book-binding**. There were **Arduinos** and **origami**. There was **craft coffee**. There was **live music** and **large-format photography** and **architectural origami**. The conference's thesis was that software development was a *craft*, that technique mattered, that the journey from journeyman to master was as relevant to programming as it was to woodworking or calligraphy.

Waza returned in 2013 at The Concourse in San Francisco. More than 900 attendees came. Matz spoke. Jacob Kaplan-Moss, the co-creator of Django, spoke. The conference featured sessions on everything from cutting-edge application architecture to the philosophy of design.

It was the purest expression of Heroku's cultural DNA: the belief that developers were creative people, that infrastructure should be beautiful, that the craft of building software was worthy of the same reverence as any other art form.

No other hosting company would have thought to host a quilting workshop at a tech conference. That was the point.

---

## XVII. THE ORIGAMI CRANES AND THE BLACK HOODIE

One detail, because detail matters:

The iconic origami imagery that became synonymous with the Heroku brand --- the delicate paper cranes that adorned the website and marketing materials after the Salesforce acquisition --- was created by a designer named **Todd**. Todd didn't use a professional photo studio. He didn't hire a stylist or rent equipment.

He folded paper cranes. He placed them on his **black hoodie jacket**, laid flat. He photographed them with his **iPhone**. Then he enhanced the images in Photoshop.

The most recognizable visual identity in the history of cloud computing was shot on a phone, on a hoodie, on a kitchen table. It was the Heroku ethos distilled into a single creative act: do it yourself, make it beautiful, don't overthink it.

---

## XVIII. THE SLOW FADE

Adam Wiggins left Heroku in the years after the acquisition. He described himself as a *"zero to one guy"* --- most alive in the earliest days of building, when everything is possible and nothing is certain. By 2011, Heroku was no longer a scrappy startup. It was a division of a public company, with enterprise customers and sales teams and all the organizational machinery that comes with scale.

*"Is Heroku still a product I want to use today?"* he asked himself, years later. *"And it is. I'm running my current business on it."*

But the question lingered: what if they'd waited?

GitHub --- the company whose founders Adam had met in that Engine Yard office in South Park, the company that had been building a Git hosting service while Heroku was building a Git deployment platform --- was acquired by **Microsoft in 2018 for $7.5 billion**. Thirty-five times what Salesforce paid for Heroku.

Had Heroku stayed independent, had it continued to grow, had it captured even a fraction of the value that GitHub captured... the numbers were dizzying. Adam gamed out the scenarios: a potential multi-billion-dollar acquisition, four or five years later. But the realistic acquirers --- IBM, SAP, maybe Oracle --- were companies that felt culturally toxic to everything Heroku stood for. Salesforce, whatever its flaws, was *"the original cloud company."* It was the least bad option.

And anyway, Adam reflected, the regret wasn't really about money.

*"It's more about impact,"* he said, *"and making something that makes the world a better place."*

---

## XIX. THE STARVATION

What happened to Heroku after the acquisition is a story that plays out in slow motion, like watching a garden die from lack of water.

For a while, things were good. Salesforce kept its promise to let Heroku operate independently. The Cedar stack shipped. Matz joined. The add-ons marketplace grew to over 200 services --- a kind of **app store for infrastructure** where developers could add databases, monitoring, email, search, and dozens of other services to their applications with a single click.

But slowly, almost imperceptibly, the investment dried up.

**Craig Kerstiens**, a former Heroku product leader, would later put it with devastating clarity: *"The reality is, Heroku, as a whole, hasn't been invested in --- from a Salesforce perspective --- for the last eight years."*

Eight years. Eight years of a company being starved of resources while its parent company posted record revenues. Eight years of fewer engineers and fewer employees supporting more apps and more users. Eight years of the garden slowly browning, slowly dying, while the gardener was off tending other flowers.

The fraud problem was the symptom, not the disease. Heroku's free tier --- the thing that had made it the default deployment platform for every coding bootcamp graduate, every weekend hacker, every first-time developer on the planet --- was being abused for cryptocurrency mining and other scams. But the reason fraud management was overwhelming the team wasn't because the fraud was unusually sophisticated. It was because the team was too small.

*"When you've got more apps and users of Heroku and fewer engineers and employees to support it,"* Kerstiens said, *"fraud becomes more and more painful. This was a starvation over a six-, seven-, eight-year period."*

In August 2022, **Bob Wise**, Heroku's general manager, announced the end of the free tier. Free dynos. Free Postgres databases. Free Redis instances. All gone, effective November 2022.

The announcement sent a tremor through the developer world. Heroku's free tier wasn't just a product feature; it was a **cultural institution**. It was the place where countless developers deployed their first application. It was the training wheels of the modern web. Removing it wasn't just a business decision; it was an amputation of something that had made Heroku *Heroku*.

Developers migrated in droves to Render, Railway, Fly.io, Vercel --- the next generation of platforms that had been inspired by Heroku's original vision and were now inheriting its users.

---

## XX. THE FINAL MEMO

In February 2026, Heroku made it official. The company announced its transition to a **"sustaining engineering model"** --- corporate speak for "we're done building new things." The focus would be on stability, security, reliability, and support. No new features. No new innovation. No new vision.

New Enterprise Account contracts would no longer be offered. Existing subscriptions would continue. The lights would stay on. But the fire --- the creative fire that Adam and Orion and James had lit in that Los Angeles consulting office, the fire that had burned through RailsConf and Y Combinator and the three-month pivot and the custom load balancer and `git push heroku main` and the Twelve-Factor App and Waza and the origami cranes on the black hoodie --- that fire was out.

---

## XXI. THE AFTERIMAGE

Adam Wiggins went on to co-found **Ink & Switch**, an industrial research organization, and then **Muse**, a canvas-based thinking tool. He organized **Local First Conf**. He kept building things, kept pursuing the obsession that had driven him since he was a teenager writing MUDs in Arizona: *improving computers in service of human creativity and prosperity.*

James Lindenbaum founded **Heavybit**, a San Francisco-based community and program for developer-focused businesses. The OCD perfectionist channeled his obsessive attention to detail into helping other founders build the kind of developer-first companies that Heroku had pioneered.

Orion Henry, the quiet catalyst who had pulled Adam out of the video game industry and into the orbit of his life's work, moved on to other things. He and his wife Jaymie worked on **The Right to Heal**, a documentary and public health initiative focused on bringing basic essential surgeries to developing nations. From building the internet's deployment infrastructure to helping build operating rooms in the developing world: it was a different kind of platform, for a different kind of deployment.

The Twelve-Factor App methodology, published in 2011, remained relevant **fourteen years later**. Adam himself expressed astonishment at its longevity. In 2024, Heroku open-sourced the Twelve-Factor App definition, freeing it from any single company's ownership and releasing it into the commons. The principles Adam had distilled from watching hundreds of thousands of applications succeed and fail had become something approaching universal law.

And over 65 million applications had been created on Heroku, cumulatively. Billions of requests served daily. An entire generation of developers had learned to deploy by typing those four sacred words into their terminal.

---

## XXII. THE MEANING

Here is what the story of Heroku is really about:

It is not about deployment. It is not about Ruby. It is not about cloud computing or platform-as-a-service or any of the other terms that will sound quaint in twenty years.

It is about the oldest story in building things: **listening to what people actually need instead of what you think they should want.**

Adam Wiggins wanted to democratize programming. He wanted to build FileMaker Pro for the web. He wanted to bring computing to the masses. It was a noble vision. It was a beautiful vision. And the users --- silently, persistently, through the folk practice of uploading zip files instead of using the code editor --- told him he was wrong.

He listened. That was the whole trick. He listened to the behavior, not the compliments. He listened to what people *did*, not what they *said*. And he had the courage to kill the thing he loved --- the in-browser editor, the democratization dream --- in order to build the thing people actually needed.

`git push heroku main` was not a technical innovation. Git existed. Servers existed. Deployment existed. What Heroku did was remove the suffering. It took a process that was complicated and painful and turned it into a process that was simple and joyful. It took the philosophy of Ruby --- *programmer happiness* --- and applied it to the most unloved part of the development process.

Three friends from a consulting shop in Los Angeles. A MUD called Blood Dusk that's still running. An in-browser code editor that nobody used the right way. A folk practice with zip files. A gamble on Git. A meeting in an Engine Yard office. A custom load balancer built after an engineer quit in disgust. Origami cranes photographed on a hoodie with an iPhone. $212 million in cash. A slow starvation. A sustaining engineering memo.

And somewhere, right now, someone is opening their terminal for the first time. They've written their first web application. They don't know what a server is. They don't know what a reverse proxy is. They don't know what SSH stands for.

They type `git push heroku main`, and their application appears on the internet, and they feel like a hero, and they don't know why it's called that, and they don't need to.

That is the story of Heroku.

---

**Sources:**

- [The Story of Heroku | Lee Robinson](https://leerob.com/heroku)
- [The story of Heroku with Adam Wiggins (Changelog Interviews #513)](https://changelog.com/podcast/513)
- [Heroku's early history: 4 home pages that made $212 million | Francis Irving](https://www.flourish.org/2012/05/herokus-early-history-4-home-pages-that-made-212-million/)
- [Heroku - Wikipedia](https://en.wikipedia.org/wiki/Heroku)
- [Heroku - Grokipedia](https://grokipedia.com/page/Heroku)
- [Adam Wiggins](https://adamwiggins.com/)
- [Salesforce Buys Heroku For $212 Million | TechCrunch](https://techcrunch.com/2010/12/08/breaking-salesforce-buys-heroku-for-212-million-in-cash/)
- [Steve Anderson on Investing in Heroku | TechCrunch](https://techcrunch.com/video/steve-anderson-on-investing-in-heroku/)
- [Ruby Creator Matz Joins Heroku | Heroku](https://www.heroku.com/blog/matz_joins_heroku/)
- [Heroku Waza 2013 | Heroku](https://blog.heroku.com/waza-2013)
- [Heroku announces plans to eliminate free plans | TechCrunch](https://techcrunch.com/2022/08/25/heroku-announces-plans-to-eliminate-free-plans-blaming-fraud-and-abuse/)
- [The decline of Heroku | InfoWorld](https://www.infoworld.com/article/2264177/the-decline-of-heroku.html)
- [Heroku's Reinvention Gambit | WebProNews](https://www.webpronews.com/herokus-reinvention-gambit-how-salesforces-once-dominant-cloud-platform-is-betting-everything-on-a-comeback/)
- [James Lindenbaum on founding Heroku and Heavybit | Medium](https://medium.com/memory-leak/james-lindenbaum-on-founding-heroku-and-heavybit-why-devs-matter-more-than-ever-and-what-it-takes-89475f4c591b)
- [Heroku: Y Combinator](https://www.ycombinator.com/companies/heroku)
- [V1Y1 - Heroku History](https://www.v1y1.com/V1Y1/heroku-history)
