import {Inject, Service} from "typedi";
import {Resolver} from "type-graphql";
import {PlaylistsType} from "../types/PlaylistsType";
import {IPlaylistRepository} from "../../interfaces/repositories/IPlaylistRepository";


@Service()
@Resolver(PlaylistsType)
export class PlaylistController {

    constructor(
        @Inject("PlaylistRepository") private playlistRepository: IPlaylistRepository
    ) {}

}