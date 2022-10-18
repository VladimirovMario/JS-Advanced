function townsToJSON(array) {
  let firstRow = array.shift().split(` `);

  let result = [];

  for (let i = 0; i < array.length; i++) {
    let obj = {};

    let element = array[i].split(`|`).filter((el) => el !== ``);
    let name = element[0].trim();
    let lat = Number(element[1].trim());
    let long = Number(element[2].trim());

    let latAsNumber = Number(lat.toFixed(2));
    let longAsNumber = Number(long.toFixed(2));

    obj[firstRow[1]] = name;
    obj[firstRow[3]] = latAsNumber;
    obj[firstRow[5]] = longAsNumber;

    result.push(obj);
  }

  console.log(JSON.stringify(result));
}

townsToJSON([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);

console.log(`---`);

townsToJSON([
  "| Town | Latitude | Longitude |",
  "| Veliko Turnovo | 43.0757 | 25.6172 |",
  "| Montevideo | 34.50 | 56.11 |",
]);

/*
[{"Town":"Sofia","Latitude":42.7,"Longitude":23.33},{"Town":"Beijing","Latitude":39.91,"Longitude":116.36}]
---
[{"Town":"Veliko Turnovo","Latitude":43.08,"Longitude":25.62},{"Town":"Montevideo","Latitude":34.5,"Longitude":56.11}]
*/
