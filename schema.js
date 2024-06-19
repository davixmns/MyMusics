import {GraphQLSchema} from "graphql";
import RootQuery from "./querys.js";
import Mutation from "./mutations.js";

export default new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
