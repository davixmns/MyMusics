import {GraphQLID, GraphQLList, GraphQLObjectType, GraphQLString} from "graphql";
import {UserModel} from "../models/UserModel";
import {MusicModel} from "../models/MusicModel";
import {MusicType} from "./MusicType";
import {UserType} from "./UserType";

export const PlaylistType = new GraphQLObjectType({
    name: 'Playlist',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        user: {
            type: UserType,
            async resolve(parent, args) {
                return UserModel.findById(parent.user_id);
            }
        },
        musics: {
            type: new GraphQLList(MusicType),
            async resolve(parent, args) {
                return MusicModel.find({_id: {$in: parent.musics}});
            }
        }
    })
});