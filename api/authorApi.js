import { handleResponse, handleError } from "./apiUtils";
const localUrl = "http://localhost:3001";
const baseUrl = localUrl + "/authors/";

export function getAuthors() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
