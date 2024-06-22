import mongoose from "mongoose";
import {IPlaylist} from "../interfaces/models/IPlaylist";

const PlaylistSchema = new mongoose.Schema<IPlaylist>({
    name: {type: String, required: true, minLength: 3},
    user_id: mongoose.Schema.Types.ObjectId,
    musics: [mongoose.Schema.Types.ObjectId]
});

export const PlaylistModel = mongoose.model("Playlist", PlaylistSchema);