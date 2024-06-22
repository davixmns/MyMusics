import {IUser} from "../models/IUser";

export interface IUserRepository {
    findAll(): Promise<any[]>;
    findById(id: string): Promise<any>;
    create(user: IUser): Promise<any>;
}