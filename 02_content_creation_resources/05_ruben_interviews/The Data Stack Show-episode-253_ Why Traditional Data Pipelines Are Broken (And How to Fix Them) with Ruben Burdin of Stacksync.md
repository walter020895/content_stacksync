# The Data Stack Show-episode-253\_ Why Traditional Data Pipelines Are Broken (And How to Fix Them) with Ruben Burdin of Stacksync

**John:** Hi, I'm Eric Dots. And I'm John Wessel. Welcome to the Data Stack Show. The Data Stack Show is a podcast where we talk about the technical business and human challenges involved in data work. 

**Eric:** Join our casual conversations with innovators and data professionals to learn about new data technologies and how data teams are run at top companies.

Before we dig into today's episode, we wanna give a huge thanks to our presenting sponsor, rudder Sack. They give us the equipment and time to do this show week in, week out, and provide you the valuable content. Rudder Sack provides customer data infrastructure and is used by the world's most. Innovative companies to collect, transform, and deliver their event data wherever it's needed, all in real time.

You can learn more@ruddersack.com. Welcome back to the show. We are here again with Ruben Birding and he joined us at Data Council. We did a little bit of a lightning round at Data Council Reuben. Mm-hmm. And so we will take our time to dive deep. Thanks for joining us again for your second to second slot on the show.

**Ruben:** Yeah. Thank you so much for hosting. 

**Eric:** Greg, well, give us just a little bit of background. For those who didn't hear the Data Council Show. Give us a little bit of background on yourself and then just the one or two sentence overview of Stack Sync. 

**Ruben:** Perfect. So me, my name is Ruben, I'm confounder in CEO at Stacksync. So I am based here in San Francisco, California, building taxing with our team.

I'm originally from France, so bit of my background. You know, I did study the computer science double degree in computer science and one degree in business as well back in Switzerland. And then I worked as well, you know, in Germany and in Singapore. And actually this is also where I got really in touch with the world of two ways syncking, because I was working, you know, in a company and I was as a consultant and was in charge of filling every, everything in place, you know, from accounting software to ERP, to CRM, and I, you know, all of these tools to work in two ways, syn.

So what updating the CRM reflected to the ERP and vice versa. And there were no products on the market. Like, then I, I search, you know, I tried to build, you know, some alternatives myself, you know, with somehow, you know, Workato, et cetera. And none of them really worked, was really complex. And I just couldn't leave the company because everybody was afraid to take this work over.

And this is where actually I realized, you know, like, this is where I realized, you know, this is a big whale problem. Everybody's complaining it should exist. And so. They're committed. You know, I started this entrepreneurial journey and now here we are. We did yc, so stacking, basically we were running for a year and a half.

Then we did YC Y Combinator in the Winter 24 batch. And since then, you know, we moved to San Francisco and really got this explosive growth that we have at the moment. 

**Eric:** Awesome. Well, one thing that I'm excited to talk about is where two-way sync fits into the stack. Because there are a lot of companies who, you know, sort of use a traditional sort of in transform out type loop.

So I'm excited to dig into that and, and just learn more about two-way sync in general. Dive deeper than we went last time. What, how about you Ruben? What do you wanna talk about? 

**Ruben:** Absolutely. So I'm super excited to talk about this too, with sync when it fits in the stack, but as well as like, you know. I'm very, you know, surprised, you know, how marketing is actually reshaping the perception of people on, on, you know, zero copy, etl, all this kind of trend, you know, and how actually this is.

Right now as we stand, no, it's most of marketing and little tech. Right? And it's, and it's crazy how much, you know, these tech people actually go into this, this, this fantasy of vendors, you know, selling it. And so yeah, extremely happy actually, also to, to decode that a little bit further and, yeah. 

**Eric:** Great.

Well, let's dig in. Let's do it. Ruben, I love having second time guests because I can say, if you haven't heard the first show, go listen to it and you'll get context and listen to 'em in a row so we can kind of dig right into some of the spicy, some of the spicier topics. The first one of which we'll cover is that zero copy isn't a real thing, and so very excited to dig into that.

But first I wanna do two things. One, I want to ask a little bit more about your background, and then I wanna. Give our listeners a high level overview of Stacky. We'll get way more into that later. You mentioned when we were recording the intro that you were a consultant. You were trying to get all these tools to talk together, you know, CRM, to talk to the ERP, and it was a really brutal problem.

You tried all these tools. What was the worst, what was the worst integration problem that you faced during that period where you just, you know, you just said, this is so. Gnarly and bad that, you know, did you ever think about giving up? I mean, what was the nastiest problem? 

**Ruben:** Absolutely. I mean, like this is, I mean, you know, building to, with sync with workflow automation tools or code was.

As you mentioned, like really brutal. I mean like, you know, like you, first of all, you know, you have to think about the whole architecture. Then you start building software, maybe like a day or two, you get a workflow and then you realize, okay, now when I edit a record in one on one side, it goes to the other side and vice versa.

And then you say, okay, well cool, this is great. So now what a, okay, so this, this is for one record, which I just created. What about for update? And now you have to figure out an entire update logic, right? And you realize, you know, okay, I'm gonna take the entire record. So whenever you know I have a record in Salesforce, I'm gonna update into my HubSpot and vice versa.

And then you say, well, okay, so I just, because Salesforce only tells you that the record has been updated, but not which field. So now you say, well, intuitively I'm gonna take an entire record. I'm gonna push it into HubSpot. But then you override the email. So now you have a for sure have a marketing person in the company, including a sequence and say, every time Mark email is updated and rolls this into a welcome email sequence.

So the guy, you know, so customers start now receiving welcome emails every time something is updated on the CRM, you know? Yep. So that's Tructure. You have to know exactly what changed. Now you have to run an entire system, which detects which field was updated into the record. And now you start storing data and then you have deletes as well, right?

And once you have done, let's say, all the credit operations, you are like, well that's great, but now this is for one record. Let's the data. Now you have to backfill all the historical data on the same system, and now it becomes extremely complex. And now every time that you know, your system misses one event for any reason.

One custom field added, you know, someone change the name of a field or something like this, it bugs and you lost the data. There is no monitoring. And so the maintenance overlaps. The first, first three weeks were so huge. It was taking my full time integrator position. For a single contact sync pipeline 

