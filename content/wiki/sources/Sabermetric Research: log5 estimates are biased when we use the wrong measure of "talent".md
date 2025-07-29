---
title: 'Sabermetric Research: log5 estimates are biased when we use the wrong measure of "talent"'
source: http://blog.philbirnbaum.com/2016/08/why-log5-is-always-biased-too-low.html
author:
  - "[[Phil Birnbaum|Phil Birnbaum]]"
publishedDate: 2016-08-05
created: 2025-07-29
description: 
custom-tags:
  - "[[01 Tags/Baseball|01 Tags/Baseball]]"
tags:
  - wiki_source
publish: true
share: true
category: wiki/sources
---

| Original Source                                                                                                                                                          | Author            | Published  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------- | ---------- |
| [Sabermetric Research: log5 estimates are biased when we use the wrong measure of "talent"](http://blog.philbirnbaum.com/2016/08/why-log5-is-always-biased-too-low.html) | [[Phil Birnbaum|Phil Birnbaum]] | 2016-08-05 |

---

Key Takeaways (my own personal summary:
1. There is a bias in the Log5 formula to regress teams towards the mean unnecessarily
2. This amount is minimized when the spread of talent in a league is minimized (pretty simple to see why—the function is defined as outputting the exact true talent of team A when team B's talent = 0.5, so the more teams that have a talent close to 0.5, the more accurate the formula will be).

---
The "log5" method tries to predict a team's chance of winning a game based on its talent and that of its opponent. The basic formula, for teams A and B, is  
  
**P = (A - AB)/(A+B-2AB)**  
  
A few months ago, I wrote that there's [no theoretical reason](http://blog.philbirnbaum.com/2016/01/when-log5-does-and-doesnt-work.html) for the formula to always work. In fact, there's an obvious counterexample where it doesn't work. Consider "height baseball," where the taller team always wins. Suppose team A is.700, because it's taller than 70 percent of its opponents, while team B is.400, being taller than only 40 percent of its opponents. The formula predicts team A will win 77.8 percent of games against B, but, of course, it will win 100 percent.  
  
So why doesn't log5 work? I think I've found one reason, which I'll explain in this post.  
  
(There's a second reason -- which is actually a first reason, since it came back in 2011. In a blog post, [Tango](http://www.insidethebook.com/ee/index.php/site/comments/odds_ratio_method_track_runners_and_baseball/) showed another example, using sprinter times, of how the odds ratio method (on which log5 is based) doesn't work, and Kincaid explained why in the comments. When I started writing this post, I originally thought mine was the same argument, just explained differently. But it's not. My argument actually doesn't apply to Tango's example... I'll try to explain the Tango/Kincaid logic in a future post.)  
  
\------  
  
Suppose you have team A, an.800 talent, playing team D, a.500 talent. What is the probability team A wins?  
  
It seems that the answer should be... well,.800. If team A is.800 against the league, which averages.500, then you'd think it should be.800 against a bona fide average team. And, the log5 method confirms the inutition -- plug in the numbers, and you do, indeed, get.800.  
  
But that can't be right. I think it has to be the case that the.800 team plays \*better\* than.800 against the league-average team, and that it's easy to see why without any fancy math.  
  
It actually doesn't depend on any technicality about what it actually means to be an.800 team.  
  
For instance, it's not because, if a team is.800 against the rest of the league, it must be \*worse\* than.800 in general, since it doesn't have to play itself. Even if you fix that problem, team A will have to be better than.800 against team D.  
  
It's not because of home/road issues either, or the difference between observed.800 and talent.800... adjust for those, and the result still holds.  
  
Let me restate the question in more detail, to try to eliminate some of those technicalities:  
  
**\----**  
  
**In a league with no home field advantage, there are seven teams, A through G.**  
**If team A played a balanced schedule against all of them -- including itself (or a clone of itself) -- you would expect it to finish with an.800 record. So, in that respect, team A "has.800 talent".**  
**By the same definition, teams B through G, respectively, have.700 talent,.600,.500... all the way down to.200 talent.**  
  
**When team A (.800) plays team D (.500), what's the probability A wins?**  
**\----**  
  
The answer: not.800.  
  
\----  
  
Let's create a little spreadsheet of team A's performance against all seven teams. It looks like this:  
  
**matchup probability**  
**\---------------------------**  
**.800 vs.800**  
**.800 vs.700**  
**.800 vs.600**  
**.800 vs.500**  
**.800 vs.400**  
**.800 vs.300**  
**.800 vs.200**  
  
Now, let's fill in the log5 estimate for each one of those matchups:  
**matchup log5**  
**\---------------------------**  
**.800 vs.800.500**  
**.800 vs.700.727**  
**.800 vs.600.631**  
**.800 vs.500.800**  
**.800 vs.400.857**  
**.800 vs.300.903**  
**.800 vs.200.941**  
  
Those look quite reasonable, except that... they don't average out to.800! They average out only to.766.  
  
**matchup log5**  
**\---------------------------**  
**.800 vs.800.500**  
**.800 vs.700.631**  
**.800 vs.600.727**  
**.800 vs.500.800**  
**.800 vs.400.857**  
**.800 vs.300.903**  
**.800 vs.200.941**  
**\---------------------------**  
**Average.766**  
  
There's no trick here. This is a real, valid counterexample, one that shows that log5 doesn't actually work. And there's nothing special about our choice of.800. The average would always wind up too low, except for a team that's exactly.500.  
  
Suppose we abandon the log5 estimates, then, and just try to fill in probabilities that seem reasonable. Can we do that, while insisting that the middle number stay.800?  
  
We have to hold the first number at.500, since, when a team plays a clone of itself, it must win 50 percent of its games, by definition. So we start with a chart that looks like this:  
**matchup probability**  
**\---------------------------**  
**.800 vs.800.500**  
**.800 vs.700**  
**.800 vs.600**  
**.800 vs.500.800**  
**.800 vs.400**  
**.800 vs.300**  
**.800 vs.200**  
**\---------------------------**  
**overall avg.800**  
  
From here, how do we fill in the second and third lines? One obvious way, that seems not too unreasonable, is just to stick in ".600" and ".700".  
  
**matchup probability**  
**\---------------------------**  
**.800 vs.800.500**  
**.800 vs.700.600**  
**.800 vs.600.700**  
**.800 vs.500.800**  
**.800 vs.400**  
**.800 vs.300**  
**.800 vs.200**  
**\---------------------------**  
**overall avg.800**  
  
Having done that, it seems reasonable to just continue the pattern:  
  
**matchup probability**  
**\---------------------------**  
**.800 vs.800.500**  
**.800 vs.700.600**  
**.800 vs.600.700**  
**.800 vs.500.800**  
**.800 vs.400.900**  
**.800 vs.300 1.000**  
**.800 vs.200 1.100**  
**\---------------------------**  
**overall avg.800**  
  
That does, indeed, keep the average at.800. But it's obviously wrong -- it makes no sense to estimate that team A beats the.200 team 110% of the time.  
  
So, is there another way we can fill this in, while keeping the.500 and.800 estimates, so that it all makes sense? No, I don't think that's possible.  
  
Right now, the first three lines of the chart average.600, which is.200 points below the.800 average we're shooting for. Therefore, the bottom three lines must average.200 points \*above\*.800. In other words, the bottom three lines have to average 1.000! Clearly, that can't be done.  
  
So, we have to decrease the second and third lines. Maybe we change them to, say,.650 and.750. If we do that, then the first three lines average only.167 points below.800. Now, the bottom has to average "only".967. Which, again, doesn't pass the sniff test.  
  
Try if you want, but I'm pretty sure that you're not going to find anything that seems like a plausible breakdown. The only way to get something that looks reasonable, I think, requires the middle line to be something higher than.800.  
  
\--------  
  
How much higher? From the original log5 chart, we see that  
  
(a) team A was.766 overall, but  
(b) team A played.800 ball against the.500 team.  
  
If a.766 team goes.800 against an average team, maybe we can extrapolate that an.800 team would go, say,.840 against an average team.  
  
Plugging.840 into the middle slot, and filling in the rest in some plausible fashion to average.800, maybe the chart would look something like this:  
  
**matchup probability**  
**\---------------------------**  
**.800 vs.800.500**  
**.800 vs.700.690**  
**.800 vs.600.770**  
**.800 vs.500.840**  
**.800 vs.400.900**  
**.800 vs.300.940**  
**.800 vs.200.960**  
**\---------------------------**  
**overall avg.800**  
  
That's just a guess, of course. But, no matter what the true values are, the point remains: the middle entry must be significantly higher than.800.  
  
And, another consequence: all the outcome probabilities, other than between equal teams, are \*more extreme\* than log5 suggests. The log5 formula is too conservative, always underestimating the favorite's chances of winning, when there is a favorite.  
  
\--------  
  
So, log5 doesn't actually work. But, I think, there's an easy way to tweak it so that it DOES work.  
  
And that is: instead of using the log5 formula with the respective teams' expected talent against the league, we use their expected record against a.500 team.  
  
In our league, a team that finished.800 overall beats an average team 84% of the time, not 80%. Which means, for this new definition of log5, it's not an.800 talent, it's an.840 talent.  
  
Let's reserve the word "talent" for its usual meaning, the expected record against the league, and use the made-up word "5talent" to mean talent against a.500 team. In our seven-team league, a team with a talent of.800 has a "5talent" of.840.  
  
What's the 5talent of the rest of the teams? We can guess. If an.800 talent is an.840 5talent, maybe a.700 team is.720, a.600 team is.610, and so on.  
  
Repeating the log5 calculation using 5talent instead of talent, we get:  
  
**5talent matchup log5**  
**\------------------------------**  
**.840 vs.840.500**  
**.840 vs.720.671**  
**.840 vs.610.771**  
**.840 vs.500.840**  
**.840 vs.390.891**  
**.840 vs.280.931**  
**.840 vs.160.965**  
**\------------------------------**  
**Overall avg.796**  
  
Not bad! Under our estimates, a team that's an.840 5talent works out to a.796 talent. You could easily tweak the assumptions to get the average to.800 exactly, if you wanted to.  
  
\--------  
  
Why does this happen, that log5 doesn't work if you use league performance?  
  
Because the win probabilities are based on the odds ratio.  
  
The log5 method works like this: suppose you have an.800 team against a.400 team. The.800 team has average 4:1 odds of winning. The.400 team has average 2:3 odds of winning. Divide 4/1 by 2/3, and you get 6/1. So the.800 team has 6:1 odds of beating the.400 team. That works out to an.857 winning percentage.  
  
(I used odds ratios instead of the "usual" log5 formula, but it's exactly the same thing. If you do some algebra on the odds ratio calculation, you can actually derive the log5 formula at the top of this post.  
  
When I calculate log5 probabilities, I actually use the odds ratio method, because the method is easy to remember, and I don't have to memorize the formula.)  
  
The log5 formula is based on \*multiplication\* of \*odds ratios\*. But a team's overall average record, the one we normally talk about, is based on \*addition\* of \*probabilities\*. Those are two different sets of two different things.  
  
We calculated the bottom line of the chart, the overall winning percentage, as the arithmetic mean of the win probabilities. But, the odds ratio method doesn't know about arithmetic means and win probabilities. It knows only about geometric means of odds ratios.  
  
And, as it turns out, if we calculate the average as the geometric mean of the odds ratios... well, then everything works! The geometric mean of the odds ratios against all teams is the same as the odds ratio against the average team.  
  
Going back to the chart, and going back to the.800 talent, I'll convert the probabilities to odds ratios. (The odds ratio is the probability of winning divided by the probability of losing.)  
**talent matchup log5 odds ratio**  
**\------------------------------------------**  
**.800 vs.800.500 1.00**  
**.800 vs.700.631 1.71**  
**.800 vs.600.727 2.67**  
**.800 vs.500.800 4.00**  
**.800 vs.400.857 6.00**  
**.800 vs.300.903 9.33**  
**.800 vs.200.941 16.00**  
**\------------------------------------------**  
**arithmetic mean.766**  
**geometric mean 4.00 (.800)**  
  
  
The.766 arithmetic mean doesn't equal the.800 talent, but the 4.00 geometric mean of the odds ratios \*does\* equal the 4.00 odds ratio talent.  
  
In other words, a team that's a 4.00 odds ratio talent against the league overall is also a 4.00 talent against the league average team.  
  
\-------  
  
OK, I cheated a bit. The reason the geometric mean works out perfectly is that, in our league, the team talents are symmetrically distributed around.500.  
  
If the talents aren't symmetrical, it doesn't work out perfectly -- I found the geometric mean comes out a little too high. However: it's a lot closer than the arithmetic mean works out to be. And, most leagues are symmetrical enough that it wouldn't be an issue in real life. There aren't many leagues with, say, 20 teams with.480 talent, but one team at.900.  
  
(Also... I wonder if you use the 5talents in the chart instead of the talents, if the geometric mean might not work out perfectly in that case, even for non-symmetrical leagues. That's just a gut feeling, and I need to think about it more.)  
  
\-------  
  
I think that what makes the arithmetic mean give such a serious underestimate is that our league has large extremes of team talent, spanning a range from.200 to.800. The farther the numbers are from.500, the more the geometric mean of the odds ratio differs from the arithmetic mean of the probabilities.  
  
One measure of "extremes" is the standard deviation. In our hypothetical seven-team league, the SD of talent is.200. In actual Major League Baseball, the SD of talent is only around.055.  
  
So, let's simulate the MLB spread with an example where, instead of teams varying from.800 to.200, they only vary from.565 to.435. Here's the log5 chart:  
  
**talent matchup log5 odds ratio**  
**\------------------------------------------**  
**.565 vs.565.500 1**  
**.565 vs.500.565 1.2989**  
**.565 vs.435.628 1.6870**  
**\------------------------------------------**  
**arithmetic mean.564**  
**geometric mean 1.2989 (.565)**  
  
This league has a talent SD of.053, similar to MLB. And, with that smaller SD, log5 is a very good fit. Now, a team with a 5talent of.565 has a talent of.564 -- so close that it makes no material difference.  
  
It looks like the log5 method is very, very sensitive to the dispersion of talent in the league -- bumpng the SD from.053 to.200 -- only a factor of 4 -- made the log5 discrepancy jump from 1 point all the way to 40 points.  
  
So that explains why, even though log5 produces conservatively biased estimates when we use the "usual" definition of talent, it nonetheless works so well for baseball. It's because in MLB, the spread in talent is reasonably small.  
  
\------  
  
We can repeat this for other sports. Ten years ago, [Tom Tango found](http://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/) the SD of talent to be.134 in the NBA, and.143 in the NFL.  
  
**SD of talent**  
**\-------------------------------**  
**.200 hypothetical 7-team league**  
**.143 NFL**  
**.134 NBA**  
**.055 MLB**  
**.053 hypothetical 3-team league**  
**\-------------------------------**  
  
We know that log5 is pretty far off for the 7-team league, and pretty good for MLB. The two leagues in between -- the NFL and NBA -- are right in the middle.  
  
If we do a five-team league, with talents ranging from.700 to.300, the SD is.141, which is pretty close to the NBA and NFL. Here's the calculation for the.700 team:  
  
**talent matchup log5 odds ratio**  
**\------------------------------------------**  
**.700 vs.700.500 1.00**  
**.700 vs.600.609 1.56**  
**.700 vs.500.700 2.33**  
**.700 vs.400.778 3.50**  
**.700 vs.300.845 5.44**  
**\------------------------------------------**  
**arithmetic mean.686**  
**geometric mean 2.33(.700)**  
  
  
We can estimate that in the NFL or NBA, a.686 talent has a "5talent" of.700, meaning that it'll beat a.500 team 70% of the time.  
  
That means that if you're estimating a.686 talent against a.500 talent, your estimate is going to be.014 too conservative. That's approximately what it'll be for any pair of teams about that far apart. It'll be more accurate for opponents closer in talent, and less accurate for talent mismatches, at least to the point of diminishing returns (if log5 says your team is.990, it's not possible that it really should be 1.005).  
  
Does that bother you, that when you use log5 on teams with significantly different talent, your estimate is off by as much as.014? If it doesn't, just go ahead and keep using log5.  
  
But for any study that's looking for small effects... well, to me, it seems to me that.014 points is probably as big as the effect you're looking for. If you don't correct for it, you're underestimating the favorite by, what, maybe a quarter as much as home field advantage?  
  
If you do some kind of "record after a time zone change on a hot streak" study, and you find an effect of.014 points... since hot streaks mean good teams, could it just be that all you did was rediscover that log5 is biased too conservatively when you use the wrong definition of talent?  
  
  
  
UPDATE, 8/25/16: Changed title of post and reworded a few sentences to emphasize that the "bias" in log5 is not intrinsic to the formula itself, but occurs when we improperly use "talent" instead of "5talent." Hat tip: Ted Turocy. See longer explanation [here](http://blog.philbirnbaum.com/2016/08/log5-isnt-necessarily-biased-if-you.html).