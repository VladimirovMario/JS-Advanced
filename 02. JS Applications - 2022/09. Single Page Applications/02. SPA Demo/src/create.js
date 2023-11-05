import { post } from "./api.js";
import { createSubmitHandler } from "./util.js";

const section = document.getElementById("createView");
const form = section.querySelector("form");
createSubmitHandler(form ,onCreate)
section.remove();
let ctx = null;

export function showCreate(inCtx) {
  ctx = inCtx;
  ctx.render(section);
}

async function onCreate(data) {
  await post(`/data/movies`, data);
  form.reset();
  ctx.goTo('catalogBtn');
}
