"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from "../Public/assets/images/logo.svg"
import { signIn,getProviders,useSession, signOut } from 'next-auth/react'

const Nav = () => {
    const {data:session}=useSession()
    const [provider,setprovider]=useState(null);
    const [isScoll,setScroll]=useState(false);
    useEffect(() => {
        (async () => {
          const res = await getProviders();
          setprovider(res);
         
        })
        ();
      }, []);
    
    const handelsignout=async()=>{
        await signOut();
        
    }
    // window.addEventListener("scroll",()=>{
    //   if(window.scrollY>10){
    //     setScroll(true);
    //   }else{
    //     setScroll(false);
    //   }
    // });
  return (
    <header  className={`  transition  duration-500 w-full fixed py-4 flex ${isScoll?'bg-white border-b-black border-b-0 shadow-xl':'bg-transparent'} z-50 justify-center items-center`}>
    <nav className=' w-11/12    py-4 flex justify-between'>
        <Link href="/" className='flex gap-2'>
            <Image src={logo} width={30} alt='icon'  height={30}/>
            <p className='hidden md:flex text-2xl font-bold '>Blog app</p>
        </Link>

        {
            session?.user?(
            <div className='flex gap-2'>
                <Link href="/createpost">
                    <button className='black_btn'>CreatePost</button>
                </Link>
                <button className='rounded-full border border-black  py-1.5 px-5 text-black transition-all hover:bg-black hover:text-white text-center text-sm font-inter flex items-center justify-center' onClick={handelsignout}>Signout</button>
              <Link href="/profile">
                <Image className='rounded-sm' src={session?.user?.image} width={35} alt='icon'  height={35}/>
                </Link>
            </div>):
            <div className="flex gap-2">
            {provider &&
                  Object.values(provider).map((provider) => (
                    <button
                      type='button'
                      key={provider.name}
                      onClick={() => {
                        signIn(provider.id);
                      }}
                      className='black_btn'
                    >
                      Sign in
                    </button>
                  ))
                  }
            </div>
        }
        
    </nav>
    </header>
  )
}

export default Nav