import mongoose from "mongoose";

export async function connectToDatabase() {
    await mongoose.connect('mongodb://localhost:27017/myspotfy')
        .then(() => console.log('Conectado ao MongoDB'))
        .catch(err => console.error(err));
}