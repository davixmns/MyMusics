import {GraphQLID, GraphQLObjectType, GraphQLString} from "graphql";

export const MusicType: GraphQLObjectType = new GraphQLObjectType({
    name: 'Music',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
    })
});