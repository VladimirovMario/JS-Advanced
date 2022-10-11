function extractIncreasingSubsequence(array) {
  let result = [];
  let biggest = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= biggest) {
      biggest = array[i];
      result.push(biggest);
    }
  }
  return result;
}
console.log(extractIncreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extractIncreasingSubsequence([1, 2, 3, 4]));
console.log(extractIncreasingSubsequence([20, 3, 2, 15, 6, 1]));


