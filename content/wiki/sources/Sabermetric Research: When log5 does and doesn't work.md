---
title: "Sabermetric Research: When log5 does and doesn't work"
source: http://blog.philbirnbaum.com/2016/01/when-log5-does-and-doesnt-work.html
author:
  - "[[Phil Birnbaum|Phil Birnbaum]]"
publishedDate: 2016-01-07
created: 2025-07-29
description: 
tags:
  - wiki_source
custom-tags:
  - "[[01 Tags/Baseball|01 Tags/Baseball]]"
publish: true
share: true
category: wiki/sources
---

| Original Source                                                                                                                   | Author            | Published  |
| --------------------------------------------------------------------------------------------------------------------------------- | ----------------- | ---------- |
| [Sabermetric Research: When log5 does and doesn't work](http://blog.philbirnbaum.com/2016/01/when-log5-does-and-doesnt-work.html) | [[Phil Birnbaum|Phil Birnbaum]] | 2016-01-07 |

---

Key Takeaways (my own personal summary:
1. Log5 works best when the ratio of luck to skill in a sport is higher—ie the randomness in outcomes is highest
2. Since the ratio of luck to skill is never infinite (and if it were, every team would have a .500 record), log5 will always overestimate a team's winning percentage

---
Team A, with an overall winning percentage talent of.600, plays against a weaker Team B with an overall winning percentage of.450. What's the probability that team A wins?  
  
In the 1980s, Bill James created the " [log5](https://en.wikipedia.org/wiki/Log5) " method to answer that question. The formula is  
  
**P = (A - AB)/(A+B-2AB)**  
  
... where A is the talent level of team A winning (in this case,.600), and B is the talent level of team B (.450).  
  
Plug in the numbers, and you get that team A has a.647 chance of winning against team B.  
  
That makes sense: A is.600 against average teams. Since opponent B is worse than average, A should be better than.600.  
  
Team B is.050 worse than average, so you'd kind of expect A to "inherit" those 50 points, to bring it to.650. And it does, almost. The final number is.647 instead of.650. The difference is because of diminishing returns -- those ".050 lost wins" are what B loses to \*average\* teams because it's bad. Because A is better than average, it would have got some of those.050 wins anyway because it's good, so B can't "lose them again" no matter how bad it is.  
  
In baseball, the log5 formula has been proven to work very well.  
  
\------  
  
There was some [discussion of log5](http://tangotiger.com/index.php/site/comments/can-we-do-better-than-log5-odds-ratio-method-when-it-comes-to-non-.500-non) lately on Tango's site (unrelated to this post, but very worthwhile), and that got me thinking. Specifically, it got me thinking: log5 CANNOT be right. It can be \*almost\* right, but it can never be \*exactly\* right.  
  
In the baseball context, it can be very, very close, indistinguishable from perfect. But in other sports, or other contexts, it could be way wrong.  
  
Here's one example where it doesn't work at all.  
  
Suppose that, instead of actually playing baseball games, teams just measured their players' average height, and the taller team wins. And, suppose there are 11 teams in the league, and there's a balanced 100-game season.  
  
What happens? Well, the tallest team beats everyone, and goes 100-0. The second-tallest team beats everyone except the tallest, and winds up 90-10. The third-tallest goes 80-20. And so on, all the way down to 0-100.  
  
Now: when a.600 team plays a.400 team, what happens? The log5 formula says it should win 69.2 percent of those games. But, of course, that's not right -- it will win 100 percent of those games, because it's always taller.  
  
For height, the log5 method fails utterly.  
  
\------  
  
What's the difference between real baseball and "height baseball" that makes log5 work in one case but not the other?  
  
I'm not 100% sure of this, but I think it's due to a hidden, unspoken assumption in the log5 method.  
  
When we say, "Team A is a.600 talent," what does that mean? It could mean either of two things:  
  
\-- A1. Team A is expected to beat 60 percent of the opponents it plays.  
  
\-- A2. If Team A plays an average team, it is expected to win 60 percent of the time.  
  
Those are not the same! And, for the log5 method to work, assumption A1 is irrelevant. It's assumption A2 that, crucially, must be true.  
  
In both real baseball and "height baseball," A1 is true. But that doesn't matter. What matters is A2.  
  
In real baseball, A2 is close enough. So log5 works.  
  
In "height baseball," A2 is absolutely false. If Team A (.600) plays an average team (.500), it will win 100 percent of the time, not 60 percent! And that's why log5 doesn't work there.  
  
\-------  
  
What it's really coming down to is our old friend, the question of talent vs. luck. In real baseball, for a single game, luck dwarfs talent. In "height baseball," there's no luck at all -- the winner is just the team with the most talent (height).  
  
Here are two possible reasons a sports team might have a.600 record:  
  
\-- B1: Team C is more talented than exactly 60 percent of its opponents  
  
\-- B2: Team C is more talented than average, by some unknown amount (which varies by sport) that leads to it winning exactly 60 percent of its games.  
  
Again, these are not the same. And, in real life, all sports (except "height baseball") are some combination of the two.  
  
B1 refers completely to talent, but B2 refers mostly to luck. The more luck there is, in relation to talent, the better log5 works.  
  
Baseball has a pretty high ratio of luck to talent -- on any given day, the worst team in baseball can beat the best team in baseball, and nobody bats an eye. But in the NBA, there's much less randomness -- if Philadelphia beats Golden State, it's a shocking upset.  
  
So, my prediction is: the less that luck is a factor in an outcome, the more log5 will underestimate the better team's chance of winning.  
  
Specifically, I would predict: log5 should work better for MLB games than for NBA games.  
  
\--------  
  
Maybe someone wants to do some heavy thinking and figure how to move this forward mathematically. For now, here's how I started thinking about it.  
  
In MLB, the SD of team talent seems to be about 9 games per season. That's 90 runs. Actually, it's less, because you have to regress to the mean. Let's call it 81 runs, or half a run per game. (I'm too lazy to actually calculate it.) Combining the team and opponent, multiply by the square root of two, to give an SD of around 0.7 runs.  
  
The SD of luck, in a single game, is much higher. I think that if you computed the SD of a single team's 162 runs-scored-that-game, you'd get around 3. The SD of runs allowed is also around 3, so the SD of the difference would be around 4.2.  
  
**SD(MLB talent) = 0.7 runs**  
**SD(MLB luck) = 4.2 runs**  
  
Now, let's do the NBA. From basketball-reference.com, the SD of the SRS rating seems to be just under 5 points. That's based on outcomes, so it's too high to be an estimate of talent, and we need to regress to the mean. Let's arbitrarily reduce it to 4 points. Combining the two teams, we're up to 5.2 points.  
  
What about the SD of luck? [This site](http://www.boydsbets.com/ats-margin-standard-deviations-by-point-spread/) shows that, against the spread, the SD of score differential is around 11 points. So we have  
  
**SD(NBA talent) = 5.2 points**  
**SD(NBA luck) = 11.0 points**  
  
In an MLB game, luck is 6 times as important as talent. In an NBA game, luck is only 2 times as important as talent.  
  
But, how you apply that to fix log5, I haven't figured out yet.  
  
What I \*do\* think I know is that the MLB ratio of 6:1 is large enough that you don't notice that log5 is off. (I know that from studies that have tested it and found it works almost perfectly.) But I don't actually know whether the NBA ratio of 2:1 is also large enough. My gut says it's not -- I suspect that, for the NBA, in extreme cases, log5 will overestimate the underdog enough so that you'll notice.  
  
\-------  
  
Anyway, let me summarize what I speculate is true:  
  
1\. The log5 formula never works perfectly. Only as the luck/talent ratio goes to infinity, will log5 be theoretically perfect. (But, then, the predictions will always be.500 anyway.) In all other cases, log5 will underestimate, to some extent, how much the better team will dominate.  
  
2\. For practical purposes, log5 works well when luck is large compared to talent. The 6:1 ratio for a given MLB game seems to be large enough for log5 to give good results.  
  
3\. When comparing sports, the more likely it is that the more-talented team beats the less-talented team, the worse log5 will perform. In other words: the bigger the Vegas odds on underdogs, the worse log5 will perform for that sport.  
  
4\. You can also estimate how well log5 will perform with a simple test. Take a team near the extremes of the performance scale (say, a.600/.400 team in MLB, or a.750/.250 team in the NBA), and see how it performed specifically against only those teams with talent close to.500.  
  
If a.750 team has a.750 record against teams known to be average, log5 will work great. But if it plays.770 or.800 or.900 ball against teams known to be average, log5 will not work well.  
  
\-------  
  
All this has been mostly just thinking out loud. I could easily be wrong.