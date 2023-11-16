import { deleteById, getById } from "../api/data.js";

const section = document.getElementById("detailsPage");

export async function showDetails(context, id) {
  const idea = await getById(id);
  context.showSection(section);

  const user = JSON.parse(localStorage.getItem("userData"));
  let isOwner = user && user.id == idea._ownerId;
  section.innerHTML = createIdeaHTML(idea, isOwner);

  if (isOwner) {
    // Clicking the [Delete] link of an idea (on the Idea Details page) should delete the idea.
    section.querySelector("#deleteBtn").addEventListener("click", async (event) => {
      event.preventDefault();
      const choice = confirm("Are you sure you want to delete this idea?");
      if (choice) {
        await deleteById(id);
        context.goTo("/catalog");
      }
    });
  }
}

function createIdeaHTML(idea, isOwner) {
  let html = `
  <img class="det-img" src="${idea.img}" />
  <div class="desc">
      <h2 class="display-5">${idea.title}</h2>
      <p class="infoType">Description:</p>
      <p class="idea-description">${idea.description}</p>
  </div>  
  `;
  //////////////////
  // console.log("form details current user", user);
  // console.log("form details current idea", idea);
  ///////////////////
  if (isOwner) {
    html += `
    <div class="text-center">
      <a id = "deleteBtn" class="btn detb" href="">Delete</a>
  </div>  
    `;
  }
  return html;
}

/*
Logged-in users should be able to delete their ideas. 
Clicking the [Delete] link of an idea (on the Idea Details page) should delete the idea.
After successful idea delete the Dashboard should be shown
DELETE request - http://localhost:3030/data/ideas/:id
*/
