import "reflect-metadata";
import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import {connectToDatabase} from "./database/database";
import {createSchema} from "./graphql/schemas/schemas";
import {Container} from "typedi";
import {UserRepository} from "./repositories/UserRepository";

const app = express();

async function startServer() {
    await connectToDatabase()
        .then(async () => {
            console.log('MongoDB conectado com sucesso!');
            const schema = await createSchema();
            const server = new ApolloServer({schema});
            await server.start();

            Container.set('IUserRepository', new UserRepository());

            server.applyMiddleware({app});
            app.listen({port: 4000}, () => {
                console.log(`Servidor GraphQL iniciado em :4000${server.graphqlPath}`);
            })
        })
        .catch((error) => {
            console.log('Erro ao conectar com o MongoDB -> ', error);
        })
}

startServer();