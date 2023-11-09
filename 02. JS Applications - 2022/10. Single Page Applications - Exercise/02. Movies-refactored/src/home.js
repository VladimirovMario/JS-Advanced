import { get } from "./api.js";
import { showCreate } from "./create.js";
import { showDetails } from "./details.js";
import { showView } from "./dom.js";

// - detach section from Dom
const section = document.getElementById("home-page");
section.remove();
// Id's must start with #. And we have to use query... when it is an ANCHOR tag
section.querySelector("#createLink").addEventListener("click", onCreate);
function onCreate(event) {
  event.preventDefault();
  showCreate();
}

const catalog = section.querySelector(
  ".card-deck.d-flex.justify-content-center");

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

// display logic
// imported in app
export function showHome() {
  showView(section);
  hideAddButton();
  getMovies();
 }

function hideAddButton() {
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  if (userData == null) {
    document.getElementById("add-movie-button").style.display = "none";
  } else {
    document.getElementById("add-movie-button").style.display = "block";
  }
}

async function getMovies() {
  const resData = await get(`/data/movies`);
  catalog.replaceChildren(...resData.map(createMovieCard));
}

function createMovieCard(movie) {
  const cardDiv = document.createElement("div");
  cardDiv.className = "card mb-4";

  cardDiv.innerHTML = `
  <img class="card-img-top" src=${movie.img}
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
