import {Music} from "../models/Music";

export interface IMusicRepository {
    create(music: Music): Promise<any>;
    getAll(): Promise<Music[]>;
    getAllByPlaylistId(playlistId: string): Promise<Music[]>;
    getById(id: string): Promise<Music | null>;
}