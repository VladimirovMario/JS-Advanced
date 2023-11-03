const currUser = JSON.parse(sessionStorage.getItem("userData"));
const mainDiv = document.getElementById(`catches`);

window.addEventListener("DOMContentLoaded", () => {
  checkUser();

  const logout = document.getElementById(`logout`);
  const loadBtn = document.querySelector(`.load`);
  logout.addEventListener(`click`, onLogout);
  loadBtn.addEventListener(`click`, onLoad);

  const addForm = document.querySelector(`#addForm`);
  addForm.addEventListener(`submit`, createCatch);
});

async function onLoad() {
  try {
    const response = await fetch("http://localhost:3030/data/catches");
    if (response.status != 200) {
      throw new Error(response.status);
    }
    const responseData = await response.json();
    mainDiv.replaceChildren(...responseData.map(createDomElements));
  } catch (error) {
    alert(error.message);
  }
}

async function createCatch(event) {
  event.preventDefault();
  const formData = new FormData(event.target);

  if (!currUser) {
    window.location = "index.html";
    return;
  }

  const data = {};
  try {
    // from Victor
    // const data = [...formData.entries()].reduce((a, [k,v]) =>
    // Object.assign(a, {[k]: v }), {});
    // if (Object.values(data).some(x => x == ``)) {
    //   throw new Error('All fields are required!')
    // }
    for (const [key, value] of formData.entries()) {
      if (value == ``) {
        throw new Error("All fields are required!");
      }
      data[key] = value.trim();
    }

    const response = await fetch(`http://localhost:3030/data/catches`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": currUser.token,
      },
      body: JSON.stringify(data),
    });
    if (response.ok == false) {
      throw new Error(response.statusText);
    }
    event.target.reset();
    onLoad();
  } catch (error) {
    alert(error.message);
  }
}

async function onUpdate(event) {
  const id = event.target.dataset.id;
  const parent = event.target.parentElement;
  const children = Array.from(parent.children);

  if (!currUser) {
    window.location = "index.html";
    return;
  }

  const data = {};

  try {
    for (let i = 0; i < children.length - 1; i++) {
      if (i % 2 != 0) {
        const key = children[i].getAttribute("class");
        const value = children[i].value.trim();
        data[key] = value;
        if (value == ``) {
          throw new Error("All fields are required!");
        }
      }
    }

    const response = await fetch(`http://localhost:3030/data/catches/` + id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": currUser.token,
      },
      body: JSON.stringify(data),
    });
    if (response.ok == false) {
      throw new Error(response.statusText);
    }

    onLoad();
  } catch (error) {
    alert(error.message);
  }
}
async function onDelete(event) {
  const id = event.target.dataset.id;
  await fetch("http://localhost:3030/data/catches/" + id, {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": currUser.token,
    },
  });
  onLoad();
}
function onLogout(event) {
  event.preventDefault();

  fetch(`http://localhost:3030/users/logout`, {
    method: "get",
    headers: { "X-Authorization": currUser.token },
  });

  sessionStorage.removeItem("userData");
  window.location = "index.html";
}

function checkUser() {
  const user = document.getElementById(`user`);
  const guest = document.getElementById(`guest`);
  const addBtn = document.querySelector(`.add`);

  if (currUser != null) {
    addBtn.disabled = false;
    guest.style.display = `none`;
    document.querySelector(`span`).textContent = currUser.email;
  } else {
    user.style.display = `none`;
  }
}

function createDomElements(item) {
  let isOwner = `disabled`;
  let value = true;
  if (currUser && item._ownerId == currUser.id) {
    isOwner = `enabled`;
    value = false;
  }

  const div = createEl("div", "", { class: "catch" }, mainDiv);
  createEl("label", "Angler", "", div);
  createEl(
    "input",
    "",
    {
      type: "text",
      class: "angler",
      value: `${item.angler}`,
      [isOwner]: `${value}`,
    },
    div
  );
  createEl("label", "Weight", "", div);
  createEl(
    "input",
    "",
    {
      type: "text",
      class: "weight",
      value: `${item.weight}`,
      [isOwner]: `${value}`,
    },
    div
  );
  createEl("label", "Species", "", div);
  createEl(
    "input",
    "",
    {
      type: "text",
      class: "species",
      value: `${item.species}`,
      [isOwner]: `${value}`,
    },
    div
  );
  createEl("label", "Location", "", div);
  createEl(
    "input",
    "",
    {
      type: "text",
      class: "location",
      value: `${item.location}`,
      [isOwner]: `${value}`,
    },
    div
  );
  createEl("label", "Bait", "", div);
  createEl(
    "input",
    "",
    {
      type: "text",
      class: "bait",
      value: `${item.bait}`,
      [isOwner]: `${value}`,
    },
    div
  );
  createEl("label", "Capture Time", "", div);
  createEl(
    "input",
    "",
    {
      type: "number",
      class: "captureTime",
      value: `${item.captureTime}`,
      [isOwner]: `${value}`,
    },
    div
  );
  createEl(
    "button",
    "Update",
    { class: "update", "data-id": `${item._id}`, [isOwner]: `${value}` },
    div,
    onUpdate
  );
  createEl(
    "button",
    "Delete",
    { class: "delete", "data-id": `${item._id}`, [isOwner]: `${value}` },
    div,
    onDelete
  );
  return div;
}

function createEl(type, content, attributes, append, addEvent) {
  const element = document.createElement(type);
  element.textContent = content;
  if (attributes) {
    for (const value in attributes) {
      element.setAttribute(value, attributes[value]);
    }
  }
  append.appendChild(element);
  element.addEventListener(`click`, addEvent);
  return element;
}
