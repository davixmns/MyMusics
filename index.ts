import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import {connectToDatabase} from "./database/database";
import schema from './schema'

const app = express();

const server = new ApolloServer({
    schema,
});

async function startServer() {
    await connectToDatabase();
    await server.start();
    server.applyMiddleware({app});
    app.listen({port: 4000}, () => {
        console.log(`Servidor GraphQL iniciado em :4000${server.graphqlPath}`);
    });
}

startServer();