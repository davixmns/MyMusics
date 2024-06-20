import mongoose from "mongoose";

const MusicSchema = new mongoose.Schema({
    name: String,
});

export const MusicModel = mongoose.model("Music", MusicSchema);