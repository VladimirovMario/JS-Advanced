function create(words) {
  const placeToAdd = document.getElementById(`content`);

  words.forEach((element) => {
    const div = document.createElement(`div`);
    const p = document.createElement(`p`);
    div.appendChild(p);
    p.textContent = element;
    p.style.display = `none`;
    placeToAdd.appendChild(div);
    div.addEventListener(`click`, function onClick(ev) {
      ev.target.children[0].style.display = ``;
    });
  });
}


/*
function create(words) {
  const placeToAdd = document.getElementById(`content`);

  words.forEach((element) => {
    const div = document.createElement(`div`);
    const p = document.createElement(`p`);
    div.appendChild(p);
    p.textContent = element;
    p.style.display = `none`;
    placeToAdd.appendChild(div);
  });

  let currDiv = [...document.querySelectorAll(`#content > div`)];
  currDiv.forEach((el) => el.addEventListener(`click`, onClick));

  function onClick(ev) {
    ev.target.children[0].style.display = ``;
  }
}
*/