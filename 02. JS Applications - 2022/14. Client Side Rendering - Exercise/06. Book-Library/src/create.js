import { createBook, html } from "./utility.js";

const createTemplate = (onSuccess) => html`
  <form @submit=${ ev => onSubmit(ev, onSuccess)} id="add-form">
    <h3>Add book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title&hellip;" />
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author..." />
    <input type="submit" value="Submit" />
  </form>
`;
export function showCreate(ctx) {
// Object { update: update() }
// console.log(ctx);
    if (ctx.book == undefined){
        return createTemplate(ctx.update);
    } else {
       return null;
    }
}

async function onSubmit(event, onSuccess) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const title = formData.get("title").trim();
  const author = formData.get("author").trim();

  if (author == `` || title == ``) {
    return alert("All fields are required!");
  }

  await createBook({ author, title });

  event.target.reset();
  onSuccess()
}
