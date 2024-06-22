import {Field, ID, ObjectType} from "type-graphql";
import {IPlaylist} from "../../interfaces/models/IPlaylist";
import {MusicType} from "./MusicType";

@ObjectType()
export class PlaylistsType implements IPlaylist {
    @Field(() => ID, {nullable: true})
    _id: string;

    @Field(() => String)
    name: string;

    @Field(() => String)
    user_id: string;

    @Field(() => [MusicType])
    musics: string[];
}