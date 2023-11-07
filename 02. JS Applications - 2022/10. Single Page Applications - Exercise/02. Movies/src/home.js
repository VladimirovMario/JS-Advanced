// initialization
// - find relevant section
import { showView } from "./dom.js";
import { showCreate } from "./create.js";
import { showDetails } from "./details.js";

///////////////// optional
let moviesCache = null;
let lastLoaded = null;
const maxAge = 5000
/////////////////

// - detach section from Dom
const section = document.getElementById("home-page");
const catalog = section.querySelector(
  ".card-deck.d-flex.justify-content-center"
);




// Id's must start with #. And we have to use query... when it is an ANCHOR tag
section.querySelector("#createLink").addEventListener("click", onCreate);
function onCreate(event) {
  event.preventDefault();
  showCreate();
}

catalog.addEventListener("click", (event) => {
  event.preventDefault;
  let target = event.target;
  if (target.tagName == "BUTTON") {
    target = event.target.parentElement;
  }
  if (target.tagName == "A") {
    const id = target.dataset.id;
    showDetails(id);
  }
});

section.remove();
// display logic
export function showHome() {
  showView(section);
  hideAddButton();
  getMovies();
}

function hideAddButton() {
  const userData = JSON.parse(sessionStorage.getItem('userData'))
  if (userData == null){
    document.getElementById('add-movie-button').style.display = "none"
  } else {
    document.getElementById('add-movie-button').style.display = "block"
  }
}



async function getMovies() {
  try {
    /////////////////////// optional
    let now = Date.now()
    if (moviesCache == null || (now - lastLoaded) > maxAge) {
      lastLoaded = now
    ////////////////////////////////
      

      const response = await fetch("http://localhost:3030/data/movies");
      const responseData = await response.json();
      moviesCache = responseData;

      if (response.ok == false) {
        throw new Error(response.status);
      }
    }

    catalog.replaceChildren(...moviesCache.map(createMovieCard));
  } catch (error) {
    alert(error.message);
  }
}

function createMovieCard(movie) {
  let img = null
  if (movie.img === undefined){
    img = `<img class="card-img-top" src=${'https://www.tv-filmi.com/wp-content/uploads/2021/02/Resident-Evil.jpg'}`
  } else {
    img = `<img class="card-img-top" src=${movie.img}`
  }
  
  
  const cardDiv = document.createElement("div");
  cardDiv.className = "card mb-4";

  cardDiv.innerHTML = `
    ${img}
    alt="Card image cap" width="400">
<div class="card-body">
    <h4 class="card-title">${movie.title}</h4>
</div>
<div class="card-footer">
    <a data-id=${movie._id} href="#">
        <button type="button" class="btn btn-info">Details</button>
    </a>
</div>
    `;

  return cardDiv;
}

// testing getMovies
// window.getMovies = getMovies
