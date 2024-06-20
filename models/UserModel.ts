import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true, minLength: 3},
    age: {type: Number, required: true},
    playlists: [mongoose.Schema.Types.ObjectId]
});

export const UserModel = mongoose.model("User", UserSchema);


