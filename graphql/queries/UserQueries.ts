import {GraphQLID, GraphQLList} from "graphql";
import {UserType} from "../types/UserType";
import {IUserRepository} from "../../interfaces/repositories/IUserRepository";

class UserQueries {
    private userRepository: IUserRepository

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    users() {
        return {
            type: new GraphQLList(UserType),
            resolve: async (parent: any, args: any) : Promise<any> => {
                return await this.userRepository.getAll()
            }
        }
    }

    user() {
        return {
            type: UserType,
            args: {id: {type: GraphQLID}},
            resolve: async (parent: any, args: any) : Promise<any> => {
                return await this.userRepository.getById(args.id)
            }
        }
    }
}

export {UserQueries}