import { connectTo } from "@utils/database";
import blog from "@Models/blog";
export const DELETE=async(req)=>{
    const {postid}=await req.json();
    try {
        await connectTo();
        const post= await blog.findByIdAndDelete({_id:postid});
        return new Response("Del",{status:200});
    } catch (error) {
        console.log(error);
        return new Response("not",{status:500});
    }
}