**Eric:** and so, well, yeah, I, I'm laughing.

It's a painful laugh because this is over 10 years ago, but I have to confess that I was a victim to the promise from the sales team that I can't remember if it was Salesforce or HubSpot, but it doesn't matter which one it was. But they're like, oh yeah, we just integrate with, you know, let's just say it was HubSpot.

They're like, we have a direct integration with Salesforce. All your data just goes back and forth and you don't, you just configure a few things, right? And I was like, oh, well that's great. And you know, I could not have been more wrong. And actually the thing that, uh, and I'm sure things have gotten better since then, 'cause it's a long time ago, but it was impossible to troubleshoot, especially with large batches, right?

I mean. You upload a bunch of leads, you do all of that. But the other thing actually that I'm interested in is that was a one that was one contact syn flow. But if we take Salesforce and HubSpot as an example, any data engineer or analyst who has worked on data from either her both systems who. Knows that like a contact record and what that means is not the same in these different systems.

Right. And the database design is different and like they can actually have like pretty dramatically different meanings even across teams. Right? And so like that's what you described sound really painful with the assumption that it's a shared definition across the two systems and across the two teams, which is actually more rare than it is common.

**Ruben:** I think probably what you had 10 years ago is probably even worse now because the systems are more complex instead of getting simpler because technology evolved. Mm-hmm. Like, because this, because it's even worse. And I'm telling you like now, and now we're just telling, you know, talking about how to sync systems, you know, databases, CRMs between each other, et cetera.

But it, but, and you, now you're mentioning the print of the definition of a thing, so it means you need to have filtering. Right. But filtering from A to B. Not the same as solution from B two A, even with the same definition, right? Yeah. So it's, this goes very crazy. And also if you want to really go even deeper, no contacts are not standalone contacts belong to a company.

So now you have to, oh, associate, now you have associate different association models also, you know, like the, you have ordering, right? Because you have to first create a company and then the contact, because the contact belong to the company. Yeah. Like, you know. In other systems, you know, you might have different association systems.

I mean, so where you have to create the record to the company and then associate them, you know? So it really, it's really different. And so you have all of these complexities to actually maintain, and this is what makes two West Sync very hard. So in the very beginning, it's very hard to go into the marketing and say, yeah, you know, it's very easy, you know, we integrate, et cetera.

And for example, say there is this very big. Very big pain on the market at the moment, right? Which is, you know, HubSpot, Zendesk for example, right? Mm-hmm. Integration of HubSpot and Zendesk, you know, is it the team at HubSpot is gonna tell you? Yeah, of course. We integrate with Zendesk. You know, you can use Zendesk for your customer support.

HubSpot is your CRM and this gonna work fine 'cause we have to a sync. So first of all, omni contact and companies and tickets are associated, but actually the tickets. It's not the tickets as you men, as you imagine them in the hotspot, so, so Zendesk tickets is gonna have to be synced to the service, you know, I mean to the service hub.

Of HubSpot. So you have to subscribe to the Zendesk of HubSpot. Yes. To get it syn, but which is a separate product. And if, and because you use Zendesk, you don't need the Service Hub or HubSpot. Yeah, yeah. Mm-hmm. Of HubSpot. Right. So actually you are actually just buying towards the same product to actually use it.

And you are, this is not the ticket you want to sync. So eventually, like you're just not sinking and you know, like every, you know, you won't have for all of your marketing contact, right. So you won't, so. Because you know, contacts will sync. You know, have different definition in HubSpot and in Zendesk, every person you send a marketing email, you know, even a call lead from HubSpot.

You don't want it to sync to your Zendesk support system, which is made for your customers or the people, which very high intent. And so what about this transformation which happened in between? Custom objects are not supported, associations are not supported. Like it is completely crazy. And so, and this integration are very costly.

And the still sell. 

**Eric:** Still sell. Yeah. It's wild. Yeah. That's why the original two-way sync is called a CSV file. Exactly. Exactly. Exactly. I mean that's, you know, CSV file and like lots of v lookups and stuff, just, you know, and there's usually. You know, there's usually someone you mentioned, you know, that in the intro that you know, it was hard for you to leave the company just because no one knew how all this worked.

Right. And CSV finals can be that way where it's like there's one person who knows. How to get it just right. 

**Ruben:** Yeah. That's crazy. I mean, and this is where stacking, you know, came all about, came to be, right. So stacking basically also, you know, really deep dives into this nature, into this realty of tool syncing between enterprise systems and where we really are.

You know, really a leader is really when it works at scale, right? So stacking basically really gets this two way sync at scale. And it's, it requires a whole complex engineering, which is almost a database label, you know, conflict management, you know, technology, which is like, sure, we've been developed over like tens of years and so, so yes.

So just more about stacking, you know, stacking is, today is a leader in real time and two ways syncing. Between enterprise systems and databases. So, you know, stacking supports CRMs like Salesforce and HubSpot, Zoho, et cetera. But also ERPs like NetSuite, you know, SAP, you know, Acumatica, and all of these tools, basically, they can be synchronized in two way sync with databases such as Postgres, snowflake, BigQuery, MongoDB, MySQL, Oracle db, you name it.

And so what release Taxing can enable us to do is really to actually bypass all of this. I pass tools, all of these complex in-house code, you know, custom code logics and just have like a two-way syn as you would think. It can in a human matter. Just simplify your architecture diagram to a very baby level, right?

Just like have, like, you know, two, one, you know, one CRM, one database. Whenever you modify something into the CRM, it goes into your database. When you modify that same table? No, not not on the table, the same table back. It's actually gonna write back into your CRM or ERP, and that's what Stack Channel really offers in real time with millions of records per minute, technically at big times.

**Eric:** I love it. Okay. I have a ton of questions about that, but I promise the listeners, we would do the spicy, we would get to a spicy take early, which is. Zero copy isn't a thing. So I wanna move around back to taxing specifics, but this really piqued my interest when we were chatting before the show you, I think you used the phrase zero copy isn't real.

