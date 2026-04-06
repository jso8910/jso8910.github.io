---
title: On Trade Evaluation (Sabermetrics 401 — 1)
permalink: sabermetrics/401/2025-06-16-trade-evaluation
category: Intro To Sabermetrics/401 Philosophies and Discussions
tags:
  - article
  - sabermetrics
  - sabermetrics-401
publish: true
share: true
Section: "[[401 Philosophies and Discussions]]"
publishDate: 2025-06-16
modified: 2025-06-16
startedDate: "[[2025-06-16]]"
custom-tags:
  - "[[01 Tags/Baseball]]"
---
This article going into the last section of my blog before I start the second section is a bit weird, but it's what makes sense for this article. So this is my first article which isn't about teaching, but a more general discussion on Sabermetrics.

This article was inspired by the Rafael Devers trade and a couple of mistakes I notice a lot of people making when evaluating trades. When you see a trade evaluation (especially from the oft-inaccurate Baseball Trade Values website), it is presented very simply: for instance, the Red Sox lost Rafael Devers and gained Kyle Harrison and a couple of other people. However, this is simplistic. It assumes two things which are, in my opinion, incorrect.
1. Money has value
2. Trades are zero sum

I'll go in order explaining my two conjectures. First, why money has no value, and second, why trades aren't actually zero-sum.

The first conjecture is relatively simple and will not take much explanation—you will either agree or disagree, and I don't think there's much convincing I can do. Basically, I just don't think that there is any value to a team saving money unless that money is reallocated.

Of course I'm not naive, owners want to save money, and I'm sure the shareholders of these private corporations are very happy when a dividend check hits their bank accounts.

As a fan of the game, on the other hand, I could not possibly care less about the shareholder value created by an MLB team. So, when evaluating trades, it just doesn't make sense to assume that saving money has value. And that's a mistake that BTV makes when doing trade calculations. They give Rafael Devers a value of -$40.3M thanks to his large contract which, while technically correct, does not tell the full picture.

Insofar as the Red Sox reallocate all the money that would've gone to Devers, it could be correct! But that assumption is flawed and does not mesh with the assumption of most fans, hence why so many fans think the trade is bad. I think that, changing nothing else, the simplest way to solve this would be to not sum a player's monetary and baseball value. Present the Devers trade as the Red Sox losing however much value from Devers in terms of baseball value and then gaining value back in terms of money. That would be much less misleading.

Next, why trades aren't zero sum. This actually connects back to the first point as a way to solve for it. This stems from a criticism many people have of \$/WAR evaluations which is that WAR isn't linear in value. Some say it is better to have, for example, one 6 WAR player than two 3 WAR players. And, while I don't agree with the reasoning which I think misses the mark slightly ("WAR doesn't have linear value") I do agree with the conclusion ("\$/WAR can be misleading without context").

The reason why these comparisons fail to mesh with your intuition is because roster spots are scarce. By making a trade from a 6 WAR player to two 3 WAR players, you are creating a cascading effect down your roster. Suddenly, you have to kick a starter out of the lineup and give them less playing time as they become a bench player. You also have to kick the 26th man off your roster.

The way trades are currently evaluated by many is this: Team 1 acquisitions - Team 2 acquisitions. However, because of the roster effects, it is an incorrect evaluation. You cannot create a single number which evaluates for BOTH teams whether a trade is good.

In reality, the best way to evaluate a trade looks something more like this: Team 1 value = Team 1 acquisitions - Team 2 acquisitions - value lost due to reduced playing time from other players - value lost from players kicked off roster. And then you have a second and separate equation for team 2.

I could continue, complicating this discussion with discussion of how prospects in the minor leagues impact this, but this is already sufficient to see that it is possible for a trade to be a bad idea for both teams or a trade to be a very good idea for both teams.

The circumstances of the rosters for each team very much matters for evaluating trades, but these trade calculators fail to take that into account. This equation would also allow you to account for the effect of inflow and outflow of cash! Instead of assuming some inherent value to having more money in the bank, you could instead just add the WAR value of players acquired with that extra money.

Of course I understand fully why these sites don't take these factors into account. In the case of roster knock-on effects, these are just insanely complicated to model and account for (especially when automating the process of evaluations in order to sell as a service to unwitting baseball fans...).

Additionally, in the case of what proportion of money is reallocated, it is hard in two ways. First being that the money won't be reallocated for many months or even years, making it difficult to pre-evaluate a trade. Second being that it isn't easy to tell how much a team would've spent without the trade (perhaps acquiring a superstar in Rafael Devers raises the Giants' budget and so they doesn't have to reduce their spending by $30 million) nor is it possible to know how a team would've hypothetically spent its extra money had they not acquired a contract by trade.

This makes evaluation of these factors, especially on the money front, very difficult. But I'm sure that some smart economist could create a crude model for what proportion of money savings via trade are generally reallocated to new contracts based on past data which would at least be better than the naive assumption of ALL the money in the trade being reallocated to new players.

So those are my two cents on how we evaluate player trades and how we could potentially improve at them. We need to account for how much of a money savings or loss actually results in a change in front office player acquisition as well as how trades impact the rest of the roster and depth chart.