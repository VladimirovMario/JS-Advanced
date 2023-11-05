import { get } from "./api.js";

export function checkForUser() {
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const greeting = document.getElementById("greeting");

  if (userData != null) {
    document.getElementById("userNav").style.display = "inline-block";
    document.getElementById("guestNav").style.display = "none";
    greeting.textContent = `Welcome ${userData.email}!`;
  } else {
    document.getElementById("guestNav").style.display = "inline-block";
    document.getElementById("userNav").style.display = "none";
  }
}

export function onLogOut(ctx) {
  get(`/users/logout`);
  sessionStorage.removeItem("userData");
  ctx.checkForUser();
  ctx.goTo("homeBtn");
}

export function createSubmitHandler(form, callback) {
  form.addEventListener("submit", onSubmit);
  function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(form);

    const data = {};
    for (const [key, value] of formData.entries()) {
      if (value == ``) {
        return alert("All fields are required!");
      }
      data[key] = value.trim();
    }    
    // from Victor
    // const data = [...formData.entries()].reduce(
    //   (a, [k, v]) => Object.assign(a, { [k]: v.trim()}),{});
    // if (Object.values(data).some((x) => x == ``)) {
    //   return alert("All fields are required!");
    // }
    callback(data);
  }
}
