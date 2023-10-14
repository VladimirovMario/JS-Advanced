async function lockedProfile() {
  const baseUrl = "http://localhost:3030/jsonstore/advanced/profiles";
  const main = document.getElementById(`main`);

  try {
    const response = await fetch(`${baseUrl}`);
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    const data = await response.json();
    const key = Object.keys(data);

    for (let i = 0; i < key.length; i++) {
      const { username, email, age } = data[key[i]];

      if (i == 0) {
        document.querySelector(`.user1Username`).style.display = `none`;

        document
          .querySelector(`div.profile:nth-child(1) > button:nth-child(11)`)
          .addEventListener(`click`, onClick);

        document.querySelector(
          `div.profile:nth-child(1) > input:nth-child(9)`
        ).value = username;

        document.querySelector(
          `div.profile:nth-child(1) > div:nth-child(10) > input:nth-child(3)`
        ).value = email;

        document.querySelector(
          `div.profile:nth-child(1) > div:nth-child(10) > input:nth-child(5)`
        ).type = `email`;

        document.querySelector(
          `div.profile:nth-child(1) > div:nth-child(10) > input:nth-child(5)`
        ).value = age;
      }
      if (i != 0) {
        const div = createEl(`div`, ``, `profile`, main);
        const img = document.createElement(`img`);
        img.className = `userIcon`;
        img.src = `./iconProfile2.png`;
        div.appendChild(img);

        createEl(`label`, `Lock`, ``, div);

        // <input type="radio" name="user1Locked" value="lock" checked></input>
        const input1 = createEl(`input`, ``, ``, div);
        input1.type = `radio`;
        input1.name = `${username}`;
        input1.value = `lock`;
        input1.setAttribute(`lock`, `checked`);

        createEl(`label`, `Unlock`, ``, div);

        // <input type="radio" name="user1Locked" value="unlock">
        const input2 = createEl(`input`, ``, ``, div);
        input2.type = `radio`;
        input2.name = `${username}`;
        input2.value = "unlock";
        
        createEl(`br`, ``, ``, div);
        createEl(`hr`, ``, ``, div);
        createEl(`label`, `Username`, ``, div);

        // <input type="text" name="user1Username" value="" disabled readonly />
        const input3 = createEl(`input`, ``, ``, div);
        input3.type = `text`;
        input3.name = `${username}`;
        input3.value = `${username}`;
        input3.setAttribute("disabled", true);
        input3.setAttribute("readonly", true);

        const divForData = createEl(`div`, ``, `user1Username`, div);
        createEl(`hr`, ``, ``, divForData);
        createEl(`label`, `Email:`, ``, divForData);

        // <input type="email" name="user1Email" value="" disabled readonly />
        const input4 = createEl(`input`, ``, ``, divForData);
        input4.type = `email`;
        input4.name = `${username}`;
        input4.value = `${email}`;
        input4.setAttribute("disabled", true);
        input4.setAttribute("readonly", true);

        createEl(`label`, `Age:`, ``, divForData);

        // <input type="text" name="user1Age" value="" disabled readonly />
        const input5 = createEl(`input`, ``, ``, divForData);
        input5.type = "text";
        input5.name = `${username}`;
        input5.value = `${age}`;
        input5.setAttribute("disabled", true);
        input5.setAttribute("readonly", true);

        createEl(`button`, `Show more`, ``, div, onClick);

        divForData.style.display = `none`;
      }
    }
  } catch (error) {
    alert(error.message);
  }

  function onClick(event) {
    const parent = event.target.parentElement;

    const isProfileActive = parent.querySelector(`input[value="unlock"]`).checked;

    const infoToShow = parent.querySelectorAll(`div`)[0];
    
    const currButton = parent.querySelector(`div.profile  button:nth-child(11)`);

    if (isProfileActive) {
      if (currButton.textContent == `Show more`) {
        infoToShow.style.display = `block`;
        currButton.textContent = `Hide it`;
      } else {
        infoToShow.style.display = `none`;
        currButton.textContent = `Show more`;
      }
    }
  }

  function createEl(type, content, className, append, addEvent) {
    const element = document.createElement(type);
    element.textContent = content;
    if (className) {
      element.className = className;
    }
    append.appendChild(element);
    element.addEventListener(`click`, addEvent);
    return element;
  }
}
