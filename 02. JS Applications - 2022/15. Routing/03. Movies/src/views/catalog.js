import { getAllMovies } from '../api/data.js'
import { html, until, nothing } from '../lib.js'
import { getUserData } from '../util.js'

const catalogTemplate = (moviePromise, user) => html`
<section id="home-page">
    <div class="jumbotron jumbotron-fluid text-light" style="background-color: #343a40;">
        <img src="https://slicksmovieblog.files.wordpress.com/2014/08/cropped-movie-banner-e1408372575210.jpg"
            class="img-fluid" alt="Responsive image" style="width: 150%; height: 200px">
        <h1 class="display-4">Movies</h1>
        <p class="lead">Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime.</p>
    </div>
    <h1 class="text-center">Movies</h1>

    ${user 
    ? html`
    <section id="add-movie-button">
        <a  href="/create" class="btn btn-warning ">Add Movie</a>
    </section>`
    : nothing}              

    <section id="movie">
        <div class=" mt-3 ">
            <div class="row d-flex d-wrap">

                <div class="card-deck d-flex justify-content-center">
                    <!-- now the content is loaded from the server -->
                    ${until(moviePromise, html`<h2 class="text-center">Loading &hellip;</h2>`)}
                </div>
            </div>
        </div>
    </section>
</section>
`

const movieCard = (movie) => html`
<div class="card mb-4">
    <img class="card-img-top"
        src=${movie.img}
        alt="Card image cap" width="400">
    <div class="card-body">
        <h4 class="card-title">${movie.title}</h4>
    </div>
    <div class="card-footer">
        <a href="/details/${movie._id}">
            <button type="button" class="btn btn-info">Details</button>
        </a>
    </div>
</div>
`

export function catalogPage(ctx) {
    const user = getUserData();
    ctx.render(catalogTemplate(loadMovies(),user));
}

async function loadMovies() {
    const movies = await getAllMovies();
    return movies.map(movieCard);
}