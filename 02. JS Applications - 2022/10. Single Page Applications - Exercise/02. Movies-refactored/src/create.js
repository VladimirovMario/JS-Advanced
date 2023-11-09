import { post } from "./api.js";
import { createSubmitHandler } from "./util.js";
import { showView } from "./dom.js";
import { showHome } from "./home.js";

const section = document.getElementById("add-movie");
section.remove();

export function showCreate() { 
    showView(section);
}

const form = section.querySelector("form");
createSubmitHandler(form, onSubmit);

async function onSubmit(data) {
  await post(`/data/movies`, data);
  form.reset();
  showHome(); ////// todo
}
