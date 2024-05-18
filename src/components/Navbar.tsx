"use client";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "@/assets/dhruvacodelogo.png";
import Image from "next/image";
import { IconMenuDeep,IconX } from "@tabler/icons-react";
import { Button } from "./ui/moving-border";

const navlinks = [
  {
   link:"Work",
   url:"#work"
  },
  {
   link:"Services",
   url:"#service"
  },
  {
   link:"Pricing",
   url:"#pricing"
  },
  {
   link:"Products",
   url:"#work"
  },
  {
   link:"Blogs",
   url:"https://blog.dhruvacode.com/"
  },
  
]

export const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className='fixed z-50 top-0 w-full py-5  px-2  lg:px-20 drop-shadow-lg flex items-center  justify-between'>
    <Link href="/">
        <h2 className=' text-slate-100 text-2xl font-bold'>Dhruvacode</h2>
    </Link>
    <div>
        <Button className='  bg-gray-600/80  px-2  text-sm'>Explore More</Button>
    </div>
  
</header>
  );
};
