import {buildSchema} from "type-graphql";
import {UserController} from "../controllers/UserController";
import {Container} from "typedi";

export async function createSchema() {
    return await buildSchema({
        resolvers: [UserController],
        container: Container
    });
}