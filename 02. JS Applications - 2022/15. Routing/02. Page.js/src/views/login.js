import { html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../data/users.js";

const loginTemplate = (onSubmit) => html`
  <h2>Login</h2>
  <form @submit=${onSubmit}>
    <label>Email: <input type="text" name="email" /></label>
    <label>Password: <input type="text" name="password" /></label>
    <input type="submit" value="Login" />
  </form>
`;

export function loginView(ctx) {
  ctx.render(loginTemplate(onSubmit));

  async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const email = formData.get(`email`).trim();
    const password = formData.get(`password`).trim();

    if (email && password) {
      await login(email, password);
    } else {
      return alert("All fields are required!");
    }
    event.target.reset();
    ctx.page.redirect("/");
  }
}
