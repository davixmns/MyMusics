import {Field, ID, ObjectType} from "type-graphql";
import {IPlaylist} from "../../interfaces/models/IPlaylist";
import {MusicType} from "./MusicType";
import {UserType} from "./UserType";

@ObjectType()
export class PlaylistsType implements IPlaylist {
    @Field(() => ID, {nullable: true})
    _id: string;

    @Field(() => String)
    name: string;

    @Field(() => UserType)
    user: UserType;

    @Field(() => [MusicType])
    musics: MusicType[];
}