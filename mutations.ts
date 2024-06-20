import {GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";
import {UserModel} from "./models/UserModel";
import {PlaylistModel} from "./models/PlaylistModel";
import {MusicModel} from "./models/MusicModel";
import {MusicType} from "./types/MusicType";
import {PlaylistType} from "./types/PlaylistType";
import {UserType} from "./types/UserType";
import {UserRepository} from "./repositories/UserRepository";
import {PlaylistRepository} from "./repositories/PlaylistRepository";

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
                return await new UserRepository().create(args);
            }
        },
        addPlaylist: {
            type: PlaylistType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                user_id: { type: new GraphQLNonNull(GraphQLID) }
            },
            async resolve(parent, args) {
                return new PlaylistRepository().create(args);
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