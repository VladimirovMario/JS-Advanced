import { updateAuth } from "../auth.js";

const loginSection = document.querySelector(".login");

export function renderLogin() {
  loginSection.style.display = "block";
}

const form = loginSection.querySelector(`form`);
form.addEventListener(`submit`, onLogin);

const baseUrl = "http://localhost:3030";

async function onLogin(ev) {
  ev.preventDefault();

  const formData = new FormData(ev.target);

  const email = formData.get(`email`);
  const password = formData.get(`password`);

  try {
    if (email == ``) {
      throw new Error(`Email is required!`);
    }
    if (password == ``) {
      throw new Error(`Password is required!`);
    }

    const response = await fetch(`${baseUrl}/users/login`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.status != 200) {
      const error = await response.json();
      throw new Error(error.message);
    }

    const userData = await response.json();
    
    localStorage.setItem("userData", JSON.stringify(userData));
     
    form.reset();
    updateAuth()
    
  } catch (error) {
    alert(error.message);
  }
}
