import {PlaylistModel} from "../models/PlaylistModel";
import {IPlaylistRepository} from "../interfaces/repositories/IPlaylistRepository";

export class PlaylistRepository implements IPlaylistRepository {
    async create(playlist: any): Promise<any> {
        return PlaylistModel.create(playlist);
    }

    async getAll(): Promise<any[]> {
        return PlaylistModel.find({});
    }

    async getById(id: string): Promise<any> {
        return PlaylistModel.findById(id);
    }

    async addMusicToPlaylist(playlist_id: string, music_id: string): Promise<any> {
        return PlaylistModel.findByIdAndUpdate(
            playlist_id,
            {$push: {musics: music_id}},
            {new: true}
        );
    }
}

