/*
 The bind() method creates a new function 
Has its this keyword set to the provided value,
with a given sequence of arguments preceding any provided when the new function is called
Calling the bound function generally results in the execution of its wrapped function
 */
const x = 42;
const getX = function () {
  return this.x;
};
const test = { x, getX };

const unboundGetX = test.getX;
console.log(unboundGetX()); // undefined

const boundGetX = unboundGetX.bind(test);
console.log(boundGetX()); // 42
