function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  let rows = Array.from(document.querySelectorAll(`tbody tr`));
  let input = document.getElementById(`searchField`);

  function onClick() {
    for (const currRow of rows) {
      // console.log(currRow);
      // console.log(currRow.textContent);

      currRow.classList.remove(`select`);
      if (currRow.textContent.includes(input.value)) {
        currRow.className = `select`;
      }
    }
    input.value = ``;
  }
}
