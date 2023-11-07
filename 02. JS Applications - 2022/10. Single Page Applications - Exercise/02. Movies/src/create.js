const baseUrl = "http://localhost:3030"
const extension = "/data/movies"
// initialization
// - find relevant section
import { checkUser } from "./app.js";
import { showView } from "./dom.js";
import { showHome } from "./home.js";

// - detach section from Dom
const section = document.getElementById("add-movie");
section.remove();

// display logic
export function showCreate() {
  showView(section);
}

const form = section.querySelector("form");
form.addEventListener("submit", addFilm);

async function addFilm(event) {
  event.preventDefault();
  const currUser = JSON.parse(sessionStorage.getItem("userData"));
  const formData = new FormData(event.target);

  if (!currUser) {
    checkUser();
    showHome();
    return;
  }

  const data = {};
  try {
    // from Victor
    // const data = [...formData.entries()].reduce((a, [k,v]) =>
    // Object.assign(a, {[k]: v }), {});
    // if (Object.values(data).some(x => x == ``)) {
    //   throw new Error('All fields are required!')
    // }
    for (const [key, value] of formData.entries()) {
      if (value == ``) {
        throw new Error("All fields are required!");
      }
      data[key] = value.trim();
    }
    
    const response = await fetch(`${baseUrl}${extension}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": currUser.token,
      },
      body: JSON.stringify(data),
    });
    if (response.ok == false) {
      throw new Error(response.statusText);
    }
    form.reset();
    showHome();
  } catch (error) {
      alert(error.message);
      
  }
}
