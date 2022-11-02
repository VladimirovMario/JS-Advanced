function solve() {
  let addButtons = Array.from(document.getElementsByClassName(["add-product"]));
  let checkButton = document.querySelector(`.checkout`);

  let textArea = document.querySelector(`.shopping-cart textarea:nth-child(5)`);

  addButtons.forEach((el) => el.addEventListener(`click`, onClick));

  checkButton.addEventListener(`click`, checkOutClick);

  const checkOut = [];

  let totalPrice = 0;

  function onClick(event) {
    let parent = event.target.parentElement.parentElement;
    let children = parent.children;

    let name = children[1].children[0].textContent;
    let price = Number(children[3].textContent);
    totalPrice += price;

    textArea.textContent += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;

    if (checkOut.includes(name) == false) {
      checkOut.push(name);
    }
  }

  function checkOutClick(ev) {
    textArea.textContent += `You bought ${checkOut.join(`, `)} for ${totalPrice.toFixed(2)}.`;

    if (ev) {
      checkButton.removeEventListener(`click`, checkOutClick);
      addButtons.forEach((el) => el.removeEventListener(`click`, onClick));
    }
  }
}
