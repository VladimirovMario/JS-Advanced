import { getAllMemes } from "../api/data.js";
import { html } from "../lib.js";

const catalogTemplate = (memes) => html`
  <section id="meme-feed">
    <h1>All Memes</h1>
    <div id="memes">
      <!-- Display : All memes in database ( If any ) -->
      ${memes.length == 0
        ? html`<p class="no-memes">No memes in database.</p>`
        : memes.map(memeCard)}
      <!-- Display : If there are no memes in database -->
    </div>
  </section>
`;
// Giving id on button link to leeds for specific meme
// We read this from: Meme Details (10 pts)
// Method: GET URL: /data/memes/:id
/* <a class="button" href="/data/memes/${meme._id}">Details</a> */
const memeCard = (meme) => html`
  <div class="meme">
    <div class="card">
      <div class="info">
        <p class="meme-title">${meme.title}</p>
        <img class="meme-image" alt="meme-img" src="${meme.imageUrl}" />
      </div>
      <div id="data-buttons">
        <a class="button" href="/memes/${meme._id}">Details</a>
      </div>
    </div>
  </div>
`;

export async function catalogView(ctx) {
  const memes = await getAllMemes();
  ctx.render(catalogTemplate(memes));
}
