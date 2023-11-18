import { html, nothing } from "../node_modules/lit-html/lit-html.js";
import { classMap } from "../node_modules/lit-html/directives/class-map.js";

export const articleTemplate = (onDelete, article ,index) => html`
  <article
    class=${classMap({
      highlight: article.highlight,
      red: article.class == "red",
      green: article.class == "green",
      blue: article.class == "blue",
    })}
  >
    <h2>${article.title}</h2>
    ${article.highlight ? html`<h3>Article of the day</h3>` : nothing}
    <button @click=${ ()=> onDelete(index)}>Delete</button>
    <div class="content">
      <p>${article.content}</p>
    </div>
    <footer>${footerTemplate(article.author)}</footer>
  </article>
`;

const footerTemplate = (author) => html`
  Author: <span style="font-style: italic">${author}</span>
`;
