import { html, nothing, render } from './node_modules/lit-html/lit-html.js';
import { cats as catData } from './catSeeder.js'

const section = document.querySelector('#allCats')

const catTemplate = (cat) => html`
  <li>
     <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button @click=${()=> toggleInfo(cat)} class="showBtn">${cat.info ? `Hide` : `Show`} status code</button>
            
            ${cat.info
                ? html`
                 <div class="status" style="display: block" id="${cat.id}">
                    <h4>Status Code: ${cat.statusCode}</h4>
                    <p>${cat.statusMessage}</p>
                  </div>`
                : nothing
            }
           
        </div>
    </li>
`
catData.forEach(c => c.info = false);

update();

function update() {
    render(html`<ul>${catData.map(catTemplate)}</ul>`,section)
}

function toggleInfo(cat) {
    cat.info = !cat.info;
    update();
}
  
