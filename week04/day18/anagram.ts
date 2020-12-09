'use strict';


export function anagram(stringOne: string, stringTwo: string): boolean {
    let caractersOne = stringOne.toLowerCase().split('').sort().join('');
    let caractersTwo = stringTwo.toLowerCase().split('').sort().join('');
    
    //console.log(caractersOne);
    //console.log(caractersTwo);

    if(caractersOne === caractersTwo) {
        return true;
    } else {
        return false;
    }
}
/*
let anagramOrNot = anagram('Hello', 'Lohle');
console.log(anagramOrNot);
*/