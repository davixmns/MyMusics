import {GraphQLID, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString} from "graphql";
import {PlaylistModel} from "../../models/PlaylistModel";
import {IUserRepository} from "../../interfaces/repositories/IUserRepository";
import {createPlaylistType} from "./PlaylistType";
import {IMusicRepository} from "../../interfaces/repositories/IMusicRepository";
import {IPlaylistRepository} from "../../interfaces/repositories/IPlaylistRepository";


export function createUserType(userRepository: IUserRepository, musicRepository: IMusicRepository, playlistRepository: IPlaylistRepository) {
    const PlaylistType = createPlaylistType(userRepository, musicRepository);

    return new GraphQLObjectType({
        name: 'User',
        fields: () => ({
            id: {type: GraphQLID},
            name: {type: GraphQLString},
            age: {type: GraphQLInt},
            playlists: {
                type: new GraphQLList(PlaylistType),
                async resolve(parent, args) {
                    return await playlistRepository.getAllByUserId(parent.id);
                }
            }
        })
    });
}