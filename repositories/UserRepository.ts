import {UserModel} from "../models/UserModel";
import {IUserRepository} from "../interfaces/repositories/IUserRepository";

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
