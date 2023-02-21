import axios from "axios";

export const ROOT_BASE_URL = "http://localhost:3000";

const authenCallApo = (token) => {
  const instance = axios.create({
    baseURL: ROOT_BASE_URL,
    timeout: 10000,
    headers: { Authorization: "Bearer " + token },
  });

  return instance;
};

const basicCallApi = () => {
  const instance = axios.create({
    baseURL: ROOT_BASE_URL,
    timeout: 10000,
  });

  return instance;
};

const baseUrl = {
    authenCallApo,
    basicCallApi
};

export default baseUrl;
