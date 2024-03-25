import axios from "axios";

export const API_URL = "http://localhost:8080/";

export let $api = axios.create({
    baseURL: API_URL,
});

$api.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`
    return config;
});
