import { render, html } from "../node_modules/lit-html/lit-html.js";
import { until } from '../node_modules/lit-html/directives/until.js'

export { render, html , until };

const host = "http://localhost:3030/jsonstore/collections";

async function request(url, method = "get", data) {
  const options = {
    method,
    headers: {},
  };

  if (data != undefined) {
    options.headers["Content-type"] = "application/json";
    options.body = JSON.stringify(data);
  }

  const res = await fetch(host + url, options);

  if (res.ok == false) {
    const error = await res.json();
    alert(error.message);
    throw new Error(error.message);
  }
  return res.json();
}

async function getBooks() {
  return request("/books");
}

async function getBookById(id) {
    return request("/books/"  + id);
  }
  

async function createBook(book) {
  return request("/books", "post", book);
}

async function updateBook(id, book) {
  return request("/books/" + id, "put", book);
}

async function deleteBook(id) {
  return request("/books/" + id , 'delete');
}

export{
    getBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
}
