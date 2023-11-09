import { post } from "./api.js";
import { createSubmitHandler } from "./util.js";

const section = document.getElementById("form-sign-up");
section.remove();

// display logic
let ctx = null;
export function showRegister(inCtx) {
  ctx = inCtx
  ctx.showView(section);
}


const form = section.querySelector(`form`);
createSubmitHandler(form, onSubmit)

async function onSubmit(data) {
  // With every new task check for name of input fields!!!!!!
  const email = data.email;
  const password = data.password;
  const rePass = data.repeatPassword;

  if (password.length < 6) {
    return alert("The password should be at least 6 characters long");
  }
  if (password != rePass) {
    return alert("Password don't match!");
  }

  const { accessToken, _id } = await post(`/users/register`, {
    email,
    password,
  });
  const userData = {
    email,
    accessToken,
    id: _id,
  };

  sessionStorage.setItem("userData", JSON.stringify(userData));

  form.reset();
  ctx.checkUser();
  ctx.goTo('homeLink');
}
