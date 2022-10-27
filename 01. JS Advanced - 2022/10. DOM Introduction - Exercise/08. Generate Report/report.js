// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name
function generateReport() {
  let checkBox = Array.from(document.querySelectorAll(`thead tr th input`));

  let currTr = Array.from(document.querySelectorAll(`tbody tr`));

  let result = [];
  let isChecked = false;

  for (let tr = 0; tr < currTr.length; tr++) {
    let obj = {};
    let currField = Array.from(currTr[tr].children);

    for (let td = 0; td < currField.length; td++) {
      if (checkBox[td].checked) {
        isChecked = true;
        let key = checkBox[td].name; // .name ?
        let value = currField[td].textContent;

        obj[key] = value;
      }
    }
    result.push(obj);
  }
  if (isChecked) {
    let output = document.getElementById(`output`);
    output.textContent = JSON.stringify(result);
  }
}
