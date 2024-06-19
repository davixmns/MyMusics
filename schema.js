import { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLID, GraphQLList, GraphQLNonNull, GraphQLInt } from 'graphql';
import { User, Playlist, Music } from './models.js';

// Definindo tipos GraphQL
const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        playlists: {
            type: new GraphQLList(PlaylistType),
            resolve(parent, args) {
                return Playlist.find({ user_id: parent.id });
            }
        }
    })
});

const PlaylistType = new GraphQLObjectType({
    name: 'Playlist',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        user: {
            type: UserType,
            resolve(parent, args) {
                return User.findById(parent.user_id);
            }
        },
        musics: {
            type: new GraphQLList(MusicType),
            resolve(parent, args) {
                return Music.find({ _id: { $in: parent.musics } });
            }
        }
    })
});

const MusicType = new GraphQLObjectType({
    name: 'Music',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        playlist: {
            type: PlaylistType,
            resolve(parent, args) {
                return Playlist.findById(parent.playlist_id);
            }
        }
    })
});

// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return User.findById(args.id);
            }
        },
        playlist: {
            type: PlaylistType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Playlist.findById(args.id);
            }
        },
        music: {
            type: MusicType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Music.findById(args.id);
            }
        },
        users: {
            type: new GraphQLList(UserType),
            async resolve(parent, args) {
                return await User.find({});
            }
        },
        playlists: {
            type: new GraphQLList(PlaylistType),
            resolve(parent, args) {
                return Playlist.find({});
            }
        },
        musics: {
            type: new GraphQLList(MusicType),
            resolve(parent, args) {
                return Music.find({});
            }
        }
    }
});

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
            resolve(parent, args) {
                let user = new User({
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
            resolve(parent, args) {
                let playlist = new Playlist({
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
                playlist_id: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args) {
                let music = new Music({
                    name: args.name,
                    playlist_id: args.playlist_id
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
            resolve(parent, args) {
                return Playlist.findByIdAndUpdate(
                    args.playlist_id,
                    { $push: { musics: args.music_id } },
                    { new: true }
                );
            }
        }
    }
});

export default new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
