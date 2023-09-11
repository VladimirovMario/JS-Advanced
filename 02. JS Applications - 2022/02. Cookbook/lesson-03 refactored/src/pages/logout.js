import { logout } from "../auth.js";

export async function renderLogout() {
  const userData = JSON.parse(localStorage.getItem(`userData`));

  await fetch("http://localhost:3030/users/logout", {
    method: "get",
    headers: {
      "X-Authorization": userData.accessToken,
    },
  });
  logout();

  alert("Successful logout");
}
