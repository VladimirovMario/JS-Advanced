import { showView } from "./dom.js";
import { showHome } from "./home.js";
import { showLogin } from "./login.js";
import { showRegister } from "./register.js";
import { checkUser, onLogOut } from "./util.js";

document.querySelector(`nav`).addEventListener(`click`, onNavigate);
// 450 
const sections = {
  homeLink: showHome,
  loginLink: showLogin,
  registerLink: showRegister,
  logoutBtn: onLogOut,
  
};

//2:20
checkUser();
// Start application in home view!
goTo('homeLink')

function onNavigate(event) {
  if (event.target.tagName == `A`) {
    // viewName ===  homeLink
    // viewName === loginLink ... etc.
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
      showView, // === render
      goTo,
      checkUser

    });
    return true;
  } else {
    return false;
  }
}

