function sortByTwoCriteria(array) {
  array.sort((a, b) => a.length - b.length || a.localeCompare(b));
  console.log(array.join(`\n`));
}
sortByTwoCriteria(["alpha", "beta", "gamma"]);
console.log(`---`);
sortByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
console.log(`---`);

sortByTwoCriteria(["test", "Deny", "omen", "Default"]);
console.log(`---`);
