function lockedProfile() {
  let buttons = Array.from(document.getElementsByTagName(`button`));
  buttons.forEach((element) => element.addEventListener(`click`, Onclick));

  function Onclick(event) {
    let parent = event.target.parentElement;

    let profileIsActive = parent.querySelector(`input[value="unlock"]`).checked;

    let infoToShow = parent.querySelectorAll(`div`)[0];
    // or // let infoToShow = parent.querySelector(`div`)

    let currButton = parent.querySelector(`div.profile  button:nth-child(11)`);
    //or // event.target

    if (profileIsActive) {
      if (currButton.textContent == `Show more`) {
        infoToShow.style.display = `block`;
        currButton.textContent = `Hide it`;
      } else {
        infoToShow.style.display = `none`;
        currButton.textContent = `Show more`;
      }
    }
  }
}
