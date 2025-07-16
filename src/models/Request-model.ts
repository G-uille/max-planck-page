import { BaseModel } from "./Base.model";
import { Classes, ClassesMode } from "./Classes.model";
import { Users } from "./Users-model";

export enum RequestStatus {
    APPROVED = 'APPROVED',
    REFUSED = 'REFUSED',
    CANCELED = 'CANCELED',
    PENDING = 'PENDING'
}

export interface Request extends BaseModel{
    class: Classes;
    message: string;
    mode: ClassesMode[] | ClassesMode;
    status: RequestStatus;
    reasonToCanceled?: string | null;
    time: string;
    user: Users;
    teacher: Users;
}