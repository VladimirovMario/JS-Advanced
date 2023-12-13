1; // Hash-based Routing
// import { createHashRouter } from "./hashRouter.js";
// const views = {
//   "#home": () => "<h2>Home Page</h2><p>Welcome to our site!</p>",
//   "#catalog": () =>
//     "<h2>Catalog Page</h2> <ul><li>Product 1</li><li>Product 2</li><li>Product 3</li></ul>",
//   "#about": () => "<h2>About Us</h2><p>Contact: +359 00...</p>",
// };
// const main = document.querySelector("main");
// const getName = createHashRouter(main, views, start);
// start(getName());
// function start(name) {
//   const view = views[name];

//   if (typeof view == "function") {
//     main.innerHTML = view();
//     return true;
//   }
//   return false;
// }

2; //Push-Based Routing

import { createHistoryRouter } from './historyRouter.js'

const views = {
    '/home' : () =>  '<h2>Home Page</h2><p>Welcome to our site!</p>',
    '/catalog': () => '<h2>Catalog Page</h2> <ul><li>Product 1</li><li>Product 2</li><li>Product 3</li></ul>',
    '/about': () => '<h2>About Us</h2><p>Contact: +359 00...</p>',

};

const main = document.querySelector('main')

const getName = createHistoryRouter(main, views, start)

start(getName())

function start(name) {

    const view = views[name];

    if (typeof view == "function") {
      main.innerHTML = view();
      return true
    }
    return false
  }
