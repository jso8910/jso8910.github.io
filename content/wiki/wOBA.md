---
custom-tags:
  - "[[Baseball|Baseball]]"
publishDate: 2025-08-03
modified: 2025-08-03
category: wiki
tags:
  - wiki
  - wiki_equation
publish: true
share: true
startedDate: "[[2025-08-03]]"
---
Refer to my article on [[../Intro To Sabermetrics/101 Basic Hitting Stats/Weighted On Base Average and Linear Weights (Sabermetrics 101: Basic Hitting Stats — Part 4)|wOBA from Sabermetrics 101]] for more in-depth explanation.

**wOBA** is a stat for evaluating hitter performance based on [[./Linear Weights|Linear Weights]]. It is scaled so the league average wOBA is equal to the league average OBP. From this scaling, we get the [[wiki/wOBA Scale|wOBA Scale]], a constant used to convert wOBA (when compared to average) back to run value.

> [!info] wOBA formula
> $$
> \text{wOBA} = \dfrac{.699\cdot\text{uBB}+.730\cdot\text{HBP}+.895\cdot\text{1B}+1.274\cdot\text{2B}+1.615\cdot\text{3B}+2.084\cdot\text{HR}}{\text{AB}+\text{BB}-\text{IBB}+\text{SF}+\text{HBP}}
> $$