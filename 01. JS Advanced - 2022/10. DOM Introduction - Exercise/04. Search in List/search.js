function search() {
  let list = document.querySelectorAll(`#towns li`);
  let searchedText = document.getElementById(`searchText`).value;
  let result = document.getElementById(`result`);
  let matches = 0;

  for (const element of list) {
    let currName = element.textContent;

    if (currName.includes(searchedText)) {
      matches++;
      element.style.fontWeight = `bold`;
      element.style.textDecoration = `underline`;
    } else {
      element.style.fontWeight = `normal`;
      element.style.textDecoration = ``;
    }
  }

  result.textContent = `${matches} matches found`;
}
