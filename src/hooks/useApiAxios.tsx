import axios from "axios";
import { getCookies, setCookies } from "cookies-next";
import { api_base_url } from "@utils/url";
//==========================================================
const useApiAxios = () => {
  //==========================================================
  const refreshAccessToken = async () => {
    const { refresh_token, access_token } = getCookies();
    const { data } = await axios.post(`${api_base_url}/api/v1/auth/refresh-token`, {
      access_token,
      refresh_token,
    });
    setCookies("access_token", data.Token);
    setCookies("refresh_token", data.refresh_token);
    setCookies("expires_time", data.expires_time);
    return data;
  };
  //==========================================================
  const axios_instance = axios.create({
    baseURL: api_base_url,
  });
  // ==========================================================
  // Request interceptor for API calls
  axios_instance.interceptors.request.use(
    async (config) => {
      const { access_token } = getCookies();
      config.headers.Authorization = `Bearer ${access_token}`;
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );
  //==========================================================
  //Response interceptor for API calls
  axios_instance.interceptors.response.use(
    (response) => {
      return response;
    },
    async function (error) {
      console.error(error);
      const originalRequest = error.config;
      if (
        (error.response.status === 403 || error.response.status === 401) &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true;
        const { Token } = await refreshAccessToken();
        axios_instance.defaults.headers.common["Authorization"] = "Bearer " + Token;
        return axios_instance(originalRequest);
      }
      return Promise.reject(error);
    }
  );
  return axios_instance;
};
//==========================================================
export default useApiAxios;
