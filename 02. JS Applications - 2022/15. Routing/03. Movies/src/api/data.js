import * as api from "./api.js";

const endpoints = {
    allMovies: '/data/movies',
    getMovie: '/data/movies/',
    editMovie: '/data/movies/',
    addMovie: '/data/movies',
    deleteMovie: '/data/movies/'
}

export function getAllMovies() {
    return api.get(endpoints.allMovies)
}
export  function getMovieById(id){
    return  api.get(endpoints.getMovie + id)
}

export function editMovieById(id , data){
    return api.put(endpoints.editMovie + id , data)
}

export function createMovie(data) {
    return api.post(endpoints.addMovie, data)
}

export function onDeleteById(id) {
  return api.onDelete(endpoints.deleteMovie + id);
}