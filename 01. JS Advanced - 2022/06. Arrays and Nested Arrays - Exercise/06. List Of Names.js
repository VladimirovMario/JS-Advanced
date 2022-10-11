const listOfNames = (array) =>
  array
    .sort((a, b) => a.localeCompare(b))
    .forEach((name, i) => console.log(`${i + 1}.${name}`));

listOfNames(["John", "Bob", "Christina", "Ema"]);
