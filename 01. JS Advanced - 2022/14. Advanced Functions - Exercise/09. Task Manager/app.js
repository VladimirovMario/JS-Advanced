function solve() {
  document.getElementById(`add`).addEventListener(`click`, addTask);

  const taskInput = document.getElementById(`task`);
  const descriptionInput = document.getElementById(`description`);
  const dateInput = document.getElementById(`date`);

  let currSection = Array.from(document.getElementsByTagName("section"));

  function addTask(event) {
    // When we have: <form> tag, and we do not
    // want the page to refresh
    //we use: preventDefault();
    event.preventDefault();

    let firstSection = currSection[1].children[1];
    let secondPlace = currSection[2].children[1];
    let thirdPlace = currSection[3].children[1];

    if (
      taskInput.value !== `` &&
      descriptionInput.value !== `` &&
      dateInput.value !== ``
    ) {
      
      let article = document.createElement(`article`);
      firstSection.appendChild(article);

      let h3 = document.createElement(`h3`);
      article.appendChild(h3);
      h3.textContent = taskInput.value;

      let p1 = document.createElement(`p`);
      article.appendChild(p1);
      p1.textContent = `Description: ${descriptionInput.value}`;

      let p2 = document.createElement(`p`);
      article.appendChild(p2);
      p2.textContent = `Due Date: ${dateInput.value}`;

      let div = document.createElement(`div`);
      article.appendChild(div);
      div.className = `flex`;

      let greenButton = document.createElement(`button`);
      div.appendChild(greenButton);
      greenButton.className = `green`;
      greenButton.textContent = `Start`;
      greenButton.addEventListener(`click`, onStart);

      let redButton = document.createElement(`button`);
      div.appendChild(redButton);
      redButton.className = `red`;
      redButton.textContent = `Delete`;
      redButton.addEventListener(`click`, onDelete);

      let orangeButton = document.createElement(`button`);
      orangeButton.className = `orange`;
      orangeButton.textContent = `Finish`;
      orangeButton.addEventListener(`click`, onFinish);

      taskInput.value = ``;
      descriptionInput.value = ``;
      dateInput.value = ``;

      function onStart() {
        secondPlace.appendChild(article);
        greenButton.remove();
        div.appendChild(orangeButton);
      }

      function onDelete() {
        article.remove();
      }

      function onFinish() {
        thirdPlace.appendChild(article);
        div.remove();
      }
    }
  }
}
