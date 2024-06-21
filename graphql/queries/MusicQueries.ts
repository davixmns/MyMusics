import {IMusicRepository} from "../../interfaces/repositories/IMusicRepository";
import {MusicType} from "../types/MusicType";
import {GraphQLID, GraphQLList, GraphQLNonNull} from "graphql";

class MusicQueries {
    private musicRepository: IMusicRepository;

    constructor(musicRepository: IMusicRepository) {
        this.musicRepository = musicRepository;
    }

    musics() {
        return {
            type: new GraphQLList(MusicType),
            resolve: async (parent: any, args: any) : Promise<any[]> => {
                return await this.musicRepository.getAll();
            }
        }
    }

    music() {
        return {
            type: MusicType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve: async (parent: any, args: any) : Promise<any> => {
                return await this.musicRepository.getById(args.id);
            }
        }
    }
}

export { MusicQueries };