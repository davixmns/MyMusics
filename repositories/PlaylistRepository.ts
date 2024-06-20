import {PlaylistModel} from "../models/PlaylistModel";

export interface IPlaylistRepository {
    getAll(): Promise<any[]>;
    getById(id: string): Promise<any>;
    create(playlist: any): Promise<any>;
}

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
}

