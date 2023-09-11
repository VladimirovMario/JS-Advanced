const form = document.querySelector(`form`);
form.addEventListener(`submit`, onLogin);

const baseUrl = "http://localhost:3030";

async function onLogin(ev) {
  ev.preventDefault();

  const formData = new FormData(ev.target);

  const email = formData.get(`email`);
  const password = formData.get(`password`);

  const labelEmail = document.querySelector(`[name = "email"]`);
  const labelPass = document.querySelector(`[name = "password"]`);

  try {
    if (email == ``) {
      labelEmail.style.border = "1px solid red";
      throw new Error(`Email is required!`);
    } else {
      labelEmail.style.border = ``;
    }
    if (password == ``) {
      labelPass.style.border = "1px solid red";
      throw new Error(`Password is required!`);
    } else {
      labelPass.style.border = ``;
    }

    const response = await fetch(`${baseUrl}/users/login`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (response.status != 200) {
      // const error = await response.json()
      throw new Error((await response.json()).message);
    }

    const responseData = await response.json();

    sessionStorage.setItem("accessToken", responseData.accessToken);

    window.location = "/";
  } catch (error) {
    alert(error.message);
  }
}
