import {Mutation, Query, Resolver} from "type-graphql";
import {UserType} from "../types/UserType";
import {IUser} from "../../interfaces/models/IUser";
import {Inject, Service} from "typedi";
import {IUserRepository} from "../../interfaces/repositories/IUserRepository";

@Service()
@Resolver(UserType)
export class UserController {

    constructor(
        @Inject("IUserRepository") private userRepository: IUserRepository
    ) {}

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