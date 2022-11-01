function focused() {
  const inputFields = Array.from(document.querySelectorAll(`input`));

  for (const currField of inputFields) {
    currField.addEventListener(`focus`, onMouseOver);
    currField.addEventListener(`blur`, onMouseOut);
  }

  function onMouseOver(event) {
    event.target.parentElement.classList.add(`focused`);
  }
  function onMouseOut(event) {
    event.target.parentElement.classList.remove(`focused`);
  }
}
