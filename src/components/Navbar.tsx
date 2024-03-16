"use client";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "@/assets/dhruvacodelogo.png";
import Image from "next/image";
import { IconMenuDeep,IconX } from "@tabler/icons-react";

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
    <div className="w-full relative h-[6rem] antialiased">
      <div className="w-11/12 mt-3 flex mx-auto items-center justify-between">
          <Link href="/">
          <div className="flex items-center gap-2">
          <Image src={Logo} width={60} height={60} alt="DhruvacodeLogo" />
          <p className="text-pretty font-bold mt-3">Dhruvacode.</p>
          </div>
          </Link>
        
        <nav className="">
          <ul className="hidden  lg:flex gap-x-12">
             {navlinks.map((navlink,index)=>(
              <li key={index} className="text-base hover:scale-105  duration-200" >
                <Link href={navlink.url}>
                     {navlink.link}
                </Link>
              </li>
             ))}
          </ul>
        </nav>

        <div className=" bg-sky-600 hidden lg:block rounded-lg hover:bg-teal-700
         duration-200   hover:scale-95">
          <Link href="/netra">
          <button className="py-2 px-4 text-white">Netra</button>
          </Link>
        </div>

        <div className="block lg:hidden">
          {
            mobileMenuOpen?
              <IconX stroke={2} onClick={handleMobileMenuClick} />
            :<IconMenuDeep stroke={2} onClick={handleMobileMenuClick} /> 
          }
        </div>
      </div>

      <div
        className={`absolute w-full mx-auto z-50 transition duration-300 ease-in-out transform ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col h-[40rem] gap-y-4  
        justify-center bg-white z-50 items-center">
          {
            navlinks.map((navlink,index)=>(
              <li key={index} className="text-base" onClick={handleMobileMenuClick}>
              <Link href={navlink.url}>{navlink.link}</Link>
            </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};
