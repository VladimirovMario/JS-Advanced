import { getMovieById } from "./api/data.js";

export function getUserData() {
  return JSON.parse(localStorage.getItem("userData"));
}

export function setUserData(data) {
   localStorage.setItem('userData', JSON.stringify(data))
}

export function clearUserData() {
    localStorage.removeItem('userData')
}

export  function loadMovie( ctx, next){
  const moviePromise =  getMovieById(ctx.params.id);
  ctx.moviePromise = moviePromise;
  next();
}