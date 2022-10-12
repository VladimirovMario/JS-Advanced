function magicMatrices(matrix) {
  const result = [];

  let sumForRows = 0;

  for (let row = 0; row < matrix.length; row++) {
    result.push(matrix[row].reduce((a, b) => a + b, sumForRows));

    let sumForCol = 0;

    for (let col = 0; col < matrix.length; col++) {
      sumForCol += matrix[col][row];
    }
    result.push(sumForCol);
  }

  for (let i = 0; i < result.length - 1; i++) {
    if (result[i] != result[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(
  magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
  ])
);

console.log(
  magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],
  ])
);
console.log(
  magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0],
  ])
);
