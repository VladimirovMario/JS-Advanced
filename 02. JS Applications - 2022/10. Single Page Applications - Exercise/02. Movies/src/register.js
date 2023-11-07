const baseUrl = "http://localhost:3030";
// initialization
// - find relevant section
import { checkUser } from "./app.js";
import { showView } from "./dom.js";
import { showHome } from "./home.js";

// - detach section from Dom
const section = document.getElementById("form-sign-up");
section.remove();

// display logic
export function showRegister() {
  showView(section);
}

const form = section.querySelector(`form`);
form.addEventListener(`submit`, onRegister);

async function onRegister(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const email = formData.get(`email`).trim();
  const password = formData.get(`password`).trim();
  const rePass = formData.get(`repeatPassword`).trim();

  try {
    if (email.length < 7) {
      return alert("The password should be at least 6 characters long");
    }
    if (email == `` || password == `` || rePass == ``) {
      return alert("All fields are required!");
    }
    if (password != rePass) {
      return alert("Password don't match!");
    }

    const response = await fetch(`${baseUrl}/users/register`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.status != 200) {
      const error = await response.json();
      throw new Error(error.message);
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

    window.location = "index.html";
  } catch (error) {
    alert(error.message);
  }
}
