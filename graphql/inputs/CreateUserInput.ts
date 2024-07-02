import {Field, InputType} from "type-graphql";
import {IUser} from "../../interfaces/models/IUser";

@InputType()
export class CreateUserInput implements Partial<IUser> {

    @Field(() => String)
    name: string;

    @Field(() => Number)
    age: number;
}