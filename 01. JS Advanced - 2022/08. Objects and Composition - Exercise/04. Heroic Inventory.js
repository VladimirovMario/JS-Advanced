function heroicInventory(array) {
  let result = [];
  let currHero = {};

  for (let i = 0; i < array.length; i++) {
    const [currName, currLevel, currItems] = array[i].split(` / `);

    currHero = { name: currName, level: Number(currLevel), items: [] };

    let currItem = currItems ? currItems.split(`, `) : [];

    for (const iterator of currItem) {
      currHero.items.push(iterator);
    }

    result.push(currHero);
  }

  return JSON.stringify(result);
}
console.log(
  heroicInventory([
    "Isacc / 25 / Apple, GravityGun",
    "Isacc / 25 / ",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
  ])
);

console.log(heroicInventory(["Jake / 1000 / Gauss, HolidayGrenade"]));

/**[{"name":"Isacc","level":25,"items":["Apple","GravityGun"]},{"name":"Derek","level":12,"items":["BarrelVest","DestructionSword"]},{"name":"Hes","level":1,"items":["Desolator","Sentinel","Antara"]}] */
