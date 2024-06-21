import {IPlaylistRepository} from "../../interfaces/repositories/IPlaylistRepository";
import {createPlaylistType} from "../types/PlaylistType";
import {GraphQLID, GraphQLList, GraphQLNonNull, GraphQLObjectType} from "graphql";
import {IMusicRepository} from "../../interfaces/repositories/IMusicRepository";
import {IUserRepository} from "../../interfaces/repositories/IUserRepository";

class PlaylistQueries {
    private readonly playlistRepository: IPlaylistRepository;
    private readonly playlistType: GraphQLObjectType

    constructor(userRepository: IUserRepository, playlistRepository: IPlaylistRepository, musicRepository: IMusicRepository) {
        this.playlistRepository = playlistRepository;
        this.playlistType = createPlaylistType(userRepository, musicRepository);
    }

    playlists() {
        return {
            type: new GraphQLList(this.playlistType),
            resolve: async (parent: any, args: any) : Promise<any> => {
                return await this.playlistRepository.getAll();
            }
        }
    }

    playlist() {
        return {
            type: this.playlistType,
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