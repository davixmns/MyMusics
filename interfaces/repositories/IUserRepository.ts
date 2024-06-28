import {IUser} from "../models/IUser";

export interface IUserRepository {
    create(user: IUser): Promise<any>;
    findAll(): Promise<any[]>;
    findById(id: string): Promise<any>;
}