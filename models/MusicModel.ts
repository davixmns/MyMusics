import mongoose from "mongoose";

const MusicSchema = new mongoose.Schema({
    name: String,
    artist_id: mongoose.Schema.Types.ObjectId,
});

const MusicModel = mongoose.model("MusicModel", MusicSchema);

export default MusicModel;