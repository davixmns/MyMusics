import {GraphQLID, GraphQLObjectType, GraphQLString} from "graphql";

export const MusicType = new GraphQLObjectType({
    name: 'Music',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
    })
});