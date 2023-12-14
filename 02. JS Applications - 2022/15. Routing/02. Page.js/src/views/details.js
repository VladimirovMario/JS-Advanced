import { html } from "../../node_modules/lit-html/lit-html.js";
import { getRecipeById } from "../data/recipes.js";

const detailsTemplate = (recipe) => html`
  <h2>Details Page</h2>
        ${recipe 
        ? html`
        <h3>${recipe.name}</h3>
        <h4>Ingredients</h4>
        ${recipe.ingredients.map(i => html`<p>${i}</p>`)}
        <h4>Steps</h4>
        ${recipe.steps.map(s => html`<p>${s}</p>`)}
        `
        : html`<p>This may take a few breaths. Inhale, exhale.</p>`}
`;

export async function showDetails(ctx) {
  const id = ctx.params.id;
  ctx.render(detailsTemplate());
  const recipe = await getRecipeById(id);
  console.log(recipe);
  ctx.render(detailsTemplate(recipe))
}
