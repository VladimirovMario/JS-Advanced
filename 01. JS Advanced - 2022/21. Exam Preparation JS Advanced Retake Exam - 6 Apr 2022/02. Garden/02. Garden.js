class Garden {
    constructor(spaceAvailable) {
    this.spaceAvailable = spaceAvailable;
    this.plants = [];
    this.storage = [];
  }
  addPlant(plantName, spaceRequired) {
    if (this.spaceAvailable - spaceRequired <= 0) {
      throw new Error(`Not enough space in the garden.`);
    }
    this.spaceAvailable -= spaceRequired;

    const currPlant = {
      plantName,
      spaceRequired,
      ripe: false,
      quantity: 0,
    };
    this.plants.push(currPlant);

    return `The ${plantName} has been successfully planted in the garden.`;
  }

  ripenPlant(plantName, quantity) {

    const found = this.plants.find((element) => element.plantName == plantName);

    if (found == undefined) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }
    if (found.ripe) {
      throw new Error(`The ${plantName} is already ripe.`);
    }
    if (quantity <= 0) {
      throw new Error(`The quantity cannot be zero or negative.`);
    }

    found.ripe = true;
    found.quantity += quantity;

    if (quantity == 1) {
      return `${quantity} ${plantName} has successfully ripened.`;
    } else {
      return `${quantity} ${plantName}s have successfully ripened.`;
    }
  }

  harvestPlant(plantName) {

    const foundIndex = this.plants.findIndex((el) => el.plantName == plantName);

    if (foundIndex == -1) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }

    const plant = this.plants[foundIndex];

    if (plant.ripe == false) {
      throw new Error(
        `The ${plantName} cannot be harvested before it is ripe.`
      );
    }
    // Otherwise, this function should remove the plant from the plants array,
    this.plants.splice(foundIndex, 1);

    // add it to storage with properties plantName and quantity,
    this.storage.push({ plantName, quantity: plant.quantity });
    
    // free up the total space that the plant required, and return:
    this.spaceAvailable += plant.spaceRequired;
    return `The ${plantName} has been successfully harvested.`;
  }

  generateReport() {

    let sorted = this.plants.map((name) => name.plantName); //
    sorted.sort((a, b) => a.localeCompare(b));

    let first = `The garden has ${this.spaceAvailable} free space left.`;
    let second = `Plants in the garden: ${sorted.join(`, `)}`;
    let third = `Plants in storage: `;

    if (this.storage.length == 0) {
      third += `The storage is empty.`;
    } else {
      let list = [];
      for (const currPlant of this.storage) {
        list.push(`${currPlant.plantName} (${currPlant.quantity})`);
      }
      third += list.join(`, `);
    }
    return [`${first}`, `${second}`, `${third}`].join(`\n`);
  }
}

1; //input
// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('olive', 50));
1; // output
// The apple has been successfully planted in the garden.
// The orange has been successfully planted in the garden.
// Uncaught Error Error: Not enough space in the garden.

2; // input
// const myGarden = new Garden(250);
// console.log(myGarden.addPlant("apple", 20));
// console.log(myGarden.addPlant("orange", 100));
// console.log(myGarden.addPlant("cucumber", 30));
// console.log(myGarden.ripenPlant("apple", 10));
// console.log(myGarden.ripenPlant("orange", 1));
// console.log(myGarden.ripenPlant('orange', 4));
2; // output
// The apple has been successfully planted in the garden.
// The orange has been successfully planted in the garden.
// The cucumber has been successfully planted in the garden.
// 10 apples have successfully ripened.
// 1 orange has successfully ripened.
// Uncaught Error Error: The orange is already ripe.

3; // input
// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('olive', 30));
3; // output
// The apple has been successfully planted in the garden.
// The orange has been successfully planted in the garden.
// The cucumber has been successfully planted in the garden.
// 10 apples have successfully ripened.
// 1 orange has successfully ripened.
// Uncaught Error Error: There is no olive in the garden.

4; // input
// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('cucumber', -5));
4; // output
// The apple has been successfully planted in the garden.
// The orange has been successfully planted in the garden.
// The cucumber has been successfully planted in the garden.
// 10 apples have successfully ripened.
// 1 orange has successfully ripened.
// Uncaught Error Error: The quantity cannot be zero or negative.

5; // input
// const myGarden = new Garden(250);
// console.log(myGarden.addPlant("apple", 20));
// console.log(myGarden.addPlant("orange", 200));
// console.log(myGarden.addPlant("raspberry", 10));
// console.log(myGarden.ripenPlant("apple", 10));
// console.log(myGarden.ripenPlant("orange", 1));
// console.log(myGarden.harvestPlant("apple"));
// console.log(myGarden.harvestPlant("olive"));
5; // output
// The apple has been successfully planted in the garden.
// The orange has been successfully planted in the garden.
// The raspberry has been successfully planted in the garden.
// 10 apples have successfully ripened.
// 1 orange has successfully ripened.
// The apple has been successfully harvested.
// Uncaught Error Error: There is no olive in the garden.

6; // input
// const myGarden = new Garden(250);
// console.log(myGarden.addPlant("apple", 20));
// console.log(myGarden.addPlant("orange", 200));
// console.log(myGarden.addPlant("raspberry", 10));
// console.log(myGarden.ripenPlant("apple", 10));
// console.log(myGarden.ripenPlant("orange", 1));
// console.log(myGarden.harvestPlant("apple"));
// console.log(myGarden.harvestPlant("raspberry"));
6; // output
// The apple has been successfully planted in the garden.
// The orange has been successfully planted in the garden.
// The raspberry has been successfully planted in the garden.
// 10 apples have successfully ripened.
// 1 orange has successfully ripened.
// The apple has been successfully harvested.
// Uncaught Error Error: The raspberry cannot be harvested before it is ripe.

7; // input for Report
const myGarden = new Garden(250);
console.log(myGarden.addPlant("apple", 20));
console.log(myGarden.addPlant("orange", 200));
console.log(myGarden.addPlant("raspberry", 10));
console.log(myGarden.ripenPlant("apple", 10));
console.log(myGarden.ripenPlant("orange", 1));
console.log(myGarden.harvestPlant("orange"));
console.log(myGarden.generateReport());
7; // output
// The apple has been successfully planted in the garden.
// The orange has been successfully planted in the garden.
// The raspberry has been successfully planted in the garden.
// 10 apples have successfully ripened.
// 1 orange has successfully ripened.
// The orange has been successfully harvested.
// The garden has 220 free space left.
// Plants in the garden: apple, raspberry
// Plants in storage: orange (1)

// console.log(`----`);
// console.log(myGarden);
