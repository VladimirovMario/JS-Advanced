function juiceFlavors(arr) {
  let flavors = {};
  let bottles = {};

  for (const iterator of arr) {
    let [juiceName, qty] = iterator.split(` => `);

    if (flavors.hasOwnProperty(juiceName) == false) {
      flavors[juiceName] = 0;
    }
    flavors[juiceName] += Number(qty);

    if (flavors[juiceName] >= 1000) {
      let bottleQty = Math.floor(flavors[juiceName] / 1000);
      flavors[juiceName] -= bottleQty * 1000;

      if (bottles.hasOwnProperty(juiceName) == false) {
        bottles[juiceName] = 0;
      }
      bottles[juiceName] += bottleQty;
    }
  }

  for (let currFlavor in bottles) {
    console.log(`${currFlavor} => ${bottles[currFlavor]}`);
  }
}
juiceFlavors([
  "Orange => 2000",
  "Peach => 1432",
  "Banana => 450",
  "Peach => 600",
  "Strawberry => 549",
]);
console.log(`---`);
juiceFlavors([
  "Kiwi => 234",
  "Pear => 2345",
  "Watermelon => 3456",
  "Kiwi => 4567",
  "Pear => 5678",
  "Watermelon => 6789",
]);

/*
Orange => 2
Peach => 2
---
Pear => 8
Watermelon => 10
Kiwi => 4
*/