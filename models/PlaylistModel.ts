import mongoose from "mongoose";
import {Playlist} from "../interfaces/models/Playlist";

const PlaylistSchema = new mongoose.Schema<Playlist>({
    name: {type: String, required: true, minLength: 3},
    user_id: mongoose.Schema.Types.ObjectId,
    musics: [mongoose.Schema.Types.ObjectId]
});

export const PlaylistModel = mongoose.model("Playlist", PlaylistSchema);