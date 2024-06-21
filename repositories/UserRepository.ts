import {UserModel} from "../models/UserModel";
import {IUserRepository} from "../interfaces/repositories/IUserRepository";
import {User} from "../interfaces/models/User";

export class UserRepository implements IUserRepository {
    async create(user: User): Promise<any> {
        return await UserModel.create(user);
    }

    async getAll(): Promise<any[]> {
        return UserModel.find({});
    }

    async getById(id: string): Promise<any> {
        return UserModel.findById(id);
    }
}
