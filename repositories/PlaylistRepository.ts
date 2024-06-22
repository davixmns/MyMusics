import {PlaylistModel} from "../models/PlaylistModel";
import {IPlaylistRepository} from "../interfaces/repositories/IPlaylistRepository";
import {UserModel} from "../models/UserModel";
import {IPlaylist} from "../interfaces/models/IPlaylist";

export class PlaylistRepository implements IPlaylistRepository {
    async getAll(): Promise<any[]> {
        return PlaylistModel.find({});
    }

    async getAllByUserId(user_id: string): Promise<any[]> {
        return PlaylistModel.find({user_id});
    }

    async getById(id: string): Promise<any> {
        return PlaylistModel.findById(id);
    }

    async create(playlist: IPlaylist): Promise<any> {
        const newPlaylist = await PlaylistModel.create(playlist)
        await UserModel.findByIdAndUpdate(
            playlist.user_id,
            {$push: {playlists: newPlaylist._id}},
            {new: true}
        )
        return newPlaylist;
    }

    async addMusicToPlaylist(playlist_id: string, music_id: string): Promise<any> {
        return PlaylistModel.findByIdAndUpdate(
            playlist_id,
            {$push: {musics: music_id}},
            {new: true}
        );
    }
}

