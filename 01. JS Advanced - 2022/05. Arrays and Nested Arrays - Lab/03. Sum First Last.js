// function sumFirstLast(array) {
//   let firstNum = +array.slice(0, 1);
//   let lastNum = +array.slice(-1);
//   let sum = 0;

//   if (array.length == 1) {
//     sum = firstNum;
//   } else {
//     sum = firstNum + lastNum;
//   }
//   return sum;
// }
// console.log(sumFirstLast(["20", "30", "40"]));
// console.log(sumFirstLast(["5", "10"]));
// console.log(sumFirstLast(["5"]));

function sumFirstLast(array) {
  let first = [...array].shift();
  let last = [...array].pop();
  let result = 0;
  if (array.length == 1) {
    result = first;
  } else {
    result = Number(first) + Number(last);
  }

  console.log(result);
}
sumFirstLast(["20", "30", "40"]);
sumFirstLast(["5"]);
