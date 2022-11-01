//Do not work properly with EXEC()
function validate() {
  let input = document.getElementById(`email`);
  input.addEventListener(`change`, onChange);

  let pattern = /^[a-z]+@[a-z]+\.[a-z]+/g;

  function onChange() {
    let isValid = pattern.test(input.value);

    if (isValid) {
      input.classList.remove(`error`);
    } else {
      input.classList.add(`error`);
    }
  }
}
