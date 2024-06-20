import {GraphQLSchema} from "graphql";
import RootQuery from "./querys";
import Mutation from "./graphql/mutations/mutations";

export default new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
