import { post } from "./api.js";
import { createSubmitHandler } from "./util.js";

const section = document.getElementById("loginView");
const form = section.querySelector("form");
createSubmitHandler(form, onSubmit)

section.remove();
let ctx = null

export function showLogin(inCtx) {
  ctx = inCtx
  ctx.render(section);
}

async function onSubmit(data) {  
  const resData = await post(`/users/login`, data);
    const userData = {
    email: resData.email,
    id: resData._id,
    accessToken: resData.accessToken,
  };
  sessionStorage.setItem("userData", JSON.stringify(userData));

  form.reset();

  ctx.checkForUser()
  ctx.goTo('homeBtn')
}
