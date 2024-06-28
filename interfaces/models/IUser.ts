import {IPlaylist} from "./IPlaylist";

export interface IUser {
    name: string;
    age: number;
    playlists: IPlaylist[];
}