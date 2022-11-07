function solve() {
  let input = document.querySelector(`#exercise > textarea`);

  let output = document.querySelector(`#exercise > textarea:nth-child(5)`);

  let [generate, buy] = Array.from(document.getElementsByTagName(`button`));
  generate.addEventListener(`click`, onGenerate);
  buy.addEventListener(`click`, onBuy);

  const body = document.querySelector(`.table > tbody`);

  const boughtArr = [];

  function onGenerate() {
    let arr = JSON.parse(input.value);

    for (const currItem of arr) {
      const tr = document.createElement(`tr`);
      body.appendChild(tr);

      const td1 = document.createElement(`td`);
      tr.appendChild(td1);

      const img = document.createElement(`img`);
      img.src = currItem.img;
      td1.appendChild(img);

      tr.appendChild(createElement(`td`)).appendChild(
        createElement(`p`, currItem.name)
      );
      tr.appendChild(createElement(`td`)).appendChild(
        createElement(`p`, currItem.price)
      );
      tr.appendChild(createElement(`td`)).appendChild(
        createElement(`p`, currItem.decFactor)
      );

      const checkBox = document.createElement(`input`);
      checkBox.type = `checkbox`;
      tr.appendChild(createElement(`td`)).appendChild(checkBox);

      boughtArr.push({
        //
        name: currItem.name,
        price: currItem.price,
        decFactor: currItem.decFactor,
        isChecked, //
      });

      function isChecked() {
        return checkBox.checked; //
      }
    }
  }

  function onBuy() {
    let checked = boughtArr.filter((el) => el.isChecked()); //
    let bought = [];
    let sum = 0;
    let average = 0;

    for (const iterator of checked) {
      bought.push(`${iterator.name}`);
      sum += Number(iterator.price);
      average += Number(iterator.decFactor);
    }

    let result = [];
    result.push(
      `Bought furniture: ${bought.join(`, `)}`,
      `Total price: ${sum.toFixed(2)}`,
      `Average decoration factor: ${(average /= checked.length)}`
    );
    output.textContent = result.join(`\n`);
  }

  function createElement(type, content) {
    const element = document.createElement(type);
    element.textContent = content;
    return element;
  }
}
