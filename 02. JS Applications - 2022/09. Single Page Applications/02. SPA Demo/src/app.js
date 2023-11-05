import { showHome } from "./home.js";
import { showCatalog } from "./catalog.js";
import { showAbout } from "./about.js";
import { showLogin } from "./login.js";
import { showRegister } from "./register.js";
import { checkForUser, onLogOut } from "./util.js";
import { showCreate } from "./create.js";
import { render } from "./dom.js";

document.querySelector(`nav`).addEventListener(`click`, onNavigate);


const sections = {
  homeBtn: showHome,
  catalogBtn: showCatalog,
  aboutBtn: showAbout,
  loginBtn: showLogin,
  registerBtn: showRegister,
  createBtn: showCreate,
  logoutBtn: onLogOut,
};

checkForUser();

// Start application in home view!
goTo('homeBtn')

function onNavigate(event) {
  if (event.target.tagName == `A`) {
    // viewName ===  homeBtn
    // viewName === catalogBtn ... etc.
    const viewName = event.target.id;

    if (goTo(viewName)) {
      event.preventDefault();
    }
  }
}

function goTo(viewName) {
  const view = sections[viewName];

  if (typeof view == "function") {
    view({
      render,
      goTo,
      checkForUser

    });
    return true;
  } else {
    return false;
  }
}
