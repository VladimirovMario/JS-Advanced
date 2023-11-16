import { showHome } from "./views/home.js";
import { showCatalog } from "./views/catalog.js";
import { showCreate } from "./views/create.js";
import { showDetails } from "./views/details.js";
import { showLogin } from "./views/login.js";
import { showRegister } from "./views/register.js";
import { initialize } from "./router.js";
import { logout } from "./api/users.js";

document.querySelector(`#views`).remove();

// // 450
const links = {
  "/": showHome,
  "/catalog": showCatalog,
  "/login": showLogin,
  "/register": showRegister,
  "/create": showCreate,
  "/details": showDetails,
  "/logout": onLogout,
};

const router = initialize(links);

router.checkUserNav();
// Start application in home view!
router.goTo("/");


function onLogout() {
  logout();
  router.checkUserNav();
  router.goTo("/");
}

// import * as api from './api/users.js'
// window.api = api
//await window.api.get('/data/ideas')
//Array(3) [ {…}, {…}, {…} ]
