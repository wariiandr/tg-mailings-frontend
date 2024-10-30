import {AxiosInstance} from "axios";
import {Group} from "@/lib/Group";

export default function(instance: AxiosInstance) {
    return {
        async getAllGroups(): Promise<Group[]> {
            const { data } = await instance.get<Group[]>('/groups');

            return data;
        },
        async postGroup(payload: Group): Promise<Group> {
            const { data } = await instance.post<Group>('/groups', payload);

            return data;
        },
        async putGroup(payload: Group): Promise<Group> {
            const { data } = await instance.put<Group>('/groups', payload);

            return data;
        },

        async parseGroupAdmins(payload: { groupId: string }): Promise<Group> {
            const { data } = await instance.post<Group>('/groups/parse_admins', payload);

            return data;
        },
        async startMailing(payload: { message: string, groupId: string }): Promise<void> {
            const { data } = await instance.post('/groups/start_mailing', payload);
        },
    }
}