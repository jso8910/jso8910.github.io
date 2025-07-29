---
title: "Run Expectancy (Sabermetrics 101: Basic Hitting Stats — Part 3)"
permalink: sabermetrics/101/2025-05-01-run-expectancy
category: Intro To Sabermetrics/101 Basic Hitting Stats
tags:
  - article
  - sabermetrics
  - sabermetrics-101
publish: true
share: true
Section: "[[101 Basic Hitting Stats]]"
publishDate: 2025-05-01
modified: 2025-05-01
startedDate: "[[2025-03-20]]"
custom-tags: "[[01 Tags/Baseball]]"
---
[[/content/Intro To Sabermetrics/101 Basic Hitting Stats/What's so bad about batting average? (Sabermetrics 101: Basic Hitting Stats — Part 1)|OBP]] and [[/content/Intro To Sabermetrics/101 Basic Hitting Stats/On-Base Plus Slugging (Sabermetrics 101: Basic Hitting Stats — Part 2)|OPS]] can be simply calculated by basic counting stats which are easily accessible online, or even from the box scores in the sports section of the newspaper. Just addition and division. In this post, I will start to explore the stuff that gets a little bit complicated, starting with [[Run Expectancy (Sabermetrics 101: Basic Hitting Stats — Part 3)|run expectancy]]. While not strictly a statistic (it *can* exist standalone as a stat called RE24 which I'll talk about in 201 Advanced Value Stats), it is a tool used to create other stats and the foundation of Sabermetrics' attempt to measure a hitter's impact on their team.

In a nutshell, run expectancy is the number of runs a team would be expected to score in a certain situation (also known as a game state) on average. For the purpose of this (the reasoning will be discussed slightly more in depth in 201 Advanced Value Stats), it is achieved by taking a pure average. The quality of the team, the quality of the other hitters, etc. are ignored. We don't care if a team has a lineup of 9 Aaron Judges or 9 Javy Baezes, their run expectancy with bases empty 0 outs is the same. For a very brief explanation of why, it's because the goal is not to describe perfectly the number of runs a team is likely to score, but instead to attempt to quantify an individual hitter's impact, independent of the other hitters on their team, over whom they have no influence.

This is also, in short, why runs scored or RBIs don't work as substitutes for quantifying an individual hitter's impact on run-scoring. They don't have control over their teammates, yet these stats are inexorably linked to the performances of one's teammates. If a player's teammates stop hitting, their RBIs and runs scored will go down. If a player's teammates are all MVPs, their RBIs and runs scored will go up.
# Calculating Run Expectancy
Now, a very quick rundown on how run expectancy is calculated. It's not very easy to do yourself, but it's much simpler than one would think. First, you need to obtain a dataset of plays. I normally use Retrosheet data for this when I calculate it personally, but you can use MLB's official API, Baseball Savant's CSV search, or even Fangraphs' split search (which can do a lot of the work for you).

Then, you split these plate appearances into various "buckets" (a term which refers to groups of organized data, divided by some criteria, in this case) depending on the situation. The most common way to split them is by the base state and the out state. There are 2<sup>3</sup> = 8 base states and 3 out states, making for 2\*3 = 24 total states. You could also further divide this into the 3\*4=12 count states, making for 288 total states. That can be a bit overwhelming (and impossible to visualize), so we'll stick with 24 states.

For each of these plays, the number of runs scored after that game state occurred is added up. So, for example, if the bases are loaded with 2 outs, and then a single scores 2 runs, followed by a double scoring 2 more runs, followed by an out to end the inning. The number of runs scored from that game state would be 4 runs. This process is repeated for every play in the "bucket" of plays in which that game state has occurred.

Finally, this total of runs scored is divided by the number of plays in the bucket. In our previous example with 4 runs scored with the bases loaded, if there were 2 more plays in our dataset with the bases loaded and 2 outs, but on each of those circumstances, no runs scored, the total number of runs scored after bases loaded 2 outs occurred would be 0, while the number of plays with this game state would be 3, meaning the run expectancy in our dataset with 2 outs bases loaded is 1.33.

Now, obviously, a dataset needs more than 4 plays in it for each game state we want to calculate the run expectancy for. So, we calculate Run Expectancy with a dataset from a longer period of time, normally a few years. You don't want the period of time to be too long, because the run scoring environment of the league changes over time, and so you want the run expectancy matrix to reflect the current environment. So, a sweet spot may be somewhere around 2–5 seasons—feel free to do some experimenting to figure the answer out.
# Interpreting Run Expectancy
Below, is a table from [Tom Tango's Website](https://tangotiger.net/re24.html) of run expectancy calculated with all plate appearances from 2010–2015. This is called a Run Expectancy Matrix. The variant of run expectancy that takes into account the base and out states (base-out state for short) is called RE24, which can be a bit confusing considering that's also the name of a stat, as referenced earlier.

| **Base Runners** | **0 outs** | **1 out** | **2 outs** |
| ---------------- | ---------- | --------- | ---------- |
| \_\_\_           | 0.481      | 0.254     | 0.098      |
| 1\_\_            | 0.859      | 0.509     | 0.224      |
| \_2\_            | 1.100      | 0.664     | 0.319      |
| 12\_             | 1.437      | 0.884     | 0.429      |
| \_\_3            | 1.350      | 0.950     | 0.353      |
| 1\_3             | 1.784      | 1.130     | 0.478      |
| \_23             | 1.964      | 1.376     | 0.580      |
| 123              | 2.292      | 1.541     | 0.752      |
**Table 1. Run Expectancy by base-out state**

The leftmost column in Table 1 represents the base state (a number 1 is a runner on first, and so on). Then, beneath the 3 columns for the number of outs, is the expected number of runs scored in an inning after the base-out state with this base state and that number of outs occurs.

We can do a bit of analysis of this. The fact that no runners on, no outs has a run expectancy of .481 means that, over a 9 inning game, a team from 2010-2015 scored, on average 4.329 runs. One interesting fact that many managers have discovered recently is that 0 outs, runner on 1st has a significantly higher run expectancy than 1 out, runner on 2nd. This fact is the reason why sacrifice bunting has become so rare in recent years—even in the best case scenario, it is a net negative to the team.

Tom Tango, on the same page, also has a different type of Run Expectancy Matrix, one which calculates the odds of a run scoring. This can be achieved by, instead of totaling runs, totaling the number of times in a bucket a game state occurs and a run scores at some point later that inning. The result is seen in Table 2 below.

| **Base Runners** | **0 outs** | **1 out** | **2 outs** |
| ---------------- | ---------- | --------- | ---------- |
| \_\_\_           | 0.268      | 0.155     | 0.067      |
| 1\_\_            | 0.416      | 0.265     | 0.127      |
| \_2\_            | 0.614      | 0.397     | 0.216      |
| 12\_             | 0.610      | 0.406     | 0.222      |
| \_\_3            | 0.843      | 0.660     | 0.257      |
| 1\_3             | 0.860      | 0.634     | 0.270      |
| \_23             | 0.852      | 0.676     | 0.260      |
| 123              | 0.861      | 0.657     | 0.316      |
**Table 2. Chance of scoring a run by base-out state**

This is not very useful in most innings of a game (if it's the first inning, what's the value of maximizing your probability of scoring 1 run rather than scoring as many runs as possible?), but it is very useful in the later innings of the game, especially the home team. Table 2 tells us that, if the game is tied in the bottom of the 10th (with the Manfred ghost runner), the home team has a 61.4% chance of winning (\_2\_ base state, 0 outs). But, this chance is increased to 66% with any sacrifice hit advancing the runner to third (\_\_3, 1 out). So, in a tie game in the bottom of the inning in an extra innings game, it is now advantageous to attempt to advance the runner through either a sacrifice bunt or a sacrifice fly.

This is just the tip of the iceberg of what you can do with a Run Expectancy Matrix. In next week's article, I will explore wOBA, which is one of the fundamental and key new-era stats for quantifying the impact of a hitter on their team.