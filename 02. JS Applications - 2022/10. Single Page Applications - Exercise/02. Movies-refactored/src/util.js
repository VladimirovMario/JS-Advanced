import { get } from "./api.js";

export function checkUser() {
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  if (userData != null) {
    document.getElementById("greeting").textContent = `Welcome, ${userData.email}`;
    document.getElementById("logoutBtn").parentElement.style.display = "block";
    document.getElementById("loginLink").parentElement.style.display = "none";
    document.getElementById("registerLink").parentElement.style.display =
      "none";
  } else {
    document.getElementById("greeting").textContent = "";
    document.getElementById("logoutBtn").parentElement.style.display = "none";
    document.getElementById("loginLink").parentElement.style.display = "block";
    document.getElementById("registerLink").parentElement.style.display = "block";
  }
}

export function onLogOut(ctx) {
  get(`/users/logout`);
  sessionStorage.removeItem("userData");
  ctx.checkUser();
  ctx.goTo("homeLink");
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