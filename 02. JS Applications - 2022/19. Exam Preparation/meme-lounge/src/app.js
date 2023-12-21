import { page, render } from "./lib.js";
import { homeView } from "./views/home.js";
import { catalogView } from "./views/catalog.js";
import { loginView } from "./views/login.js";
import { getUserData} from './util.js'
import { registerView } from "./views/register.js";
import { logout } from "./api/users.js";
import { createView } from "./views/create.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { profileView } from "./views/profile.js";

const main = document.querySelector('main')

document.querySelector('#logoutBtn').addEventListener('click', onLogout)

// Единия път не работи с live server, а пък другия път с локалния!!!
// Ту показва нещо, ту не показва. Има яко грешки. WTF?

page(decorateContext)

page("/", homeView);
page("/memes", catalogView);
page("/login", loginView);
page("/register", registerView);
page("/create", createView);
page("/memes/:id", detailsView);
page("/edit/:id", editView);
page("/profile", profileView);

// Start application
updateNav()
page.start();


function decorateContext(ctx,next){
    ctx.render = renderMain
    ctx.updateNav = updateNav
    next()
}

function renderMain(templateResult){
    render(templateResult, main)
}

function updateNav(){
    const userData =  getUserData()
    if (userData){
        document.querySelector('.guest').style.display = 'none';
        document.querySelector('.user').style.display = 'block';
        document.querySelector('.user span').textContent = `Welcome, ${userData.email}`
    } else {
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = 'block';

    }
}

function onLogout(){
    logout();
    updateNav();
    page.redirect('/');
}


// Testing if it works.
// import * as api from './api/api.js'
// window.api = api
// await api.get('/data/memes?sortBy=_createdOn%20desc')
// Array(5) [ {…}, {…}, {…}, {…}, {…} ]
