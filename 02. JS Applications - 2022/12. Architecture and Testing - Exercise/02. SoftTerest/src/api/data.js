// It do not worked. I have to check why.
// import * as api from "./api.js";
import { get, post, onDelete } from "./api.js";

const endpoints = {
  ideas: "/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc",
  create: "/data/ideas",
  details: "/data/ideas/",
  del: "/data/ideas/",
};

export async function getAllIdeas() {
  return get(endpoints.ideas);
}

export async function createIdea(ideaData) {
  return post(endpoints.create, ideaData);
}

export async function getById(id) {
  return get(endpoints.details + id);
}

export async function deleteById(id) {
  return onDelete(endpoints.del + id);
}
