function rotateArray(array, rotations) {
  const difference =
    rotations - Math.floor(rotations / array.length) * array.length;

  for (let i = 0; i < difference; i++) {
    array.unshift(array.pop(array[i]));
  }
  console.log(array.join(` `));
}
rotateArray(["1", "2", "3", "4"], 2);
rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15);
