function subSum(arr, startIndex, endIndex) {
  if (endIndex > arr.length - 1) {
    endIndex = arr.length - 1;
  }
  if (startIndex < 0) {
    startIndex = 0;
  }
  if (Array.isArray(arr) == false) {
    return NaN;
  }

  let result = 0;
  for (let i = startIndex; i <= endIndex; i++) {
    result += Number(arr[i]);
  }

  return result;
}
console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(subSum([10, "twenty", 30, 40], 0, 2));
console.log(subSum([], 1, 2));
console.log(subSum("text", 0, 2));
console.log(subSum([10, 20, 30, 40, 50, 60], 0, 2));
/* Expected output:
150
3.3000000000000003
NaN
0
NaN
60 
 */

/*
function solve(array, startIndex, endIndex) {
  if (Array.isArray(array) == false) {
    return NaN;
  }
  if (startIndex < 0) {startIndex = 0; }
  if (endIndex > array.length - 1) {
    endIndex = array.length - 1;
  }
  return array
    .slice(startIndex, endIndex + 1)
    .map(Number)
    .reduce((acc, x) => acc + x, 0);
}
*/
