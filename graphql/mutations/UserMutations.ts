import {IUserRepository} from "../../interfaces/repositories/IUserRepository";
import {GraphQLInt, GraphQLNonNull, GraphQLString} from "graphql";
import {UserType} from "../types/UserType";

class UserMutations {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    addUser() {
        return {
            type: UserType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                age: { type: new GraphQLNonNull(GraphQLInt) }
            },
            resolve: async (parent: any, args: any): Promise<any> => {
                return await this.userRepository.create(args);
            }
        }
    }
}

export { UserMutations };
