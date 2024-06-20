import {GraphQLSchema} from "graphql";
import {QueryResolver} from "../resolvers/QueryResolver";
import {MutationResolver} from "../resolvers/MutationResolver";

export default new GraphQLSchema({
    query: QueryResolver,
    mutation: MutationResolver
});
