import axios from "axios";
import { setupCache } from "axios-cache-adapter";
import Cookies from "js-cookie";

// Create `axios-cache-adapter` instance
const cache = setupCache({
  maxAge: 24 * 60 * 60 * 1000,
});

const baseURL = process.env.REACT_APP_API_BASE_URL;

const getToken = (name = "token") => {
  return Cookies.get(name);
};

const Axios = axios.create({
  baseURL,
  timeout: 80000,
  adapter: cache.adapter,
});

Axios.interceptors.request.use(
  async (config) => {
    const token = getToken("token");
    if (token) config.headers.Authorization = `Token ${token}`;

    return config;
  },
  (error) => Promise.reject(error)
);

Axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error && error.response && error.response.status === 401) {
      Cookies.remove("token");
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

export { Axios };
