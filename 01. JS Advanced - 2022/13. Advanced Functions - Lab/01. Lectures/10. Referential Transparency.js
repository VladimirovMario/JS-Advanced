/*
An expression that can be replaced with its corresponding
value without changing the program's behavior
Expression is pure and its evaluation must have no side effects

*/

function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}
let x = add(2, multiply(3, 4));
// multiply(3, 4) can be replaced with 12
console.log(x); // 14