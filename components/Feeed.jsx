"use client"
import "../Styles/globals.css"
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react"

const Feeed = () => {
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
        }),
        cache:"no-store"
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
    <div className="w-11/12  par-grid-change">
      { 
        post.map((item,idx)=>{
          return (
            <div key={idx} className="grid-change shadow-2xl p-3 h-max">
              <div className="flex justify-between w-full items-center">
              <h1 className="text-xl font-semibold" >{item.usename}</h1>
             <Image alt="img" height={35} width={35} src={item.image}></Image>
              </div>
             <p className="text-justify text-slate-500 my-1  font-medium" >{item.content}</p> 
             <div className="flex w-full justify-between" >
             <h1 className=" bg-slate-400 rounded-xl flex justify-center align-middle items-center px-2 pb-1 w-max">{item.tags}</h1>
             <div className={`${session?.user.id===item.userid?'flex':'hidden'}`}>
             <button className="black_btn" onClick={() => hadledelete(item._id)}>Delete</button>
             </div>
             </div>  
             </div>
             )
        })
      }
    </div>
  )
}

export default Feeed