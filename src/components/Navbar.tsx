"use client";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "@/assets/dhruvacodelogo.png";
import Image from "next/image";
import { IconMenuDeep,IconX } from "@tabler/icons-react";
import { Button } from "./ui/moving-border";
import {motion} from "framer-motion"
import {  Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


export const Navbar = ({ className }: { className?: string }) => {
  return (
    <header className='fixed z-50 top-0 w-full py-5  border-b border-gray-700 px-3 lg:px-20  backdrop-blur-md flex items-center  justify-between'>
    <Link href="/">
        <h2 className='  bg-clip-text text-transparent bg-gradient-to-b 
         from-white  to-gray-600 text-sm sm:text-2xl font-bold'> Druvacode</h2>
    </Link>
   
    
    <nav className="hidden sm:flex space-x-6">
    <Link href="/">
        <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} 
        className='  bg-clip-text text-transparent bg-gradient-to-b 
         from-white  to-gray-600 text-sm sm:text-xl font-bold'> Home</motion.h2>
    </Link>
    <Link href="/#service" >
        <h2 className='  bg-clip-text text-transparent bg-gradient-to-b 
         from-white  to-gray-600 text-sm sm:text-xl font-bold'>Services</h2>
    </Link>
    <Link href="/">
        <h2 className='  bg-clip-text text-transparent bg-gradient-to-b 
         from-white  to-gray-600 text-sm sm:text-xl font-bold'>Blog</h2>
    </Link>
    </nav>

   
    <Link className=" hidden sm:inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm" href="/">
       Explore more
    </Link>

    <div className="block sm:hidden">
    <Sheet>
  <SheetTrigger>
  <IconMenuDeep stroke={2} />
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle className="mt-2 mb-6 gradienttext">Welcome to Dhruvacode!</SheetTitle>
    </SheetHeader>
    <SheetDescription>

      
      
      <div className=" antialiased flex flex-col space-y-5 text-balance">
        <SheetClose asChild> 
        <Link href="/">
        <h2 
        className='  bg-clip-text text-transparent bg-gradient-to-b 
         from-white  to-gray-600 text-sm sm:text-xl font-bold'> Home</h2>
        </Link>
    </SheetClose>

        <SheetClose asChild>
        <Link href="/#service" >
        <h2 className='  bg-clip-text text-transparent bg-gradient-to-b 
         from-white  to-gray-600 text-sm sm:text-xl font-bold'>Services</h2>
    </Link>
        </SheetClose>

        <SheetClose asChild>
          
    <Link href="/">
        <h2 className='bg-clip-text text-transparent bg-gradient-to-b 
         from-white  to-gray-600 text-sm sm:text-xl font-bold'>Blog</h2>
    </Link>
        </SheetClose>

    </div>
    </SheetDescription>
    <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
         
        </Canvas>
      </div>
  </SheetContent>
  

</Sheet>

    </div>
  
</header>
  );
};
