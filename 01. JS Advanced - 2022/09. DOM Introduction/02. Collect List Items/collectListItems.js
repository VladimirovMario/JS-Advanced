function extractText() {
  const items = Array.from(document.getElementById(`items`).children);
  const result = items.map((el) => el.textContent);
  const textArea = document.querySelector(`#result`);

  textArea.value = result.join(`\n`);
}
