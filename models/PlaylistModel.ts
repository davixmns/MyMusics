import mongoose from "mongoose";

const PlaylistSchema = new mongoose.Schema({
    name: {type: String, required: true, minLength: 3},
    user_id: mongoose.Schema.Types.ObjectId,
    musics: [mongoose.Schema.Types.ObjectId]
});

export const PlaylistModel = mongoose.model("Playlist", PlaylistSchema);