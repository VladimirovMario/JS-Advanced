function aggregateElements(array) {
  let sum = 0;
  let inverse = 0;
  let concatResult = ``;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    inverse += 1 / array[i];
    concatResult = concatResult.concat(array[i]);
  }
  console.log(sum);
  console.log(inverse);
  console.log(concatResult);
}
aggregateElements([1, 2, 3]);
console.log(`---`);
aggregateElements([2, 4, 8, 16]);
