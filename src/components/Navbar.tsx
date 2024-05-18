"use client";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "@/assets/dhruvacodelogo.png";
import Image from "next/image";
import { IconMenuDeep,IconX } from "@tabler/icons-react";


export const Navbar = ({ className }: { className?: string }) => {
  return (
    <header className='fixed z-50 top-0 w-full py-5  px-3  lg:px-20 drop-shadow-lg flex items-center  justify-between'>
    <Link href="/">
        <h2 className=' text-slate-100 text-sm sm:text-2xl font-bold'>Dhruvacode</h2>
    </Link>
    
    <div>
       
    </div>
  
</header>
  );
};
