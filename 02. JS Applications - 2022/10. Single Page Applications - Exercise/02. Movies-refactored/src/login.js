import { post } from "./api.js";
import { createSubmitHandler } from "./util.js";

// - detach section from Dom
const section = document.getElementById("form-login");
section.remove();

// display logic
let ctx = null
export function showLogin(inCtx) {
  //Object { showView: showView(section), goTo: goTo(viewName) }
  ctx = inCtx
  ctx.showView(section);
}


const form = section.querySelector("form");
createSubmitHandler(form, onSubmit)

async function onSubmit(data) {  
  const resData = await post(`/users/login`, data);
    const userData = {
    email: resData.email,
    id: resData._id,
    accessToken: resData.accessToken,
  };
  sessionStorage.setItem("userData", JSON.stringify(userData));  
  form.reset();
  ctx.checkUser()
  ctx.goTo('homeLink')
}