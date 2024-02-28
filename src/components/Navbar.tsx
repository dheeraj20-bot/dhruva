"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Logo from "@/assets/dhruvacodelogo.png"
import Image from "next/image";



export const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
    

    return (
        <div className={cn("fixed top-3 inset-x-0  max-w-2xl mx-auto z-50", className)}>
              <Menu  setActive={setActive}>
                  <Link href="/">
                  <Image className="w-20 h-20" alt="Dhruvacode_logo" src={Logo}/>
                  </Link>

                    <Link href="#service" scroll={true}>
                    <MenuItem setActive={setActive} active={active} item="Services">
                    </MenuItem>
                    </Link>
                   

                  <Link href="#contact">
                    <MenuItem setActive={setActive} active={active} item="Contact us">
                    </MenuItem>
                  </Link>
              </Menu>
        </div>
    )

}