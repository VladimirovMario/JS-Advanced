//TODO EDIT FUNCTIONALITY

import { showHome } from "./home.js";
import { showLogin } from "./login.js";
import { showRegister } from "./register.js";

const currView = {
  homeLink: showHome,
  loginLink: showLogin,
  registerLink: showRegister,
};

document.querySelector(`nav`).addEventListener(`click`, onNavigate);
document.querySelector(`#logoutBtn`).addEventListener(`click`, onLogout);

function onNavigate(event) {
  if (event.target.tagName == `A`) {
    const view = currView[event.target.id];
    if (typeof view == "function") {
      event.preventDefault();
      view();
    }
  }
}

checkUser();
showHome();

//2:20
export function checkUser() {
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const greeting = document.getElementById("greeting");
  const guestLogin = document.getElementById("loginLink");
  const guestRegister = document.getElementById("registerLink");
  const userLogout = document.getElementById("logoutBtn");

  if (userData != null) {
    greeting.textContent = `Welcome, ${userData.email}`;
    userLogout.parentElement.style.display = "block";
    guestLogin.parentElement.style.display = "none";
    guestRegister.parentElement.style.display = "none";

    
  } else {
    greeting.textContent = ''
    userLogout.parentElement.style.display = "none";
    guestLogin.parentElement.style.display = "block";
    guestRegister.parentElement.style.display = "block";

  }
}

async function onLogout(event) {
  event.preventDefault();
  //Method of the Event interface prevents other
  //listeners of the same event from being called.
  event.stopImmediatePropagation();

  const userData = JSON.parse(sessionStorage.getItem("userData"));

  await fetch(`http://localhost:3030/users/logout`, {
    method: "get",
    headers: { "X-Authorization": userData.token },
  });

  sessionStorage.removeItem("userData");
  checkUser();
  showLogin();
}

// window.showHome = showHome
// window.showDetails = showDetails
