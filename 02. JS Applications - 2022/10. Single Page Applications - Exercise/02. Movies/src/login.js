const baseUrl = 'http://localhost:3030'
// initialization
// - find relevant section
import { showView } from "./dom.js";
import { showHome } from "./home.js";
import { checkUser } from "./app.js";

// - detach section from Dom
const section = document.getElementById("form-login");

section.remove();

// display logic
export function showLogin() {
  showView(section);
}

const form = section.querySelector("form");
form.addEventListener("submit", onLogin);

async function onLogin(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const email = formData.get("email").trim();
  const password = formData.get("password").trim();

  if (email == `` || password == ``) {
    alert(`All fields are required!`);
    return;
  }

  try {
    const response = await fetch(`${baseUrl}/users/login`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (response.status != 200) {
      throw new Error((await response.json()).message);
    }
    const responseData = await response.json();

    const userData = {
      email: responseData.email,
      id: responseData._id,
      token: responseData.accessToken,
    };
    sessionStorage.setItem("userData", JSON.stringify(userData));

    form.reset();
    // CIRCULAR DEPENDENCY (BAD PRACTICE!!! NOT ALLOWED)
    checkUser();
    // rederect to home page
    showHome();
  } catch (error) {
    alert(error.message);
  }
}
