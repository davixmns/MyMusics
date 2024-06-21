import { GraphQLObjectType } from 'graphql';
import {UserRepository} from "../../repositories/UserRepository";
import {PlaylistRepository} from "../../repositories/PlaylistRepository";
import {MusicRepository} from "../../repositories/MusicRepository";
import {UserQueries} from "../queries/UserQueries";
import {PlaylistQueries} from "../queries/PlaylistQueries";
import {MusicQueries} from "../queries/MusicQueries";

export const userQueries = new UserQueries(new UserRepository());
export const playlistQueries = new PlaylistQueries(new PlaylistRepository(), new MusicRepository());
export const musicQueries = new MusicQueries(new MusicRepository());

export const QueryResolver = new GraphQLObjectType({
    name: 'Query',
    fields: {
        users: userQueries.users(),
        user: userQueries.user(),

        playlists: playlistQueries.playlists(),
        playlist: playlistQueries.playlist(),

        musics: musicQueries.musics(),
        music: musicQueries.music(),
    },
})