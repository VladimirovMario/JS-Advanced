function deleteByEmail() {
  const input = document.querySelector(`body > label:nth-child(2) > input:nth-child(1)`);
  const secondColumn = Array.from(document.querySelectorAll(`#customers tbody tr td:nth-child(2)`));
  const result = document.getElementById(`result`);

  for (const td of secondColumn) {

    if (td.textContent == input.value) {
        // search the parent of curr TD
      let row = td.parentNode;
        // then we remove that parent
      row.parentNode.removeChild(row);
        // set the result field
      result.textContent = `Deleted.`;
      
      // reset the input field to be ready again
      input.value = ``;
      return;
    }
  }
  // set the result if we did not found match
  result.textContent = `Not found.`;

  // reset the input field to be ready again
  input.value = ``;
}
