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
    const rePass = formData.get(`rePass`).trim();

    try {
      if (email == `` || password == `` || rePass == ``) {
        alert("All fields are required!");
        return;
      }
      if (password != rePass) {
        alert("Password don't match!");
        return;
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
