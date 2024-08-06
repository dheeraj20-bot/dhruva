"use client";
import Link from "next/link";
import Image from "next/image";
import { IconMenuDeep,IconX } from "@tabler/icons-react";
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
    <header className='fixed z-50 top-0 w-full py-3  border-b border-gray-700 px-3 lg:px-20  backdrop-blur-md flex items-center  justify-between'>
    <Link href="/">
       <Image src="/logo.png"  width={50} height={50} alt="Logo" className="w-20 h-20"/>
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
    Book a Call
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
  
      <div className=" antialiased flex flex-col space-y-5 text-balance">
      <SheetClose asChild>
                X
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
    
    <div className="absolute inset-0 -z-50">
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
