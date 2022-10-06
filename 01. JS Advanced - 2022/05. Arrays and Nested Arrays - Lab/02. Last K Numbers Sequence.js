function numbersSequence(n, k) {
  const result = [1];

  for (let i = 1; i < n; i++) {
    let sum = 0;
    const sequence = result.slice(-k);
    for (const iterator of sequence) {
      sum += iterator;
    }
    result.push(sum);
  }
  return result;
}
console.log(numbersSequence(6, 3));
console.log(numbersSequence(8, 2));
