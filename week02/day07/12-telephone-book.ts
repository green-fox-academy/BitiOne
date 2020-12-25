'use strict';

//We are going to represent our contacts in a map where the keys are going to be strings and the values are going to be strings as well.

//Create a map with the following key-value pairs.

//Name (key)	Phone number (value)
//William A. Lathan	405-709-1865
//John K. Miller	402-247-8568
//Hortensia E. Foster	606-481-6467
//Amanda D. Newland	319-243-5613
//Brooke P. Askew	307-687-2982
//Create an application which solves the following problems.

//What is John K. Miller's phone number?
//Whose phone number is 307-687-2982?
//Do we know Chris E. Myers' phone number?

let telephoneBook = {
  'William A. Lathan': '405-709-1865',
  'John K. Miller': '402-247-8568',
  'Hortensia E. Foster': '606-481-6467',
  'Amanda D. Newland': '319-243-5613',
  'Brooke P. Askew': '307-687-2982',
  //'Chris E. Myers': '001'
}

function problemSolvingApplication() {
  console.log(`John K. Miller's phone number is ${telephoneBook['John K. Miller']}`);
  for (let key in telephoneBook) {
    if(telephoneBook[key] === '307-687-2982') {
      console.log(`${key} own the 307-687-2982 phone number.`);
    }
  };
  
  if(telephoneBook.hasOwnProperty('Chris E. Myers') === true) {
    console.log(`We know Chris E. Myers phone number. It is ${telephoneBook['Chris E. Myers']}`);
  } else {
    console.log(`We don't know Chris E. Myers' phone number.`);
  }
}

//Ezt még ki kell dolgozni!
function problemSolvingApplication02(name?: string, phoneNumber?: string) {
  if(phoneNumber !== undefined) {
    telephoneBook[key];
    console.log()
  }
}

problemSolvingApplication();
problemSolvingApplication02(undefined, '3125402');