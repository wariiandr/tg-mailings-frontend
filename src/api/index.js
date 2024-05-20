import instance from "@/api/instance";

import groups from "@/api/groups.js";
import auth from "@/api/auth";

export default {
    groups: groups(instance),
    auth: auth(instance),
}