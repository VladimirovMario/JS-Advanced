function sameNumbers(num) {
  let numAsString = num.toString();

  function checker(num) {
    for (let i = 0; i < num.length - 1; i++) {
      if (+num[i] != +num[i + 1]) {
        return false;
      }
    }
    return true;
  }

  let sum = 0;
  for (const iterator of numAsString) {
    sum += +iterator;
  }

  console.log(checker(numAsString));
  console.log(sum);
}
sameNumbers(2222222);
sameNumbers(1234);
