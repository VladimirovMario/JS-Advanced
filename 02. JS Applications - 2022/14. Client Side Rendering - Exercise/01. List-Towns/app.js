import { html, render } from './node_modules/lit-html/lit-html.js';

const root = document.querySelector('#root');

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const towns = document
    .querySelector('#towns')
    .value.split(',')
    .map((element) => element.trim());

  if (document.querySelector('#towns').value == ``) {
    return;
  }

  event.target.reset();
  render(listTemplate(towns), root);
});

const listTemplate = (towns) => html`
  <ul>
    ${towns.map((town) => html`<li>${town}</li>`)}
  </ul>
`;
