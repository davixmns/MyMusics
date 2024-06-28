import { UserModel } from "../models/UserModel";
import { IUser } from "../interfaces/models/IUser";
import {IUserRepository} from "../interfaces/repositories/IUserRepository";

export class UserRepository implements IUserRepository {
    async create(user: IUser): Promise<any> {
        return await UserModel.create(user);
    }

    async findAll(): Promise<any[]> {
        return UserModel.find({});
    }

    async findById(id: string): Promise<any> {
        return UserModel.findById(id);
    }
}
