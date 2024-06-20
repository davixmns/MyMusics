export interface IUserRepository {
    getAll(): Promise<any[]>;
    getById(id: string): Promise<any>;
    create(user: any): Promise<any>;
}