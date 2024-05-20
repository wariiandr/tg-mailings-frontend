import instance from "@/api/instance";

import groups from "@/api/groups.js";

export default {
    groups: groups(instance),
}