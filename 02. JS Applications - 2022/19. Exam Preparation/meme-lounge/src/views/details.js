import { getDetailsById, onDeleteById } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

// {"_ownerId":"847ec027-f659-4086-8032-5173e2f9c93a",
// "title":"Java Script joke",
// "description":"Being a programmer is a fun job.",
// "imageUrl":"/images/1.png",
// "_createdOn":1616577434701,
// "_id":"3"}

//  @click=${onDelete}
const detailsTemplate = (meme, isOwner, onDelete) => html`
  <section id="meme-details">
    <h1>Meme Title: ${meme.title}</h1>
    <div class="meme-details">
      <div class="meme-img">
        <img alt="meme-alt" src=${meme.imageUrl} />
      </div>
      <div class="meme-description">
        <h2>Meme Description</h2>
        <p>${meme.description}</p>

        <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
        ${isOwner
          ? html` <a class="button warning" href="/edit/${meme._id}">Edit</a>
              <button @click=${onDelete} class="button danger">Delete</button>`
          : null}
      </div>
    </div>
  </section>
`;

export async function detailsView(ctx) {
  // Object { id: "5ba17db5-ef78-4655-9826-a6a0e05043d4" }
  // console.log(ctx.params);
  const meme = await getDetailsById(ctx.params.id);

  const userData = getUserData();
  const isOwner = userData && userData.id == meme._ownerId
  // userData && userData.id == meme._ownerId  // === userData?.id == meme._ownerId
  
  ctx.render(detailsTemplate(meme, isOwner, onDelete));
 
  async function onDelete() {
    const choice = confirm("Are you really sure?");

    if (choice) {
      await onDeleteById(ctx.params.id);
      ctx.page.redirect('/memes');
    }
  }
}
