---
name: 2026-02-09_in_2014_a_heroku_team_proved_salesforce_data_belon
description: "Alexis Favre published post - In 2014, a Heroku team proved Salesforce data belongs in a Postgres table. Not b"
domain: business
node_type: linkedin-post
status: published
last_updated: 2026-02-09
published_date: 2026-02-09
tags:
  - engineering
  - technical
  - data-engineering
  - teacher
topics:
  - "Engineering/Technical"
  - "Teacher Hook"
related_concepts:
  - "[[alexis_personality_v01]]"
  - "[[Heroku_Connect_Alexis]]"
link: https://www.linkedin.com/posts/favre-alexis_in-2014-a-heroku-team-proved-salesforce-activity-7426753979209961473-BUFB?utm_source=combined_share_message&utm_medium=member_desktop&rcm=ACoAAB7hd2wBBUaoPHH28mEI3rBDqBuRHVW9qnU
image: https://media.licdn.com/dms/image/v2/D5622AQFhaGIKc8AFvQ/feedshare-shrink_20/B56ZxEhY0WKcAQ-/0/1770676129334?e=1772668800&v=beta&t=nbCd9UNrw1GysarftdQSooHZVxXfAPi_mHta-wf6Lj4
---

<!-- Kallaway Analysis -->
<!-- Rank: #27 | Engagement: 26 (Likes: 24, Comments: 2, Shares: 0) -->
<!-- Hook Type: Teacher | Topic: Engineering/Technical | Angle: Data/Numbers | Structure: Story → Lesson -->
<!-- Original Alexis post: True -->
<!-- Matched draft: Heroku_Connect_Alexis (/Users/TERABYTE10/Downloads/Stacksync/04_linkedin_content/Bangers/Heroku_Connect_Alexis.md) -->

In 2014, a Heroku team proved Salesforce data belongs in a Postgres table. Not behind an API.
45 lines of code became 4. The industry is still catching up to what they built.

"Normal" Salesforce integration looks like this: learn the REST API. Handle OAuth. Build pagination. Hit rate limits. Build retry logic. Parse nested JSON. Deploy. Maintain forever.

30-50% of engineering time goes to this.

The Heroku Connect team saw this problem clearly. They built something different: replicate Salesforce into Postgres. Query with SQL. Write with SQL. Forget the API exists.

The difference?
Complex join across three Salesforce objects via API: 45+ lines, three paginated requests. 

Same query in SQL against a synced table: 4 lines.

Zero rate limits. Zero token management. Sub-millisecond reads.

The insight was architectural: as long as CRM data lives behind an HTTP API, you can't query it freely. Rate limits throttle you. Latency punishes you.

Put that data in Postgres? Full SQL. Your ORM works. Your BI tools work. Your developer writes SELECT statements instead of learning SOQL.

That's the difference between building your product and maintaining someone else's API.

But last week, Salesforce ended new Heroku Enterprise sales. 
Heroku Connect included.

The product had problems: polling-based, expensive, locked to Heroku Postgres. But the team that built it understood something the rest of the industry is only now figuring out.

Database-first. SQL-first. API-invisible.
They were ahead of their time. They deserved more.

Every company building Salesforce-to-Postgres sync now builds on what that team started. Including us at Stacksync.

Respect for my fellow Herokais

<!-- STATUS VALUES: draft | review | published -->
