document
  .querySelector(`#registration`)
  .addEventListener(`submit`, onRegistration);
document.querySelector(`#login`).addEventListener(`submit`, onLogin);
document.querySelector(`button`).addEventListener(`click`, onClick);

const baseUrl = "http://localhost:3030/users";

async function onRegistration(event) {
  event.preventDefault();

  const formData = new FormData(event.target); //

  const data = {
    //
    email: formData.get(`email`),
    password: formData.get(`password`),
  };

  try {
    if (formData.get(`password`) != formData.get(`repass`)) {
      throw new Error(`Password don\'t match!`);
    }

    const response = await fetch(`${baseUrl}/register`, {
      method: `post`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status != 200) {
      const error = await response.json(); //
      throw new Error(error.message); //
    }

    const responseData = await response.json();
    // console.log(responseData);
    ////////////////////////////////////!!!!!!!!!!
    sessionStorage.setItem(`accessToken`,responseData.accessToken)
    ////////////////////////////////////!!!!!!!!!!


  } catch (error) {
    alert(error.message);
  }
}

async function onLogin(ev) {
  ev.preventDefault();
  const formData = new FormData(ev.target);

  const data = {
    email: formData.get(`email`),
    password: formData.get(`password`),
  };

  try {
    const response = await fetch(`${baseUrl}/login`, {
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
    // console.log(responseData);
       ////////////////////////////////////!!!!!!!!!!
       sessionStorage.setItem(`accessToken`,responseData.accessToken)
       ////////////////////////////////////!!!!!!!!!!


  } catch (error) {
    alert(error.message);
  }
}

async function onClick() {
  // We have to take the TOKEN from: 'Login Request'!!!!!!
//   const token = document.getElementById(`token`).value;
const token = sessionStorage.getItem(`accessToken`)

  const response = await fetch("http://localhost:3030/data/recipes", {
    headers: {
      "X-Authorization": token,
    },
  });

  const responseData = await response.json();
  
//   console.log(responseData);
  /*
    Array(3) [ {…}, {…}, {…} ]
​
0: Object { _ownerId: "35c62d76-8152-4626-8712-eeb96381bea8", name: "Easy Lasagna", img: "assets/lasagna.jpg", … }
​
1: Object { _ownerId: "35c62d76-8152-4626-8712-eeb96381bea8", name: "Grilled Duck Fillet", img: "assets/roast.jpg", … }
​
2: Object { _ownerId: "847ec027-f659-4086-8032-5173e2f9c93a", name: "Roast Trout", img: "assets/fish.jpg", … }
*/
}
