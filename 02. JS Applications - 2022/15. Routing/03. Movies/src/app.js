import { logout } from "./api/users.js";
import { render, page } from "./lib.js";
import { getUserData, loadMovie } from "./util.js";

import { catalogPage } from "./views/catalog.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";

const root = document.querySelector("main");
const logoutBtn = document.querySelector('#logoutBtn')
logoutBtn.addEventListener('click' , onLogout)

page(decorateContext);

page("/", catalogPage);
page("/create", createPage);
page("/edit/:id", loadMovie, editPage);
page("/details/:id", loadMovie, detailsPage);
page("/login", loginPage);
page("/register", registerPage);



page("*", notFound);

updateUserNav();
page.start();


function decorateContext(ctx, next) {
  ctx.render = (template) => render(template, root);
  ctx.updateUserNav = updateUserNav;
  next();
}

function notFound(ctx) {
    ctx.render('404 Not found! Please wait...')
    setTimeout(()=> (ctx.page.redirect('/')) , 2000)
}

function updateUserNav() {
      const userData = getUserData()
      if (userData != null) {
        document.getElementById("greeting").textContent = `Welcome, ${userData.email}`;
        document.getElementById("logoutBtn").parentElement.style.display = "block";
        document.getElementById("loginLink").parentElement.style.display = "none";
        document.getElementById("registerLink").parentElement.style.display ="none";
      } else {
        document.getElementById("greeting").textContent = "Welcome";
        document.getElementById("logoutBtn").parentElement.style.display = "none";
        document.getElementById("loginLink").parentElement.style.display = "block";
        document.getElementById("registerLink").parentElement.style.display = "block";
      }
}

function onLogout(event) {
    logout();
    updateUserNav();
    page.redirect('/');    
}