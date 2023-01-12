---
title: "Indempotence"
date: "2021-05-02"
tags: ["self-study"]
---
If an action is **indempotent**, then every time you perform that action with the same input (and the same state), you get the same output -- no matter how many times you perform that action.

Let's look at some code examples!

## Indempotent Code Example
```javascript
let order = {
	quantity: 0
};
function orderTwoBurgers(order) {
	order.quantity = 2;
	return order;
}
orderTwoBurgers(order); // order.quantity is 2
orderTwoBurgers(order); // order.quantity is still 2
orderTwoBurgers(order); // order.quantity is STILL 2!
console.log(order)
```
No matter how many times we call  `orderTwoBurgers(order)`, we're going to get the same result. The `quantity` of the order will always be `2`!

## Non-Indempotent Code Example
```javascript
let order = {
	quantity: 0
};
function addBurger(order) {
	order.quantity = order.quantity + 1;
	return order;
}
addBurger(order); // order.quantity is 1
addBurger(order); // order.quantity is 2
addBurger(order); // order.quantity is 3
console.log(order)
```
Unlike with `orderTwoBurgers`, the output of `addBurger` changes every time we call it, since it increments the quantity every time.

## What's the point?
Cool, so we know *what* indempotence is, but why is it important?

> **Sources:**
>What is indempotence?
>https://stackoverflow.com/questions/28459418/use-of-put-vs-patch-methods-in-rest-api-real-life-scenarios