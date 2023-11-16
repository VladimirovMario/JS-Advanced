import { login } from "../api/users.js";

const section = document.getElementById("loginPage");

const form = section.querySelector("form");
form.addEventListener("submit", onSubmit);

const aTag = form.querySelector('a')
aTag.addEventListener('click', redirect)

let ctx = null;
export function showLogin(context) {
  ctx = context;
  context.showSection(section);
}

function redirect(event) {
  event.preventDefault()
  ctx.goTo('/register')
}

async function onSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);

  const data = {};
  for (const [key, value] of formData.entries()) {
    if (value == ``) {
      return alert("All fields are required!");
    }
    data[key] = value.trim();
  }
  ////////////////
  // console.log(`from login page`, data);
  // console.log(ctx);
  //////////////////

  await login(data);
  form.reset();
  ctx.checkUserNav();
  ctx.goTo("/");
}
