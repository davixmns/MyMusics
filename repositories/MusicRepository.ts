import {MusicModel} from "../models/MusicModel";
import {IMusicRepository} from "../interfaces/repositories/IMusicRepository";
import {IMusic} from "../interfaces/models/IMusic";

export class MusicRepository implements IMusicRepository {
    async create(music: IMusic): Promise<any> {
        return MusicModel.create(music);
    }

    async getAll(): Promise<any[]> {
        return MusicModel.find({});
    }

    async getAllByPlaylistId(playlistId: string): Promise<any[]> {
        return MusicModel.find({playlist: playlistId});
    }

    async getById(id: string): Promise<any> {
        return MusicModel.findById(id);
    }
}