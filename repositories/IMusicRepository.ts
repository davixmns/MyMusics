export interface IMusicRepository {
    create(music: any): Promise<any>;
    getAll(): Promise<any[]>;
    getById(id: string): Promise<any>;
}