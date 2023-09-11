const form = document.querySelector(`form`);
form.addEventListener(`submit`, onCreate);

const baseUrl = "http://localhost:3030";

async function onCreate(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const name = formData.get(`name`).trim();
  const img = formData.get(`img`).trim();
  // The ingredients and the steps should be written each on new line,
  //and then converted to an array splitting the text on line-breaks (use the line-break character "/n").
  const ingredients = formData.get(`ingredients`).trim().split("\n");
  const steps = formData.get(`steps`).trim().split("\n");

  const data = {
    name,
    img,
    ingredients,
    steps,
  };

  const token = sessionStorage.getItem(`accessToken`);

  if (token == null) {
    alert("Please login!");
    window.location = "/login.html";
    return;
  }

  try {
    const response = await fetch(`${baseUrl}/data/recipes`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": token,
      },
      body: JSON.stringify(data),
    });

    if (response.ok == false) {
      const error = await response.json();
      throw new Error(error.message);
    }

    window.location = "/index.html";
  } catch (error) {
    alert(error.message);
  }
}
