import {Mutation, Query, Resolver} from "type-graphql";
import {UserType} from "../graphql/types/UserType";
import {IUserRepository} from "../interfaces/repositories/IUserRepository";
import {IUser} from "../interfaces/models/IUser";

@Resolver(UserType)
export class UserController {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    @Query(() => [UserType])
    async users() {
        return await this.userRepository.findAll()
    }

    @Query(() => UserType)
    async user(id: string) {
        return await this.userRepository.findById(id)
    }

    @Mutation(() => UserType)
    async createUser(user: IUser) {
        return await this.userRepository.create(user)
    }
}