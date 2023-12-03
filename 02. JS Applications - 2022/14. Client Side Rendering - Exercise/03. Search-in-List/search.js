import { html, nothing, render } from "./node_modules/lit-html/lit-html.js";
import { towns as townName } from "./towns.js";

const section = document.querySelector("#towns");
const input = document.querySelector("#searchText");
const searchBtn = document.querySelector("button");
searchBtn.addEventListener("click", search);
const resultDiv = document.querySelector("#result");

const towns = townName.map((t) => ({ name: t, match: false })); //

const townsTemplate = (town) =>
  html` <li class=${town.match ? "active" : nothing}>${town.name}</li>`;

update();

function update() {
  render(
    html`<ul>
      ${towns.map(townsTemplate)}
    </ul>`,
    section
  );
}

function search() {
  const match = input.value.toLowerCase();
  let count = 0;

  for (const town of towns) {
    if (match && town.name.toLowerCase().includes(match)) {
      town.match = true;
      count++;
    } else {
      town.match = false;
    }
  }
  resultDiv.textContent = `${count} matches found`;
  update();
  input.value = ``;
}
