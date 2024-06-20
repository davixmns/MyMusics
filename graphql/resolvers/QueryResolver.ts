import { GraphQLObjectType } from 'graphql';
import {UserRepository} from "../../repositories/UserRepository";
import {UserQueries} from "../queries/UserQueries";
import {PlaylistRepository} from "../../repositories/PlaylistRepository";
import {PlaylistQueries} from "../queries/PlaylistQueries";
import {MusicRepository} from "../../repositories/MusicRepository";
import {MusicQueries} from "../queries/MusicQueries";

const userQueries = new UserQueries(new UserRepository());
const playlistQueries = new PlaylistQueries(new PlaylistRepository());
const musicQueries = new MusicQueries(new MusicRepository());

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
});