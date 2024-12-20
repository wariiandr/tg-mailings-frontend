import axios from 'axios';
import {AxiosInstance} from "axios";
import router from "@/router";

const instance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
    },
})

instance.interceptors.request.use(
    config => {
        const token: string = localStorage.token;

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    error => {
        console.log(error);
    }
);

instance.interceptors.response.use(
    res => {
        return res;
    },
    async error => {
        if (error.response.status === 401) {
            localStorage.removeItem('token');

            router.push("/login");
        }

        return Promise.reject(error);
    }
);

export default instance