import { register } from "../api/users.js";

const section = document.getElementById("registerPage");

const form = section.querySelector("form");
form.addEventListener("submit", onSubmit);

const aTag = form.querySelector('a')
aTag.addEventListener('click', redirect)

let ctx = null;
export function showRegister(context) {
  ctx = context;
  context.showSection(section);
}

function redirect(event) {
  event.preventDefault()
  ctx.goTo('/login')
}

async function onSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);

  // With every new task check for name of input fields!!!!!!
  // Be careful with the property names that the server wants!!!
  const email = formData.get("email").trim();
  const password = formData.get("password").trim();
  const rePass = formData.get("repeatPassword").trim();

  if (password != rePass) {
    return alert("Password don't match!");
  }
  if (email == `` || password == ``) {
    return alert("All fields are required!");
  }

  // Specific for this task.
  if (email.length < 3) {
    return alert("The email should be at least 3 characters long");
  }
  if (password.length < 3) {
    return alert("The password should be at least 3 characters long");
  }
  //////////////////////
  // console.log(`from register page`, {email,password});
  // console.log(ctx);
  //////////////////////

  await register({ email, password });
  ctx.checkUserNav();
  form.reset();
  ctx.goTo("/");
}
