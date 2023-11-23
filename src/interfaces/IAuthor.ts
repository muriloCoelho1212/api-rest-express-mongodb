import { Types } from 'mongoose';

export interface IAuthor {
    id: Types.ObjectId
    name: string;
    nationality: string;
}