function argumentInfo(...arg) {
  const types = {};

  for (const iterator of arg) {
    let currType = typeof iterator;
    console.log(`${typeof iterator}: ${iterator}`);

    if (types.hasOwnProperty(currType) == false) {
      types[currType] = 0;
    }
    types[currType]++;
  }

  let sorted = Object.entries(types).sort((a, b) => b[1] - a[1]);

  for (const [type, count] of sorted) {
    console.log(`${type} = ${count}`);
  }
}

argumentInfo("cat", 42, function () {
  console.log("Hello world!");
});

/*
string: cat
number: 42
function: function () {
  console.log("Hello world!");
}
string = 1
number = 1
function = 1
*/
