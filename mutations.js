import {GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";
import {MusicType, PlaylistType, UserType} from "./types.js";
import MusicModel from "./models/MusicModel.ts";
import PlaylistModel from "./models/PlaylistModel.ts";
import UserModel from "./models/UserModel.ts";

// Mutations
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                age: { type: new GraphQLNonNull(GraphQLInt) }
            },
            async resolve(parent, args) {
                console.log('addUser')
                let user = new UserModel({
                    name: args.name,
                    age: args.age
                });
                return user.save();
            }
        },
        addPlaylist: {
            type: PlaylistType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                user_id: { type: new GraphQLNonNull(GraphQLID) }
            },
            async resolve(parent, args) {
                let playlist = new PlaylistModel({
                    name: args.name,
                    user_id: args.user_id
                });
                return playlist.save();
            }
        },
        addMusic: {
            type: MusicType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
            },
            async resolve(parent, args) {
                let music = new MusicModel({
                    name: args.name,
                });
                return music.save();
            }
        },
        addMusicToPlaylist: {
            type: PlaylistType,
            args: {
                playlist_id: { type: new GraphQLNonNull(GraphQLID) },
                music_id: { type: new GraphQLNonNull(GraphQLID) }
            },
            async resolve(parent, args) {
                return PlaylistModel.findByIdAndUpdate(
                    args.playlist_id,
                    { $push: { musics: args.music_id } }, // Adiciona o id da música ao array de músicas da playlist
                    { new: true }
                );
            }
        }
    }
});

export default Mutation;