function cityTaxes(name, population, treasury) {
  return {
    name,
    population,
    treasury,
    taxRate: 10,
    collectTaxes() {
      this.treasury += this.population * this.taxRate;
    },
    applyGrowth(percentage) {
      this.population += Math.floor((this.population * percentage) / 100);
    },
    applyRecession(percentage) {
      this.treasury -= Math.floor((this.treasury * percentage) / 100);
    },
  };
}

console.log(cityTaxes("Tortuga", 7000, 15000)); 

console.log(`----------`);

const city = cityTaxes("Tortuga", 7000, 15000); 

city.collectTaxes(); 
console.log(city.treasury); 

city.applyGrowth(5);
console.log(city.population);

city.applyRecession(50); 
console.log(city.treasury);

/*
{
  name: 'Tortuga',
  population: 7000,
  treasury: 15000,
  taxRate: 10,
  collectTaxes: [Function: collectTaxes],
  applyGrowth: [Function: applyGrowth],
  applyRecession: [Function: applyRecession]
}
----------
85000
7350
42500
*/