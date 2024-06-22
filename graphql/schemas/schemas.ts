import {buildSchema} from "type-graphql";
import {UserController} from "../../controllers/UserController";

async function createSchema() {
    return await buildSchema({
        resolvers: [UserController],
    });
}