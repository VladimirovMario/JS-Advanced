function lowestPrices(array) {
  let result = {};

  for (const currTown of array) {
    let [town, product, price] = currTown.split(` | `);
    price = Number(price);

    if (result.hasOwnProperty(product) == false ||
      result[product].price > price) {

      result[product] = { price, town };
    }
  }
  for (let curr in result) {
    console.log(`${curr} -> ${result[curr].price} (${result[curr].town})`);
  }
}
lowestPrices([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
