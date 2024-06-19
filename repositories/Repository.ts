import { Model, Document } from 'mongoose';
import {IRepository} from "./IRepository";

export class Repository<T extends Document> implements IRepository<T> {
    private model: Model<T>;

    constructor(model: Model<T>) {
        this.model = model;
    }

    async getAll(): Promise<T[]> {
        return this.model.find().exec();
    }

    async getById(id: string): Promise<T> {
        return this.model.findById(id).exec();
    }

    async create(item: T): Promise<T> {
        return this.model.create(item);
    }
}
