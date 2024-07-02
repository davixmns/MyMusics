import {Arg, Mutation, Query, Resolver} from "type-graphql";
import {UserType} from "../types/UserType";
import {IUser} from "../../interfaces/models/IUser";
import {Inject, Service} from "typedi";
import {IUserRepository} from "../../interfaces/repositories/IUserRepository";
import {CreateUserInput} from "../inputs/CreateUserInput";

@Service()
@Resolver(UserType)
export class UserController {

    constructor(
        @Inject("UserRepository") private userRepository: IUserRepository
    ) {}

    @Query(() => [UserType])
    async users() {
        return await this.userRepository.findAll()
    }

    @Query(() => UserType, {nullable: true})
    async user(@Arg("id") id: string) {
        return await this.userRepository.findById(id)
    }

    @Mutation(() => UserType, {nullable: true})
    async createUser(@Arg("user") userInput: CreateUserInput) {
        return await this.userRepository.create(userInput)
    }
}