---
title: Odds Ratio Method track runners and baseball
source: https://www.insidethebook.com/ee/index.php/site/comments/odds_ratio_method_track_runners_and_baseball/
author:
  - "[[/content/wiki/TangoTiger|TangoTiger]]"
publishedDate: 2010-08-03
created: 2025-07-29
description: 
custom-tags:
  - "[[01 Tags/Baseball|01 Tags/Baseball]]"
  - "[[Log5|Log5]]"
tags:
  - wiki_source
publish: true
share: true
category: wiki/sources
---

| Original Source                                                                                                                                        | Author         | Published  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------- | ---------- |
| [Odds Ratio Method track runners and baseball](https://www.insidethebook.com/ee/index.php/site/comments/odds_ratio_method_track_runners_and_baseball/) | [[/content/wiki/TangoTiger|TangoTiger]] | 2010-08-03 |

---
## Odds Ratio Method: track runners and baseball

By [Tangotiger](https://www.insidethebook.com/ee/index.php/site/comments/odds_ratio_method_track_runners_and_baseball/), 04:59 PM

Let’s say you have a runner that runs the 100m, and we observe his running time as 10.0 seconds, with one SD = 0.2 seconds. Let’s call this runner Aurora. And we have a second runner who averaged 10.1 seconds, witth one SD = 0.2 seconds. This runner is called Bolt.

How often will Aurora beat Bolt? Running a simulator 10,000 times, I get.640. I’m sure there’s a nice probability calculator that will give us the same result (if so, please share).

Let’s say we have a third runner, called Canuck, and he runs in 10.2 +/- 0.2. Bolt will beat him.640 times.

What are our expectations of Aurora beating Canuck? Well, the Odds Ratio suggests the following:

---

.640/.360 = 1.778 = odds ratio of Aurora to Bolt  
.640/.360 = 1.778 = odds ratio of Bolt to Canuck

1.778 x 1.778 = 3.16 = odds ratio of Aurora to Canuck

Therefore, under these assumptions, Aurora wins.760.

And in reality, how often would a runner with a 10.0 +/- 0.20 time beat a runner with 10.2 +/- 0.20 time? The simulator says:.760.

So far, so good. Let’s keep going, and have these competitors to Aurora, with the following expectation using the Odds Ratio;

Aurora facing  
0.500 10.0 Aurora  
0.640 10.1 Bolt  
0.760 10.2 Canuck  
0.849 10.3 Doppler  
0.909 10.4 Echo  
0.947 10.5 Flash  
0.969 10.6 Gonzalez  
0.982 10.7 Hermes  
0.990 10.8 Iceman  
0.994 10.9 Jaguar  
0.997 11.0 Kwicksilver

So, when Aurora faces Doppler and his 10.3 +/- 0.2 time,Aurora will win.849 times, according to the Odds Ratio method. But, what would happen in reality?

Sim ORM Aurora facing  
0.500 0.500 10.0 Aurora  
0.640 0.640 10.1 Bolt  
0.760 0.760 10.2 Canuck  
0.852 0.849 10.3 Doppler  
0.922 0.909 10.4 Echo  
0.962 0.947 10.5 Flash  
0.983 0.969 10.6 Gonzalez  
0.994 0.982 10.7 Hermes  
0.998 0.990 10.8 Iceman  
0.9995 0.994 10.9 Jaguar  
0.9999 0.997 11.0 Kwicksilver

As you can see, right around the 10.4 mark or so, the Odds Ratio method breaks down. If the breakdown point can be thought of as 2 \* SD, the bright folks out there can tell us.

So, what about baseball? Well, in baseball, matchups are not in win% but in OBP. Let’s say that the average hitter has an OBP of.340, +/-.030, and the average pitcher+fielders have an OBP of.340 +/-.030. It would seem, therefore, that the Odds Ratio Method would work as long as the difference in the mean of the players is within… well, some number. (And if you think about it some more, a player doesn’t have an OBP talent level, since OBP is really a sort of win%. Each player would have some number, similar to a track runner’s time number. So, in order to model baseball, you would need to figure out how to give each hitter and pitcher a number such that we can try to figure out how much the Odds Ratio Method can be used and when it breaks down.)

• • •

[#1](https://www.insidethebook.com/ee/index.php/site/comments/odds_ratio_method_track_runners_and_baseball/#1) [Kincaid](http://www.3-dbaseball.net/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=Kincaid)) **2010/08/04 (Wed) @ 01:57**

> How often will Aurora beat Bolt? Running a simulator 10,000 times, I get.640. Iâ€™m sure thereâ€™s a nice probability calculator that will give us the same result (if so, please share).

Since you are basically subtracting 2 normal distributions, you can do the following to get a distribtion for the difference between the 2 times:

Subtract the two means. This will be the mean of the new distribution:

10.0 - 10.1 = -0.1

Add the variances of the two distributions. This will be the variance of the new distribution.

.2^2 +.2^2 =.08

convert to SD:

sqrt(.08) =.28

So your new distribution has a mean of -0.1 and a SD of.28. Plug that into a normal distribution, find the cumulative probability for x<0 (negative difference means Aurora was faster), and you get.638. Doing the same thing for your whole table (all you have to do is change the mean of the new distribution, since the SD will be the same for all match-ups), you get Aurora’s odds against each opponent:

10.1 - 0.6382  
10.2 - 0.7602  
10.3 - 0.8556  
10.4 - 0.9214  
10.5 - 0.9615  
10.6 - 0.9831  
10.7 - 0.9933  
10.8 - 0.9977  
10.9 - 0.9993  
11.0 - 0.9998

  

[#2](https://www.insidethebook.com/ee/index.php/site/comments/odds_ratio_method_track_runners_and_baseball/#2) [Tangotiger](http://www.tangotiger.net/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=Tangotiger)) **2010/08/04 (Wed) @ 02:07**

Fantatic stuff, thanks. An almost perfect match to the simulator.

  

[#3](https://www.insidethebook.com/ee/index.php/site/comments/odds_ratio_method_track_runners_and_baseball/#3) [Tangotiger](http://www.tangotiger.net/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=Tangotiger)) **2010/08/04 (Wed) @ 03:48**

Using Kincaid’s insight here, I was able to construct an OBP model and compare to Odds Ratio Matchup. I’ll give you the summary: the ORM works.

Here’s what I did.

1\. Create a random distribution of 1000 hitters, with mean 0, and SD 1. (My best hitter was +2.6745, and the bottom was -3.2191… doesn’t matter what it is for the moment.)

2\. Create a pitcher with mean of 0. (This will change for different pitchers.)

3\. Find the difference in the two means for the 1000 hitter/pitcher pairs. In this case (pitcher mean 0), you will get back exactly what you have from Step 1.

4\. Treat an “X” value of -4.3266 or less as being a time on base. Any number above that as an out. Use a distribution with an SD of 10. (Why those numbers? Well, I get back something sensible.)

5\. Calculate. So, for our top hitter, he ends up with a.434 OBP against the average pitcher. The bottom hitter gets a.225 OBP. The mean of the 1000 hitters is exactly.33333, with an SD of these 1000 hitters of.0364. This is what I meant about getting back somethign sensible.

6\. Now, let’s change step 2 for a pitcher with a mean of +2.

7\. Re-calculate. Now we get those 1000 hitters with an OBP of.2644 (that means Pedro’s opponent OBP is.2644), with an SD of those 1000 hitters of.0328. The top hitter has an OBP of.357 and the bottom hitter has an OBP of.170.

8\. Compare to what the Odds Ratio Method says. Well, ORM says those 1000 hitters against someone with a true talent OBP of.2644 will have an overall OBP of.2648, and an SD of.0319. The top hitter has an OBP of.356 and the bottom has an OBP of.173.

The Odds Ratio Method works! I tried different combination of pitcher talent, even pretty extreme levels, and the ORM always came very very close to what the more robust method (using Kincaid’s insight) suggested.

  

[#4](https://www.insidethebook.com/ee/index.php/site/comments/odds_ratio_method_track_runners_and_baseball/#4) Bob ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=Bob)) **2010/08/04 (Wed) @ 05:17**

In step 4, how did you come up with those numbers - what do they represent?

  

[#5](https://www.insidethebook.com/ee/index.php/site/comments/odds_ratio_method_track_runners_and_baseball/#5) Tangotiger ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=Tangotiger)) **2010/08/04 (Wed) @ 07:08**

Trial and error numbers to give me a model to match reality.

Now, that “10” for the SD is very interesting. Given what Kincaid told us about adding the variances of two distributions, this means that the SD of each batter’s PA and the SD of each pitcher is a 7 (sqrt of 7^2 + 7^2 equals 10), whereas the SD of all the batters in the league is a 1. In short, there is such a wide spread in outcomes, but such a short spread in talent, that anyone can get on base at any time.

If I was smarter, I’m sure I could come up with something that explains it, such that the SD of each outcome should be 0.25 or something (would I do 0.3333 x 0.6667 = 0.2222?), and so when you compare that number to the spread in talent that I used, which was.0328, then that ratio is 6.8.

Anyway, wish they taught this at school in these terms.

I’ll just wait for the smarty pants amongst you to explain it to us.

  

[#6](https://www.insidethebook.com/ee/index.php/site/comments/odds_ratio_method_track_runners_and_baseball/#6) [Kincaid](http://www.3-dbaseball.net/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=Kincaid)) **2010/08/05 (Thu) @ 10:43**

What Tango’s model is doing is basically taking a binomial probability (OBP), and representing it as a clash of two normal distributions (one for the hitter, and one for the pitcher). You assign the hitter and the pitcher each a normal distribution, randomly select a number from each distribution, and then whichever number is greater wins (except instead of just doing whichever is greater, it is doing it as whether the difference is greater than -4.3266). So, what he ends up with is a hitter who has a distribution with a mean of -1 and a standard deviation of 7, and a pitcher with a mean of 0 and a standard deviation of 7, and you stick that into the combined normal distribution, and you end up with an OBP of.370 (in Tango’s model, a negative mean for the hitter is better, because you are more likely to be less than -4.3266).

So, what do those specific numbers mean? Pretty much nothing. When Tango modeled the sprinters, he started with a normal distribution that modeled each sprinter’s time, and then worked forward to get the binomial probability of winning the race. Each sprinter had a time randomly picked from his distribution, and whichever time was faster won. With OBP, there is no meaningful rating to start with. You can randomly pick a rating from both the hitter’s and pitcher’s distributions, and see which is bigger, but those numbers you pick won’t actually mean anything. Because of that, we can’t really start with a logical distribution and work forward (because there is nothing logical for the distribution to represent). Instead, we have to just pick arbitrary distributions that will lead to the final binomial results we want, while accepting the figures don’t really represent anything.

For our binomial model of OBP, we are going to be modeling the likelihood of outcomes for a single PA between a given hitter and pitcher (just like we modeled the likelihood of the outcomes of a race between two sprinters). Since the actual distributions we assign each player aren’t meaningful, we can just pick whatever we want for their mean and SD. Tango chose 0 for the mean of both the average pitcher and the average hitter, and 7 for the SD of outcomes for each. He figured out that with those numbers, he had to find the probability that x < -4.3266 to get reasonable numbers.

  

[#7](https://www.insidethebook.com/ee/index.php/site/comments/odds_ratio_method_track_runners_and_baseball/#7) [Kincaid](http://www.3-dbaseball.net/) ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=Kincaid)) **2010/08/05 (Thu) @ 10:49**

How do you get -4.3266? Basically, you take your two distributions and subtract them, just like for the sprinters. The average pitcher has a mean of 0 and a SD of 7, and the average hitter has a mean of 0 and a SD of 7, so when you subtract them, you find the difference in the means (0-0=0), and then add the variances and convert to SD (sqrt(7^2+7^2)=10), and now you have a distribution with a mean of 0 and a SD of 10. When you pick a random number from that distribution, it has to have a probability of.333 of coming up below that number and a probability of.667 of coming up higher than that number (because it has to represent the probability of getting on base, which we want to come out to about.333). Just plug the formula into Excel (or whatever you use):

NormInv(.333,0,10) = 4.31644

Not exactly the same as Tango found, but extremely close for just using trial and error. And that’s why you need to use -4.3xxx if you are using 0 as the mean for the average pitcher and the average hitter, and using 10 as the combined standard deviation. As for why to use -4.3xxx and 10, well, you don’t really have to; you can choose whatever you want for the standard deviation, and then plug it into the formula to get a new number. Tango happened to use 10 as his SD, so he got -4.3xxx. Remember that these figures are completely arbitrary.

  
Now, that gives us a distribution to represent the OBP of one hitter against one pitcher, if we already know the mean for both. Tango’s model also includes a distribution for the spread of talent in hitters, and he finds that the spread of this distribution is much smaller (tenfold) than the spread of the distribution of outcomes for a single hitter/pitcher matchup. To figure out how to get that, let’s look at our.370 OBP hitter. Remeber how we found the number -4.31644? Do the same thing, but use.370 instead of.333, and you get -3.31…, or about 1 greater than the number we found for the average hitter. That means that the.370 hitter is shifted 1 over from the average hitter in our distribution..370 is.037 points from average. In Tango’s model, he set it up so the SD for OBP in the league is.037 points, so the.370 hitter is 1 SD away from average. That means 1 SD = 1 for this model, because when we took a hitter 1 SD away from the league average OBP, it shifted his mean over by 1 from our average hitter’s distribution.

That’s pretty much how you would end up with the figures Tango uses, except he started with the 1 for SD in hitter talent and then worked in the other numbers by trial and error around that (so really, once he chose 1 for the SD for his spread of talent, he had to use 10 for the SD of outcomes of each PAs, but he could just as easily choose a different pair of numbers for his 2 SDs, and they wouldn’t have to be 1 and 10).

  
It makes sense that the SD of the outcome of each PA should be relatively big. The SD of outcomes for a single PA is represented by the formula for SD of a binomial, sqrt(npq). n is just 1, because we are looking at the standard deviation of outcomes of a single PA, so if p=.333, then the SD will be sqrt(1\*.333\*.667) =.471 (if it seems odd for it to be that high, simulate 10,000 PAs with a.333 probability of getting on base, record each PA as either 1 or 0 times on base, and then take the SD of the outcomes; it will be right around.471)..471 is way bigger than the spread of talent in the league in OBP. The SD of outcomes for a single PA really is huge, relative to the spread of OBP talent, so it’s no surprise that it ended up that way in this model.

  

[#8](https://www.insidethebook.com/ee/index.php/site/comments/odds_ratio_method_track_runners_and_baseball/#8) Tangotiger ([see all posts](http://www.insidethebook.com/ee/index.php/site/member_posts/?name=Tangotiger)) **2011/06/09 (Thu) @ 07:45**

Bumping… great work by Kincaid.

  
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

[![[/content/00 internal files/Assets/9dff3c7151a4818291a3a3a182380dd6_MD5.png|9dff3c7151a4818291a3a3a182380dd6_MD5]]](http://xkcd.com/904/)

---

[![[/content/00 internal files/Assets/46b3aae1722c62c3bbb513ca1e5c4ea0_MD5.jpg|46b3aae1722c62c3bbb513ca1e5c4ea0_MD5]]](http://www.insidethebook.com/ee/index.php/site/comments/launch_angle_speed_off_the_bat_trajectory/) [![](http://www.sonsofsamhorn.net/wiki/images/4/47/Guide2.gif)](http://fastballs.wordpress.com/2010/04/18/a-pitchfx-primer/)