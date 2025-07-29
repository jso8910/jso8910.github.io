---
title: Is ABS truly ready for prime time? — An analysis of the accuracy of the ABS system
permalink: sabermetrics/401/2025-07-25-abs-acc
category: Intro To Sabermetrics/401 Philosophies and Discussions
tags:
  - article
  - sabermetrics
  - sabermetrics-401
publish: true
share: true
Section: "[[401 Philosophies and Discussions]]"
publishDate: 2025-07-25
modified: 2025-07-25
startedDate: "[[2025-07-25]]"
custom-tags:
  - "[[01 Tags/Baseball|01 Tags/Baseball]]"
---
TL;DR: ABS is just as bad as if not worse than human umpires on super close pitches. It also has a bias towards being hitter-friendly in its calls. On less close pitches, it is (predictably) amazing.

Before I get into this post, I want to caveat something: I am the biggest fan of ABS. I want robo umps very badly. I also love everything Statcast. So keep in mind that this post comes from a true believer in these technologies and I'm not just hating for the sake of it. However, I think the limitations of these technologies is actually quite large—larger than I ever realized.
# Background Info — HawkEye Error and Statcast Post-Processing
On every pitch, what the ABS system receives is a tracked location of a pitch. This tracked location of the pitch can be described in terms of two things: the true location of the pitch and a random error. Tracked location = true location + random error. This reflects that the HawkEye system is not able to perfectly know the exact location (true location) of a pitch without some error.

What's important to understand is what this random error in pitch tracking looks like. This error (or "noise") has both a random magnitude and a random direction (as suggested by my describing it as "random" error), meaning a pitch is just as likely to be tracked by HawkEye as being above its true location and below its true location. This random error term is what allows ABS to be incorrect.

A few hours after a game, this data by Statcast through post-processing with the goal of reducing the random error. I'm not sure what happens in this process—I don't know if it's done by humans or if it's simply looking over the camera tracking data again. But the point is that MLB updates the locations of pitches after a game. These updated pitch locations are more accurate. And this is why you might see a call that, according to MLB Gameday, was a missed call, but something like Umpire Scorecards doesn't register as being a missed call—because the location of the pitch was adjusted some time the night after the game.

In this post, I will be operating under the (likely flawed—tell me just how flawed in the comments) assumption that this adjusted data is perfectly accurate. I don't think this assumption needs to be fully true for this analysis to be valid, though—it just needs to be consistently *more* accurate than the initial data used by the ABS challenge system for the analysis to have validity.
# Methodology
For this post, I compared accuracy rates of ABS challenged pitches in 2025 Spring Training and accuracy rates in the 2024 regular season based on distance from the strike zone. The distance to the strike zone is measured as follows: for pitches in the strike zone, the distance required to take the pitch fully out of the strike zone, and for pitches outside the strike zone, the distance required to put the pitch partially in the strike zone.

For the data in 2024, a call missed means it was called a strike but should've been called a ball, or vice versa. For the 2025 spring training data, a call missed means a pitch was challenged, and ended up a strike when it should've been a ball or vice versa. For example, if a pitch was called a strike, then challenged, and upheld as a strike by the ABS system, but the post-processed data shows the pitch as being a ball, that would be counted as a missed call.
# Data

| Pitch Call | Absolute distance of ball from edge of zone | Percent of calls missed |
| :--------- | :------------------------------------------ | :---------------------- |
| Ball       | 0 – 0.5 inches                              | 38.9%                   |
| Strike     | 0 – 0.5 inches                              | 42.1%                   |
| Ball       | 0.5 – 1 inches                              | 28.3%                   |
| Strike     | 0.5 – 1 inches                              | 34.4%                   |
| Ball       | 1 – 2 inches                                | 15.7%                   |
| Strike     | 1 – 2 inches                                | 23.1%                   |
**2024 Umpire Accuracy Data (control)**

| ABS In-Game Challenge Result | Absolute distance of ball from edge of zone | Percent of calls missed (according to post-processed data) |
| :--------------------------- | :------------------------------------------ | :--------------------------------------------------------- |
| Ball                         | 0 – 0.5 inches                              | 43.2%                                                      |
| Strike                       | 0 – 0.5 inches                              | 34.1%                                                      |
| Ball                         | 0.5 – 1 inches                              | 28.2%                                                      |
| Strike                       | 0.5 – 1 inches                              | 13.8%                                                      |
| Ball                         | 1 – 2 inches                                | 5.6%                                                       |
| Strike                       | 1 – 2 inches                                | 0%                                                         |
**2025 ABS challenge system accuracy data**
# Analysis
From this data, a few things are clear:

