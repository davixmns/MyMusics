import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import schema from './schema.js';

const app = express();

// Conexão com o MongoDB
mongoose.connect('mongodb://localhost:27017/myspotfy');

mongoose.connection.once('open', () => {
    console.log('Conectado ao banco de dados MongoDB');
});

// Configuração do Apollo Server
const server = new ApolloServer({
    schema,
    playground: true // Habilita o playground GraphQL
});

await server.start(); // Inicia o servidor Apollo
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
    console.log(`Servidor GraphQL está rodando na porta 4000${server.graphqlPath}`);
});
