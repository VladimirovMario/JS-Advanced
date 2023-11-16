import { getAllIdeas } from "../api/data.js";

const section = document.getElementById("dashboard-holder");
section.addEventListener("click", onDetailsSelect);

let ctx = null;

export async function showCatalog(context) {
  ctx = context;
  context.showSection(section);

  const ideas = await getAllIdeas();
  if (ideas.length == 0) {
    section.innerHTML = "<h1>No ideas yet! Be the first one :)</h1>";
  } else {
    section.replaceChildren(...ideas.map(createIdeaPreview));
  }
}

function createIdeaPreview(idea) {
  const element = document.createElement("div");
  element.setAttribute("class", "card overflow-hidden current-card details");
  element.style.width = "20rem";
  element.style.height = "18rem";
  element.innerHTML = `
  <div class="card-body">
  <p class="card-text">${idea.title}</p>
  </div>
  <img class="card-image" src=${idea.img}
  alt="Card image cap">
  <a data-id=${idea._id} class="btn" href="/details">Details</a>
`;
  return element;
}
// <a data-id=${idea._id} class="btn" href="!!!!!!!!!/details!!!!!">Details</a>
//{ _id: "b8608c22-dd57-4b24-948e-b358f536b958", title: "Dinner Recipe", img: "./images/dinner.jpg" }

function onDetailsSelect(event) {
  if (event.target.tagName == "A") {
    event.preventDefault();
    const id = event.target.dataset.id;
    if (id) {
      ctx.goTo("/details", id);
    }
  }
}
