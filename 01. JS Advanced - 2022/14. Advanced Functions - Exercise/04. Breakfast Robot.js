function solution() {   //!!!! I need to rewrite it. I don't get the right answers
  let store = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };

  // we create an object with methods with the same names like our functions
  let commands = {
    restock,
    prepare,
    report,
  };

  return management;

  function management(orders) {
    let [command, element, qty] = orders.split(` `);
    qty = Number(qty);

    // search for appropriate function in object's methods
    const fn = commands[command];
    // params for other functions
    return fn(element, qty);
  }

  function restock(element, qty) {
    if (store.hasOwnProperty(element) == false) {
      store[element] = 0;
    }
    store[element] += qty;
    return `Success`;
  }

  //-------------------------------------
  function prepare(product, qty) {
   
   
      //apple - made with 1 carbohydrate and 2 flavour
      if (product == `apple`) {
          
        store.carbohydrate -= qty;
        store.flavour -= 2 * qty;
      }
      //lemonade - made with 10 carbohydrate and 20 flavour
      if (product == `lemonade`) {
        store.carbohydrate -= 10 * qty;
        store.flavour -= 20 * qty;
      }
      //burger - made with 5 carbohydrate, 7 fat and 3 flavour
      if (product == `burger`) {
        store.carbohydrate -= 5 * qty;
        store.fat -= 7 * qty;
        store.flavour -= 3 * qty;
      }
      //eggs - made with 5 protein, 1 fat and 1 flavour
      if (product == "eggs") {
        store.protein -= 5 * qty;
        store.fat -= qty;
        store.flavour -= qty;
      }
      //turkey - made with 10 protein, 10 carbohydrate, 10 fat and 10 flavour
      if (product == "turkey") {
        store.protein -= 10 * qty;
        store.carbohydrate -= 10 * qty;
        store.fat -= 10 * qty;
        store.flavour -= 10 * qty;
      }
      for (let ingredient in store) {
      if (store[ingredient] < 0) {
        return `Error: not enough ${ingredient} in stock`;
      }
    }
    return `Success`;
  }

  function report() {
    return `protein=${store.protein} carbohydrate=${store.carbohydrate} fat=${store.fat} flavour=${store.flavour}`;
  }
}

let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log(manager("restock carbohydrate 10")); // Success
console.log(manager("restock flavour 10")); // Success
console.log(manager("prepare apple 1")); // Success
console.log(manager("restock fat 10")); // Success
console.log(manager("prepare burger 1")); // Success
console.log(manager("report")); // protein=0 carbohydrate=4 fat=3 flavour=55
