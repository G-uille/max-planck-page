import { BaseModel } from "./Base.model";

export enum ClassesMode {
    PRESENCIAL = 'PRESENCIAL',
    VIRTUAL = 'VIRTUAL',
}

export enum Fee {
    HORA = 'HORA',
    CLASE = 'CLASE',
}

export interface Classes extends BaseModel {
    fileUrl: string;
    name: string;
    popupFile: string;
    contactLink: string;
    mode: ClassesMode[];
    question?: string;
    shortDescription: string;
    description: string;
    formLink?: string;
}
