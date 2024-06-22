import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const databaseName = process.env.DATABASE_NAME;
const databaseUser = process.env.DATABASE_USER;
const databasePassword = process.env.DATABASE_PASSWORD;

export async function connectToDatabase() {
    return await mongoose.connect(`mongodb://localhost:27017`, {
        user: databaseUser,
        dbName: databaseName,
        pass: databasePassword,
        authSource: 'admin'
    })
}