Yes. I think that was, I think that was the phrase. Okay. So give us this spicy take, because it has been a major, it's been a major topic of discussion. You know, products, launches, feature launches. A lot of ink has been spilled, so. And I'm sure all of our listeners have heard of it, but for those that haven't, what is the promise of zero copy?

Give us like a baseline of what does zero copy mean? 

**Ruben:** Yeah, so let's get zero copy, or maybe in the, in its full term zero copy. ETL. Yeah. Or zero ETL. Even sometimes. It's basically the fact that right now basically you have to use, you know, five trend stitch, air, bike, et cetera, to transfer your data from, you know, an external source to the warehouse.

Right. So, you know, with this, there are a lot of recent tech developments, which actually tells you, okay, maybe we can agree on a common data format. And actually every system would pump on the same storage. So that there is no copy between system. Actually you have, we have one source of truth of data and you also CM would actually pump on this data.

So, so warehouse platform is data. Mm-hmm. Actually there is no transfer. Just a single place or single storage. Right. And to this, there are technical and business challenges that you know. At least 10 years or 15 years before it's solved, if it'll ever be right, because it's, it's really a business problem actually.

It is a very root, and every tech problem is a business problem in the end. And so dig into 

**Eric:** that a little bit more. What is the business problem? What is the business problem and why will it potentially not get solved? 

**Ruben:** Yeah, so, so basically et TL in general is basically like we need to, we have different data sources and we want to bring everything in the same place so we can actually have, you know, data, you know, data available for insights and reporting and do all sort of like operational things.

So it's a business product, like we need to do some real stuff and make some million money with this and now. What happens with this zero ETL? It's a, okay, well, shipping data from A to B is actually very long, costly, and hard to get very accurate, you know, at scale. 

**Eric:** Yes. 

**Ruben:** Yep. So, so, so, so then what happens is that taxing will, I mean, taxing or like any vendor actually will just transfer data, but it can get long, so, so people say, well, let's agree on a common data format.

A common place of storage. So we don't have to coffee. Everybody can just come and grab what they want, but there is no transfer. You know, there is no transport. It's just a common place. Mm-hmm. Okay. So, so that's a very good idea. But then this has. A very big business issue wise, this almost cannot happen is because Data warehouse, you know, I mean this common data format has to be sort of efficient for everybody.

Data warehouse work in a very different way than you know, which to make some query at scale, CRM, which is to retrieve records with different indexes, you know, to make it very fast for users, which work on a daily basis, right? Yeah. So this means that the storage. Of these two different, you know, the Salesforce and this snowflake have to be very different.

Mm. In nature. In nature. So just performance wise and business wise, it's a problem, but also strategy wise, right? I mean, like what, you know, what do you think? Do you think like Salesforce is gonna open up their backend and all of those are business secrets to everybody, right? It's like, I know. Yeah, this is not, you know, the schema, the schema will never be exposed because also like in the database schema, a company has much more than the data which is exposed to the customer.

There have also a lot of metadata, a lot of organization relations, optimizations, and you know, like, so the storage just cannot be the same because some part of it needs to be masked. So now you have to be a, you have to have very deep row level and column level. You know, access rights, right? So this cause another problem, right?

Of security. Mm-hmm. How do to make sure this never leaks. And so, so you have all of these business problems, which actually make sure, you always have to make copy simply because like the data which you operate in cannot be endangered. And also like we have a common piece of storage, and I'm throwing another question to the industry.

So Salesforce and Snowflake would share the same storage. Where is the storage? You know, who pays for this? Where is it? You know, you know, you know who, who accept to have latency, right? Do we all lock in the same vendor into the same Amazon S3 bucket, you know, our Google block storage? Do we have to lock it into that storage?

Because now if we move, we have to move everybody. Right? So it is even more locked in. So we have so many problems mm-hmm. That happen. And so all these issues, right, are something which make, you know, zero TL or zero copy, really something which is. Oh, almost fan as Yes. Today. 

**Eric:** Yep. Yep. It was interesting. We had, we had a guest on the show from, it's a company called Wild ai, and they do, they facilitate some data sharing between an e-commerce store, you know, like a digital e-commerce store, and then like a physical retail store where their products are sold.

So, you know, you can of course see that. There would be benefit in sharing, you know, having some crossover data there that benefits both parties. So they had really similar things to say about clean rooms. 'cause they thought, oh well we will just use clean rooms to facilitate this. But when they really started to dig into it, they found similar things to what you are saying, where it is that you can do some things with it, but it is not, you know, it, it doesn't quite live up to everything that the marketing.

Says it is. Mm-hmm. As far as this full seamless functionality where you can just dump data into a clean room and all this magic happens, it's actually, you know, there is actually a lot of work in order to figure out how to make it work well with both parties. And so they ended up actually building a.

You know, sort of a different architecture, but fascinating. Fascinating. The power of marketing. It's, 

**Ruben:** yeah, it's the power of marketing. And this is, and this gets even more critical, right? Because like, you know, if you really deep dive into how it really works. So you go to the Salesforce to Snowflake data sharing, right It to zero, copy Zero, zero caffeine, zero everything.

You know, it's like, you know, there is 0, 0, 0, nothing. Right? Zero calories. Right? It's very Buddhist, you know, just 

**Eric:** pure blank. 

**Ruben:** Yes, 

**Eric:** pure, yeah. 

**Ruben:** Pure data, right? Just pure data as a right place. And then you go into this and you say, well, in documentation you have a five minutes replication, like. So, I mean like if I really read zero copy and I really understanding as a human would five minute, you know, it's already there is a problem if it's if the same place in already five minute and replication line.

So if you have the word replication into the documentation of something, which is zero copy. Yeah. That's concerning. Right? That's concerning. Yeah. And so eventually, what is all of this, you know, like my take on what is Data Cloud? You know, data sharing with Snowflake or HubSpot, you know, snowflake data share.

This is just Salesforce Snowflake account? No, that's, that's the only thing is, you know, it just like they manage the entire ETL co, the ETL pipeline for you. You ju and they give you a Snowflake account, which you can actually just grow, grab the credentials, you can grab the credentials and just query it.

