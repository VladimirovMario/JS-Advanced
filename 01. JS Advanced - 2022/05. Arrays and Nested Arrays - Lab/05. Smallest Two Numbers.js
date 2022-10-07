function smallestTwoNumbers(array) {
  console.log(
    array
      .sort((a, b) => a - b)
      .filter((_, i) => i <= 1)
      .join(` `)
  );
}
smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);

// const smallestTwoNumbers = (arr) =>
// arr
// .sort((a, b) => a - b)
// .filter((_, i) => i <= 1)
// .join(` `);

// console.log(smallestTwoNumbers([30, 15, 50, 5]))
// console.log(smallestTwoNumbers([3, 0, 10, 4, 7, 3]))
