import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

const PlaylistSchema = new mongoose.Schema({
    name: String,
    user_id: String,
    musics: [String],
});

const MusicSchema = new mongoose.Schema({
    name: String,
    playlist_id: String,
});


export const User = mongoose.model('User', UserSchema);
export const Playlist = mongoose.model('Playlist', PlaylistSchema);
export const Music = mongoose.model('Music', MusicSchema);

