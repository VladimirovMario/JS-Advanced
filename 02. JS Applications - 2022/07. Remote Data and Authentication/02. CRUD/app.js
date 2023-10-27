const list = document.getElementById(`list`);
const input = document.getElementById(`product`);

document.getElementById(`refreshBtn`).addEventListener(`click`, getData);

document.getElementById(`createBtn`).addEventListener(`click`, postData);

const baseUrl = "http://localhost:3030/jsonstore/demo";

async function getData() {
  const response = await fetch(`${baseUrl}`);

  const data = await response.json();
  // Object { "1f37bd03-7739-4ab8-a7ad-ce9d7bba61bb": {…} }
  // console.log(data);

  //[ {…}, {…} ]
  // console.log(Object.values(data));

  // Object { name: "Fourth", _id: "1f37bd03-7739-4ab8-a7ad-ce9d7bba61bb" }
  // console.log(...Object.values(data))
  
  const test = Object.values(data).map(createListItem); // function createListItem(record)
  list.replaceChildren(...test); //
}

async function postData() {
  if (input.value == ``) {
    alert(`Please, enter value!`);
    return;
  }
  const productData = {
    name: input.value,
  };

  try {
    const response = await fetch(`${baseUrl}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (response.status != 200) {
      throw new Error(`${response.status}`);
    }
    const responseData = await response.json();

    list.appendChild(createListItem(responseData));
  } catch (error) {
    alert(error.message);
  }
}

function createListItem(record) {
  //   console.log(record);
  const li = document.createElement(`li`);
  li.textContent = record.name;

  const deleteBtn = document.createElement(`button`);
  deleteBtn.textContent = `Delete`;
  deleteBtn.addEventListener(`click`, () => deleteData(record._id, li));

  ///////////////////////////////////////
  // const editBtn = document.createElement(`button`);
  // editBtn.textContent = `Edit`;
  // editBtn.addEventListener(`click`, () => editData(record._id));
  // li.appendChild(editBtn);
  /////////////////////////////////////
  li.appendChild(deleteBtn);
  return li;
}

async function deleteData(id, li) {
  // console.log(id,li);
  const response = await fetch(`${baseUrl}/${id}`, {
    method: `delete`,
  });
  li.remove();
}

// async function editData(id) {
//   //TO DO:
//   //   console.log(id);

//   const response = await fetch(
//     `${baseUrl}/${id}`
//     //   , {
//     //     method: "put",
//     //     headers: {
//     //       "Content-Type": "application/json",
//     //     },
//     //     body: JSON.stringify(productData),
//     //   }
//   );
// //   console.log(response);
// }
