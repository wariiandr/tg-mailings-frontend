import api from "@/api/index";
import router from "@/router";
import {AxiosInstance} from "axios";

export default function(instance: AxiosInstance) {
    return {
        async login(payload: { userName: string, password: string }): Promise<void> {
            try {
                const { data } = await instance.post('/users/login', payload);

                localStorage.token = data.token;

                router.push('/');
            } catch (e) {
                console.log(e)
            }
        },
    }
}