function listProcessor(arr) {
  let obj = {
    result: [],
  };

  for (const iterator of arr) {
    let [command, text] = iterator.split(` `);

    if (command == `add`) {
      add(text);
    } else if (command == `remove`) {
      remove(text);
    } else if (command == `print`) {
      print();
    }
  }

  function add(text) {
    obj.result.push(text);
  }
  function remove(text) {
    let searchedIndex = obj.result.indexOf(text);
    while (searchedIndex != -1) {
      obj.result.splice(searchedIndex, 1);
      searchedIndex = obj.result.indexOf(text);
    }
  }

  function print() {
    console.log(obj.result.join(`,`));
  }
}
listProcessor(["add hello", "add again", "remove hello", "add again", "print"]);

listProcessor(["add peter", "add pesho", "add george", "add peter", "remove peter", "print",]);
// expected output:
// again,again
// pesho,george
