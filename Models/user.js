import mongoose, { Schema ,model,models } from "mongoose";

const userschema=new Schema({
    email:{
        type:String,
        required:[true,"plaese provide your email"],
        unique:[true,"email is already there"]
    },
    username:{
        type:String,
        required:true
    },
    image:{
        type:String
    }
});


const User= models.User ||model("User",userschema);

export default User