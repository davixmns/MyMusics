import mongoose from "mongoose";
import {IMusic} from "../interfaces/models/IMusic";

const MusicSchema = new mongoose.Schema<IMusic>({
    name: String,
});

export const MusicModel = mongoose.model("Music", MusicSchema);