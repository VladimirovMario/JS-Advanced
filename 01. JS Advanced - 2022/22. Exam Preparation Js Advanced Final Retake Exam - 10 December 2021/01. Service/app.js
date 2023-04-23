window.addEventListener("load", solve);

function solve() {
  const product = document.querySelector(`#type-product > option`);

  const sendButton = document.querySelector(`#right > form:nth-child(2) > button:nth-child(9)`);
  sendButton.addEventListener(`click`, sendOrder);

  const clearButton = document.querySelector(`.clear-btn`);
  clearButton.addEventListener(`click`, clearOrder);

  const input = {
    description: document.getElementById(`description`),
    name: document.getElementById("client-name"),
    phone: document.getElementById("client-phone"),
  };

  const received = document.getElementById(`received-orders`);
  const completed = document.getElementById(`completed-orders`);

  function sendOrder(event) {
    event.preventDefault();

    if (input.description.value == ``
    || input.name.value == `` 
    || input.phone.value == ``) 
        {return;}

    const div = createEl(`div`, ``, `container`);
    received.appendChild(div);
    div.appendChild(createEl(`h2`, `Product type for repair: ${product.parentElement.value}`));
    div.appendChild(createEl(`h3`, `Client information: ${input.name.value}, ${input.phone.value}`));
    div.appendChild(createEl(`h4`, `Description of the problem: ${input.description.value}`));

    const startButton = createEl(`button`, `Start repair`, `start-btn`, startRepair);
    div.appendChild(startButton);
    const finishButton = createEl(`button`,`Finish repair`,`finish-btn`,finishRepair);
    div.appendChild(finishButton);
    finishButton.disabled = true;

    input.description.value = ``
    input.name.value = ``
    input.phone.value = ``

    function startRepair() {
      finishButton.disabled = false;
      startButton.disabled = true;
    }
    function finishRepair() {
      completed.appendChild(div);
      startButton.remove();
      finishButton.remove();
    }
  }

  function clearOrder(event) {
    let finalStep = Array.from(event.target.parentElement.children);
    for (let i = 3; i < finalStep.length; i++) {
      finalStep[i].remove();
    }
  }

  function createEl(type, content, className, addEvent) {
    const element = document.createElement(type);
    element.textContent = content;
    if (className) {
      element.className = className;
    }
    element.addEventListener(`click`, addEvent);
    return element;
  }
}
