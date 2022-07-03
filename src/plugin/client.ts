import axios, { AxiosInstance } from "axios";
import Cookies from "js-cookie";

/**
 * @description 비동기 통신 도구
 * @see [https://axios-http.com/kr/docs/intro]
 */
const client: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        common: {
            Authorization: Cookies.get("access_token"),
        },
    },
});

export default client;
