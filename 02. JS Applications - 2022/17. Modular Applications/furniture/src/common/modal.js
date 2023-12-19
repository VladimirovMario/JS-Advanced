const element = document.createElement("div");
element.id = "overlay";

element.innerHTML = `
<div id="modal">
<p>Are you sure you want to delete this?</p>
<div>
    <button class="modal-ok">Ok</button>
    <button class="modal-cancel" >Cancel</button>

</div>
</div>
`;

element.querySelector(".modal-ok").addEventListener('click', ()=> onChoice(true))
element.querySelector(".modal-cancel").addEventListener('click', ()=> onChoice(false))

const msg = element.querySelector("p");

let onChoice = null;

export function showModal(message) {
  msg.textContent = message;
  document.body.appendChild(element);

  return new Promise((callback) => {
    onChoice = (choice) => {
      removeModal();
      callback(choice);
    };
  });
}

function removeModal() {
  element.remove();
}
