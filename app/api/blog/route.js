import blog from "@Models/blog";
import { connectTo } from "@utils/database";
export const GET=async(req,res)=>{

    try {
        await connectTo();
        const res=await blog.find({});
       return new Response(JSON.stringify(res),{status:202});
    } catch (error) {
        console.log(error);
    }
}