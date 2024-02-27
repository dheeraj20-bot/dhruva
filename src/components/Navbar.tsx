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

                    <MenuItem setActive={setActive} active={active} item="Services">
                       <div className="flex flex-col space-y-4 text-sm">
                       <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
                       </div>
                    </MenuItem>

                  <Link href="/contact">
                    <MenuItem setActive={setActive} active={active} item="Contact us">
                    </MenuItem>
                  </Link>
              </Menu>
        </div>
    )

}