First, ABS performs best on pitches it thinks are strikes—i.e. it is less likely to incorrectly classify a pitch as a strike than as a ball. Intuitively this makes quite a bit of sense. For a ball to erroneously be called a strike, the error in the tracking system must be in a very specific direction. For a strike on the edge of the zone to be erroneously called a ball by ABS, the error can be in any number of directions. This is due to the nature of close strikes and balls. A close ball will be entirely outside of the strike zone, meaning there is only one direction for error which pushes it towards the strike zone. However, a close strike will still be *nearly* entirely outside of the strike zone, meaning there is still only one direction which pushes it towards the strike zone, and every other direction takes it away from the strike zone.

The impact of this is very interesting: it creates a bias towards balls being called by ABS. Random error is more likely to push a pitch towards being called a ball than a strike, so ABS ends up being hitter friendly.

This effect should, however, reverse on strikes that are 1.45 inches (the radius of a baseball) or more from the edge of the strike zone, because more than half the ball will be in the strike zone (and thus more directions of random error move the tracked location of the pitch towards the strike zone than away from it). However, ABS is incredibly unlikely to have 1.45 inches of error, and it is unlikely to get any call with a distance of 1.45 inches to the strike zone wrong, so the reversing of this bias has little to no effect, meaning we are left only with the hitter-friendly bias.

Secondly, what is concerning is the lack of accuracy improvement (and even an accuracy regression for very close balls) on close pitches, especially balls. On pitches 0 – 0.5 inches from the strike zone, there is practically no benefit to using ABS over human umpires. And I haven't looked deep into the data, but I suspect that umpires likely are more consistent with their misses, while ABS misses on these ultra-close pitches will be nearly truly random. Similarly on pitches 0.5 – 1 inch from the edge of the strike zone, I'm not convinced that ABS provides a large enough benefit. It has a clear bias towards calling balls and being hitter friendly (which is a large part of why the accuracy is so high for strikes in this distance bucket—so you shouldn't be fooled by the low missed call rate and assume that's necessarily a massive win for ABS) which ultimately means that it has a negative impact on the game while also still being inconsistent \~20% of the time, even for these somewhat close pitches.

The final observation is much shorter (and more positive) than the rest: ABS is definitely better overall than human umpires and it is very good at correcting ergregious misses. This should be surprising to no one.

# Conclusion

While ABS is great, it has two major flaws
1. A lack of consistency on close pitches
2. A bias towards calling balls rather than strikes and being hitter-friendly
Some have suggested, for solving the first problem, to only overturn a pitch if it falls outside of a certain range—only fix ergregious misses. Until I did this research, I was staunchly opposed to that idea. After doing this research, I am still staunchly opposed to it—just slightly less so. There is no way to set a fair threshold for what an "ergregious" miss is, and doing so will merely complicate the optics and messaging surrounding ABS due to how arbitrary this threshold will rightly feel. I especially don't like this solution because MLB would have to update the rules surrounding challenges every time they improve the accuracy of pitch tracking.

For the second problem, there's a few things to consider. First is that MLB has likely already accounted for this phenomenon, intentionally or not. Either the smart people in charge of designing the boundaries for the ABS zone realized this bias towards calling balls and accounted for that in their design of the zone (deliberately accounting for it) or player feedback on the size of the zone which they used to refine the strike zone led them to make the zone larger than they otherwise would have if the system was 100% accurate. Second, however, is the biggest issue with this hitter-friendly nature: it isn't consistent. The goal of ABS is to create consistency in calling balls and strikes. However, since this bias comes as a byproduct of random error, it is inconsistent by design. Balls will be called disrpoportionately often on close pitches (distance from zone < 1.45 inches), but they will not be called consistently.

Should we use the challenge system if it is clearly flawed? Probably, yes. And either way, it doesn't matter—the challenge system is almost certainly coming in 2026, whether you like it or not after reading this post.

# Questions to Answer

This analysis is far from perfect. There's some questions which need answered in order to figure out just how valid it is.
1. How much less accurate is the HawkEye system used in spring training parks? Will ABS be more accurate when it is used in real MLB stadiums?
2. Just how much more accurate does the post-processing on Statcast data make the tracked pitch locations?
3. Is the error in HawkEye data truly random? Or is there also some systematic error in the pitch tracking.