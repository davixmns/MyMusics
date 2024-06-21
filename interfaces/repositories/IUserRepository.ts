import {User} from "../models/User";

export interface IUserRepository {
    getAll(): Promise<any[]>;
    getById(id: string): Promise<any>;
    create(user: User): Promise<any>;
}