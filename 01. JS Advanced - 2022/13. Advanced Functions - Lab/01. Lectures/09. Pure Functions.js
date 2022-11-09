// impure function:
let number = 1;
const incrementImpure = () => (number += 1);
incrementImpure(); // 2

// pure function:
const increment = (n) => n + 1;
increment(1); // 2