That's it. You transfer to it, you can transfer it, you can do anything. You can add custom field, right? You can just query it. Right. It's just, okay. It's just a dump of data, which is locked into your snowflake. Mm-hmm. Mm-hmm. And so that's so, so, so what that means also, it's a, for companies, you say, well, it's great, you know, instead of going to Fran, I can actually buy, you know, all of these tools.

Right? But it's a very big problem now because when you have plenty of pipelines with five Tran, et cetera, you have both unk the discounts. But when you actually have to buy. This small item from Salesforce, this small sync from HubSpot, this small sync from Zendesk, you have to actually contract with 10 or 15 different data sources.

I mean, I mean vendors to actually get data into your warehouse instead of just having one ETL, which is maintained by your data engineering team. So now you have a distribution of ownership of these pipelines, which to people who have nothing to do with pipelines because they're just working in Zendesk or just working in Salesforce.

And so. That's a very important, basically that's a very important strategy and cost problem as well, which also make zero tier. So zero tier is complex from a technical standpoint, if not saying almost impossible. It's complex from a strategy standpoint. And it's complex. It's complex also from cost and standpoint, right?

So actually all components which drive business in reality are just not present into this zero copy landscape. So yeah. So this is, yeah. It's almost not existing, basically. 

**Eric:** Yeah, it is a really unfortunate term because I can see a narrow use case. You know, when I say narrow, what I mean is there's a business team working in some tool and usually have an operations person and there is a use case for being able to write a, you know, a query in that tool and like pull in some data set or something.

Right. And actually I remember we had someone from Braze. On the show, Braze is a marketing tool. You can send customer communications, you know, and create, you know, customer journeys through Braze. And they, they launched a tool that had, that allowed people to write SQL queries and you could, you know, sort of, you know, pull data in.

And he thought, you know, power users will love this, but like, adoption was way more than he thought. And like a ton of people use it, right? And so there is this interesting use case there where it's like, okay. You need some specific thing. Your data team has probably materialized a couple of views that have some things, and you know, some valuable data fields, just pull 'em into your tool.

Right? I mean, that's a, that's actually a totally valid use case. But calling it zero copy deal is really misleading. 'cause that's not actually the value that it provides, or even really a good description of what's actually happening, right? You're just querying data from a very high context individual system.

Right. So it is unfortunate. 

**Ruben:** Absolutely. And I, I see though a value in zero a TL and a rigid point. I mean, which is not legit, you know, really. Per se, but at least it can be legit from a business perspective that let's say for example, say you have a system like say an ERP with a very complex data structure, a complex data format, you know, which is quite hard to actually expose over APIs or, you know, like the vendor just doesn't do it because of strategy like SAP, right?

So, you know, say it's very hard to get data out of SAP for no real apparent reason, just because I don't want you to get out of the ecosystem. And so maybe like, you know, for vendors like this. Selling this zero. I mean, I mean, data share, basically data share. Data share can be valuable because they can expose data, which you cannot get access via APIs independently, right?

Mm-hmm. You need to get access to your own data in some way, and it's not possible to make it access APIs so that maybe because of scale, because of complexity, because of data types, you know, this kind of. These kind of things, you know, could make sense, but it's because of technical or business limitation mm-hmm.

That the business has. And this is where data share makes sense. But you know, like data sharing compared, you know, for HubSpot or for Salesforce doesn't really make sense because you know, the APIs, you know, still enables sort of real time thing. And so that's why, you know, like there is no real need for this, you know, so at least it's, you'd have to really introduce.

Hard limitation on the API, so at least it would be the only one. But this is critical monopoly, which would be a very big scandal. 

**Eric:** Right, right. We're gonna take a quick break from the episode to talk about our sponsor Rudder Stack. Now, I could say a bunch of nice things as if I found a fancy new tool, but John has been implementing Rudder Stack for over half a decade.

John, you work with customer event data every day and you know how hard it can be. To make sure that data is clean and then to stream it everywhere it needs to go. 

**John:** Yeah. Eric, as you know, customer data can get messy, and if you've ever seen a tag manager, you know how messy it can get. So Rudders Stack has really been one of my team's secret weapons.

We can collect and standardize data from anywhere, web, mobile, even server side, and then send it to our downstream tools. Now 

**Eric:** rumor has it that you have implemented the longest running production instance of Rudders Stack at six years in going, 

**John:** yes, I can confirm that. And one of the reasons we picked Rudders Stack was that it does not store the data and we can livestream data to our downstream tools.

**Eric:** One of the things about the implementation that has been so common over all the years, and with so many Rudders Stack customers, is that it wasn't a wholesale replacement of your stack. It fit right into your existing tool set. 

**John:** Yeah, and even with technical tools, Eric, things like Kafka or Pub Sub, but you don't have to have all that complicated customer data infrastructure.

**Eric:** Well, if you need to stream clean customer data to your entire stack, including your data infrastructure tools, head over to rudder stack.com to learn more. Okay, well let's, that was great. That was, I loved digging into the. To the zero copy ETL stuff, zero ETL. It's just gonna be zero at some point. Yeah.

Have you implemented ze? You know, talk about two-way sync, and let me frame this a little bit, because there's a very common loop that has been reliable for a really long time and actually sort of pre-existed the modern data stack, right? Because people did it with, you know, whatever. They would write pipelines in Python or whatever, you know, if you were completely hand rolling it, but.

Let's just, we'll frame it in the terms of the modern data stack. Okay, so I have Salesforce, I'm on a data team, right? I have sale, like my, my, this, you know, the go to market team uses Salesforce for all the business stuff, right? It's where they track leads and campaigns and opportunities and everything. I need to combine that data with other data.

You know, some model I need to, whatever, right? Enrich it. So I use five tran, I pull the data into some data source, snowflake, Databricks, et cetera. I model the data. I'm using DBT or some transformation layer, you know, to enrich the data point. Do whatever transformations I need to run and then I reverse ETL it back into Salesforce.

Right? And then of course that gets pulled in five train, you know, five training and that's the loop. Right? And that's been a very reliable loop for a long time. Again, there are sort of tools to do that now, but again, it's been going on for years. What is the problem with that? 

**Ruben:** So that's a very interesting question.

