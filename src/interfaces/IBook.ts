import { Types } from "mongoose";

export interface IBook {
    id: Types.ObjectId;
    title: string;
    publishing_company: string;
    price: number;
    number_pages: number
}