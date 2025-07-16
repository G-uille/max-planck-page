import { BaseModel } from "./Base.model";
import { Files } from "./Files-model";
import { Request } from "./Request-model";

export enum UserRoles {
    STUDENT = 'STUDENT',
    TEACHER = 'TEACHER',
}


export interface Users extends BaseModel {
    name: string;
    profile?: Files;
    birthDate?: Date;
    email: string;
    phoneNumber: string;
    about_me?: string;
    rol: UserRoles;
    verified?: boolean;
    request?: Request[];
}
