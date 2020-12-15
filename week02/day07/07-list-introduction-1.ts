'use strict';

let nameList: string[] = [];

console.log(nameList.length);

console.log(nameList.length);

nameList.push('William');

if(nameList.length === 0) {
  console.log(`The nameList is empty!`);
} else {
  console.log(`The nameLinst have elements!`);
}

nameList.push('John');

nameList.push('Amanda');

console.log(nameList.length);

console.log(nameList[2]);

for(let i: number = 0; i < nameList.length; i++) {
  console.log(nameList[i]);
}

for(let i: number = 0; i < nameList.length; i++) {
  console.log(`${i + 1}. ${nameList[i]}`);
}

nameList.splice(1, 1);

console.log(nameList.reverse());

nameList.splice(0);
console.log(nameList);