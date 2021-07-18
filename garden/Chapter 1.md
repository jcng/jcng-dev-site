---
title: "Chapter 1"
date: "2021-05-03"
tags: ["imposters-handbook"]
---

# Chapter 1: Complexity Theory

- Complexity Theory = how difficult is a given problem?
- There are different classifications of complexity:
	- P
	- NP
	- NP-Complete
	- NP-Hard
	- Exp
- An important note: these classifications are *sets* of all possible problems that meet the defined complexity constraints

## Simple Solutions and Polynomial Time (P)
- "Complexity" is a measurement of how time scales relative to scaling the inputs of your problem
- **P Time**: Polynomial time. A classification of complexity describing a problem which can be represented by a polynomial equation
	> *T* = 2x
	- These are the simplest algorithms

## Hard Problems (Exp)
- **Exp Time**: Exponential time. The problem takes exponentially longer to solve with each additional input
> *T* = 2<sup>n</sup>
- Essentially all problems we care about solving are in Exp

### All Solvable Problems (R)
- **R**: problems that can be solved in finite time
- This contains all problems in Exp, which in turn contains all problems in P

## Determinism, Nondeterminism, and Magical Guesses
- **Determinism:** How a traditional program currently operates. To solve a problem, our program steps through a series of perfectly predictable steps to arrive at the solution.
- **Nondeterminism:**  Using a series of lucky guesses (which are all correct) to arrive at the solution
- **NP:** Nondeterministic polynomial time -- describes a problem normally solveable in Exp, but becomes solveable in P if using a nondeterministic algorithm
	- Formal definition:
		- Solvable in exponential time (Exp)
		- Verifiable in polynomial time (P)
		- Also solvable in polynomial time by nondeterministic methods
	- NP can also be thought of as a computer's ability to make the "right" choice given a set of possibilities
		- This isn't possible... yet

## Reductions and NP
- It's possible to have a problem that is itself not NP, but is possible to break down into NP problems.
- Consider this problem:
	> *What are the optimal pubs for optimal group happiness?*
	- This is called a "combinatorial optimization" problem, and they're very complex (you have to *optimize* for a *combination* of pubs and group happiness)
		- Note that this fails the definition of NP:
			- It is solveable in exponential (EXP) time...
			- ...but it is **not** verifiable in polynomial (P) time
			- ...and is **not** solvable in polynomial (P) time with nondeterministic methods
		- Because of this, this combinatorial optimization problem is classified in Exp, not NP
- Consider the following problem, which is a reduction of the previous combinatorial optmization problem into a **decision problem**:
	> *If we go to the Leaking Moose, would everyone be optimally happy?*
	- Unlike the combinatorial optimization problem, this one is verifiable in polynomial time (by just asking how happy people are once you arrive)
	- And it's also solvable in P with nondeterministic methods (we just solved it by going to the Leaking Moose and verifiying)
- The phenonmenon described here is the purpose behind the sub categories of NP:
	- **NP-Hard:** Problems that can be reduced to NP, but are not NP themselves. Combinatorial problems are NP-Hard.
	- **NP-Complete:** Decision problems classifiable in NP
	
	### NP-Complete and Decisions