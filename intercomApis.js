import axios from "axios";
import { getAccessToken } from "./utils.js";

export const intercomApi = axios.create({
  baseURL: "https://api.intercom.io",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

intercomApi.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
