import blog from "@Models/blog";
import { connectTo } from "@utils/database"

export const POST=async(req)=>{
    const {userid,tags,content,username:usename,image}=await req.json();
    try {
        await connectTo();
        const bl=new blog({
            content,
            userid,
            tags,
            usename,
            image
        });
       await bl.save()
       return new Response(JSON.stringify(bl),{status:201});
    } catch (error) {
        console.log(error);
    }
}

