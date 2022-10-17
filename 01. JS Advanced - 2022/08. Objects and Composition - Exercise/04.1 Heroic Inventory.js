function heroicInventory(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let [name, level, items] = array[i].split(` / `);
    level = Number(level);

    items = items ? items.split(`, `) : [];

    result.push({ name, level, items });
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
