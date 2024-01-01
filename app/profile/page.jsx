"use client"

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react"
const page = () => {
  const [post,setpost]=useState([]);
  const {data :session}=useSession();
  useEffect(()=>{
      const ch=  async()=>{
           const res=await fetch('/api/blog/',{
            method:"GET",
            cache:"no-store"
            })
            const data=await res.json();
          setpost(data);
        }
      ch();
  },[]);

  const hadledelete=async(itemid)=>{
    try {
      const res=  await fetch('/api/delete',{
        method:'DELETE',
        body:JSON.stringify({
          postid:itemid
        })
     })
     if(res.ok){
      const updatedposts= post.filter((item)=>item._id!=itemid);
      setpost(updatedposts);
     }else{
      console.log("cannot be deleted");
     }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <section className='flex flex-col w-full items-center mt-20'>
    <div className="w-11/12  par-grid-change">
      { 
        post.map((item,idx)=>{
          return (
            <div key={idx} className={` grid-change shadow-2xl p-3 h-max ${session?.user.id===item.userid?'visible':'hidden'}`}>
              <div className="flex justify-between w-full items-center">
              <h1 className="text-xl font-semibold" >{item.usename}</h1>
             <Image alt="img" height={35} width={35} src={item.image}></Image>
              </div>
             <p className="text-justify text-slate-500 my-1  font-medium" >{item.content}</p> 
             <div className="flex w-full justify-between" >
             <h1 className=" bg-slate-400 rounded-xl flex justify-center align-middle items-center px-2 pb-1 w-max">{item.tags}</h1>
             <div>
             <button className="black_btn" onClick={() => hadledelete(item._id)}>Delete</button>
             </div>
             </div>  
             </div>
             )
        })
      }
    </div>
    </section>
  )
}

export default page