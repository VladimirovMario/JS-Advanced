const form = document.querySelector(`form`);
form.addEventListener(`submit`, onRegister);

const baseUrl = "http://localhost:3030/users/register";

async function onRegister(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const data = {
    email: formData.get(`email`),
    password: formData.get(`password`),
  };

  try {
    if (formData.get(`email`) == `` || formData.get(`password`) == ``) {
      throw new Error(`All fields are required!`);
    }
    if (formData.get(`password`) != formData.get(`rePass`)) {
      throw new Error("Password don't match!");
    }

    const response = await fetch(`${baseUrl}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status != 200) {
      const error = await response.json();
      throw new Error(error.message);
    }

    const responseData = await response.json();

    sessionStorage.setItem(`accessToken`, responseData.accessToken);

    window.location = '/' // go to home page
 
} catch (error) {
    alert(error.message);
  }
}
