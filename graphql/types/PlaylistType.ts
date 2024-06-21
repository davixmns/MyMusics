import {GraphQLID, GraphQLList, GraphQLObjectType, GraphQLString} from "graphql";
import {MusicType} from "./MusicType";
import {UserType} from "./UserType";
import {IUserRepository} from "../../interfaces/repositories/IUserRepository";
import {IMusicRepository} from "../../interfaces/repositories/IMusicRepository";

export function createPlaylistType(userRespository: IUserRepository, musicRepository: IMusicRepository) {
    return new GraphQLObjectType({
        name: 'Playlist',
        fields: () => ({
            id: {type: GraphQLID},
            name: {type: GraphQLString},
            user: {
                type: UserType,
                async resolve(parent, args) {
                    return await userRespository.getById(parent.user);
                }
            },
            musics: {
                type: new GraphQLList(MusicType),
                async resolve(parent, args) {
                    return await musicRepository.getAllByPlaylistId(parent.id);
                }
            }
        })
    });
}
