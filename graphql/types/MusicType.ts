import {Field, ID, ObjectType} from "type-graphql";
import {IMusic} from "../../interfaces/models/IMusic";

@ObjectType()
export class MusicType implements IMusic {
    @Field(() => ID, {nullable: true})
    _id: any

    @Field()
    name: string
}