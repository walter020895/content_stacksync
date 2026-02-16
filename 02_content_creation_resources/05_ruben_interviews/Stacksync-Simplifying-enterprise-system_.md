# Stacksync-Simplifying-enterprise-system\_

**Intro:** Help support our coverage with a free account on privacy. The service that keeps you protected when shopping online, get $5 to try it now by using promo code Q ZZ two J. 

**Interviewer:** We have our next guest here. Hello. Hey. How are you doing? Doing good. Doing 

**Ruben:** good. Compared to yesterday. How are you doing now? Today, I mean, like today is like a lot more, uh, vivid as a stand.

So we have a lot of more, um, visitors. Okay. And very good audience. Very good. Very good traction. Well, 

**Interviewer:** that's good to hear. Uh, for those who haven't seen you before, go ahead and introduce yourself for me. 

**Ruben:** Hey, so my name is Ruben. I'm co-founder and CEO of Stacky. So what we provide is real time and to ayc between enterprise systems and databases and specifically CRMs and databases.

Um, so what we do is very simple. We connect your CRM, like Salesforce or HubSpot, okay. Uh, to your database and with to ayc. We turn your DB into a read and write interface, uh, to your CRM. So now engineers can. Manipulate and update data into the CRM without touching a single API call, which makes you 90% faster to integrate.

Okay. That's, 

**Interviewer:** that's cool. So in this case, your target customer, maybe your target customer's enterprise, but the people that you're targeting for usage is engineers who are trying to integrate with the CRM into their product or. Wherever a 

**Ruben:** Absolutely. Okay. So basically like the, the end user is an engineer.

Okay. Who has to, or a consultant or CRM consultant who has to integrate the CRM. Okay. So, so right now the workflow is very complex, have, have to use APIs, they have to use like different tools like MuleSoft, like, uh, work gto, like whatever. Whatever tools they're using, it costs a lot of money. It takes months to integrate and it's very complex.

Yes. And, and, and usually when you need to do an update on that workflow, you know, you have to go through the whole process again and stack sync, you know, like, doesn't make you feel like your integration is reinventing the wheel over and over again. Just make you, you know, like in two click with no code from a simple ui, you can synchronize all your CRM data with your, with your, uh, with your database, which is like any custom fields or custom object.

Very flexible. 

**Interviewer:** Wow. Okay. I'm a software engineer. Alright. I have done CRM integrations and they're awful. 

**Ruben:** Yeah. I mean, like engineers hate CM APIs. Mm-hmm. That's, that's exactly why we're saving the speed. Okay. You've taken the pain on yourself. Exactly. Exactly. 

**Interviewer:** But that's my job, so it's good. Okay. So what kind of, uh, implementations have you seen?

Like what kind of interesting. Places has this been used so 

**Ruben:** far? Absolutely. So, so today our customers, you know, like we, we have some customers who, who plan to do the same integration with six months budget. Like once a new, stacking the plan six weeks, and then in 10 days we got them like in production.

Okay. So it are completely mind blown. Um, so, so c integration basically like is, is uh, kind of various use cases, right? So we have this first use case of data activation. So in the database or data warehouse like Snowflake or BigQuery, you have a lot of customer insights. A lot of customer data. Yeah. But this data is not accessible by the business people, right?

Which actually take action and work daily on the CM. Okay, so then like the challenge is how do you ship metrics, customer metrics from, uh, the data warehouse to the CRM? Mm-hmm. Uh, and this is where stacking comes in because it enables you with simple SQL queries to, to, to, to compute metrics with your own business logic and ship it back to your CRM without API calls directly with your warehouse.

So now let's imagine that you can just manipulate a table within BigQuery or Snowflake, and that's gonna manipulate your CRM. That's the first use case without. 

**Interviewer:** Actually making alteration to the end result of the CRM? Exactly. Okay. Exactly, exactly. So nothing you can you do is likely to screw up what your sales team or your support team is doing in the CRM, but you can then use it as if it's your own data in your system to combine it with usage in an application or with hardware or whatever.

Your Absolutely. Your system is tracking data for a user that support and sales knows nothing about. Exactly. And you're essentially, it's bringing all the systems together so that sales can and support can see all that data from the other side. Absolutely. And probably vice versa. 

**Ruben:** Absolutely. So, so, so essentially, so essentially like, like Stack Sync is gonna connect, uh, your CM and your database, but like this is gonna be with SYC is gonna be a one-to-one data mapping.

So what you see in the CM is what you see in the database. And vice versa. Okay. Understand. So, so eventually if you ies, if you modify the database, it's gonna modify your CRM equally. So eventually, like you say, well, will it screw up? I mean, like it can, you can, it can, you can screw up the CM. Okay. I understand.

Uh, because like two way syn is a very powerful tool, but Stack Sync has a full suite of tools which enables you to protect that. For example, let's say if you, if you know that this specific workflow should not delete records, you can say I disable the, uh, delete record op uh, operation. Okay. So basically you have delete record protection on your, on your CRM.

So, so even if, let's say you are, you have antibody coming up in your c in your database and deleting all the records, uh, uh, basically it's not gonna impact your CRM. Okay? Gotcha. And, and, and you can protect against some sort of modification. That's the first thing. And then you have the second. The second tool that we can, that think is very, very powerful, that let's say in the databases are way, are way more flexible than CRMs.

