// function sumTable() {
//   let currRow = Array.from(document.querySelectorAll(`td`));

//   let sum = 0;
//   for (let i = 0; i < currRow.length - 1; i++) {
//     if (i % 2 != 0) {
//       let currNum = Number(currRow[i].textContent);
//       sum += currNum;
//     }
//   }
//   document.getElementById(`sum`).textContent = sum;
// }

function sumTable() {
  let currRow = Array.from(document.getElementsByTagName(`tr`));

  let sum = 0;
  for (let i = 1; i < currRow.length - 1; i++) {
    let currNum = Number(currRow[i].lastElementChild.textContent);
    sum += currNum;
  }
  document.getElementById(`sum`).textContent = sum;
}