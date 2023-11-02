const baseUrl = "http://localhost:3030/jsonstore/collections/books";

const tbody = document.querySelector(`tbody`);
const loadBooksBtn = document.getElementById(`loadBooks`);
loadBooksBtn.addEventListener(`click`, loadBooks);

const createForm = document.getElementById(`createForm`);
createForm.addEventListener(`submit`, onCreate);

const editForm = document.getElementById(`editForm`);
editForm.style.display = `none`;
editForm.addEventListener(`submit`, saveEditedBook);

tbody.addEventListener(`click`, onTableClick);

 loadBooks();

function onTableClick(event) {
  if (event.target.className == `delete`) {
    onDelete(event.target);
  } else if (event.target.className == `edit`) {
    onEdit(event.target);
  }
}

async function saveEditedBook(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  if (formData.get(`title`) == `` || formData.get(`author`) == ``) {
    return;
  }

  const id = formData.get(`id`).trim();
  const author = formData.get(`author`).trim();
  const title = formData.get(`title`).trim();
  await updateBook(id, { author, title });

  event.target.reset();

  loadBooks();

  createForm.style.display = `block`;
  editForm.style.display = `none`;
}

async function onEdit(button) {
  const id = button.parentElement.dataset.id;
  const book = await loadBookById(id);

  createForm.style.display = `none`;
  editForm.style.display = `block`;

  editForm.querySelector(`[name="id"]`).value = id;
  editForm.querySelector(`[name="title"]`).value = book.title;
  editForm.querySelector(`[name="author"]`).value = book.author;
}

async function loadBookById(id) {
  const book = await request(`${baseUrl}/${id}`);
  return book;
}

async function onDelete(button) {
  const id = button.parentElement.dataset.id;

  await deleteBook(id);
  button.parentElement.parentElement.remove();
}

async function onCreate(event) {
  event.preventDefault();
  const formData = new FormData(event.target);

  if (formData.get(`title`) == `` || formData.get(`author`) == ``) {
    return;
  }

  const author = formData.get(`author`).trim();
  const title = formData.get(`title`).trim();
  const result = await createBook({ author, title });
  tbody.appendChild(createRow(result._id, result));
  event.target.reset();
}

async function request(url, options) {
  if (options && options.body != undefined) {
    Object.assign(options, {
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const response = await fetch(url, options);

    if (response.status != 200) {
      const error = await response.json();
      throw new Error(error.message);
    }
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    alert(error.message);
  }
}

async function loadBooks() {
  const books = await request(baseUrl);
  const result = Object.entries(books).map(([id, book]) => createRow(id, book));
  tbody.replaceChildren(...result);
}

function createRow(id, book) {
  const tr = document.createElement(`tr`);
  tr.innerHTML = ` 
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td data-id = ${id}>
        <button class ="edit" >Edit</button>
        <button class ="delete" >Delete</button>
      </td>`;
  return tr;
}

async function createBook(book) {
  const result = await request(baseUrl, {
    method: "post",
    body: JSON.stringify(book),
  });
  return result;
}

async function updateBook(id, book) {
  const result = await request(`${baseUrl}/${id}`, {
    method: "put",
    body: JSON.stringify(book),
  });
  return result;
}

async function deleteBook(id) {
  const result = await request(`${baseUrl}/${id}`, {
    method: "delete",
  });
  return result;
}
