import {IMusic} from "./IMusic";
import {IUser} from "./IUser";

export interface IPlaylist {
    name: string;
    user: IUser;
    musics: IMusic[];
}