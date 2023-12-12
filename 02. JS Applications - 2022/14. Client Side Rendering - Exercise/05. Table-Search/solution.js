import { html, nothing, render } from "./node_modules/lit-html/lit-html.js";

const tableRowTemplate = (student) => html`
  <tr class=${student.match ? "select" : nothing}>
    <td>${student.item.firstName + ` ` + student.item.lastName}</td>
    <td>${student.item.email}</td>
    <td>${student.item.course}</td>
  </tr>
`;

const root = document.querySelector("tbody");
const url = "http://localhost:3030/jsonstore/advanced/table";
const search = document.querySelector("#searchField");
const searchBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener("click", onSearch);

let students;
getData();

async function getData() {
  const res = await fetch(url);
  const resData = await res.json();
  students = Object.values(resData).map((s) => ({ item: s, match: false }));
  // Object { item: {…}, match: false }
  update();
}

function update() {
  render(students.map(tableRowTemplate), root);
}

function onSearch() {
  const value = search.value.trim().toLowerCase();
  
  for (let student of students) {
    
    student.match = Object.values(student.item).some(
      (v) => value && v.toLowerCase().includes(value));
    // console.log(student);
  }
  update();
}
