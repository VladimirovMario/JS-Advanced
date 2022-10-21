function colorize() {
  const currRow = document.querySelectorAll(`table tr`);

  for (let index = 1; index < currRow.length; index += 2) {
    currRow[index].style.background = "teal";
  }
}
