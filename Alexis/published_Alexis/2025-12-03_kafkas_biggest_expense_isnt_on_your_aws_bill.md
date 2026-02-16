---
name: 2025-12-03_kafkas_biggest_expense_isnt_on_your_aws_bill
description: "Alexis Favre published post - Kafka's biggest expense isn't on your AWS bill."
domain: business
node_type: linkedin-post
status: published
last_updated: 2025-12-03
published_date: 2025-12-03
tags:
  - integration
  - data-sync
  - enterprise-tech
  - teacher
topics:
  - "Integration/Data"
  - "Teacher Hook"
related_concepts:
  - "[[alexis_personality_v01]]"
link: https://www.linkedin.com/posts/favre-alexis_kafkas-biggest-expense-isnt-on-your-aws-activity-7402076725439778816-Y_3M?utm_source=combined_share_message&utm_medium=member_desktop&rcm=ACoAADq6p-kBcdJAYJMzAN8VuZZFUmNBfOSttAI
image: images/2025-12-03_kafkas_biggest_expense_isnt_on_your_aws_bill.jpg
image_source: https://media.licdn.com/dms/image/v2/D4E22AQE0GYJ3xUxJjg/feedshare-shrink_1280/B4EZrl1jgoIoA4-/0/1764792614063?e=1772668800&v=beta&t=nwxLvzX-hZn_mh-svikmHHDEHaAEAGqdz1GB9pvAMoY
---

<!-- Kallaway Analysis -->
<!-- Rank: #42 | Engagement: 16 (Likes: 16, Comments: 0, Shares: 0) -->
<!-- Hook Type: Teacher | Topic: Integration/Data | Angle: Contrarian/Challenge | Structure: Listicle/Breakdown -->
<!-- Original Alexis post: True -->

Kafka's biggest expense isn't on your AWS bill.
It's on your org chart.

I've seen teams spin up "free" open-source Kafka expecting to save money.
But here's what the TCO actually looks like:
$350K - $1.2M+ per year.
And most of it isn't infrastructure.

Let me break it down:

Networking:
Networking eats 50-90% of your Kafka infrastructure costs.
Why? Cross-AZ traffic.

67% of producer writes hit remote zones
67% of consumer reads hit remote zones
Every replica syncs across zones

At 100/300 MB/s ingress/egress?
That's ~$9,330/month in networking alone.
Just moving bytes.

Humans
Minimum viable Kafka team: 2 engineers.
Fully-loaded cost: $350K-$392K/year.
But that's just to keep the lights on.
At Lyft-scale? 7-10 engineers.
That's $980K-$1.4M in salaries. Before benefits.

Ecosystem
Kafka alone isn't production-ready. You'll need:

Schema Registry (90%+ adoption)
Kafka Connect clusters (90%+ adoption)
GUI monitoring (90%+ adoption)
Stream processing (80-90%)
Geo-replication (80-90%)

Building this in-house?
20,000+ engineering hours.
6-12 months before you ship anything useful.

Nobody budgets for these:
- Over-provisioning (clusters run at 20-25% CPU utilization)
- Downtime costs ($87K/year at just 99% uptime)
- Load balancers, NAT gateways, K8s overhead (+25% to total cost)
- The one engineer who actually understands your configs

Before you kubectl apply that Helm chart:
1/ Calculate the 3-year TCO (not just infra. Include headcount)
2/ Price out managed alternatives honestly
3/ Ask: "Is Kafka ops our core competency?"

Open-source is free.
Operating it at scale is not.

<!-- STATUS VALUES: draft | review | published -->
