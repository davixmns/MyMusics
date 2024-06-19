import { UserType } from "../types/UserType";
import UserModel from "../models/UserModel";
import { Repository } from "./Repository";
import { Document } from 'mongoose';

// Define the user document interface
interface IUserDocument extends UserType, Document {}

class UserRepository extends Repository<IUserDocument> {
    constructor() {
        super(UserModel);
    }
}

export default new UserRepository();
