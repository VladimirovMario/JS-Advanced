import * as api from "./api.js";
/*
All Furniture (GET): http://localhost:3030/data/catalog
Furniture Details (GET): http://localhost:3030/data/catalog/:id
My Furniture (GET): http://localhost:3030/data/catalog?where=_ownerId%3D%22{userId}%22
Create Furniture (POST): http://localhost:3030/data/catalog
Update Furniture (PUT): http://localhost:3030/data/catalog/:id
Delete Furniture (DELETE):  http://localhost:3030/data/catalog/:id
*/

const pageSize = 4;

const endpoints = {
  all: "/data/catalog?pageSize=4&offset=",
  count: "/data/catalog?count",
  details: "/data/catalog/",
  myItems: (userId) => `/data/catalog?where=_ownerId%3D%22${userId}%22`,
  CountMyItems: (userId) =>
    `/data/catalog?where=_ownerId%3D%22${userId}%22&count`,
  create: "/data/catalog",
  edit: "/data/catalog/",
  delete: "/data/catalog/",
};

export async function getAll(page, search) {
  let url1 = endpoints.all + (page - 1) * pageSize;
  let url2 = endpoints.count;

  if (search) {
    url1 += "&where=" + encodeURIComponent(`make LIKE "${search}"`);
    url2 += "&where=" + encodeURIComponent(`make LIKE "${search}"`);
  }

  const [data, count] = await Promise.all([api.get(url1), api.get(url2)]);
  return {
    data,
    pages: Math.ceil(count / pageSize),
  };
}

export async function getById(id) {
  return api.get(endpoints.details + id);
}

export async function getMyItems(userId) {
  const [data, count] = await Promise.all([
    api.get(endpoints.myItems(userId)),
    api.get(endpoints.CountMyItems(userId)),
  ]);
  return {
    data,
    pages: Math.ceil(count / pageSize),
  };
}

export async function createItem(data) {
  return api.post(endpoints.create, data);
}

export async function editItem(id, data) {
  return api.put(endpoints.edit + id, data);
}

export async function deleteItem(id) {
  return api.del(endpoints.delete + id);
}
