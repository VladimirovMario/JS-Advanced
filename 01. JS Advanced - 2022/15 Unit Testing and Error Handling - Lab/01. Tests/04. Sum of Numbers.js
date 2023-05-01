function sum(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += Number(num);
  }
  return sum;
}
// named exports
// To export more than one function, the value of
// module.exports must be an object
module.exports = {
  sum,
};
