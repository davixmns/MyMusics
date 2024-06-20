import {IPlaylistRepository} from "../../interfaces/repositories/IPlaylistRepository";
import {PlaylistType} from "../types/PlaylistType";
import {GraphQLID, GraphQLNonNull, GraphQLString} from "graphql";


class PlaylistMutations {
    private playlistRepository: IPlaylistRepository;

    constructor(playlistRepository: IPlaylistRepository) {
        this.playlistRepository = playlistRepository;
    }

    addPlaylist() {
        return {
            type: PlaylistType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                user_id: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve: async (parent: any, args: any) : Promise<any> => {
                return await this.playlistRepository.create(args);
            }
        }
    }

    addMusicToPlaylist() {
        return {
            type: PlaylistType,
            args: {
                playlist_id: { type: new GraphQLNonNull(GraphQLID) },
                music_id: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve: async (parent: any, args: any) : Promise<any> => {
                return await this.playlistRepository.addMusicToPlaylist(args.playlist_id, args.music_id);
            }
        }
    }
}

export { PlaylistMutations };