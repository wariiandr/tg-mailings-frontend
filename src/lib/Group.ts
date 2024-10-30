import { Admin } from '@/lib/Admin';

export interface Group {
    readonly _id: string,
    name: string,
    link: string,
    description: string,
    admins: Admin[],
}