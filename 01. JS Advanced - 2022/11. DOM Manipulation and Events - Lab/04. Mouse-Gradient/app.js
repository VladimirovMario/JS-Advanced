function attachGradientEvents() {
  const gradient = document.getElementById(`gradient`);
  gradient.addEventListener(`mousemove`, onMouseMove);
  gradient.addEventListener(`mouseout`, onMouseOut);

  const result = document.getElementById(`result`);

  function onMouseMove(event) {
    /*
    // see those two together
    console.log(event);
    gradient.removeEventListener(`mousemove`,onMouseMove);
*/
    // console.log(event.offsetX,event.offsetY,gradient.clientWidth);

    let percentage = Math.floor((event.offsetX / gradient.clientWidth) * 100);
    result.textContent = `${percentage}%`;
  }

  function onMouseOut() {
    result.textContent = ``;
  }
}
