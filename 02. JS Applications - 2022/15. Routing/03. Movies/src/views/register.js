import { register } from "../api/users.js";
import { html } from "../lib.js";

const registerTemplate = (onSubmit) => html`
  <section id="form-sign-up">
    <form @submit=${onSubmit} class="text-center border border-light p-5" action="#" method="post">
        <h1>Register</h1>
        <div class="form-group">
            <label for="email">Email</label>
            <input id="email" type="email" class="form-control" placeholder="Email" name="email" value="">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input id="password" type="password" class="form-control" placeholder="Password" name="password"
                value="">
        </div>

        <div class="form-group">
            <label for="repeatPassword">Repeat Password</label>
            <input id="repeatPassword" type="password" class="form-control" placeholder="Repeat-Password"
                name="repeatPassword" value="">
        </div>

        <button type="submit" class="btn btn-primary">Register</button>
    </form>
</section>
`;

export function registerPage(ctx) {
  ctx.render(registerTemplate(onSubmit));

  async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get("email").trim();
    const password = formData.get("password").trim();
    const rePass = formData.get("repeatPassword").trim();

    if (password.length < 6) {
      return alert("The password should be at least 6 characters long");
    }
    if (password != rePass) {
      return alert("Password don't match!");
    }
    if (email && password) {
      await register({ email, password });

      ctx.updateUserNav();
      event.target.reset();
      ctx.page.redirect("/");
    } else {
      return alert("All fields are required!");
    }
  }
}
