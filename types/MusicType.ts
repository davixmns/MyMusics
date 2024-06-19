import {GraphQLID, GraphQLObjectType, GraphQLString} from "graphql";

const MusicType = new GraphQLObjectType({
    name: 'Music',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
    })
});

export default MusicType;