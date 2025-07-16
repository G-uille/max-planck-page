import { BaseModel } from './Base.model'

export enum FileType {
    IMAGE = 'IMAGE',
    PDF = 'PDF',
    CSV = 'CSV',
}

export interface Files extends BaseModel{
    url: string;
    fileType: FileType;
}
