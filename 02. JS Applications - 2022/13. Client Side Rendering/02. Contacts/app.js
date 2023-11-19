import { html, nothing, render } from "./node_modules/lit-html/lit-html.js";
import { contacts } from "./contacts.js";

const section = document.querySelector("#contacts");

const contactTemplate = (contacts) => html`
  <div class="contact card">
    <div>
      <i class="far fa-user-circle gravatar"></i>
    </div>
    <div class="info">
      <h2>Name: ${contacts.name}</h2>
      <button class="detailsBtn" @click=${() => showDetails(contacts)}>Details</button>
      ${contacts.info
        ? html`
         <div class="details" id="${contacts.id}" style="display: block;">
            <p>Phone number: ${contacts.phoneNumber}</p>
            <p>Email: ${contacts.email}</p>
          </div>`
        : nothing}
    </div>
  </div>
`;
update();

function update() {
  render(contacts.map(contactTemplate), section);
}

contacts.forEach((c) => (c.info = false));

function showDetails(contacts) {
  
  contacts.info = !contacts.info;
  update();
}

2; // Solution with style.display ? 'none' : 'block'
// const contactCard = (contact, onToggle) => html`
//     <div class="contact card">
//         <div>
//             <i class="far fa-user-circle gravatar"></i>
//         </div>
//         <div class="info">
//             <h2>Name: ${contact.name}</h2>
//             <button @click=${onToggle} class="detailsBtn">Details</button>
//             <div class="details" id=${contact.id}>
//                 <p>Phone number: ${contact.phoneNumber}</p>
//                 <p>Email: ${contact.email}</p>
//             </div>
//         </div>
//     </div>
// `;

// renderContacts();

// function renderContacts() {
//     const result = contacts.map((c) => contactCard(c, onToggle));
//     const contactsDivElement = document.getElementById('contacts');

//     render(result, contactsDivElement);
// }

// function onToggle(e) {
//     const targetContact = e.target.parentElement.children[2];
//     targetContact.style.display = targetContact.style.display === 'block' ? 'none' : 'block';
// }