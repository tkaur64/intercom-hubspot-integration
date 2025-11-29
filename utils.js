import { intercomApi } from "./intercomApis.js";

let accessToken = null;
export const saveAccessToken = (token) => {
  accessToken = token;
};

export const getAccessToken = () => accessToken;

export const fetchAllData = async (url) => {
  let allData = [];
  let nextPageUrl = url;

  while (nextPageUrl) {
    const response = await intercomApi.get(nextPageUrl);

    const responseData = response.data.data;
    allData = [...allData, ...responseData];

    const next = response.data.pages?.next;
    nextPageUrl = next ? next.replace("https://api.intercom.io", "") : null;
  }

  return allData;
};
