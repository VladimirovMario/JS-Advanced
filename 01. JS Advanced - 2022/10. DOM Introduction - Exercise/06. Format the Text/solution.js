function solve() {
  let inputText = document.getElementById(`input`).value;
  let output = document.getElementById(`output`);

  inputText = inputText.split(`.`);

  let result = ``;
  let count = 0;

  for (let i = 0; i < inputText.length; i++) {
    if (inputText[i].length > 0) {
      if (count == 0) {
        count++;
        result += `<p>${inputText[i]}.`;
      } else if (count == 1) {
        count++;
        result += `${inputText[i]}.`;
      } else if (count == 2) {
        count = 0;
        result += `${inputText[i]}.</p>`;
      }
    }
  }

  output.innerHTML = result;
}
