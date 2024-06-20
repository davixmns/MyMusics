import {GraphQLObjectType} from "graphql";
import {UserRepository} from "../../repositories/UserRepository";
import {PlaylistRepository} from "../../repositories/PlaylistRepository";
import {UserMutations} from "./UserMutations";
import {PlaylistMutations} from "./PlaylistMutations";
import {MusicRepository} from "../../repositories/MusicRepository";
import {MusicMutations} from "./MusicMutations";

const userMutations = new UserMutations(new UserRepository())
const playlistMutations = new PlaylistMutations(new PlaylistRepository());
const musicMutations = new MusicMutations(new MusicRepository());

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: userMutations.addUser(),
        addPlaylist: playlistMutations.addPlaylist(),
        addMusic: musicMutations.addMusic(),
        addMusicToPlaylist: playlistMutations.addMusicToPlaylist(),
    }
});

export default Mutation;