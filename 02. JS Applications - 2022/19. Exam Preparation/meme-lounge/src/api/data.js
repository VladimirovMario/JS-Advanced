import { del, get, post, put } from "./api.js";

const endpoints = {
  memes: "/data/memes?sortBy=_createdOn%20desc",
  create: "/data/memes",
  details: "/data/memes/",
  delete: "/data/memes/",
  edit: "/data/memes/",
};

export async function getAllMemes() {
  return get(endpoints.memes);
}

export async function createMeme(data) {
  return post(endpoints.create, data);
}

export async function getDetailsById(id) {
  return get(endpoints.details + id);
}

export async function onDeleteById(id) {
  return del(endpoints.delete + id);
}

export async function update(id, data) {
  return put(endpoints.edit + id, data);
}

export async function getMemeByUser(userId) {
  return get(`/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}