But then you say, well you can build, you know, if there is no problem, you can build two ways, sync, you know, manually. Right. And as we were saying in the beginning of the podcast, you know, there is this, you know, if was an mass to maintain. So the problem with two ways sync is that. Tool, I think is extremely hard problem to actually get because of the limitation of current tools, right?

So for example, I was mentioning, you know, okay, so if you modify your record, you know, in Salesforce, it would tell you that record change, but doesn't tell you which field change. So now if you, what do you send to your HubSpot or NetSuite? You override the entire record. So e every time that you have a, an, you know, if you overread the email even with the same value, you know, it might, even though it might look the same, you might have a rule, which every time you update this field, you know, send a welcome email.

So now every time that you know, you update something in the CRM with even like something, uh, completely unrelated field, like first name or last name, you would actually send a welcoming email because it overrides an entire and you lose data. And so, so if it's just one way, but in, in 

**Eric:** the loop of like.

Salesforce, ETL, transformation. Reverse ETL, Salesforce, ETL, transformation. Reverse ETL. I mean, that's not really two async, but you kind of handle all of the nasty stuff in the transformations, right? I mean, that's kind of where, that's where you like most of the work happens. And is that like. I mean, ultimately those things get crazy.

Is that like the big challenge with that and like why the value proposition of two-way sync is attractive or is that loop not suited? Well, for like, for specific use cases. For example, because I think that people use the loop for everything, right? I mean, it's kind of the, it's the go-to for any, I get this is a, an a, probably a dramatic oversimplification, right?

It's like analytics ops, you know, operational data, whatever. It's just throw it into the loop and we'll figure it out in the transformation layer, right? Yeah. Which gets complicated and expensive, I know is one issue, but walk us through the other issues. 

**Ruben:** Absolutely. So I mean like now we're talking about one pipeline, right?

Maybe the Salesforce contact to Snowflake. You transform DBT, you put this into another table, which is a staging, and then you have like an ET tl, which is scheduled. Mm-hmm. Hopefully coordinated. But you know, is orchestration is still like a piece of problem. And actually we would back query actually.

Yeah. And send it to, you know, query from Snowflake and send it back to Salesforce. So here is the reversal vendor. They have a data storage in between, which actually compares what you send as a query. Yep. So 

**Eric:** they're running the diff Yep. 

**Ruben:** Is, is they running the diff and then like the difference actually shipped, sent back to Salesforce.

So this is all the fix the problem, but, so this means that you have one et l vendor, one reverse TL vendor. You have at least two tables in your, in your house. 

**Eric:** I mean that is the Yeah, I mean for at least two, you know, for a baby startup company. Yeah. Very. 200 maybe. 

**Ruben:** Yeah. At these two tables and this annual your DBT engine, right?

So that's cool. And now you only talk about contexts because companies is another one. And if you need to add contacts and companies and associate them, you need to also make sure the companies feedback first after, you know, I mean before the contacts because the contacts launch companies. And so, but like if you want to associate a contact in a company, you need to have the Salesforce.

IDs in Snowflake, so you can send, you know, create the record in Snowflake in Salesforce. So it means that, you know, you need to first do the first loop of companies, get the IDs back for the companies you created into Snowflake. And only then you can create, you can start with the context, but you have this kind of managed fields.

We need, we need some feedback because it's say you first have to create a co. So. First quarter the company into, from Snowflake to Salesforce gets the ID back into Snowflake. Use that ID to create a contact and get the contact back because then you need to create opportunities or something like this.

And so, so all of this orchestration now gets you Yep. Tables and tables, et cetera. So this, the promise of having a simpler architecture is wrong. And what this means, concrete forbid, because, you know, complex tech is not a problem. Yeah. But heavy maintenance, that's. Challenge, and this is why you know the loop is not working and this is not even real time.

So this is only for analytics use cases where you know you need to ship some sort of aggregated metrics once a day. Yeah, some stuff access. So it's a big deal. And one more vendor. And all of this organization you have to do. Just for shipping some metrics back. Yep. You know, so don't tell me this is easy, right?

This is pretty complex. And, and now, and this the other 

**Eric:** thing, sorry to interrupt, but the other thing now that you're talking through that is really interesting about it is that I said earlier, we'll just fix everything in the transformation layer. But in reality actually, for anyone who's built these systems inside of companies, what actually happens and is a very pernicious problem is that the logic lives in different places, right?

So you may have. Logic in Salesforce that ha, that runs on load super common, right? I load a bunch of data, I run a bunch of Ajax to do some O operation to apply some business logic, right? Yes. You may have logic that runs on the ETL pipeline on ingest into snowflake, and then you also may have logic that runs in the individual reverse ETL jobs that are coming out of it, right?

And so what's. The thing about that is you don't really have a single source of truth. I mean, maybe you have one giant table that sort of represents it and then you materialize. Things on top of that, but it is actually very difficult to ensure that all of the logic does actually live in the transformation layer in the data store.

That is pretty rare actually, because different teams will, you know, whatever, that you set up a different use case, oh, I need this data for this thing. Okay, well, who's gonna go in and update the DBT model and check all the dependencies and all that sort of stuff. It's like, well, we don't really have time to do that.

It's like, okay, well we'll just do it in the reverse CTL pipeline, or we'll just write like something and. You know, in Salesforce, right? And so then your business logic starts to get spread all over the place. 

**Ruben:** Absolutely And so ba basically by grouping, you know, this ETL and TL vendor and putting that in real time, actually you decrease basically the number of tables by from hundreds to just one.

You know, 'cause it's the same table that you read and write data from. You also simplify all of these, you know, complex transformation layers, which now all sit within your DBT or coalesce transformations. You know, coalesce is a different, is is another dbt. Mm-hmm. Sort of, you know, competitor. And very popular as well with some no-code features.

And so, so what I really see that, you know, as a architecture get complete completely simplified by this, you know, having like by having loops, you actually end up just having by a bidirectional arrow. And a bidirectional arrow is not the same as two arrows in opposite directions, right? Because these's two tools that don't talk to each other and also what people don't think is that.

If you have a conflict, you know, a data conflict which happen, you know, same data at the same time or et cetera, if you are badly orchestrated, you know, like you're just gonna swap values and actually some, you know, your data will just not lose same anymore. It is gonna revert values. You're gonna swap values.

