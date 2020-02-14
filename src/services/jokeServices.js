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
  return http.get(`/search?query=${category}`);
}
export default {
  random,
  categories
};
