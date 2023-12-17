import { login } from "../api/users.js";
import { html } from "../lib.js";

const loginTemplate = (onSubmit) => html`
  <section id="form-login">
    <form @submit=${onSubmit} class="text-center border border-light p-5" action="" method="">
        <h1>Login</h1>
        <div class="form-group">
            <label for="email">Email</label>
            <input id="email" type="email" class="form-control" placeholder="Email" name="email" value="">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input id="password" type="password" class="form-control" placeholder="Password" name="password"
                value="">
        </div>

        <button type="submit" class="btn btn-primary">Login</button>
    </form>
</section>
`;

export function loginPage(ctx) {
  ctx.render(loginTemplate(onSubmit));

  async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get("email").trim();
    const password = formData.get("password").trim();

    if (email && password) {
      await login({ email, password });
      ctx.updateUserNav();
      event.target.reset();
      ctx.page.redirect("/");
      } else {
      return alert("All fields are required!");
    }
  }
}