It's gonna be really complex to maintain. And now the CMO walks to you and say, why, you know, we texted this customer on a different segment. We lost the deal. And say, well, because actually there was a technical, we don't care about the technical issues. Like, yep, you have to make this pipeline work. So if you work, if your position is at stake, you know, you would not use this kind of tools.

And that's where, you know, like the robust tooling like stacking, which really works scale because scale also like, is a very different impact, right? It makes like it's gonna take age impact, it's gonna take ages, you know, just to ship, you know, to make the pipeline run. And if it takes four hours to run from HubSpot to.

To snowflake and four hours from Snowflake to to hotspot. It just means that, you know, it takes eight hours just to run a pipeline and when you grow too much, it becomes impossible. Right? Yeah, yeah. 'cause it makes more than 24 hours. So that's where really the challenge is also. So actually you have the problem of loops, the data types.

You have the problem for authentication, managing two different vendors with potentially two different people in the data team, which are responsible for each tool. You know, like it's really an exposure of leadership to bad decisions. So, you know, people are not really responsible for choosing bad toolings.

And we see this like, you know, so the industry is filled up with bad tools. Like, honestly, like it's a lot of tools are crap, but like leadership is actually responsible for having bad business results. And this is just digging your hall by having the wrong tooling. So clearly, like the IT investment is actually an IT investment tool.

Your own leadership. So as a data leader or like even as a CEO or CFO, investing in the right tooling is actually like ensuring your business performance will be driven by the right data at the right, you know, pace, right? So actually, like you, your company will not be, you know, underwater with, you know, simple, you know, you know normal growth.

**Eric:** So let's walk through your use case. 'cause I agree that, I mean, the loop has been a reliable, it's been a reliable architecture for analytical use cases and will continue to be right? I mean, yes, it's, it's actually wonderful in many ways for that, you know, and then reverse CTL sort of adds like this sort of slight operational benefit to it for like analytical type stuff, right?

Where you need to get some data point into some tool or whatever. So, I mean, it's not gonna go anywhere, but I think we should talk about the operational use cases in like, in how you do two way sync. And so what I'd love to, what I'd love to do is like, let's pick two examples. So one maybe easier and then one harder.

So for the easy one, let's talk about, let's talk about the one that you know, I made the mistake on, which is HubSpot and Salesforce years ago. So let's just say I have, you know, Salesforce, I have HubSpot, I have Snowflake, and my use case is, I'll just make up a use case. You can tell me if it, you can tell me how close I am to what your customer's experience.

But I have this use case where we're doing lead intake on some website or app, and those leads are coming into. HubSpot where they get marketed to, they're sending emails, all that sort of stuff, right? And then, and so the marketing team or the demand generation team is using HubSpot to do all of that.

And then some subset of that, you know, of those need to make it into Salesforce, or let's say all of those need to make it into Salesforce, but the sales team or. Whatever, you know, or the support team or whoever really only is gonna focus on some subset of those based on some characteristics, you know, whatever those specific fields are, et cetera.

Okay. So I could theoretically run the loop, but the problem is, let's say I'm a pretty big company. I'm running it, you know the, I have these huge bash sizes daily. Is it quick enough? Because if one of those leads has some sort of characteristics, or let's even say like. Perform some specific action.

There's a really particular form that they fill out or app that they sign up for or something like that, right? And so those things, those actually, let's say the customer support team, they have an SLA of 10 minutes in responding to some action, right? But HubSpot's the point of intake. So the loop's not gonna work for me because that's actually not even analytical, it's purely just, you know, this needs to show up in the Salesforce support hub.

And the, they have a 10 minute SLA. Okay. Is that, am I thinking correctly about the challenge that I would have as a data team of like, okay, well how do I actually make that work? Is that 

**Ruben:** yes, this is actually a correct challenge? And I would even say like even clearly, right? It's like, okay, so now you make a marketing campaign, you know, on HubSpot and this person immediately logs in, you know, respond to the email.

It's an absolutely, you know, sweet spot. You, this person signs up and actually now goes into Salesforce. If your pipeline didn't run yet. You will in, it'll be insert in Salesforce by the signup as well as for from the HubSpot to Salesforce, you know, pipeline. So basically now you could have a duplicate.

So you have to make your, your, make sure that your pipelines also robust to absurd and not only update, right? And how do you do asserts while you need to query data first and write data second, right? So actually you need to first. So you need to first, so you need to first basically get the data, basically get the data from HubSpot to to Salesforce iner.

Right. Which is a very big, I mean, inqueries data to actually know if the record is actually present into the Salesforce. And then if it's present update or then insert, right? So this two API calls. Mm-hmm. And so at scale, you know, this is extremely hard. And doing this sort of on, on batch batches, it's also complicated.

It's, it is very complex. So now you have to make, let's say most pipelines do. Do query records like one by one. Yep. Which is a very pragmatic, because if you have batches of 10,000 or a hundred thousand contacts, which is the size of a marketing campaign, you're gonna be, you are actually gonna be like over, basically over consuming your API direct limits for the entire week.

On Salesforce. Yep. And hotpot is also limited, right? Per, per second. So it's gonna be, it's not gonna work. Now what is the, so this is challenging internal setup. It's complex setup. And it's complex. It's complex. Also maintenance. Well with now with two wising, basically stacking tells you, okay, you. Create a two-way thing between Salesforce and Snowflake.

You create a two-way thing between HubSpot and Snowflake, right? So now you have a place set. So now you just have two bidirectional arrows, right? So now it's very just, it's not even a triangle. You have a, in sales, in hub, in Snowflake, you have the, all the contacts companies, extra, all the tables of Salesforce, and also table of HubSpot whenever you know, because taxing is real time.

It is very important because Paris, so that wasn't real time. Right? So it's even Oh yeah. It would run on scheduled 

**Eric:** jobs. Yep. 

**Ruben:** Exactly. So, so because taxing is real time, let's say a new contact is created on HubSpot. Yep. As long as it's created, taxing will ship it, right? It's subsecond or maybe one second, two seconds Latency.

