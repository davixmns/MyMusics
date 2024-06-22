import {Field, ID, ObjectType} from "type-graphql";
import {IPlaylist} from "../../interfaces/models/IPlaylist";
import {MusicType} from "./MusicType";

@ObjectType()
export class PlaylistsType implements IPlaylist {
    @Field(() => ID, {nullable: true})
    _id: string;

    @Field()
    name: string;

    @Field()
    user_id: string;

    @Field(() => [MusicType])
    musics: string[];
}