let sortArray = (arr, argument) =>
  arr.sort((a, b) => (argument == `asc` ? a - b : b - a));

console.log(sortArray([14, 7, 17, 6, 8], "asc"));
console.log(sortArray([14, 7, 17, 6, 8], "desc"));

// function sortArray(arr, argument) {
//     if (argument == `asc`) {
//       arr.sort((a, b) => a - b);
//     } else if (argument == `desc`){
//       arr.sort((a, b) => b - a);
//     }
//     return arr;
//   }
// console.log(sortArray([14, 7, 17, 6, 8], "desc"));
