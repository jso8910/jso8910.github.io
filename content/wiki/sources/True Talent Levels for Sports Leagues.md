---
title: True Talent Levels for Sports Leagues
source: https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#comments
author:
  - "[[../TangoTiger|TangoTiger]]"
publishedDate: 2006-08-24
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

| Original Source                                                                                                                                    | Author         | Published  |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ---------- |
| [True Talent Levels for Sports Leagues](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#commentsl) | [[../TangoTiger|TangoTiger]] | 2006-08-24 |

---

Key Takeaways (my own personal summary):
1. Scroll down to the highlighted section for the most relevant part
2. Essentially, it uses empirical data to calculate the variance of winning in baseball, then subtracts the binomial distribution variation (which would be [[../Random Variation|Random Variation]]) to find the standard deviation of true talent for win records in baseball

---
## True Talent Levels for Sports Leagues

By [Tangotiger](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/), 01:19 PM

I’m engaged in a discussion on [True Talent Levels](http://sabermetricresearch.blogspot.com/2006/08/on-correlation-r-and-r-squared.html) across sports leagues. The question on the table is how many games do you need to get the truly better team to have the better record. In that thread, I give you a couple of useful equations to use.

I will reprint all my comments into this thread here (which may look somewhat bizarre without the accompanying context), but I encourage all to also follow the discussion there.

---

var(observed) = var(true) + var(random)

where var=variance

If we look at OBP, var(true) in MLB is around.030^2.

For any single PA, it’s either safe or out. That makes our var(random) =.474^2.

var(observed) therefore will be.475^2.

Your regression toward the mean therefore will be over 99%.

That’s for one PA. But, there are 80 PAs per game, more or less (hitters and pitchers). The var(random) drops down to.053^2.

So, it all depends on the number of “trials”. In football, you probably have around 150 possessions? Basketball is what, 200? Hockey likely in the 100+ neighboorhood? Tennis, 4 matches x 9 games x 6 to 8 points = 250?

The less trials, and the closer the var(true) is to zero, the more luck plays a role. My guess is that tennis has far fewer upsets simply because the trials are so high, and the spread in talent is so much wider.

\===================

I don’t see how it can be close to 100%. It’s not like we always see players ranked #1 through #16 in every tournament.

In any case, the exact answer can be determined either empirically (we have enough data), or through the process I explained.

\===================

Ah, 60% is huge! I guess the simple question is: if a guy who wins 60% of the points faces a guy who wins 40% of the point, how often will the second guy win more than 50% of the points, over 250 trials? I get 99.9%.

\===================

If the probability we expected was simply 51% to 49% for any single point, the better guy will win 62% of the time. If let’s say this was Sampras/Agassis head-to-head record, it shows you how very close they are, and it’s only the setup in tennis that allows Sampras to stand out much more.

\===================

For tennis, this is likely the case, with women. The spread in talent in women’s tennis is likely far wider than in men’s tennis. To ensure that the same women don’t always win, you need fewer games per match.

As for baseball, var(true) for a baseball team is about.060 (which can be calculated in many ways).

var(random) reaches.060, when the number of games played is 69. That is, after 69 games, the “r” is.50.

I don’t know what the var(true) for a football team is. I’m sure it’s quite a bit higher. Just taking a quick stab at it now, let’s say var(true) it’s.150 for football. To get var(random) to be.150, you need 11 games. That, is, after 69 baseball games, you’ll know as about the true talent of teams, as you would after 11 NFL games.

\===================

==Here is one way to figure out the var(true) for any league.==

==Step 1 - Take a sufficiently large number of teams (preferably all with the same number of games).==

==Step 2 - Figure out each team’s winning percentage.==

==Step 3 - Figure out the standard deviation of that winning percentage.==

I just did it quick, and I took the last few years in the NFL, and the SD is .19, which makes var(observed) =.19^2

==Step 4 - Figure out the random standard deviation. That’s easy: sqrt(.5\*.5/16)==

==16 is the number of games for each team.==

So, var(random) =.125^2

Solve for:  
var(obs) = var(true) + var(rand)

var(true), in this case, is.143^2

Knowing that var(true) is.143, to get an “r” of.50, you need var(rand) to also be.143. For that to happen, the number of games played equals 12. That is sqrt(.5\*.5/12)=.144

In baseball, var(true) is.060.

I haven’t figured out what it is in NHL, or NBA, but perhaps someone wants to look at it?

• • • • •

[#1](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#1) [tangotiger](http://www.tangotiger.net/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=tangotiger)) **2006/08/24 (Thu) @ 22:59**

I also added the following to that thread:

I’ll take a quick guess with the NHL. The number of points (adjusted for ties/OT) parellels somewhat the number of wins in baseball.

So, if the observed SD win% in baseball is.072, then it would be around.080 for the NHL, I’ll guess.

The random variation for 82 games is.055^2  
which makes var(true) =.058

Therefore, in the NHL, 82 games is pretty much the point where r=.50. That is, 12 NFL games, 69 MLB games, and 75 NHL games are all equivalent.

MLB decides to play 162 games instead. The NHL decides to allow 16 teams in the playoffs.

\===================

Hmmm… should have checked first. var(obs) in the NHL is.100^2, making var(true) =.083^2. To match var(rand) of of.083^2, you need to play 36 games.

So, 12 NFL games, 36 NHL games, and 69 MLB games are equivalent.

In the NFL, with only 16 games, luck plays a huge role. In the NHL and MLB, both those number of games is 43-44% of their respective seasons. There’s no “true talent” reason for the NHL to have all those playoff games.

  

[#2](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#2) [tangotiger](http://www.tangotiger.net/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=tangotiger)) **2006/08/24 (Thu) @ 23:07**

what the heck… NBA var(obs) is around.145^2. var(rand) just like hockey, or.055^2. So var(true) =.134^2

To get an r of.5, you need only 14 NBA games! Sheesh. This is a huge problem here. 14 NBA games tells you as much as 36 NHL games.

On top of which, 16 NBA teams make the playoffs.

NBA games need to be cut down from 48 minutes to something alot less.

  

[#3](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#3) [tangotiger](http://www.tangotiger.net/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=tangotiger)) **2006/08/24 (Thu) @ 23:14**

Which makes me think about the home field advantage. We all know in basketball it’s way high. I always figured it was because of travel and fatigue. But, maybe it’s something similar here. Let’s say that all athletes get a 1% boost by playing at home. In basketball, because of the way the game is laid out (100 possessions per team as opposed to 40 for baseball), then they get to keep piling up on that. That is, if basketball were only played for one quarter (25 possessions each), and you look at the home record, I’m sure it won’t be.620. Likely, it’ll be something like.530.

Is Roland Beech around?

  

[#4](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#4) [tangotiger](http://www.tangotiger.net/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=tangotiger)) **2006/09/01 (Fri) @ 21:55**

How much luck in a single game?

Remembering that…  
var(obs) = var(true) + var(random)  
... in a single contest, var(random) is.5^2 for every sport with two equal opponents facing each other.

In MLB, var(true) is.06^2. The luck factor is therefore.5^2 / (.5^2+.06^2) =.986. So, choosing any single random game, and the outcome can be mostly attributed to luck. That is, we have really no idea, just by looking at the final score, which team is actually better.

In NHL, var(true) is.083^2, meaning the luck factor is.973.

The NBA luck factor, with var(true) of.134^2, is.933.

The NFL luck factor, with var(true) of.143^2, is.924.

Another way to look at these “luck factor” numbers: If you were to take the “true talent” winning percentage of all the MLB winning teams, their true winning percentage would be.507. (You can figure this as 1 minus half the luck factor.) So, in the NFL, with the luck factor being.924, the “true” winning percentage of all teams that win in a random week is.538.

So, the random variation, “the breaks”, just don’t even out in a single game, and really overwhelms whatever data you have. (Again, for a single game, without knowing about the history of either opponent.)

Literally, anything can happen, which is of course why we love watching sports.

  

[#5](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#5) [tangotiger](http://www.tangotiger.net/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=tangotiger)) **2006/09/18 (Mon) @ 20:38**

Someone asked me what the HFA would be in MLB, if a game was only three innings, instead of 9. I responded:

\=================================  
Absolutely. In fact, we can answer that question quite definitively:

If MLB was only three innings (or similarly, started the 7th inning, tied), the win probability would be:.526  
[http://www.tangotiger.net/innwin3.html](http://www.tangotiger.net/innwin3.html)

Or possibly:.517  
[http://www.tangotiger.net/innwin2.html](http://www.tangotiger.net/innwin2.html)

\*\*\*

The difference between the two is that the first one assumes that the pitcher quality is constant throughout the game, while the second one is based on actual data.

  

[#6](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#6) [edk](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=edk)) **2006/09/25 (Mon) @ 23:59**

I missed this before:

“if basketball were only played for one quarter (25 possessions each), and you look at the home record, I’m sure it won’t be.620. Likely, it’ll be something like.530.”

But then it would be a different sport. Teams would always leave their best players on the floor, and would probably run a play for their single best player on 75% of all possessions, knowing they wouldn’t tire.

I don’t know why the HCA in the NBA is so high (historically, about 60%). I do know that NBA teams, more than any other team sport, depend most on their stars: players like Iverson or Kobe will use about 1/3 of their team’s possessions over the course of a season. I think that may account for a lot of variance.

  

[#7](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#7) [tangotiger](http://www.tangotiger.net/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=tangotiger)) **2006/09/26 (Tue) @ 01:28**

I don’t agree. Can you break down the home and away free throw percentages, and the home and away 2pt and 3pt FG made breakdowns? As well, can you tell me how many free throws and 2pt throws and 3pt throws are attempted per 48 minutes?

I think it would be a trivial task to come up with a simple mathematical equation that uses those numbers to generate a 62% winning percentage.

I’d also bet that if you look at the OT records, that the home team does not win 62% of the OT games.

  

[#8](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#8) [tangotiger](http://www.tangotiger.net/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=tangotiger)) **2006/09/26 (Tue) @ 01:54**

I just found this link:  
[http://www.nba.com/celtics/history/Stats\_OvertimeRecords.html](http://www.nba.com/celtics/history/Stats_OvertimeRecords.html)

That’s the Celtics historical OT record. At home, 59-32 (.648) and on the road 63-55 (.533). Remember, the average team in the last few years that I looked will win.620 at home and.380 on the road. That’s a.240 win differential. The Celtics win differential is.115.

In 2006:  
[http://www.basketball-reference.com/leagues/NBA\_2006\_games.html](http://www.basketball-reference.com/leagues/NBA_2006_games.html)

I count 83 OT games in the regular season. 46 home wins and 37 road wins. The home team winning percentage in OT was 0.554. The winning percentage of all games 0.612.

So,.612 -.388 =.224  
.554 -.446 =.108

As you can see, to estimate the win probability for a team at home in OT is half the typical gap in home and win losses.

This is in basketball.

\*\*\*

In baseball, I’d bet it’s also similar. That is, the home win % for all games is about.540. And in extra innings, it would probably be about.520 or so. I can guess this because that’s what a Markov chain would tell me, if I start the game in the 9th inning tied, or if I looked at empirical results.

  

[#9](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#9) [edk](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=edk)) **2006/09/26 (Tue) @ 02:35**

I’ll try to get back to this tomorrow, but for now I’ll just note the sample bias in OT games: if a good team is forced into overtime, who is most likely to be their opponents? A team of similar ability. Bad teams are rarely good enough to force good teams into overtime. It doesn’t suprise me that OT win% will tend towards.500.

  

[#10](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#10) [tangotiger](http://www.tangotiger.net/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=tangotiger)) **2006/09/26 (Tue) @ 02:54**

Are you saying that the winning record for a game between two.500 teams will not be.612 at home? That the reason it’s.612 is because of the disparity in talent levels?

I’m saying take two equal teams, and the home team will win.612 of all their confrontations, and.554 if they get into OT.

  

[#11](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#11) [edk](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=edk)) **2006/09/26 (Tue) @ 03:42**

I’m saying that OT games aren’t a random sample.

\* A bad team takes a good team into overtime, there’s a good chance the best player on the good team is injured or has fouled out.

\* The number of days rest has a huge effect on the probablitity of a home team win—games in which either team has more than a two-day rest advantage are overrepresented in OT games by a factor of 2.2.

\* FWIW the record of two ~.500 teams in overtime is 57% to the home team in 126 games. With two.400 teams, home team took 15 of 32 games. Two.600 teams, thats 56% of the 78 games.

  

[#12](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#12) [tangotiger](http://www.tangotiger.net/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=tangotiger)) **2006/09/26 (Tue) @ 06:15**

Given the sample size, those look all the same to me.

My main point still stands: the reason that the home winning percentage is what it is, is because of the piling-on effect. That every contest is made up of “single confrontations”, where the home team has a tiny better chance at winning than the visiting team. And basketball affords the largest number of such opportunities, and therefore, allows these single confrontations to pile up into something huge.

And that if a game was the length of a quarter (e.g., an OT game, or the 1st quarter of a game), that is very evident. And that this “phenomenon” exists for all sports of all kinds.

That this is not limited to just “home v away”, but to anything. Even if the “single confrontation” of two guys is a.51/.49 result (be it home advantage, or simply that one guy is a bit better than the other), that the piling on will result in something seemingly out-of-character. Tennis is a good example, too.

As I said, if you can provide the numbers I asked, I can prove it rather easily.

  

[#13](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#13) [edk](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=edk)) **2006/09/26 (Tue) @ 18:15**

*Given the sample size, those look all the same to me.*

It looks like a lot of noise, yes.

*My main point still stands: the reason that the home winning percentage is what it is, is because of the piling-on effect.*

Nothing there that I can disagree with. In fact, that is a pithy summary of what I and others have found over the years.

My disagreement came with using OT games or 1st quarters as a way of checking this. There are a priori reasons why, even if these numbers support your point, that they’re meaningless.

  

[#14](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#14) [tangotiger](http://www.tangotiger.net/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=tangotiger)) **2006/09/26 (Tue) @ 19:13**

We’ll agree on the summary, and disagree somewhat on the merits. I can live with that.

  

[#15](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#15) [Tangotiger](http://www.tangotiger.net/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=Tangotiger)) **2006/11/22 (Wed) @ 01:00**

I posted the following at this thread:  
[http://dberri.wordpress.com/2006/11/20/the-short-supply-of-tall-people/](http://dberri.wordpress.com/2006/11/20/the-short-supply-of-tall-people/)

But, that site either lost my post, or is moderating comments. Either way, I’m reprinting it here:

> The “number of scores” theory is almost likely the most important one to address the “competitive balance” issue. I addressed the issue on [my blog](http://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/) two months ago.
> 
> If basketball was only one quarter, or baseball lasted only three innings, or hockey was played in one period, the spread in winning percentages would not be what it is.
> 
> Imagine tennis being 1 set = 1 match. Would Federer be as “dominant”? He may win 80% of his matches, but he doesn’t win 80% of his sets.
> 
> The longer the game, the more “confrontations” in a game, the more that random variance will make way to true talent.
> 
> It’s a given.
> 
> (On my blog, I go through the math to show how much randomness there is.)

  

[#16](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#16) [Phil Birnbaum](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=Phil%20Birnbaum)) **2006/11/22 (Wed) @ 01:35**

In their rebuttal to Roland Beech [here](http://www.bepress.com/jqas/vol2/iss4/4/), the “Wages of Wins” authors reject the “number of confrontations” theory. Well, actually, they don’t quite reject it... they say it “might” explain the difference between sports, but not in the same sport over time. This appears to have been a softening of their original position, although their tone does not seem to be appreciative of Beech for having pointed it out.

In any case, Berri seems to have reverted to their original argument now—yesterday’s post has no mention of any alternative explanation.

  

[#17](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#17) edk ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=edk)) **2006/11/22 (Wed) @ 01:40**

Phil may appreciate this: over at the [APRMetics board](http://sonicscentral.com/apbrmetrics/viewtopic.php?t=877), Berri’s book is getting a pretty good going over—sparked by the fact that Berri refuses to engange criticisms by amateurs (ie non-academics).

  

[#18](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#18) [Phil Birnbaum](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=Phil%20Birnbaum)) **2006/11/22 (Wed) @ 01:43**

Wow, 12 pages of posts! I’ll take a look. Thanks, edk.

  

[#19](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#19) [Phil Birnbaum](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=Phil%20Birnbaum)) **2006/11/22 (Wed) @ 01:51**

BTW, in their rebuttal to Beech (see link in comment #16), the authors say explicitly that they may be “inclined” to ignore criticism from websites, and the only reason they responded to Beech’s review was that it was in an academic journal.

Their response to Beech mentions several times that Beech is not an academic and his review was not peer reviewed: “it is very easy to sit back and make claims on a website.”

Their rebuttal is definitely worth a read.

  

[#20](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#20) [Dan Rosenbaum](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=Dan%20Rosenbaum)) **2006/11/22 (Wed) @ 01:53**

The funny thing is that Dave will not even engage me - another academic economist and a consultant to an NBA team.

I have not tried to publish papers in sports economics, but I have papers in other empirical fields of economics that are well thought of by top economists and top policy makers. These papers have gotten more academic attention than any paper in sports economics ever gets. So I have some standing as an academic economist.

My last post where I set out to show how Wages of Wins misapplied their possession formulations is really pretty devastating. I am kicking myself for not noticing it earlier.

But still Dave will not engage me about Wins Produced. It is bizarre to say the least.

Best wishes,  
Dan

  

[#21](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#21) Guy ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=Guy)) **2006/11/22 (Wed) @ 05:29**

It seems pretty clear now that Berri et. al. got in way over their heads with important parts of their analysis, and the book simply can’t withstand serious scrutiny. They look at team variation to draw conclusions about individual talent variation, and vice-versa, without even seeming to consider the intervening mechanisms that determine team construction (salary caps, limits on free agency, draft picks, etc.) They use the weak link between team salary and win % in the NBA to infer that players are misvalued, without even comparing individual salaries to their player value metric. As discussed in this thread, they seem totally oblivious to ways in which the basic rules of a sport may affect how much luck impacts outcomes. (And they seem to believe they are the first to discover that athletic performance is often “inconsistent”, a claim made breathlessly and usually accompanied by the keen observation “who knew the Tigers would be so good?”) Etc. Etc. I’m sure I’ve left out many other significant criticisms.

The authors’ strategy so far has been to ignore most cogent criticisms (apparently deleting some on the website), while cherrypicking a few weak criticisms and responding aggressively to those. I thought the ‘rebuttal’ to Beech was mostly non-responsive to his points, and used mostly as an opportunity to restate their conclusions. Perhaps the authors sense the ground shifting under them and hope the house will remain standing if only they ignore it; perhaps they are so sure of their approach they really can’t see the power of these criticisms and don’t think they need to respond to all this ‘noise’ (I’d guess the former, but who knows.)

But here’s my question: Why doesn’t the peer review process work to screen out or correct bad work in sports economics? Because as far as I can tell, it fails with some frequency. And by this I don’t just mean the work fails to acknowledge or build on insights from the work of non-academics—Phil’s frequent, and usually justified, complaint—but that it often fails basic tests of logical reasoning, does not consider alternative explanations, and/or fails to grapple with plausible criticisms. Why doesn’t peer review prevent this? And is this true in other economics sub-specialties, or is this a sports economics problem?

  

[#22](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#22) [Tangotiger](http://www.tangotiger.net/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=Tangotiger)) **2006/11/22 (Wed) @ 05:48**

JC reviewed the Wages of Wins:  
[http://www.wagesofwins.com/IJSFreview.html](http://www.wagesofwins.com/IJSFreview.html)

Interestingly, Phil and Roland’s reviews are not linked:  
[http://www.wagesofwins.com/reviews.html](http://www.wagesofwins.com/reviews.html)

  

[#23](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#23) [Phil Birnbaum](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=Phil%20Birnbaum)) **2006/11/22 (Wed) @ 06:00**

re: 21

Perhaps peer reviewers are simply not equipped to notice serious errors in the sabermetrics side of the papers.

As I wrote elsewhere, if an economist did a study on the cost/benefit and incentives of cancer treatment, the paper might get sent to an oncologist to make sure the medical details are correct. But there are no (or few) academic sabermetricians, and the journals don’t seem inclined to make non-academic practitioners part of the peer review process, if they are aware of us at all.

Some of the most egregious flaws I’ve seen are in “working papers,” so perhaps those will be rejected in due course. The NHL fighting paper is one of those, and its errors are among the most blatant of the studies I’ve seen so far.

  

[#24](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#24) [Phil Birnbaum](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=Phil%20Birnbaum)) **2006/11/22 (Wed) @ 06:04**

... but I may be wrong. I note that JC’s review of TWOW (see link in #22) criticizes NONE of Berri et al’s findings. (His only criticisms are too much acknowledgement of previous work, and too many personal anecdotes.)

I guess in fairness, I can’t argue that peer reviewers are simply ignorant of sabermetrics if JC, who is well-versed in sabermetrics, also finds nothing to criticize.

  

[#25](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#25) [John Beamer](http://www.beyondtheboxscore.com/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=John%20Beamer)) **2006/11/22 (Wed) @ 11:59**

I too was suprised by JC’s review, especially given the level of criticism in sabermetric circles for TWOW. I am sure that JC is a busy man but I’d appreciate his opinion on some of the matters rasied becuase, for me, they seem pretty egregious flaws.

I am not an academic so don’t really know how the peer review process actually works. I suspect in this case it fails for a number of factors (1) the lack of expertise in the subject by other academics (JC excepted), (2) possible quality of peer reviewers... academics won’t thank me for this but becoming an prof at a second rate school isn’t too difficult (not that Berri et al are in this bracket; I have no idea), and, (3) lack of rigour on behalf of peer reviewers. Given that quite of lot of shoddy work slips through the net, not only in sport economics but other areas, perhaps the peer review process is substandard? Afterall, what better review process than the Internet? And here the book is getting slammed by both academics and laymen. Not to respond to this is at worst arrogant and at best stupid. I need to tuck in to the 12 pages now... should be interesting

  

[#26](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#26) Guy ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=Guy)) **2006/12/02 (Sat) @ 05:45**

Dave Berri at TWOW has a post up about sports economics and the value of peer review:  
[http://dberri.wordpress.com/2006/12/01/defending-sports-economics/](http://dberri.wordpress.com/2006/12/01/defending-sports-economics/)

  
  

[#28](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#28) Guy ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=Guy)) **2007/05/30 (Wed) @ 23:00**

As part of the discussion at Phil’s blog, I made the post below. I’d be interested in the thoughts of posters here about the best way to measure how well a sport’s standings approximate the true talent differences among its teams (which is a function of # of games and spread of true talent).

“Once we measure true strength and luck/error, we can use those to determine “standings integrity,” i.e. how well league standings reflect real differences in team strength. I can see two metrics: a) true strength variance as % of total variance, and b) signal:noise ratio. For the major sports, we’d get:  
SD(true)^2/SD(obs)^2  
NBA.845  
MLB.773  
NFL.589  
MLS.390

Signal/Noise—SD(true)/SD(error)  
NBA 2.34  
MLB 1.85  
NFL 1.20  
MLS 0.80

Same ranking, but different magnitudes. Anyone here think one of these (or another metric) is best?

If I’ve done this right, MLS is a real crapshoot. But I don’t know from soccer—does that sound right?

The NFL standings clearly reflect a lot of luck, but on the other hand it’s amazing what just 16 games can do if talent differences are large. If MLB used a 16-game schedule, just 25% of the variance would be real strength differences, and signal:noise would be just.58! And the NFL gives itself an out by letting so many teams make the playoffs.”

  

[#29](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#29) [Tangotiger](http://www.tangotiger.net/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=Tangotiger)) **2007/05/30 (Wed) @ 23:11**

In posts #1 and 2, I said:

> So, 12 NFL games, 36 NHL games, and 69 MLB games are equivalent.
> 
> 14 NBA games tells you as much as 36 NHL games.

So, in terms of “integrity”, the NBA is the only one that is totally out-of-whack.

The NBA further compounds its problems by having so many teams in the playoffs. I don’t follow the NBA, but I would bet 1-8 (1st place team against 8th place team), and 2-7 upsets are rather rare. In the NHL, those are not uncommon.

In order to get more drama in the NBA, you need to cut down the season to 32 games, or cut the game down to something like 12 minutes.

  

[#30](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#30) [Tangotiger](http://www.tangotiger.net/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=Tangotiger)) **2007/05/30 (Wed) @ 23:29**

I’m looking at your numbers, and they match fairly closely to mine.

In NBA, 1-(.055/.145)^2=.86, which is close to yours.

In MLB, 1 observed SD =.072, and 1 random SD =.039. So, the “r” is 1-(.039/.072)^2=.71

You are showing.77. (we probably used different datasets).

In NHL, 1-(.055/.10)^2=.70.

In NFL, 1-(.125/.19)^2=.57, which is close to yours.

This shows how reliable an indicator a team’s record is of its underlying true skills. There’s a bit more luck in NFL records, and hardly any luck in an NBA team’s record.

Number of teams in playoffs should be least in NBA and most in NFL.

In order to get the NBA into the “.70” reliability range, the NBA needs a 40 game season. 1-(.079/.145)^2=.70

In short, cut the NBA season down in half to get the same drama as NHL and MLB.

The NFL on the other hand needs to go to a 22-game schedule, 1-(.107/.19)^2=.69

A 22-game schedule is 22-24 weeks, which is on par in calendar days to the NHL and MLB.

The NBA on the other hand would complete its season in 3 months. If you want to keep it at 6 months, the NBA game needs to cut its game down from 48 minutes.

  

[#31](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#31) [John Beamer](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=John%20Beamer)) **2007/05/30 (Wed) @ 23:31**

I can’t speak for MLS but soccer isn’t a crapshoot. In the major European leagues with 30 odd games a season the best teams are always in the top 2-3 spots, it is rare that you get a “lucky” winner. By lucky I mean an outsider.

In one-off games, of course luck plays a role. However, I reckon that luck in a single game of baseball plays a much greater role than in a single game of soccer.

  

[#32](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#32) [Tangotiger](http://www.tangotiger.net/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=Tangotiger)) **2007/05/30 (Wed) @ 23:34**

Hmmm… I did that wrong.

The true SD for NBA is.134, so in order to get the r=.70, we need the random SD to be.088, meaning a 32-game schedule in the NBA.

For the NFL, you need a 28-game schedule.

Those schedules will have the same reliability as an NHL schedule of 82 games and an MLB schedule of 162 games.

  

[#33](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#33) [Tangotiger](http://www.tangotiger.net/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=Tangotiger)) **2007/05/30 (Wed) @ 23:38**

John: the single-game luck factor follows from the same equation.

In baseball, 1 true SD =.060. For 1 game, 1 random SD =.5. That’ll give you an observed of sqrt(.06^2+.50^2)=.504

So, the reliability is 1-(.06/.504)^2=.014

One baseball game tells you almost nothing of your team.

  

[#34](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#34) [John Beamer](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=John%20Beamer)) **2007/05/31 (Thu) @ 00:19**

Agreed. I don’t have the data to hand but for soccer 1 game tells you much more about your team than 1 game in baseball. That is why only a select few teams have won the World Cup.

  

[#35](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#35) [John Beamer](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=John%20Beamer)) **2007/05/31 (Thu) @ 00:56**

My calcs for soccer based on EPL data—and ignoring tie games.

true sd = 0.157  
obs sd = 0.182

Sor for 1 game, 1 random SD=.5 obs sd =.524

Reliability = 0.09

  

[#36](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#36) [John Beamer](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=John%20Beamer)) **2007/05/31 (Thu) @ 01:40**

To follow up on Guy/28:

True strength variance: 0.75

sig/noise: 1.72

  

[#37](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#37) Guy ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=Guy)) **2007/05/31 (Thu) @ 02:04**

To clarify, all I did was take the Noll-Scully ratios reported by Berri, and then multiply by the SD(error) for that league, to get the observed variance. I think Berri used all the 20th century data for each league, but I can’t find the journal article now. So if you’re using more recent league data, results will differ a little.

\* \*

Tango, to clarify your post 30: are you saying that the correlation between team records and true talent will be 1-(SD(true)/SD(error)? And that this is best metric for measuring the “accuracy” of observed team records?

\* \*

Your definition of “drama” is interesting. Do fans want uncertainty, or do they want the best team to win? I think we want uncertainty in any given game we observe (or, why watch?), but we also want good teams to win. Interesting question…..

  

[#38](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#38) John ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=John)) **2007/05/31 (Thu) @ 02:06**

Sounds like true talent variance is much greater in Europe than in MLS. Does that seem plausible to you?

  

[#39](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#39) Guy ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=Guy)) **2007/05/31 (Thu) @ 02:33**

Oops, post 38 is mine—should be addressed to John.

  

[#40](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#40) [John Beamer](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=John%20Beamer)) **2007/05/31 (Thu) @ 02:36**

John—it is possible.

W/L record for 2006 Dallas (leading western team in MLS) was 16-4-12, and 15-12-7 for DC united. And those are the top teams.

In EPL Manyoo were 28-5-5... so, yes, that does seem superficially plausible

Oh, and a couple of years ago arsenal went 38 games undefeated

  

[#41](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#41) Guy ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=Guy)) **2007/05/31 (Thu) @ 03:38**

FYI: you can find the Berri et. al. article here: [http://www.csub.edu/~dberri/BerrietalJEI2005.pdf](http://www.csub.edu/~dberri/BerrietalJEI2005.pdf).  
The table showing Noll-Scully for all sports is on page 4 of the pdf. There’s also a pre- and post-1990 breakdown a couple pages later.

\* \*

John: He shows a historical Noll-Scully of about 1.50 for European soccer leagues, which would imply an observed SD of.133 if season =32 games. Quite different from your.182. Maybe talent spread has grown in recent years? Or you’re looking at different leagues?

In any case, a 32-game schedule can work if talent differences are large, but otherwise luck is playing a very big role.

  

[#42](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#42) Guy ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=Guy)) **2007/05/31 (Thu) @ 03:44**

Sheesh, 37 should read:  
Tango, are you saying that the correlation between team records and true talent will be 1-(SD(error)/SD(observ))^2?

  

[#43](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#43) [tangotiger](http://www.tangotiger.net/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=tangotiger)) **2007/05/31 (Thu) @ 04:02**

Guy, close. The correlation of two sets of observations will correlate to 1 - var(luck)/var(obs).

I would guess that the correlation between true and one set of observations would be the square root of the above equation.

So, if you have a 69-game baseball season (say take games 1,3,5,7…137) and you have another 69-game baseball season (say take games 2,4,6,8…138) where the actual true talent did not change (which this little experiment would hope to capture), I would expect the correlation between those two sets of mini-seasons to equal 0.50.

The random is.5/sqrt(69)=.06. And we know the true is.06.

Grab about 10 such seasons, and I’d bet it’d work.

  

[#44](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#44) [John Beamer](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=John%20Beamer)) **2007/05/31 (Thu) @ 04:15**

Using the most generous definition of win% as (W)/(W+T+L) I get:

England st dev:.147  
Italy st dev:.161  
Spain st dev:.137

  
Those are the big 3 European leagues. Perhaps the other drag it down, or perhaps 2007 was an unbalanced year. Who knows.

The other factor in European soccer is points system over-rewards wins: win is 3 pts, tie is 1 pt, loss is 0. This favors teams winning teams more.

In the EPL, because of the funny metric calc only four teams have a W% > 0.5. They are:

0.74 Man U  
0.63 Chelsea  
0.52 Liverpool  
0.50 Arsenal

The spread in talent at the top is huge. These four have been the top four teams for a number of years. One of these four teams has won the league every season since 1987 (bar one year in 1995).

You can’t argue that there is competitive balance in (English soccer. The same is true in many other leagues too.

Another example—take Scotland. The last time that neither Rangers nor Celtic won the title was 1986!

MLS may be different. Talent is definitely concentrated in Europe and Latam. I’ve seen a few MLS games and the quality difference is probably MLB to A/AA.... that big.

  

[#45](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#45) [tangotiger](http://www.tangotiger.net/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=tangotiger)) **2007/05/31 (Thu) @ 04:23**

Because I have the 2000-06 game data handy, I did a quick test. I looked at all games through Aug 31 of each season. This gives me an average of 66.8 games (implying 1 SD =.061). If the true talent is actually 1 SD =.06, then our sample-to-sample correlation should be close to r=.50.

Rather than doing games 1,3,5 correlated to games 2,4,6, etc, I simply did home games and away games. It introduces an extra bias, but, what the heck. I’m just trying to illustrate a point.

Anyway, the correlation of the 210 teams in my sample was r=.47, which is fairly close to what we expected.

\*\*\*

Aside note (for around 135 games):  
homeWins = roadWins\*.42+.35

So, a.460 road record matches to a.540 home record.

Interestingly, a.600 road record matches a.600 home record. That is, if you see a team with a.600 road record, they likely will have a.600 home record.

Hard to believe? Of the 18 teams with a.580 to.620 road record (through Aug 31 of each season of 2000-2006), they had a road record of.600 and a home record of.585.

Of the 33 teams with at least a.553 record on the road (average of.600), their average home record was.595.

  

[#46](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#46) [Phil Birnbaum](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=Phil%20Birnbaum)) **2007/05/31 (Thu) @ 04:29**

\>That is, if you see a team with a.600 road record, they likely will have a.600 home  
record. Hard to believe?

It was, until I thought about it... by regression to the mean, a.600 road team observed is probably really something like a.560 road team in talent. And a.560 road team in talent is probably a.600 home team.

Neat! I probably wouldn’t have guessed that if you hadn’t told me.

  

[#47](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#47) [tangotiger](http://www.tangotiger.net/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=tangotiger)) **2007/05/31 (Thu) @ 04:33**

Actually, with my dataset, we need to regress 50%. So, a.600 road team, where the average if.460, would regress about 70 points down to.530. So, a true.530 road is a.600 home.

Follows very well with the.460/.540 average.

  

[#48](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#48) [Phil Birnbaum](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=Phil%20Birnbaum)) **2007/05/31 (Thu) @ 04:38**

Perfect, even better!

  

[#49](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#49) [Tangotiger](http://www.tangotiger.net/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=Tangotiger)) **2007/09/21 (Fri) @ 21:28**

[http://sciencenews.org/articles/20070908/mathtrek.asp](http://sciencenews.org/articles/20070908/mathtrek.asp)

> The recent study found that to give a 90 percent chance that the strongest team wins, each baseball team would have to play about 15,000 games in a season.

My post #4 is the one that most intersects with the above.

If you have 15,000 games, the var(luck) = (.5\*.5/15000) =.004^2. And if var(true)=.060^2, then the luck factor is (.004^2)/(.004^2+.060^2)=.0044

I find the claim hard to believe that you would need 15,000 games for the team with the most true talent to have the better record only 90% of the time.

But, I don’t know how to directly translate the.0044 into something.

  

[#50](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#50) tangotiger ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=tangotiger)) **2007/09/26 (Wed) @ 00:38**

[http://sabermetricresearch.blogspot.com/2007/09/oversimplified-competitive-balance.html](http://sabermetricresearch.blogspot.com/2007/09/oversimplified-competitive-balance.html)

  

[#51](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#51) [Tangotiger](http://www.tangotiger.net/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=Tangotiger)) **2007/10/09 (Tue) @ 04:11**

[http://sabermetricresearch.blogspot.com/2007/10/how-often-does-best-team-win-pennant.html](http://sabermetricresearch.blogspot.com/2007/10/how-often-does-best-team-win-pennant.html)

  

[#52](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#52) [Tangotiger](http://www.tangotiger.net/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=Tangotiger)) **2008/03/11 (Tue) @ 22:01**

Here’s the spread in talent in cricket, using the technique I introduced here:

[http://pappubahry.blogspot.com/2008/03/meaningfulness-of-tests-and-odis.html](http://pappubahry.blogspot.com/2008/03/meaningfulness-of-tests-and-odis.html)

  

[#53](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#53) Tangotiger ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=Tangotiger)) **2009/08/20 (Thu) @ 11:37**

Bumping for other thread…

  

[#54](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#54) [Texas\_Dawg](http://www.pennwagers.com/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=Texas_Dawg)) **2010/10/01 (Fri) @ 02:03**

I took the first 12 games of all 120 D1A college football teams for 2009 and came up with a standard deviation of.231 and thus var(observed) of.053. Var(random) at 12 games is.021 so var(true) is.032. The number of games to get r=.5 thus comes out to 244.

  

[#55](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#55) [Jesse](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=Jesse)) **2011/10/02 (Sun) @ 09:29**

I ran this for 2010 college football (1-A) and 2010-11 college basketball. I came up with about the same numbers as #54 did for football, but by my understanding, that comes out to about 8 games in football for r=.50.

In basketball, I got a var(obs) of.032, var(rand) of.00795, and var(true) of.024. This gives a result of a little more than 10 games needed for r=.50.

  

[#56](https://www.insidethebook.com/ee/index.php/site/comments/true_talent_levels_for_sports_leagues/#56) Stranger ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=Stranger)) **2011/10/14 (Fri) @ 22:36**

One thing is being forgotten here, which is the affect of trades on teams, and the different points in the seasons that trade deadlines happen.

For example, the NHL trade deadline comes after about 77% of the league’s games have been played making what appears to be a bad team much better. So a team that made a big trade and wound up 6th or 7th might really be better than their standing.

The NFL’s trade deadline comes after about 38% of the games have been played, giving teams more of a chance to gel.

  
Commenting is not available in this channel entry.

[<< Back to main](http://www.insidethebook.com/ee/index.php)

  

#### Latest...

**COMMENTS**

Feb 11 02:49  
[You say Goodbye… and I say Hello](http://www.insidethebook.com/ee/index.php/site/comments/you_say_goodbye_and_i_say_hello)

Jan 25 18:36  
[Blog Beta Testers Needed](http://www.insidethebook.com/ee/index.php/site/comments/blog_beta_testers_needed)

Jan 19 02:41  
[NHL apologizes for being late, and will have players make it up for them](http://www.insidethebook.com/ee/index.php/site/comments/nhl_apologizes_for_being_late_and_will_have_players_make_it_up_for_them)

Jan 17 15:31  
[NHL, NHLPA MOU](http://www.insidethebook.com/ee/index.php/site/comments/nhl_nhlpa_fail_basic_math)

Jan 15 19:40  
[Looks like I picked a good day to suspend blogging](http://www.insidethebook.com/ee/index.php/site/comments/looks_like_a_picked_a_good_day_to_suspend_blogging)

Jan 05 17:24  
[Are the best one-and-done players better than the worst first-ballot Hall of Famers?](http://www.insidethebook.com/ee/index.php/site/comments/are_the_best_one_and_done_players_better_than_the_worst_first_ballot_hall_o)

Jan 05 16:52  
[Poll: I read eBooks on…](http://www.insidethebook.com/ee/index.php/site/comments/poll_i_read_ebooks_on)

Jan 05 16:06  
[Base scores](http://www.insidethebook.com/ee/index.php/site/comments/base_scores)

Jan 05 13:54  
[Steubenville High](http://www.insidethebook.com/ee/index.php/site/comments/steubenville_high)

Jan 04 19:45  
[â€œThe NHL is using this suit in an attempt to force the players to remain in a unionâ€?](http://www.insidethebook.com/ee/index.php/site/comments/the_nhl_is_using_this_suit_in_an_attempt_to_force_the_players_to_remain_in_)

---

[![](http://imgs.xkcd.com/comics/sports.png)](http://xkcd.com/904/)

---

[![](http://www.insidethebook.com/ee/images/uploads/VLA_vs_SOB_plot_small2.JPG)](http://www.insidethebook.com/ee/index.php/site/comments/launch_angle_speed_off_the_bat_trajectory/) [![](http://www.sonsofsamhorn.net/wiki/images/4/47/Guide2.gif)](http://fastballs.wordpress.com/2010/04/18/a-pitchfx-primer/)