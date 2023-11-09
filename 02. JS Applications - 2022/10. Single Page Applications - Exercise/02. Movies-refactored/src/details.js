import { e, showView } from "./dom.js";
import { showHome } from "./home.js";


const section = document.getElementById("movie-example");
section.remove();


export function showDetails(movieId) {  
 
 showView(section);
  getMovie(movieId);
}

async function getMovie(id) {
  const request = [
    fetch("http://localhost:3030/data/movies/" + id),
    fetch(
      `http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`
    ),
  ];

  const userData = JSON.parse(sessionStorage.getItem("userData"));
  if (userData != null) {
    request.push(
      fetch(
        `http://localhost:3030/data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${userData.id}%22`
      )
    );
  }

  //
  try {
    const [movieRes, likesRes, hasLikedRes] = await Promise.all(request);

    if (movieRes.ok == false) {
      throw new Error(movieRes.status);
    }
    if (likesRes.ok == false) {
      throw new Error(likesRes.statusText);
    }
    const [movieData, likes, hasLiked] = await Promise.all([
      movieRes.json(),
      likesRes.json(),
      // if this returns undefined there will be no parameter.
      hasLikedRes && hasLikedRes.json(),
    ]);

    section.replaceChildren(createDetails(movieData, likes, hasLiked));
  } catch (error) {
    alert(error.message);
  }
}

function createDetails(movie, likes, hasLiked) {
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  //
  const div = e("div", "", { class: "container" }, section);
  const div1 = e("div", "", { class: "row bg-light text-dark" }, div);
  const h1 = e("h1", `Movie title: ${movie.title}`, {}, div1);
  const div2 = e("div", "", { class: "col-md-8" }, div1);
  const img = e(
    "img",
    "",
    { class: "img-thumbnail", src: `${movie.img}`, alt: "Movie" },
    div2
  );

  const controls = e("div", "", { class: "col-md-4 text-center" }, div1);
  const h3 = e("h3", "Movie Description", { class: "my-3" }, controls);
  const p = e("p", `${movie.description}`, {}, controls);

  if (userData != null) {
    if (userData.id == movie._ownerId) {
      e("button", "Delete", { class: "btn btn-danger", href: "#" }, controls, onDelete);
      e("button", "Edit", { class: "btn btn-warning", href: "#" }, controls);

    } else {
      if (hasLiked.length > 0) {
        e("button", "Unlike", { class: "btn btn-primary", href: "#" }, controls, unlike);
      } else {
        e("button", "Like", { class: "btn btn-primary", href: "#" }, controls, onLike);

      }
    }
  }
  e("span", `Liked ${likes}`, { class: "enrolled-span" }, controls);

  return div;

  // Add a like: /data/likes (POST)
  async function onLike() {
    await fetch("http://localhost:3030/data/likes", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": userData.accessToken,
      },
      body: JSON.stringify({
        movieId: movie._id,
      }),
    });
    showDetails(movie._id );
    
  }

  // Revoke a like: /data/likes/:id (DELETE)
  async function unlike() {
    const likedId = hasLiked[0]._id;
    await fetch("http://localhost:3030/data/likes/" + likedId, {
      method: "delete",
      headers: {
        "X-Authorization": userData.accessToken,
      },
    });
       showDetails(movie._id);
  }

  //Delete movie: /data/movies/:id (DELETE
  async function onDelete(event) {
    event.preventDefault();
    const userData = JSON.parse(sessionStorage.getItem("userData"));
    await fetch("http://localhost:3030/data/movies/" + movie._id, {
      method: "delete",
      headers: {"X-Authorization": userData.accessToken,},
    });
    showHome()
  }
}
