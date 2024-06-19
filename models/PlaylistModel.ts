import mongoose from "mongoose";

const PlaylistSchema = new mongoose.Schema({
    name: {type: String, required: true, minLength: 3},
    user_id: mongoose.Schema.Types.ObjectId,
    musics: [String],
});

const PlaylistModel = mongoose.model("PlaylistModel", PlaylistSchema);

export default PlaylistModel;