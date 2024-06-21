import mongoose from "mongoose";
import {User} from "../interfaces/models/User";

const UserSchema = new mongoose.Schema<User>({
    name: {type: String, required: true, minLength: 3},
    age: {type: Number, required: true},
    playlists: [mongoose.Schema.Types.ObjectId],
});

export const UserModel = mongoose.model("User", UserSchema);


