function solution(startNum) {
  let result = 0;

  function increment(nextNum) {
    result = startNum + nextNum;
    return result;
  }

  return increment;
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));

// function solution(number) {
//   function add(num1, num2) {
//     return num1 + num2;
//   }
// return add.bind(null,number)
// }

// let add5 = solution(5);
// console.log(add5(2));
// console.log(add5(3));

// let add7 = solution(7);
// console.log(add7(2));
// console.log(add7(3));
