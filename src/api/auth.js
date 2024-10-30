import router from "@/router";
export default function (instance) {
    return {
        async login(payload) {
            try {
                const { data } = await instance.post('/users/login', payload);
                localStorage.token = data.token;
                router.push('/');
            }
            catch (e) {
                console.log(e);
            }
        },
    };
}
//# sourceMappingURL=auth.js.map