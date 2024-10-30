import instance from "@/api/instance";

import groups from "@/api/groups";
import auth from "@/api/auth";

export default {
    groups: groups(instance),
    auth: auth(instance),
}