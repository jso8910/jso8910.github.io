---
custom-tags:
  - "[[Baseball|Baseball]]"
publishDate: 2025-07-29
modified: 2025-07-29
category: wiki
publish: true
share: true
startedDate: "[[2025-07-29]]"
tags:
  - wiki_equation
---
**log5** is a method of [[./Win Estimation|win estimation]] which takes two teams' (A and B) win probabilities against .500 teams (can be calculated many ways, but the way I saw it was [[./Pythagorean Record|Pythagorean Record]]—but I'm sure something else could be used) and returns the win probability of A beating B. It uses odds ratios.

A note: I am going to be quite inconsistent with verbiage in this article, but when I say the words "true talent" in relation to team winning percentages, I am almost certainly referring to a team's true talent *against a .500 team*. This definition is somewhat circular (because ".500 team" is defined by their true talent against a .500 team) but it doesn't really matter.
# Formula
Here are two equivalent forms of the formula, where $w(A)$ is the winning percentage of A in a large sample (where opponent quality averages out to .500), $w(B)$ is the same for team B, and $P(A > B)$ is the probability team A beats team B:
$$
P(A>B)=\dfrac{w(A)\times\left(1-w(B)\right)}{w(A)\times\left(1-w(B)\right) + w(B)\times\left(1-w(A)\right)}=\dfrac{w(A) - w(A)w(B)}{w(A)+w(B)-2w(A)w(B)}
$$
# Derivation
There are two ways of deriving this formula: using general probability theory, and using the Bradley–Terry Model. For all I know, these two methods are equivalent, but they're two different ways of looking at the formula.

To start, we can define some key terminology which exists in both methods:

w(X) — the winning percentage of team X in a sufficiently large (ideally infinite) sample where the [[./True Talent|True Talent]] of the teams they face equals a .500 winning percentage.
P(X > Y) — the probability of team X winning against another team Y

Another thing which is used in both methods (but in a different way) is the idea of a proxy matchup, where team A and team B play against an imaginary team C. This imaginary team C, in both methods, is a team with a [[./True Talent|True Talent]] of a .500 winning percentage.
## Method 1: Probability Theory
This method uses the proxy series to its fullest extent in order to estimate P(A > B). I do not claim to have invented this method. While eventually I figured this method out on my own, my understanding of it was helped by [[./sources/Probabilities of Victory in Head-to-Head Team Matchups – Society for American Baseball Research|this article from John Richards for SABR]].

Essentially, this methodology is simply making this assumption: If A wins against C and B loses against C, A would win against B. Then, from there, if you have the probabilities P(A > C) and P(B > C), you can calculate the probability of A winning and B losing, which we can assume (with adjustment for only including the valid outcomes in the sample space) is equivalent to P(A > B). This is actually quite simple:

$$
P(A>B)=\dfrac{P(A>C)\times\left(1-P(B>C)\right)}{P(A>C)\times\left(1-P(B>C)\right) + P(B>C)\times\left(1-P(A>C)\right)}
$$
Assuming (some limitations to this assumption are provided below in the limitations section) we have a $w(A)$ and $w(B)$ with a sufficiently large sample and average quality of competition, $P(A>C) = w(A)$ and $P(B > C) = w(B)$, giving us
$$
P(A>B)=\dfrac{w(A)\times\left(1-w(B)\right)}{w(A)\times\left(1-w(B)\right) + w(B)\times\left(1-w(A)\right)}
$$
However, in this formula, we have made an assumption: that the probability of some Team X beating Team C (with a true talent of a .500 winning percent) is equal to the percent of games Team X wins in a sufficiently large sample against many teams who *average out* to having a True Talent of a .500 win percentage. This assumption largely works, but the limitations section describes some edge cases where it does not. Hopefully, merely intuitively, you can see why you need to be careful here and make sure that a group of teams averaging to being average produces the same result as a single average team.

Essentially, what this is doing is dividing our desired outcome (A wins and B loses—which can simply be multiplied to find the probability because these two are independent events) by the total sample space (either A wins and B loses or A loses and B wins). If any outcome outside the sample space (eg both A and B win or vice versa) you can simply discard that outcome, as if the teams will then be forced to play another round to alleviate the tie. And that gives us our formula for log5!

