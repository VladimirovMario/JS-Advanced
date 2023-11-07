const main = document.querySelector("main");
export function showView(section) {
  main.replaceChildren(section);
}

export function e(type, content, attributes, append, addEvent) {
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
