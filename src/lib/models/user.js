import { Schema, model , models } from "mongoose";


const userSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    userPass: {
        type: String,
        required: true
    },
    isAvatar: {
        type: Boolean,
        default: false
    },
    avatarImage: {
        type: String,
        default: ""
    }
})



export const UsersModel =  models.users || model("users",userSchema);
