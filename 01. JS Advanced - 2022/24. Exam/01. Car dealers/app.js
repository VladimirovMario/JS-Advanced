window.addEventListener("load", solve);

function solve() {
  const make = document.getElementById(`make`);
  const currModel = document.getElementById(`model`);
  const currYear = document.getElementById(`year`);
  const fuel = document.querySelector(`#fuel > option`);
  const originalCost = document.getElementById(`original-cost`);
  const selling = document.getElementById(`selling-price`);

  const buttonPublish = document.getElementById(`publish`);
  buttonPublish.addEventListener(`click`, onPublish);

  const placeToAdd = document.getElementById(`table-body`);

  const ulToAdd = document.getElementById(`cars-list`);

  function onPublish(event) {
    event.preventDefault();

    if (
      make.value == `` ||
      currModel.value == `` ||
      currYear.value == `` ||
      fuel.parentElement.value == `` ||
      originalCost.value == `` ||
      selling.value == ``
    ) {
      return;
    }

    let mark = make.value;
    let model = currModel.value;
    let year = Number(currYear.value);
    let currFuel = fuel.parentElement.value;
    let cost = Number(originalCost.value);
    let sellingPrice = Number(selling.value);

    if (sellingPrice <= cost) {
      return;
    }

    make.value = ``;
    currModel.value = ``;
    currYear.value = ``;
    fuel.parentElement.value = ``;
    originalCost.value = ``;
    selling.value = ``;

    const tr = createEl(`tr`, ``, `row`);
    const td1 = createEl(`td`, `${mark}`);
    tr.appendChild(td1);
    const td2 = createEl(`td`, `${model}`);
    tr.appendChild(td2);
    const td3 = createEl(`td`, `${year}`);
    tr.appendChild(td3);
    const td4 = createEl(`td`, `${currFuel}`);
    tr.appendChild(td4);
    const td5 = createEl(`td`, `${cost}`);
    tr.appendChild(td5);
    const td6 = createEl(`td`, `${sellingPrice}`);
    tr.appendChild(td6);
    const td7 = createEl(`td`);
    tr.appendChild(td7);

    const editButton = createEl(`button`, `Edit`, `action-btn edit`, onEdit);
    td7.appendChild(editButton);
    const sellButton = createEl(`button`, `Sell`, `action-btn sell`, onSell);
    td7.appendChild(sellButton);
    placeToAdd.appendChild(tr);

    function onEdit(params) {
      make.value = mark;
      currModel.value = model;
      currYear.value = year;
      fuel.parentElement.value = currFuel;
      originalCost.value = cost;
      selling.value = sellingPrice;
      tr.remove();
    }
    function onSell(params) {
      tr.remove();
      const li = createEl(`li`, ``, `each-list`);
      ulToAdd.appendChild(li);
      const span1 = createEl(`span`, `${mark} ${model}`);
      li.appendChild(span1);
      const span2 = createEl(`span`, `${year}`);
      li.appendChild(span2);
      const span3 = createEl(`span`, `${sellingPrice - cost}`);
      li.appendChild(span3);

      let  total = document.getElementById(`profit`);
      let sum = Number(total.textContent)
      total.textContent = ((sellingPrice - cost) + sum).toFixed(2)
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
