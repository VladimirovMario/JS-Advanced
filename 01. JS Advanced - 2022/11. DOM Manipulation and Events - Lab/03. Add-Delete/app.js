function addItem() {
  const input = document.getElementById(`newItemText`);
  const ul = document.getElementById(`items`);

  if (input.value.length == ``) {
    return;
  }

  const li = document.createElement(`li`);
  ul.appendChild(li);
  li.textContent = input.value;

  const aLink = document.createElement(`a`);
  li.appendChild(aLink);
  aLink.textContent = `[Delete]`;
  aLink.href = `#`;

  aLink.addEventListener(`click`, onDelete);
  aLink.addEventListener(`touchstart`, onDelete);

  input.value = ``;

  
  function onDelete(event) {
    /*
    console.log(event);
    event = click: from aLink.addEventListener(`click`, onDelete);

    click { target: a, buttons: 0,
                    clientX: 560, clientY: 92,
                          layerX: 560, layerY: 92 }
*/

    // console.log(event.target);
    // event.target = <a href="#">

    //   console.log(event.target.parentElement);
    // in this case is:  <li>

    event.target.parentElement.remove();
  }
}
