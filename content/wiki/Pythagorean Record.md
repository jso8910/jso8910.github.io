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
A method of [[./Win Estimation|estimating]] of a team's [[./True Talent|True Talent]] record based on runs scored and runs against. In a large enough sample (i.e. when the team has faced teams whose true talents average out to roughly .500), this will be equal to the team's estimated [[./Winning Percentage|winning percentage]] against a .500 team. It has the following formula:

>[!Info] Pythagorean record formula
>$$
>\text{Win \%} = \dfrac{\text{Runs scored}^2}{\text{Runs scored}^2+\text{Runs against}^2} = \dfrac{1}{1+\left(\dfrac{\text{Runs against}}{\text{Runs scored}}\right)^2}
>$$

The exponent of 2 can be replaced with a better number—commonly around 1.81—or a dynamic exponent as determined by a formula like [[wiki/Pythagenpat|Pythagenpat]].

There was a throwaway comment about true talents averaging to .500 in the first paragraph. That is not quite accurate. [[./sources/Sabermetric Research: When log5 does and doesn't work|Phil Birnbaum]] astutely points out the difference between how a team would perform against a .500 team and how a team would perform against a sample of teams who average to a .500 true talent. Pythagorean record tells you the latter. In baseball, this difference is not massive, but it still exists and it is important to keep in mind.