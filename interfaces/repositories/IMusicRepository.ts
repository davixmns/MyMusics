import {IMusic} from "../models/IMusic";

export interface IMusicRepository {
    create(music: IMusic): Promise<any>;
    getAll(): Promise<IMusic[]>;
    getAllByPlaylistId(playlistId: string): Promise<IMusic[]>;
    getById(id: string): Promise<IMusic | null>;
}