The way to evaluate whether the assumption of the proxy series being equivalent to a head to head series is valid is relatively straightforward but tedious. If the assumption holds true, the formula will hold true and match real world results. And if the assumption does not hold true, the formula will not hold true. You can Google matrices of true win probabilities between teams in various brackets and compare the results to the formula (or read the article I linked above from SABR).
## Method 2: Bradley-Terry Model
Another model that can be used to prove the log5 formula is the Bradley-Terry Model. The Bradley-Terry Model says this:
$$
P(A>B) = \dfrac{S_A}{S_A+S_B}
$$
Where $S_A$ is the "skill" of team A and  $S_B$ is the skill of team B. In order to use this formula, we need to complete the following steps:
1. Determine the skill $S_A$ of team A given their large sample winning percentage $w(A)$
2. Determine the skill $S_B$ of team B given their large sample winning percentage $w(B)$
3. Finally, put these two skills into the Bradley-Terry formula to determine $P(A>B)$

In order to complete the first two steps, we can actually use the Bradley-Terry formula itself. First, we formulate an imaginary team, C, with $w(C) = .500$. That team has a skill of $S_C$, an arbitrary value which is the baseline skill for the league. Next we have to make the same simplifying assumption as in method 1: that $P(A>C) = w(A)$. From this assumption, we get the following equation through the Bradley-Terry Model formula for teams A and C:
$$
w(A)=\dfrac{S_A}{S_A+S_C}
$$
Rearranging for $S_A$, our unknown value that we care about:
$$
S_A=\dfrac{w(A)S_C}{1-w(A)}
$$
A similar formula can be found for $S_B$ which solves step 2. Finally, putting everything into the Bradley-Terry Model formula a second time:
$$
P(A>B) = \dfrac{\dfrac{w(A)S_C}{1-w(A)}}{\dfrac{w(A)S_C}{1-w(A)}+\dfrac{w(B)S_C}{1-w(B)}}
$$
Then, after canceling the arbitrary constant $S_C$ and rearranging the formula, the following formula is found:
$$
P(A>B) = \dfrac{w(A) - w(A)w(B)}{w(A)+w(B)-2w(A)w(B)}
$$
This formula is equivalent to the formula found in the first derivation method.
# Limitations and assumptions
Due to the difference between performance against a sample of teams who average to .500 [[./True Talent|True Talent]] and performance against a .500 team (as discussed in [[./Pythagorean Record|Pythagorean Record]] and [[./sources/Sabermetric Research: When log5 does and doesn't work|also by Phil Birnbaum]]), this formula may not work perfectly. The specific example discussed by Birnbaum is a game in which winning is deterministic based on competitor height—the taller competitor wins. Assuming an infinite sample size of matches played, a player with a .600 win percentage will beat a player with a .400 win percentage 100% of the time. So, this formula relies on randomness existing in the probability in order for the simplifying assumption that $P(X > \text{a .500 team}) = w(X)$ to work—that is, playing against a .500 team must be roughly equivalent to playing against a bunch of teams *averaging* to .500.

A similar example where the formula breaks down, even in a sport where the assumption of large samples generally works like baseball, is when teams are closer to the extreme winning percents (close to 1 or 0). If a Team A plays an equal number of games against two teams, B and C who have a mean true talent against a .500 team of .500, you might assume that the percent of the time that Team A wins in this sample will be indicative of their true talent against a .500 team. However, this is not the case

In addition to that, it underestimates the win probability of a team that is much better than its opponent. [[./TangoTiger|TangoTiger]] performed [[./sources/Odds Ratio Method track runners and baseball|a similar (and more rigorous) analysis]] which had similar conclusions.
# Extensions
There is an extension of the Log5 formula (which I have not yet fully read through) which attempts to extend Log5 to batter–pitcher matchups: https://sabr.org/journal/article/matchup-probabilities-in-major-league-baseball/

This formula can also be extended to account for home field advantage.

Furthermore, it can be modified to account for the fact that better teams face a slightly lower quality of competition on average (because they're hogging all the wins) and vice versa.
# Verifying the results of log5
In addition to an empirical verification of the results of log5, we can actually figure out whether the formula works in theory. [[./sources/True Talent Levels for Sports Leagues|Tom Tango determined]] the standard deviation of winning in baseball to be around $\sigma=0.060$ (though of course this is from 2006). From this, we can calculate a normal distribution for the true talent level of teams in MLB: $T \sim N(0.5, 0.06^2)$. We can also create a function $P(w(B))$ which finds the probability that team A beats a team B with a winning percentage of $w(B)$. Finally, if we hold $w(A)$ constant and calculate the integral $\int_0^1T\times P(w(B)) \mathop{}\!\mathrm{d} w(B)$, that would be the predicted winning percentage of team A by the log5 formula. For example, when I set $w(A)=0.8$, the integral outputs an expected win percentage of 0.797. As it turns out, [[./sources/Sabermetric Research: log5 estimates are biased when we use the wrong measure of "talent"|Phil Birnbaum has found]] that the formula gets more accurate as the spread of talent in a league gets lower. Baseball has a small spread of team winning talent, hence why this formula works incredibly well with baseball.