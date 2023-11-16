import { get, post } from "./api.js";

const endpoints = {
  login: `/users/login`,
  register: `/users/register`,
  logout: `/users/logout`,
};

export async function login(data) {
  // We can test it in browser console, only like this. :
  // await api.login(`peter@abv.bg`,`123456`)
  // export async function login(email,password)
  // const resData = await post(endpoints.login, { email, password });
  const resData = await post(endpoints.login, data);
  const userData = {
    email: resData.email,
    id: resData._id,
    accessToken: resData.accessToken,
  };

  localStorage.setItem("userData", JSON.stringify(userData));
}

export async function register(data) {
  const { accessToken, _id } = await post(endpoints.register, data);
  const userData = { email, accessToken, id: _id };
  localStorage.setItem("userData", JSON.stringify(userData));
}

export async function logout() {
  get(endpoints.logout);
  localStorage.removeItem("userData");
}
