import { onDeleteById } from '../api/data.js'
import { html, until } from '../lib.js'
import { getUserData } from '../util.js'

const detailsTemplate = (moviePromise) =>html`
     <section id="movie-example">
                <!-- movie details -->
                <div class="container">
                  ${until(moviePromise,
                    html`<h2 class="text-center" >This may take a few breaths. Inhale, exhale &hellip;</h2>`)}
                </div>
            </section>

`
const movieTemplate = (movie, onDelete) => html` 
<div class="row bg-light text-dark">
    <h1>Movie title: ${movie.title}</h1>

    <div class="col-md-8">
        <img class="img-thumbnail"
            src=${movie.img} alt="Movie">
    </div>
    <div class="col-md-4 text-center">
        <h3 class="my-3 ">Movie Description</h3>
        <p>${movie.description}</p>
        ${movie.isOwner 
        ? html `
        <a class="btn btn-warning" href="/edit/${movie._id}">Edit</a>
        <a @click=${onDelete} class="btn btn-danger" href="javascript:void(0)">Delete</a>`
        : html`
        <a class="btn btn-primary" href="#">Like</a>
        <span class="enrolled-span">Liked 1</span>`}        
       
    </div>
</div>
`

export function detailsPage (ctx){
    ctx.render(detailsTemplate(loadMovie(ctx)))
}
    

async function loadMovie(ctx) {
   const movie = await ctx.moviePromise;

   const userData = getUserData()
   if(userData?.id == movie._ownerId){
    movie.isOwner = true
   }
    return movieTemplate(movie, onDelete);

    async function onDelete() {
            const choice = confirm(`Are you really sure, you want to delete ${movie.title}?`);
            if (choice) {
              await onDeleteById(ctx.params.id);
              ctx.page.redirect("/");
            }
          }
}