Sure. Let's say here you have like a, a, a string. You can write anything 'cause you own it. Exactly, because you are on it and you, and, and you are, I don't, and you don't have restrictions. Let's say in CM you might have a unique constraint on emails because you can't have this, uh, two customers, two customer records with the same email.

Right. But on the database, you can. Mm-hmm. I mean, like, if you didn't put a constraint, if you didn't put a constraint in 

**Interviewer:** yourself. 

**Ruben:** And so, so basically, if you do so, taxing is gonna let you know that the CM did not accept, uh, let's say to create a record there. Okay? And it's gonna put it to you into an issue where you can, uh, either revert to issue, let's say you want to say, okay, this was an error.

I want to revert the data. Um, or you can like, uh, retry to sync. If, let's say you, you would activate the, you would activate that says a, a constraints rule on the email in the CRM. Then you just activate the rule. You try to sync and now it's gonna sync. So it's, you know, it's like you have a whole dashboard of, of tools which enables you to pinpoint and resolve issues with a point of a click and, and you, and you don't have to manually deep dive into, into both data sources to find what the issues are.

Okay. That's cool. So 

**Interviewer:** you get. You get sync logs, sync error logs altogether. Okay. That's important. You have a full monitoring of that. Okay. Very cool. So in our database, we discover that we don't have the email constraint. There's now two users in the database with the same email. Exactly. It tries to connect that over to the CRM.

The CRM goes, you can't do that. We already know that person. Absolutely. You get a, you get an exception report. Nope. The sync doesn't work. Exactly, and now not necessarily an engineer. Somebody can go in and say, yes, this is a bad record. We need to, we need to go deal with it in the database, or we need to put a constraint into the database.

This is a mistake in the database. Exactly. Design. Absolutely or no. This is a mistake in the CRM 

**Ruben:** setup. And you can just modify if, and you can just remove the cost in the crm. Okay. Or, or like if you, if you think, you know, this is you, you don't want to add cons into, into the database, but this is still an error and you want to delete that record because it second record, basically a duplicate for some reason, into, into your data pipeline.

Which, which, which happened here. Um, what you do is that you can just click reverse condition 

**Interviewer:** or whatever 

**Ruben:** exactly. You can just click delete and stacking is gonna go into your data, into database and delete the track that you created. By mistake, so and 

**Interviewer:** so it has, it has the ability to control both sides.

So somebody who's not necessarily an engineer can go in and say, ah, this is a mistake. This shouldn't have happened. Whoop. Exactly. So now you have, or this was a mistake, it shouldn't have happened. It's okay on this side. Exactly. Okay. Exactly, exactly. 

**Ruben:** Very cool. And, and this is, and this is, you know, so, so, so with no code we can give to business people like the.

The power to control a fully technical tool. Okay. Which was not a PO possibility. And this all in business terms, so you're assure there is a full understanding of what we're doing and so, so technically, so, so, so business people can use it, but mostly it's like no code for developers. Okay. Basically, this tool is mostly geared toward developers who still know what to do.

So basically the risk is very minimized because the stakeholders which are dealing with our platform are, are, are somehow technical. Okay. So what's the cost on something like this? The cost. So the cost is, is like, uh, uh, it's a pay as you go, uh, model, okay? So you only gonna pay for the monthly active row that you consume.

So let's say you have 10 million contacts into your CRM and only 1 million updated this month. Uh, you only gonna pay for, only gonna build for one, for 1 million records. And like the 9 million stale records will not count toward your monthly bill, which basically reduces like considerably your costs because essentially taxing is, is.

Enables you to manage your mutable data at scale. And, and, and why? And, and, and, and this is very important when you have a, let's say a customer relationship that you need to maintain over time into your CRM and therefore maintain data over time. Right. And when this, and, and when you have to maintain that over time, errors can happen everywhere.

**Interviewer:** Yeah. 

**Ruben:** Uh, so, so stacking here jumps in. It helps you to maintain your data consistency through like this entire, uh, time period. And therefore we don't want to penalize people to have a lot of mutable data over time. Yeah. That's what was pay ago. So this makes it very cheap, uh, for, for small players and affordable for large players.

And basically usually we reduce 90% of the cost compared to a consulting alternative or like other tools like Segment and, and other reverse TL tools as well. 

**Interviewer:** Okay. Very cool. And obviously. It sounds like this is already in the wild. 

**Ruben:** Absolutely. Absolutely. So it's already in production to many customers, like small and big.

Um, so anybody can go and trade out also with, uh, developer instances. Uh, it's for free for two weeks and like anytime like customer needs support, uh, we are here to help. Happy to help. 

**Interviewer:** Very cool. Well, obviously, uh, people are gonna wanna find out more about this. How can they get that information? 

**Ruben:** They can go to stacking cloud, so stacking.cloud or website and just sign up for free, uh, four, two weeks and try the product as much as they want.

**Interviewer:** Very cool. 

**Ruben:** Thank you so much. Thank you. Hey, have an amazing day. 

**Interviewer:** You too. Have a good rest of the show. Thank you.

The Tech podcast Network, CES 2024. Coverage is executive produced by Michelle Mendez. Technical directors are Kurt Corless and Adam Barker. Associate producers are Nancy Ertz, Clinton Milsap, Sergio Velazquez, and Terry Willingham, voiceover by Aaron Hurst. Our hosts are Marlo Anderson, Don Bain, Todd Cochran, Scott Ertz, and Christopher Jordan.

Studio and equipment are provided by Plug Hits Productions. This has been a tech podcast network broadcast, copyright 2024.

