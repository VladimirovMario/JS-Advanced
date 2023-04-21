function autoEngineering(company) {
  const produced = {};
  for (const currBrand of company) {
    let [brand, model, qty] = currBrand.split(` | `);
    qty = Number(qty);

    if (produced.hasOwnProperty(brand) == false) {
      produced[brand] = {};
    }
    if (produced[brand].hasOwnProperty(model) == false) {
      produced[brand][model] = 0;
    }
    produced[brand][model] += qty;
  }
  for (let brand in produced) {
    console.log(brand);

    for (const model in produced[brand]) {
      console.log(`###${model} -> ${produced[brand][model]}`);
    }
  }
}
autoEngineering([
  "Audi | Q7 | 1000",
  "Audi | Q6 | 100",
  "BMW | X5 | 1000",
  "BMW | X6 | 100",
  "Citroen | C4 | 123",
  "Volga | GAZ-24 | 1000000",
  "Lada | Niva | 1000000",
  "Lada | Jigula | 1000000",
  "Citroen | C4 | 22",
  "Citroen | C5 | 10",
]);

/*
Audi
###Q7 -> 1000
###Q6 -> 100
BMW
###X5 -> 1000
###X6 -> 100
Citroen
###C4 -> 145
###C5 -> 10
Volga
###GAZ-24 -> 1000000
Lada
"C:\Program Files\nodejs\node.exe" ".\09. Auto-Engineering Company.js"
###Niva -> 1000000
###Jigula -> 1000000
*/