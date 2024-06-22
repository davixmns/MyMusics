import mongoose from "mongoose";
import {IUser} from "../interfaces/models/IUser";

const UserSchema = new mongoose.Schema<IUser>({
    name: {type: String, required: true, minLength: 3},
    age: {type: Number, required: true},
    playlists: [mongoose.Schema.Types.ObjectId],
});

export const UserModel = mongoose.model("User", UserSchema);


