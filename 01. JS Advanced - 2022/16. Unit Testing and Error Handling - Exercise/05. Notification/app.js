function notify(message) {
  let action = document.getElementById(`notification`);
  action.style.display = "block";
  action.textContent = message;

  action.addEventListener(`click`, hideIt);

  function hideIt() {
    action.style.display = `none`;
  }
}
