import axios from "axios";

export const hubspotApi = axios.create({
  baseURL: "https://api.hubapi.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

hubspotApi.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${process.env.HUBSPOT_API_KEY}`;

    return config;
  },
  (error) => Promise.reject(error)
);
