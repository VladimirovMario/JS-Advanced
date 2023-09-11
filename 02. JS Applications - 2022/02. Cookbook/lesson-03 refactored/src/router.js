import { renderCreate } from "./pages/create.js";
import { renderHome } from "./pages/home.js";
import { renderLogin } from "./pages/login.js";
import { renderLogout } from "./pages/logout.js";
import { renderRegister } from "./pages/register.js";

const mainSection = document.querySelector(".main-content");

const routs = {
  "/": renderHome,
  "/login": renderLogin,
  "/register": renderRegister,
  "/create": renderCreate,
  '/logout' : renderLogout
};

// // Start application in home page
// renderHome();



export function router(path) {
  hideContent();

  const renderer = routs[path];
  renderer();
}

function hideContent() {
  for (const section of mainSection.children) {
    section.style.display = "none";
  }
}
