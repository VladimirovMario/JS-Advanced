function attachEvents() {
  const baseUrl = "http://localhost:3030/jsonstore/phonebook";
  const ul = document.getElementById(`phonebook`);
  const personName = document.getElementById(`person`);
  const phoneNumber = document.getElementById(`phone`);
  const loadBtn = document.getElementById(`btnLoad`);
  const createBtn = document.getElementById(`btnCreate`);
  loadBtn.addEventListener(`click`, onLoad);
  createBtn.addEventListener(`click`, onCreate);

  async function onLoad() {
    try {
      const response = await fetch(baseUrl);
      if (response.status !== 200) {
        throw new Error(response.status);
      }
      const data = await response.json();

      const currLi = Object.values(data).map(createListItem);
      ul.replaceChildren(...currLi);
      
    } catch (error) {
      alert(error.message);
    }
  }

  async function onCreate() {
    if (personName.value == `` || phoneNumber.value == ``) {
      return;
    }
    const data = {
      person: personName.value,
      phone: phoneNumber.value,
    };

    try {
      const response = await fetch(baseUrl, {
        method: "post",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.status !== 200) {
        throw new Error(response.status);
      }
      onLoad();
      personName.value = ``;
      phoneNumber.value = ``;
    } catch (error) {
      alert(error.message);
    }
  }

  async function onDelete(id, li) {
    await fetch(`${baseUrl}/${id}`, {
      method: "delete",
    });
    li.remove();
  }

  function createListItem(record) {
    const li = document.createElement(`li`);
    li.textContent = `${record.person}: ${record.phone}`;
    const deleteBtn = document.createElement(`button`);
    deleteBtn.textContent = `Delete`;
    deleteBtn.addEventListener(`click`, () => onDelete(record._id, li));
    li.appendChild(deleteBtn);
    return li;
  }
}

attachEvents();
