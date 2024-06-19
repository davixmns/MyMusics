import {GraphQLID, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString} from "graphql";
import PlaylistModel from "../models/PlaylistModel";
import PlaylistType from "./PlaylistType";

export const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        playlists: {
            type: new GraphQLList(PlaylistType),
            async resolve(parent, args) {
                return PlaylistModel.find({ user_id: parent.id });
            }
        }
    })
});