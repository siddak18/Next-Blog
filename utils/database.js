import mongoose from "mongoose";

let isconnected=false;

export const connectTo=async()=>{
    mongoose.set('strictQuery',true);
    if(isconnected){
        console.log("mongodb is connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URL,{
            dbName:"BlogAPPP"
        })
        isconnected=true;
        console.log("mongodb got connected");
    } catch (error) {
        console.log(error);
    }
}