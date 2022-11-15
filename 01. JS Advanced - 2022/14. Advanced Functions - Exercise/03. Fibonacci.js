function getFibonator() {
  let f1 = 0;
  let f0 = 0;

  function fibonacci() {
    if (f1 == 0) {
      f1++;
      return f1;
    }

    let fNext = f1 + f0;
    f0 = f1;
    f1 = fNext;
    return f1;
  }
  return fibonacci;
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
