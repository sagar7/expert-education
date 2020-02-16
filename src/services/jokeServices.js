import http from "./httpService";
const apiEndPoint = "/random";
const categoriesEndPoint = "/categories";

export function random() {
  return http.get(`${apiEndPoint}`);
}

export function categories() {
  return http.get(`${categoriesEndPoint}`);
}

export function categoryData(category) {
  return http.get(`/random?category=${category}`);
}
export async function freeTextSearch(query) {
  return await http.get(`/search?query=${query}`);
}
export default {
  random,
  categories
};
