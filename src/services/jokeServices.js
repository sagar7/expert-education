import http from "./httpService";
const apiEndPoint = "/random";
export function random() {
  return http.get(`${apiEndPoint}`);
}

export default {
  random
};
