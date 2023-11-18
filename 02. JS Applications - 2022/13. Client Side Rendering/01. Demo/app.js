import { html, render } from "./node_modules/lit-html/lit-html.js";
import { styleMap } from "../node_modules/lit-html/directives/style-map.js";
import { repeat } from "../node_modules/lit-html/directives/repeat.js";

import { data } from "./data.js";
import { articleTemplate } from "./views/article.js";
import { formTemplate } from "./views/form.js";

const greetingTemplate = (name, count) =>
  html` <h2
      style=${styleMap({
        color: "blue",
      })}
    >
      Hello there, ${name}. Clicked ${count} times.
    </h2>
    <input type="text" ?disabled=${true} .value=${"Input field"} />
    <textarea .value=${"Text area field"}></textarea>`;

const timerTemplate = (time) =>
  html`The time is: ${time.hours}:${time.minutes}:${time.seconds}`;

const main = document.querySelector("main");
const form = document.querySelector("#form");

start();

function start() {
  const reloadBtn = document.querySelector("#reloadBtn")
  reloadBtn.addEventListener("click", onReload);
  reloadBtn.style.margin = '15px'

  // render == replaceChildren()
  // render != appendChild()
  // repeat() Much more efficient than .map()
  render(
    repeat(data, (a) => a.id, articleTemplate.bind(null, onDelete)),
    main
  );
  render(formTemplate(onSubmit), form);

  setInterval(updateTimer, 1000);
}

function updateTimer() {
  const now = new Date();

  const time = {
    hours: now.getHours(),
    minutes: ("0" + now.getMinutes()).slice(-2),
    seconds: ("0" + now.getSeconds()).slice(-2),
  };

  render(timerTemplate(time), document.querySelector("#timer"));
}

let count = 1;

function onReload() {
  const header = document.querySelector("header");
  const templateResult = greetingTemplate(`Peter`, count++);
  render(templateResult, header);
  //   console.log(templateResult);
}

function onDelete(index) {
  // console.log(index);
  data.splice(index, 1);
  start();
}

function onSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const article = {
    id: "aaa" + ((Math.random() * 999) | 0),
    title: formData.get("title"),
    author: formData.get("author"),
    content: formData.get("content"),
    class: "red",
  };
  if (article.title == `` || article.author == "" || article.content == "") {
    return;
  }

  event.target.reset();
  data.push(article);
  start();
}
