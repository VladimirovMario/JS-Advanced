/*
One of the most important features in JavaScript
The scope of an inner function includes the scopeof the outer function
An inner function retains variables being used from the outer function 
scope even after the parent function has returned
*/

const f = (function () {
  let counter = 0;
  return function () {
    console.log(++counter);
  };
})();

f();
f();
f();
f();
