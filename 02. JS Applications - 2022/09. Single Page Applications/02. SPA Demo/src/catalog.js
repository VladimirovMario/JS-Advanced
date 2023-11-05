import { get } from "./api.js";

const section = document.getElementById("catalogView");
section.remove();

const list = section.querySelector("ul");

export async function showCatalog(ctx) {
  ctx.render(section);

  list.replaceChildren("Loading...");

  
  const movies = await get(`/data/movies`);
  


  const fragment = document.createDocumentFragment();
  movies.map(createEl).forEach((el) => fragment.appendChild(el));

  list.replaceChildren(fragment);
}

function createEl(movie) {
  const li = document.createElement("li");
  li.textContent = movie.title;
  return li;
}
