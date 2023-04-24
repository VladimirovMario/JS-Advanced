class VegetableStore {
  constructor(owner, location) {
    this.owner = owner;
    this.location = location;
    this.availableProducts = [];
  }
  loadingVegetables(vegetables) {
    let successfullyAdded = [];
    for (const currVeg of vegetables) {
      let [type, quantity, price] = currVeg.split(` `);
      quantity = Number(quantity);
      price = Number(price);

      let isFound = this.availableProducts.find((el) => el.type == type);

      if (isFound == undefined) {
        let vegetable = { type, quantity, price };

        this.availableProducts.push(vegetable);
        successfullyAdded.push(type);
      } else {
        //must be in else to work properly
        isFound.quantity += quantity;
        if (isFound.price < price) {
          isFound.price = price;
        }
      }
    }
    return `Successfully added ${successfullyAdded.join(`, `)}`;
  }

  buyingVegetables(selectedProducts) {
    let totalPrice = 0;
    for (const wantedProduct of selectedProducts) {
      let [type, qty] = wantedProduct.split(` `);
      qty = Number(qty);
      let isFound = this.availableProducts.find((el) => el.type == type);

      if (isFound == undefined) {
        throw new Error(
          `${type} is not available in the store, your current bill is $${totalPrice.toFixed(
            2
          )}.`
        );
      } else {
        if (isFound.quantity < qty) {
          throw new Error(
            `The quantity ${qty} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(
              2
            )}.`
          );
        }
        totalPrice += qty * isFound.price;
        isFound.quantity -= qty;
      }
    }
    return `Great choice! You must pay the following amount $${totalPrice.toFixed(
      2
    )}.`;
  }
  rottingVegetable(type, quantity) {
    let isFound = this.availableProducts.find((el) => el.type == type);
    if (isFound != undefined) {
      if (isFound.quantity < quantity) {
        isFound.quantity = 0;
        return `The entire quantity of the ${type} has been removed.`;
      } else {
        isFound.quantity -= quantity;
        return `Some quantity of the ${type} has been removed.`;
      }
    } else {
      throw new Error(`${type} is not available in the store.`);
    }
  }
  revision() {

    let firstLine = "Available vegetables:";

    let secondLine = [];
    
    this.availableProducts.sort((a, b) => a.price - b.price);
    for (const product of this.availableProducts) {
      secondLine.push(`${product.type}-${product.quantity}-$${product.price}`);
    }
    
    let thirdLine = `The owner of the store is ${this.owner}, and the location is ${this.location}.`;

    return [firstLine, secondLine.join(`\n`), thirdLine].join(`\n`);
  }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(
  vegStore.loadingVegetables([
    "Okra 2.5 3.5",
    "Beans 10 2.8",
    "Celery 5.5 2.2",
    "Celery 0.5 2.5",
  ])
);
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());

/*
Successfully added Okra, Beans, Celery 
Some quantity of the Okra has been removed. 
The entire quantity of the Okra has been removed. 
Great choice! You must pay the following amount $26.15.
Available vegetables:
Celery-4.5-$2.5
Beans-2-$2.8
Okra-0-$3.5
The owner of the store is Jerrie Munro, and the location is 1463 Pette Kyosheta, Sofia.


 */
// console.log(vegStore);

// let isFound = this.availableProducts.findIndex((el) => el.type == type);
// if (isFound == -1) {
//   let vegetable = { type, quantity, price };
//   this.availableProducts.push(vegetable);
// }
// let inStock = this.availableProducts[isFound];
// for (const key in inStock) {
//   if (key == `quantity`) {
//     inStock[key] += quantity;
//   }
//   if (key == `price`) {
//     if (inStock[key] < price) {
//       inStock[key] = price;
//     }
//   }
// }
