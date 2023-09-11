import { getToken } from "../auth.js";

const createSection = document.querySelector(".create");

export function renderCreate() {
  createSection.style.display = "block";
}

const form = createSection.querySelector(`form`);
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


  try {

    if (name == `` || img == `` || ingredients == `` || steps == ``){
        throw new Error('All fields are required!')
    }

    const response = await fetch(`${baseUrl}/data/recipes`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": getToken(),
      },
      body: JSON.stringify({name, img, ingredients, steps}),
    });

    if (response.ok == false) {
      const error = await response.json();
      throw new Error(error.message);
    }

   
  } catch (error) {
    alert(error.message);
  }
}
