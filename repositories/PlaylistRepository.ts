import {PlaylistModel} from "../models/PlaylistModel";
import {IPlaylistRepository} from "../interfaces/repositories/IPlaylistRepository";
import {UserModel} from "../models/UserModel";

export class PlaylistRepository implements IPlaylistRepository {
    async getAll(): Promise<any[]> {
        const playlists = await PlaylistModel.find({});
        return playlists;
    }

    async getById(id: string): Promise<any> {
        const playlist = await PlaylistModel.findById(id);
        return playlist;
    }

    async create(playlist: any): Promise<any> {
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

