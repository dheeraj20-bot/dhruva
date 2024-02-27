"use client";
import Logo from "@/assets/dhruvacodelogo.png"
import Image from "next/image";

export const Footer =()=>{
    return (
       <div className="bg-black ">
         <div className= " text-white grid  place-items-left sm:place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 sm:px:32  py-16 ">
            <div>
                <Image src={Logo} alt="logo" width={100} height={100} />
            </div>
            <div className="flex flex-col gap-2">
                <div>Home</div>
                <div>About</div>
                <div>Contact</div>
            </div>
            <div className="flex flex-col gap-2">
                <div>Home</div>
                <div>About</div>
                <div>Contact</div>
            </div>
           
              <div>
                
              </div>
        </div>
         
         <div className="text-white text-center mt-1 py-2">
             <p>© 2024 DhruvaCode. All rights reserved.</p>
         </div>

       </div>
    )
}