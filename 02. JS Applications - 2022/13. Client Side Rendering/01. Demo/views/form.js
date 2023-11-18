import { html } from "../node_modules/lit-html/lit-html.js";

export const formTemplate = (onSubmit) => html`
  <form @submit=${onSubmit}>
    <label> <input type="text" name="title" /> Title</label>
    <label> <input type="text" name="author" /> Author</label>
    <label><textarea name="content"></textarea> Content</label>
    <input type="submit" value="Create">
  </form>
`;
