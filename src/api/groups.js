export default function(instance) {
    return {
        getAllGroups() {
            return instance.get('/groups');
        },
        postGroup(payload) {
            return instance.post('/groups', payload);
        },
        putGroup(payload) {
            return instance.put('/groups', payload);
        },

        parseGroupAdmins(payload) {
            console.log(payload)
            return instance.post('/groups/parse_admins', payload);
        },
        startMailing(payload) {
            return instance.post('/groups/start_mailing', payload);
        },
    }
}