import {MusicModel} from "../models/MusicModel";
import {IMusicRepository} from "../interfaces/repositories/IMusicRepository";
import {Music} from "../interfaces/models/Music";

export class MusicRepository implements IMusicRepository {
    async create(music: Music): Promise<any> {
        return MusicModel.create(music);
    }

    async getAll(): Promise<any[]> {
        return MusicModel.find({});
    }

    async getById(id: string): Promise<any> {
        return MusicModel.findById(id);
    }
}