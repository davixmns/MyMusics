import {Playlist} from "../models/Playlist";

export interface IPlaylistRepository {
    getAll(): Promise<any[]>;
    getAllByUserId(user_id: string): Promise<any[]>;
    getById(id: string): Promise<any>;
    create(playlist: Playlist): Promise<any>;
    addMusicToPlaylist(playlist_id: string, music_id: string): Promise<any>;
}