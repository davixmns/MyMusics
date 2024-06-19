// Root Query
import {GraphQLID, GraphQLList, GraphQLObjectType} from "graphql";
import {MusicType, PlaylistType, UserType} from "./types.js";
import User from "./models/UserModel.ts";

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        users: {
            type: new GraphQLList(UserType),
            async resolve(parent, args) {
                return User.find({})
            }
        },
        playlists: {
            type: new GraphQLList(PlaylistType),
            async resolve(parent, args) {
                return Playlist.find({})
            }
        },
        musics: {
            type: new GraphQLList(MusicType),
            async resolve(parent, args) {
                return Music.find({});
            }
        },
        user: {
            type: UserType,
            args: {id: {type: GraphQLID}},
            async resolve(parent, args) {
                return User.findById(args.id);
            }
        },
        playlist: {
            type: PlaylistType,
            args: {id: {type: GraphQLID}},
            async resolve(parent, args) {
                return Playlist.findById(args.id);
            }
        },
        music: {
            type: MusicType,
            args: {id: {type: GraphQLID}},
            async resolve(parent, args) {
                return Music.findById(args.id);
            }
        }
    }
});

export default RootQuery;

