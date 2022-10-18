function storeCatalogue(array) {
  let result = {};

  for (const currProduct of array) {
    let [name, price] = currProduct.split(` : `);
    price = Number(price);
    let firstLetter = name.slice(0, 1);

    if (result.hasOwnProperty(firstLetter) == false) {
      result[firstLetter] = {};
    }
    result[firstLetter][name] = price;
  }

  let sorted = Object.keys(result).sort((a, b) => a.localeCompare(b));

  for (const currLetter of sorted) {
    console.log(currLetter);
    let products = Object.entries(result[currLetter]);
    products.sort((a, b) => a[0].localeCompare(b[0]));
    for (const currProduct of products) {
      console.log(`  ${currProduct[0]}: ${currProduct[1]}`);
    }
  }
}
storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
console.log(`---`);
storeCatalogue([
  "Banana : 2",
  "Rubic's Cube : 5",
  "Raspberry P : 4999",
  "Rolex : 100000",
  "Rollon : 10",
  "Rali Car : 2000000",
  "Pesho : 0.000001",
  "Barrel : 10",
]);

/*
A
  Anti-Bug Spray: 15
  Apple: 1.25
  Appricot: 20.4
B
  Boiler: 300
D
  Deodorant: 10
F
  Fridge: 1500
T
  T-Shirt: 10
  TV: 1499
---
B
  Banana: 2
  Barrel: 10
P
  Pesho: 0.000001
R
  Rali Car: 2000000
  Raspberry P: 4999
  Rolex: 100000
  Rollon: 10
  Rubic's Cube: 5
*/
