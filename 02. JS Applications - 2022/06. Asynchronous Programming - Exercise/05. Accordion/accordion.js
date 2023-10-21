async function solution() {
  const mainSection = document.getElementById(`main`);
  const baseUrl = "http://localhost:3030/jsonstore/advanced/articles";

  try {
    const response = await fetch(`${baseUrl}/list`);

    if (response.status != 200) {
      throw new Error(response.status);
    }
    const data = await response.json();

    for (const article of data) {
      const div1 = createEl(`div`, ``, `accordion`, mainSection);
      const div2 = createEl(`div`, ``, `head`, div1);
      createEl(`span`, `${article.title}`, ``, div2);
      const button = createEl(`button`, `More`, `button`, div2, onClick);
      button.id = article._id;
      const extraDiv = createEl(`div`, ``, `extra`, div1);
      createEl(`p`, ``, ``, extraDiv);
    }
  } catch (err) {
    alert(err.message);
  }

  async function onClick(event) {
    const parent = event.target.parentElement.parentElement;
    const div = Array.from(parent.children)[1];
    const p = Array.from(div.children)[0];

    try {
      const res = await fetch(`${baseUrl}/details/${event.target.id}`);
      if (res.status != 200) {
        throw new Error(res.status);
      }
      const data = await res.json();

      if (event.target.textContent == `More`) {
        p.textContent = data.content;
        div.style.display = `block`;
        event.target.textContent = `Less`;
      } else {
        div.style.display = `none`;
        event.target.textContent = `More`;
      }
    } catch (error) {
      alert(error.message);
    }
  }

  function createEl(type, content, className, append, addEvent) {
    const element = document.createElement(type);
    element.textContent = content;
    if (className) {
      element.className = className;
    }
    element.addEventListener(`click`, addEvent);
    append.appendChild(element);
    return element;
  }
}
solution();
