import { setUserData } from "../util.js";
import { get, post } from "./api.js";

const endpoints = {
  login: `/users/login`,
  register: `/users/register`,
  logout: `/users/logout`,
};

// We can test it in browser console, only like this. :
// await api.login(`peter@abv.bg`,`123456`)
// export async function login(email,password){
// const resData = await post(endpoints.login, { email, password });
export async function login(data) {
  const resData = await post(endpoints.login, data);

  const userData = {
    id: resData._id,
    email: resData.email,
    accessToken: resData.accessToken,
    //OPTIONAL FOR THIS TASK:
    username: resData.username,
    gender: resData.gender,
  };
  setUserData(userData);

  // console.log('from user login',data);
  // console.log('from user login',userData);
}

export async function register(data) {
  const resData = await post(endpoints.register, data);

  const userData = {
    id: resData._id,
    email: resData.email,
    accessToken: resData.accessToken,
    //OPTIONAL FOR THIS TASK:
    username: resData.username,
    gender: resData.gender,
  };
  setUserData(userData);
  // console.log('from user register',data);
  // console.log('from user register',userData);
}

export function logout() {
  get(endpoints.logout);
  localStorage.removeItem("userData");
}
