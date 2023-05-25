import axios from "axios";
import { getCookies, setCookies } from "cookies-next";
import { api_base_url } from "@utils/url";
//==========================================================
const useApiAxios = () => {
  console.log(api_base_url);
  //==========================================================
  const refreshAccessToken = async () => {
    const { refreshToken, accessToken } = getCookies();
    const { data } = await axios.post(`${api_base_url}/api/v1/auth/refresh-token`, {
      accessToken,
      refreshToken,
    });
    setCookies("accessToken", data.Token);
    setCookies("refreshToken", data.RefreshToken);
    setCookies("expiration", data.Expiration);
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
      const { accessToken } = getCookies();
      config.headers.Authorization = `Bearer ${accessToken}`;
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
