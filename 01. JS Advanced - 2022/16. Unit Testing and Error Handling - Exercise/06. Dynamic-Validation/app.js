function validate() {
  const input = document.getElementById(`email`);
  input.addEventListener(`change`, onChange);

  let pattern = /[a-z]+@[a-z]+\.[a-z]+/;

  function onChange() {
    if (pattern.test(input.value)) {
      input.classList.remove(`error`);
      input.value = ``;
    } else {
      input.classList.add(`error`);
    }
  }
}
