import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true, minLength: 3},
    age: {type: Number, required: true},
    playlists: [String]
});

const UserModel = mongoose.model("UserModel", UserSchema);

export default UserModel;

