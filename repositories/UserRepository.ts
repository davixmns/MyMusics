import {UserModel} from "../models/UserModel";

export interface IUserRepository {
    getAll(): Promise<any[]>;
    getById(id: string): Promise<any>;
    create(user: any): Promise<any>;
}

export class UserRepository implements IUserRepository {
    create(user: any): Promise<any> {
        return UserModel.create(user);
    }

    getAll(): Promise<any[]> {
        return UserModel.find({});
    }

    getById(id: string): Promise<any> {
        return UserModel.findById(id);
    }
}
