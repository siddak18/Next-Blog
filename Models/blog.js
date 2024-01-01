import mongoose  from "mongoose";
import { model,models,Schema } from "mongoose";

 const blogschema=new Schema({
    content:{
        type:String,
        required:true
    },
    tags:{
        type:String,
        required:true
    },
    userid:{
        type:String,
        required:true
    },
    usename:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
 });


 const blog=models.Blogfinal||model("Blogfinal",blogschema);

 export default blog