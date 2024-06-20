import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const databaseName = process.env.DATABASE_NAME;
const databaseUser = process.env.DATABASE_USER;
const databasePassword = process.env.DATABASE_PASSWORD;

export async function connectToDatabase() {
    await mongoose.connect(`mongodb://localhost:27017/${databaseName}`, {
        user: databaseUser,
        pass: databasePassword,
        authSource: 'admin', // Adicione esta linha para especificar a base de dados de autenticação
    }).then(() => {
        console.log('Conectado com o MongoDB');
    }).catch((error) => {
        console.error('Erro ao conectado com o MongoDB -> ', error);
    })
}
