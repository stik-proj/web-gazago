import axios from "axios";
import { webToApp } from "../helpers";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

apiClient.interceptors.request.use(async (config) => {
  if (sessionStorage.getItem("appToken") === null) {
    let result = await webToApp("getToken");
    //@ts-ignore
    sessionStorage.setItem("appToken", result.appToken);
  }
  const accessToken = sessionStorage.getItem("appToken");
  config.headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  return config;
});

apiClient.interceptors.response.use((value) => value, (error) => {
  if( error instanceof TypeError) {
    return {
      errorMessage: `이용에 불편을 드려 죄송합니다.\n예상하지 못한 오류가 발생했습니다.\n잠시 후에 다시 시도해 주세요.`,
      closeWebivew: true,
    }
  } else {
    return error;
  }
});

export default apiClient;
