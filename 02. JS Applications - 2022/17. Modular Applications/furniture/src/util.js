export function getUserData() {
  return JSON.parse(localStorage.getItem("userData"));
}

export function setUserData(data) {
  localStorage.setItem("userData", JSON.stringify(data));
}

export function clearUserData() {
  localStorage.removeItem("userData");
}

export function parseQueryString(string) {
  "page=3&search=chair";
  const params = string
    .split("&")
    .map((p) => p.split("="))
    .reduce((a, [k, v]) => Object.assign(a, { [k]: v }), {});
    // { search: "sofa", page: "3" }
    // console.log(params);

    return params;
}
