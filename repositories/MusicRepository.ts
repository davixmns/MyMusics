import {MusicModel} from "../models/MusicModel";
import {IMusicRepository} from "./IMusicRepository";

export class MusicRepository implements IMusicRepository {
    async create(music: any): Promise<any> {
        return MusicModel.create(music);
    }

    async getAll(): Promise<any[]> {
        return MusicModel.find({});
    }

    async getById(id: string): Promise<any> {
        return MusicModel.findById(id);
    }
}