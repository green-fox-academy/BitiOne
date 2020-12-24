'use strict';

//We are going to represent our expenses in a list containing integers.

//Create a list with the following items.
//500, 1000, 1250, 175, 800 and 120

let expenses: number[] = [500, 1000, 1250, 175, 800, 120];

//Create an application which solves the following problems.
//How much did we spend?
//Which was our greatest expense?
//Which was our cheapest spending?
//What was the average amount of our spendings?

function applicationOfExpenses(givenArray: number[]): void {
  let spendedMoney: number = 0;
  let greatestExpense: number = 0;
  let cheapestSpending: number = 100000;
  for(let i: number = 0; i < givenArray.length; i++) {
    spendedMoney += givenArray[i];
  }
  for(let i: number = 0; i < givenArray.length; i++) {
    if(givenArray[i] > greatestExpense) {
      greatestExpense = givenArray[i];
    }
  }
  for(let i: number = 0; i < givenArray.length; i++) {
    if(givenArray[i] < cheapestSpending) {
      cheapestSpending = givenArray[i];
    }
  }
  console.log(`We spend ${spendedMoney} money.`);
  console.log(`Our greatest expense was: ${greatestExpense}.`);
  console.log(`Our cheapest spending was: ${cheapestSpending}.`);
  console.log(`Our average amount of our spendings: ${spendedMoney / givenArray.length}.`);
}

applicationOfExpenses(expenses);