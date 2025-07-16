import { BaseModel } from "./Base.model";
import { Department } from "./Department-model";
import { Cities } from "./Cities-model";
import { District } from "./District-model";

export interface Address extends  BaseModel{
    department: Department;
    city: Cities;
    district: District;
    address: string;
    maps_link?: string;
    minimum_price?: number;
}
