import http from "./httpService";
const apiEndPoint = "/random";
const categoriesEndPoint = "/categories";
export function random() {
  return http.get(`${apiEndPoint}`);
}

export function categories() {
  return http.get(`${categoriesEndPoint}`);
}
export default {
  random,
  categories
};
