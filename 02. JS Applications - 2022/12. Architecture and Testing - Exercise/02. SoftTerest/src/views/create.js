import { createIdea } from "../api/data.js";

const section = document.getElementById("createPage");

const form = section.querySelector("form");
form.addEventListener("submit", onSubmit);

let ctx = null;
export function showCreate(context) {
  ctx = context;
  context.showSection(section);
}

async function onSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);

  // Be careful with the property names that the server wants!!!
  // With every new task check for name of input fields!!!!!!
  // Specific for this task.
  const title = formData.get("title").trim();
  const description = formData.get("description").trim();
  const img = formData.get("imageURL").trim();

  if (title == `` || description == `` || img == "") {
    return alert("All fields are required!");
  }
  if (title.length < 6) {
    return alert("The title should be at least 6 characters long.");
  }
  if (description.length < 10) {
    return alert("The description should be at least 10 characters long.");
  }
  if (img.length < 5) {
    return alert("The image should be at least 5 characters long.");
  }

  //////////////////////
  // console.log(`from create page`, formData);
  // console.log(ctx);
  //////////////////////

  await createIdea({ title, description, img });
  form.reset();
  ctx.goTo("/catalog");
}

