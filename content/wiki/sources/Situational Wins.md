---
title: Situational Wins
source: https://tangotiger.net/wpali.html
author: 
publishedDate: 
created: 2025-08-03
description: 
custom-tags:
  - "[[01 Tags/Baseball|01 Tags/Baseball]]"
tags:
  - wiki_source
publish: true
share: true
category: wiki/sources
---

| Original Source                                       | Author         |
| ----------------------------------------------------- | -------------- |
| [Situational Wins](https://tangotiger.net/wpali.html) | [[../TangoTiger|TangoTiger]] |

---

In The Book, I introduced a measure called [wOBA](http://www.insidethebook.com/woba.shtml), which is excerpted on my site. The metric is very basic:

```
wOBA = (0.72 x NIBB + 0.75 x HBP + 0.90 x 1B + 0.92 x RBOE + 1.24 x 2B + 1.56 x 3B + 1.95 x HR) / PA
```
PA is plate appearances. NIBB is non-intentional walks. RBOE is reaching base on error. So that it looks a bit more manageable, I'm going to limit the number of terms and change the coefficients slightly as follows:
```
wOBA = (0.7 x BB + 0.9 x 1B + 1.3 x XBH + 2.0 x HR) / PA
```
XBH is doubles plus triples. Compare that to a simple version of OBP:
```
OBP = (1.0 x BB + 1.0 x 1B + 1.0 x XBH + 1.0 x HR) / PA
```
OBP is simply times on base, equally weighted, divided by PA. The 1.0 coefficient is superfluous in OBP. But, I put it in to align to the wOBA equation. What do we see here? wOBA undervalues BB compared to OBP, overvalues HR compared to OBP, and the singles and extra base hits follow a similar, if less extreme pattern. wOBA stands for Weighted On Base Average, to draw the analogy to OBP (On Base Percentage).

We of course accept that the trend line progression in wOBA is correct, but how do we know that the actual weights are correct? Why not.5 or.8 for the walk? Why not 1.5 or 3.0 for the HR? What these weights represent is the impact of those events relative to the out. So, a walk has an impact of +0.7 relative to the out, and the single is +0.9 relative to the out. The HR is +2.0 relative to the out. Are these relationships correct?

Linear Weights tells us that the run value of the walk is roughly +.30 runs, and the single is roughly.47 runs, the HR is 1.40 runs, and the out is roughly -.29 runs. So, the run value of the walk is +.59 relative to the out, the single is +.76, and the HR is +1.69. If we multiply each of these values by 1.18 (I'll get to that later), you get.7,.9, and 2.0. So, we see that the relative weights we have in wOBA correspond to Linear Weights run values for each event.

Let's start by using a standard batting line, which I'll simply define as similar to the [2008 MLB](http://www.baseball-reference.com/pi/bsplit.cgi?lg=ML&team=TOT&year=2008) average. It doesn't matter too much what you use, but keeping things closer to average is better. Here's what I'm using:

```
AB    H    2B    3B    HR    BB    K    HBP    SF    BA    OBP    SLG
540    145    30    3    16    50    100    5    5     0.269      0.333      0.424
```
That's a fairly standard hitting line for a player with 600 PA. If we take the.7 and multiply by the number of walks (and hit batters), we get.7 times 55 equals 38.5. Multiplying.9 by the number of singles (96) gives us 86.4. Doing the same for the 33 extra base hits and the 1.3 weight (42.9) and 16 HR and weight of 2.0 (32), and adding them all up we get: 38.5+86.4+42.9+32 equals 199.8, which we'll round to 200. If we simply add up the total number of times on base (145 plus 50 plus 5) we also get 200. So, all that we've done is recast the numerator in OBP to exactly match the 200, but by reweighting each component. This is what wOBA is all about.

You will notice that I multiplied each of the "runs above out" weights by 1.18. This was only done to align the numerator in wOBA to the numerator in OBP. My only interest here is to create a metric that mirrors OBP, but weights each component appropriately. And that's what was done here.

**Let's get very technical**

The Linear Weights run values I used earlier are based on the overall situation, and were tweaked a bit for illustrative purposes. Here are the actual overall Linear Weights values from The Book:

```
TABLE 1

1B    XBH    HR    BB    K    Out
0.475    0.803    1.397    0.323    -0.301    -0.299
```
The reality is that each event will impact each base/out state differently. A walk with 1B open and two outs is not the same compared to a walk with the bases loaded. So, also from The Book, here are the run values for each event, by base/out state:
```
TABLE 2

1B    2B    3B    Outs    1B    XBH    HR    BB    K    Out
--    --    --    0     0.41      0.67      1.00      0.41      (0.27)     (0.27)
--    --    --    1     0.28      0.45      1.00      0.29      (0.18)     (0.18)
--    --    --    2     0.14      0.23      1.00      0.14      (0.12)     (0.12)
1B    --    --    0     0.72      1.14      1.59      0.64      (0.41)     (0.49)
1B    --    --    1     0.49      1.01      1.71      0.41      (0.34)     (0.38)
1B    --    --    2     0.26      0.75      1.86      0.23      (0.26)     (0.26)
--    2B    --    0     0.72      1.01      1.36      0.41      (0.47)     (0.37)
--    2B    --    1     0.67      1.01      1.57      0.27      (0.38)     (0.37)
--    2B    --    2     0.72      1.00      1.77      0.13      (0.35)     (0.35)
--    --    3B    0     0.46      0.72      1.06      0.44      (0.54)     (0.37)
--    --    3B    1     0.60      0.78      1.33      0.30      (0.58)     (0.26)
--    --    3B    2     0.87      0.96      1.73      0.18      (0.38)     (0.39)
1B    2B    --    0     1.00      1.49      1.95      0.94      (0.63)     (0.65)
1B    2B    --    1     0.93      1.61      2.31      0.72      (0.53)     (0.59)
1B    2B    --    2     0.89      1.56      2.63      0.36      (0.48)     (0.48)
1B    --    3B    0     0.74      1.15      1.61      0.60      (0.68)     (0.56)
1B    --    3B    1     0.77      1.34      2.02      0.44      (0.73)     (0.49)
1B    --    3B    2     0.96      1.47      2.56      0.29      (0.56)     (0.56)
--    2B    3B    0     0.87      1.17      1.51      0.51      (0.55)     (0.37)
--    2B    3B    1     0.87      1.25      1.80      0.22      (0.83)     (0.44)
--    2B    3B    2     1.43      1.68      2.46      0.19      (0.66)     (0.66)
1B    2B    3B    0     1.05      1.58      2.01      1.00      (0.85)     (0.73)
1B    2B    3B    1     1.20      1.88      2.59      1.00      (0.86)     (0.72)
1B    2B    3B    2     1.47      2.15      3.27      1.00      (0.84)     (0.85)
```
As you can see in TABLE 2, in some base/out states, not only do the safe events have more impact, but so do the out events. That is, each base/out state is leveraged differently. If you look at the bases loaded, 2 out situation (the last line) and compare it to the overall Linear Weights line (TABLE 1), we see that each event can impact run scoring about two times to three times as great. On average, coming to bat with the bases loaded and 2 outs will have 2.8 times more impact than in an average situation. This figure is called the Leverage Index (LI). Here is the LI for each base/out state:
```
TABLE 3

1B    2B    3B    Outs     LI 
--    --    --    0     0.9 
--    --    --    1     0.6 
--    --    --    2     0.4 
1B    --    --    0     1.5 
1B    --    --    1     1.2 
1B    --    --    2     0.8 
--    2B    --    0     1.3 
--    2B    --    1     1.2 
--    2B    --    2     1.2 
--    --    3B    0     1.2 
--    --    3B    1     1.1 
--    --    3B    2     1.3 
1B    2B    --    0     2.1 
1B    2B    --    1     1.9 
1B    2B    --    2     1.7 
1B    --    3B    0     1.7 
1B    --    3B    1     1.7 
1B    --    3B    2     1.8 
--    2B    3B    0     1.5 
--    2B    3B    1     1.6 
--    2B    3B    2     2.2 
1B    2B    3B    0     2.3 
1B    2B    3B    1     2.5 
1B    2B    3B    2     2.8
```
Now, we can generate a batter's Linear Weights Run by base/out state. But as we see, since a PA has more impact in the higher leverages base/out states, then this means his run impact will be proportionately higher. A player who has a disproportionate number of PA in the higher leveraged base/out states will get more opportunity to increase (if he's good) or decrease (if he's bad) his total run impact. We can rescale the Linear Weights by base/out chart by dividing the run impact of each event by the Leverage Index. This is what it looks like:
```
TABLE 4

1B    2B    3B    Outs     LI     1B    XBH    HR    BB    K    Out
--    --    --    0     0.9      0.46      0.74      1.12      0.46      (0.30)     (0.30)
--    --    --    1     0.6      0.45      0.72      1.59      0.46      (0.29)     (0.29)
--    --    --    2     0.4      0.35      0.58      2.50      0.35      (0.30)     (0.30)
1B    --    --    0     1.5      0.47      0.74      1.04      0.42      (0.27)     (0.32)
1B    --    --    1     1.2      0.41      0.84      1.43      0.34      (0.28)     (0.32)
1B    --    --    2     0.8      0.31      0.89      2.20      0.27      (0.31)     (0.31)
--    2B    --    0     1.3      0.55      0.77      1.04      0.31      (0.36)     (0.28)
--    2B    --    1     1.2      0.54      0.82      1.27      0.22      (0.31)     (0.30)
--    2B    --    2     1.2      0.60      0.84      1.48      0.11      (0.29)     (0.29)
--    --    3B    0     1.2      0.39      0.61      0.90      0.37      (0.46)     (0.31)
--    --    3B    1     1.1      0.54      0.71      1.20      0.27      (0.52)     (0.23)
--    --    3B    2     1.3      0.66      0.73      1.30      0.14      (0.29)     (0.29)
1B    2B    --    0     2.1      0.48      0.71      0.93      0.45      (0.30)     (0.31)
1B    2B    --    1     1.9      0.48      0.83      1.19      0.37      (0.27)     (0.30)
1B    2B    --    2     1.7      0.53      0.93      1.56      0.21      (0.28)     (0.28)
1B    --    3B    0     1.7      0.43      0.66      0.93      0.34      (0.39)     (0.32)
1B    --    3B    1     1.7      0.45      0.79      1.19      0.26      (0.43)     (0.29)
1B    --    3B    2     1.8      0.53      0.81      1.41      0.16      (0.31)     (0.31)
--    2B    3B    0     1.5      0.59      0.80      1.03      0.35      (0.37)     (0.25)
--    2B    3B    1     1.6      0.53      0.76      1.10      0.13      (0.51)     (0.27)
--    2B    3B    2     2.2      0.65      0.77      1.13      0.09      (0.30)     (0.30)
1B    2B    3B    0     2.3      0.45      0.67      0.86      0.43      (0.36)     (0.31)
1B    2B    3B    1     2.5      0.48      0.76      1.04      0.40      (0.35)     (0.29)
1B    2B    3B    2     2.8      0.52      0.76      1.15      0.35      (0.30)     (0.30)
```
Let's look at the last line in the chart again (bases loaded, 2 outs). The "run" value of the HR now shows only 1.15 runs. This seems like an absurdly low number. However, what this shows is the run impact of the HR, given the base/out state, with the leverage aspect deflated. If you take the run value (1.15) and multiply it by the LI (2.8) you get 3.27 runs. What this really means is that this one PA counts as 2.8 PA. And "each" of these "2.8" PA is worth 1.15 runs. So, the batter did generate 3.27 runs, but this was largely built on being placed in such a high-leverage situation. In essence, his one HR generated 3.27 runs in "2.8" PA. If we want to count this PA as a single PA, the impact of this HR is 1.15 runs per unleveraged PA.

Now, what interests us is the run value above the out. Taking each event, and subtracting the run value of the out, and we get:

```
TABLE 5

1B    2B    3B    Outs    1B    XBH    HR    BB    K    Out
--    --    --    0     0.76      1.05      1.42      0.76      -        -   
--    --    --    1     0.73      1.01      1.88      0.75      -        -   
--    --    --    2     0.65      0.88      2.80      0.65      -        -   
1B    --    --    0     0.79      1.06      1.36      0.74      0.05      -   
1B    --    --    1     0.73      1.16      1.74      0.66      0.03      -   
1B    --    --    2     0.62      1.19      2.51      0.58      -        -   
--    2B    --    0     0.83      1.05      1.32      0.59      (0.08)     -   
--    2B    --    1     0.84      1.12      1.57      0.52      (0.01)     -   
--    2B    --    2     0.89      1.13      1.77      0.40      -        -   
--    --    3B    0     0.70      0.92      1.21      0.69      (0.14)     -   
--    --    3B    1     0.78      0.94      1.43      0.51      (0.29)     -   
--    --    3B    2     0.95      1.02      1.60      0.43      0.01      -   
1B    2B    --    0     0.79      1.02      1.24      0.76      0.01      -   
1B    2B    --    1     0.79      1.14      1.50      0.68      0.03      -   
1B    2B    --    2     0.81      1.21      1.85      0.50      -        -   
1B    --    3B    0     0.75      0.98      1.25      0.67      (0.07)     -   
1B    --    3B    1     0.74      1.07      1.48      0.55      (0.14)     -   
1B    --    3B    2     0.84      1.12      1.72      0.47      -        -   
--    2B    3B    0     0.85      1.05      1.28      0.60      (0.12)     -   
--    2B    3B    1     0.80      1.03      1.36      0.40      (0.24)     -   
--    2B    3B    2     0.96      1.07      1.43      0.39      -        -   
1B    2B    3B    0     0.76      0.98      1.17      0.74      (0.05)     -   
1B    2B    3B    1     0.77      1.05      1.33      0.69      (0.06)     -   
1B    2B    3B    2     0.82      1.06      1.45      0.65      0.00      -
```
What this chart represents is the deleveraged run values of each event above the run value of the out, by base/out state, per "1" PA. Rememeber, the deleveraging aspect makes the weight of each PA equal to exactly 1. If we take each of those impact numbers, and multiply it by the frequency of those events (the ones I showed in the standard hitting line in TABLE 1), you get this:
```
TABLE 6

1B    2B    3B    Outs    numerator
--    --    --    0     172 
--    --    --    1     175 
--    --    --    2     172 
1B    --    --    0     178 
1B    --    --    1     175 
1B    --    --    2     170 
--    2B    --    0     160 
--    2B    --    1     170 
--    2B    --    2     174 
--    --    3B    0     141 
--    --    3B    1     127 
--    --    3B    2     175 
1B    2B    --    0     172 
1B    2B    --    1     177 
1B    2B    --    2     175 
1B    --    3B    0     154 
1B    --    3B    1     146 
1B    --    3B    2     170 
--    2B    3B    0     157 
--    2B    3B    1     131 
--    2B    3B    2     172 
1B    2B    3B    0     160 
1B    2B    3B    1     163 
1B    2B    3B    2     173
```
What we would like to do is scale the numbers so that the numerator column is exactly 200. Remember, we want to scale things so that we have a.333 OBP for each base/out state, and each base/out state is worth exactly 1 PA. This would mean applying the factors below for each base/out state:
```
TABLE 7

1B    2B    3B    Outs    numerator    200/numerator
--    --    --    0     172      1.16 
--    --    --    1     175      1.14 
--    --    --    2     172      1.16 
1B    --    --    0     178      1.12 
1B    --    --    1     175      1.14 
1B    --    --    2     170      1.17 
--    2B    --    0     160      1.25 
--    2B    --    1     170      1.17 
--    2B    --    2     174      1.15 
--    --    3B    0     141      1.42 
--    --    3B    1     127      1.57 
--    --    3B    2     175      1.14 
1B    2B    --    0     172      1.16 
1B    2B    --    1     177      1.13 
1B    2B    --    2     175      1.14 
1B    --    3B    0     154      1.30 
1B    --    3B    1     146      1.37 
1B    --    3B    2     170      1.17 
--    2B    3B    0     157      1.27 
--    2B    3B    1     131      1.53 
--    2B    3B    2     172      1.17 
1B    2B    3B    0     160      1.25 
1B    2B    3B    1     163      1.23 
1B    2B    3B    2     173      1.16
```
If you take the chart that represents the deleveraged run values of each event above the run value of the out, by base/out state (TABLE 5), and multiply each value in there by the above factor (TABLE 7), you get this:
```
TABLE 8 

1B    2B    3B    Outs    1B    XBH    HR    BB    K
--    --    --    0     0.88      1.22      1.65      0.88      -   
--    --    --    1     0.84      1.15      2.15      0.86      -   
--    --    --    2     0.76      1.03      3.25      0.76      -   
1B    --    --    0     0.89      1.19      1.52      0.83      0.06 
1B    --    --    1     0.83      1.32      1.99      0.75      0.04 
1B    --    --    2     0.72      1.40      2.94      0.68      -   
--    2B    --    0     1.03      1.31      1.64      0.74      (0.09)
--    2B    --    1     0.99      1.31      1.84      0.61      (0.01)
--    2B    --    2     1.03      1.30      2.04      0.46      -   
--    --    3B    0     1.00      1.31      1.72      0.98      (0.20)
--    --    3B    1     1.22      1.48      2.25      0.79      (0.45)
--    --    3B    2     1.09      1.17      1.83      0.49      0.01 
1B    2B    --    0     0.92      1.19      1.44      0.88      0.01 
1B    2B    --    1     0.89      1.28      1.69      0.76      0.03 
1B    2B    --    2     0.93      1.39      2.11      0.57      -   
1B    --    3B    0     0.97      1.28      1.62      0.87      (0.09)
1B    --    3B    1     1.01      1.47      2.02      0.75      (0.19)
1B    --    3B    2     0.98      1.31      2.01      0.55      -   
--    2B    3B    0     1.08      1.34      1.63      0.76      (0.16)
--    2B    3B    1     1.22      1.58      2.09      0.61      (0.36)
--    2B    3B    2     1.12      1.25      1.67      0.45      -   
1B    2B    3B    0     0.95      1.23      1.47      0.93      (0.06)
1B    2B    3B    1     0.95      1.29      1.64      0.85      (0.07)
1B    2B    3B    2     0.95      1.22      1.68      0.75      0.00
```
This becomes our wOBA equation, by base/out state. If you focus on the walk column, you will see that value of the walk with 1B open and 2 outs plummets. The relative impact of the HR reaches its peak with bases empty and 2 outs. That is, in that base/out state, the importance of the HR, relative to all the other events, shoots up. The reason is that the HR in that situation guarantees a run, while any other event will require at least one other positive event following it. And that becomes much more difficult if you already have two outs.

This chart also shows the strikeout. The most damaging strikeout, compared to a regular out, is the one that happens with a runner on 3B and exactly one out. It's a killer for the hitting team. And the above chart reflects it. So, this is what we have: wOBA by base/out state. It is the single best way to evaluate the performance of a hitter, given the base/out state, sample size notwithstanding(\*). I don't mean to sound all snooty about it, but it simply is. If you believe it is not, then I have not done a good enough job in explaining it. The fault is mine, but neither should you try to dismiss this presentation.

*(\*)The big question is at which point do you have a big enough sample size for a particular base/out state that it exceeds the reliability of a player's overall performance. That is, after 30 PA in the base/out state 2B, 3B, 1 out, or 600 PA over all states, the latter trumps the former. But, what about 300 PA compared to 6000 PA, respectively? I don't know. Perhaps the 24 base/out states should be collapsed into 8 states in a more intelligent fashion. For example, runner on 3B, 1B open, less than 2 outs might be considered "one" state. Now, you might have say 60 PA for this one state. Is that better than 600 for all the states? I don't know. Yet.*

Everything that a batter and pitcher needs to know about how to approach an at bat is captured in the above chart. Focus on the runners on 2B, 3B, with 1 out. What do we see? The weights of the single and extrabase hits jump substantially, while the weight of the HR jumps a bit. The weight of the walk drops down the other way, while the strikeout has a severe negative impact. A pitcher knowing this will now go all-out in trying to strike out the batter, knowing that the walk is not that damaging. He does not want the hitter to get a basehit, because letting him contact the ball will cause more damage than those events would normally cause. Now, all knew this. It's fairly obvious. But, now we have a quantification of our knowledge.

**Recap**

Let's recap what we actually did, with these four steps:

1. Take run values (Table 2)
2. Divide by Leverage Index (Table 3)
3. Subtract the run value of the out (Table 4)
4. Apply scale (Table 7)

**Game State**

You may be asking about the inning and score. And you are absolutely correct. Not only do we need to know about the base/out state (of which we only have 24 states, and therefore is a manageable presentation), but we also need to know about the other game states (inning, and score, in addition to the base/out). We can exactly repeat this process. But when it comes to the game state, we don't care about runs, but wins. Wins is the true currency, of which runs is a stand-in when we are not concerned about the inning or score. But, now we do care. And instead of using this delta approach with run values, we use win values.

Let's take the most basic game state that we can imagine: the bases are loaded, there are two outs, it's the bottom of the last inning, and the score is tied. In this situation, any positive event means the game is over. Any out means extra innings. The chances of winning in this situation is 0.6667. Any safe event adds.3333 wins. And negative event removes.1667 wins. So, compared to the out, a walk will add +.500 wins. A single will add +.500 wins. A double, triple, homerun, all will add +.500 wins. For this particular game state, the relative value of the walk is identical to the relative value of the homerun. This is the equation for wOBA for this particular game state:

```
wOBA = (1.0 x BB + 1.0 x 1B + 1.0 x XBH + 1.0 x HR) / PA
```
Obviously, OBP equals wOBA in this case for every single player.

**Leverage Index by Game State**

In the above game state, we see that the impact of the out is -.1667 wins and the safe event has an impact of +.3333 wins. (That's Step 1.) The average out event over all game states has an impact of -.027 wins, while the average safe event over all game states has an impact of +.054 wins. So, in an average game state, the relative value of the safe event compared to the out event is +.081 wins. In the bases loaded game state we are talking about, the relative value is +.500 wins. The Leverage Index is.500/.081 = 6.2. (That's Step 2.) That is, the bases loaded, tie game, bottom of the ninth, two outs game state has 6.2 times more win impact than an average situation. In order to align this state to the typical state, we simply divide the win impact by 6.2. That is, what we are trying to do is to create a set of coefficients such that the weighted average of these coefficients equals.081. And once we have that, we divide each of the coefficients by.081 to align them such that the weighted average is exactly 1.00.

All we need to do therefore is take the win impact of each event and divide it by the leverage index. This is identical to going through the process we used to figure out the wOBA by base/out state. As hard as it is to initially believe, taking the win impact of each event (which is win probability added, or WPA) and dividing it by Leverage Index has nothing to do with WPA any more than Linear Weights Runs has anything to do with WPA.