function processOddPositions(array) {
  console.log(
    array
      .filter((_, i) => i % 2 != 0)
      .map((el) => el * 2)
      .reverse()
      .join(` `)
  );
}
processOddPositions([10, 15, 20, 25]);
processOddPositions([3, 0, 10, 4, 7, 3]);

// const processOddPositions = (arr) =>
//   arr
//     .filter((_, i) => i % 2 != 0)
//     .map((el) => el * 2)
//     .reverse()
//     .join(` `);
// console.log(processOddPositions([10, 15, 20, 25]));
// console.log(processOddPositions([3, 0, 10, 4, 7, 3]));
