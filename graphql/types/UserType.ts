import {Field, ID, ObjectType} from "type-graphql";
import {IUser} from "../../interfaces/models/IUser";
import {PlaylistsType} from "./PlaylistsType";

@ObjectType()
export class UserType implements IUser {
    @Field(() => ID, {nullable: true})
    _id?: string

    @Field()
    name: string

    @Field()
    age: number

    @Field(() => [PlaylistsType])
    playlists: string[]
}