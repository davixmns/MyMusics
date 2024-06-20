export interface IPlaylistRepository {
    getAll(): Promise<any[]>;
    getById(id: string): Promise<any>;
    create(playlist: any): Promise<any>;
    addMusicToPlaylist(playlist_id: string, music_id: string): Promise<any>;
}