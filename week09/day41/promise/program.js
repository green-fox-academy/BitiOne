'use strict';

require('es6-promise');

/* task 01--------------------------------------------
setTimeout(function(){
  console.log('TIMED OUT!');
}, 300);
*/

// task 02--------------------------------------------
var promise = new Promise(function (fulfill, reject) {
  setTimeout(function() {
    fulfill('FULFILLED!');
  }, 300);
});

promise.then((result) => {
  console.log(result);
});