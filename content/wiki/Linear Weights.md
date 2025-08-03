---
custom-tags:
  - "[[Baseball|Baseball]]"
publishDate: 2025-08-03
modified: 2025-08-03
category: wiki
tags:
  - wiki
  - wiki_concept
publish: true
share: true
startedDate: "[[2025-08-03]]"
---
Refer to my article on [[../Intro To Sabermetrics/101 Basic Hitting Stats/Weighted On Base Average and Linear Weights (Sabermetrics 101: Basic Hitting Stats — Part 4)|wOBA from Sabermetrics 101]] for more in-depth explanation.

**Linear weights** are run estimators which linearly estimate the relative weight of different events. In the case of [[wiki/wOBA|wOBA]], walks, hit by pitches, singles, doubles, triples, home runs, and implicitly outs have their values measured. In the case of [[wiki/FIP|FIP]], strikeouts, home runs, walks, and (implicitly) balls in play have their values measured. Linear weights are generally [[wiki/Context|context inaware]], meaning they don't take into account the context of an outcome. However, you can absolutely calculate linear weights based on base-out state (as [I did](https://github.com/jso8910/situational_wOBA) years ago, or as TangoTiger describes in [[./sources/Situational Wins|this article]]). Linear weights are calculated by finding the average change in [[./Run Expectancy|run expectancy]] that happens when a certain event occurs.