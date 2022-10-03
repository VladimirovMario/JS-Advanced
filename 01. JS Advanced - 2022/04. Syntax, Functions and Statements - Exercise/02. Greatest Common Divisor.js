// function greatestCommonDivisor(a, b) {
//   while (b != 0) {
//     let oldB = b;
//     b = a % b;
//     a = oldB;
//   }
//   console.log(a);
// }
// greatestCommonDivisor(15, 5);
// greatestCommonDivisor(2154, 458);

function gcd_two_numbers(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return false;
  }
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) {
    let t = y;
    y = x % y;
    x = t;
  }
  return x;
}

console.log(gcd_two_numbers(2154, 458));
console.log(gcd_two_numbers(9, `3`));
console.log(gcd_two_numbers(-9, 3));
