import { html } from "../lib.js";
import { getDetailsById, update } from "../api/data.js";
// @submit = ${onSubmit}
//.value=${meme.title}
//.value=${meme.description}
//.value=${meme.imageUrl}
const editTemplate = (onSubmit, meme) => html`
  <section id="edit-meme">
            <form @submit = ${onSubmit} id="edit-form">
                <h1>Edit Meme</h1>
                <div class="container">
                    <label for="title">Title</label>
                    <input id="title" type="text" placeholder="Enter Title" name="title" .value=${meme.title}>
                    <label for="description">Description</label>
                    <textarea id="description" placeholder="Enter Description" name="description" .value=${meme.description}>
                          
                        </textarea>$
                    <label for="imageUrl">Image Url</label>
                    <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${meme.imageUrl}>
                    <input type="submit" class="registerbtn button" value="Edit Meme">
                </div>
            </form>
        </section>     
`;

export async function editView(ctx) {
  const id = ctx.params.id
  const meme = await getDetailsById(id);

  ctx.render(editTemplate(onSubmit, meme));

  async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const title = formData.get("title").trim();
    const description = formData.get("description").trim();
    const imageUrl = formData.get("imageUrl").trim();

    if (title == "" || description == "" || imageUrl == "") {
      return alert("All fields are required!");
    }

    await update(id, { title, description, imageUrl });
    event.target.reset();
    ctx.page.redirect("/memes/" + id);
  }
}
