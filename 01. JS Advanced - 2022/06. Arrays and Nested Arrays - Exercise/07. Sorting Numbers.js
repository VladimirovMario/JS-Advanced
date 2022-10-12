function sortingNumbers(array) {
  array.sort((a, b) => a - b);
  const result = [];
  while (array.length != 0) {
    result.push(array.shift(), array.pop());
  }
  return result;
}
console.log(sortingNumbers([22, 9, -3]));
console.log(sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]));
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));

/*function sortingNumbers(array) {
  const sorted = array.sort((a, b) => a - b);
  const result = [];

  while (array.length != 0) {
    const small = sorted.shift();

    if (array.length > 0) {
      const big = sorted.pop();
      result.push(small, big);
    } else {
      result.push(small);
    }
  }
  return result;
}
console.log(sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]));
console.log(sortingNumbers([22, 9, -3]));
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
*/
