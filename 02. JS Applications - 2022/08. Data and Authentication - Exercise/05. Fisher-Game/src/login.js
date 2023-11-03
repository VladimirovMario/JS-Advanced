window.addEventListener("DOMContentLoaded", () => {
  const baseUrl = "http://localhost:3030";

  const form = document.querySelector(`form`);
  form.addEventListener(`submit`, onRegister);

  checkUser();

  async function onRegister(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const email = formData.get(`email`).trim();
    const password = formData.get(`password`).trim();

    try {
      if (email == `` || password == ``) {
        alert(`All fields are required!`);
        return;
      }

      const response = await fetch(`${baseUrl}/users/login`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok == false) {
        // const error = await response.json()
        throw new Error((await response.json()).message);
      }
      const resData = await response.json();

      const userData = {
        email: resData.email,
        id: resData._id,
        token: resData.accessToken,
      };
      sessionStorage.setItem("userData", JSON.stringify(userData));

      event.target.reset();
      window.location = "index.html";
    } catch (error) {
      alert(error.message);
    }
  }

  function checkUser() {
    const userData = JSON.parse(sessionStorage.getItem("userData"));
    const user = document.getElementById(`user`);
    const guest = document.getElementById(`guest`);
    if (userData == null) {
      user.style.display = `none`;
    } else {
      guest.style.display = `none`;
    }
  }
});
