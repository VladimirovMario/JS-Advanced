function biggerHalf(array) {
  let len = Math.floor(array.length / 2);
  return array.sort((a, b) => a - b).slice(len);
}

// const biggerHalf = (arr) =>
//   arr.sort((a, b) => a - b).slice(Math.floor(arr.length / 2));

console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));
