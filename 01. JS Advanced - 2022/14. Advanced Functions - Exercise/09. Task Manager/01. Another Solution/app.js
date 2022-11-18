function solve() {
  //This is our ADD button
  document.getElementById(`add`).addEventListener(`click`, addTask);
  // Those are the input fields like object
  const input = {
    task: document.getElementById(`task`),
    description: document.getElementById(`description`),
    date: document.getElementById(`date`),
  };
  // Destructing the sections. After that we can use the current section to add the ARTICLE
  const [_, open, inProgress, complete] = Array.from(
    document.getElementsByTagName("section")
  );

  // This is our ADD button eventListener function
  function addTask(event) {
    // When we have: <form> tag,
    // and do not  want the page to refresh
    // we use: preventDefault();
    event.preventDefault();

    //CREATE ELEMENTS:

    1; // Create the first element and get the reference
    const article = document.createElement(`article`);

    2; // Create and append the "H3". Using our function "createElement". We use (type,content)
    article.appendChild(createElement(`h3`, input.task.value));

    3; // Create and append the first "P" tag. Using our function "createElement". We use (type,content)
    article.appendChild(
      createElement(`p`, `Description: ${input.description.value}`)
    );

    4; // Create and append the second "P" tag. Using our function "createElement". We use (type,content)
    article.appendChild(createElement(`p`, `Due Date: ${input.date.value}`));

    5; // Create the "DIV" tag. Using our function "createElement". We use (type,``,className)
    const div = createElement(`div`, ``, `flex`);

    6; // Append article to first section, second child
    open.children[1].appendChild(article);

    7; // Append div to article tag
    article.appendChild(div);

    8;
    // Create the BUTTON and get the reference
    // Using our function "createElement". We use (type, content, className, addEvent)
    const startButton = createElement(`button`, `Start`, `green`, onStart);
    // Append the BUTTON
    div.appendChild(startButton);

    9;
    // Create the BUTTON and get the reference
    // Using our function "createElement". We use (type, content, className, addEvent)
    const deleteButton = createElement(`button`, `Delete`, `red`, onDelete);
    // Append the BUTTON
    div.appendChild(deleteButton);

    10;
    // Create the BUTTON and get the reference
    // Using our function "createElement". We use (type, content, className, addEvent)
    const finishButton = createElement(`button`, `Finish`, `orange`, onFinish);

    11; // For all input fields set the value to be ready for the next input
    Object.values(input).forEach((el) => (el.value = ``));

    1; // We use this function like TEMPLATE
    function createElement(type, content, className, addEvent) {
      // First we make a template for creating an element: (type)
      const element = document.createElement(type);
      // Second we add textContent: (content)
      element.textContent = content;
      // Checking if we need "className": (className)
      if (className) {
        element.className = className;
      }
      // Creating "addEventListener(`click`, addEvent)": (addEvent)
      element.addEventListener(`click`, addEvent);
      return element;
    }

    2; // When we click on "Start" button
    function onStart() {
      // Move the article to the second SECTION
      inProgress.children[1].appendChild(article);
      // Remove the button
      startButton.remove();
      // And append the third button
      div.appendChild(finishButton);
    }

    3; // When we click "Delete", just remove the whole ARTICLE
    function onDelete() {
      article.remove();
    }

    4; //When we click "Finish" we move the whole ARTICLE to last section
    // and we remove the DIV tag, where are the buttons
    function onFinish() {
      complete.children[1].appendChild(article);
      div.remove();
    }
  }
}
