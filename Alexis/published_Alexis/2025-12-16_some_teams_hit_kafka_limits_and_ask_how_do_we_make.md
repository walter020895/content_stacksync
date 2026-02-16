---
name: 2025-12-16_some_teams_hit_kafka_limits_and_ask_how_do_we_make
description: "Alexis Favre published post - Some teams hit Kafka limits and ask: “How do we make Kafka faster?”"
domain: business
node_type: linkedin-post
status: published
last_updated: 2025-12-16
published_date: 2025-12-16
tags:
  - ai
  - technology
  - innovation
  - teacher
topics:
  - "AI/Tech"
  - "Teacher Hook"
related_concepts:
  - "[[alexis_personality_v01]]"
link: https://www.linkedin.com/posts/favre-alexis_some-teams-hit-kafka-limits-and-ask-how-activity-7406536657648386049-PXDu?utm_source=combined_share_message&utm_medium=member_desktop&rcm=ACoAADq6p-kBcdJAYJMzAN8VuZZFUmNBfOSttAI
image: images/2025-12-16_some_teams_hit_kafka_limits_and_ask_how_do_we_make.jpg
image_source: https://media.licdn.com/dms/image/v2/D4E22AQEZHVzp652a_g/feedshare-shrink_1280/B4EZslN0trIQAs-/0/1765855940891?e=1772668800&v=beta&t=qvej8u8MLwjUHSt69mQ7FCXa1rV03R9KRyax48xLEbo
---

<!-- Kallaway Analysis -->
<!-- Rank: #24 | Engagement: 28 (Likes: 27, Comments: 0, Shares: 1) -->
<!-- Hook Type: Teacher | Topic: AI/Tech | Angle: Origin Story/Narrative | Structure: Story → Lesson -->
<!-- Original Alexis post: True -->

Some teams hit Kafka limits and ask: “How do we make Kafka faster?”
At OpenAI scale, the question was different:

“How do we make Kafka less central?”

Kafka stopped being the front door

Producers no longer talked to brokers directly
A proxy layer absorbed retries, spikes, and bad client behavior
Kafka became the durable backbone and not the place where chaos lands

The result (publicly reported):

 – ~20× higher throughput
 – Five-nines availability
 – Regions that fail without taking each other down

Why it worked:

 – Brokers stopped handling unbounded client behavior
 – Backpressure was intentional instead of emergent
 – Failure handling moved out of the core

The lesson:
If something is both critical and central, it will cap your scale.

Don’t just scale the component.
Move the blast radius.

And be honest about the cost: more moving parts, new failure modes, and more operational work.

That’s what real scale looks like.

<!-- STATUS VALUES: draft | review | published -->
