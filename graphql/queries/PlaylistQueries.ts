import {IPlaylistRepository} from "../../interfaces/repositories/IPlaylistRepository";
import {PlaylistType} from "../types/PlaylistType";
import {GraphQLID, GraphQLList, GraphQLNonNull} from "graphql";

class PlaylistQueries {
    private playlistRepository: IPlaylistRepository;

    constructor(playlistRepository: IPlaylistRepository) {
        this.playlistRepository = playlistRepository;
    }

    playlists() {
        return {
            type: new GraphQLList(PlaylistType),
            resolve: async (parent: any, args: any) : Promise<any> => {
                return await this.playlistRepository.getAll();
            }
        }
    }

    playlist() {
        return {
            type: PlaylistType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve: async (parent: any, args: any) : Promise<any> => {
                return await this.playlistRepository.getById(args.id);
            }
        }
    }
}

export { PlaylistQueries };