const baseUrl = "http://localhost:3030/jsonstore/collections/students";
const form = document.getElementById(`form`);
form.addEventListener(`submit`, onSubmit);
const body = document.querySelector(`#results > tbody:nth-child(2)`);

getData();

async function onSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const firstName = formData.get(`firstName`).trim();
  const lastName = formData.get(`lastName`).trim();
  const facultyNumber = formData.get(`facultyNumber`).trim();
  const grade = formData.get(`grade`).trim();

  if (firstName == `` || lastName == `` || facultyNumber == `` || grade == ``) {
    return;
  }
  const student = {
    firstName,
    lastName,
    facultyNumber,
    grade,
  };

  try {
    const response = await fetch(baseUrl, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    });
    if (response.status != 200) {
      const error = await response.json();
      throw new Error(error.message);
    }
    await response.json();

    getData();
    form.reset();

  } catch (error) {
    alert(error.message);
  }
}

async function getData() {
  try {
    const res = await fetch(baseUrl);
    if (res.ok == false) {
      throw new Error(res.status);
    }
    const resData = await res.json();

    const currTr = Object.values(resData).map(createEl);
    body.replaceChildren(...currTr);
  } catch (error) {
    alert(error.message);
  }
}

function createEl(params) {
  const { firstName, lastName, facultyNumber, grade } = params;

  const tr = document.createElement(`tr`);
  const tdFirstName = document.createElement(`td`);
  const tdLastName = document.createElement(`td`);
  const tdFaculty = document.createElement(`td`);
  const tdGrade = document.createElement(`td`);

  tdFirstName.textContent = firstName;
  tdLastName.textContent = lastName;
  tdFaculty.textContent = facultyNumber;
  tdGrade.textContent = grade;

  tr.appendChild(tdFirstName);
  tr.appendChild(tdLastName);
  tr.appendChild(tdFaculty);
  tr.appendChild(tdGrade);
  body.appendChild(tr);
  return tr;
}