It's gonna go directly into your Snowflake stacking. We also have a feature called triggers, which actually enable you to say, when you observe a certain data event to be transferred. Also triggers this workflow or this database query. So you say, when a contact is created or updated, run into Snowflake from Hublot to Snowflake and also create this query, which tells you, because also stacking also runs a ding.

So it tells you takes, if email was updated, you know, and ID is a field of change, actually. It means it's a new record. Write this record. Into the Salesforce stable into my snowflake. So now you made one simple SQL query because the entire Salesforce data is also real time into a sync. It's fresh. So now you can do an absurd right and be pretty confident that this will not lead to duplicate.

So with a simple, absurd operation, you actually know exact, and you can actually observe on many fields, which you cannot do on Salesforce because some says on Salesforce you might not even be able to query based on a given field. Right, right. In Snowflake, you can you 

**Eric:** filter. As well. So for like, I totally understand that example where you offload.

'cause that's actually a very, that's a pretty efficient, that's a super simple query, right? I mean that's about as simple as they come, right? 

**Ruben:** Absurd based on email or ID or whatever. Yeah. Find your company 

**Eric:** super easy, but could you also filter, right? So let's say I wanna modify the filter. Going back to the use case.

I wanna modify the filter so that I can say. Even, uh, you know, even if this exists in Salesforce, I don't wanna send it because it doesn't meet some sort of qualification, right? Or, you know, I want to send it with a flat, whatever it is, whatever that sort of filtering is, right? So that I can kind of determine.

Like when what? When different types of things get sent. 

**Ruben:** Absolutely. You can also make this, this filter and you say, for example, say when a contact is created and the segment is X, Y, and Z, send it to Salesforce. Or maybe it's a very large company, and say maybe send it to the Salesforce. Of this company for, you know, this sub, this child company, which serves the large company's network.

And then I say, if it's a smaller company, send it to the Salesforce of this other company, you know, subsidiary, which serves ME Oh, like literally 

**Eric:** a separate Salesforce instance? 

**Ruben:** Exactly. Because now you can synchronize, you know, you know know. Oh, oh, 

**Eric:** right. So even if he had single marketing intake, you could send it to.

Oh, interesting. Okay. Yeah, I was thinking about it in way too of a way in a far too linear way. Wow. 

**Ruben:** Exactly. It's, and this is just a simple SQL query. So now what we did, there is no table transformation. Anything there is just like. A query, which is triggered at the right moment to maintain this real time filling across your system.

And a simple SQL query, or even a DBT transformation, which can run, right. It's also, you can also do batch know once an hour, once a day as your current use case. But now you know this is really real time and now you know when you insert your record. So now in the, say, a record has been created in a hub.

It has been sync to Snowflake, stacky add you. You created a trigger which says, okay, when a contact having these properties, you know is created and emails a filter changed, then also create it into Salesforce. So into the Salesforce table in in Snowflake. So now we run an appert, which prevents the use, the emergence of Duplicate into Snowflake and with two-way sync.

I just want to just send this, I mean, because of Two-Way Sync, this data is gonna be inserted into Salesforce. 

**Eric:** Yep. 

**Ruben:** And so now you just created a contact in HubSpot and you have it in Salesforce and it passed into your Snowflake, so it's also available to all of your other systems and analytics, you know, and dashboards to actually be observed.

So you have real time analytics, operational purposes, because now you know you can literally, because this takes maybe two to three seconds because every query time and all this, maybe it takes two seconds or three seconds at LA at maximum. So three seconds later. You created a contact in HubSpot and you have it in Salesforce and you can trigger like a welcome sequence or whatever.

That's really operational, and this entire pipeline has been built by one second query, one trigger with two, two listing things, and you're handling 

**Eric:** all the API calls. 

**Ruben:** Everything and ev even batching. And so it's in taxing case, even works in a very clever manner, is that if you go into a, into a snowflake and you modify, let's say 1 million records at a time, taxing will, because Salesforce has a different rate limiting and hub for two stacking will just, you know.

Batch all these records as fast as possible, right? Within your allowed a period limits, which you can also configure and send this data. So it might take a bit more time, but you know, for example, for Salesforce, we go up to 1 million records per minute, you know, alpha million records per minute on HubSpot, you know, so it can have very fast and so, yeah, yeah, all of this, you know, this architecture and therefore, so maintenance is simplified with a single vendor.

So one deal, which has just triggers SQL queries and DB transformations. Nothing else, you know? 

**Eric:** Okay. So let's, I said we, we will do easy mode and then let's do something harder. And maybe this isn't, maybe this isn't harder, but I'll try to, this is the example that came to mind. Okay. Let's move from Salesforce to NetSuite.

ERP. Any ERP, but whatever. Let's just say NetSuite. NetSuite, 

**Ruben:** yeah. 

**Eric:** Things get more complicated when you think about operational use cases where you have a billing department who's using the ERP to, you know, send invoices, you know, manage payments and receivables, right? And so, but in Salesforce, let's say that this, you know, the sales person or the customer support person is working with an individual, right?

You know, this contact and they're the complication. You know, it can get crazy, but the complication is a lot of times you have to make multiple hops to go from the contact in Salesforce to, to a unique invoice id, you know, or purchase order number. Right? Because you know, you have the contact and then you know, they have a company in Salesforce and it's not always a one-to-one match of what they're called in the different systems.

Right? Because in NetSuite it's, you know. Acme, LLC, and in Salesforce it's Acme, whatever, right? And so those two names don't match up and it, it can create problems. So I'm breezing over the complications. 'cause it, you know, that's just a simple example, right? Yes. But here we're doing two async between two systems where there are some discrepancies in the data, right?

Like at least with HubSpot with a lead. You know, a person in HubSpot has an email address and a person in HubSpot has. Or a person in Salesforce has an email address, and so you can fairly reliably use that key. You know, there's some complications there, but there are keys that you can use. Right? But if you have to make a hop for that operational use case where there are like different keys and then like a physical, a physical asset, like an invoice, you know, related to a company, how would you handle a situation like that?

Because there we get into some really interesting data modeling challenges and some data discrepancies. 

**Ruben:** Absolutely. So basically like if you have several hops, say for example, say you have to go, you have to query first you have a email in Salesforce, but also in in NetSuite. So you have to query the contact by email, which might not even be possible.

