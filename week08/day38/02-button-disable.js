'use strict';

let mainForm = document.getElementById('main_form');
let radioButtonDog = document.getElementById('dog');
let radioButtonCat = document.getElementById('cat');
let radioButtonViktor = document.getElementById('viktor');
let radioButtonFactYes = document.getElementById('yes');
let radioButtonFactNo = document.getElementById('no');
let buttonLoveCats = document.getElementById('love_cats');
let buttonSignUp = document.getElementById('sign_up');

mainForm.addEventListener('click', function() {
  if(radioButtonDog.checked || radioButtonCat.checked || radioButtonViktor.checked) {
    buttonSignUp.disabled = false;
  }
  if(radioButtonFactYes.checked) {
    buttonLoveCats.disabled = false;
  } else {
    buttonLoveCats.disabled = true;
  }
  if(radioButtonFactNo.checked && radioButtonViktor.checked){
    buttonLoveCats.disabled = true;
  }
});

buttonLoveCats.addEventListener('click', () => {
  alert(`Thank you, you've successfully signed up for cat facts.`);
});