const element = document.createElement("div");
element.id = "notification";

const msg = document.createElement("span");
const closeBtn = document.createElement("span");
closeBtn.innerHTML = "&#10006;";

element.addEventListener("click", clearNotify);

element.appendChild(msg);
element.appendChild(closeBtn);

export function notify(message) {
  msg.textContent = message;
  document.body.appendChild(element);
  setTimeout(clearNotify, 3000);
}

export function clearNotify() {
  element.remove();
}
