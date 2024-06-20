// Root Query
import {GraphQLID, GraphQLList, GraphQLObjectType} from "graphql";

import {UserModel} from "./models/UserModel";
import {PlaylistModel} from "./models/PlaylistModel";
import {MusicModel} from "./models/MusicModel";

import {UserType} from "./graphql/types/UserType";
import {PlaylistType} from "./graphql/types/PlaylistType";
import {MusicType} from "./graphql/types/MusicType";

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        users: {
            type: new GraphQLList(UserType),
            async resolve(parent, args) {
                return UserModel.find({})
            }
        },
        playlists: {
            type: new GraphQLList(PlaylistType),
            async resolve(parent, args) {
                return PlaylistModel.find({})
            }
        },
        musics: {
            type: new GraphQLList(MusicType),
            async resolve(parent, args) {
                return MusicModel.find({});
            }
        },
        user: {
            type: UserType,
            args: {id: {type: GraphQLID}},
            async resolve(parent, args) {
                return UserModel.findById(args.id);
            }
        },
        playlist: {
            type: PlaylistType,
            args: {id: {type: GraphQLID}},
            async resolve(parent, args) {
                return PlaylistModel.findById(args.id);
            }
        },
        music: {
            type: MusicType,
            args: {id: {type: GraphQLID}},
            async resolve(parent, args) {
                return MusicModel.findById(args.id);
            }
        }
    }
});

export default RootQuery;

