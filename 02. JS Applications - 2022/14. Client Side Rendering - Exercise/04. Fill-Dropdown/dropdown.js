import { html, render } from "./node_modules/lit-html//lit-html.js";

const selectTemplate = (items) => html`
  <select id="menu">
    ${items.map(
      (i) => html`<option .value=${i._id}>${i.text}</option>`
    )}
  </select>
`;
const baseUrl = "http://localhost:3030/jsonstore/advanced/dropdown";
const root = document.querySelector("div");
const form = document.querySelector("form");
form.addEventListener("submit", onSubmit);

getData();

function update(items) {
  render(selectTemplate(items), root);
}

async function getData() {
  const res = await fetch(baseUrl);
  const resData = await res.json();
  update(Object.values(resData));
}

async function onSubmit(event) {
  event.preventDefault();

  const text = document.querySelector("#itemText").value;

  if (!text) {
    return;
  }

  const res = await fetch(baseUrl, {
    method: "post",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ text }),
  });

  if (res.status == 200) {
    getData();
  }
  
  form.reset();
}
