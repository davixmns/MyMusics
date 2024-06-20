import {GraphQLObjectType} from "graphql";
import {UserMutations} from "../mutations/UserMutations";
import {UserRepository} from "../../repositories/UserRepository";
import {PlaylistRepository} from "../../repositories/PlaylistRepository";
import {PlaylistMutations} from "../mutations/PlaylistMutations";
import {MusicRepository} from "../../repositories/MusicRepository";
import {MusicMutations} from "../mutations/MusicMutations";

const userMutations = new UserMutations(new UserRepository());
const playlistMutations = new PlaylistMutations(new PlaylistRepository());
const musicMutations = new MusicMutations(new MusicRepository());

export const MutationResolver = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: userMutations.addUser(),
        
        addPlaylist: playlistMutations.addPlaylist(),
        addMusicToPlaylist: playlistMutations.addMusicToPlaylist(),
        
        addMusic: musicMutations.addMusic(),
    }
})