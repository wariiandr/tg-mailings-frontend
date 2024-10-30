export default function (instance) {
    return {
        async getAllGroups() {
            const { data } = await instance.get('/groups');
            return data;
        },
        async postGroup(payload) {
            const { data } = await instance.post('/groups', payload);
            return data;
        },
        async putGroup(payload) {
            const { data } = await instance.put('/groups', payload);
            return data;
        },
        async parseGroupAdmins(payload) {
            const { data } = await instance.post('/groups/parse_admins', payload);
            return data;
        },
        async startMailing(payload) {
            const { data } = await instance.post('/groups/start_mailing', payload);
        },
    };
}
//# sourceMappingURL=groups.js.map