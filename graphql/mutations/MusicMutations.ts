
import {IMusicRepository} from "../../interfaces/repositories/IMusicRepository";
import {GraphQLInt, GraphQLNonNull, GraphQLString} from "graphql";
import {MusicType} from "../types/MusicType";

class MusicMutations {
    private musicRepository: IMusicRepository

    constructor(musicRepository: IMusicRepository) {
        this.musicRepository = musicRepository;
    }

    addMusic() {
        return {
            type: MusicType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: async (parent: any, args: any): Promise<any> => {
                return await this.musicRepository.create(args);
            }
        }
    }
}

export { MusicMutations };