Then you have to get right, that might not be possible. 

**Eric:** So then you have 

**Ruben:** to 

**Eric:** do company name 

**Ruben:** and then. Exactly. Exactly. So then you have to get the contact, then you have to get the company, then you have to get the opportunities and you have to get like, so list of all the invoices for opportunities and then get the id all that invoice to actually get about payment.

So all of these are very complex workflow. So if you are in the legal world, you have to get maybe like. A workflow with 15 steps and merges and it's brutal. Yeah, it's very bad. And so what happens is that now if you have your entire data, real time fresh into your snowflake, you can craft your SQL query to actually get very powerful, you know?

So I feel like you have, in your workflow, you would have one snowflake query. Then you have a check to check if it returns a result because maybe like, you know, like you are at a very. Millisecond point in time where, you know, data wasn't available or something. So make a check. Right. And then like once, once you have aggregated all the data, so with a single query, no, you're not overloading your snowflake, your NetSuite with many API calls.

Right? You're just querying Snowflake, which is much more, you know, yep. Load, load, load able, you know, so to speak. Then you have your insight, you take your data and you insert that into the right. Salesforce or HubSpot or, or NetSuite table, and that creates an update into your NetSuite. So, so, so two ways think really makes it that your data, your tables into your snowflake or into your Postgres even are really a real time.

You know, read and write interface to your enterprise system there. It's an equivalent to using an API. Basically, you're just using an API via sql. That's the only thing you are doing. That's a very easy way to understand it. So actually every time you, yeah, and insert is gonna make, actually, you're making an API call, but actually this, API call can be 1 million rows.

You know this, you know, this read can be filtered with any kind of business and custom logic that you have. It's really extremely, it's us. It's an API, which is us. Flexible as SQL and as well documented as sql, and you can see your data. Directly. Yeah. Yeah. Right. 

**Eric:** No, I think that is the, yeah, Brooks is telling us we're at the buzzer here, but what a great, I mean, I think that's the paradigm shift and it, you know, it took me a minute to get there, maybe because I'm a little slow, which is why I fell for the marketing on, you know, Salesforce and HubSpot Sync.

But I think that's actually the real magic is that most of, most integration challenges that you try to solve, you're doing it by trying to stitch together. There's basically two ways You try to stitch together APIs or you run the loop, which requires, you know, which isn't really great for operational use cases, especially ones that are time sensitive, right?

Yes. And then your logic has to grow as part of like a gigantic Frankenstein model that gets crazier and crazier over time. Right? And so it's really interesting because. I would almost describe Stacky as inverting the problem, right? Where it's like you literally don't think about APIs, you just write a SQL query for the sync, for the use case that you wanna solve.

It's super fast because it's a really low, it's not a heavy query, and then you don't even worry about the APIs. It just happens, right? You're just modifying. You're adding these queries over time and modifying the logic is isolated, so it's like very easy for anyone to reason about, you know, what's going on with the, like Salesforce contact to invoice, pass due, whatever, you know, use case super goal.

Okay. I got, I'm gonna squeeze in one, oh, sorry, go ahead. 

**Ruben:** Yeah, I just think like it's, it's a very visible logic, which is easy to build and to make it and to debug, right? And especially, it's a very declarative way to operate, right? API is very even driven. Do that. And then SQL is very declarative, right?

It's like, you know, yes. Just of everything you, every data you can see, you know, from a top level perspective, just like pump everything you have, you need. Yeah. And get it back, you know, and this is very declarative and which really enables you to be much more robust. Pipelines. So that's where we stacking, really puts this.

Declarative and SQL way to operate on top of what traditional, even driven dirty APIs. Right? Just con but also like, just from a simplification perspective, just try to connect to the net API and in a week we're gonna be still there and we're gonna say, okay, well maybe it's, it's useful, you know, to have something which manages me.

That is, you know, that's 

**Eric:** a good thing. That my friend is a great sales pitch. That's, 

**Ruben:** yeah, just even just not talking about like the integration piece, right? Just like the authentication, right? Oh yeah. That's brutal documentation. You know, like, I mean, like I know a few survivors back in the nineties, which actually understood how the API worked, you know?

So it's a bit like the statement, you know? 

**Eric:** Yeah, yeah. Okay. One, one more question here. Can you give our listeners a sneak peek? What feature are you working on that you're most excited about? 

**Ruben:** So. Right now, basically at Stacks Inc. We are making, basically, we're also launching a workflow automation tooling, which actually plugs in.

Into the sinks. So for example, say you have a two-way sync, you know, some data events are transferred in real time. You can trigger, actually, you can say once when you see this transferring, you know, when you see a new contact, tell me, you know, and this tell me can be anything between. Uh, sequence of debit transformations can be a workflow.

Automation can be a slack notification to your sales team. Can be anything. You know, and this is really something, let say a contact change status, boom, notification to the relevant sales rep and all of this kinda enrichment. I was holding a webinar last week about like, how can you actually say every time there is a new contact created, go to LinkedIn.

Get real time live data about the entire LinkedIn profile and make a summary and fill up all of this, you know, database fields, which are actually like the CRM fields. And now every time I would just type an email into my CRM, I would see all of this fields populating immediately. Instantly. And so this is really with live LinkedIn data, and this is all these enrichment use cases are exactly what we're building.

So really this upgrade into enterprise scale mode of your operations, this is what Stacks Sync actually does. And Stacks Sync now has become also a leader into the NetSuite to a sync. So if you have any struggle into your team, which has NetSuite, Shopify, Zendesk Hub, Fort Salesforce involved. You know, happy to chat and actually help you architect your best use case in your precise, you know, business scenario.

**Eric:** Cool. Ruben, this has been awesome. I really appreciate the time. Love that we dug in. Love that we demystified zero, whatever it is. Zero something, I guess zero something is a, is an oxymoron, but this has been great. Congrats on all the success and, and we hope you have much more in the future. 

**Ruben:** Thank you so much guys.

Thank you so much for hosting. 

**Eric:** The Data Stack Show is brought to you by Rudder Stack. Learn more@rudderstack.com.

