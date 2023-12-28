"use client"
import Form from '@components/Form'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import  { useRouter } from 'next/navigation'

const page = () => {
    const router=useRouter()
    const {data:session}=useSession();
    const [post,setpost]=useState({content:"",tags:""});
    const [submitting,setsubmitting]=useState(false);
    const handlesubmit=async(e)=>{
         e.preventDefault();
         try {
          const res=  await fetch('/api/blog/final',{
                method:'POST',
                body:JSON.stringify({
                  content:post.content,
                  tags:post.tags,
                  userid:session?.user.id,
                  username:session?.user.name,
                  image:session?.user.image
                })
             })

             if(res.status==201){
                router.push("/");
             }

         } catch (error) {
            console.log(error)
         } 
    }
  return (
    
    <div className='w-full flex flex-col justify-center items-center'>
        { session?.user?
        (<Form
        type="create"
        post={post}
        setpost={setpost}
        submitting={submitting}
        hadlesubmit={handlesubmit} >

        </Form>):(
            <h1>login first</h1>
        )

        }
        
    </div>
    
  )
}

export default page