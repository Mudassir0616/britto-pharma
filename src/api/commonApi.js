import APIBase from "../utils/apiBase";
import { BASE_URL } from "./api";

export const API_URL = BASE_URL;

export const blogsCategoryApi = new APIBase({
  baseURL: `${BASE_URL}/api/blog-category/`,
});
