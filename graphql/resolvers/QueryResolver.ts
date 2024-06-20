import { GraphQLObjectType } from 'graphql';
import {IUserRepository} from "../../repositories/IUserRepository";
import {UserRepository} from "../../repositories/UserRepository";
import {UserQueries} from "../queries/UserQueries";
import {PlaylistRepository} from "../../repositories/PlaylistRepository";
import {IPlaylistRepository} from "../../repositories/IPlaylistRepository";
import {PlaylistQueries} from "../queries/PlaylistQueries";

const userRepository: IUserRepository = new UserRepository();
const playlistRepository: IPlaylistRepository = new PlaylistRepository();

const userQueries = new UserQueries(userRepository);
const playlistQueries = new PlaylistQueries(playlistRepository);

export const QueryResolver = new GraphQLObjectType({
    name: 'Query',
    fields: {
        users: userQueries.users(),
        user: userQueries.user(),

        playlists: playlistQueries.playlists(),
        playlist: playlistQueries.playlist(),


    },
});
