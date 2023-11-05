import { post } from "./api.js";
import { createSubmitHandler } from "./util.js";

const section = document.getElementById("registerView");
const form = section.querySelector("form");
createSubmitHandler(form, onSubmit)
section.remove();

let ctx = null;

export function showRegister(inCtx) {
  ctx = inCtx
  ctx.render(section);
}

async function onSubmit(data) {
  // Check for name of input fields!!!!!!
  const email = data.email
  const password = data.password
  const rePassword = data.rePass 
 
  if (password != rePassword) {
    return alert("Password don't match!");
  }

  const { accessToken, _id } = await post(`/users/register`,{ email, password });
  const userData = {
    email,
    accessToken,
    id: _id,
  };
  
  sessionStorage.setItem("userData", JSON.stringify(userData));

  form.reset();

  ctx.checkForUser();
  ctx.goTo('homeBtn');
}

