function townPopulation(array) {
  let obj = {};

  for (const iterator of array) {
    let [townName, population] = iterator.split(` <-> `);
    population = Number(population);

    if (obj.hasOwnProperty(townName) == false) {
      obj[townName] = 0;
    }
    obj[townName] += population;
  }

  for (const town in obj) {
    console.log(town + ` : ` + obj[town]);
  }
}
townPopulation([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
console.log(`---`);
townPopulation([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
