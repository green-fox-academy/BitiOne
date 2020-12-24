'use strict';

//Create a list ('List A') which contains the following values
//  Apple, Avocado, Blueberries, Durian, Lychee

let listA: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];

//Create a new list ('List B') with the values of List A

let listB: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];

//Print out whether List A contains Durian or not

console.log(listA.includes('Durian'));

//Remove Durian from List B

listB.splice(3, 1);
console.log(listB);

//Add Kiwifruit to List A after the 4th element

listA.splice(4, 0, 'Kiwifruit');
console.log(listA);

//Compare the size of List A and List B

console.log(listA);
console.log(listB);
if(listA.length < listB.length) {
  console.log(`List A is shorter than List B.`);
} else if(listA.length > listB.length) {
  console.log(`List B is shorter than List A.`);
} else {
  console.log(`The two list equal leinght.`);
}

//Get the index of Avocado from List A

console.log(listA.indexOf('Avocado'));

//Get the index of Durian from List B

console.log(listB.indexOf('Durian'));

//Add Passion Fruit and Pomelo to List B in a single statement

listB.push('Passion Fruit', 'Pomelo');
console.log(listB);

//Print out the 3rd element from List A

console.log(listA[2]);