import mongoose from "mongoose";
import {Music} from "../interfaces/models/Music";

const MusicSchema = new mongoose.Schema<Music>({
    name: String,
});

export const MusicModel = mongoose.model("Music", MusicSchema);