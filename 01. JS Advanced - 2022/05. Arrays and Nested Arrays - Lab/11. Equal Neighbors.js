function equalNeighbors(arr) {
  let count = 0;

  for (let row = 0; row < arr.length; row++) {
    // let currRow = arr[row]; use it for length if the matrix is not equal

    for (let col = 0; col < arr[row].length; col++) {
      if (row + 1 < arr.length) {
        if (arr[row][col] == arr[row + 1][col]) {
          count++;
        }
        console.log(arr[row][col], arr[row + 1][col]);
      }

      if (col + 1 < arr[row].length) {
        if (arr[row][col] == arr[row][col + 1]) {
          count++;
        }
        console.log(arr[row][col], arr[row][col + 1]);
      }
      console.log(`---`);
    }
  }
  console.log(count);
}
equalNeighbors([
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]);

equalNeighbors([
  ["test", "yes", "yo", "ho"],
  ["well", "done", "yo", "6"],
  ["not", "done", "yet", "5"],
]);

equalNeighbors([
  [`2`, `2`, `5`, `7`, `4`],
  [`4`, `0`, `5`, `3`, `4`],
  [`2`, `5`, `5`, `4`, `2`],
]);
