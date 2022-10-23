function solve() {
  let input = document.getElementById(`text`).value;
  let convention = document.getElementById(`naming-convention`).value;

  input = input.toLowerCase().split(` `);

  let result = [];

  for (let index = 0; index < input.length; index++) {
    let currWord = input[index];
    currWord = currWord[0].toUpperCase() + currWord.slice(1);

    if (convention == `Camel Case`) {
      if (index == 0) {
        currWord = currWord[0].toLowerCase() + currWord.slice(1);
      }
      result.push(currWord);
    } else if (convention == `Pascal Case`) {
      result.push(currWord);
    } else {
      result.push(`Error!`);
      break;
    }
  }
  document.getElementById(`result`).textContent = result.join(``);
}

// To try it write in the text field: this is an example
// Then in the naming-convention field: Camel Case
// And the expected output is: thisIsAnExample

// solve("secOND eXamPLE", "Pascal Case");
// solve("Invalid Input", "Another Case");
